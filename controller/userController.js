
const USER_SCHEMA =  require("../models/userModels")
const asyncHandler = require("express-async-handler")
//!Add user //
exports.addUser = asyncHandler(async(req,res)=>{
let payload = req.body;
await USER_SCHEMA.create(payload);
// res.send("Data Addded")
res.status(201).json({
    message:"user creeted succesfully",
    payload,
})
})

//!Fethcing all user//
exports.fetchUsers =asyncHandler(async(req,res)=>{
 let users =await USER_SCHEMA.find();
 if(users.length==0){
    throw new Error("No user  Found");
 }

 res.status(200).json({
    message :"Users fetched susscefully",
    users
 })
})

//!Fethcing One user//

exports.fetchOne =asyncHandler(async(req,res)=>{
    let {id}=req.params
    let users =await USER_SCHEMA.findById(id);
    if(!users){
       throw new Error("User not Found");
    }
   
    res.status(200).json({
       message :"Users Found",
       users
    })
   })

   //! ========= update  user//


   exports.updateUser = asyncHandler(async(req,res)=>{
    let {id}=req.params
    let findUsers =await USER_SCHEMA.findById(id);
    if(!findUsers){
       throw new Error("User not Found");
    }
let  updateUser = await USER_SCHEMA.findByIdAndUpdate(id,req.body,{new:true})
    res.status(201).json({
       message :"Updated Succesfully",
       updateUser
    })
   })

   //! ========= Delete  user//


   
   exports.deleteUser = asyncHandler(async(req,res)=>{
    let {id}=req.params
    let findUsers =await USER_SCHEMA.findById(id);
    if(!findUsers){
       throw new Error("User not Found");
    }

     let  deleteUser = await USER_SCHEMA.findByIdAndDelete(id,req.body,{new:true})
    res.status(201).json({
       message :"Deleted Succesfully",
       deleteUser
    })
   })
   
  //! =============Login User============

  exports.loginUser = asyncHandler(async(req,res)=>{
   let {email,password}= req.body;
   let findUser =await USER_SCHEMA.findOne({email});
   if(!findUser){
      throw new Error("User not found");
   }
   let isMatch =await findUser.matchPassword(password)
   if(!isMatch) throw new Error ("Password  match")

      if(isMatch){
         // res.status(200).json({
         //    message:"User Looged in succesfully"})
         sendToken(findUser,200,res)
         
      }
  })

  const sendToken =(user,statusCode,res)=>{
   //!generate token
   const token =user.getToken();
   const options ={
      expiresIn:"1d",
      httpOnly: true,
   }
   res.status(statusCode).cookie("token-name",token,options).json({success:true,token});
  }
  
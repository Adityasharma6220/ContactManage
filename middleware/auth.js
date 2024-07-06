const { JWT_SECRET } = require("../config")
const USER_SCHEMA =require("../models/userModels")
const jwt =require("jsonwebtoken")
const asyncHandler =require("express-async-handler")

exports.authenticate =asyncHandler(async(req,res,next)=>{
    if(req?.headers?.authorization?.startsWith("Bearer")) //bearer is common way to send the token
        var token = req.headers.authorization.split(" ")[1]

if(!token){
    throw new Error("No token Provided") 
}
let decode = jwt.verify(token ,JWT_SECRET)
// console.log(decode);
let user = await USER_SCHEMA.findById(decode.id)

if(!user){
    throw new Error ("user Not found");
}

req.user=user;
next();  
})
exports.isAdmin =asyncHandler(async(req,res,next)=>{
    if(req.user.role==="admin"){
        next();

    }else {
        throw new Error("Not authorized");
    }
})
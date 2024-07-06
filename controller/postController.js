const asyncHandler = require("express-async-handler")
const POST_SCHEMA =require("../models/postModel")

exports.addPost = asyncHandler(async(req,res)=>{
    let payload = req.body;
     let addPost = await POST_SCHEMA.create(payload);
    // res.send("Data Addded")
    res.status(201).json({ success :true,
        message:"user creeted succesfully",
        addPost,
    })
    })
    exports.fetchpost =asyncHandler(async(req,res)=>{
        let posts=await POST_SCHEMA.find()
        if(posts.length===0){
            res.status(400).json({success :false, message :"no post found"})
        }
        res.status(200).json({success :true, message :"post  found",posts})
    })

    exports.fetchOne =asyncHandler(async(req,res)=>{

        let {id}=req.params
        let users=await POST_SCHEMA.findOne({_id :id})
        if(!users){
            res.status(400).json({success :false ,message :"Not found"})
        }
        res.status(200).json({success :true ,message :" found",users})  
    }
    )

    exports.updatePosts =asyncHandler(async(req,res)=>{

        let {id}=req.params
        let findUser =await POST_SCHEMA.findById(id)
        if(!findUser){
            res.status(400).json({succes:false,message:"not found"})
        }
        let updatePosts= await POST_SCHEMA.findByIdAndUpdate(id,req.body,{new:true})

            res.status(200).json({
                succes:true ,message :"Update Succesfuly",updatePosts
            })
        })

        exports.deletePosts =asyncHandler(async(req,res)=>{

            let {id}=req.params
            let findUser = await POST_SCHEMA.findById(id)
            if(!findUser)
            {
                res.status(400).json({succes:false,message:"Not found"})
            }
            let deletePosts = await POST_SCHEMA.findByIdAndDelete(id,req.body,{new:true})  
            res.status(200).json({
                succes:true,
                message:"Deleted Succesfully",deletePosts
            })
        })
    
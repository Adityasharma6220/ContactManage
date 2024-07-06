const mongoose =require("mongoose")
const postSchema= mongoose.Schema({
title:{
    type:String,
    required:true,
    trim:true
},

body:{
    type:String,
    required:true,
    unique:true
}
},
{timestamps:true}
)
module.exports =mongoose.model("post",postSchema) //in db post collection will be created
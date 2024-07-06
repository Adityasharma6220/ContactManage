const express = require("express")
const {PORT}=require("./config")
const { connectDB } = require("./config/database")
const userRouter =require("./router/userRouter")
const postRouetr =require("./router/postRouter")
const {error} =require("./middleware/error")
const { authenticate } = require("./middleware/auth")
const app =express()
connectDB()
app.use(express.json())

app.use("/user",userRouter)
app.use("/post",authenticate,postRouetr)
//Midllware
app.use(error)
app.listen(PORT,(err)=>{
    if(err)
        throw err;
    console.log(`Server Running on port  ${PORT}` );
})
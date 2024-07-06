const mongoose =require("mongoose")
const bcrypt =require("bcrypt")
const jwt =require("jsonwebtoken")
const {JWT_SECRET} =require("../config")
const userSchema= mongoose.Schema({
name:{
    type:String,
    required:true,
    trim:true
},
password:{
    type:String,
    required:true,
    trim:true
},
email:{
    type:String,
    required:true,
    trim:true,
    unique:true
},
phoneNo:{
    type:Number,
    required:true,
    unique:true
},
role:{
 type:String,
 required :true,
 enum:["user","admin"]
}

},
{timestamps:true}
)
userSchema.pre("save",async function(){
     let salt = await bcrypt.genSalt(10); //gensalt is used to generate random string 
     this.password = await bcrypt.hash(this.password,salt)
})
// This is a middleware function that runs before saving a user document to the database. It's using bcrypt to:

// Generate a salt (a random string) for hashing the password.
// Hash the user's password with the generated salt to secure it before storing it in the database.

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
  
}
// This method is added to the user model to compare a given password with the hashed password stored in the database. It's useful for validating user login attempts.

userSchema.methods.getToken=function(){
    return jwt.sign({id:this._id},JWT_SECRET,{expiresIn :"1d"})
}
module.exports =mongoose.model("User",userSchema)

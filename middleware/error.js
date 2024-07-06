exports.error=(err,req,res,next)=>{
    // res.status(500 || err.state)
    const statusCode = res.statusCode === 200?500 : res.statusCode;
    res.status(statusCode)
    res.json({
        message:err.message,
        stack:err.stack,

    })
}

//npm i jsonwebtoken

const jwt = require("jsonwebtoken")

const encode = async(token)=>{
    console.log("000",token);
    let response  = jwt.verify(token,process.env.SECRETKEY) 
    return response ;
}

module.exports = encode
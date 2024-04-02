const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const authRegister = {
    email: 'admin@codesfortomorrow.com',
    password:'Admin123!@#'
}

const authLogin = async (req, res) => {
    let response = {
        token: null,
        message: null
    }
    const { email, password } = req.body;
    if (email == authRegister.email && password == authRegister.password) {
        let token = jwt.sign({ email: email }, process.env.SECRETKEY, { expiresIn: "1d" })
        // console.log("token", token);
        response.token = token,
        response.message = "Login Successfully"
    }
    else{
        response.status = "ERROR",
        response.message = "email or password not correct";
    }
    return response
}

module.exports = { authLogin }
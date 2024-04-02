const express = require("express");
const authRoute = express.Router()
const authController = require("../Controller/auth")

authRoute.post("/auth-login",authController.authLogin);

module.exports = authRoute
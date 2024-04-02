const dotenv = require("dotenv").config()
const express = require("express");
const fileupload = require("express-fileupload");
const db = require("./Database/connection")   //

const auth = require("./Routes/auth")
const category = require("./Routes/category")
const service = require("./Routes/service")

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(fileupload())

app.use('/auth',auth)
app.use("/categories",category)
app.use("/service",service)

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("Server start at port ",port);
})
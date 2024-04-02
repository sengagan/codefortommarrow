

const express = require("express");
const categoryRoute = express.Router()
const categoryController = require("../Controller/category");
const { verify } = require("jsonwebtoken");

const verifytoken = require("../middleware")

const  token=async(req,res,next)=>{
    var authHeader = req.headers.authorization;
   let response = await verifytoken(authHeader)
    if(response.email == "admin@codesfortomorrow.com"){
        next()
    }else{
        res.status(500).json({"token":"token not valide"});
    }
}



categoryRoute.post("/category",token,categoryController.createCategory);
categoryRoute.get("/categories",token,categoryController.getCategory);
categoryRoute.put("/category/:categoryId",token,categoryController.updateCategory);
categoryRoute.delete("/category/:categoryId",token,categoryController.deleteCategory);

module.exports = categoryRoute


const express = require("express");
const serviceRoute = express.Router()
const serviceController = require("../Controller/service")


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


serviceRoute.post("/category/:categoryId/service",token,serviceController.createService);
serviceRoute.get("/category/:categoryId",token,serviceController.getService);
serviceRoute.put("/category/:serviceId",token,serviceController.updateService);
serviceRoute.delete("/category/:serviceId",token,serviceController.deleteService);

module.exports = serviceRoute
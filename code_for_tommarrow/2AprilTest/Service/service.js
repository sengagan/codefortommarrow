const { response } = require("express");
const serviceModel = require("../Model/service")

const createService = async(req,res)=>{
    const details = req.body;
    // console.log("details",details);
    const response = await serviceModel.createService(details)
    // console.log("response",response);
    return response
}

const getService = async(categoryId)=>{
    let response = await serviceModel.getService(categoryId)
    return response;
}

const updateService = async(req,res)=>{
    const details = {
        serviceId: req.params.serviceId,
        serviceName: req.body.serviceName,
        type: req.body.type,
        priceOption: req.body.priceOption
    }
    const getData = await serviceModel.getDataByID(details.serviceId)
    // console.log("getdata",getData);
    if(!getData ){
        return res(500).json({"message":"not found"})
    }
    const model = await serviceModel.updateService(details)
    // console.log("model",model);
    return model;    
}

const deleteService = async(req,res)=>{
    const id = req.params.serviceId;
    const getData = await serviceModel.getDataByID(id)
    // console.log("getdata",getData);
    const response = await serviceModel.deleteService(id)
    // console.log("response ",response);
    return response ;
}

module.exports={createService , getService , updateService , deleteService} 
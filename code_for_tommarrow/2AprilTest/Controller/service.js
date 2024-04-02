

const serviceValidation = require("../Validation/service");
const Service = require("../Service/service");

const createService = async (req, res) => {
    const validate = await serviceValidation.createService(req);
    // console.log("validate====", validate);
    if (validate.status == "ERROR") {
        res.status(400).json({ "Validation Error": validate.message })
    }
    const service = await Service.createService(req, res);
    // console.log("service", service);
    res.status(200).json({ "message": "category added" })
}





const getService = async (req, res) => {
    const categoryId = req.params.categoryId;
    const service = await Service.getService(categoryId);
    // console.log("service", service);
    res.status(200).json({ "message": service})
}

const updateService = async (req, res) => {
    const validate = await serviceValidation.updateService(req);
    // console.log("validate", validate);
    if (validate.status == "ERROR") {
        res.status(400).json({ "Validation Error": validate.message })
    }
    const service = await Service.updateService(req, res);
    console.log("service", service);
    res.status(200).json({ "message":"category updated"})
}

const deleteService = async (req, res) => {
    const service = await Service.deleteService(req, res);
    // console.log("service", service);
    res.status(200).json({ "message": "category deleted" })
}


module.exports = { createService , getService , updateService , deleteService }
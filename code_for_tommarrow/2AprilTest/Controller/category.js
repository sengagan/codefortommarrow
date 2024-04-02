

const categoryValidation = require("../Validation/category");
const categoryService = require("../Service/category");


const createCategory = async (req, res) => {
    const validate = await categoryValidation.createCategory(req);
    // console.log("validate====", validate);
    if (validate.status == "ERROR") {
        res.status(400).json({ "Validation Error": validate.message })
    }
    const service = await categoryService.createCategory(req, res);
    // console.log("service", service);
    res.status(200).json({ "message": "category added" })
}

const getCategory = async (req, res) => {
    const service = await categoryService.getCategory();
    // console.log("service", service);
    res.status(200).json({ "message": service})
}

const updateCategory = async (req, res) => {
    const validate = await categoryValidation.updateCategory(req);
    // console.log("validate", validate);
    if (validate.status == "ERROR") {
        res.status(400).json({ "Validation Error": validate.message })
    }
    const service = await categoryService.updateCategory(req, res);
    // console.log("service", service);
    res.status(200).json({ "message":"category updated"})
}

const deleteCategory = async (req, res) => {
    const service = await categoryService.deleteCategory(req, res);
    // console.log("service", service);
    res.status(200).json({ "message": "category deleted" })
}


module.exports = { createCategory , getCategory , updateCategory , deleteCategory }
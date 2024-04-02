const commanValidation = require("../Validation/commanValidation")
const joi = require("joi")

const createCategory = async (req, res) => {
    const details = req.body;
    const data = joi.object({
        categoryName: joi.string().required(),
    })
    const validate = await commanValidation.comman(data, details)
    return validate;
}

const updateCategory = async (req, res) => {
    const details = {
        token : req.params.categoryId,
        categoryName : req.body.categoryName
    }
    const data = joi.object({
        categoryName: joi.string().required(),
        token:joi.string().required()
    })
    const validate = await commanValidation.comman(data, details)
    return validate;
}

module.exports = { createCategory,updateCategory } 
const commanValidation = require("../Validation/commanValidation")
const joi = require("joi")

const createService = async (req, res) => {
    const details = req.body;
    const data = joi.object({
        categoryId: joi.string().required(),
        serviceName: joi.string().required(),
        type: joi.string().required(),
        priceOption: joi.string().required()
    })
    const validate = await commanValidation.comman(data, details)
    return validate;
}

const updateService = async (req, res) => {
    const details = {
        serviceId: req.params.serviceId,
        serviceName: req.body.serviceName,
        type: req.body.type,
        priceOption: req.body.priceOption
    }
    const data = joi.object({
        serviceId: joi.string().required(),
        serviceName: joi.string().required(),
        type: joi.string().required(),
        priceOption: joi.string().required()
    })
    const validate = await commanValidation.comman(data, details)
    return validate;
}

module.exports = { createService, updateService } 
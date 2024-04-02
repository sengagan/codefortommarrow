const joi = require("joi")
const commanValidation = require("../Validation/commanValidation")

const authLogin = async (req, res) => {
    const details = {
        email : req.body.email,
        password : req.body.password
    }
    const data = joi.object({
        email: joi.string().required(),
        password: joi.string().required(),
    })
    const validate = await commanValidation.comman(data, details)
    return validate;
}

module.exports = { authLogin }
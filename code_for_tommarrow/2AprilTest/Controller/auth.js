const authValidation = require("../Validation/auth");
const authService = require("../Service/auth");

const authLogin = async (req, res) => {
    const validate = await authValidation.authLogin(req);
    // console.log("validate", validate);
    if (validate.status == "ERROR") {
        res.status(400).json({ "Validation Error": validate.message })
    }
    const service = await authService.authLogin(req, res);
    // console.log("service", service);
    res.status(200).json({ "message": service.message, "token": service.token })
}

module.exports = { authLogin }
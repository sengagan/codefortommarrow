

const comman = async(data,details)=>{
    let response = {
        status:null,
        message:null
    }
    const validate = await data.validate(details)
    if(validate && validate.error){
        response.status = "ERROR",
        response.message = validate.message
    }
    console.log("response ====",response);
    return response
}
module.exports = {comman}
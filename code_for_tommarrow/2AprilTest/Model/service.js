const { Connection } = require("../Database/connection");

const createService = async (details) => {
    // console.log("-=====-", details);
    let query = `INSERT INTO services (categoryId,serviceName,type,priceOption) VALUES('${details.categoryId}','${details.serviceName}','${details.type}','${details.priceOption}')`

    return new Promise(await function (resolve, reject) {
        Connection.query(query, (error, result) => {
            if (error) {
                reject(error)
            }
            else {
                resolve(result)
            }
        })
    })
}

const getService = async (categoryId) => {
    let query = `SELECT * FROM services WHERE categoryId = '${categoryId}'`
    return new Promise(await function (resolve, reject) {
        Connection.query(query, (error, result) => {
            if (error) {
                reject(error)
            }
            else {
                resolve(result)
            }
        })
    })
}

const updateService = async (details) => {
    // console.log("-===details==-",details);

    let query = `UPDATE services SET serviceName='${details.serviceName}',type='${details.type}',priceOption='${details.priceOption}'  WHERE id = '${details.serviceId}'`
    return new Promise(await function (resolve, reject) {
        Connection.query(query, (error, result) => {
            if (error) {
                reject(error)
            }
            else {
                resolve(result)
            }
        })
    })
}

const getDataByID = async (serviceId) => {
    // console.log("-===serviceId==-",serviceId);
    let query = `SELECT * FROM services WHERE id = '${serviceId}'`
    return new Promise(await function (resolve, reject) {
        Connection.query(query, (error, result) => {
            if (error) {
                reject(error)
            }
            else {
                resolve(result)
            }
        })
    })
}


const deleteService  = async (id) => {
    // console.log("-===id==-",id);
    let query = `DELETE FROM services WHERE id = '${id}'`
    return new Promise(await function (resolve, reject) {
        Connection.query(query, (error, result) => {
            if (error) {
                console.log("error",error)
                reject(error)
            }
            else {
                console.log("result",result);
                resolve(result)
            }
        })
    })
}


module.exports = { createService, getService, updateService, getDataByID, deleteService }
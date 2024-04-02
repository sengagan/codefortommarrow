const { Connection } = require("../Database/connection");

const createCategory = async (categoryName) => {
    // console.log("-=====-", categoryName);
    let query = `INSERT INTO categories (categoryName) VALUES('${categoryName}')`
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

const getCategory = async () => {
    // console.log("-=====-");
    let query = `SELECT * FROM categories`
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

const updateCategory = async (obj) => {
    // console.log("-===obj==-",obj);
    let query = `UPDATE categories SET categoryName='${obj.categoryName}' WHERE id = '${obj.id}'`
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

const getDataByEmail = async (obj) => {
    // console.log("-===obj==-",obj);
    let query = `SELECT * FROM categories WHERE id = '${obj}'`
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


const deleteCategory  = async (obj) => {
    // console.log("-===obj==-",obj);
    let query = `DELETE FROM categories WHERE id = '${obj}'`
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


module.exports = { createCategory, getCategory, updateCategory, getDataByEmail, deleteCategory }
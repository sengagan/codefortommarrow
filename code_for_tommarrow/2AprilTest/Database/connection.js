
const Sql = require("mysql2");
// console.log("pw",process.env.PASSWORD);

const Connection = Sql.createConnection({
    host:'localhost',
    user:'root',
    password: process.env.PASSWORD || '152897',
    database : process.env.DATABASE || '2apriltest'
})

Connection.connect(function(error){
    if(error){
        console.log("database not connected",error);
    }else{
        console.log("database connected successfully");
    }
})

module.exports = {Connection}
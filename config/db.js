const mysql = require("mysql2/promise");

const mySqlPool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "Diltopagalhai@2032",
    database: "students"
});

module.exports = mySqlPool;

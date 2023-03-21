const mysql = require('mysql2')

const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    database:"ads3",
    password:"shiripiri@2207",
});

module.exports = pool.promise();
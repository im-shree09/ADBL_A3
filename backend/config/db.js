const mysql = require('mysql2')

const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    database:"ads_3",
    password:"NSS302@ss",
});

module.exports = pool.promise();
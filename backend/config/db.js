const mysql = require('mysql2')

const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    database:"ads3",
    password:"shiripiri@2207",
});
// let sql = "SELECT * FROM takes;"
// pool.execute(sql, function(err, result){
//     if(err) throw err;

//     console.log(result)
// })

module.exports = pool.promise();
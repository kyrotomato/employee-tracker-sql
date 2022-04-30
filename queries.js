const db = require("./config/connection.js");

const viewDepartment = function(){
    //open employeeDB
    //promise wrapper
   return new Promise(function (resolve, reject){
    db.query(
        'SELECT * FROM `department`;'
    , (error, res)=>{
    resolve(res);
    })
   })
    
}

const viewRoles = function(){
    //open employeeDB
    //promise wrapper
   return new Promise(function (resolve, reject){
    db.query(
        'SELECT * FROM `role`;'
    , (error, res)=>{
    resolve(res);
    })
   })
    
}

module.exports={viewDepartment, viewRoles}
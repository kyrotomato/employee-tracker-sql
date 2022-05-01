const db = require("./config/connection.js");
const inquirer = require("inquirer");
const { throwError } = require("rxjs");
const {promptUser} = require("./app.js");


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
const viewEmployees = function(){
    //open employeeDB
    //promise wrapper
   return new Promise(function (resolve, reject){
    db.query(
        'SELECT * FROM `employee`;'
    , (error, res)=>{
    resolve(res);
    })
   })
    
}
const addDepartment = function(){
    return inquirer.prompt([
        {
          type: 'input',
          name: 'deptChoice',
          message: 'What is the name of the department?',
        },
    
      ])
    .then((answer)=>{
        const deptName = answer.deptChoice;
        let sql = `INSERT INTO department (name) 
        VALUES (?)`;
            db.query(sql, deptName, (error, res)=>
            {
            if (error) throw error; 
        })

   })
    
}
const addRole = function(){
    let deptSql = 'SELECT * FROM department';
    
    return inquirer.prompt([
        {
          type: 'input',
          name: 'roleName',
          message: 'What is the name of the role you would like to add?',
        },
        {
            type: 'input',
            name: 'roleSalary',
            message: 'What is the salary for this role ?',
          },
          {
            type: 'list',
      name: 'roleDept',
      message: 'Please select a department',
      choices: []
          },
    
      ])
    .then((answer)=>{
        const deptName = answer.deptChoice;
        let sql = `INSERT INTO department (name) 
        VALUES (?)`;
            db.query(sql, deptName, (error, res)=>
            {
            if (error) throw error; 
        })

   })
    
}
module.exports={viewDepartment, viewRoles, viewEmployees, addDepartment}
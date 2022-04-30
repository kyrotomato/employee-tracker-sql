const inquirer = require("inquirer");
const db = require("./config/connection.js");
const {viewDepartment, viewRoles} = require("./queries.js");


const promptUser = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'menuChoice',
      message: 'Please select an action',
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an Employee', 'Update employee role']

    },

  ])
    .then( async promptChoice => {
      
      let menuChoice = promptChoice.menuChoice
      //take prompt choices, run associated functions
      //departments
      if (menuChoice === 'View all departments') {
       viewDepartment().then(data=>{console.log(data)})
       let departments = await viewDepartment()
       console.log (departments);
      }
      //roles
      else if (menuChoice === 'View all roles') {
        viewRoles().then(data=>{console.log(data)})
      }
      //employees
      else if (menuChoice === 'View all employees') {
        //viewEmployees();
      }
      //add department
      else if (menuChoice === 'Add a department') {
        //addDepartment();
      }
      //add role
      else if (menuChoice === 'Add a role') {
        //addRole();
      }
      //add employee
      else if (menuChoice === 'Add an employee') {
        //addEmployee();
      }
      //update employee role
      else if (menuChoice === 'Update employee role') {
        //updateRole();
      }
      else {
        console.log('Something went wrong');
        return;
      }
      



    })
}
promptUser();
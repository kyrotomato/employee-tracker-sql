const inquirer = require("inquirer");
const db = require("./config/connection.js");


const promptUser = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'menuChoice',
      message: 'Please select an action',
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an Employee', 'Update employee role']

    },

  ])
    .then(({menuChoice}) => {
      console.log(menuChoice)
      //take prompt choices, run associated functions
      //departments
      if (promptChoices.menuChoice === 'View all departments') {
        viewDepartment();
      }
      //roles
      else if (promptChoices.menuChoice === 'View all roles') {
        viewRoles();
      }
      //employees
      else if (promptChoices.menuChoice === 'View all employees') {
        viewEmployees();
      }
      //add department
      else if (promptChoices.menuChoice === 'Add a department') {
        addDepartment();
      }
      //add role
      else if (promptChoices.menuChoice === 'Add a role') {
        addRole();
      }
      //add employee
      else if (promptChoices.menuChoice === 'Add an employee') {
        addEmployee();
      }
      //update employee role
      else if (promptChoices.menuChoice === 'Update employee role') {
        updateRole();
      }
      else {
        console.log('Something went wrong');
        return;
      }
      



    })
}
promptUser();
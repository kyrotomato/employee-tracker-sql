const inquirer = require("inquirer");
const mysql = require("mysql2");

//database connection
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql2',
    port: 3306
  }
);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'menuChoice',
      message: 'Please select an action',
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an Employee', 'Update employee role']

    },

  ])
    .then(promptChoices => {
      //take prompt choices, run associated functions
      //departments
      if (promptChoices.menuChoice === 'View all departments') {
        viewDepartment();
      }
      //roles
      else if (promptChoices.menuChoice === 'View all roles') {
        viewRoles();
      }
      else if (promptChoices.menuChoice === 'View all employees') {
        viewEmployees();
      }
      else if (promptChoices.menuChoice === 'Add a department') {
        addDepartment();
      }
      else if (promptChoices.menuChoice === 'Add a role') {
        addRole();
      }
      else if (promptChoices.menuChoice === 'Add an employee') {
        addEmployee();
      }
      else if (promptChoices.menuChoice === 'Update employee role') {
        updateRole();
      }
      else {
        console.log('Something went wrong');
        return;
      }
      



    })
  }
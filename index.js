const inquirer = require("inquirer");
const mysql = require("mysql2");

//database connection
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Yoloswag69',
      database: 'employeeDB'
    },
    console.log('Connected to the election database.')
  );

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'list',
        name: 'menuChoice',
        message: 'Please select an action',
        choices: [
            promptMessages.viewDepartments,
            promptMessages.viewRoles,
            promptMessages.viewEmployees,
            promptMessages.addDepartment,
            promptMessages.addRole,
            promptMessages.addEmployee,
            promptMessages.updateRole,
            promptMessages.exit
        ]
      },

    ]);
};
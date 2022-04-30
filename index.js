const inquirer = require("inquirer"); 

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
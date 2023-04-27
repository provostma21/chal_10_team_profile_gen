const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Manager');
const Intern = require('./lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');

const teamArr = [];

const addManager = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your team manager's name?"
                      
        },
        {
            type: "input",
            name: "id",
            message: "Please enter your manager's ID number."
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your manager's email address."
        },
        {
            type: "input",
            name: "officerNumber",
            message: "Please enter your manager's office number."
        }
    ])
    .then((managerInput) => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager(name, id, email, officeNumber);

        teamArr.push(manager);
        console.log(manager);
    });
};

const addEmployee = () => {
    return inquirer
    .prompt([
        {
            type: "list",
            name: "role",
            message: "Please choose the employee's role:",
            choices: ["Engineer", "Intern"]
        },
        {
            type: "input",
            name: "name",
            message: "What is the name of the employee?"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the ID of the employee:"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the email of the employee:"
        },
        {
            when: (input) => input.role === "Engineer",
            type: "input",
            name: "github",
            message: "Please enter the GitHub username of the Engineer:"
        },
        {
            when: (input) => input.role === "Intern",
            type: "input",
            name: "school",
            message: "Please enter the school of the Intern:"
        },
        {
            type: "confirm",
            name: "confirmAddEmployee",
            message: "Would you like to add more team members?",
            default: false,
        }
    ])
    .then((employeeData) => {
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer(name, id, email, github);

            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern(name, id, email, school);

            console.log(employee);
        }

        teamArr.push(employee);

        if (confirmAddEmployee) {
            return addEmployee(teamArr);
        } else {
            return teamArr;
        }
    });
};

const writeFile = (data) => {
    fs.writeFile("./dist/index.html", data, (err) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log(
                "Your Team Profile has been generated successfully! You can view this file in the dist folder."
            )
        }
    })
};

addManager()
    .then(addEmployee)
    .then((teamArr) => {
        return generateHTML(teamArr);
    })
    .then((pageHTML) => {
        return writeFile(pageHTML);
    })
    .catch((err) => {
        console.log(err);
    });
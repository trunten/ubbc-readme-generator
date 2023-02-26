import { licenseNames } from './licenses.js';

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?", 
        name: "github",
        validate: answer => answer.trim() === "" ? "GitHub username can't be blank" : true,
    },
    {
        type: "input",
        message: "What is your email address?", 
        name: "email",
        validate: answer => {
            const re = /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}$/i;
            if (!re.test(answer)) {
                return "Please enter a valid email address";
            }
            return true;
        },
    },
    {
        type: "input",
        message: "What is your projects name?", 
        name: "title",
        validate: answer => answer.trim() === "" ? "Project name cannot be blank" : true,
    },
    {
        type: "input",
        message: "Please write a short description of your project:", 
        name: "description",
        validate: answer => answer.trim() === "" ? "Project description cannot be empty." : true,
    },
    {
        type: "list",
        message: "What kind of license should your project have?", 
        choices: licenseNames,
        pageSize: 10,
        loop: false,
        name: "licenseName",
    },
    {
        type: "input",
        message: "Please enter the name/SPDX ID of the license attached to your project:", 
        name: "licenseOther",
        when: answers => answers.licenseName === "Other",
        validate: answer => answer.trim() === "" ? "License cannot be blank" : true,
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?", 
        name: "installation",
        default: "npm i",
        validate: answer => answer.trim() === "" ? "Type N/A if not required" : true,
    },
    {
        type: "input",
        message: "What command should be run to run tests?", 
        name: "tests",
        default: "npm test",
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?", 
        name: "usage",
        default: "node index.js",
        validate: answer => answer.trim() === "" ? "Usage section cannot be blank" : true,
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?", 
        name: "contribution",
    },
];

export default questions
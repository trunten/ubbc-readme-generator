const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type:"input",
        message:"project name?", 
        name:"title",
        validate: answer => answer === "" ? "Going to need an answer pal" : true,
    },
    {
        type:"input",
        message:"project description?", 
        name:"description",
        validate: answer => answer === "" ? "Short can be sweet, but blank isn't going to cut it" : true,
    },
    {
        type:"input",
        message:"installation?", 
        name:"installation",
        validate: answer => answer === "" ? "Type N/A if not required" : true,
    },
    {
        type:"input",
        message:"usage?", 
        name:"usage",
        validate: answer => answer === "" ? "Your users are going to need a bit of help. Don't be mean" : true,
    },
    {
        type:"input",
        message:"credits?", 
        name:"credits",
        validate: answer => answer === "" ? "All your own work? WOW! Type N/A though if it's not required" : true,
    },
    {
        type:"list",
        message:"license?", 
        choices: ["MIT", "Apache", "Other"],
        name:"license",
        validate: answer => answer === "" ? "All your own work? WOW! Type N/A though if it's not required" : true,
    },
    {
        type:"input",
        message:"email?", 
        name:"email",
        validate: answer => {
            const re = /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}$/i;
            if (!re.test(answer)) {
                return "That email looks a bit fishy";
            }
            return true;
        },
    },
    {
        type:"input",
        message:"github name?", 
        name:"github",
        validate: answer => answer === "" ? "github username can't be blank" : true,
    },
]

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => err ? console.log(err) : console.log('Success!'));
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(data => writeToFile("./generated_files/README.md", data));
}

// function call to initialize program
init();

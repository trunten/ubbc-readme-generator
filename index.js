import inquirer from "inquirer";
import path from 'path';
import { writeFile } from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";
import questions from "./utils/questions.js";


// function to write README file
function writeToFile(fileName, data) {
    writeFile(path.join("generated_files", fileName), generateMarkdown(data), (err) => err ? console.log(err) : console.log('Success!'));
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(data => writeToFile("README.md", data));
}

// function call to initialize program
init();

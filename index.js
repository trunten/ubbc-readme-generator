import { join } from 'path';
import { writeFile, mkdir} from "fs";
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";
import questions from "./utils/questions.js";

// function to write README file
function writeToFile(fileName, data) {
    try {
        mkdir("generated_readme", { recursive: true }, err => { if (err) throw err; });
    } catch (err) {
        console.error(err);
        return;
    }

    writeFile(join("generated_readme", fileName), generateMarkdown(data), (err) => err ? console.error(err) : console.log('Success!'));
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(data => writeToFile("README.md", data));
}

// function call to initialize program
init();

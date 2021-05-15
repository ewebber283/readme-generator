// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your GitHub username?'
    },
    {
        type: 'list',
        name: 'name of license',
        message: 'What is your GitHub username?',
        choices: ['mit', 'apache 2.0', 'gpl 3.0', 'none']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is your GitHub username?',
        default: 'NPM i'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What is your GitHub username?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses)=>{
        writeToFile('README.md', generateMarkdown({...inquirerResponses}))
    })
}

// Function call to initialize app
init();

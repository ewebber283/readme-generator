// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'none']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install?',
        default: 'NPM i'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your application?'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Who contributed to this project?'
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

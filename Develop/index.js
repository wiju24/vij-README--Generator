// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const criteria = [
    {
        type: `input`,
        name: `title`,
        message: `What is your project title?`,
    },
    {
        type: `input`,
        name: `description`,
        message: `Create a decription of your project.`,
    },
    {
        type: `input`,
        name: `usage`,
        message: `How will you put this project to use?`,
    },
    {
        type: `input`,
        name: `installation`,
        message: `Elaborate the installation process of your project.`,
    },
    {
        type: `input`,
        name: `contribution`,
        message: `What are the contributing guidelines for this project?`,
    },
    {
        type: `input`,
        name: `testing`,
        message: `Provide a step-by-step guide to test your project.`,
    },
    {
        type: `input`,
        name: `license`,
        message: `Choose a License from the following:
        \n 1. MIT_License
        \n 2. Mozilla_Public_License 2.0
        \n 3. Boost_Software_License 1.0
        \n 4. The_Unlicense`,
    },
    {
        type: `input`,
        name: `githubUsername`,
        message: `Enter your Github username.`,
    },
    {
        type: `input`,
        name: `email`,
        message: `Provide your email address.`,
    }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err) =>
    err ? console.error(err) : console.log('The provided information has been successfully created to the README!'));
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(criteria)
    .then(function(projectInfo) {
        writeToFile("READMETEST.md", generateMarkdown(projectInfo))
    })
}
// Function call to initialize app
init();

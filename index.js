// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your Github username? ",
    name: "userName",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your Project Name? ",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a description of your project: ",
    name: "description",
  },
  {
    type: "input",
    message: "Enter installation guide for the project: ",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter the usage for this project: ",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter contribution guidelines:",
    name: "contribution",
  },
  { name: "test", type: "input", question: "Enter test instructions: " },
  {
    type: "list",
    message: "choose a license to add to the project: ",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log("File Created Successfully!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    writeToFile("readMe.md", generateMarkdown.generateMarkdown(response));
  });
}

// Function call to initialize app
init();

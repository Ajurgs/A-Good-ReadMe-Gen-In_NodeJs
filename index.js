// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
  "What is your Github username? ",
  "What is your email?",
  "What is your Project Name? ",
  "Enter a description of your project: ",
  "Enter contribution guidelines:",
  "Enter test instructions: ",
  "choose a license to add to the project: ",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

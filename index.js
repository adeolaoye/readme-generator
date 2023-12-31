const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  { type: "input", name: "title", message: "Enter your project title:" },
  {
    type: "input",
    name: "description",
    message: "Enter your project description:",
  },
  {
    type: "input",
    name: "instruction",
    message: "Enter installation instructions:",
  },
  { type: "input", name: "usage", message: "Enter usage information:" },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your application:",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3-Clause", "None"],
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter contribution guidelines:",
  },
  { type: "input", name: "tests", message: "Enter test instructions:" },
  {
    type: "input",
    name: "githubUsername",
    message: "Enter your GitHub username:",
  },
  { type: "input", name: "email", message: "Enter your email address:" },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// function to initialize program

function init() {
  // Use the package Inquirer to prompt for information
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeContent = generateMarkdown(answers);

      writeToFile("README.md", readmeContent);
    })
    .catch((error) => {
      if (error) {
        console.error(
          "Prompt couldn't be rendered in the current environment."
        );
      } else {
        console.error("Something else went wrong:", error);
      }
    });
}

// function call to initialize program
init();

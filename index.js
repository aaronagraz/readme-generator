// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "list",
    name: "license",
    message: "What license will your project contain?",
    choices: ["Apache", "ISC", "MIT", "None"],
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "How to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How to use your project?",
  },
  {
    type: "input",
    name: "author",
    message: "Who contributed?",
  },
  {
    type: "input",
    name: "status",
    message: "What's the status of the project?",
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile("README.md", data, function (err) {
    if (err) throw err;
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers);
      fs.writeFile("README.md", generateMarkdown(answers), function () {
        console.log("README created");
      });
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();

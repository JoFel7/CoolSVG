const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    message: "Enter up to 3 characters for your logo: ",
    name: "text",
  },
  {
    choices: ["circle", "triangle", "square"],
    type: "list",
    message: "Choose a shape you want for your logo?",
    name: "shape",
  },
  {
    type: "input",
    message: "What's the color of your chosen shape?",
    name: "shapeColor",
  },
  {
    type: "input",
    message: "What color do you want your text?",
    name: "textColor",
  },
];

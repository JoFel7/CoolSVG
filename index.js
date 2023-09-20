const inquirer = require("inquirer");
const fs = require("fs");
const Circle = require("./lib/shapes").Circle;
const Triangle = require("./lib/shapes").Triangle;
const Square = require("./lib/shapes").Square;

const questions = [
  {
    type: "input",
    message: "Enter up to 3 characters for your logo: ",
    name: "text",
  },
  {
    choices: ["triangle", "square", "circle"],
    type: "list",
    message: "Choose a shape you want for your logo:",
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

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) console.error(err);
    else console.log("Write logged!");
  });
}

function createShape(shapeType, shapeColor, textColor, text) {
  const shape = new shapeType(shapeColor, textColor, text);
  return shape.render();
}

function init() {
  inquirer.prompt(questions).then((response) => {
    let shapeType;
    switch (response.shape) {
      case "triangle":
        shapeType = Triangle;
        break;
      case "square":
        shapeType = Square;
        break;
      case "circle":
        shapeType = Circle;
        break;
      default:
        console.log("Invalid shape.");
        return;
    }

    const svgData = createShape(
      shapeType,
      response.shapeColor,
      response.textColor,
      response.text
    );

    writeToFile(`${response.shape}.svg`, svgData);
  });
}

init();

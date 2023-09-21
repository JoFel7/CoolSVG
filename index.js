const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path")
const Circle = require("./lib/shape").Circle;
const Triangle = require("./lib/shape").Triangle;
const Square = require("./lib/shape").Square;

// Array of questions to be prompted to the user
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

// Function to write data to a file
function writeToFile(fileName, data) {
  const filePath = path.join(__dirname, "examples", fileName);
  fs.writeFile(filePath, data, (err) => {
    if (err) console.error(err);
    else console.log(`SVG saved in ${filePath}`);
  });
}

// Function to create a shape and return its rendered SVG representation
function createShape(shapeType, shapeColor, textColor, text) {
  const shape = new shapeType(shapeColor, textColor, text);
  return shape.render();
}

// Main function to initiate the logo creation process
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

    // Generate SVG data for the chosen shape and write it to a file in the examples folder
    const svgData = createShape(
      shapeType,
      response.shapeColor,
      response.textColor,
      response.text
    );

    writeToFile(path.join(`${response.shape}.svg`), svgData);
  });
}
// Start the logo creation process
init();

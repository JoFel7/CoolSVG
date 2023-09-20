const { Circle, Triangle, Square } = require("./shape.js");

// Test suite for Shape, Circle, Triangle, and Square
describe("Shape", () => {
  // Test case for Circle shape
  describe("Circle", () => {
    it("should render the svg for a circle", () => {
      // SVG representation for a circle
      const circleSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
      // Creating a new Circle instance
      const newCircle = new Circle();
      // Validating that the rendered SVG matches the expected SVG
      expect(newCircle.render()).toEqual(circleSVG);
    });
  });

  // Test case for Triangle shape
  describe("Triangle", () => {
    it("should render the svg for a triangle", () => {
      // SVG representation for a triangle
      const triangleSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
      // Creating a new Triangle instance
      const newTriangle = new Triangle();
      // Validating that the rendered SVG matches the expected SVG
      expect(newTriangle.render()).toEqual(triangleSVG);
    });
  });

  // Test case for Square shape
  describe("Square", () => {
    it("should render the svg for a square", () => {
      // SVG representation for a square
      const squareSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
      // Creating a new Square instance
      const newSquare = new Square();
      // Validating that the rendered SVG matches the expected SVG
      expect(newSquare.render()).toEqual(squareSVG);
    });
  });
});

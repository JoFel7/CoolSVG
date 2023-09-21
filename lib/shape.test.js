const { Circle, Triangle, Square } = require("./shape.js");

function normalizeSVG(svg) {
  // Remove whitespaces, tabs, and line breaks
  return svg.replace(/\s+/g, "").trim();
}

describe("Shape", () => {
  describe("Circle", () => {
    it("should render the svg for a circle", () => {
      const circleSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="red" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">Sample Circle</text>
      </svg>`;
      const newCircle = new Circle('red', 'black', 'Sample Circle');
      expect(normalizeSVG(newCircle.render())).toEqual(normalizeSVG(circleSVG));
    });
  });

  describe("Triangle", () => {
    it("should render the svg for a triangle", () => {
      const triangleSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">Sample Triangle</text>
      </svg>`;
      const newTriangle = new Triangle('blue', 'white', 'Sample Triangle');
      expect(normalizeSVG(newTriangle.render())).toEqual(normalizeSVG(triangleSVG));
    });
  });

  describe("Square", () => {
    it("should render the svg for a square", () => {
      const squareSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="green" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">Sample Square</text>
      </svg>`;
      const newSquare = new Square('green', 'black', 'Sample Square');
      expect(normalizeSVG(newSquare.render())).toEqual(normalizeSVG(squareSVG));
    });
  });
});

// Import the parent Shape class
const Shape = require(`./shapes`);

// Define the Square class that extends the Shape class
class Square extends Shape {
    constructor(name, textColor, shapeColor) {
        // Call the constructor of the parent Shape class
        super(name, textColor, shapeColor);
    }

    // Override the render method to return SVG markup for a square
    render() {
        return `<rect x="60" y="20" width="180" height="180" fill="${this.shapeColor}" />`;
    }
}

// Export the Square class for use in other modules
module.exports = Square;
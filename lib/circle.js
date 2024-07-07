// Import the parent Shape class
const Shape = require(`./shapes`);

// Define the Circle class that extends the Shape class
class Circle extends Shape {
    constructor(name, textColor, shapeColor) {
        // Call the constructor of the parent Shape class
        super(name, textColor, shapeColor);
    }

    // Override the render method to return SVG markup for a circle
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}

// Export the Circle class for use in other modules
module.exports = Circle;
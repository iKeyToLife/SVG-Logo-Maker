// Import the parent Shape class
const Shape = require(`./shapes`);

// Define the Triangle class that extends the Shape class
class Triangle extends Shape {
    constructor(name, textColor, shapeColor) {
        // Call the constructor of the parent Shape class
        super(name, textColor, shapeColor);
        // Override the default text position for the triangle shape
        this.textPosition = `x="150" y="135"`
    }

    // Override the render method to return SVG markup for a triangle
    render() {
        return `<polygon points="150, 10 290, 190 10, 190" fill="${this.shapeColor}" />`;
    }
}

// Export the Triangle class for use in other modules
module.exports = Triangle;
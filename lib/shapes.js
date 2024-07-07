// Parent class for all shapes
class Shape {
    constructor(name, textColor, shapeColor) {
        // Validate name length to ensure it does not exceed 3 characters
        if (name.length > 3) {
            throw new Error(`Name length must not exceed 3 characters`);
        } else {
            this.name = name;
        }

        // Initialize text and shape color properties
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        // Set default text position
        this.textPosition = `x="150" y="125"`
    }

    // This method should be overridden by subclasses to render the specific shape
    render() {
        throw new Error(`Must be overridden.`);
    }

    // Returns an SVG string, with the shape and text, render() must be overridden
    renderSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${this.render()}

  <text ${this.textPosition} font-size="60" text-anchor="middle" fill="${this.textColor}">${this.name}</text>

</svg>`
    }
}

// Export the Shape class for use in other modules
module.exports = Shape;

const Shape = require(`./shapes`);

class Circle extends Shape {
    constructor(name, textColor, shapeColor) {
        super(name, textColor, shapeColor);
    }


    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}

module.exports = Circle;
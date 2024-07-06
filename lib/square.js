const Shape = require(`./shapes`);

class Square extends Shape {
    constructor(name, textColor, shapeColor) {
        super(name, textColor, shapeColor);
    }


    render() {
        return `<rect x="60" y="20" width="180" height="180" fill="${this.shapeColor}" />`;
    }
}

module.exports = Square;
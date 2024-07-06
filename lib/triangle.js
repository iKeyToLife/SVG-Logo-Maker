const Shape = require(`./shapes`);

class Triangle extends Shape {
    constructor(name, textColor, shapeColor) {
        super(name, textColor, shapeColor);
        this.textPosition = `x="150" y="135"`
    }


    render() {
        return `<polygon points="150, 10 290, 190 10, 190" fill="${this.shapeColor}" />`;
    }
}

module.exports = Triangle;
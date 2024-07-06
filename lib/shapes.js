class Shape {
    constructor(name, textColor, shapeColor) {
        if (name.length > 3) {
            throw new Error(`Name length must not exceed 3 characters`);
        } else {
            this.name = name;
        }

        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.textPosition = `x="150" y="125"`
    }

    render() {
        throw new Error(`Must be overridden.`);
    }

    renderSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${this.render()}

  <text ${this.textPosition} font-size="60" text-anchor="middle" fill="${this.textColor}">${this.name}</text>

</svg>`
    }
}

module.exports = Shape;

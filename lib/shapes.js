const colors = require('colors');

class Shapes {
    constructor(name, colorText, colorShape) {
        if (name.length > 3) {
            throw new Error(`Name length must not exceed 3 characters`);
        } else {
            this.name = name;
        }

        this.colorText = this.validateAndFormatColor(colorText, 'text');
        this.colorShape = this.validateAndFormatColor(colorShape, 'shape');
    }

    render() {
        throw new Error(`Must be overridden.`);
    }

    validateAndFormatColor(color, type) {
        const hexRegex = /^#[0-9A-Fa-f]{6}$/;
        if (hexRegex.test(color)) {
            return color;
        } else if (colors[color.toLowerCase()]) {
            color = color.toLowerCase();
            return color;
        } else {
            const errorType = type === 'text' ? 'text' : 'shape';
            throw new Error(`Invalid ${errorType} color format: ${color}`);
        }
    }
}

module.exports = Shapes;

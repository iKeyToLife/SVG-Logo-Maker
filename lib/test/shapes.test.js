const Shapes = require('../shapes');

describe('Shapes', () => {
    it('should allow a name with a maximum length of 3 characters', () => {
        const shapes = new Shapes('abc', 'white', '#000000');
        expect(shapes.name).toBe('abc');
    });

    it('should throw an error if the name length exceeds 3 characters', () => {
        expect(() => {
            new Shapes('abcd', 'white', '#000000');
        }).toThrow('Name length must not exceed 3 characters');
    });

    it('should allow valid color formats for text and shape', () => {
        const shapes = new Shapes('abc', 'White', '#000000');
        expect(shapes.colorText).toBe('white');
        expect(shapes.colorShape).toBe('#000000');
    });

    it('should throw an error if an invalid color format is provided', () => {
        expect(() => {
            new Shapes('abc', 'invalidColor', '#000000');
        }).toThrow('Invalid text color format: invalidColor');

        expect(() => {
            new Shapes('abc', 'white', 'invalidColor');
        }).toThrow('Invalid shape color format: invalidColor');
    });

    it('render must be overridden', () => {
        const shapes = new Shapes('abc', 'white', '#000000');
        expect(() => shapes.render()).toThrow('Must be overridden.');
    });
});

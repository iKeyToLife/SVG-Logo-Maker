// Import the required modules and classes
const Shape = require('../shapes');
const Circle = require('../circle');
const Triangle = require('../triangle');
const Square = require('../square');

// Describe the test suite for the Shape class
describe('Shape', () => {

    // Test if a name with a maximum length of 3 characters is allowed
    it('should allow a name with a maximum length of 3 characters', () => {
        const shapes = new Shape('abc', 'white', '#000000');
        expect(shapes.name).toBe('abc');
    });

    // Test if an error is thrown when the name length exceeds 3 characters
    it('should throw an error if the name length exceeds 3 characters', () => {
        expect(() => {
            new Shape('abcd', 'white', '#000000');
        }).toThrow('Name length must not exceed 3 characters');
    });

    // Test if valid color formats for text and shape are allowed
    it('should allow valid color formats for text and shape', () => {
        const shapes = new Shape('abc', 'White', '#000000');
        expect(shapes.textColor).toBe('White');
        expect(shapes.shapeColor).toBe('#000000');
    });

    // Test if the render method throws an error when not overridden
    it('render must be overridden', () => {
        const shapes = new Shape('abc', 'white', '#000000');
        expect(() => shapes.render()).toThrow('Must be overridden.');
    });

    // Describe the test suite for rendering shapes
    describe(`Render`, () => {

        // Test if Circle's render method returns the correct SVG shape
        it(`circle.render must return SVG shape`, () => {
            const circle = new Circle('abc', 'white', '#000000');
            expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${circle.shapeColor}" />`);
        });

        // Test if Triangle's render method returns the correct SVG shape
        it(`triangle.render must return SVG shape`, () => {
            const triangle = new Triangle('abc', 'white', '#000000');
            expect(triangle.render()).toEqual(`<polygon points="150, 10 290, 190 10, 190" fill="${triangle.shapeColor}" />`);
        });

        // Test if Square's render method returns the correct SVG shape
        it(`square.render must return SVG shape`, () => {
            const square = new Square('abc', 'white', '#000000');
            expect(square.render()).toEqual(`<rect x="60" y="20" width="180" height="180" fill="${square.shapeColor}" />`);
        });

        // Test if Square's renderSVG method returns the correct SVG markup
        it(`square.renderSVG must return SVG`, () => {
            const square = new Square('abc', 'white', '#000000');
            expect(square.renderSVG()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${square.render()}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${square.textColor}">${square.name}</text>

</svg>`);
        });

        // Test if Circle's renderSVG method returns the correct SVG markup
        it(`circle.renderSVG must return SVG`, () => {
            const circle = new Circle('abc', 'white', '#000000');
            expect(circle.renderSVG()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${circle.render()}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${circle.textColor}">${circle.name}</text>

</svg>`);
        });

        // Test if Triangle's renderSVG method returns the correct SVG markup
        it(`triangle.renderSVG must return SVG`, () => {
            const triangle = new Triangle('abc', 'white', '#000000');
            expect(triangle.renderSVG()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${triangle.render()}

  <text x="150" y="135" font-size="60" text-anchor="middle" fill="${triangle.textColor}">${triangle.name}</text>

</svg>`);
        });
    })
});

const Shape = require('../shapes');
const Circle = require('../circle');
const Triangle = require('../triangle');
const Square = require('../square');

describe('Shape', () => {
    it('should allow a name with a maximum length of 3 characters', () => {
        const shapes = new Shape('abc', 'white', '#000000');
        expect(shapes.name).toBe('abc');
    });

    it('should throw an error if the name length exceeds 3 characters', () => {
        expect(() => {
            new Shape('abcd', 'white', '#000000');
        }).toThrow('Name length must not exceed 3 characters');
    });

    it('should allow valid color formats for text and shape', () => {
        const shapes = new Shape('abc', 'White', '#000000');
        expect(shapes.textColor).toBe('White');
        expect(shapes.shapeColor).toBe('#000000');
    });

    it('render must be overridden', () => {
        const shapes = new Shape('abc', 'white', '#000000');
        expect(() => shapes.render()).toThrow('Must be overridden.');
    });

    describe(`Render`, () => {
        it(`circle.render must return SVG shape`, () => {
            const circle = new Circle('abc', 'white', '#000000');
            expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${circle.shapeColor}" />`);
        });

        it(`triangle.render must return SVG shape`, () => {
            const triangle = new Triangle('abc', 'white', '#000000');
            expect(triangle.render()).toEqual(`<polygon points="150, 10 290, 190 10, 190" fill="${triangle.shapeColor}" />`);
        });

        it(`square.render must return SVG shape`, () => {
            const square = new Square('abc', 'white', '#000000');
            expect(square.render()).toEqual(`<rect x="60" y="20" width="180" height="180" fill="${square.shapeColor}" />`);
        });

        it(`square.renderSVG must return SVG`, () => {
            const square = new Square('abc', 'white', '#000000');
            expect(square.renderSVG()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${square.render()}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${square.textColor}">${square.name}</text>

</svg>`);
        });

        it(`circle.renderSVG must return SVG`, () => {
            const circle = new Circle('abc', 'white', '#000000');
            expect(circle.renderSVG()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${circle.render()}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${circle.textColor}">${circle.name}</text>

</svg>`);
        });

        it(`triangle.renderSVG must return SVG`, () => {
            const triangle = new Triangle('abc', 'white', '#000000');
            expect(triangle.renderSVG()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${triangle.render()}

  <text x="150" y="135" font-size="60" text-anchor="middle" fill="${triangle.textColor}">${triangle.name}</text>

</svg>`);
        });
    })
});

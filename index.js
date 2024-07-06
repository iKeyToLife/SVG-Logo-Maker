const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter up to 3 characters for the logo:',
        validate: input => input.length <= 3 || 'Your logo cannot be more than 3 characters',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (color keyword or hexadecimal):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['Triangle', 'Circle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (color keyword or hexadecimal):',
    },
];

inquirer.prompt(questions).then(answers => {
    const { name, textColor, shape, shapeColor } = answers;
    let SVG = ``;
    switch (shape) {
        case `Circle`:
            const circle = new Circle(name, textColor, shapeColor);
            SVG = circle.renderSVG();
            break;
        case `Triangle`:
            const triangle = new Triangle(name, textColor, shapeColor);
            SVG = triangle.renderSVG();
            break;
        case `Square`:
            const square = new Square(name, textColor, shapeColor);
            SVG = square.renderSVG();
    }

    fs.writeFile(`./examples/logo.svg`, SVG, err => {
        if (err) {
            console(`File generation failed`, error)
            return;
        }
        console.log(`Generated logo.svg`);
    })
})
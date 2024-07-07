// Import required modules
const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');

// Define questions for Inquirer.js
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter up to 3 characters for the logo:', // Prompt for logo name up to 3 characters
        validate: input => input.length <= 3 || 'Your logo cannot be more than 3 characters', // Validation: no more than 3 characters
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (color keyword or hexadecimal):', // Prompt for text color (color keyword or hexadecimal)
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:', // Prompt for logo shape
        choices: ['Triangle', 'Circle', 'Square'], // Shape options
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (color keyword or hexadecimal):', // Prompt for shape color (color keyword or hexadecimal)
    },
];

// Run Inquirer.js with defined questions and handle answers
inquirer.prompt(questions).then(answers => {
    const { name, textColor, shape, shapeColor } = answers; // Destructure answers
    let SVG = ``; // Initialize variable for SVG code

    // Check selected shape and create corresponding object
    switch (shape) {
        case `Circle`:
            const circle = new Circle(name, textColor, shapeColor);
            SVG = circle.renderSVG(); // Generate SVG for circle
            break;
        case `Triangle`:
            const triangle = new Triangle(name, textColor, shapeColor);
            SVG = triangle.renderSVG(); // Generate SVG for triangle
            break;
        case `Square`:
            const square = new Square(name, textColor, shapeColor);
            SVG = square.renderSVG(); // Generate SVG for square
    }

    // Attempt to create file
    fs.writeFile(`./examples/logo.svg`, SVG, err => {
        if (err) {
            console(`File generation failed`, error) // Log error if file creation fails
            return;
        }
        console.log(`Generated logo.svg`); // Log success message
    })
})
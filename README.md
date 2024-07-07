# SVG-Logo-Maker

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Example](#example)
- [Repository Link](#repository-link)
- [Video Application](#video-application)

## Description
The objective of this project is to create a Node.js command-line application that generates a logo based on user input and saves it as an SVG file. This application will prompt the user to choose a color and shape, provide text for the logo, and then save the generated logo to a .svg file.

Since this application won't be deployed, it is required to provide a link to a walkthrough video that demonstrates the application's functionality and confirms that all tests pass. This link should be included in the README file of the project.

For additional guidance on creating and sharing the walkthrough video, refer to the Video Submission Guide on the Full-Stack Blog.

## User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Installation

To install the application, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
3. Install the dependencies:
   ```bash
   npm install

## Usage

To use the application, run the following command:

```bash
node index.js
```
Follow the prompts to generate your custom SVG logo.

## Features

- Generate custom SVG logos with user-defined text, colors, and shapes.
- Supports three shapes: circle, triangle, and square.
- Supports color keywords and hexadecimal color values.
- Provides a link to a walkthrough video demonstrating functionality

## Example
The following image demonstrates the application functionality:

![Example SVG Logo](./examples/logo.svg)

This is an example of a generated SVG file.

## Repository Link
[SVG Logo Maker Repository](https://github.com/iKeyToLife/SVG-Logo-Maker)

## Video Application
[SVG Logo Maker video](https://watch.screencastify.com/v/YCtAgJAMohmGm9KVDM3t)
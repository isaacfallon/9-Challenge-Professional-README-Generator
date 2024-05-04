// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
    'What is the description of your project?',
    'What are the installation instructions for your project?',
    'What is the usage instructions for your project?',
    'What is the contribution credits for your project?',
    'What is are the test conditions for your project you would like to list?',
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (error) =>{
        error ? console.log(error) : console.log('Project README file created.')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: "input",
            message: questions[0],
            name: "projectTitle"
        },
        {
            type: "input",
            message: questions[1],
            name: "projectDesc"
        },
        {
            type: "input",
            message: questions[2],
            name: "projectInstallation"
        },
        {
            type: "input",
            message: questions[3],
            name: "projectUsage"
        },
        {
            type: "input",
            message: questions[4],
            name: "projectContribution"
        },
        {
            type: "input",
            message: questions[5],
            name: "projectTests"
        },
    ]).then((response) => {

        const fileName = 'README.md';

        const data = 
`# ${response.projectTitle}
        
## Description
            
${response.projectDesc}
            
## Table of Contents
            
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
            
## Installation
            
${response.projectInstallation}
            
## Usage
            
${response.projectUsage}
            
## License
            
License information here
            
## Contributing
            
${response.projectContribution}
            
## Tests
            
${response.projectTests}
            
## Questions
            
If you have any questions, please reach out here:
            
-Link to GitHub profile
-Link to email address`

writeToFile(fileName, data)
      
    })
}

// Function call to initialize app
init();
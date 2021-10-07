const inquirer= require('inquirer');
const fs = require('fs');
const { builtinModules } = require('module');

inquirer
 .prompt([
    {
       type: 'input',
       message: 'What is the title of your README?',
       name: 'title',
    },
    {
         type: 'input',
         message: 'Give a short description of your project:',
         name: 'description',
    },
   {
        type: 'input',
        message: 'Give a the steps required to install your project:',
        name: 'install',
    },
    {
        type: 'list',
        message: 'Choose a license:',
        choices: [
            "No License",
            "GNU GPLv3",
            "MIT License"
        ],
        name: 'license',
    },
    {
        type: 'input',
        message: "Provide instructions and examples for use:",
        name: "usage"    
    },
    {
        type: 'input',
        message: "Enter instructions for making contributions:",
        name: "contributions"    
    },
    {
        type: 'input',
        message: "Enter test instructions:",
        name: "test"    
    },
    {
        type: 'input',
        message: "Please enter your gitHub username:",
        name: "github"    
    },
    {
        type: 'input',
        message: "Please enter your email address:",
        name: "email"    
    },
   ])
   .then((responses) => {

     let liciNfo = "This project does not have a license.";
     let showLic = "None";
     if(responses.license === "MIT License"){
         licInfo = "This project uses a MIT License.";
         showLic = "MIT";
       }else if(responses.license === "GNU GPLv3"){
           licInfo = "This project uses a GNU GPLv3 License.";
           showLic = "GNU GPLv3";
       }  
       // ${responses.<name>} is used to obtain answers from the user
       const infoDisplay =  `
# ${responses.title} 

${responses.description}

![License badge](https://img.shields.io/badge/license-${showLic}-builtinModules.svg)
     
## Table of Contents:
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
${responses.install}

## Usage
${responses.usage}

## License
${responses.license}

## Contributing
${responses.contributions}

## Tests
${responses.test}

## Questions
GitHub: [${responses.github}](https://github.com/${responses.github})

Additional questions? Email me at ${responses.email}
   `  ;
    fs.writeFile('README3.md', infoDisplay, (err) =>
     err ? console.log(err) : console.log('Successfully created README!') 
    );
}); 

    
     
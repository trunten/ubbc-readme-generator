// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  const { title, description, installation, usage, credits, github, email, license} = data;
  const md = 
`# ${title}

## Description
${description}

## Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contributions](#contributions)
- [License](#license)

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}

## Contributions
Contact me for contributing details:
- Github: [${github}](https://github.com/${github})
- Email: ${email}

## License
${getLicense(license)}
`
    return md;
}

function getLicense(license) {
  switch (license?.toLowerCase()) {
      case "mit":
          return "[![license](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/license/mit-0/)";

      case "apache":
          return "[![license](https://img.shields.io/badge/License-Apache-blue.svg)](https://opensource.org/license/apache-2-0/)";

      case "none":
          return "NONE"

      default:
          return `[![license](https://img.shields.io/badge/License-${license?.replaceAll(" ","%20")}-green.svg)](LICENSE)`;
  }
}

module.exports = generateMarkdown;

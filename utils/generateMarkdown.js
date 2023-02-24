// function to generate markdown for README
export default function generateMarkdown(data) {
  const { title, description, installation, tests, usage, contribution, github, email, license} = data;
  let md = 
`# ${title}

${getLicense(license)}

## Description
${description}

## Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contributions](#contributions)
- [License](#license)

## Installation
\`\`\`${installation}\`\`\`

## Tests
\`\`\`${tests}\`\`\`

## Usage
${usage}

## Credits
Give props here

## Contributions
${contribution ? contribution + "\n" : ""}
Contact me for additional contributing info:
- Github: [${github}](https://github.com/${github})
- Email: ${email}

`;

  if (license && license.toLowerCase() !== "none") {
    md += `## License\n${getLicense(license)}\n\nRefer to the [license](LICENSE) in the repo`;
  }

  return md;
}

function getLicense(license) {
  switch (license?.toLowerCase()) {
      case "mit":
          return "[![license](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/license/mit-0/)";

      case "apache":
          return "[![license](https://img.shields.io/badge/License-Apache-blue.svg)](https://opensource.org/license/apache-2-0/)";

      case "none":
          return ""

      default:
          return `[![license](https://img.shields.io/badge/License-${license?.replaceAll(" ","%20")}-green.svg)](LICENSE)`;
  }
}

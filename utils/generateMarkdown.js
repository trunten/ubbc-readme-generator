import { getLicense } from './licenses.js';

// function to generate markdown for README
export default function generateMarkdown(data) {
  const { github, email, title, description, licenseName, installation, tests, usage, contribution} = data;
  const license = getLicense(licenseName === "Other" ? data.licenseOther : licenseName);

  let md = 
`# ${title}

${license.mdBadge || ""}

## Description
${description}

## Table of contents
- [Installation](#installation)${tests !== "" ? "\n- [Tests](#tests)" : ""}
- [Usage](#usage)
- [Credits](#credits)
${contribution !== "" ? "- [Contributing](#contributing)\n" : ""}${license.name ? "- [License](#license)" : ""}

## Installation
\`\`\`${installation}\`\`\`

${tests !== "" ? `## Tests
\`\`\`${tests}\`\`\``: ""}

## Usage
${usage}

${contribution !== "" ? "## Contributing\n" + contribution : ""}

## Questions
- Github Profile: [${github}](https://github.com/${github.replaceAll(" ", "%20")})
- Contact me with any questions you may have via email at [${email}](mailto:${email.replaceAll(" ", "%20")})

`;

  if (licenseName.toLowerCase() !== "none") {
    md += `## License\n${license.mdBadge}\n\n${license.mdLink}`;
  }

  return md;
}

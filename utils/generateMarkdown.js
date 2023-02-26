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

## Credits
List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

${contribution !== "" ? "## Contributing\n" + contribution : ""}

## Questions
Contact me for any questions you may have:
- Github: [${github}](https://github.com/${github})
- Email: ${email}

`;

  if (licenseName.toLowerCase() !== "none") {
    md += `## License\n${license.mdBadge}\n\nRefer to the license [(${license.name})](${license.url}) in the repo`;
  }

  return md;
}

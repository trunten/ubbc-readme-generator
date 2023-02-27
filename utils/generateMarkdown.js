import { getLicense } from './licenses.js';

// function to generate markdown for README
export default function generateMarkdown(data) {
  const { github, email, title, description, licenseName, installation, tests, usage, contribution} = data;
  const license = getLicense(licenseName === "Other" ? data.licenseOther : licenseName);
  let toc = `## Table of contents
  - [Installation](#installation)
  - [Usage](#usage)`;
  if (contribution !== "") { toc += "\n- [Contributing](#contributing)" }
  if (tests !== "") { toc += "\n- [Tests](#tests)" }
  if (license.name) { toc += "\n- [License](#license)" }

  let md = 
`# ${title}

${license.mdBadge || ""}

## Description
${description}

${toc}

## Installation
\`\`\`
${installation}
\`\`\`

## Usage
${usage}

${contribution !== "" ? "## Contributing\n" + contribution : ""}

${tests !== "" ? `## Tests
\`\`\`
${tests}
\`\`\``: ""}

## Questions
- Github Profile: [${github}](https://github.com/${github.replaceAll(" ", "%20")})
- Contact me with any questions you may have via email at [${email}](mailto:${email.replaceAll(" ", "%20")})

`;

  if (licenseName.toLowerCase() !== "none") {
    md += `## License\n${license.mdBadge}\n\n${license.mdLink}`;
  }

  return md;
}

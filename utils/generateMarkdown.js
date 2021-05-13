// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `- [License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let temp = `

# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink}
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Tests

${data.credit}

${renderLicenseSection(data.license)}

## Questions

[GitHub](https://github.com/${data.userName})

[Email](${data.email})

  `;

  return temp;
}

module.exports = generateMarkdown;

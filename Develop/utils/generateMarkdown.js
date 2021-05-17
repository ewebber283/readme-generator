
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license = 'MIT') {
    return 'https://img.shields.io/badge/License-MIT-yellow.svg'
  } else if (license = 'Apache 2.0') {
    return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
  } else if (license = 'GPL 3.0') {
    return 'https://img.shields.io/badge/License-GPLv3-blue.svg'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license = 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  } else if (license = 'Apache 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0'
  } else if (license = 'GPL 3.0') {
    return 'https://www.gnu.org/licenses/gpl-3.0'
  } else {
    return ''
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 if (license = 'none') {
   return ''
 }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}

  ## Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributing](#contributions)
  *[Questions](#questions)

  ### Installation:
  ${data.installation}

  ### Usage
  ${data.usage}

  ### License
  ${data.license}

  ### Contributing
  ${data.contributions}

  ### Questions
  Contact information:
  Github: https://github.com/${data.username}
  Email Address: ${data.email}
`;
}

module.exports = generateMarkdown;

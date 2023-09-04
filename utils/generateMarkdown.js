// function to generate markdown for README
function generateMarkdown(info) {
  return `
  # ${info.title}

  ## Description
  ${info.description}

  ## Table of Content
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Test](#tests)
  - [Questions](#questions)

  ## Installation
  ${info.instruction}

  ## Usage
  ${info.usage}

  ## License
  The license is ${info.license}.

  ## Contributing
  ${info.contribution}

  ## Tests
  ${info.tests}

  ## Questions
  - Github: [${info.githubUsername}](https://github.com/${info.githubUsername})
  - Email: ${info.email}

`;
}

module.exports = generateMarkdown;

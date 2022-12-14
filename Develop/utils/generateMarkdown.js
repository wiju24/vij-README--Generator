// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data){
  const badgeLink = `![Licence badge](https://img.shields.io/badge/licence-${data.license}-orange.svg)`;
  if(data.license === `MIT`){
    return badgeLink;
  }else if(data.license === `Boost-Software-License-1.0`){
    return badgeLink;
  }else if(data.license === `The-Unlicense`){
    return badgeLink;
  }else{
    return badgeLink;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  const MIT = `https://choosealicense.com/licenses/mit/#`;
  const Mozilla = `https://choosealicense.com/licenses/mpl-2.0/`;
  const Boost = `https://choosealicense.com/licenses/bsl-1.0/`;
  const Unlicense = `https://choosealicense.com/licenses/unlicense/`;

  if(data.license === `MIT`){
    return MIT;
  }else if(data.license === `Boost Software License 1.0`){
    return Boost;
  }else if (data.license === `The Unlicense`){
    return Unlicense;
  }else{
    return Mozilla;
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [Usage](#usage)
  * [Installation](#installation)  
  * [Contribution](#contribution)  
  * [Testing](#testing)  
  * [Licenses](#licenses)  
  * [Socials](#socials)

  ## Description
  ${data.description}

  ## Usage
  ${data.usage}

  ## Installation 
  ${data.installation}

  ## Contributing Guidelines
  ${data.contribution}

  ## Testing 
  ${data.testing}

  ## Licenses
  [${data.license}](${renderLicenseLink(data)})
  ${renderLicenseBadge(data)} 

  ## Socials

  For any questions or concerns regarding this project, refer back to my github (https://github.com/${data.githubUsername}). For any other inquiries, use ${data.email} to get in touch with myself directly.
  `;
}
module.exports = generateMarkdown;

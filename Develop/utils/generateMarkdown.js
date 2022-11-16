// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data){
  const badgeLink = `![Licence badge](https://img.shields.io/badge/Licence-${data.license}-orange)`;
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
  }else if(data.license === `Boost-Software-License-1.0`){
    return Boost;
  }else if (data.license === `The-Unlicense`){
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

`;
}

module.exports = generateMarkdown;

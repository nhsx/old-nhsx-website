# Contributing to the NHSX website

## Contents
- [About this application](#about-this-application)
- [Running the application locally](#running-the-application-locally)
- [Application structure](#application-structure)
- [Versioning](#versioning)
- [Releases & Deployments](#releases--deployments)

## About this application

The website is a simple [express.js](https://expressjs.com/) application, which uses [nunjucks templating](https://mozilla.github.io/nunjucks/) for the HTML, [Sass](https://sass-lang.com/) for the CSS and JavaScript (with support for ES6) - all of which are compiled to plain HTML, CSS, JavaScript using [npm scripts](https://docs.npmjs.com/misc/scripts). We use various open source third party npm dependencies to achieve this, these are listed within the `package.json` file.

The website is built using the [NHS.UK frontend library](https://github.com/nhsuk/nhsuk-frontend), so you can use any of the components within the [NHS digital service manual](https://beta.nhs.uk/service-manual/styles-components-patterns).

## Running the application locally

To run the NHSX website locally you'll need to:

* [set up git](https://help.github.com/articles/set-up-git/)
* [install Node.js](https://nodejs.org/en/)

We recommend to use the [long-term support (LTS) version of Nodejs](https://nodejs.org/en/download/), rather than the latest beta version.

Clone the repository `git clone git@github.com:nhsx/nhsx-website.git nhsx-website`, then whilst in the project directory `cd nhsx-website`, install the required npm packages with: `npm install`

Run the project in development mode `npm run watch` and visit <a href="http://localhost:3000">http://localhost:3000</a>.

## Application structure

`.github/`

  GitHub specific files, such templates for pull requests and issues.
  
`app/`

  This folder contains all the files you need for the website.
  
  `app/assets`
  
   Images, Documents etc
  
  `app/scripts`
  
   JavaScript 
  
  `app/styles`
  
   CSS (Sass)
  
  `app/views`
  
   HTML (Nunjucks)
 
`node_modules/` (Automatically generated)

 Node package manager modules for third party dependencies. This folder is automatically generated when running `npm install`. Don't manually edit files in this folder as they will be deleted.  
  
`public/` (Automatically generated)

 Automatically generated compiled files and build assets for the website. Don't manually edit files in this folder as they will be deleted.

## Versioning

Versioning follows a [semver](https://semver.org/) approach, with the version number being in the `package.json` file and a `CHANGELOG.md` file documenting the changes between each release. For best practice, the version number should be bumped and a change log entry added for each release.

## Releases & Deployments

Deployments to the staging environment [https://nhsx-website-stag-uks.azurewebsites.net/](https://nhsx-website-stag-uks.azurewebsites.net/) happen when changes are made to the `master` branch. Pull requests are required to make any changes to the `master` branch, which require at least 1 person to approve the pull request, usually a project maintainer.

To release to the live environment [https://www.nhsx.nhs.uk/](https://www.nhsx.nhs.uk/), create a new tag and release under the [GitHub releases page](https://github.com/nhsx/nhsx-website/releases). The live environment sits behind a service called Akamai, a firewall and cache, the cache is set to 20 minutes so it will be around 20 minutes until you see the changes after releasing.

# NHSX website

## About the NHSX website

From 1 July, NHSX will bring together teams from the Department of Health and Social Care, NHS England and NHS Improvement to drive digital transformation in health and care.

The NHSX website contains information about what we do, who we are, how we work and also links to key information and tools.

We have built the website using the [NHS.UK frontend library](https://github.com/nhsuk/nhsuk-frontend).

## Contributing

The code for the NHSX website is open source and we encourage contributions. So if you come across a bug or a spelling mistake, feel free to open a pull request with your changes or you can open a GitHub issue to report it to us.

## Running the application

### 1. Requirements

* [set up git](https://help.github.com/articles/set-up-git/)
* [install Node.js](https://nodejs.org/en/)
We recommend to use the [long-term support (LTS) version of Nodejs](https://nodejs.org/en/download/), rather than the latest beta version.

> Type `git --version` to check if git is installed. This should print a version number like "git version 2.18.0".

> Type `node -v` to check if Node is installed. This should print a version number like "v8.11.3".

### 2. Clone or fork the repository

[Fork the repository](https://help.github.com/articles/fork-a-repo/) first, if you're an external contributor.

You can clone the repository directly if you're a member of the [NHSX GitHub organisation](https://github.com/nhsx/)

```
git clone git@github.com:nhsx/nhsx-website.git nhsx-website
```

Otherwise clone your own fork:

```
git clone https://github.com/[Username]/nhsx-website.git nhsx-website
```

> Replace '[Username]' in the git clone command above with your own GitHub username.

### 3. Install dependencies

We use [node package manager (npm)](https://docs.npmjs.com/getting-started/what-is-npm) to manage third party dependencies.

Whilst in the project directory you will need to install the dependencies listed in `package.json`

```
cd nhsx-website
```

```
npm install
```

## 4. Start a local server

This will build files, serve web pages and watch for changes when you save a file.

```
npm run watch
```

> The application will be available at [http://localhost:3000](http://localhost:3000).

## License

The codebase is released under the MIT License, unless stated otherwise. This covers both the codebase and any sample code in the documentation.

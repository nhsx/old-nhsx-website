# NHSX website

## About the NHSX website

From 1 July, NHSX will bring together teams from the Department of Health and Social Care, NHS England and NHS Improvement to drive digital transformation in health and care.

The NHSX website contains information about what we do, who we are, how we work and also links to key information and tools.

We have built the website using the [NHS.UK frontend library](https://github.com/nhsuk/nhsuk-frontend).

## Quick start

### Running the application

Install the long-term support (LTS) version of <a href="https://nodejs.org/en/">Node.js</a>, which also includes NPM.

Clone the repository `git clone git@github.com:nhsx/nhsx-website.git nhsx-website`, then whilst in the project directory `cd nhsx-website`, install the required npm packages with: `npm install`

Run the project in development mode `npm run watch` and visit <a href="http://localhost:3000">http://localhost:3000</a>.

## Contributing

The code for the NHSX website is in the open and we encourage contributions. So if you come across a bug or a spelling mistake, feel free to open a pull request with your changes or you can open a GitHub issue to report it to us.

## Environment variables

Environment variables are expected to be managed by the environment in which
the application is being run.

| Variable      | Description       | Default         | Required  |
| ------------- | ----------------- | --------------          | --------- |
| `GOOGLE_UA`      | Google analytics user account ID          |         | No
| `COOKIE_CONSENT_URL`      | The URL for the [NHS.UK in-house implementation of cookie consent](https://github.com/nhsuk/cookie-consent)    | //assets.nhs.uk/scripts/cookie-consent.js |
| `BASE_URL`      | Domain of the environment          | https://www.nhsx.nhs.uk |
| `NODE_ENV`      | Node environment. Recommend environments: `production`, `staging` and `development`  |  development            |
| `PORT`          | Server port       |  3000                   |

## License

The codebase is released under the MIT License, unless stated otherwise. This covers both the codebase and any sample code in the documentation.

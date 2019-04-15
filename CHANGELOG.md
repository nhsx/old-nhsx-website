# Changelog

## 1.0.2 - 15/04/2019

- Update package dependencies including latest version (2.1.0) of the NHS.UK frontend
- Add robots.txt and sitemap.xml ([Issue 14](https://github.com/nhsx/nhsx-website/issues/14))

## 1.0.1 - 05/04/2019

- Reorder the asset `preconnect` and remove unneeded `dns-prefetch` ([Issue 9](https://github.com/nhsx/nhsx-website/issues/9))
- Terms and conditions content amendments
- Update the default `BASE_URL` to include `www`
- Added simple Web App Manifest file
- Who we are content amendments

## 1.0.0 - 04/04/2019

:rocket: Release of the NHSX website (https://nhsx.nhs.uk)

## 0.0.6 - 04/04/2019

- Document the default `BASE_URL` environment variable
- Tweak spacing below the video container on Homepage
- Add OGL licence to the footer
- Populated the terms and conditions page content
- Populated the privacy policy page content
- Added Matt Hancock video to homepage

## 0.0.5 - 04/04/2019

- Fix issue with menu navigation item hover focus colour
- Add if statement to prevent errors with missing variables
- Add email address and further content amendments
- Tweak the spacing of the right hand navigation on mobile
- Tweak the spacing between page sections on the homepage
- Streamline the documentation for running the application
- Configure variables to be set with environment variables to avoid code changes
- Content amendments across the website with newly signed off content
- Content amendments to include health and social care
- Tweak the width of the hero on mobile and spacing below
- Add promo to Homepage for blogs and updates promotion 
- Populate the policies and key information and tools pages with descriptions and lead text
- Set a base URL for the app for any assets that require a full path
- Update the hero header image to the final version
- Build the assets before running in development mode
- Add open graph meta data and image for social media cards
- Tidy up SCSS code by separating into files and lint the code

## 0.0.4 - 03/04/2019

- Remove unused tests and dependencies
- Fix issue with the cookie success banner link hover colour not being accessible
- Combine the key documents page with the policy, strategy and national programmes page
- Fix issue with Google analytics script not being classed as statistics type
- Populate the cookie policy with cookies we use
- Populate the accessibility statement with approved content
- Use the correct URL for the cookies policy page
- Use the approved Hero header image on the homepage
- Fix invalid HTML and add cookie declaration to the sitemap
- Create a 404 page with some basic content
- Improve the README file with a description and contributing
- Use the NHSX blue for the homepage hero background colour
- Fix the spacing and sizing of typography and components on content pages
- Embed videos within content pages, with responsive styling added
- Add missing main element to the Homepage for the skip link component
- Populate pages with approved content
- Add placeholder Homepage sections for video and get involved
- Use an improved SVG icon for the NHSX logo
- Add hero and promo components with additional NHSX styling to the homepage
- Use the correct CSS spelling color for the NHSX colour variables

## 0.0.3 - 02/04/2019

- Fix issue on Internet Explorer with the NHSX logo being auto width
- Use Google Analytics instead of Adobe Analytics due to the jQuery dependency required by Adobe
- Add placeholder content pages and page descriptions
- Populated the sitemap page with a hotfix for nested list spacing [NHS.UK frontend issue 430](https://github.com/nhsuk/nhsuk-frontend/issues/430)
- Add placeholder page title and description fields to each page
- Add placeholder policy and sitemap pages
- Apply NHSX styling to the Header and Footer components
- Use Header component with a navigation menu
- Import JavaScript modules from NHS.UK frontend package rather than local files
- Move build task dependencies to be devDependencies rather than regular
- Use Webpack to compile JavaScript bundles instead of rollup.js
- Add cookie policy page logic with placeholder cookie declaration page
- Add missing '/' to correct the paths for the CSS/JS files
- Use manual express routes and tidy up BrowserSync config
- Use NHS.UK eslint config
- Include JavaScript for the skip link to function properly
- Add NHS.UK cookie consent banner, for cookie management across NHS.UK

## 0.0.2 - 29/03/2019

- Remove production analytics tracking until go live
- Add pull request templates for contributors
- Use gzip compression to increase the speed of web app

## 0.0.1 - 29/03/2019

- Add Adobe Analytics, our chosen analytics platform, to the different environments
- Setup deployment and CI pipelines in Azure
- Use the NHS.UK frontend library and apply basic NHS.UK template
- Initial application structure and configuration

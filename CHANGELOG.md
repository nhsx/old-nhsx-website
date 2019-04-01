# Changelog

## 0.0.3 - Unreleased

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

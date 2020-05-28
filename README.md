# Matchbox
Matchbox is an open source React component library, built for [SparkPost's UI](https://github.com/SparkPost/2web2ui).

[![Build Status](https://img.shields.io/travis/SparkPost/matchbox/master.svg?style=flat-square)](https://travis-ci.org/SparkPost/matchbox)
[![Coverage Status](https://img.shields.io/coveralls/github/SparkPost/matchbox/master.svg?style=flat-square)](https://coveralls.io/github/SparkPost/matchbox?branch=master)
[![Playroom](https://img.shields.io/badge/Try%20it%20with-Playroom-black.svg?style=flat-square&colorA=009f6a&longCache=true)](https://matchbox-playroom.netlify.app/)

#### Links:
- [Component Demo](https://sparkpost.github.io/matchbox/)
- [Sass Documentation](packages/matchbox/src/styles/README.md)
- [Unreleased Changes](unreleased.md)

---

## Usage
### 1. Installation

In your React project, use npm to install matchbox:
```bash
npm install @sparkpost/matchbox --save
```

### 2. Include Styles

```scss
 // Import matchbox's styles
 @import '~@sparkpost/matchbox/styles.scss';
 // Optionally include config.scss for sass functions and mixins
 @import '~@sparkpost/matchbox/src/styles/config.scss';
```

### 3. Use the React components
In-depth usage docs coming in the future. For now, reference [storybook](https://sparkpost.github.io/matchbox/).
```js
import React from ‘react’;
import { Panel } from '@sparkpost/matchbox';

const YourComponent = () => (
 <Panel accent title='Hey!'>
  <Panel.Section>
    Section Content
  </Panel.Section>
 </Panel>
);
```

## Storybook Development
[React Storybook](https://github.com/storybooks/storybook) is included for local development.
```bash
# Runs storybook at localhost:9001
npm run start:storybook
```

## Running Tests

### Unit Testing
When running tests for the first time locally:
```bash
npm run pretest
```

After the initial setup, tests can be run at any time via:
```bash
npm run test:unit
```

### End to End Testing
End to end tests can be run locally, either in headless mode or with a GUI.

First, run storybook with a local server:
```bash
npm run start:storybook
```

Then, either run Cypress in headless mode:
```bash
npm run test:e2e:headless
```

Or, run Cypress with the GUI
```bash
npm run test:e2e:gui
```

## Publishing
```bash
# First merge your PR into master
# Move into the package you want to publish
cd packages/matchbox

# Bump version number
npm version x.x.x

# Commit the release
git add .
git commit -m "Publish @sparkpost/matchbox x.x.x"
git push

# Run the build and publish to NPM with your 2fa code
npm run build
npm publish --otp=xxxxxx
```

# Matchbox
Matchbox is a React component library for [SparkPost's UI](https://github.com/SparkPost/2web2ui).

[![Build Status](https://img.shields.io/travis/SparkPost/matchbox/master.svg?style=flat-square)](https://travis-ci.org/SparkPost/matchbox) 
[![Coverage Status](https://img.shields.io/coveralls/github/SparkPost/matchbox/master.svg?style=flat-square)](https://coveralls.io/github/SparkPost/matchbox?branch=master)

#### Links:
- [Component Demo](https://sparkpost.github.io/matchbox/)
- [Sass Documentation](src/styles/README.md)

---

## Usage
### 1. Installation

In your react project, run:
```bash
npm install @sparkpost/matchbox --save
```

### 2. Include Styles

Add `node_modules` to your webpack config's `includePaths` and import the Matchbox styles from your CSS:

```css
/*
  Transpiled scss and css, both are identical
  Include this only once in your app to include both Matchbox component and global styles
*/
@import '~@sparkpost/matchbox/styles.scss';
@import '~@sparkpost/matchbox/styles.css';

/*
  Config does not output and css
  Use this within your own styles or if you want to use Matchbox functions or mixins
*/
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

## Build
```bash
# Runs the rollup build
npm run build
```

## Storybook Development
[React Storybook](https://github.com/storybooks/storybook) is included for local development.
```bash
# Runs storybook locally at localhost:6006
npm run storybook

# Deploys to gh-pages
npm run deploy-storybook
```

## Local Development with 2web2ui
Watch mode is not implemented, unfortunately. You will have to run the rollup build every time you want 2web2ui to update with changes.

```bash
# Make sure to turn off your webpack dev server before linking
# 1. Build Matchbox and npm link this repo
npm link
npm run build

# 2. Link 2web2ui to this repo
cd ~/path/to/2web2ui
npm link @sparkpost/matchbox

# 3. Start webpack
npm run start
```


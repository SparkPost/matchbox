# Matchbox

[Component Demo](https://sparkpost.github.io/matchbox/)

## Usage
### 1. Installation

In your react project, run:
```bash
npm install @sparkpost/matchbox --save
```

### 2. Include Styles
There are multiple ways to use Matchbox's styles. If you aren't running a build tool like webpack and just need to import all the css, use `styles.css`

Source files are written in Sass (`.scss`). You can add `node_modules` to your webpack config's `includePaths` and import the files like:
```css
/*
  Global includes a general styles reset
  Include this only once globally
*/
@import '~@sparkpost/matchbox/src/styles/config.scss';

/*
  Transpiled css in scss format - .css also available
  Include this only once to include React component styles
*/
@import '~@sparkpost/matchbox/styles.scss';

/*
  Config does not output and css, only holds functions and mixins.
  Use this for your own component styles
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

## Local Development
[React Storybook](https://github.com/storybooks/storybook) is included for local development.
```bash
# Runs storybook locally
npm run storybook

# Deploys to gh-pages
npm run deploy-storybook
```

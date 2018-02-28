# Matchbox

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

## Local Development
[React Storybook](https://github.com/storybooks/storybook) is included for local development.
```bash
# Runs storybook locally
npm run storybook

# Deploys to gh-pages
npm run deploy-storybook
```

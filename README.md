# Matchbox


## Usage
### 1. Installation

In your react project, run:
```bash
npm install @sparkpost/matchbox --save
```
Or, if you prefer yarn:
```bash
yarn add @sparkpost/matchbox
```

### 2. Include Styles
There are multiple ways to use Matchbox's styles. If you want to import everything as css use:
```css
@import '@sparkpost/matchbox/styles.css'
```

If you want to pull in the Sass and global reset separately, you can use:
```css
@import '~@sparkpost/matchbox/src/config.scss';
@import '~@sparkpost/matchbox/src/global.scss';
```
`config` does not output any CSS, and only holds functions and mixins, while `global` includes a baseline styles reset. 


### 3. Use the React components
Usage docs coming soon!
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

## Local Development
[React Storybook](https://github.com/storybooks/storybook) is included for local development.
```
yarn storybook
```

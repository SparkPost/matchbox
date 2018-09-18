# Matchbox
Matchbox is an open source React component library, built for [SparkPost's UI](https://github.com/SparkPost/2web2ui).

[![Build Status](https://img.shields.io/travis/SparkPost/matchbox/master.svg?style=flat-square)](https://travis-ci.org/SparkPost/matchbox)
[![Coverage Status](https://img.shields.io/coveralls/github/SparkPost/matchbox/master.svg?style=flat-square)](https://coveralls.io/github/SparkPost/matchbox?branch=master)

#### Links:
- [Component Demo](https://sparkpost.github.io/matchbox/)
- [Sass Documentation](src/styles/README.md)

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

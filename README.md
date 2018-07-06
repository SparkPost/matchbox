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

```js
 // TODO: fill this out
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

## Local Development with your app

```bash
# Make sure to turn off your webpack dev server before linking
# npm link this repo
npm link

# Build the packages
npm run build

# You can also run the packages in watch module if you prefer
# Specify the package you want to watch with --scope
lerna exec --scope @sparkpost/matchbox -- npm run watch

# Link your app to this repo
cd ~/path/to/your-app
npm link @sparkpost/matchbox
npm link @sparkpost/matchbox-icons

# Start your app
npm run start
```

# Matchbox


## Usage
### 1. Installation
This project isn't published publicly on NPM yet. To use it in its current state, `npm link` this repository into your react project.

In your react project, run:
```bash
npm install @sparkpost/matchbox --save
```
Or, if you prefer yarn:
```bash
yarn add @sparkpost/matchbox
```

### 2. Include Styles
Import the CSS directly if your project's tooling supports it:
```css
@import '@sparkpost/matchbox/styles.css'
```
Or, include the CSS in your HTML
```html
<link rel="stylesheet" href="TODO CDN link?">
```


### 3. Use the React components
```js
import React from ‘react’;
import { Foo } from '@sparkpost/matchbox';

const YourComponent = () => (
 <div>
  <Foo></Foo>
 </div>
);

```

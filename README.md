# Matchbox

Matchbox is an open source design system and React component library, built for
[SparkPost's UI](https://github.com/SparkPost/2web2ui).

![Build](https://img.shields.io/github/workflow/status/SparkPost/matchbox/Build?label=Build&style=flat-square)
![Tests](https://img.shields.io/github/workflow/status/SparkPost/matchbox/Unit%20and%20Cypress%20Tests?label=Tests&style=flat-square)
![Codecov](https://img.shields.io/codecov/c/gh/SparkPost/matchbox?label=Coverage&style=flat-square)
[![Playroom](https://img.shields.io/badge/Try%20it%20with-Playroom-black.svg?style=flat-square&colorA=009f6a&longCache=true)](https://matchbox-playroom.netlify.app/)

##### Deploy Status

[![Website Status](https://api.netlify.com/api/v1/badges/0ce1d44f-e768-4a1a-b7da-0cf637a2b854/deploy-status)](https://app.netlify.com/sites/sparkpost-matchbox/deploys)

[![Storybook Status](https://api.netlify.com/api/v1/badges/d9885b5c-2b54-4d4d-82c0-0e28349d2334/deploy-status)](https://app.netlify.com/sites/matchbox-storybook/deploys)

[![Playroom Status](https://api.netlify.com/api/v1/badges/f2107970-a943-4662-bc75-81b4bd806e6c/deploy-status)](https://app.netlify.com/sites/matchbox-playroom/deploys)

---

## Welcome to Matchbox Development

Looking for documentation? See:

- [Design System Website](https://design.sparkpost.com)
- [Storybook](https://matchbox-storybook.netlify.app/)
- [Playroom](https://matchbox-playroom.netlify.app/)

### Getting Started

Matchbox uses [Lerna](https://github.com/lerna/lerna) to manage packages.

First install `lerna` globally, then run the following commands to get started:

```bash
npm i -g lerna
git clone git@github.com:SparkPost/matchbox.git
cd matchbox
npm i
lerna bootstrap
```

### Root Repo Scripts

```bash
# Start Scripts
npm run start:storybook   # Runs storybook
npm run start:site        # Runs the design system website
npm run start:playroom    # Runs playroom

# Test Scripts
# Integration tests require storybook to be running first
npm run pretest           # Run before running tests for first time
npm run test:unit         # Runs unit tests
npm run test:e2e:gui      # Runs integration tests
npm run test:e2e:headless # Runs integration tests in headless mode

# Build Scripts
npm run build             # Builds all packages
```

### Releases

We use `lerna` to handle versioning and publishing to NPM. Before publishing, ensure you are logged
into SparkPost's NPM account locally via the NPM CLI.

```bash
# Update the package versions with lerna. The CLI will prompt you
# to pick versions for each package that changed.
lerna version

# Publish to NPM
# Prepublish scripts will build each package and the CLI will
# prompt you for a one-time password from your authenticator
lerna publish from-package

# Remember to clear unreleased.md of any changes you pushed out!
# That's it!
```

# Matchbox

Matchbox is an open source design system and React component library, built for
[SparkPost's UI](https://github.com/SparkPost/2web2ui).

![Build](https://img.shields.io/github/workflow/status/SparkPost/matchbox/Build?label=Build&style=flat-square)
![Tests](https://img.shields.io/github/workflow/status/SparkPost/matchbox/Unit%20and%20Cypress%20Tests?label=Tests&style=flat-square)
![Codecov](https://img.shields.io/codecov/c/gh/SparkPost/matchbox?label=Coverage&style=flat-square)
![Website Deploy](https://img.shields.io/netlify/0ce1d44f-e768-4a1a-b7da-0cf637a2b854?label=Website%20Deploy&style=flat-square)
![Storybook Deploy](https://img.shields.io/netlify/d9885b5c-2b54-4d4d-82c0-0e28349d2334?label=Storybook%20Deploy&style=flat-square)
![Playroom Deploy](https://img.shields.io/netlify/f2107970-a943-4662-bc75-81b4bd806e6c?label=Playroom%20Deploy&style=flat-square)

---

## Welcome to Matchbox Development

Want to start using Matchbox? See:

- [Getting Started](https://design.sparkpost.com/components/overview)

Looking for documentation? See:

- [Design System Website](https://design.sparkpost.com)
- [Storybook](https://matchbox-storybook.netlify.app/)
- [Playroom](https://matchbox-playroom.netlify.app/)

### Collaborating on Matchbox

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

Our release process isn't perfect, and for now **only administrators can publish**.

We use `lerna` to handle versioning and publishing to NPM. Before publishing, ensure you are logged
into SparkPost's NPM account locally via the NPM CLI.

**Important** - In order to run `changelog` you'll need to create a personal access token with the
`public_repo` permissions and copy it to a `GITHUB_AUTH` variable in an `.env` file.

```bash
# This generates a markdown changelog for your release
# Remember to copy this output and add it to CHANGELOG.md
npm run changelog

# Update the package versions with lerna. The CLI will prompt you
# to pick versions for each package that changed.
# See https://github.com/lerna/lerna/tree/master/commands/version
lerna version

# Publish to NPM
# Prepublish scripts will build each package and the CLI will
# prompt you for a one-time password from your authenticator
# See https://github.com/lerna/lerna/tree/master/commands/publish
lerna publish

# That's it!
```

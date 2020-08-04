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

- [Getting Started](https://design.sparkpost.com/components/getting-started)

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

Our release process isn't perfect, and requires some manual work.

We use `lerna` to handle versioning and publishing to NPM. Before publishing, ensure you are logged
into SparkPost's NPM account locally via the NPM CLI. Reach out to #UXFE or #design-guild on Slack
if you need access.

**Publishing Steps**

1. Merge all pull requests you wish to release to `main`.
1. Before publishing for the first time, set up your github auth token in `.env`. In order to run
   `changelog` you'll need to create a personal access token with the `public_repo` permissions and
   copy it to a `GITHUB_AUTH` variable in an `.env` file.
1. On the `main` branch, run `npm run changelog`. This generates a markdown changelog in
   `CHANGELOG.md`.
1. Open and edit `CHANGELOG.md` with correct title and version number of your release.
1. Push these changes to `main` if you have permissions, or on a new branch.
1. Run `lerna version --force-publish`. The Lerna CLI will prompt you for version numbers. The
   `force-publish` flag will force all packages to be bumped to the same version. See
   https://github.com/lerna/lerna/tree/master/commands/version.
1. Run `lerna publish from-package`. The Lerna CLI will prompt you for a one time password from your
   authenticator. See https://github.com/lerna/lerna/tree/master/commands/publish.

**What the commands look like:**

```bash
npm run changelog
# Open the changelog file and edit
git add CHANGELOG.md
git commit -m "Update CHANGELOG.md"
git push
lerna version --force-publish
lerna publish from-package
# That's it!
```

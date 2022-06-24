# Matchbox

Matchbox is an open source design system and React component library, built for [SparkPost's UI](https://github.com/SparkPost/2web2ui).

![Build](https://img.shields.io/github/workflow/status/SparkPost/matchbox/Build?label=Build&style=flat-square) ![Tests](https://img.shields.io/github/workflow/status/SparkPost/matchbox/Unit%20and%20Cypress%20Tests?label=Tests&style=flat-square) ![Codecov](https://img.shields.io/codecov/c/gh/SparkPost/matchbox?label=Coverage&style=flat-square)

---

## Welcome to Matchbox Development

Want to start using Matchbox? See:

- [Getting Started](https://design.sparkpost.com/foundations/getting-started-for-developers)

Looking for documentation? See:

- [Design System Website](https://design.sparkpost.com)

### Root Repo Scripts

```bash
# Start Scripts
npm run start:libby       # Runs libby

# Test Scripts
# Integration tests require libby to be running first
npm run pretest           # Run before running tests for first time
npm run test:unit         # Runs unit tests
npm run test:e2e:gui      # Runs integration tests
npm run test:e2e:headless # Runs integration tests in headless mode

# Build Scripts
npm run build             # Builds all packages
```

### Releases

We use `changesets` to handle versioning and publishing to NPM. Before publishing, ensure you are logged into SparkPost's NPM account locally via the NPM CLI. We recommend reviewing the following steps and [changeset's documentation](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md) before proceeding.

**Publishing Steps**

1. Merge all pull requests you wish to release to `main`.
1. Run `npx changset`. This will let you select which packages you'd like to include and to which version. Hint: use `space` to select options, and `enter` to proceed. Don't worry about the summary, this is editable later on.
1. Ensure the changeset you just created has an accurate summary, located in the `.changeset` directory.
1. If you are not ready to publish just yet, commit your changeset to git.
1. Run `npx changeset version`. This will consume any changesets previously created, bump the packages, and update changelogs.
1. Run `npm run build` to build all packages.
1. Run `npx changeset publish`. This will publish all bumped packages to NPM. You will be required to enter your NPM OTP.
1. Lastly, double check the git tags were pushed to this repo in the releases section. If not, push the tags manually.

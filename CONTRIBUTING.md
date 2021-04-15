# Contribute

> [English](./CONTRIBUTING.md), [中文](./CONTRIBUTING.ZH_CN.md)

Any community contributions are welcome and need to comply with the [Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)

## Code style

Please use the prettier configuration formatting code in the project, please refer to [Prettier Editor Integration](https://prettier.io/docs/en/editors.html)

## Submit message

The submission message should start with the following keywords, refer to: [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)

## Test

If you modify the code, you need to update the unit test. If the test fails, it may not be accepted.

> Testing needs to use [Joplin Developer Mode](https://joplinapp.org/api/references/development_mode/)

## Development

- `build`: package code
- `dev`: package code (monitor mode)
- `deploy`: Generate and deploy api documentation
- `test`: Run all unit tests

## Publish

1. `yarn test` runs all unit tests
2. `yarn build` package code
3. `yarn version` update version and create label
4. Update the release information of `CHANGELOG.md`
5. `npm publish` publish to npm
6. Generate and deploy documents with `yarn deploy`

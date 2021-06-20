# CHANGELOG

## 0.2.0

- Rename package `i18next-typescript-generator` => `@liuli-util/i18next-dts-gen`
- Internationalization of the cli itself
- Support for generating type definitions for multiple directories at once
- Support monitoring mode
- Remove the gen subcommand and use the `i18next-dts-gen` command directly
- Use ast to refactor the type definition generation part, replacing the original string splicing
- The refactoring code is divided into `Watcher/Scanner/Parser/Generator` sections according to the basic flow

## 0.1.1

- Basic implementation scans a single directory to generate type definitions

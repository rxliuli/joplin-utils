# Development

## Start the development environment

Download and initialize

```sh
# Use git to clone the project
git clone -b dev https://github.com/rxliuli/joplin-blog.git
# Install dependencies and initialize some settings
yarn && yarn setup
```

Start a test

Navigate to `apps/joplin-blog/src/blog/__tests__/Application.test.ts` and run the unit tests in it. If there are no
problems, you will see the generated files in the `./temp` directory.

> Note 1: The token/port needs to be set in the environment variable
> Note 2: Anyway, I suggest you start [Joplin in development mode](https://joplinapp.org/api/references/development_mode/) for testing.

## Module division

- apps
  - joplin-blog: cli core
- examples
  - hexo-example: hexo example blog project
  - vuepress-example: vuepress example blog project
- libs
  - i18next-typescript-generator: typescript type definition generator for i18next

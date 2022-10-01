# joplin-plugin-cli

## Introduction

A cli for joplin plugins, supports creating and packaging plugins, uses esbuild for the core, it's very **fast**.

## Use

```sh
npm i -g joplin-plugin-cli ## install
jpl generate --name test-plugin # Generate the project
cd test-plugin
yarn build # build
```

## FAQ

### Motivation

Why not use the official plugin template project?

The front-end packaging tools have changed a lot lately, mainly due to the performance revolution caused by esbuild and swc (that's not an overstatement). vue authors abandoned webpack and built a new cross-framework tool called vite based on esbuild and rollup, so I also prefer to build faster tools based on esbuild.

> The official plugin template project takes about 3.87s to build using webpack, while this cli takes only 0.17s based on esbuild.
> ![diff](https://github.com/rxliuli/joplin-utils/raw/master/libs/joplin-plugin-cli/assets/diff.png)

## How to migrate existing plugins?

1. install dependencies

   ```sh
   yarn add -D joplin-plugin-api joplin-plugin-cli
   ```

2. Remove the `dist/prepare/update` command from _package.json_ and add the `dev/build` command

   ```json
   {
     "scripts": {
       "build": "jpl build",
       "dev": "jpl build -w"
     }
   }
   ```

3. Run the build command

   ```sh
   yarn build
   ```

4. replace all `import joplin from 'api'` with `import joplin from 'joplin-plugin-api'` in the code
5. Delete the `api` directory, `webpack.config.js`

## Reference

- [Performance comparison of packaging tools](https://esbuild.github.io/)
- [vscode officially recommends using esbuild packaging plugin](https://code.visualstudio.com/api/working-with-extensions/bundling-extension)

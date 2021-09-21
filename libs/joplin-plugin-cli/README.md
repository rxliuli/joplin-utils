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

## Motivation

### Why not use the official plugin template project?

The front-end packaging tools have changed a lot lately, mainly due to the performance revolution caused by esbuild and swc (that's not an overstatement). vue authors abandoned webpack and built a new cross-framework tool called vite based on esbuild and rollup, so I also prefer to build faster tools based on esbuild.

## Reference

- [Performance comparison of packaging tools](https://esbuild.github.io/)
- [vscode officially recommends using esbuild packaging plugin](https://code.visualstudio.com/api/working-with-extensions/bundling-extension)

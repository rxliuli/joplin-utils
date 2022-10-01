# joplin-plugin-api

## Introduction

Wraps joplin-plugin's type definitions and exposed enum and such, maintained as a separate npm package to facilitate replication of the joplin plugin's ts files.

## FAQ

### What is the difference between @thejohnfreeman/joplin-plugin and @thejohnfreeman/joplin-plugin?

This package is the inspiration for joplin-plugin-api, but it mixes the joplin plugin's type definition and packaging functionality into one package, which should be two packages, and it does not package ts code, which requires the user's build tool to support ts.

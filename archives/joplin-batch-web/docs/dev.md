# Participate in the project

## How to contribute

There are two main areas

- Development
  - Implementing unfinished features
  - Come up with new ideas and implement them
- Non-development
  - Helping to translate documentation, internationalized configuration files
  - Write documentation for development
  - Identify problems and raise them in issues

## Environment requirements

- nodejs >= v12
- joplin >= v1.4
- yarn

## Start the project

1. Run the `yarn setup` command in the project root directory
2. Navigate to `cd apps/joplin-batch-web`
3. Run the `yarn dev` command to start the local development environment

## Project structure

- `docs`: some documentation
- `src`: source code
  - `@types`: extended type definitions
  - `common`: generic tool code
  - `constants`: constants in the project
  - `i18n`: internationalized configuration files
  - `pages`: page components
    - `*`:
      - `index.ts`: routing page entry
      - `*Page.tsx`: page-level components
      - `service`: some logic code that can be extracted

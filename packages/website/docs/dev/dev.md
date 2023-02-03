# Development

> [environment requirements](./require.md)

## Main technology stack

- pnpm monorepo
- typescript
- react

## Initialize the project

```sh
# Clone the project to local
git clone https://github.com/<YOUR GITHUB NAME>/joplin-utils.git
# Install dependencies and initialize
pnpm && pnpm run setup
# Enter the corresponding module development code, refer to README for details
```

## joplin-vscode-plugin

1. code apps/joplin-vscode-plugin
2. run joplin dev mode, ref: <https://joplinapp.org/api/references/development_mode/>
   ![image](https://user-images.githubusercontent.com/24560368/198864483-b30f050f-e990-4a49-868a-2954eea75443.png)
3. enable clipper service
   ![image](https://user-images.githubusercontent.com/24560368/198864546-473dbc9b-6f09-4cf5-8585-87da13b8b039.png)
4. cp .vscode/\_launch.json .vscode/launch.json
5. modify .vscode/launch.json, set _env.JOPLIN_TOKEN_, example:
   ![image](https://user-images.githubusercontent.com/24560368/198864435-ac47e951-79ad-40c5-b848-9e5dbafad478.png)
6. pnpm dev
7. F5 run debug

## joplin-batch-web

1. code apps/joplin-batch-web
2. pnpm dev

## refer to

- [joplin data api documentation](https://joplinapp.org/api/overview/)

<!-- TODO to be added -->

# 开发

> [环境要求](./require.md)

## 主要技术栈

- pnpm monorepo
- typescript
- react

## 初始化项目

```sh
# 克隆项目到本地
git clone https://github.com/<YOUR GITHUB NAME>/joplin-utils.git
# 安装依赖并初始化
pnpm && pnpm run setup
# 进入到相应模块开发代码，具体参考 README
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

## 参考

- [joplin data api 文档](https://joplinapp.org/api/overview/)

<!-- TODO 待补充 -->

# CHANGELOG

## 0.8.1

- refactor: replace luxon => dayjs
- refactor: update joplin-api sdk
- feat: update to use latest joplin-api sdk, update port => baseUrl

## 0.8.0

- feat: set the target of typescript to esnext, which is only compatible with the latest version of nodejs lts by default
- feat: remove the dependency on the local joplin resource location, download the resource to the local through the clipper api
- refactor: updated joplin-api sdk, no longer depends on axios

## 0.7.2

- fix: Modify bin.js => bin.cjs to force the use of commonjs to avoid errors in higher versions of nodejs

## 0.7.1

- fix: fix generated markdown file ordered list error

## 0.7.0

- feat: Support jekyll framework

## 0.6.0

- feat(joplin-blog): Add a subcommand clean under the blog/wiki command to delete cached configuration files, notes and attachment resource directories

## 0.5.1

- fix(joplin-blog): Fix the bug that i18next-util is not placed in runtime dependency

## 0.5.0

- feat(joplin-blog): add internationalization configuration of cache command
- feat(joplin-blog): implement resource caching, add cached commands
- refactor(joplin-blog): refactor the key of the internationalization string to use a more meaningful naming scheme
- feat(joplin-blog): implements caching functionality
- refactor(joplin-blog): refactor the functions previously written to notes and resources into fixed directories for easy calculation of cache locations
- fix(joplin-blog): fix warning that comlink/dist/umd/node-adapter is not used as an external dependency when packaging
- fix(joplin-blog): fix bug with i18next-util reference
- docs(joplin-blog): update the deployment location of joplin-blog, and update the documentation
- docs(joplin-blog): add json schema for configuration files
- refactor(joplin-blog): utility @liuli-util/i18next-util in the joplin-blog project
- chore(root): update the version of joplin-blog in the example module
- chore(joplin-blog): update rollup-plugin-worker-threads

## 0.4.0

- feat(joplin-blog): Use worker_threads to parse and convert markdown to avoid blocking the main thread

## 0.3.3

- fix(joplin-blog): Fix the error that asyncLimit will print numbers when running commands

## 0.3.2

- refactor(joplin-blog): Expose more functions in src/index to facilitate third-party calls

## 0.3.1

- fix(joplin-blog): fix missing internationalization file
- fix(joplin-blog): Uniformly change the example generation command imp => gen
- fix(joplin-blog): fix a redundant space in the Joplin generated docsify sidebar configuration
- fix(blog-hexo-example): fix the bug that hexo cannot be deployed to a subdirectory of the site

## 0.3.0

- feat(joplin-blog): support generate wiki(docsify/vuepress)
- fix(joplin-blog): fix bug that vuepress does not support deploying to subdirectories of websites
- chore(examples): add wiki example projects

## 0.2.0

- Completely refactor the code
- Realize the internationalization of output information
- Implement a more friendly cli

## 0.1.6

- test: modified the configuration of the hexo example, delete the custom stickyTopIdList and permalink
- revert: "hexo intergrated compatibility markdown", fix: https://github.com/rxliuli/joplin-blog/issues/7
- docs: Update the description of joplinProfilePath in README

## 0.1.5

- Fix README update being overwritten error

## 0.1.4

- Fix [exporting error](https://github.com/rxliuli/joplin-blog/issues/5)
- Fix [mistake correct](https://github.com/rxliuli/joplin-blog/issues/6)

## 0.1.3

- HexoIntegrated compatibility markdown images render path, ref: https://github.com/rxliuli/joplin-blog/pull/4

## 0.1.2

- Fixed passing tag from config instead of hard-coded to blog

## 0.1.1

- Fix the problem that the `\r` in the title is not cleared when exporting hexo blog

## 0.1.1

- Basic export function realization, currently supports hexovuepress

# CHANGELOG

## v0.4.0

- feat(joplin-blog): Use worker_threads to parse and convert markdown to avoid blocking the main thread

## v0.3.3

- fix(joplin-blog): Fix the error that asyncLimit will print numbers when running commands

## v0.3.2

- refactor(joplin-blog): Expose more functions in src/index to facilitate third-party calls

## v0.3.1

- fix(joplin-blog): fix missing internationalization file
- fix(joplin-blog): Uniformly change the example generation command imp => gen
- fix(joplin-blog): fix a redundant space in the Joplin generated docsify sidebar configuration
- fix(blog-hexo-example): fix the bug that hexo cannot be deployed to a subdirectory of the site

## v0.3.0

- feat(joplin-blog): support generate wiki(docsify/vuepress)
- fix(joplin-blog): fix bug that vuepress does not support deploying to subdirectories of websites
- chore(examples): add wiki example projects

## v0.2.0

- Completely refactor the code
- Realize the internationalization of output information
- Implement a more friendly cli

## v0.1.6

- test: modified the configuration of the hexo example, delete the custom stickyTopIdList and permalink
- revert: "hexo intergrated compatibility markdown", fix: https://github.com/rxliuli/joplin-blog/issues/7
- docs: Update the description of joplinProfilePath in README

## v0.1.5

- Fix README update being overwritten error

## v0.1.4

- Fix [exporting error](https://github.com/rxliuli/joplin-blog/issues/5)
- Fix [mistake correct](https://github.com/rxliuli/joplin-blog/issues/6)

## v0.1.3

- HexoIntegrated compatibility markdown images render path, ref: https://github.com/rxliuli/joplin-blog/pull/4

## v0.1.2

- Fixed passing tag from config instead of hard-coded to blog

## v0.1.1

- Fix the problem that the `\r` in the title is not cleared when exporting hexo blog

## v0.1.1

- Basic export function realization, currently supports hexovuepress

# changelog

## 0.10.0

- feat: add math rendering to notes, ref: <https://github.com/rxliuli/joplin-utils/pull/105>

## 0.9.0

- feat: support search joplin notes on search bar
- feat: optimize ui

## 0.8.2

- fix: Resolved a CSS conflict between the search box and plugin CSS when using Bing search
- style: Optimize the style of the note viewing page
- fix: Fixed the issue of abnormal text size when searching on Baidu
- fix: Fixed the issue of incorrect webpage theme detection when using Baidu search

## 0.8.1

- chore: remove tabs permission

## 0.8.0

Major Changes

- Refactored the entire plugin using wxt (Web Extension Toolkit)
  - This significant architectural change aims to improve the plugin's performance, maintainability, and extensibility

Notes

- Due to the extensive refactoring, users are advised to report any new issues or unexpected behaviors
- No changes to existing functionality are expected, but please verify your workflow after updating

## 0.7.1

- chore: update jiebe-wasm@2.0.0, ref: <https://github.com/fengkx/jieba-wasm/issues/5>

## 0.7.0

- feat: Automatic word segmentation search. close <https://github.com/rxliuli/joplin-utils/issues/94>
- fix: Fix the issue where Baidu search results were not displayed correctly. close <https://github.com/rxliuli/joplin-utils/issues/97>

## 0.6.4

- chore: Open settings on first installation

## 0.6.3

- fix: fixed <https://github.com/rxliuli/joplin-utils/issues/92>

## 0.6.2

- refactor: refactored using preact, added better error handling

## 0.5.3

- chore: update infrastructure, use manifest v3, support firefox 109 and above

## 0.5.1

- feat: support cn.bing.com search engine, ref: <https://github.com/rxliuli/joplin-utils/issues/71>

## 0.5.0

- feat: support you.com search engine, ref: <https://discourse.joplinapp.org/t/28864/42>

## 0.4.0

- feat: support metagar search engine, ref: <https://github.com/rxliuli/joplin-utils/issues/70>

## 0.3.5

- feat: the timing of rendering in advance to speed up the display of content on the page

## 0.3.4

- chore: Update the extension icon to avoid being mistaken for the official extension of joplin

## 0.3.3

- fix: Fixed a bug where note citation links were not handled correctly

## 0.3.2

- feat: automatic recognition of searx search engine

## 0.3.1

- feat: automatically open new tabs in nearby locations
- fix: fix searx search may not have query parameters on url
- style: optimize the style of the page

## 0.3.0

- feat: Support search in searx and allow configuration, test ref: https://searx.tiekoetter.com/

## 0.2.7

- fix: Fixed a bug where newlines were not handled correctly

## 0.2.6

- fix: Fix the bug that the duckduckgo search url could not be matched at some point, ref: https://discourse.joplinapp.org/t/28864/26

## 0.2.5

- fix: open joplin notes page shows correct title
- fix: Fix the error that the setting page is closed immediately after pasting the token without saving

## 0.2.4

- feat: Support proper options page instead of putting it in popup
- feat: Support to automatically jump to the option page when no option is configured

## 0.2.3

- feat: support firefix

## 0.2.1

- feat: support duckduckgo

## 0.2.0

- feat: Refactored to support chrome extension manifest v3
- feat: The react framework and surrounding dependencies are no longer used, which greatly reduces the bundle size, 1086kb => 110kb
- feat: Support switching between light and dark themes
- feat: Support opening notes in joplin

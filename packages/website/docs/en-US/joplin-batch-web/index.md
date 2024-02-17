# joplin-batch-web

> [Go to use](https://joplin-utils.rxliuli.com/web/joplin-batch-web/)

Handles some bulk operations that Joplin itself does not support, presented in a visual interface.

- [x] Check for unreferenced attachment resources
      Some unused attachment resources are not cleaned up in time
- [x] Check for non-existent referenced attachment resources
      Some in-use attachments may not exist for various reasons
- [x] Convert external links to internal note references
      Hope to convert the previous blog links to internal `:/id` links to ensure they never expire
- [x] Check for the presence of notes without parent directories (usually an error)

## Getting started

1. Open the Joplin desktop version
2. Enable the web clipper
3. Fill out the configuration on the [Settings](https://joplin-utils.rxliuli.com/web/joplin-batch-web/#/settings) page
4. Navigate to the relevant feature page

![guide](https://github.com/rxliuli/joplin-utils/raw/master/packages/joplin-batch-web/docs/images/guide.gif)

## FAQ

### Why not use CLI?

CLI is not very suitable for this scenario, such as previewing abnormal attachments or notes, which is a bit troublesome in the command line.

### Will it record my note data?

The site is completely local, there is no backend server, if you are still worried, you can check the source code [joplin-batch-web](https://github.com/rxliuli/joplin-utils/tree/master/packages/joplin-batch-web)

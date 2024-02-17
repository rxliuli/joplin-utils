# joplin-batch-web

Handles some bulk operations that Joplin itself does not support, presented in a visual interface form.

- [x] Check for unquoted attachment resources
      Some unused attachment resources have not been cleaned up in time
- [x] Check for the situation where the referenced attachment resource does not exist
      Some of the attachments in use may not exist due to various reasons
- [x] Convert external links to internal note references
      It's hoped to convert previous blog links to internal `:/id` links to ensure they never expire
- [x] Check for notes that don't have a parent directory (generally a mistake)

## Getting started

1. Open the Joplin desktop version
2. Enable the web clipper
3. Fill in the configuration on the [Settings](https://joplin-utils.rxliuli.com/web/joplin-batch-web/#/settings) page
4. Navigate to the relevant function page

![guide](https://github.com/rxliuli/joplin-utils/raw/master/packages/joplin-batch-web/docs/images/guide.gif)

## FAQ

### Why not use the cli version

The cli format is not quite suitable for this scenario, for example, previewing abnormal attachments or notes can be more complex in command line.

### Will it record my note data

The website works entirely locally, without a backend server. If you're still concerned, you can check the source code [joplin-batch-web](https://github.com/rxliuli/joplin-utils/tree/master/packages/joplin-batch-web)

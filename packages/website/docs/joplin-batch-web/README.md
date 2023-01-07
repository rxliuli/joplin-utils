# joplin-batch-web

Performs some batch operations not currently handled by Joplin and displays them in the form of a graphical user interface

- [x] Check whether there are any orphaned resources - some unused resources are not cleaned up automatically on time
- [x] Check if a referenced resource does not exist - some of these resources may be referenced but may no longer exist for a number of different reasons
- [x] Convert external links to internal note references - so that external links can be converted to internal `:/id` references, ensuring that they will never expire
- [x] Check to see if there are any notes outside of a parent notebook (usually due to an error)

## Start

1. Open the Joplin desktop application
2. Enable Web Clipper
3. On the [settings](https://joplin-utils.rxliuli.com/web/joplin-batch-web/#/settings) page, fill in the configuration options
4. Navigate to your required function page

![guide](https://github.com/rxliuli/joplin-utils/raw/master/apps/joplin-batch-web/docs/images/guide.gif)

## FAQ

### Why not a CLI application?

The format of a CLI application is not always suitable in certain scenarios, such as previewing abnormal attachments or notes which is not as simple when using a command line interface

### Will it record my note data?

The website runs entirely locally, there is no backend server. If you are still concerned you can check out the source code [joplin-batch-web](https://github.com/rxliuli/joplin-utils/tree/master/apps/joplin-batch-web)

<!-- TODO -->

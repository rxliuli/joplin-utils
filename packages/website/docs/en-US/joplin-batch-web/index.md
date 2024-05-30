# Joplin Batch Web

> [Go to use](https://joplin-utils.rxliuli.com/web/joplin-batch-web/)

Handle some bulk operations that Joplin itself does not support and present them in a visual interface.

- [x] Check if there are any unused attachment resources
      Some unused attachments haven't been cleaned up.
- [x] Check if there are missing referenced attachment resources
      Some used attachments might be missing for various reasons.
- [x] Convert external links to internal note references
      Want to convert previous blog links to internal `:/id` links to ensure they never expire.
- [x] Check if there are notes without a parent directory (usually an error)

## Getting Started

1. Open Joplin Desktop
2. Enable web clipper
3. Fill in the configuration on the [Settings](https://joplin-utils.rxliuli.com/web/joplin-batch-web/#/settings) page
4. Navigate to the relevant function page

![guide](https://github.com/rxliuli/joplin-utils/raw/master/packages/joplin-batch-web/docs/images/guide.gif)

## FAQ

### Why not use a CLI form

CLI form is not very suitable for this scenario, for example, checking abnormal attachments or notes which can be cumbersome on the command line.

### Does it record my note data

The website works entirely locally, with no backend servers. If you still have concerns, you can check the source code [joplin-batch-web](https://github.com/rxliuli/joplin-utils/tree/master/packages/joplin-batch-web).

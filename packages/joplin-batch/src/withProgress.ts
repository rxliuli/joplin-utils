import joplin from 'joplin-plugin-api'

interface Progress<T> {
  /**
   * Report a progress update.
   * @param value A progress item, like a message and/or an
   * report on how much work finished
   */
  report(value: T): void
}

interface ProgressOptions {
  /**
   * The location at which progress should show.
   */
  // location: ProgressLocation | { viewId: string };

  /**
   * A human-readable string which will be used to describe the
   * operation.
   */
  title?: string

  /**
   * Controls if a cancel button should show to allow the user to
   * cancel the long running operation.  Note that currently only
   * `ProgressLocation.Notification` is supporting to show a cancel
   * button.
   */
  // cancellable?: boolean
}

export async function withProgress<R>(
  options: ProgressOptions,
  task: (progress: Progress<{ message?: string }>) => Thenable<R>,
): Promise<R> {
  const id = new Date().toISOString()
  const dialogs = joplin.views.dialogs
  const handle = await dialogs.create(id)
  await dialogs.setHtml(handle, options.title ?? 'Loading...')
  await dialogs.setFitToContent(handle, true)
  await dialogs.setButtons(handle, [])
  const openDialog = dialogs.open(handle)
  const r = await task({
    async report(value) {
      if (!value.message) {
        return
      }
      await dialogs.setHtml(handle, value.message)
    },
  })
  await dialogs.setButtons(handle, [
    {
      id: 'close',
      title: 'Close',
    },
  ])
  await openDialog
  return r
}

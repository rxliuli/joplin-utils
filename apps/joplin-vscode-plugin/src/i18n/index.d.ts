export type TranslateParams =
  | [
      key: 'Turn off monitoring of attachment resources in the note [{{title}}]',
      params: { title: string | number },
    ]
  | [key: 'Unprocessable link']
  | [key: "Please set up Joplin's personal directory"]
  | [key: 'Start monitoring attachment resource modification: ']
  | [key: 'id cannot be empty']
  | [key: 'Note does not exist']
  | [
      key: 'Please enter what you want to create {{type}} name',
      params: { type: string | number },
    ]
  | [
      key: 'delete or not {{type}} [{{title}}]',
      params: { type: string | number; title: string | number },
    ]
  | [key: 'folder']
  | [key: 'note']
  | [key: 'todo']
  | [key: 'attachment']
  | [key: 'confirm']
  | [key: 'cancel']
  | [key: 'Please enter a new name']
  | [key: 'Please enter key words']
  | [key: 'Attachment resource created successfully']
  | [key: 'Please select a tag for this note']
  | [key: 'Please enter the name of the new tag']
  | [key: 'Create tag [{{title}}] success', params: { title: string | number }]
  | [key: 'Please select the tag to delete']
  | [key: 'Remove tag [{{title}}] success', params: { title: string | number }]
  | [key: 'Clipboard does not contain picture!']
  | [key: 'file uploaded successfully']
  | [key: 'No active editor']
  | [
      key: 'Resource [{{title}}] does not exist',
      params: { title: string | number },
    ]
  | [key: 'Resource does not exist']

export type TranslateType = {
  'common.notFoundConfig': {
    value: "Can't find configuration file .joplin-blog.json"
    params: [key: 'common.notFoundConfig']
  }
  'common.showNoteCount': {
    value: 'Filter to get {{length}} notes to be processed'
    params: [
      key: 'common.showNoteCount',
      params: {
        length: string | number
      },
    ]
  }
  'common.joplinServiceError': {
    value: 'Failed to test joplin service: '
    params: [key: 'common.joplinServiceError']
  }
  'common.filter.begin': {
    value: 'Start filtering joplin notes'
    params: [key: 'common.filter.begin']
  }
  'common.filter.empty': {
    value: 'No notes to be processed'
    params: [key: 'common.filter.empty']
  }
  'common.filter.end': {
    value: 'Filter to get {{length}} notes to be processed'
    params: [
      key: 'common.filter.end',
      params: {
        length: string | number
      },
    ]
  }
  'common.readResourceAndTag.begin': {
    value: 'Start reading note attachments and tags'
    params: [key: 'common.readResourceAndTag.begin']
  }
  'common.readResourceAndTag.process': {
    value: '[{{rate}}/{{all}}] is reading note attachments and tags: {{title}}'
    params: [
      key: 'common.readResourceAndTag.process',
      params: {
        rate: string | number
        all: string | number
        title: string | number
      },
    ]
  }
  'common.readResourceAndTag.end': {
    value: 'End reading note attachments and tags'
    params: [key: 'common.readResourceAndTag.end']
  }
  'common.init.begin': {
    value: 'Start frame initialization action'
    params: [key: 'common.init.begin']
  }
  'common.init.end': {
    value: 'End frame initialization action'
    params: [key: 'common.init.end']
  }
  'common.cache.begin': {
    value: 'Checking cache'
    params: [key: 'common.cache.begin']
  }
  'common.cache.end': {
    value: '{{skipCount}} cached notes have been skipped'
    params: [
      key: 'common.cache.end',
      params: {
        skipCount: string | number
      },
    ]
  }
  'common.cache.resource.skip': {
    value: '{{skipCount}} cached resources have been skipped'
    params: [
      key: 'common.cache.resource.skip',
      params: {
        skipCount: string | number
      },
    ]
  }
  'common.parse.begin': {
    value: 'Start parsing the Joplin internal links and attachment resources in the notes'
    params: [key: 'common.parse.begin']
  }
  'common.parse.process': {
    value: '[{{rate}}/{{all}}] is parsing the Joplin internal links and attachment resources in the notes: {{title}}'
    params: [
      key: 'common.parse.process',
      params: {
        rate: string | number
        all: string | number
        title: string | number
      },
    ]
  }
  'common.parse.end': {
    value: 'End of parsing the Joplin internal links and attachment resources in the notes'
    params: [key: 'common.parse.end']
  }
  'common.writeNote.begin': {
    value: 'Start writing notes to a local file'
    params: [key: 'common.writeNote.begin']
  }
  'common.writeNote.process': {
    value: '{{rate}}/{{all}} Writing notes to local file: {{title}}'
    params: [
      key: 'common.writeNote.process',
      params: {
        rate: string | number
        all: string | number
        title: string | number
      },
    ]
  }
  'common.writeNote.end': {
    value: 'End writing notes to local file'
    params: [key: 'common.writeNote.end']
  }
  'common.copyResource.begin': {
    value: 'Start copying attachment resources'
    params: [key: 'common.copyResource.begin']
  }
  'common.copyResource.process': {
    value: '{{rate}}/{{all}} Copying attachment resource: {{title}}'
    params: [
      key: 'common.copyResource.process',
      params: {
        rate: string | number
        all: string | number
        title: string | number
      },
    ]
  }
  'common.copyResource.end': {
    value: 'End Copying Attachment Resources'
    params: [key: 'common.copyResource.end']
  }
  'common.cache.clean': {
    value: 'Clear cache'
    params: [key: 'common.cache.clean']
  }
  'blog.description': {
    value: 'Generate the files needed for the blog based on the notes in Joplin'
    params: [key: 'blog.description']
  }
  'blog.generate.errorType': {
    value: 'Unsupported blog type'
    params: [key: 'blog.generate.errorType']
  }
  'blog.generate.end': {
    value: 'End generating blog'
    params: [key: 'blog.generate.end']
  }
  'wiki.description': {
    value: 'Generate the files needed by the wiki based on the notes in Joplin'
    params: [key: 'wiki.description']
  }
  'wiki.generate.errorType': {
    value: 'Unsupported wiki framework'
    params: [key: 'wiki.generate.errorType']
  }
  'wiki.generate.end': {
    value: 'End generating wiki'
    params: [key: 'wiki.generate.end']
  }
}

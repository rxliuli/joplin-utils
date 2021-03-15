const ALL_SCHEMES = {}

function getParts(pattern: string) {
  if (pattern === '<all_urls>') {
    return {
      scheme: ALL_SCHEMES,
      host: '*',
      path: '*',
    }
  }

  const matchScheme = '(\\*|http|https|file|ftp)'
  const matchHost = '(\\*|(?:\\*\\.)?(?:[^/*]+))?'
  const matchPath = '(.*)?'
  const regex = new RegExp(
    '^' + matchScheme + '://' + matchHost + '(/)' + matchPath + '$',
  )

  const result = regex.exec(pattern)
  if (!result) {
    throw new Error('Invalid pattern')
  }

  return {
    scheme: result[1],
    host: result[2],
    path: result[4],
  }
}

function createMatcher(pattern: string) {
  const parts = getParts(pattern)
  let str = '^'

  // check scheme
  if (parts.scheme === ALL_SCHEMES) {
    str += '(http|https|ftp|file)'
  } else if (parts.scheme === '*') {
    str += '(http|https)'
  } else {
    str += parts.scheme
  }

  str += '://'

  // check host
  if (parts.host === '*') {
    str += '.*'
  } else if (parts.host.startsWith('*.')) {
    str += '.*'
    str += '\\.?'
    str += parts.host.substr(2).replace(/\./g, '\\.')
  } else if (parts.host) {
    str += parts.host
  }

  // check path
  if (!parts.path) {
    str += '/?'
  } else if (parts.path) {
    str += '/'
    str += parts.path.replace(/[?.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*')
  }

  str += '$'

  const regex = new RegExp(str)
  return function matchUrl(url: string) {
    return regex.test(url)
  }
}

export function match(pattern: string, optionalUrl: string): boolean {
  return createMatcher(pattern)(optionalUrl)
}

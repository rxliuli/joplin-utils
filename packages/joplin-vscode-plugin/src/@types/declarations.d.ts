declare module 'cross-path-sort' {
  type SortOptions = {
    pathKey?: string
    shallowFirst?: boolean
    deepFirst?: boolean
    homePathsSupported?: boolean
    posixOrder?: ('rel' | 'home' | 'abs')[]
    windowsOrder?: ('rel' | 'home' | 'abs' | 'drel' | 'dabs' | 'unc' | 'nms')[]
    segmentCompareFn?: (a: string, b: string) => number
  }

  export function sort<T>(paths: T[], options?: SortOptions): T[]
}

declare module 'jimp/es' {
  import Jimp from 'jimp'
  export default Jimp
}

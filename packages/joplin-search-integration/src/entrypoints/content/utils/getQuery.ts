export function getSearchQuery(list: string[]): string | undefined {
  const u = new URLSearchParams(location.search)
  for (const q of list) {
    const r = u.get(q)
    if (typeof r === 'string') {
      return r
    }
  }
}

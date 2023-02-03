export function trimTitleStart(title: string) {
  return (title.startsWith('#') ? title.slice(1) : title).trim()
}

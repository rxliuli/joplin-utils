import React from 'react'
import { File, FileText, Image, Video, Archive, Code, FileSpreadsheet, FileAudio, FileJson, FileX } from 'lucide-react'

type MimeIconProps = {
  mimeType: string
  className?: string
}

const mimeToIconMap: Record<string, React.ElementType> = {
  'text/plain': FileText,
  'text/html': Code,
  'text/css': Code,
  'text/javascript': Code,
  'application/json': FileJson,
  'image/': Image,
  'audio/': FileAudio,
  'video/': Video,
  'application/pdf': File,
  'application/zip': Archive,
  'application/x-rar-compressed': Archive,
  'application/vnd.ms-excel': FileSpreadsheet,
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': FileSpreadsheet,
}

export function MimeIcon({ mimeType, className }: MimeIconProps) {
  const IconComponent = React.useMemo(() => {
    const iconKey = Object.keys(mimeToIconMap).find((key) => mimeType.startsWith(key))
    return iconKey ? mimeToIconMap[iconKey] : FileX
  }, [mimeType])

  return <IconComponent className={className || 'h-6 w-6'} />
}

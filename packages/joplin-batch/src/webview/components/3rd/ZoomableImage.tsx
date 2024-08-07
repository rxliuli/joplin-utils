import { DetailedHTMLProps, ImgHTMLAttributes } from 'react'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

export default function ZoomableImage({
  src,
  alt,
  className,
}: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) {
  if (!src) return null
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DialogTitle>
          <img src={src} alt={alt || ''} className={className} />
        </DialogTitle>
      </DialogTrigger>
      <DialogContent className="max-w-7xl border-0 bg-transparent p-0">
        <TransformWrapper>
          <TransformComponent>
            <img src={src} alt={alt || ''} className="h-full w-full object-contain" />
          </TransformComponent>
        </TransformWrapper>
      </DialogContent>
    </Dialog>
  )
}

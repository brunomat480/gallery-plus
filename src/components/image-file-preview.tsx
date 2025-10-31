import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";

export const imageFilePreviewVariants = tv({
  base: 'rounded-lg overflow-hidden',
});

export const imageFilePreviewImageVariants = tv({
  base: 'w-full h-full object-cover'
});

interface ImageFilePreview extends ComponentProps<'img'> {
  imageClassName?: string
}

export default function ImageFilePreview({
  className,
  imageClassName,
  ...props
}: ImageFilePreview) {
  return (
    <div className={imageFilePreviewVariants({ className })}>
      <img className={imageFilePreviewImageVariants({ className: imageClassName })} {...props} />
    </div>
  )
}
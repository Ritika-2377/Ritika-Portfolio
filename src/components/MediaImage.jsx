import { useState } from 'react'
import ImagePlaceholder from './ImagePlaceholder.jsx'

export default function MediaImage({
  src,
  alt,
  available = true,
  placeholderLabel,
  aspect = 'video',
  className = '',
  lazy = true,
}) {
  const [failed, setFailed] = useState(false)
  const showPlaceholder = !available || !src || failed

  if (showPlaceholder) {
    return <ImagePlaceholder label={placeholderLabel || alt || 'Image to be added'} aspect={aspect} className={className} />
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={lazy ? 'lazy' : 'eager'}
      decoding="async"
      onError={() => setFailed(true)}
      className={`rounded-[var(--radius-card)] object-cover w-full border border-[var(--border-subtle)] ${aspect === 'square' ? 'aspect-square' : aspect === 'portrait' ? 'aspect-[3/4]' : 'aspect-video'} ${className}`}
    />
  )
}

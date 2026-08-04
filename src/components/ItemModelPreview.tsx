interface ItemModelPreviewProps {
  src?: string;
  alt: string;
  fallback?: string;
  className?: string;
}

export function ItemModelPreview({ src, alt, fallback, className }: ItemModelPreviewProps) {
  if (!src) {
    return (
      <span className={className ? `item-placeholder ${className}` : "item-placeholder"}>
        {fallback ?? alt.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    <img
      className={className ? `item-art-preview ${className}` : "item-art-preview"}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
    />
  );
}

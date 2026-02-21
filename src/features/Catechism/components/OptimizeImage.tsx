import type { OptimizeImageType } from "../types/optimize-image.type";

interface OptimizeImageProps extends OptimizeImageType {
  title: string;
}

export default function OptimizeImage({
  avif,
  fallback,
  height,
  webp,
  width,
  title,
}: OptimizeImageProps) {
  return (
    <picture>
      <source srcSet={avif} type="image/avif" />
      <source srcSet={webp} type="image/webp" />
      <img
        src={fallback}
        alt={title}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
      />
    </picture>
  );
}

import { useEffect, useRef } from "react";

interface SkinPart {
  source: [number, number, number, number];
  target: [number, number, number, number];
}

const parts: SkinPart[] = [
  { source: [8, 8, 8, 8], target: [4, 0, 8, 8] },
  { source: [20, 20, 8, 12], target: [4, 8, 8, 12] },
  { source: [44, 20, 4, 12], target: [0, 8, 4, 12] },
  { source: [36, 52, 4, 12], target: [12, 8, 4, 12] },
  { source: [4, 20, 4, 12], target: [4, 20, 4, 12] },
  { source: [20, 52, 4, 12], target: [8, 20, 4, 12] },
  { source: [40, 8, 8, 8], target: [4, 0, 8, 8] },
  { source: [20, 36, 8, 12], target: [4, 8, 8, 12] },
  { source: [44, 36, 4, 12], target: [0, 8, 4, 12] },
  { source: [52, 52, 4, 12], target: [12, 8, 4, 12] },
  { source: [4, 36, 4, 12], target: [4, 20, 4, 12] },
  { source: [4, 52, 4, 12], target: [8, 20, 4, 12] }
];

export function MinecraftSkinPreview({ src, label }: { src: string; label: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const image = new Image();
    image.onload = () => {
      const textureScale = image.width / 64;
      const renderScale = canvas.width / 16;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.imageSmoothingEnabled = false;

      for (const part of parts) {
        const [sx, sy, sw, sh] = part.source;
        const [dx, dy, dw, dh] = part.target;
        context.drawImage(
          image,
          sx * textureScale,
          sy * textureScale,
          sw * textureScale,
          sh * textureScale,
          dx * renderScale,
          dy * renderScale,
          dw * renderScale,
          dh * renderScale
        );
      }
    };
    image.src = src;
  }, [src]);

  return <canvas ref={canvasRef} width={64} height={128} role="img" aria-label={label} />;
}

"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Embeds an iframe that renders at a fixed "design" width (where its desktop
 * layout looks right) and scales it down to fit narrower containers — so a
 * non-responsive embed still fits on a phone instead of overflowing.
 */
export default function ScaledEmbed({
  src,
  title,
  designWidth = 720,
  designHeight = 560,
}: {
  src: string;
  title: string;
  designWidth?: number;
  designHeight?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });
    observer.observe(el);
    setWidth(el.clientWidth);
    return () => observer.disconnect();
  }, []);

  // Scale down only when the container is narrower than the design width.
  const scale = width > 0 && width < designWidth ? width / designWidth : 1;
  const scaled = scale < 1;

  return (
    <div
      ref={ref}
      className="w-full overflow-hidden"
      style={{ height: designHeight * scale }}
    >
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allowFullScreen
        style={
          scaled
            ? {
                width: designWidth,
                height: designHeight,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
              }
            : { width: "100%", height: designHeight }
        }
      />
    </div>
  );
}

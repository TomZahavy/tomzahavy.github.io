"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Embeds COrigami Studio on wider screens. On phones it shows a launch card
 * instead: the studio is a full 3D app that is cramped inside a scrolling
 * page, and loading it in the background would cost ~11 MB of data.
 */
export default function StudioEmbed({
  src,
  preview,
  height = 820,
}: {
  src: string;
  preview: string;
  height?: number;
}) {
  const [wide, setWide] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 640px)");
    const update = () => setWide(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  if (wide) {
    return (
      <iframe
        src={src}
        title="COrigami Studio"
        loading="lazy"
        allowFullScreen
        className="block w-full"
        style={{ height }}
      />
    );
  }

  return (
    <a href={src} target="_blank" rel="noreferrer" className="group block">
      <Image
        src={preview}
        alt="The Golden Eagle model in COrigami Studio"
        width={1200}
        height={900}
        sizes="100vw"
        className="w-full"
      />
      <span className="flex items-center justify-between border-t border-border bg-card px-4 py-3 text-sm">
        <span className="font-medium">Open COrigami Studio</span>
        <span className="text-accent group-hover:underline">Launch &#8599;</span>
      </span>
    </a>
  );
}

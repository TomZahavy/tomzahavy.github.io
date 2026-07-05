"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type GalleryImage = { src: string; w: number; h: number };

export default function AboutGallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  return (
    <>
      <div className="mt-4 gap-3 [column-fill:_balance] columns-2 sm:columns-3">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setIndex(i)}
            className="group mb-3 block w-full cursor-zoom-in overflow-hidden rounded-lg border border-border"
          >
            <Image
              src={img.src}
              alt=""
              width={img.w}
              height={img.h}
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
              className="w-full transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {open && index !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full p-2 text-white/80 transition-colors hover:text-white"
            onClick={close}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Previous"
            className="absolute left-2 rounded-full p-2 text-white/70 transition-colors hover:text-white sm:left-6"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <figure className="max-h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[index].src}
              alt=""
              width={images[index].w}
              height={images[index].h}
              className="max-h-[85vh] w-auto rounded-lg object-contain"
              priority
            />
            <figcaption className="mt-3 text-center text-xs text-white/60">
              {index + 1} / {images.length}
            </figcaption>
          </figure>

          <button
            type="button"
            aria-label="Next"
            className="absolute right-2 rounded-full p-2 text-white/70 transition-colors hover:text-white sm:right-6"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

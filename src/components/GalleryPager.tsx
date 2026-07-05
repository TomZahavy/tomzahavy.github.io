"use client";

import { useState } from "react";
import AutoPlayVideo from "./AutoPlayVideo";

const PER_PAGE = 4;

type Item = { src: string; title: string };

export default function GalleryPager({ items }: { items: Item[] }) {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(items.length / PER_PAGE);
  const start = page * PER_PAGE;
  // Only the current page is rendered, so only these videos are mounted and loaded.
  const current = items.slice(start, start + PER_PAGE);

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">
        {current.map((item) => (
          <figure key={item.src}>
            <AutoPlayVideo
              src={item.src}
              className="aspect-square w-full rounded-lg border border-border object-cover"
            />
            <figcaption className="mt-1.5 text-xs text-muted">
              {item.title}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
          className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground/80 transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:text-foreground/80"
        >
          &larr; Prev
        </button>
        <span className="text-xs text-muted">
          {start + 1}&ndash;{Math.min(start + PER_PAGE, items.length)} of{" "}
          {items.length}
        </span>
        <button
          type="button"
          onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
          disabled={page === pageCount - 1}
          className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground/80 transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:text-foreground/80"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import type { Publication } from "@/lib/data";
import { PUBLICATION_DOMAINS, PUBLICATION_METHODS } from "@/lib/data";

function linkFor(pub: Publication) {
  return (
    pub.href ??
    `https://scholar.google.com/scholar?q=${encodeURIComponent(pub.title)}`
  );
}

function FilterDropdown({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly string[];
  value: string | null;
  onChange: (v: string | null) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
          value
            ? "border-accent text-accent"
            : "border-border bg-card text-foreground/80 hover:border-accent hover:text-accent"
        }`}
      >
        <span>{value ?? label}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={open ? "rotate-180" : ""}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 z-20 mt-1.5 min-w-[11rem] rounded-lg border border-border bg-card p-1 shadow-lg">
          <button
            type="button"
            onClick={() => {
              onChange(null);
              setOpen(false);
            }}
            className={`block w-full rounded-md px-3 py-1.5 text-left text-sm transition-colors hover:bg-background ${
              value === null ? "text-accent" : "text-foreground/80"
            }`}
          >
            All {label.toLowerCase()}s
          </button>
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`block w-full rounded-md px-3 py-1.5 text-left text-sm transition-colors hover:bg-background ${
                value === opt ? "text-accent" : "text-foreground/80"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function PublicationList({
  publications,
}: {
  publications: Publication[];
}) {
  const [domain, setDomain] = useState<string | null>(null);
  const [method, setMethod] = useState<string | null>(null);

  // publications arrive already sorted by citations; rank is the source number.
  const ranked = publications.map((pub, i) => ({ pub, rank: i + 1 }));
  const visible = ranked.filter(
    ({ pub }) =>
      (!domain || pub.domains?.includes(domain)) &&
      (!method || pub.methods?.includes(method)),
  );

  return (
    <>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <FilterDropdown
          label="Domain"
          options={PUBLICATION_DOMAINS}
          value={domain}
          onChange={setDomain}
        />
        <FilterDropdown
          label="Method"
          options={PUBLICATION_METHODS}
          value={method}
          onChange={setMethod}
        />
        {(domain || method) && (
          <button
            type="button"
            onClick={() => {
              setDomain(null);
              setMethod(null);
            }}
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            Clear
          </button>
        )}
        <span className="ml-auto text-sm text-muted">
          {visible.length} of {ranked.length}
        </span>
      </div>

      <ol className="mt-6 space-y-5">
        {visible.map(({ pub, rank }) => (
          <li
            key={pub.title}
            className="flex gap-4 border-b border-border pb-5 last:border-0"
          >
            <span className="mt-0.5 w-8 shrink-0 text-sm tabular-nums text-muted">
              {rank}.
            </span>
            <div>
              <a
                href={linkFor(pub)}
                target="_blank"
                rel="noreferrer"
                className="font-medium leading-snug hover:text-accent"
              >
                {pub.title}
              </a>
              <p className="mt-1 text-sm text-muted">
                {pub.authors.map((a, idx) => (
                  <span
                    key={a + idx}
                    className={a === "Tom Zahavy" ? "text-foreground/80" : undefined}
                  >
                    {a}
                    {idx < pub.authors.length - 1 ? ", " : ""}
                  </span>
                ))}
                {pub.venue ? ` · ${pub.venue}` : ""}
              </p>
            </div>
          </li>
        ))}
        {visible.length === 0 && (
          <li className="text-sm text-muted">No publications match this filter.</li>
        )}
      </ol>
    </>
  );
}

import type { Metadata } from "next";
import { publications } from "@/lib/data";

export const metadata: Metadata = {
  title: "Publications — Tom Zahavy",
};

function linkFor(pub: { title: string; href?: string }) {
  return (
    pub.href ??
    `https://scholar.google.com/scholar?q=${encodeURIComponent(pub.title)}`
  );
}

export default function PublicationsPage() {
  const ranked = [...publications].sort((a, b) => b.citations - a.citations);

  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="text-2xl font-semibold tracking-tight">Publications</h1>
      <p className="mt-2 text-sm text-muted">Ordered by citation count.</p>

      <ol className="mt-8 space-y-5">
        {ranked.map((pub, i) => (
          <li
            key={pub.title}
            className="flex gap-4 border-b border-border pb-5 last:border-0"
          >
            <span className="mt-0.5 w-6 shrink-0 text-sm tabular-nums text-muted">
              {i + 1}.
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
      </ol>
    </div>
  );
}

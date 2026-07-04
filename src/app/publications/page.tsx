import type { Metadata } from "next";
import { publicationSections } from "@/lib/data";

export const metadata: Metadata = {
  title: "Publications — Tom Zahavy",
};

export default function PublicationsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="text-2xl font-semibold tracking-tight">Publications</h1>

      <div className="mt-8 space-y-10">
        {publicationSections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
              {section.heading}
            </h2>
            <ol className="mt-4 space-y-5">
              {section.items.map((pub) => (
                <li key={pub.title} className="border-b border-border pb-5 last:border-0">
                  <a
                    href={pub.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium leading-snug hover:text-accent"
                  >
                    {pub.title}
                  </a>
                  <p className="mt-1 text-sm text-muted">
                    {pub.authors.map((a, i) => (
                      <span key={a + i} className={a === "Tom Zahavy" ? "text-foreground/80" : undefined}>
                        {a}
                        {i < pub.authors.length - 1 ? ", " : ""}
                      </span>
                    ))}
                    {pub.venue ? ` · ${pub.venue}` : ""}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}

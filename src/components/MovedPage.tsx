import Link from "next/link";

/** Static stand-in for a page that moved; static export can't do server redirects. */
export default function MovedPage({ to, title }: { to: string; title: string }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <link rel="canonical" href={to} />
      <p className="text-muted">
        {title} now lives on the{" "}
        <Link href={to} className="text-accent hover:underline">
          Creative Chess
        </Link>{" "}
        page.
      </p>
    </div>
  );
}

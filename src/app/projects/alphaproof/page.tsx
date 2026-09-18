import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/lib/data";

const SLUG = "alphaproof";
const project = featuredProjects.find((p) => p.slug === SLUG)!;
const nextProject =
  featuredProjects[
    (featuredProjects.findIndex((p) => p.slug === SLUG) + 1) %
      featuredProjects.length
  ];

const BLOG_HREF = "/blog/how-we-achieved-an-imo-medal";
const NATURE_PAPER = "https://www.nature.com/articles/s41586-025-09833-y";
const ANNOUNCEMENT = "https://deepmind.google/blog/ai-solves-imo-problems-at-silver-medal-level/";

export const metadata: Metadata = {
  title: `${project.title} — Tom Zahavy`,
  description: project.description,
};

const coverage = [
  {
    author: "Davide Castelvecchi",
    title: "DeepMind hits milestone in solving maths problems — AI's next grand challenge",
    outlet: "Nature",
    kind: "news",
    date: "25 July 2024",
    href: "https://www.nature.com/articles/d41586-024-02441-2",
  },
  {
    author: "Siobhan Roberts",
    title: "Move Over, Mathematicians, Here Comes AlphaProof",
    outlet: "The New York Times",
    kind: "",
    date: "25 July 2024",
    href: "https://www.nytimes.com/2024/07/25/science/ai-math-alphaproof-deepmind.html",
  },
  {
    author: "Rhiannon Williams",
    title: "Google DeepMind's new AI systems can now solve complex math problems",
    outlet: "MIT Technology Review",
    kind: "",
    date: "25 July 2024",
    href: "https://www.technologyreview.com/2024/07/25/1095315/google-deepminds-ai-systems-can-now-solve-complex-math-problems/",
  },
  {
    author: "Timothy Gowers",
    title: "Thread on grading the solutions",
    outlet: "X",
    kind: "",
    date: "25 July 2024",
    href: "https://x.com/wtgowers/status/1816509803407040909",
    note: "Gowers and Joseph Myers scored the proofs under IMO rules; the thread walks through the solutions, and Gowers described the constructions the system found as beyond what he had thought was state of the art.",
  },
  {
    author: "Manon Bischoff",
    title: "AI Reaches Silver-Medal Level at This Year's Math Olympiad",
    outlet: "Scientific American",
    kind: "",
    date: "6 August 2024",
    href: "https://www.scientificamerican.com/article/ai-reaches-silver-medal-level-at-this-years-math-olympiad/",
  },
  {
    author: "Talia Ringer",
    title: "Mathematicians put AI model AlphaProof to the test",
    outlet: "Nature",
    kind: "News & Views",
    date: "12 November 2025",
    href: "https://www.nature.com/articles/d41586-025-03585-5",
    note: "Accompanying commentary on the Nature paper, on what an agent trained to use proof assistants could mean for mathematical discovery.",
  },
];

export default function AlphaProofPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <Link href="/" className="text-sm text-muted transition-colors hover:text-accent">
        &larr; Home
      </Link>

      <header className="mt-6">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {project.links.map((link) => {
            const external = link.href.startsWith("http");
            return external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground/80 transition-colors hover:border-accent hover:text-accent"
              >
                {link.label} &#8599;
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground/80 transition-colors hover:border-accent hover:text-accent"
              >
                {link.label} &rarr;
              </Link>
            );
          })}
        </div>
      </header>

      <div className="mt-10 overflow-hidden rounded-xl border border-border">
        <Image
          src={project.image}
          alt={project.title}
          width={project.heroNatural!.width}
          height={project.heroNatural!.height}
          priority
          sizes="(max-width: 768px) 100vw, 720px"
          className="w-full"
        />
      </div>

      {/* Overview */}
      <section className="mt-10 space-y-4 leading-relaxed text-foreground/90">
        {project.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        <p className="text-sm text-muted">
          Announced July 2024; published in{" "}
          <a href={NATURE_PAPER} target="_blank" rel="noreferrer" className="text-accent hover:underline">
            Nature
          </a>{" "}
          in November 2025.
        </p>
      </section>

      {/* Blog */}
      <section className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          Read more
        </h2>
        <Link
          href={BLOG_HREF}
          className="group mt-4 block rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent"
        >
          <p className="font-medium leading-snug transition-colors group-hover:text-accent">
            How we achieved an IMO medal, one year before any other AI system
            <span className="text-muted"> &rarr;</span>
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            My account of AlphaProof: the lifelong RL loop that taught it
            mathematics in Lean, the test-time RL phase that let it crack
            Problem&nbsp;6, and what the result does and doesn&rsquo;t mean.
          </p>
        </Link>
      </section>

      {/* Coverage */}
      <section className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          Coverage
        </h2>
        <p className="mt-2 leading-relaxed text-foreground/90">
          The{" "}
          <a href={ANNOUNCEMENT} target="_blank" rel="noreferrer" className="text-accent hover:underline">
            July 2024 announcement
          </a>{" "}
          was reported widely; the solutions were graded by Timothy Gowers and
          Joseph Myers under IMO rules. Selected coverage:
        </p>
        <ul className="mt-5 space-y-4">
          {coverage.map((c) => (
            <li key={c.href} className="leading-relaxed">
              <p>
                {c.author},{" "}
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-foreground transition-colors hover:text-accent"
                >
                  &ldquo;{c.title}&rdquo;
                </a>
                . <em>{c.outlet}</em>
                {c.kind ? ` ${c.kind}` : ""}, {c.date}.
              </p>
              {c.note && (
                <p className="mt-1 text-sm leading-relaxed text-muted">{c.note}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <nav className="mt-14 flex items-center justify-between border-t border-border pt-8">
        <Link href="/" className="text-sm text-muted transition-colors hover:text-accent">
          &larr; All projects
        </Link>
        <Link href={`/projects/${nextProject.slug}`} className="group text-right">
          <span className="block text-xs uppercase tracking-wide text-muted">
            Next project
          </span>
          <span className="mt-1 block font-medium transition-colors group-hover:text-accent">
            {nextProject.title} &rarr;
          </span>
        </Link>
      </nav>
    </div>
  );
}

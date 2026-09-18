import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/lib/data";

const SLUG = "llms-cant-jump";
const project = featuredProjects.find((p) => p.slug === SLUG)!;
const nextProject =
  featuredProjects[
    (featuredProjects.findIndex((p) => p.slug === SLUG) + 1) %
      featuredProjects.length
  ];

const REFLECTIONS_URL = "https://x.com/TZahavy/status/2082401499628376180";
const HN_URL = "https://news.ycombinator.com/item?id=49181083";

export const metadata: Metadata = {
  title: `${project.title} — Tom Zahavy`,
  description: project.description,
};

const stats = [
  { value: "Millions", label: "of views and engagements on X and LinkedIn" },
  { value: "Hundreds", label: "of posts and articles discussing the paper" },
  { value: "#1", label: "on Hacker News", href: HN_URL },
  { value: "Top 10", label: "most-downloaded papers on PhilSci-Archive", href: "https://philsci-archive.pitt.edu/28024/" },
];

const press = [
  {
    outlet: "Nature",
    kind: "News feature",
    title: "The Einstein test: what happens when AI tries to rediscover relativity?",
    author: "Philip Ball",
    date: "9 September 2026",
    href: "https://www.nature.com/articles/d41586-026-02804-x",
    blurb:
      "Nature's feature on 'vintage' LLMs trained on pre-1911 data and Demis Hassabis's proposed test for AGI. It traces the detailed case for the test back to this paper, and its argument that a relativity-like breakthrough needs abduction — a creative leap that invents a cause for a singular phenomenon — rather than induction from accumulated data.",
  },
  {
    outlet: "Ian Leslie",
    kind: "Essay",
    title: "Einstein, Churchill, and AI",
    author: "Ian Leslie",
    date: "15 August 2026",
    href: "https://www.ian-leslie.com/p/einstein-churchill-and-ai",
    blurb:
      "Takes the paper's central example — Einstein's 1907 thought about a falling man feeling no weight — and asks what kind of insight it is. An LLM could have helped Einstein work out the consequences of his discovery, Leslie argues, but it could not have made the foundational leap for him; the piece then finds the same quality in Churchill.",
  },
  {
    outlet: "Noahpinion",
    kind: "Essay",
    title: "The End of the Age of Heroes",
    author: "Noah Smith",
    date: "4 August 2026",
    href: "https://www.noahpinion.blog/p/the-end-of-the-age-of-heroes",
    blurb:
      "On what happens to mathematics when AI surpasses human researchers. Smith cites the paper as the case that models synthesise existing knowledge well but struggle with genuinely novel conceptual leaps — and, in keeping with the paper's own hedging, treats that as a possibly temporary limitation.",
  },
];

const reflections = [
  "First things first: some people are framing this as “DeepMind is throwing cold water on AI for science” or claiming the paper argues LLMs can never make real scientific discoveries. This is not the case. This is a personal position paper, not the company’s view on AI for science. This is also not my position. As a core contributor to AlphaProof, I know firsthand that my colleagues at DeepMind, other frontier labs, and academia have made amazing discoveries with LLMs and will continue to do so. This paper is not an “LLMs are a dead end” kind of thing.",
  "Rather, the paper is the result of a deep dive I took to study the invention of General Relativity. I wanted to explore what it would take for a modern AI system to make that exact kind of jump. Specifically, I focused on the equivalence principle — a key axiom that Einstein formulated through thought experiments grounded in his physical intuition. I was trying to figure out what it would take to give modern AI systems that sort of thinking.",
  "Giving AI this specific capability isn’t necessarily the most urgent thing to do next. It is very likely that improving our current recipes will lead to many exciting discoveries in the near future. In fact, that is what I am personally working on these days. It is also quite possible that I am wrong, and that simply scaling our current systems will lead to new inventions in physics and elsewhere.",
  "Nevertheless, this was my position last winter when I wrote the paper, and I’m sticking to it. I think that there are a few interesting ideas to explore in this space which could influence the next generation of AI systems.",
];

export default function LlmsCantJumpPage() {
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
            return (
              <a
                key={link.label}
                href={link.href}
                target={external ? "_blank" : undefined}
                rel="noreferrer"
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground/80 transition-colors hover:border-accent hover:text-accent"
              >
                {link.label} {external ? <>&#8599;</> : <>&darr;</>}
              </a>
            );
          })}
        </div>
      </header>

      <figure className="mt-10 overflow-hidden rounded-xl border border-border bg-white">
        <Image
          src={project.image}
          alt="Einstein's cycle of invention: a Jump from Sense Experience to a System of Axioms, followed by Deduced Theorems checked against experiments."
          width={project.heroNatural!.width}
          height={project.heroNatural!.height}
          priority
          sizes="(max-width: 768px) 100vw, 720px"
          className="w-full"
        />
        <figcaption className="border-t border-border bg-card px-4 py-3 text-xs leading-relaxed text-muted">
          Einstein&rsquo;s cycle of invention, from his letter to Maurice
          Solovine: an intuitive <em>Jump</em> from sense experience to a system
          of axioms, then deduction and experiment. The Jump is the step this
          paper is about.
        </figcaption>
      </figure>

      {/* Overview */}
      <section className="mt-12 space-y-4 leading-relaxed text-foreground/90">
        {project.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        <p className="text-sm text-muted">
          Position paper, January 2026. Also on{" "}
          <a
            href="https://philsci-archive.pitt.edu/28024/"
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:underline"
          >
            PhilSci-Archive
          </a>{" "}
          and{" "}
          <a
            href="https://openreview.net/forum?id=klU4737opt"
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:underline"
          >
            OpenReview
          </a>
          .
        </p>
      </section>

      {/* Reception */}
      <section className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          Reception
        </h2>
        <p className="mt-2 leading-relaxed text-foreground/90">
          The paper travelled a long way for a ten-page position piece. It was
          discussed across X, LinkedIn, Hacker News and Reddit, and picked up by
          science journalists and essayists asking the same question from
          different angles: what would it take for AI to make an Einstein-sized
          leap?
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => {
            const inner = (
              <>
                <p className="text-2xl font-semibold tracking-tight">{s.value}</p>
                <p className="mt-1 text-xs leading-snug text-muted">
                  {s.label}
                  {s.href && <span className="text-muted"> &#8599;</span>}
                </p>
              </>
            );
            return s.href ? (
              <a
                key={s.value}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent"
              >
                {inner}
              </a>
            ) : (
              <div key={s.value} className="rounded-xl border border-border bg-card p-4">
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      {/* Press */}
      <section className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          In the press
        </h2>
        <div className="mt-4 space-y-4">
          {press.map((p) => (
            <a
              key={p.href}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent"
            >
              <p className="text-xs uppercase tracking-wide text-muted">
                {p.outlet} <span className="text-foreground/30">&middot;</span> {p.kind}
              </p>
              <h3 className="mt-1.5 font-medium leading-snug transition-colors group-hover:text-accent">
                {p.title} <span className="text-muted">&#8599;</span>
              </h3>
              <p className="mt-1 text-sm text-muted">
                {p.author} &middot; {p.date}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                {p.blurb}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Reflections */}
      <section className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          My reflections
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Once the paper started circulating, I wrote a short note to clarify what
          it does and doesn&rsquo;t claim.{" "}
          <a
            href={REFLECTIONS_URL}
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:underline"
          >
            Read the original on X &#8599;
          </a>
        </p>
        <blockquote className="mt-4 space-y-4 rounded-xl border border-border bg-card p-5 leading-relaxed text-foreground/90 sm:p-6">
          {reflections.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <footer className="text-sm text-muted">
            &mdash; 29 July 2026
          </footer>
        </blockquote>
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

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
const PHILSCI_URL = "https://philsci-archive.pitt.edu/28024/";

export const metadata: Metadata = {
  title: `${project.title} — Tom Zahavy`,
  description: project.description,
};

const coverage = [
  {
    author: "Philip Ball",
    title: "The Einstein test: what happens when AI tries to rediscover relativity?",
    outlet: "Nature",
    kind: "news feature",
    date: "9 September 2026",
    href: "https://www.nature.com/articles/d41586-026-02804-x",
    note: "On 'vintage' language models trained on pre-1911 data and whether they could rediscover general relativity. Presents the paper as the detailed case for the test, and its argument that such a breakthrough requires abduction rather than induction.",
  },
  {
    author: "Ian Leslie",
    title: "Einstein, Churchill, and AI",
    outlet: "The Ruffian",
    kind: "essay",
    date: "15 August 2026",
    href: "https://www.ian-leslie.com/p/einstein-churchill-and-ai",
    note: "An extended discussion of the paper's central example — Einstein's 1907 thought experiment — and its claim that the insight was grounded in physical experience rather than in words or symbols.",
  },
  {
    author: "Noah Smith",
    title: "The End of the Age of Heroes",
    outlet: "Noahpinion",
    kind: "essay",
    date: "4 August 2026",
    href: "https://www.noahpinion.blog/p/the-end-of-the-age-of-heroes",
    note: "On AI systems solving open problems in mathematics; cites the paper for the possibility that novel conceptual leaps remain a general limitation of current models.",
  },
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
          Einstein&rsquo;s model of invention, from his letter to Maurice
          Solovine: an intuitive jump from sense experience to a system of
          axioms, followed by deduction and experiment. The paper is about the
          jump.
        </figcaption>
      </figure>

      {/* Overview */}
      <section className="mt-12 space-y-4 leading-relaxed text-foreground/90">
        {project.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </section>

      {/* Reception */}
      <section className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          Reception
        </h2>
        <p className="mt-2 leading-relaxed text-foreground/90">
          The paper was posted to{" "}
          <a href={PHILSCI_URL} target="_blank" rel="noreferrer" className="text-accent hover:underline">
            PhilSci-Archive
          </a>{" "}
          in January 2026, where it is among the ten most-downloaded papers.
          It was widely discussed on X, LinkedIn and Reddit, reached the top of{" "}
          <a href={HN_URL} target="_blank" rel="noreferrer" className="text-accent hover:underline">
            Hacker News
          </a>
          , and was covered in the science press and by essayists. Selected
          coverage:
        </p>
        <ul className="mt-5 space-y-5">
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
                . <em>{c.outlet}</em> {c.kind}, {c.date}.
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{c.note}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Clarification */}
      <section className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          A note on scope
        </h2>
        <div className="mt-2 space-y-4 leading-relaxed text-foreground/90">
          <p>
            Some of the discussion framed the paper as an argument that LLMs
            cannot make scientific discoveries, or as an institutional view.
            It is neither. It is a personal position paper, and as a
            contributor to{" "}
            <Link href="/projects/alphaproof" className="text-accent hover:underline">
              AlphaProof
            </Link>{" "}
            I have seen first-hand that LLM-based systems are already making
            real discoveries, and will continue to.
          </p>
          <p>
            The paper is narrower than that: it asks what it would take for a
            system to make one specific kind of jump — Einstein&rsquo;s
            formulation of the equivalence principle from thought experiments
            grounded in physical intuition — and argues that current recipes do
            not obviously supply it. Whether that capability is the most urgent
            thing to build next is a separate question; it may well be that
            scaling current systems is enough. I wrote up these clarifications
            in{" "}
            <a href={REFLECTIONS_URL} target="_blank" rel="noreferrer" className="text-accent hover:underline">
              a short note
            </a>{" "}
            after the paper began circulating.
          </p>
        </div>
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

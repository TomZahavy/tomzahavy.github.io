import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { featuredProjects } from "@/lib/data";

const serif = Fraunces({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-serif",
});

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

const facts = [
  { value: "28 / 42", label: "points at IMO 2024" },
  { value: "Silver", label: "medal standard" },
  { value: "First", label: "AI system to reach medal level" },
  { value: "P6", label: "hardest problem of the year, solved by five contestants" },
];

const coverage = [
  {
    author: "Davide Castelvecchi",
    title: "DeepMind hits milestone in solving maths problems — AI's next grand challenge",
    outlet: "Nature",
    date: "25 July 2024",
    href: "https://www.nature.com/articles/d41586-024-02441-2",
  },
  {
    author: "Siobhan Roberts",
    title: "Move Over, Mathematicians, Here Comes AlphaProof",
    outlet: "The New York Times",
    date: "25 July 2024",
    href: "https://www.nytimes.com/2024/07/25/science/ai-math-alphaproof-deepmind.html",
  },
  {
    author: "Rhiannon Williams",
    title: "Google DeepMind's new AI systems can now solve complex math problems",
    outlet: "MIT Technology Review",
    date: "25 July 2024",
    href: "https://www.technologyreview.com/2024/07/25/1095315/google-deepminds-ai-systems-can-now-solve-complex-math-problems/",
  },
  {
    author: "Timothy Gowers",
    title: "Thread on grading the solutions",
    outlet: "X",
    date: "25 July 2024",
    href: "https://x.com/wtgowers/status/1816509803407040909",
  },
  {
    author: "Manon Bischoff",
    title: "AI Reaches Silver-Medal Level at This Year's Math Olympiad",
    outlet: "Scientific American",
    date: "6 August 2024",
    href: "https://www.scientificamerican.com/article/ai-reaches-silver-medal-level-at-this-years-math-olympiad/",
  },
  {
    author: "Talia Ringer",
    title: "Mathematicians put AI model AlphaProof to the test",
    outlet: "Nature, News & Views",
    date: "12 November 2025",
    href: "https://www.nature.com/articles/d41586-025-03585-5",
  },
];

const eyebrow =
  "text-[11px] font-medium uppercase tracking-[0.2em] text-muted";

export default function AlphaProofPage() {
  return (
    <div className={`${serif.variable} mx-auto max-w-3xl px-6 py-14`}>
      <Link href="/" className="text-sm text-muted transition-colors hover:text-accent">
        &larr; Home
      </Link>

      <header className="mt-10">
        <p className={eyebrow}>
          International Mathematical Olympiad &middot; Bath, July 2024
        </p>
        <h1
          className="mt-4 text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl"
          style={{ fontFamily: "var(--font-serif)", fontOpticalSizing: "auto" }}
        >
          {project.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80 sm:text-xl">
          {project.description}
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-2">
          {project.links.map((link) => {
            const external = link.href.startsWith("http");
            const cls =
              "rounded-full border border-border px-3.5 py-1.5 text-sm text-foreground/80 transition-colors hover:border-foreground/60 hover:text-foreground";
            return external ? (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={cls}>
                {link.label} &#8599;
              </a>
            ) : (
              <Link key={link.label} href={link.href} className={cls}>
                {link.label} &rarr;
              </Link>
            );
          })}
        </div>
      </header>

      <figure className="mt-14">
        <div className="overflow-hidden rounded-2xl ring-1 ring-black/10 dark:ring-white/10">
          <Image
            src={project.image}
            alt="Illuminated proof steps threading through a field of dark mathematical statements."
            width={project.heroNatural!.width}
            height={project.heroNatural!.height}
            priority
            sizes="(max-width: 768px) 100vw, 720px"
            className="w-full"
          />
        </div>
      </figure>

      {/* Plaque */}
      <dl className="mt-12 grid grid-cols-2 gap-y-8 border-y border-border py-8 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-border">
        {facts.map((f) => (
          <div key={f.label} className="px-1 sm:px-5 sm:first:pl-0 sm:last:pr-0">
            <dt
              className="text-3xl font-light leading-none tracking-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {f.value}
            </dt>
            <dd className="mt-2 text-xs leading-snug text-muted">{f.label}</dd>
          </div>
        ))}
      </dl>

      {/* Overview */}
      <section className="mt-14 space-y-5 text-[17px] leading-[1.75] text-foreground/90">
        {project.body.map((paragraph, i) => (
          <p
            key={i}
            className={
              i === 0
                ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-6xl first-letter:font-light first-letter:leading-[0.8] first-letter:[font-family:var(--font-serif)]"
                : undefined
            }
          >
            {paragraph}
          </p>
        ))}
      </section>

      {/* Pull quote */}
      <figure className="mx-auto mt-16 max-w-2xl text-center">
        <div className="mx-auto h-px w-12 bg-border" />
        <blockquote
          className="mt-8 text-2xl font-light italic leading-snug text-foreground sm:text-[28px]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          &ldquo;The fact that the program can come up with a non-obvious
          construction like this is very impressive, and well beyond what I
          thought was state of the art.&rdquo;
        </blockquote>
        <figcaption className={`mt-6 ${eyebrow}`}>
          Sir Timothy Gowers &middot; Fields Medallist
        </figcaption>
        <div className="mx-auto mt-8 h-px w-12 bg-border" />
      </figure>

      {/* Publication */}
      <section className="mt-16">
        <p className={eyebrow}>Publication</p>
        <a
          href={NATURE_PAPER}
          target="_blank"
          rel="noreferrer"
          className="group mt-4 block rounded-2xl border border-border p-6 transition-colors hover:border-foreground/40 sm:p-8"
        >
          <p
            className="text-2xl font-light leading-snug tracking-tight transition-colors group-hover:text-accent sm:text-[26px]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Olympiad-level formal mathematical reasoning with reinforcement
            learning
          </p>
          <p className="mt-3 text-sm text-muted">
            Hubert, Mehta, Sartran, Horv&aacute;th, Zahavy, et&nbsp;al.{" "}
            <span className="text-foreground/40">&middot;</span>{" "}
            <em>Nature</em>, 12 November 2025
          </p>
        </a>
      </section>

      {/* Blog */}
      <section className="mt-16">
        <p className={eyebrow}>From the blog</p>
        <Link
          href={BLOG_HREF}
          className="group mt-4 block rounded-2xl border border-border p-6 transition-colors hover:border-foreground/40 sm:p-8"
        >
          <p
            className="text-2xl font-light leading-snug tracking-tight transition-colors group-hover:text-accent sm:text-[26px]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            How we achieved an IMO medal, one year before any other AI system
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            My account of AlphaProof: the lifelong RL loop that taught it
            mathematics in Lean, the test-time RL phase that let it crack
            Problem&nbsp;6, and what the result does and doesn&rsquo;t mean.
          </p>
        </Link>
      </section>

      {/* Coverage */}
      <section className="mt-16">
        <p className={eyebrow}>Coverage</p>
        <p className="mt-4 leading-relaxed text-foreground/90">
          The{" "}
          <a href={ANNOUNCEMENT} target="_blank" rel="noreferrer" className="text-accent hover:underline">
            July 2024 announcement
          </a>{" "}
          was reported widely; the solutions were graded by Timothy Gowers and
          Joseph Myers under IMO rules.
        </p>
        <ul className="mt-6 divide-y divide-border border-y border-border">
          {coverage.map((c) => (
            <li key={c.href}>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="w-44 shrink-0 text-xs uppercase tracking-wider text-muted">
                  {c.outlet}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="font-medium transition-colors group-hover:text-accent">
                    {c.title}
                  </span>
                  <span className="mt-0.5 block text-sm text-muted">
                    {c.author} &middot; {c.date}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <nav className="mt-20 flex items-center justify-between pt-8">
        <Link href="/" className="text-sm text-muted transition-colors hover:text-accent">
          &larr; All projects
        </Link>
        <Link href={`/projects/${nextProject.slug}`} className="group text-right">
          <span className={`block ${eyebrow}`}>Next project</span>
          <span className="mt-1 block font-medium transition-colors group-hover:text-accent">
            {nextProject.title} &rarr;
          </span>
        </Link>
      </nav>
    </div>
  );
}

import type { ReactNode } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/lib/data";

const SLUG = "busy-beavers";
const project = featuredProjects.find((p) => p.slug === SLUG)!;
const nextProject =
  featuredProjects[
    (featuredProjects.findIndex((p) => p.slug === SLUG) + 1) %
      featuredProjects.length
  ];

const REPO_URL = "https://github.com/google-deepmind/cryptids";
const EXAMPLE_MACHINE = "1RB0LF_1LC1RA_0RE0RD_---1LE_1LF1RC_1LC1LA";
const EXAMPLE_PROOF_URL = `${REPO_URL}/blob/main/BusyBeaver/BB6/M_1RB0LF_1LC1RA_0RE0RD_HHH1LE_1LF1RC_1LC1LA.lean`;

export const metadata: Metadata = {
  title: `${project.title} — Tom Zahavy`,
  description: project.description,
};

const stats = [
  { value: "11", label: "BB(6) machines with new verified rules, provisionally new Cryptids" },
  { value: "15", label: "known machines whose rules were rediscovered and formally proved" },
  { value: "52", label: "candidate machines surfaced by the pipeline" },
  { value: "0", label: "sorry — every proof is checked by the Lean kernel" },
];

const stages = [
  {
    title: "Find patterns",
    text: "Simulate the machine for millions of steps, compress the tape into blocks, and group recurring configurations into abstract patterns.",
  },
  {
    title: "Conjecture a rule",
    text: "Gemini writes the transition rule between patterns as code, probes edge cases with an interactive simulator, and revises until the rule matches the machine.",
  },
  {
    title: "Prove it informally",
    text: "A generator–evaluator loop writes and critiques a mathematical proof that the rule is a faithful acceleration of the machine.",
  },
  {
    title: "Prove it in Lean",
    text: "A team of agents — setter, planner, writer, critic — turns the argument into a kernel-checked Lean 4 proof, building on BusyLean.",
  },
];

const authors = [
  "Marco Dos Santos",
  "Vivek Veeriah",
  "Alex Havrilla",
  "Andrew Bolt",
  "Goran Zuzic",
  "Satinder Singh",
  "Tom Zahavy",
];

function Case({ result, when }: { result: ReactNode; when: ReactNode }) {
  return (
    <tr>
      <td className="whitespace-nowrap py-1 pr-6 align-top">{result}</td>
      <td className="py-1 align-top text-muted">{when}</td>
    </tr>
  );
}

export default function BusyBeaversPage() {
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
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground/80 transition-colors hover:border-accent hover:text-accent"
            >
              {link.label} &#8599;
            </a>
          ))}
        </div>
      </header>

      <figure className="mt-10 overflow-hidden rounded-xl border border-border bg-white">
        <Image
          src={project.image}
          alt="Space-time diagram of a six-state Turing machine: time runs left to right, tape cells top to bottom, with growing striped blocks that are periodically consumed and rebuilt."
          width={project.heroNatural!.width}
          height={project.heroNatural!.height}
          priority
          sizes="(max-width: 768px) 100vw, 720px"
          className="w-full"
        />
        <figcaption className="border-t border-border bg-card px-4 py-3 text-xs leading-relaxed text-muted">
          The first 9,000 steps of the six-state machine{" "}
          <code className="font-mono">{EXAMPLE_MACHINE}</code>. Time runs left
          to right; each column is the tape. The striped blocks are the{" "}
          <code className="font-mono">(10)</code> and{" "}
          <code className="font-mono">1</code> runs that its acceleration rule
          tracks.
        </figcaption>
      </figure>

      {/* Overview */}
      <section className="mt-12 space-y-4 leading-relaxed text-foreground/90">
        {project.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </section>

      {/* Results */}
      <section className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          Results
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-lg border border-border bg-card p-4">
              <div className="text-2xl font-semibold tracking-tight text-accent">
                {s.value}
              </div>
              <div className="mt-1 text-xs leading-snug text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pipeline */}
      <section className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          How it works
        </h2>
        <ol className="mt-4 space-y-4">
          {stages.map((s, i) => (
            <li key={s.title} className="flex gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-card text-sm text-accent">
                {i + 1}
              </span>
              <div className="leading-relaxed">
                <p className="font-medium">{s.title}</p>
                <p className="mt-0.5 text-sm text-muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Example */}
      <section className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          What an acceleration looks like
        </h2>
        <div className="mt-2 space-y-4 leading-relaxed text-foreground/90">
          <p>
            The machine pictured above writes a block of alternating{" "}
            <code className="font-mono">10</code> pairs followed by a run of
            1s. Write <em>C</em>(<em>a</em>, <em>b</em>) for the moment the
            head sits in state E at the left edge of{" "}
            <em>a</em> copies of <code className="font-mono">10</code> and{" "}
            <em>b</em> ones. After seven steps the machine reaches{" "}
            <em>C</em>(0, 3), and from then on thousands of steps collapse into
            one rule:
          </p>
        </div>
        <div className="mt-4 overflow-x-auto rounded-lg border border-border bg-card px-5 py-4 font-mono text-sm">
          <table>
            <tbody>
              <Case result="C(2a+2, b−2a−2)" when="if b > 2a+2" />
              <Case result="C(2, 2a+2)" when="if b = 1" />
              <Case result={<span className="text-accent">Halt</span>} when="if b = 2" />
              <Case
                result="C(⌊n/4⌋, n mod 4 + 1)"
                when="if b = 2k, 2 ≤ k ≤ a+1, with n = 6a+2k+2"
              />
              <Case
                result="C(⌊n/4⌋, n mod 4 + 1)"
                when="if b = 2k+1, 1 ≤ k ≤ a, with n = 6a+2k+6"
              />
            </tbody>
          </table>
        </div>
        <p className="mt-4 leading-relaxed text-foreground/90">
          Whether the machine ever halts is now a question about this map:
          does the orbit of <em>C</em>(0, 3) ever land on <em>b</em> = 2? The
          rule is proved to be an exact acceleration of the machine{" "}
          <a href={EXAMPLE_PROOF_URL} target="_blank" rel="noreferrer" className="text-accent hover:underline">
            in Lean
          </a>
          ; the question it leaves behind has the flavour of the Collatz
          conjecture.
        </p>
      </section>

      {/* Repository */}
      <section className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          The proofs
        </h2>
        <div className="mt-2 space-y-4 leading-relaxed text-foreground/90">
          <p>
            All the Lean proofs are open source in{" "}
            <a href={REPO_URL} target="_blank" rel="noreferrer" className="text-accent hover:underline">
              google-deepmind/cryptids
            </a>
            . Alongside the BB(6) machines from the paper, the repository
            covers all six remaining BB(3,3) holdouts, and a separate library
            of conjecture-checking machines — small Turing machines that halt
            if and only if Goldbach&rsquo;s conjecture or the Riemann
            hypothesis fails, or ZF is inconsistent. Contributions from the
            Busy Beaver community are welcome.
          </p>
          <p className="text-sm text-muted">
            {authors.join(", ")}. Google DeepMind and the University of
            Cambridge, October 2026.
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

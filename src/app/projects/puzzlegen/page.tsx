import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/lib/data";
import PuzzleTrainer from "@/components/PuzzleTrainer";

const project = featuredProjects.find((p) => p.slug === "puzzlegen")!;
const nextProject =
  featuredProjects[
    (featuredProjects.findIndex((p) => p.slug === "puzzlegen") + 1) %
      featuredProjects.length
  ];

export const metadata: Metadata = {
  title: `${project.title} — Tom Zahavy`,
  description: project.description,
};

const rewards = [
  {
    title: "Counter-intuitiveness",
    tag: "the search gap",
    body: "Rewards positions whose winning move looks bad to a shallow search but is clearly best under deep search. That gap between first impression and truth is what makes a move surprising.",
  },
  {
    title: "Uniqueness",
    tag: "best move ≫ second best",
    body: "A real puzzle has one solution. Using Stockfish search statistics, we reward positions where the top move dominates every alternative, so the answer is unambiguous.",
  },
  {
    title: "Novelty",
    tag: "w.r.t. the training data",
    body: "The position should be genuinely new — not a near-duplicate of something already in the 4.4M-puzzle Lichess training set the model learned from.",
  },
  {
    title: "Realism",
    tag: "a legal, natural position",
    body: "The board must be legal and look like it could have arisen from a real game, rather than a contrived arrangement of pieces.",
  },
];

const experts = [
  {
    name: "Amatzia Avni",
    title: "IM, chess compositions",
    quote:
      "A valuable chess puzzle should be original and creative, with a surprising, counter-intuitive key move and a smart follow-up. The ideal puzzle is also aesthetically pleasing and offers a satisfying, flowing solution.",
  },
  {
    name: "Matthew Sadler",
    title: "Grandmaster",
    quote:
      "I favor natural positions resulting from reasonable play by both sides. Puzzles lose my interest if one side's pieces are clearly misplaced, or if a complex solution yields a minimal advantage.",
  },
  {
    name: "Jonathan Levitt",
    title: "Grandmaster",
    quote:
      "AI is now capable of generating interesting chess positions, beyond just “mining” databases. The positions in this booklet represent a pioneering step in this human–AI partnership.",
  },
];

export default function PuzzleGenPage() {
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
          {project.linkGroups?.map((group) => (
            <span
              key={group.platform}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm"
            >
              <Image
                src={group.logo}
                alt={group.platform}
                width={16}
                height={16}
                className={`h-4 w-4 shrink-0${group.invertOnDark ? " dark:invert" : ""}`}
              />
              <span className="text-foreground/50">{group.platform}</span>
              {group.items.map((item, i) => (
                <span key={item.label} className="flex items-center">
                  {i > 0 && <span className="mr-2 text-border">·</span>}
                  <a href={item.href} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                    {item.label}
                  </a>
                </span>
              ))}
            </span>
          ))}
        </div>
      </header>

      <div className="mt-10 overflow-hidden rounded-xl border border-border bg-white p-4">
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
      <section className="mt-12 space-y-4 leading-relaxed text-foreground/90">
        <p>
          Generative models are good at reproducing what they have seen, but
          genuinely <em>creative</em>, counter-intuitive output is much harder.
          Chess puzzles are an ideal test bed: strong players recognise beauty
          instantly, yet the elements that make a position surprising and
          elegant are hard to pin down.
        </p>
        <p>
          PuzzleGen starts from a generative model trained on 4.4M Lichess
          puzzles, then applies reinforcement learning with rewards computed from
          chess-engine search statistics. Rather than optimising for difficulty,
          the rewards target the things that make a puzzle <em>good</em>:
          uniqueness, counter-intuitiveness, novelty, and realism. The result
          increases counter-intuitive puzzle generation roughly{" "}
          <strong className="font-semibold text-foreground">10&times;</strong> —
          from 0.22% for the supervised model to 2.5% — beating both the training
          data&rsquo;s own rate (2.1%) and the best Lichess-trained baseline
          (0.4%).
        </p>
      </section>

      {/* How it works */}
      <section className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          How it works
        </h2>
        <p className="mt-2 leading-relaxed text-foreground/90">
          Each position the model samples is handed to a chess engine (Stockfish
          and AlphaZero), which scores it against four verification rewards. High-
          scoring puzzles are appended back into training, so the model keeps
          learning to produce more of them — a reinforcement-learning loop with
          machine feedback.
        </p>
        <figure className="mt-4 overflow-hidden rounded-xl border border-border bg-white">
          <Image
            src="/projects/puzzlegen-pipeline.webp"
            alt="PuzzleGen pipeline: a generative model trained on the Lichess dataset samples positions that a chess engine scores against four verification rewards (counter-intuitiveness, uniqueness, novelty, realism); high-scoring puzzles are appended back into training and passed through aesthetic checks into a booklet."
            width={1400}
            height={788}
            sizes="(max-width: 768px) 100vw, 720px"
            className="w-full"
          />
          <figcaption className="border-t border-border bg-card px-4 py-3 text-xs leading-relaxed text-muted">
            The reinforcement-learning-with-machine-feedback loop (Figure&nbsp;1 of the paper).
          </figcaption>
        </figure>
      </section>

      {/* Rewards */}
      <section className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          The rewards
        </h2>
        <p className="mt-2 leading-relaxed text-foreground/90">
          The design of the reward is the heart of the method. Each is derived
          from engine search statistics rather than hand-authored heuristics:
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {rewards.map((r) => (
            <div key={r.title} className="rounded-xl border border-border bg-card p-4">
              <p className="font-medium">
                {r.title}{" "}
                <span className="text-xs font-normal text-muted">— {r.tag}</span>
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GM quotes */}
      <section className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          What the grandmasters said
        </h2>
        <p className="mt-2 leading-relaxed text-foreground/90">
          Three world-renowned experts — all noted authors on chess aesthetics —
          reviewed the generated booklet and explained what made their favourites
          appealing.
        </p>
        <div className="mt-4 space-y-4">
          {experts.map((e) => (
            <blockquote key={e.name} className="rounded-xl border border-border bg-card p-5">
              <p className="leading-relaxed text-foreground/90">&ldquo;{e.quote}&rdquo;</p>
              <footer className="mt-3 text-sm text-muted">
                {e.name} <span className="text-foreground/40">·</span> {e.title}
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          All three independently singled out one position as beautiful — its key
          move, a rook sacrifice, was described as &ldquo;unorthodox&rdquo; and
          &ldquo;by no means a natural or obvious sacrifice.&rdquo; It&rsquo;s
          Puzzle&nbsp;1 in the board below.
        </p>
      </section>

      {/* Try the puzzles */}
      {project.puzzles && (
        <section className="mt-12">
          <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
            Try the puzzles
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Nine of the generated positions &mdash; drag the pieces to play out
            your line. Open any one on Lichess for the full analysis board, or
            browse the whole set on chess.com.
          </p>
          <div className="mt-4 rounded-xl border border-border bg-card p-4 sm:p-6">
            <PuzzleTrainer puzzles={project.puzzles} />
          </div>
        </section>
      )}

      {/* Watch */}
      {project.videos && (
        <section className="mt-12">
          <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
            Watch
          </h2>
          <div className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-x-visible sm:pb-0">
            {project.videos.map((video) => (
              <figure key={video.id} className="min-w-[72%] shrink-0 snap-start sm:min-w-0">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}${
                    video.start ? `?start=${video.start}` : ""
                  }`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="aspect-video w-full rounded-lg border border-border"
                />
                <figcaption className="mt-2 text-sm text-muted">{video.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* References */}
      <section className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          Papers
        </h2>
        <ol className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
          <li>
            X. Feng, V. Veeriah, &hellip; T. Zahavy.{" "}
            <a href="https://arxiv.org/abs/2510.23881" target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-accent">
              Generating Creative Chess Puzzles
            </a>
            . NeurIPS 2025. arXiv:2510.23881.
          </li>
          <li>
            V. Veeriah, F. Barbero, &hellip; T. Zahavy.{" "}
            <a href="https://arxiv.org/abs/2510.23772" target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-accent">
              Evaluating In Silico Creativity: An Expert Review of AI Chess Compositions
            </a>
            . 2025. arXiv:2510.23772.
          </li>
        </ol>
      </section>

      <nav className="mt-14 flex items-center justify-between border-t border-border pt-8">
        <Link href="/" className="text-sm text-muted transition-colors hover:text-accent">
          &larr; All projects
        </Link>
        <Link href={`/projects/${nextProject.slug}`} className="group text-right">
          <span className="block text-xs uppercase tracking-wide text-muted">Next project</span>
          <span className="mt-1 block font-medium transition-colors group-hover:text-accent">
            {nextProject.title} &rarr;
          </span>
        </Link>
      </nav>
    </div>
  );
}

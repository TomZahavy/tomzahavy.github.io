import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/lib/data";
import PuzzleTrainer from "@/components/PuzzleTrainer";

const SLUG = "chess";
const project = featuredProjects.find((p) => p.slug === SLUG)!;
const nextProject =
  featuredProjects[
    (featuredProjects.findIndex((p) => p.slug === SLUG) + 1) %
      featuredProjects.length
  ];

export const metadata: Metadata = {
  title: `${project.title} — Tom Zahavy`,
  description: project.description,
};

const pill =
  "rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground/80 transition-colors hover:border-accent hover:text-accent";
const h3 = "text-sm font-medium uppercase tracking-wide text-muted";

const azdbResults = [
  {
    value: "2×",
    label: "as many challenging puzzles solved as AlphaZero, including the Penrose positions",
  },
  {
    value: "+50 Elo",
    label: "over AlphaZero by picking the specialist player for each opening",
  },
];

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

const papers = [
  {
    authors: "T. Zahavy, V. Veeriah, S. Hou, K. Waugh, M. Lai, E. Leurent, N. Tomašev, et al.",
    title: "Diversifying AI: Towards Creative Chess with AlphaZero",
    venue: "2023. arXiv:2308.09175",
    href: "https://arxiv.org/abs/2308.09175",
  },
  {
    authors: "X. Feng, V. Veeriah, … T. Zahavy",
    title: "Generating Creative Chess Puzzles",
    venue: "NeurIPS 2025. arXiv:2510.23881",
    href: "https://arxiv.org/abs/2510.23881",
  },
  {
    authors: "V. Veeriah, F. Barbero, … T. Zahavy",
    title: "Evaluating In Silico Creativity: An Expert Review of AI Chess Compositions",
    venue: "2025. arXiv:2510.23772",
    href: "https://arxiv.org/abs/2510.23772",
  },
  {
    authors: "A. Selkee, S. Rissanen, X. Feng, T. Zahavy, E. Malmi",
    title: "Conditional Generation of Creative Chess Puzzles with Diffusion Models",
    venue: "2026. arXiv:2609.38577",
    href: "https://arxiv.org/abs/2609.38577",
  },
];

function ExternalPill({ label, href }: { label: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={pill}>
      {label} &#8599;
    </a>
  );
}

export default function ChessPage() {
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
        <nav className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-sm">
          <a href="#alphazero-db" className="text-accent hover:underline">AlphaZero db</a>
          <a href="#puzzlegen" className="text-accent hover:underline">PuzzleGen</a>
          <a href="#open-models" className="text-accent hover:underline">Open models</a>
          <a href="#papers" className="text-accent hover:underline">Papers</a>
        </nav>
      </header>

      <section className="mt-10 space-y-4 leading-relaxed text-foreground/90">
        <p>
          Chess has been called the drosophila of AI, and engines have been
          superhuman at it for decades. That makes it the right place to ask a
          different question: not how to win, but what makes a chess idea
          creative &mdash; and whether a machine can have one.
        </p>
        <p>
          Two projects approach it from opposite ends. AlphaZero db makes a
          single engine think in many different ways, and finds that a diverse
          team solves problems none of its members can. PuzzleGen turns
          generation itself into the task: composing original puzzles, judged
          by grandmasters on the same aesthetic criteria they apply to human
          compositions.
        </p>
      </section>

      {/* ───────────── AlphaZero db ───────────── */}
      <section id="alphazero-db" className="mt-16 scroll-mt-24 border-t border-border pt-12">
        <p className={h3}>Diversity</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          AlphaZero db
        </h2>
        <p className="mt-1 text-muted">A team of superhuman players that think differently</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <ExternalPill label="Paper" href="https://arxiv.org/abs/2308.09175" />
          <ExternalPill
            label="Quanta Magazine"
            href="https://www.quantamagazine.org/google-deepmind-trains-artificial-brainstorming-in-chess-ai-20231115/"
          />
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-[1fr_13rem] sm:items-start">
          <div className="space-y-4 leading-relaxed text-foreground/90">
            <p>
              Artificial Intelligence (AI) systems have surpassed human
              intelligence in a variety of computational tasks. However, AI
              systems, like humans, make mistakes, have blind spots,
              hallucinate, and struggle to generalize to new situations. We
              explored whether AI systems can benefit from creative
              decision-making mechanisms when pushed to the limits of its
              computational rationality.
            </p>
            <p>
              AlphaZero db is a league of AlphaZero agents, represented via a
              latent-conditioned architecture, and trained with
              quality-diversity techniques to generate a wider range of ideas.
              It then selects the most promising ones with sub-additive
              planning. AlphaZero db plays chess in diverse ways, solves more
              puzzles as a group and outperforms a more homogeneous team.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-border">
            <Image
              src="/projects/azdb.webp"
              alt="Four robot players around one chessboard, each with a different style."
              width={1024}
              height={1024}
              sizes="(max-width: 640px) 100vw, 208px"
              className="w-full"
            />
          </div>
        </div>

        <dl className="mt-8 grid gap-4 sm:grid-cols-2">
          {azdbResults.map((r) => (
            <div key={r.value} className="rounded-xl border border-border bg-card p-4">
              <dt className="text-2xl font-semibold tracking-tight">{r.value}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-muted">{r.label}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Played from different openings, different players in the league
          specialise in different openings. Diversity bonuses emerge in teams of
          AI agents, just as they do in teams of people.
        </p>
      </section>

      {/* ───────────── PuzzleGen ───────────── */}
      <section id="puzzlegen" className="mt-16 scroll-mt-24 border-t border-border pt-12">
        <p className={h3}>Aesthetics</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          PuzzleGen
        </h2>
        <p className="mt-1 text-muted">Composing puzzles grandmasters call beautiful</p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <ExternalPill label="Paper" href="https://arxiv.org/abs/2510.23881" />
          <ExternalPill label="GM review" href="https://arxiv.org/abs/2510.23772" />
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

        <div className="mt-8 overflow-hidden rounded-xl border border-border bg-white p-4">
          <Image
            src={project.image}
            alt="A grid of chess puzzles generated by PuzzleGen."
            width={project.heroNatural!.width}
            height={project.heroNatural!.height}
            sizes="(max-width: 768px) 100vw, 720px"
            className="w-full"
          />
        </div>

        <div className="mt-8 space-y-4 leading-relaxed text-foreground/90">
          <p>
            Generative models are good at reproducing what they have seen, but
            genuinely <em>creative</em>, counter-intuitive output is much
            harder. Chess puzzles are an ideal test bed: strong players
            recognise beauty instantly, yet the elements that make a position
            surprising and elegant are hard to pin down.
          </p>
          <p>
            PuzzleGen starts from a generative model trained on 4.4M Lichess
            puzzles, then applies reinforcement learning with rewards computed
            from chess-engine search statistics. Rather than optimising for
            difficulty, the rewards target the things that make a puzzle{" "}
            <em>good</em>: uniqueness, counter-intuitiveness, novelty, and
            realism. The result increases counter-intuitive puzzle generation
            roughly{" "}
            <strong className="font-semibold text-foreground">10&times;</strong>{" "}
            — from 0.22% for the supervised model to 2.5% — beating both the
            training data&rsquo;s own rate (2.1%) and the best Lichess-trained
            baseline (0.4%).
          </p>
        </div>

        {/* How it works */}
        <div className="mt-12">
          <h3 className={h3}>How it works</h3>
          <p className="mt-2 leading-relaxed text-foreground/90">
            Each position the model samples is handed to a chess engine
            (Stockfish and AlphaZero), which scores it against four
            verification rewards. High-scoring puzzles are appended back into
            training, so the model keeps learning to produce more of them — a
            reinforcement-learning loop with machine feedback.
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
        </div>

        {/* Rewards */}
        <div className="mt-12">
          <h3 className={h3}>The rewards</h3>
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
        </div>

        {/* GM quotes */}
        <div className="mt-12">
          <h3 className={h3}>What the grandmasters said</h3>
          <p className="mt-2 leading-relaxed text-foreground/90">
            Three world-renowned experts — all noted authors on chess aesthetics
            — reviewed the generated booklet and explained what made their
            favourites appealing.
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
            All three independently singled out one position as beautiful — its
            key move, a rook sacrifice, was described as &ldquo;unorthodox&rdquo;
            and &ldquo;by no means a natural or obvious sacrifice.&rdquo;
            It&rsquo;s Puzzle&nbsp;1 in the board below.
          </p>
        </div>

        {/* Try the puzzles */}
        {project.puzzles && (
          <div className="mt-12">
            <h3 className={h3}>Try the puzzles</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Nine of the generated positions &mdash; drag the pieces to play
              out your line. Open any one on Lichess for the full analysis
              board, or browse the whole set on chess.com.
            </p>
            <div className="mt-4 rounded-xl border border-border bg-card p-4 sm:p-6">
              <PuzzleTrainer puzzles={project.puzzles} />
            </div>
          </div>
        )}

        {/* Watch */}
        {project.videos && (
          <div className="mt-12">
            <h3 className={h3}>Watch</h3>
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
          </div>
        )}
      </section>

      {/* ───────────── Open models ───────────── */}
      <section id="open-models" className="mt-16 scroll-mt-24 border-t border-border pt-12">
        <p className={h3}>Open source</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          Open models for puzzle generation
        </h2>
        <p className="mt-1 text-muted">
          With Aalto University: controllable puzzles from diffusion models
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <ExternalPill label="Paper" href="https://arxiv.org/abs/2609.38577" />
          <ExternalPill label="Demo" href="https://chess-puzzle.k8s-test.cs.aalto.fi" />
          <ExternalPill label="Code" href="https://github.com/naapeli/Chess-Puzzle-Generation" />
        </div>
        <div className="mt-6 space-y-4 leading-relaxed text-foreground/90">
          <p>
            A follow-up builds on PuzzleGen&rsquo;s reward-driven approach and
            releases the first open-weight models for chess puzzle generation.
            It replaces left-to-right generation with a masked diffusion model,
            so puzzles can be conditioned on a tactical theme, a target rating,
            or a partially specified board.
          </p>
          <p>
            Training the model to predict the best move alongside the position
            improves solution uniqueness by 11.6%, and reinforcement learning
            with Denoising Diffusion Policy Optimization raises the yield of
            unique, theme-matching puzzles by 89.1%. The code, weights and an
            interactive demo are public.
          </p>
        </div>
      </section>

      {/* ───────────── Papers ───────────── */}
      <section id="papers" className="mt-16 scroll-mt-24 border-t border-border pt-12">
        <h2 className={h3}>Papers</h2>
        <ol className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
          {papers.map((p) => (
            <li key={p.href}>
              {p.authors}{" "}
              <a href={p.href} target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-accent">
                {p.title}
              </a>
              . {p.venue}.
            </li>
          ))}
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

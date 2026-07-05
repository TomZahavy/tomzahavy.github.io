import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How we achieved an IMO medal, one year before any other AI system — Tom Zahavy",
  description:
    "Reflections on AlphaProof — reaching silver-medal standard at the International Mathematical Olympiad by teaching itself mathematics in Lean.",
};

function Figure({
  src,
  width,
  height,
  caption,
  bg = false,
}: {
  src: string;
  width: number;
  height: number;
  caption?: string;
  bg?: boolean;
}) {
  return (
    <figure className="my-8">
      <div
        className={`overflow-hidden rounded-xl border border-border ${
          bg ? "bg-white p-4" : ""
        }`}
      >
        <Image
          src={src}
          alt={caption ?? ""}
          width={width}
          height={height}
          sizes="(max-width: 768px) 100vw, 672px"
          className="w-full"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-xs text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function ImoMedalPost() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-14">
      <Link
        href="/blog"
        className="text-sm text-muted transition-colors hover:text-accent"
      >
        &larr; Blog
      </Link>

      <header className="mt-6">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          How we achieved an IMO medal, one year before any other AI system
        </h1>
        <p className="mt-3 text-sm text-muted">Tom Zahavy · Nov 12, 2025</p>
      </header>

      <div className="mt-8 space-y-5 leading-relaxed text-foreground/90">
        <p>
          It has been over a year since AlphaProof achieved silver-medal standard
          solving International Mathematical Olympiad (IMO) problems, by teaching
          itself mathematics in LEAN. This milestone was special to me because it
          was often hard to believe we would reach it. The IMO is a prestigious
          and recognised competition, where the top-6 young mathematicians from
          each country are trying to solve 6 problems in Algebra, Number Theory,
          Combinatorics, and Geometry. Achieving a medal in the IMO was proposed
          as a grand challenge for AI and gained popularity in prediction markets
          and other circles.
        </p>

        <Figure
          src="/blog/imo/market.webp"
          width={1400}
          height={505}
          caption="Will an AI get gold in the IMO by 2025? (Manifold)"
          bg
        />

        <p>
          Today with the publication of our{" "}
          <a
            href="https://www.nature.com/articles/s41586-025-09833-y"
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:underline"
          >
            paper in Nature
          </a>
          , we can finally share more about this magical moment. My journey of
          developing agents for knowledge discovery began when I joined DeepMind
          in 2019, and AlphaProof stands out as a special moment. I wish to use
          this moment to reflect on the work I engaged in before, during, and
          after my involvement with AlphaProof.
        </p>

        <h2 className="pt-4 text-xl font-semibold tracking-tight">Before</h2>

        <p>
          Creative problem-solving has always fascinated me. Before I joined
          AlphaProof, I was working on AlphaZero, tackling some super tough chess
          puzzles—the kind that even the best modern chess engines can&apos;t
          crack, like the Penrose position.
        </p>

        <Figure
          src="/blog/imo/penrose.webp"
          width={1336}
          height={750}
          caption="The Penrose position"
        />

        <p>
          We experimented with various innovative problem-solving approaches (
          <Link href="/projects/alphazero-db" className="text-accent hover:underline">
            read more about it here
          </Link>
          ), and our main takeaway was that when a quality-diverse group of
          AlphaZero players teamed up, they could solve way more of these puzzles.
        </p>

        <p>
          The second thing we discovered, &ldquo;self-play from puzzle
          positions&rdquo; (see the table below), was pretty cool. Basically, we
          let AlphaZero learn chess from scratch but gave it the puzzles we wanted
          it to solve as starting positions. This allowed AlphaZero to explore the
          positions and figure things out through trial and error. We also added
          variations of the position (with intermediate steps, exploration steps
          and half-move clock variations). It worked like a charm, and we ended up
          solving all the positions but 1.
        </p>

        <Figure
          src="/blog/imo/table.webp"
          width={1400}
          height={470}
          caption="Test time scaling with TTRL"
          bg
        />

        <p>
          Once we wrapped up the project, we showed our findings to Thomas Hubert,
          who was interested and invited us to try these techniques in theorem
          proving!
        </p>

        <h2 className="pt-4 text-xl font-semibold tracking-tight">
          Test Time Reinforcement Learning (TTRL)
        </h2>

        <p>
          The AlphaProof team wasn&apos;t huge. For most of it, there were about
          10 of us, with more joining closer to the competition. You might be
          wondering what 10 people were doing for an entire year on a project like
          that, and honestly, a complicated system like this just takes a ton of
          effort. For AlphaProof, a lot of our big wins came from increasing the
          number of theorems, making the auto-formalization better, fixing miss
          formalizations, ensuring we had the best Lean version, squashing those
          reward hacking bugs, making Lean run way faster in our setup, and so on.
        </p>

        <p>
          While we were doing all that, our RL agent was trying to prove as many
          theorems as it could, and our ever-growing pile of Lean proofs just kept
          getting bigger. We also explored various research ideas some worked, many
          didn&apos;t. For an idea to really get integrated, it had to consistently
          outperform our baseline MCTS, and that&apos;s difficult. We were climbing
          our benchmarks, but while staying optimistic, we felt like we needed one
          of our big bets to pan out to succeed.
        </p>

        <p>
          One bet I was particularly excited about was bringing back self-play from
          starting positions. By letting the agent explore the current problem,
          solve subproblems and learn from that, we hoped it would just keep
          improving. This differs from other test-time scaling methods because we
          actually let the agent train <em>during</em> test time.
        </p>

        <Figure
          src="/blog/imo/pipeline.webp"
          width={1212}
          height={920}
          caption="AlphaProof learning paradigms"
          bg
        />

        <p>
          My longtime collaborator Vivek Veeriah and I tried an approach where we
          broke down the key problem into smaller ones (using Lean subgoals) and
          then treated each sub-problem like a new theorem. The agent got to spend
          more computing power on each sub-problem, and if it solved some, it got
          to train on those.
        </p>

        <p>
          We had some promising results, but the real game-changer came from
          Miklós Horváth, one of our core team members and an IMO medalist. Miklos
          came up with a clever way to create variations of the problem the agent
          was working on, add them as starting positions, and let the agent train
          on those. A lot of folks on the team weren&apos;t keen on it at first
          because it was using a lot of compute to solve a single problem, and the
          initial results were not conclusive.
        </p>

        <p>
          But we believed that this should work, so Miklós myself and others from
          the team kept refining the system until it was clear that it was
          providing significant advantages. We improved the evolutionary algorithm
          that creates the problem variations, wrote and curated more variation
          examples, and developed an automatic mechanism to curate more variants.
          TTRL ended up being our big bet for the IMO, though it was tricky to
          predict how well it would scale, as we rarely had enough compute to
          really go all-in on it. But our practice runs showed some promise...
        </p>

        <p>
          During the competition, we had a partial points system to pull out proven
          sub trees from the search. So despite the fact that MCTS alone could not
          solve any problem, we knew AlphaProof was good enough for a Bronze medal
          within the human time limits. But test-time RL was running in the
          background, and we were waiting. It paid off big time with 3 full proofs
          after three days. That&apos;s when we knew it was time to hit the gong!
        </p>

        <p>
          To get a sense of what AlphaProof was doing in these 3 days, let&apos;s
          look at one example, P1 from IMO 2024:
        </p>

        <blockquote className="border-l-2 border-accent pl-4 text-foreground/80">
          Find all real numbers α so that, for every positive integer n, the
          integer ⌊α⌋ + ⌊2α⌋ + ⌊3α⌋ + · · · + ⌊nα⌋ is divisible by n.
        </blockquote>

        <p>
          I highly recommend watching this video about the problem by{" "}
          <a
            href="https://www.youtube.com/@dedekindcuts3589"
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:underline"
          >
            @dedekindcuts3589
          </a>
        </p>

        <figure className="my-8">
          <video
            src="/blog/imo/imo-p1-video.mp4"
            controls
            playsInline
            preload="metadata"
            className="w-full rounded-xl border border-border"
          />
          <figcaption className="mt-2 text-center text-xs text-muted">
            On IMO 2024 P1, by @dedekindcuts3589
          </figcaption>
        </figure>

        <p>
          So the way human participants typically approach P1 is by considering the
          cases that α is an integer and irrational, even and odd. These are exactly
          how our generated variants looked like. In fact, if you consider the
          integer case first, it is relatively easy to spot the even/odd split,
          which then helps to solve the irrational case.
        </p>

        <p>
          Eventually, we compared test time scaling with MCTS and TTRL properly,
          during the paper writing process:
        </p>

        <Figure
          src="/blog/imo/scaling.webp"
          width={1600}
          height={676}
          caption="Test time scaling with MCTS and TTRL"
          bg
        />

        <h2 className="pt-4 text-xl font-semibold tracking-tight">After</h2>

        <p>
          AI&apos;s role in mathematics is rapidly expanding, with many
          mathematicians already leveraging these systems. This trend will keep
          increasing, most likely leading to finding solutions to many previously
          unsolved problems in 2026. However, my primary interest lies in
          developing agents that will discover new math.
        </p>

        <p>
          One significant challenge for AlphaProof is its reliance on the Lean
          theorem prover. While Lean is a powerful tool with a vibrant community,
          its continuous evolution creates a non-stationary environment for
          AlphaProof. This means that AlphaProof&apos;s performance is often better
          in mathematical sub-domains where Lean&apos;s high-level tactics are more
          developed, as these tactics, though built from axioms, provide a more
          robust foundation for the AI to succeed.
        </p>

        <p>
          Another critical issue is the &ldquo;finitude of data.&rdquo; There&apos;s
          a limited supply of unique math questions and other general mathematical
          problems. For an RL agent to achieve true generality, it needs the ability
          to generate its own questions. While we&apos;ve seen success in creating
          variations of IMO problems, I believe this concept needs to be pushed much
          further.
        </p>

        <p>
          My hope for the future is to see reinforcement learning playing a bigger
          role in mathematical AI agents: build novel theories, formulate their own
          questions, and independently develop new tactics.
        </p>
      </div>

      <nav className="mt-14 border-t border-border pt-8">
        <Link
          href="/blog"
          className="text-sm text-muted transition-colors hover:text-accent"
        >
          &larr; All posts
        </Link>
      </nav>
    </article>
  );
}

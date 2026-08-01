import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/lib/data";

const project = featuredProjects.find((p) => p.slug === "rewards-are-gradients")!;
const nextProject =
  featuredProjects[
    (featuredProjects.findIndex((p) => p.slug === "rewards-are-gradients") + 1) %
      featuredProjects.length
  ];

export const metadata: Metadata = {
  title: `${project.title} — Tom Zahavy`,
  description: project.description,
};

const objectives = [
  {
    title: "Maximum entropy exploration",
    body: "Visit all the states equally. The objective is the negative entropy of the occupancy — as far from linear as it gets.",
  },
  {
    title: "Apprenticeship learning",
    body: "Visit states similar to those of another policy, by minimising a distance between your occupancy and the expert's.",
  },
  {
    title: "Diversity",
    body: "Visit states that other policies do not. The objective is defined over a whole set of occupancies at once.",
  },
  {
    title: "Constraints",
    body: "Maximise reward while keeping some other statistic of the visited states within a budget.",
  },
];

const papers = [
  {
    title: "Reward is enough for convex MDPs",
    venue: "NeurIPS 2021 (spotlight)",
    href: "https://arxiv.org/abs/2106.00661",
    authors: "Tom Zahavy, Brendan O'Donoghue, Guillaume Desjardins, Satinder Singh",
    tldr: "We study non-linear and unsupervised objectives defined over the state occupancy of an RL agent — apprenticeship learning, diverse skill discovery, constrained MDPs, pure exploration. We show that maximising the gradient of such an objective, as an intrinsic reward, solves the problem efficiently, and propose a meta-algorithm that explains many existing algorithms as instances of it.",
  },
  {
    title: "Discovering Policies with DOMiNO: Diversity Optimization Maintaining Near Optimality",
    venue: "ICLR 2023",
    href: "https://openreview.net/pdf?id=kjkdzBW3b8p",
    authors:
      "Tom Zahavy, Yannick Schroecker, Feryal Behbahani, Kate Baumli, Sebastian Flennerhag, Shaobo Hou, Satinder Singh",
    tldr: "We propose intrinsic rewards for discovering quality-diverse policies and show that they adapt to changes in the environment.",
    image: {
      src: "/projects/gradients/domino.webp",
      width: 600,
      height: 240,
      alt: "Ten frames of a simulated dog, each moving in a visibly different way — the diverse near-optimal policies DOMiNO discovers.",
    },
  },
  {
    title: "Discovering Diverse Nearly Optimal Policies with Successor Features",
    venue: "arXiv 2021",
    href: "https://arxiv.org/abs/2106.00669",
    authors:
      "Tom Zahavy, Brendan O'Donoghue, Andre Barreto, Volodymyr Mnih, Sebastian Flennerhag, Satinder Singh",
    tldr: "We propose a method for discovering policies that are diverse in the space of successor features, while assuring that they are near optimal, using a constrained MDP.",
    image: {
      src: "/projects/gradients/successor-features.webp",
      width: 600,
      height: 300,
      alt: "Eight simulated walkers, each having found a distinct locomotion pattern.",
    },
  },
  {
    title: "Discovering a set of policies for the worst case reward",
    venue: "ICLR 2021 (spotlight)",
    href: "https://openreview.net/pdf?id=PUkhWz65dy5",
    authors:
      "Tom Zahavy, Andre Barreto, Daniel J. Mankowitz, Shaobo Hou, Brendan O'Donoghue, Iurii Kemaev, Satinder Singh",
    tldr: "We propose a method for discovering a set of policies that perform well with respect to the worst-case reward when composed together. The sets it finds turn out to be diverse — distinct locomotion skills emerge without ever asking for them.",
    image: {
      src: "/projects/gradients/worstcase.webp",
      width: 400,
      height: 400,
      alt: "A simulated walker performing one of the skills discovered by the worst-case policy iteration algorithm.",
    },
  },
  {
    title:
      "ReLOAD: Reinforcement Learning with Optimistic Ascent-Descent for Last-Iterate Convergence in Constrained MDPs",
    venue: "ICML 2023",
    href: "https://openreview.net/pdf?id=8Hwfncc2Km",
    authors:
      "Ted Moskovitz, Brendan O'Donoghue, Vivek Veeriah, Sebastian Flennerhag, Satinder Singh, Tom Zahavy",
    tldr: "Gradient descent-ascent converges on average, but the current policy may never converge — in practice it oscillates between satisfying the constraint and maximising the reward. ReLOAD is a constrained-RL method with guaranteed last-iterate convergence, and empirically it removes the oscillation.",
    image: {
      src: "/projects/gradients/reload.webp",
      width: 500,
      height: 400,
      alt: "Constraint value against episodes: the standard method oscillates wildly across the constraint threshold, while ReLOAD sits flat on it.",
    },
  },
  {
    title: "Apprenticeship Learning via Frank-Wolfe",
    venue: "AAAI 2020",
    href: "https://arxiv.org/abs/1911.01679",
    authors: "Tom Zahavy, Alon Cohen, Haim Kaplan, Yishay Mansour",
    tldr: "We show that the well-known apprenticeship learning algorithm of Abbeel and Ng (2004) can be understood as a Frank-Wolfe method, and propose ways to accelerate it.",
  },
  {
    title: "Online Apprenticeship Learning",
    venue: "AAAI 2021",
    href: "https://arxiv.org/abs/2102.06924",
    authors: "Lior Shani, Tom Zahavy, Shie Mannor",
    tldr: "The first apprenticeship learning algorithm that does not require solving an MDP at every iteration — both players play no-regret — with a regret analysis.",
  },
  {
    title: "Inverse Reinforcement Learning in Contextual MDPs",
    venue: "Machine Learning Journal 2021",
    href: "https://arxiv.org/abs/1905.09710",
    authors:
      "Stav Belogolovsky, Philip Korsunsky, Shie Mannor, Chen Tessler, Tom Zahavy",
    tldr: "Recovering a reward that explains an expert's behaviour when the task itself varies with a context — another convex objective over occupancies, solved with the same descent-ascent recipe.",
  },
];

export default function RewardsAreGradientsPage() {
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
                {link.label} {external ? <>&#8599;</> : <>&rarr;</>}
              </a>
            );
          })}
        </div>
      </header>

      <figure className="mt-10 overflow-hidden rounded-xl border border-border bg-white">
        <Image
          src={project.image}
          alt="A cartoon: an RL agent asks “Where do rewards come from?” and the cost player answers “Rewards are gradients!”"
          width={project.heroNatural!.width}
          height={project.heroNatural!.height}
          priority
          sizes="(max-width: 768px) 100vw, 720px"
          className="w-full"
        />
      </figure>

      {/* Overview */}
      <section className="mt-12 space-y-4 leading-relaxed text-foreground/90">
        <p>
          We can describe the standard RL problem as a linear function: the inner
          product between the state-action occupancy and the reward vector. The
          occupancy is the distribution over the states and actions that an agent
          visits when following a policy, and the reward defines a priority over
          those state-action pairs.
        </p>
        <p>
          Sometimes a good objective function is all we need — predicting the next
          word in a sentence turned out to be transformative. I have been
          interested in deriving more general objectives of behaviour: non-linear,
          unsupervised, convex and non-convex objectives that control the
          distribution an agent visits.
        </p>
      </section>

      {/* Objectives */}
      <section className="mt-10">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          Objectives beyond a reward vector
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {objectives.map((o) => (
            <div key={o.title} className="rounded-xl border border-border bg-card p-4">
              <p className="font-medium">{o.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{o.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          And more: GAIL and state-marginal matching, unsupervised skill discovery,
          inverse RL in contextual MDPs, adversarial MDPs. All of them are convex
          functions of the occupancy; none of them is a reward vector.
        </p>
      </section>

      {/* The result */}
      <section className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          The main result
        </h2>
        <p className="mt-2 leading-relaxed text-foreground/90">
          My main result is that we can reformulate these problems as
          convex-concave zero-sum games, and derive a non-stationary intrinsic
          reward for solving them. The reward turns out to be very simple and
          general: it is the gradient of the objective with respect to the state
          occupancy.
        </p>

        <div className="mt-5 overflow-x-auto rounded-xl border border-border bg-card px-5 py-4">
          <dl className="min-w-max space-y-2.5 text-sm">
            <div className="flex items-baseline gap-4">
              <dt className="w-28 shrink-0 text-muted">RL</dt>
              <dd className="font-mono">
                max<sub>d</sub> &#10216;r, d&#10217;
              </dd>
            </div>
            <div className="flex items-baseline gap-4">
              <dt className="w-28 shrink-0 text-muted">Convex MDP</dt>
              <dd className="font-mono">min<sub>d</sub> f(d)</dd>
            </div>
            <div className="flex items-baseline gap-4 border-t border-border pt-2.5">
              <dt className="w-28 shrink-0 text-muted">The reward</dt>
              <dd className="font-mono">r<sub>k</sub> = &minus;&nabla;f(d<sub>k</sub>)</dd>
            </div>
          </dl>
          <p className="mt-3 text-xs leading-relaxed text-muted">
            <span className="font-mono">d</span> is the state-action occupancy of
            the policy, constrained to the set of occupancies the MDP admits.
            Standard RL is the special case{" "}
            <span className="font-mono">f(d) = &minus;&#10216;r, d&#10217;</span>,
            whose gradient is the constant{" "}
            <span className="font-mono">&minus;r</span> — the stationary reward we
            are used to.
          </p>
        </div>

        <div className="mt-6 space-y-4 leading-relaxed text-foreground/90">
          <p>
            <strong className="font-semibold">A stationary reward cannot do it.</strong>{" "}
            For any fixed reward vector there is always a deterministic optimal
            policy — but for objectives like maximum-entropy exploration no
            deterministic policy is optimal. So no stationary reward has the convex
            objective&rsquo;s solution as its optimum, and the reward has to move
            as the agent learns.
          </p>
          <p>
            <strong className="font-semibold">Fenchel duality gives the game.</strong>{" "}
            It converts the convex MDP into a two-player zero-sum game between the
            agent (the <em>policy player</em>) and an adversary producing rewards
            (the <em>cost player</em>). From the agent&rsquo;s point of view the
            game is bilinear, so for a fixed reward the problem is just standard RL
            with a non-stationary reward — meaning{" "}
            <em>any algorithm that solves standard RL can be used as a subroutine
            to solve the convex MDP</em>, with the average of the policies it
            produces converging to the solution.
          </p>
          <p>
            <strong className="font-semibold">It unifies a lot of the literature.</strong>{" "}
            Choosing specific no-regret algorithms for the two players recovers
            disparate branches of RL as instances of a single meta-algorithm:
            apprenticeship learning, constrained MDPs, pure exploration, GAIL,
            adversarial MDPs, and mutual-information skill discovery such as DIAYN
            and VIC.
          </p>
        </div>
      </section>

      {/* Questions */}
      <section className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          What the papers ask
        </h2>
        <ul className="mt-4 space-y-2.5">
          {[
            "In what sense are general-utility RL problems different from RL problems?",
            "Can we solve them with similar techniques?",
            "Are there interesting objectives we can now easily solve using this approach?",
            "In particular — Quality-Diversity objectives.",
          ].map((q, i) => (
            <li key={i} className="flex gap-3 leading-relaxed text-foreground/90">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-xs tabular-nums text-muted">
                {i + 1}
              </span>
              <span>{q}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Papers */}
      <section className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          Papers
        </h2>
        <div className="mt-4 space-y-4">
          {papers.map((p) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="flex flex-col gap-4 p-5 sm:flex-row">
                {p.image && (
                  <div className="flex w-full shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-white p-2 sm:w-48">
                    <Image
                      src={p.image.src}
                      alt={p.image.alt}
                      width={p.image.width}
                      height={p.image.height}
                      unoptimized
                      sizes="(max-width: 640px) 100vw, 176px"
                      className="h-auto w-full max-w-[240px] sm:max-w-none"
                    />
                  </div>
                )}
                <div className="min-w-0">
                  <h3 className="font-medium leading-snug">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-accent"
                    >
                      {p.title} <span className="text-muted">&#8599;</span>
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-muted">{p.venue}</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                    {p.tldr}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {p.authors}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          The same ideas power{" "}
          <Link href="/projects/alphazero-db" className="text-accent hover:underline">
            AlphaZero<sub>db</sub>
          </Link>
          , where quality-diversity objectives produce a league of chess agents
          that think in different ways. Filter the{" "}
          <Link href="/publications" className="text-accent hover:underline">
            full publication list
          </Link>{" "}
          by <em>Intrinsic reward</em> or <em>Diversity</em> for everything else.
        </p>
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

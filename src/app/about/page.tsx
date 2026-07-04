import type { Metadata } from "next";
import { socialLinks } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — Tom Zahavy",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="text-2xl font-semibold tracking-tight">About</h1>

      <div className="mt-6 space-y-4 leading-relaxed text-foreground/90">
        <p>
          I&apos;m a Senior Research Scientist at Google DeepMind, where I
          work on reinforcement learning &mdash; from foundational questions
          about objectives beyond a single scalar reward, to applying RL to
          mathematics, games, and reasoning in large language models.
        </p>
        <p>
          I completed my PhD at the Technion &mdash; Israel Institute of
          Technology, advised by Prof. Shie Mannor, working on deep
          reinforcement learning, interpretability, and hierarchical RL.
          Since joining DeepMind, my research has spanned general value
          functions and convex MDPs, meta-learning, and diversity-seeking RL
          algorithms.
        </p>
        <p>
          More recently I&apos;ve been applying these ideas beyond classic RL
          benchmarks: AlphaProof, a system that reached IMO silver-medal
          level at theorem proving; generating novel chess puzzles and
          studying stylistic diversity in superhuman chess and Go engines;
          and combining RL with Gemini to design origami crease patterns.
        </p>
      </div>

      <section className="mt-10">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          Elsewhere
        </h2>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

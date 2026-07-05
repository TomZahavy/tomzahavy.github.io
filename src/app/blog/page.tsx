import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Tom Zahavy",
};

type Post = {
  title: string;
  date: string;
  href: string;
  external?: boolean;
  excerpt: string;
};

const posts: Post[] = [
  {
    title: "How we achieved an IMO medal, one year before any other AI system",
    date: "Nov 12, 2025",
    href: "/blog/how-we-achieved-an-imo-medal",
    excerpt:
      "Reflections on AlphaProof — the work before, during, and after reaching silver-medal standard at the International Mathematical Olympiad by teaching itself mathematics in Lean.",
  },
  {
    title: "AI achieves silver-medal standard solving International Mathematical Olympiad problems",
    date: "Jul 25, 2024",
    href: "https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/",
    external: true,
    excerpt:
      "The official DeepMind announcement — how AlphaProof and AlphaGeometry 2 combined search and reinforcement learning to solve olympiad-level mathematics problems.",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="text-2xl font-semibold tracking-tight">Blog</h1>
      <p className="mt-2 text-muted">
        Notes and writeups about my research.
      </p>

      <ol className="mt-8 space-y-6">
        {posts.map((post) => (
          <li key={post.href} className="border-b border-border pb-6 last:border-0">
            {post.external ? (
              <a
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className="font-medium leading-snug hover:text-accent"
              >
                {post.title} &#8599;
              </a>
            ) : (
              <Link href={post.href} className="font-medium leading-snug hover:text-accent">
                {post.title}
              </Link>
            )}
            <p className="mt-1 text-sm text-muted">{post.date}</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">{post.excerpt}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

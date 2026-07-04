import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Tom Zahavy",
};

type Post = {
  title: string;
  date: string;
  href: string;
  excerpt: string;
};

const posts: Post[] = [
  {
    title: "AI achieves silver-medal standard solving International Mathematical Olympiad problems",
    date: "2024-07-25",
    href: "https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/",
    excerpt:
      "How AlphaProof and AlphaGeometry 2 combined search and reinforcement learning to solve olympiad-level mathematics problems.",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="text-2xl font-semibold tracking-tight">Blog</h1>
      <p className="mt-2 text-muted">
        Notes and pointers to writeups about my research.
      </p>

      <ol className="mt-8 space-y-6">
        {posts.map((post) => (
          <li key={post.href} className="border-b border-border pb-6 last:border-0">
            <a
              href={post.href}
              target="_blank"
              rel="noreferrer"
              className="font-medium leading-snug hover:text-accent"
            >
              {post.title}
            </a>
            <p className="mt-1 text-sm text-muted">{post.date}</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">{post.excerpt}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

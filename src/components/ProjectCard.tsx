import Link from "next/link";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent"
    >
      <h3 className="font-medium tracking-tight">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <span className="mt-4 text-sm text-accent group-hover:underline">
        Read more &rarr;
      </span>
    </Link>
  );
}

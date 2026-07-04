import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent">
      <h3 className="font-medium tracking-tight">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-accent hover:underline"
          >
            {link.label} &rarr;
          </a>
        ))}
      </div>
    </article>
  );
}

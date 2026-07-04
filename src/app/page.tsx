import { featuredProjects, socialLinks } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <section className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-border bg-card text-2xl font-medium text-muted">
          TZ
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Tom Zahavy</h1>
          <p className="mt-1 text-muted">Senior Research Scientist, Google DeepMind</p>
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
        </div>
      </section>

      <p className="mt-8 leading-relaxed text-foreground/90">
        I work on reinforcement learning at Google DeepMind &mdash; general
        objectives beyond a single scalar reward, meta-learning, and
        diversity in decision-making &mdash; and on applying these ideas to
        mathematics, games, and reasoning in large language models.
      </p>

      <section className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          Featured Projects
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

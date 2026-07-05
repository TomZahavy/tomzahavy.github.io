import Image from "next/image";
import { featuredProjects, socialLinks } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <section className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <Image
          src="/profile.jpg"
          alt="Tom Zahavy"
          width={112}
          height={112}
          priority
          className="h-28 w-28 shrink-0 rounded-full border border-border object-cover"
        />
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Tom Zahavy</h1>
          <p className="mt-1 text-muted">Research Scientist, Google DeepMind</p>
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
        I co-lead the Discovery team at Google DeepMind in London, where
        I&apos;ve worked since 2019. My recent research focuses on hard problems
        that demand creativity and aesthetic taste &mdash; in particular chess,
        mathematics, and computational origami. A few highlights are below.
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

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { featuredProjects } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);
  return project
    ? { title: `${project.title} — Tom Zahavy`, description: project.description }
    : { title: "Tom Zahavy" };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = featuredProjects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = featuredProjects[index];
  const next = featuredProjects[(index + 1) % featuredProjects.length];

  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <Link
        href="/"
        className="text-sm text-muted transition-colors hover:text-accent"
      >
        &larr; Home
      </Link>

      <header className="mt-6">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
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
                {link.label} {external ? <>&#8599;</> : <>&darr;</>}
              </a>
            );
          })}
        </div>
      </header>

      {project.video ? (
        <video
          src={project.video}
          className="mt-10 w-full rounded-xl border border-border"
          autoPlay
          muted
          loop
          playsInline
          controls
        />
      ) : (
        <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-xl border border-border">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 720px"
            className="object-cover"
          />
        </div>
      )}

      <section className="mt-10 grid gap-8 sm:grid-cols-[1fr_220px]">
        <div className="space-y-4 leading-relaxed text-foreground/90">
          {project.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        {project.video && (
          <div>
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={500}
              sizes="(max-width: 640px) 100vw, 220px"
              className="w-full rounded-xl border border-border object-cover"
            />
          </div>
        )}
      </section>

      {project.figure && (
        <section className="mt-12">
          <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
            How it works
          </h2>
          <figure className="mt-4 overflow-hidden rounded-xl border border-border bg-white">
            <Image
              src={project.figure.src}
              alt={project.figure.alt}
              width={1800}
              height={751}
              sizes="(max-width: 768px) 100vw, 720px"
              className="w-full"
            />
            {project.figure.caption && (
              <figcaption className="border-t border-border bg-card px-4 py-3 text-xs leading-relaxed text-muted">
                {project.figure.caption}
              </figcaption>
            )}
          </figure>
        </section>
      )}

      <nav className="mt-14 flex items-center justify-between border-t border-border pt-8">
        <Link
          href="/"
          className="text-sm text-muted transition-colors hover:text-accent"
        >
          &larr; All projects
        </Link>
        <Link href={`/projects/${next.slug}`} className="group text-right">
          <span className="block text-xs uppercase tracking-wide text-muted">
            Next project
          </span>
          <span className="mt-1 block font-medium transition-colors group-hover:text-accent">
            {next.title} &rarr;
          </span>
        </Link>
      </nav>
    </div>
  );
}

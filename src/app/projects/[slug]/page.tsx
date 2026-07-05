import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { featuredProjects } from "@/lib/data";
import GalleryPager from "@/components/GalleryPager";
import PuzzleTrainer from "@/components/PuzzleTrainer";

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
                {link.label} {external ? <>&#8599;</> : <>&darr;</>}
              </a>
            );
          })}

          {project.linkGroups?.map((group) => (
            <span
              key={group.platform}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm"
            >
              <Image
                src={group.logo}
                alt={group.platform}
                width={16}
                height={16}
                className={`h-4 w-4 shrink-0${group.invertOnDark ? " dark:invert" : ""}`}
              />
              <span className="text-foreground/50">{group.platform}</span>
              {group.items.map((item, i) => (
                <span key={item.label} className="flex items-center">
                  {i > 0 && <span className="mr-2 text-border">·</span>}
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent hover:underline"
                  >
                    {item.label}
                  </a>
                </span>
              ))}
            </span>
          ))}
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
      ) : project.heroNatural ? (
        <div className="mt-10 overflow-hidden rounded-xl border border-border">
          <Image
            src={project.image}
            alt={project.title}
            width={project.heroNatural.width}
            height={project.heroNatural.height}
            priority
            sizes="(max-width: 768px) 100vw, 720px"
            className="w-full"
          />
        </div>
      ) : null}

      <section className="mt-10 space-y-4 leading-relaxed text-foreground/90">
        {project.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </section>

      {project.puzzles && (
        <section className="mt-12">
          <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
            Try the puzzles
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Nine of the generated positions &mdash; drag the pieces to play out
            your line. Open any one on Lichess for the full analysis board, or
            browse the whole set on chess.com.
          </p>
          <div className="mt-4 rounded-xl border border-border bg-card p-4 sm:p-6">
            <PuzzleTrainer puzzles={project.puzzles} />
          </div>
        </section>
      )}

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

      {project.gallery && (
        <section className="mt-12">
          <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
            Gallery
          </h2>
          <div className="mt-4">
            <GalleryPager items={project.gallery} />
          </div>
        </section>
      )}

      {project.videos && (
        <section className="mt-12">
          <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
            Watch
          </h2>
          <div className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-x-visible sm:pb-0">
            {project.videos.map((video) => (
              <figure
                key={video.id}
                className="min-w-[72%] shrink-0 snap-start sm:min-w-0"
              >
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}${
                    video.start ? `?start=${video.start}` : ""
                  }`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="aspect-video w-full rounded-lg border border-border"
                />
                <figcaption className="mt-2 text-sm text-muted">
                  {video.title}
                </figcaption>
              </figure>
            ))}
          </div>
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

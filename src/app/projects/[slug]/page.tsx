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
  return { title: project ? `${project.title} — Tom Zahavy` : "Tom Zahavy" };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <Link
        href="/"
        className="text-sm text-muted transition-colors hover:text-accent"
      >
        &larr; Home
      </Link>

      <h1 className="mt-4 text-2xl font-semibold tracking-tight">
        {project.title}
      </h1>

      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="text-sm text-accent hover:underline"
          >
            {link.label} &rarr;
          </a>
        ))}
      </div>

      <div className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-lg border border-border">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 720px"
          className="object-cover"
        />
      </div>

      <div className="mt-8 space-y-4 leading-relaxed text-foreground/90">
        {project.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {project.figure && (
        <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-white">
          <Image
            src={project.figure.src}
            alt={project.figure.alt}
            width={1800}
            height={751}
            sizes="(max-width: 768px) 100vw, 720px"
            className="w-full"
          />
        </figure>
      )}

      {project.video && (
        <video
          src={project.video}
          className="mt-8 w-full rounded-lg border border-border"
          autoPlay
          muted
          loop
          playsInline
          controls
        />
      )}
    </div>
  );
}

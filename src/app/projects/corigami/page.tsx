import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/lib/data";
import GalleryPager from "@/components/GalleryPager";

const project = featuredProjects.find((p) => p.slug === "corigami")!;
const nextProject =
  featuredProjects[
    (featuredProjects.findIndex((p) => p.slug === "corigami") + 1) %
      featuredProjects.length
  ];

export const metadata: Metadata = {
  title: `${project.title} — Tom Zahavy`,
  description: project.description,
};

const pipeline = [
  {
    title: "Semantic stick figure",
    body: "Gemini turns a natural-language prompt into an abstract, structured description of the subject — its parts and proportions.",
  },
  {
    title: "Base packing",
    body: "The stick figure is packed into a base that allocates a region of paper to each limb, flap, and appendage.",
  },
  {
    title: "Flat-foldable solving",
    body: "A solver searches for a crease pattern that provably folds flat, satisfying origami's rigid geometric constraints.",
  },
  {
    title: "Shaping",
    body: "The flat-folded base is shaped into a recognisable three-dimensional form.",
  },
  {
    title: "Aesthetic RL loop",
    body: "A reinforcement-learning loop refines the design, guided by an autonomous critic that scores how good the result looks.",
  },
];

export default function CorigamiPage() {
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
        </div>
      </header>

      <figure className="mt-10 overflow-hidden rounded-xl border border-border">
        <Image
          src={project.image}
          alt={project.title}
          width={project.heroNatural!.width}
          height={project.heroNatural!.height}
          priority
          sizes="(max-width: 768px) 100vw, 720px"
          className="w-full"
        />
        <figcaption className="border-t border-border bg-card px-4 py-3 text-xs leading-relaxed text-muted">
          Designed with COrigami, shaped and folded by Brandon Wong.
        </figcaption>
      </figure>

      {/* Overview */}
      <section className="mt-12 space-y-4 leading-relaxed text-foreground/90">
        <p>
          Origami is a uniquely constrained art form: every design must obey the
          mathematics of flat-foldability while still looking like the thing it
          depicts. COrigami is an end-to-end AI pipeline that tackles both at
          once, turning a natural-language prompt into a crease pattern that
          genuinely folds.
        </p>
        <p>
          By pairing algorithmic optimisation with an autonomous aesthetic
          critic and optimising it with RL, the system acts as a collaborative
          assistant — it produces
          mathematically sound starting points that human artists can expand and
          shape into a finished, physical model.
        </p>
      </section>

      {/* How it works */}
      <section className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          How it works
        </h2>
        <ol className="mt-4 space-y-4">
          {pipeline.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-xs tabular-nums text-muted">
                {i + 1}
              </span>
              <div>
                <p className="font-medium">{step.title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {project.figure && (
          <figure className="mt-8 overflow-hidden rounded-xl border border-border bg-white">
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
        )}
      </section>

      {/* Gallery */}
      {project.gallery && (
        <section className="mt-12">
          <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
            Gallery
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Models COrigami designed, folded from its generated crease patterns.
          </p>
          <div className="mt-4">
            <GalleryPager items={project.gallery} />
          </div>
        </section>
      )}

      {/* Designers */}
      {project.designers && (
        <section className="mt-12">
          <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
            Learn more from origami designers
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            COrigami was made possible by the origami designers and artists whose
            craft, crease patterns, and feedback guided this work.
          </p>
          <div className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3">
            {project.designers.map((d) => (
              <a
                key={d.href}
                href={d.href}
                target="_blank"
                rel="noreferrer"
                className="group w-60 shrink-0 snap-start overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-accent"
              >
                <div className="aspect-[4/3] w-full overflow-hidden border-b border-border bg-white">
                  <Image
                    src={d.image}
                    alt={d.name}
                    width={1000}
                    height={750}
                    sizes="240px"
                    className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium leading-snug group-hover:text-accent">
                    {d.name} <span className="text-muted">&#8599;</span>
                  </p>
                  <p className="mt-0.5 text-xs text-muted">{d.sub}</p>
                </div>
              </a>
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
        <Link href={`/projects/${nextProject.slug}`} className="group text-right">
          <span className="block text-xs uppercase tracking-wide text-muted">
            Next project
          </span>
          <span className="mt-1 block font-medium transition-colors group-hover:text-accent">
            {nextProject.title} &rarr;
          </span>
        </Link>
      </nav>
    </div>
  );
}

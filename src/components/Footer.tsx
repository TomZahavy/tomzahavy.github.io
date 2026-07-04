import { socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 px-6 py-10 text-sm text-muted sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Tom Zahavy</p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

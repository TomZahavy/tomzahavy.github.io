"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/publications", label: "Publications" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-medium tracking-tight">
          Tom Zahavy
        </Link>

        <nav className="hidden items-center gap-6 sm:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors hover:text-accent ${
                  active ? "text-foreground font-medium" : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 sm:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="cursor-pointer p-1 text-foreground"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 pb-4 sm:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-foreground/80 hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

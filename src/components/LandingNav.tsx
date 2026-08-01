"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#sessions", label: "Sessions" },
  { href: "#roundtables", label: "Roundtables" },
  { href: "#notes", label: "Notes" },
  { href: "#vetting", label: "Vetting" },
  { href: "#pricing", label: "Pricing" },
];

export function LandingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy for the nav underline
  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis) setActive(vis.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0.05, 0.3] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "py-2" : "py-4"
        )}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div
            className={cn(
              "flex items-center justify-between rounded-full px-3 py-2 transition-all duration-300 md:px-4 glass-strong border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.5)]",
              scrolled ? "bg-black/80 backdrop-blur-2xl py-2" : "bg-black/60 backdrop-blur-xl py-2.5"
            )}
          >
            <div className="flex items-center gap-3 pl-1.5">
              <Link href="/" aria-label="Vetta home" className="flex items-center gap-2">
                <Logo />
              </Link>
              <span className="hidden lg:inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Verified Practitioner Network
              </span>
            </div>

            <nav className="hidden items-center gap-1 md:flex" aria-label="Sections">
              {LINKS.map((l) => {
                const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  const targetId = l.href.slice(1);
                  const el = document.getElementById(targetId);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  } else {
                    window.location.href = l.href;
                  }
                };

                const isSectionActive = active === l.href.slice(1);

                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={handleNavClick}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors",
                      isSectionActive
                        ? "text-white font-semibold"
                        : "text-white/75 hover:text-white"
                    )}
                  >
                    {l.label}
                    {isSectionActive && (
                      <span className="absolute inset-x-3.5 -bottom-0.5 h-[2.5px] rounded-full vgrad" />
                    )}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <Link href="/login" className="hidden sm:block">
                <Button variant="ghost" className="!px-4 !py-2 !text-[13px] !text-white/90 hover:!text-white hover:!bg-white/10">
                  Log in
                </Button>
              </Link>
              <Link href="/login">
                <Button className="!px-4 !py-2 !text-[13px] !vgrad !text-white font-semibold shadow-md">
                  Sign up
                </Button>
              </Link>
              <button
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 hover:text-white md:hidden"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile sheet */}
          {open && (
            <div className="glass-strong anim-fade-up mt-2 rounded-3xl p-3 md:hidden">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-[14px] font-medium text-mute transition-colors hover:bg-wash hover:text-ink"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-1 border-t border-line pt-2">
                <Link
                  href="/apply"
                  className="block rounded-2xl px-4 py-3 text-[14px] font-semibold vgrad-text"
                >
                  Apply as a Luminary →
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Scroll progress */}
      <ScrollProgress />
    </>
  );
}

function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
      <div
        className="h-full vgrad transition-[width] duration-150 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

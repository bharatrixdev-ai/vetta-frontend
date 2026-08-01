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
              "flex items-center justify-between rounded-full px-4 transition-all duration-300",
              scrolled
                ? "bg-white/90 border border-slate-200 shadow-[0_15px_40px_rgba(0,0,0,0.08)] backdrop-blur-3xl py-2"
                : "bg-transparent border border-transparent py-2.5"
            )}
          >
            <div className="flex items-center gap-3 pl-1.5">
              <Link href="/" aria-label="Vetta home" className="flex items-center gap-2">
                <Logo wordClass="!text-slate-900" />
              </Link>
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
                        ? "text-slate-900 font-semibold"
                        : "text-slate-500 hover:text-slate-900"
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

            <div className="hidden items-center gap-2 md:flex pr-1">
              <Link href="/login">
                <Button variant="ghost" className="!text-slate-600 hover:!text-slate-900 hover:!bg-slate-100 !px-4 !font-medium">
                  Log in
                </Button>
              </Link>
              <Link href="/login">
                <Button className="!bg-slate-900 !text-white hover:!bg-slate-800 !px-5 !py-2 !h-9 shadow-md rounded-full font-medium">
                  Sign up
                </Button>
              </Link>
            </div>  
            <button
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 md:hidden"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div
              className={cn(
                "fixed inset-y-0 right-0 z-50 w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-out",
                open ? "translate-x-0" : "translate-x-full"
              )}
            >
              <div className="flex h-full flex-col px-6 py-8">
                <div className="flex items-center justify-between mb-8">
                  <Logo wordClass="!text-slate-900" />
                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>
                {LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-[15px] font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  >
                    {l.label}
                  </a>
                ))}
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

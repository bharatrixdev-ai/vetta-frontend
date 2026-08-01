"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  Lock,
  Radio,
  Search,
  Ticket,
} from "lucide-react";
import { Shell } from "@/components/Shell";
import { Avatar } from "@/components/Avatar";
import { LuminaryCard } from "@/components/LuminaryCard";
import { Chip, SectionLabel, Verified } from "@/components/ui";
import { byHandle, LUMINARIES, ROUNDTABLES } from "@/lib/data";
import { useRole } from "@/lib/role";
import { cn, inr } from "@/lib/utils";

const INTENTS = [
  "For you",
  "Raising a round",
  "AI / ML",
  "Career switch",
  "Medicine",
  "Design",
  "Product",
  "Founding",
];

const INTENT_TAGS: Record<string, string[]> = {
  "Raising a round": ["Fundraising", "GTM", "SaaS", "Founding"],
  "AI / ML": ["AI/ML", "AI in Health", "Infra", "Research careers"],
  "Career switch": ["Careers", "PM interviews", "Portfolios", "Research careers"],
  Medicine: ["Medicine", "NEET-PG", "Hospital careers", "AI in Health"],
  Design: ["Design", "Portfolios", "Design systems"],
  Product: ["Product", "Consumer", "PM interviews"],
  Founding: ["Founding", "0→1", "M&A", "Hiring", "Fundraising"],
};

type Seg = "all" | "people" | "tables";

/* ───────── Live hero — the room you can walk into right now ───────── */

function LiveHero() {
  const rt = ROUNDTABLES.find((r) => r.live);
  if (!rt) return null;
  const host = byHandle(rt.host)!;
  const cohosts = rt.cohosts.map((c) => byHandle(c)!);

  return (
    <Link
      href={`/roundtable/${rt.id}`}
      className="lift anim-fade-up relative block overflow-hidden rounded-[26px]"
    >
      <div className="anim-drift absolute inset-0 bg-gradient-to-br from-[#1d3358] via-[#2c2a52] to-[#3b2a63]" />
      <div className="absolute inset-0 bg-[radial-gradient(420px_200px_at_80%_-20%,rgba(124,111,255,0.4),transparent)]" />

      <div className="relative p-5 text-white md:p-6">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/30 px-3 py-1.5 text-[11px] font-bold backdrop-blur">
            <span className="anim-pulse-soft h-2 w-2 rounded-full bg-danger" />
            LIVE · {rt.listeners} listening
          </span>
          <span className="rounded-full bg-white/12 px-3 py-1.5 text-[11px] font-semibold backdrop-blur">
            Free
          </span>
        </div>

        <h2 className="mt-5 max-w-[22ch] text-[22px] font-semibold leading-snug tracking-[-0.01em] md:text-[26px]">
          {rt.title}
        </h2>

        <div className="mt-5 flex items-end justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2.5">
              <Avatar name={host.name} size={44} ring />
              {cohosts.map((c) => (
                <Avatar key={c.handle} name={c.name} size={44} ring />
              ))}
            </div>
            <div className="text-[12px] leading-tight text-white/80">
              <span className="inline-flex items-center gap-1 font-semibold text-white">
                {host.short}
                {cohosts.length > 0 && ` + ${cohosts.map((c) => c.short).join(", ")}`}
                <Verified size={11} />
              </span>
              <br />
              at the head table
            </div>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white px-4 py-2.5 text-[13px] font-bold text-[#101318]">
            Join <ArrowRight size={14} strokeWidth={2.4} />
          </span>
        </div>

        {/* listener wall — faces, not text */}
        <div className="mt-5 flex items-center gap-1.5 overflow-hidden">
          {Array.from({ length: 14 }).map((_, i) => (
            <Avatar key={i} name={`L${i}`} seed={`lh${i}`} size={24} className="opacity-70" />
          ))}
          <span className="ml-1 whitespace-nowrap text-[11px] text-white/60">
            +{rt.listeners - 14}
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ───────── Upcoming tables — horizontal snap strip ───────── */

function SoonStrip() {
  const upcoming = ROUNDTABLES.filter((r) => !r.live);
  return (
    <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 md:-mx-1 md:px-1">
      {upcoming.map((r, i) => {
        const host = byHandle(r.host)!;
        return (
          <Link
            key={r.id}
            href={`/roundtable/${r.id}`}
            className="glass-soft lift anim-fade-up min-w-[236px] max-w-[236px] snap-start rounded-2xl p-4"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-accent">
                <CalendarClock size={11.5} strokeWidth={2.2} /> {r.startsLabel}
              </span>
              <span
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10.5px] font-bold",
                  r.price > 0 ? "bg-warn/12 text-warn" : "bg-ok/12 text-ok"
                )}
              >
                {r.price > 0 && <Ticket size={10} strokeWidth={2.4} />}
                {r.price > 0 ? inr(r.price) : "Free"}
              </span>
            </div>
            <div className="mt-2.5 line-clamp-2 min-h-[42px] text-[14.5px] font-semibold leading-snug">
              {r.title}
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex -space-x-2">
                <Avatar name={host.name} size={26} ring />
                {r.cohosts.map((c) => (
                  <Avatar key={c} name={byHandle(c)!.name} size={26} ring />
                ))}
              </div>
              <span className="inline-flex items-center gap-1 truncate text-[11.5px] text-faint">
                {host.short} <Verified size={10} />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

/* ───────── Page ───────── */

export default function Discover() {
  const { role } = useRole();
  const [q, setQ] = useState("");
  const [seg, setSeg] = useState<Seg>("all");
  const [intent, setIntent] = useState("For you");

  const people = LUMINARIES.filter((l) => {
    const text = `${l.name} ${l.title} ${l.org} ${l.tags.join(" ")}`.toLowerCase();
    const matchQ = !q || text.includes(q.toLowerCase());
    const tags = INTENT_TAGS[intent];
    const matchI = intent === "For you" || !tags || l.tags.some((t) => tags.includes(t));
    return matchQ && matchI;
  });
  const tables = ROUNDTABLES.filter(
    (r) => !q || `${r.title} ${r.desc} ${r.tags.join(" ")}`.toLowerCase().includes(q.toLowerCase())
  );

  const showTables = seg !== "people";
  const showPeople = seg !== "tables";

  return (
    <Shell>
      {/* Search */}
      <div className="relative">
        <Search
          size={16}
          strokeWidth={2}
          className="pointer-events-none absolute left-4.5 top-1/2 -translate-y-1/2 text-faint"
          style={{ left: 18 }}
        />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="People, topics, tables…"
          aria-label="Search Vetta"
          className="w-full rounded-full border border-line bg-wash py-3 pl-11 pr-5 text-[14px] text-ink outline-none placeholder:text-faint focus:border-accent/50"
        />
      </div>

      {/* Segments */}
      <div className="mt-3 flex items-center gap-1 rounded-full bg-wash p-1" role="tablist">
        {(
          [
            ["all", "All"],
            ["people", "Luminaries"],
            ["tables", "Roundtables"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            role="tab"
            aria-selected={seg === id}
            onClick={() => setSeg(id)}
            className={cn(
              "flex-1 rounded-full px-3 py-2 text-[13px] font-semibold transition-all duration-200",
              seg === id ? "bg-surface text-ink shadow-[var(--card-shadow)]" : "text-faint hover:text-mute"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Tables */}
      {showTables && (
        <div className="mt-5 space-y-5">
          <LiveHero />
          <div>
            <div className="mb-2.5 flex items-baseline justify-between">
              <SectionLabel>Happening soon</SectionLabel>
              {role === "luminary" ? (
                <Link
                  href="/studio"
                  className="inline-flex items-center gap-1 text-[12px] font-semibold vgrad-text"
                >
                  <Radio size={12} strokeWidth={2.2} /> Host a table
                </Link>
              ) : (
                <span className="inline-flex items-center gap-1 text-[11px] text-faint">
                  <Lock size={10.5} strokeWidth={2} /> Hosted by Luminaries
                </span>
              )}
            </div>
            <SoonStrip />
          </div>
        </div>
      )}

      {/* People */}
      {showPeople && (
        <div className="mt-6">
          <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
            {INTENTS.map((i) => (
              <Chip key={i} active={i === intent} onClick={() => setIntent(i)}>
                {i}
              </Chip>
            ))}
          </div>

          <SectionLabel className="mb-2.5 mt-4">
            {intent === "For you" ? "Matched to your fields" : intent} · {people.length}
          </SectionLabel>
          <div className="grid gap-3 sm:grid-cols-2">
            {people.map((l, i) => (
              <LuminaryCard key={l.handle} l={l} delay={Math.min(i, 4)} />
            ))}
          </div>
          {people.length === 0 && (
            <div className="glass-soft rounded-2xl p-8 text-center text-[13.5px] text-mute">
              No Luminaries match that yet. New applications are reviewed every week.
            </div>
          )}
        </div>
      )}

      {/* Tables-only extended list */}
      {seg === "tables" && (
        <div className="mt-6">
          <SectionLabel className="mb-2.5">All upcoming</SectionLabel>
          <div className="flex flex-col gap-2.5">
            {tables
              .filter((r) => !r.live)
              .map((r) => {
                const host = byHandle(r.host)!;
                return (
                  <Link
                    key={r.id}
                    href={`/roundtable/${r.id}`}
                    className="glass-soft lift flex items-center gap-3.5 rounded-2xl px-4 py-3.5"
                  >
                    <div className="flex -space-x-2">
                      <Avatar name={host.name} size={38} ring />
                      {r.cohosts.slice(0, 1).map((c) => (
                        <Avatar key={c} name={byHandle(c)!.name} size={38} ring />
                      ))}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-[13.5px] font-semibold">{r.title}</div>
                      <div className="text-[11.5px] text-faint">
                        {r.startsLabel} · {host.short}
                        {r.cohosts.length > 0 && ` +${r.cohosts.length}`}
                      </div>
                    </div>
                    <span
                      className={cn(
                        "shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold",
                        r.price > 0 ? "bg-warn/12 text-warn" : "bg-ok/12 text-ok"
                      )}
                    >
                      {r.price > 0 ? inr(r.price) : "Free"}
                    </span>
                  </Link>
                );
              })}
          </div>
        </div>
      )}
    </Shell>
  );
}

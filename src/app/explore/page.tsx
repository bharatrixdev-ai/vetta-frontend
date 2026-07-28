"use client";

import { useState } from "react";
import { Shell } from "@/components/Shell";
import { LuminaryCard } from "@/components/LuminaryCard";
import { Chip, SectionLabel } from "@/components/ui";
import { LUMINARIES } from "@/lib/data";

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

export default function Explore() {
  const [q, setQ] = useState("");
  const [intent, setIntent] = useState("For you");

  const list = LUMINARIES.filter((l) => {
    const text = `${l.name} ${l.title} ${l.org} ${l.tags.join(" ")}`.toLowerCase();
    const matchQ = !q || text.includes(q.toLowerCase());
    const tags = INTENT_TAGS[intent];
    const matchI = intent === "For you" || !tags || l.tags.some((t) => tags.includes(t));
    return matchQ && matchI;
  });

  return (
    <Shell>
      <div className="mb-5">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search Luminaries, skills, situations…"
          className="w-full rounded-full border border-line bg-wash px-5 py-3 text-[14px] outline-none placeholder:text-faint focus:border-accent/50"
        />
        <div className="no-scrollbar -mx-1 mt-3 flex gap-2 overflow-x-auto px-1 pb-1">
          {INTENTS.map((i) => (
            <Chip key={i} active={i === intent} onClick={() => setIntent(i)}>
              {i}
            </Chip>
          ))}
        </div>
      </div>

      <SectionLabel className="mb-2.5">
        {intent === "For you" ? "Matched to your profile" : intent} · {list.length}
      </SectionLabel>
      <div className="grid gap-3 sm:grid-cols-2">
        {list.map((l, i) => (
          <LuminaryCard key={l.handle} l={l} delay={Math.min(i, 4)} />
        ))}
      </div>
      {list.length === 0 && (
        <div className="glass-soft rounded-2xl p-8 text-center text-[13.5px] text-mute">
          No Luminaries match that yet. New applications are reviewed every week.
        </div>
      )}
    </Shell>
  );
}

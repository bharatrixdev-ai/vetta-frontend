"use client";

import { useState } from "react";
import Link from "next/link";
import { Shell } from "@/components/Shell";
import { Avatar } from "@/components/Avatar";
import { NoteCard } from "@/components/NoteCard";
import { Button, GlassCard, SectionLabel, Stat, Verified } from "@/components/ui";
import { byHandle, LUMINARY_REVIEWS, NOTES, ROUNDTABLES } from "@/lib/data";
import { useRole } from "@/lib/role";
import { ArrowRight, LifeBuoy } from "lucide-react";
import { cn, inr } from "@/lib/utils";

function SupportSheet({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-[var(--scrim)] backdrop-blur-sm md:items-center">
      <div className="glass-strong anim-fade-up w-full max-w-md rounded-t-3xl p-6 md:rounded-3xl">
        <div className="flex items-center justify-between">
          <div className="text-[15px] font-semibold">Support</div>
          <button onClick={onClose} className="text-[12.5px] text-faint hover:text-ink">Close</button>
        </div>
        <div className="mt-4 space-y-2">
          {[
            ["Refund status", "Track a Session refund — usually 3–5 working days"],
            ["Report a problem", "Payments, behaviour, or a Session that went wrong"],
            ["Verification help", "Questions about your Luminary application"],
            ["Talk to us", "care@vetta.network · replies within 24h"],
          ].map(([t, d]) => (
            <button
              key={t}
              className="w-full rounded-2xl border border-line bg-wash px-4 py-3.5 text-left transition-colors hover:border-line-2"
            >
              <div className="text-[13.5px] font-semibold">{t}</div>
              <div className="mt-0.5 text-[12px] text-mute">{d}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProfileView({ handle }: { handle: string }) {
  const { me } = useRole();
  const isOwn = handle === me.handle;
  const l = byHandle(handle);
  const [tab, setTab] = useState<"notes" | "sessions" | "tables" | "about">("notes");
  const [support, setSupport] = useState(false);
  const [following, setFollowing] = useState(false);

  // Own (non-Luminary) profile
  if ((isOwn && !me.isLuminary) || !l) {
    return (
      <Shell>
        <GlassCard className="p-6">
          <div className="flex items-center gap-4">
            <Avatar name={me.name} size={72} ring />
            <div className="min-w-0 flex-1">
              <div className="text-lg font-semibold">{me.name}</div>
              <div className="text-[13px] text-mute">{me.title}</div>
              <div className="mt-1 text-[12px] text-faint">@{me.handle} · Member since 2026</div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3 border-t border-line pt-4">
            <Stat value="3" label="Sessions taken" />
            <Stat value="12" label="Notes saved" />
            <Stat value="2" label="Tables joined" />
          </div>
        </GlassCard>

        <Link href="/apply" className="mt-4 block">
          <div className="glass lift rounded-2xl p-5">
            <div className="flex items-center gap-1.5 text-[14px] font-semibold vgrad-text">Become a Luminary <ArrowRight size={14} strokeWidth={2.2} /></div>
            <p className="mt-1 text-[13px] leading-relaxed text-mute">
              Have a track record worth verifying? Apply — get the badge, set your
              prices, host Roundtables, and meet other Luminaries.
            </p>
          </div>
        </Link>

        <div className="mt-4 grid gap-2">
          {[
            ["Upcoming", "1 Session · 1 Roundtable", "/app"],
            ["Payments & invoices", "Razorpay · GST invoices", "/settings"],
            ["Settings", "Privacy, feed, alerts, payments", "/settings"],
          ].map(([t, d, href]) => (
            <Link
              key={t}
              href={href}
              className="glass-soft flex items-center justify-between rounded-2xl px-5 py-4 transition-colors hover:border-line-2"
            >
              <div>
                <div className="text-[13.5px] font-semibold">{t}</div>
                <div className="text-[12px] text-mute">{d}</div>
              </div>
              <ArrowRight size={15} strokeWidth={1.9} className="text-faint" />
            </Link>
          ))}
          <button
            onClick={() => setSupport(true)}
            className="glass-soft flex items-center justify-between rounded-2xl px-5 py-4 text-left transition-colors hover:border-line-2"
          >
            <div>
              <div className="text-[13.5px] font-semibold">Contact support</div>
              <div className="text-[12px] text-mute">We answer fast. Really.</div>
            </div>
            <ArrowRight size={15} strokeWidth={1.9} className="text-faint" />
          </button>
        </div>
        {support && <SupportSheet onClose={() => setSupport(false)} />}
      </Shell>
    );
  }

  // Luminary profile
  const notes = NOTES.filter((n) => n.author === l.handle);
  const tables = ROUNDTABLES.filter((r) => r.host === l.handle || r.cohosts.includes(l.handle));

  return (
    <Shell>
      {isOwn && (
        <div className="glass anim-fade-up mb-3 flex items-center justify-between rounded-2xl px-4 py-3">
          <div className="text-[12.5px] text-mute">
            <span className="font-semibold text-ink">This is your public page.</span>{" "}
            Members see exactly this.
          </div>
          <Link href="/studio">
            <Button variant="ghost" className="!px-3.5 !py-1.5 !text-[12px]">
              Edit in Studio
            </Button>
          </Link>
        </div>
      )}

      <GlassCard className="overflow-hidden">
        <div className="vgrad anim-drift h-20 opacity-60" />
        <div className="-mt-9 px-5 pb-5 md:px-6">
          <div className="flex items-end justify-between">
            <Avatar name={l.name} size={84} ring className="border-4 border-bg" />
            <div className="flex gap-2 pb-1">
              {isOwn ? (
                <>
                  <Button variant="ghost" className="!px-4 !py-2 text-[13px]">Share page</Button>
                  <Link href="/studio">
                    <Button className="!px-5 !py-2 text-[13px]">Open Studio</Button>
                  </Link>
                </>
              ) : (
                <>
                  <Button variant="ghost" className="!px-4 !py-2 text-[13px]" onClick={() => setFollowing(!following)}>
                    {following ? "Following" : "Follow"}
                  </Button>
                  <Link href={`/book/${l.handle}`}>
                    <Button className="!px-5 !py-2 text-[13px]">Book a Session</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2 text-[19px] font-semibold">
            {l.name} <Verified size={17} />
          </div>
          <div className="text-[13.5px] text-mute">{l.title} · {l.org}</div>
          <p className="mt-3 max-w-lg text-[13.5px] leading-relaxed text-ink/85">{l.bio}</p>

          <div className="mt-5 grid grid-cols-4 gap-2 rounded-2xl border border-line bg-wash px-2 py-3.5">
            <Stat value={`★ ${l.rating.toFixed(1)}`} label="Rating" />
            <Stat value={String(l.sessionsDone)} label="Sessions" />
            <Stat value={`${l.years} yrs`} label="Experience" />
            <Stat value={l.responseTime} label="Responds" />
          </div>
        </div>
      </GlassCard>

      {/* Provenance */}
      <div className="mt-4">
        <SectionLabel className="mb-2.5">Provenance — verified record</SectionLabel>
        <div className="grid gap-2">
          {l.provenance.map((p) => (
            <div key={p.label} className="glass-soft flex items-center justify-between rounded-2xl px-4 py-3.5">
              <div>
                <div className="text-[13.5px] font-semibold">{p.label}</div>
                <div className="mt-0.5 flex items-center gap-1.5 text-[11.5px] text-ok">
                  <Verified size={11} /> {p.source}
                </div>
              </div>
              <div className="text-[12px] tabular-nums text-faint">{p.year}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-6 flex gap-1 border-b border-line">
        {(
          [
            ["notes", "Notes"],
            ["sessions", "Sessions"],
            ["tables", "Roundtables"],
            ["about", "About"],
          ] as const
        ).map(([id, name]) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={cn(
              "px-4 py-2.5 text-[13.5px] font-semibold transition-colors",
              tab === id ? "border-b-2 border-accent text-ink" : "text-faint hover:text-mute"
            )}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-3">
        {tab === "notes" &&
          (notes.length ? notes.map((n) => <NoteCard key={n.id} note={n} />) : (
            <div className="glass-soft rounded-2xl p-8 text-center text-[13px] text-mute">No Notes yet.</div>
          ))}

        {tab === "sessions" &&
          l.formats.map((f) => (
            <Link
              key={f.id}
              href={`/book/${l.handle}?format=${f.id}`}
              className="glass-soft lift flex items-center justify-between rounded-2xl px-5 py-4"
            >
              <div>
                <div className="text-[14px] font-semibold">
                  {f.label} {f.mins > 0 && <span className="text-faint">· {f.mins} min</span>}
                </div>
                <div className="mt-0.5 text-[12.5px] text-mute">{f.desc}</div>
              </div>
              <div className="text-[14px] font-semibold vgrad-text">{inr(f.price)}</div>
            </Link>
          ))}

        {tab === "tables" &&
          (tables.length ? (
            tables.map((r) => (
              <Link key={r.id} href={`/roundtable/${r.id}`} className="glass-soft lift rounded-2xl px-5 py-4">
                <div className="flex items-center justify-between">
                  <div className="text-[14px] font-semibold">{r.title}</div>
                  <div className="text-[12px] text-faint">{r.startsLabel}</div>
                </div>
                <div className="mt-1 text-[12.5px] text-mute">{r.desc}</div>
              </Link>
            ))
          ) : (
            <div className="glass-soft rounded-2xl p-8 text-center text-[13px] text-mute">No Roundtables scheduled.</div>
          ))}

        {tab === "about" && (
          <div className="glass-soft rounded-2xl p-5">
            <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-faint">
              What members said
            </div>
            <div className="mt-3 space-y-3">
              {LUMINARY_REVIEWS.map((r) => (
                <div key={r.by} className="border-b border-line pb-3 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-semibold">{r.by}</span>
                    <span className="text-[12px] text-warn">{"★".repeat(r.stars)}</span>
                  </div>
                  <p className="mt-1 text-[13px] leading-relaxed text-mute">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "about" && (
          <div className="glass-soft rounded-2xl p-5 text-[13.5px] leading-relaxed text-mute">
            <p>{l.bio}</p>
            <p className="mt-3">
              Topics: {l.tags.join(" · ")}. Booking window: rolling 60 days. Chat
              unlocks 48 hours before every Session.
            </p>
          </div>
        )}
      </div>
    </Shell>
  );
}

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Shell } from "@/components/Shell";
import { Avatar } from "@/components/Avatar";
import { RazorpaySheet } from "@/components/RazorpaySheet";
import { Button, GlassCard, SectionLabel, Verified } from "@/components/ui";
import { byHandle, type SessionFormat } from "@/lib/data";
import { ArrowLeft, ArrowRight, BellRing, Lock, Check, Clock3, MessageSquare, RotateCcw, Sparkles } from "lucide-react";
import { cn, inr, windowDays } from "@/lib/utils";

export function BookingView({ handle }: { handle: string }) {
  const l = byHandle(handle);
  const days = useMemo(() => windowDays(74), []);
  const [format, setFormat] = useState<SessionFormat | null>(null);
  const [dayIdx, setDayIdx] = useState<number | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const [pay, setPay] = useState(false);
  const [done, setDone] = useState(false);
  const [notified, setNotified] = useState(false);

  if (!l) {
    return (
      <Shell>
        <div className="glass-soft rounded-2xl p-8 text-center text-mute">Luminary not found.</div>
      </Shell>
    );
  }

  const day = dayIdx != null ? days.find((d) => d.idx === dayIdx) : null;

  if (done) {
    return (
      <Shell>
        <GlassCard className="anim-fade-up p-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ok/15 text-ok"><Check size={30} strokeWidth={2.2} /></div>
          <h1 className="mt-4 text-xl font-semibold">Session confirmed</h1>
          <p className="mt-1.5 text-[13.5px] text-mute">
            {format?.label} with {l.name} · {day?.weekday}, {day?.label} · {slot}
          </p>

          <div className="mx-auto mt-6 max-w-sm space-y-2 text-left">
            <div className="glass-soft rounded-2xl px-4 py-3.5">
              <div className="flex items-center gap-1.5 text-[13px] font-semibold"><MessageSquare size={14} strokeWidth={2} className="text-accent" /> Chat unlocks 48h before</div>
              <p className="mt-0.5 text-[12.5px] text-mute">
                Say hello, share context, send documents — it opens automatically two
                days before your Session.
              </p>
            </div>
            <div className="glass-soft rounded-2xl px-4 py-3.5">
              <div className="flex items-center gap-1.5 text-[13px] font-semibold"><Sparkles size={14} strokeWidth={2} className="text-accent" /> Seed your agenda now</div>
              <p className="mt-0.5 text-[12.5px] text-mute">
                Add 3 questions — Conversation Intelligence will track them live
                during the call.
              </p>
            </div>
            <div className="glass-soft rounded-2xl px-4 py-3.5">
              <div className="flex items-center gap-1.5 text-[13px] font-semibold"><RotateCcw size={14} strokeWidth={2} className="text-ok" /> Fair refunds</div>
              <p className="mt-0.5 text-[12.5px] text-mute">
                Full refund until 24h before. If {l.short} misses, instant refund + credit.
              </p>
            </div>
          </div>

          <div className="mt-7 flex justify-center gap-3">
            <Link href="/app"><Button variant="ghost">Back home</Button></Link>
            <Link href="/session/s-2041"><Button>Preview the Session Room</Button></Link>
          </div>
        </GlassCard>
      </Shell>
    );
  }

  return (
    <Shell>
      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <Link href={`/profile/${l.handle}`} aria-label="Back to profile" className="text-faint hover:text-ink"><ArrowLeft size={18} strokeWidth={2} /></Link>
        <Avatar name={l.name} size={44} ring />
        <div>
          <div className="flex items-center gap-1.5 text-[15px] font-semibold">
            Book {l.short} <Verified size={13} />
          </div>
          <div className="text-[12px] text-faint">★ {l.rating.toFixed(1)} · responds {l.responseTime} · all times IST</div>
        </div>
      </div>

      {/* Step 1 — format */}
      <SectionLabel className="mb-2.5">1 · Choose a format</SectionLabel>
      <div className="grid gap-2">
        {l.formats.map((f) => (
          <button
            key={f.id}
            onClick={() => { setFormat(f); setDayIdx(null); setSlot(null); }}
            className={cn(
              "glass-soft flex items-center justify-between rounded-2xl px-5 py-4 text-left transition-all",
              format?.id === f.id && "border-accent/60 ring-1 ring-accent/40"
            )}
          >
            <div>
              <div className="text-[14px] font-semibold">
                {f.label} {f.mins > 0 && <span className="text-faint">· {f.mins} min</span>}
              </div>
              <div className="mt-0.5 text-[12.5px] text-mute">{f.desc}</div>
            </div>
            <div className="text-[14px] font-semibold vgrad-text">{inr(f.price)}</div>
          </button>
        ))}
      </div>

      {/* Step 2 — rolling window calendar */}
      {format && (
        <div className="anim-fade-up mt-7">
          <div className="flex items-baseline justify-between">
            <SectionLabel className="mb-2.5">2 · Pick a day</SectionLabel>
            <span className="text-[11.5px] text-faint">Rolling 60-day window</span>
          </div>
          <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-2">
            {days.map((d) => {
              const locked = !d.inWindow;
              const empty = d.inWindow && !d.full && d.slots.length === 0;
              return (
                <button
                  key={d.idx}
                  disabled={locked || d.full || empty}
                  onClick={() => { setDayIdx(d.idx); setSlot(null); }}
                  className={cn(
                    "flex min-w-[64px] flex-col items-center rounded-2xl border px-2 py-3 transition-all",
                    dayIdx === d.idx
                      ? "border-transparent vgrad text-white"
                      : locked
                      ? "border-line text-faint/60"
                      : d.full || empty
                      ? "border-line text-faint opacity-60"
                      : "border-line text-mute hover:border-line-2 hover:text-ink"
                  )}
                >
                  <span className="text-[10.5px] uppercase">{d.weekday}</span>
                  <span className="mt-1 text-[13.5px] font-semibold">{d.label}</span>
                  <span className="mt-1 text-[9.5px]">
                    {locked ? <Lock size={10} strokeWidth={2.2} /> : d.full ? "Full" : empty ? "—" : `${d.slots.length} slots`}
                  </span>
                </button>
              );
            })}
          </div>

          {/* IRCTC-style window explainer */}
          <div className="glass-soft mt-2 flex items-center justify-between rounded-2xl px-4 py-3">
            <p className="text-[12px] leading-relaxed text-mute">
              <span className="font-semibold text-ink">Why only 60 days?</span> {l.short}&apos;s
              calendar opens in a rolling window — like train bookings, the next day
              unlocks every midnight. No year-long queues, no scalped calendars.
            </p>
            <Button
              variant={notified ? "glass" : "ghost"}
              className="ml-3 shrink-0 !px-3.5 !py-2 text-[12px]"
              onClick={() => setNotified(true)}
            >
              {notified ? <><Check size={13} strokeWidth={2.4} /> You&apos;ll be notified</> : <><BellRing size={13} strokeWidth={2} /> Notify me when day 61 opens</>}
            </Button>
          </div>
        </div>
      )}

      {/* Step 3 — slot */}
      {format && day && (
        <div className="anim-fade-up mt-7">
          <SectionLabel className="mb-2.5">3 · Pick a time — {day.weekday}, {day.label}</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {day.slots.map((s) => (
              <button
                key={s}
                onClick={() => setSlot(s)}
                className={cn(
                  "rounded-full border px-4.5 py-2.5 px-4 text-[13.5px] font-semibold transition-all",
                  slot === s
                    ? "border-transparent vgrad text-white"
                    : "border-line text-mute hover:border-line-2 hover:text-ink"
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 4 — review & pay */}
      {format && day && slot && (
        <GlassCard className="anim-fade-up mt-7 p-5">
          <SectionLabel className="mb-3">4 · Review & pay</SectionLabel>
          <div className="space-y-1.5 text-[13.5px]">
            <div className="flex justify-between"><span className="text-mute">{format.label} with {l.name}</span><span className="font-semibold">{inr(format.price)}</span></div>
            <div className="flex justify-between text-[12.5px] text-faint"><span>{day.weekday}, {day.label} · {slot} IST</span><span>incl. GST</span></div>
          </div>
          <div className="my-4 border-t border-dashed border-line" />
          <div className="flex items-center justify-between">
            <div className="text-[12px] text-faint">Full refund until 24h before</div>
            <Button onClick={() => setPay(true)}>Pay {inr(format.price)} <ArrowRight size={15} strokeWidth={2} /></Button>
          </div>
        </GlassCard>
      )}

      <RazorpaySheet
        open={pay}
        amount={format?.price ?? 0}
        label={`${format?.label ?? ""} · ${l.name}`}
        onClose={() => setPay(false)}
        onPaid={() => { setPay(false); setDone(true); }}
      />
    </Shell>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Avatar } from "@/components/Avatar";
import {
  ArrowLeft,
  BarChart3,
  Check,
  Hand,
  MessageCircleQuestion,
  MicOff,
  Pin,
  Plus,
  Scissors,
  Settings2,
  ThumbsUp,
  UserPlus,
  X,
} from "lucide-react";
import { RazorpaySheet } from "@/components/RazorpaySheet";
import { Button, Verified } from "@/components/ui";
import { byHandle, ROUNDTABLES, SAMPLE_POLL, SAMPLE_QUESTIONS } from "@/lib/data";
import { useRole } from "@/lib/role";
import { cn, hash, inr } from "@/lib/utils";

const NAMES = ["Aarav", "Zoya", "Kabir", "Ishita", "Ravi", "Sana", "Nikhil", "Tara", "Vihaan", "Anika", "Om", "Leah", "Yusuf", "Diya", "Arnav", "Mira"];

export function RoundtableView({ id }: { id: string }) {
  const rt = ROUNDTABLES.find((r) => r.id === id) ?? ROUNDTABLES[0];
  const host = byHandle(rt.host)!;
  const cohosts = rt.cohosts.map((c) => byHandle(c)!);
  const needsTicket = rt.price > 0;

  const [ticketed, setTicketed] = useState(!needsTicket);
  const [paySheet, setPaySheet] = useState(false);
  const [hand, setHand] = useState(false);
  const [reacted, setReacted] = useState(0);
  const { role } = useRole();
  const isHost = role === "luminary";
  const [poll, setPoll] = useState(SAMPLE_POLL);
  const [voted, setVoted] = useState<string | null>(null);
  const [showPoll, setShowPoll] = useState(true);
  const [sheet, setSheet] = useState<null | "qa" | "host" | "newpoll">(null);
  const [questions, setQuestions] = useState(SAMPLE_QUESTIONS);
  const [upvoted, setUpvoted] = useState<string[]>([]);
  const [askDraft, setAskDraft] = useState("");
  const [newQ, setNewQ] = useState("");
  const [newOpts, setNewOpts] = useState(["", ""]);

  const totalVotes = poll.options.reduce((a, o) => a + o.votes, 0);
  const vote = (id: string) => {
    if (voted) return;
    setVoted(id);
    setPoll((p) => ({
      ...p,
      options: p.options.map((o) => (o.id === id ? { ...o, votes: o.votes + 1 } : o)),
    }));
  };
  const listeners = rt.live ? rt.listeners : 46;

  /* ---------- Ticket gate ---------- */
  if (!ticketed) {
    return (
      <div className="hero-glow flex min-h-dvh flex-col items-center justify-center px-5">
        <div className="glass anim-fade-up w-full max-w-md rounded-3xl p-7 text-center">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-faint">
            Ticketed Roundtable
          </div>
          <h1 className="mt-3 text-xl font-semibold leading-snug">{rt.title}</h1>
          <p className="mt-2 text-[13px] text-mute">{rt.desc}</p>
          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="flex -space-x-2">
              <Avatar name={host.name} size={34} ring />
              {cohosts.map((c) => (
                <Avatar key={c.handle} name={c.name} size={34} ring />
              ))}
            </div>
            <div className="text-left text-[12px] text-mute">
              {host.name} {cohosts.length > 0 && `+ ${cohosts.map((c) => c.short).join(", ")}`}
              <div className="flex items-center gap-1 text-[11px] text-faint">
                <Verified size={10} /> verified hosts · {rt.startsLabel}
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-2xl bg-wash px-4 py-3 text-[12.5px] text-mute">
            Ticket includes the live table, recording, and full transcript.
          </div>
          <Button className="mt-5 w-full" onClick={() => setPaySheet(true)}>
            Get ticket · {inr(rt.price)}
          </Button>
          <Link href="/roundtables" className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] text-faint hover:text-mute">
            <ArrowLeft size={13} strokeWidth={2} /> All Roundtables
          </Link>
        </div>
        <RazorpaySheet
          open={paySheet}
          amount={rt.price}
          label={`Roundtable · ${rt.title}`}
          onClose={() => setPaySheet(false)}
          onPaid={() => { setPaySheet(false); setTicketed(true); }}
        />
      </div>
    );
  }

  /* ---------- Live room ---------- */
  return (
    <div className="stage-dark flex min-h-dvh flex-col bg-gradient-to-b from-[#0b0b0c] via-[#10131f] to-[#0b0b0c]">
      {/* Top bar */}
      <header className="flex items-center justify-between px-5 py-4">
        <Link href="/roundtables" className="inline-flex items-center gap-1.5 text-[13px] text-faint hover:text-ink"><ArrowLeft size={13} strokeWidth={2} /> Leave quietly</Link>
        <div className="flex items-center gap-2 text-[12px] font-semibold">
          {rt.live ? (
            <><span className="anim-pulse-soft h-2 w-2 rounded-full bg-danger" /> LIVE</>
          ) : (
            <span className="text-mute">Doors open · starts {rt.startsLabel}</span>
          )}
          <span className="text-faint">· {listeners + (hand ? 1 : 0)} in the room</span>
        </div>
        <span className="w-20 text-right text-[11px] text-faint">REC ●</span>
      </header>

      <h1 className="px-5 text-center text-[17px] font-semibold leading-snug md:text-xl">{rt.title}</h1>

      {/* Head table */}
      <section className="mt-6 px-5">
        <div className="mx-auto max-w-lg">
          <div className="text-center text-[10.5px] font-semibold uppercase tracking-[0.18em] text-faint">
            At the head table
          </div>
          <div className="mt-4 flex items-end justify-center gap-6 md:gap-10">
            {[host, ...cohosts].map((p, i) => (
              <div key={p.handle} className="flex flex-col items-center">
                <div className={cn("rounded-full", i === 0 && "anim-speak")}>
                  <Avatar name={p.name} size={i === 0 ? 84 : 66} ring />
                </div>
                <div className="mt-2 flex items-center gap-1 text-[12.5px] font-semibold">
                  {p.short} <Verified size={11} />
                </div>
                <div className="text-[10.5px] text-faint">{i === 0 ? "Host · speaking" : "Co-host"}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Listeners */}
      <section className="mt-8 flex-1 overflow-y-auto px-5 pb-32">
        <div className="mx-auto max-w-lg">
          <div className="text-center text-[10.5px] font-semibold uppercase tracking-[0.18em] text-faint">
            Listening · {listeners + (hand ? 1 : 0)}
          </div>
          <div className="mt-4 grid grid-cols-8 gap-x-2 gap-y-3 md:grid-cols-10">
            {hand && (
              <div className="flex flex-col items-center">
                <div className="relative">
                  <Avatar name="Arjun Mehta" size={34} />
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full vgrad text-white"><Hand size={9} strokeWidth={2.4} /></span>
                </div>
                <span className="mt-1 w-12 truncate text-center text-[9px] text-accent">You</span>
              </div>
            )}
            {Array.from({ length: Math.min(listeners, 96) }).map((_, i) => {
              const n = NAMES[hash("rt" + i) % NAMES.length];
              return (
                <div key={i} className="flex flex-col items-center">
                  <Avatar name={`${n} ${i}`} seed={`li${i}`} size={34} className="opacity-85" />
                  <span className="mt-1 w-12 truncate text-center text-[9px] text-faint">{n}</span>
                </div>
              );
            })}
          </div>
          {listeners > 96 && (
            <div className="mt-4 text-center text-[11.5px] text-faint">
              + {listeners - 96} more listening
            </div>
          )}
        </div>
      </section>


      {/* ── Live poll ── */}
      {showPoll && !poll.closed && (
        <div className="glass-strong anim-fade-up fixed inset-x-4 bottom-24 z-30 mx-auto max-w-md rounded-3xl p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider text-accent">
                <BarChart3 size={11} strokeWidth={2.4} /> Live poll
              </div>
              <div className="mt-1 text-[13.5px] font-semibold leading-snug">{poll.q}</div>
            </div>
            <button
              aria-label="Hide poll"
              onClick={() => setShowPoll(false)}
              className="shrink-0 text-faint hover:text-ink"
            >
              <X size={15} strokeWidth={2} />
            </button>
          </div>

          <div className="mt-3 space-y-1.5">
            {poll.options.map((o) => {
              const pct = totalVotes ? Math.round((o.votes / totalVotes) * 100) : 0;
              const mine = voted === o.id;
              return (
                <button
                  key={o.id}
                  onClick={() => vote(o.id)}
                  disabled={!!voted}
                  className={cn(
                    "relative w-full overflow-hidden rounded-xl border px-3.5 py-2.5 text-left transition-all",
                    mine ? "border-accent/60" : "border-line",
                    !voted && "hover:border-line-2"
                  )}
                >
                  {voted && (
                    <span
                      className={cn(
                        "absolute inset-y-0 left-0 transition-all duration-700",
                        mine ? "vgrad opacity-30" : "bg-wash-2"
                      )}
                      style={{ width: `${pct}%` }}
                    />
                  )}
                  <span className="relative flex items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5 text-[12.5px] font-medium">
                      {mine && <Check size={12} strokeWidth={2.6} className="text-accent" />}
                      {o.label}
                    </span>
                    {voted && (
                      <span className="text-[12px] font-semibold tabular-nums text-mute">{pct}%</span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="mt-2.5 flex items-center justify-between text-[10.5px] text-faint">
            <span>{voted ? `${totalVotes} votes` : "Tap to vote — results appear after"}</span>
            {isHost && (
              <button
                onClick={() => setPoll((p) => ({ ...p, closed: true }))}
                className="font-semibold text-mute hover:text-ink"
              >
                Close poll
              </button>
            )}
          </div>
        </div>
      )}

      {/* ── Q&A sheet ── */}
      {sheet === "qa" && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-[var(--scrim)] backdrop-blur-sm md:items-center">
          <div className="glass-strong anim-fade-up w-full max-w-md rounded-t-3xl p-5 md:rounded-3xl">
            <div className="flex items-center justify-between">
              <div className="text-[15px] font-semibold">Questions</div>
              <button aria-label="Close" onClick={() => setSheet(null)} className="text-faint hover:text-ink">
                <X size={16} strokeWidth={2} />
              </button>
            </div>
            <p className="mt-1 text-[12px] text-faint">
              Most-upvoted questions rise to the top — {host.short} answers from here.
            </p>

            <div className="mt-4 max-h-[46vh] space-y-2 overflow-y-auto">
              {[...questions].sort((a, b) => b.votes - a.votes).map((q) => (
                <div
                  key={q.id}
                  className={cn(
                    "rounded-2xl border p-3.5",
                    q.answered ? "border-ok/30 bg-ok/[0.06]" : "border-line bg-wash"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <button
                      onClick={() => {
                        if (upvoted.includes(q.id)) return;
                        setUpvoted((u) => [...u, q.id]);
                        setQuestions((p) =>
                          p.map((x) => (x.id === q.id ? { ...x, votes: x.votes + 1 } : x))
                        );
                      }}
                      className={cn(
                        "flex min-w-[42px] flex-col items-center rounded-xl px-2 py-1.5 transition-colors",
                        upvoted.includes(q.id) ? "vgrad text-white" : "bg-wash-2 text-mute"
                      )}
                    >
                      <ThumbsUp size={13} strokeWidth={2} />
                      <span className="text-[11px] font-bold tabular-nums">{q.votes}</span>
                    </button>
                    <div className="min-w-0 flex-1">
                      <p className="text-[13px] leading-relaxed">{q.text}</p>
                      <div className="mt-1 flex items-center gap-2 text-[11px] text-faint">
                        {q.by}
                        {q.answered && <span className="font-semibold text-ok">· answered</span>}
                      </div>
                    </div>
                    {isHost && !q.answered && (
                      <button
                        aria-label="Mark answered"
                        onClick={() =>
                          setQuestions((p) =>
                            p.map((x) => (x.id === q.id ? { ...x, answered: true } : x))
                          )
                        }
                        className="shrink-0 rounded-full bg-wash-2 p-1.5 text-mute hover:text-ok"
                      >
                        <Check size={13} strokeWidth={2.4} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2">
              <input
                value={askDraft}
                onChange={(e) => setAskDraft(e.target.value)}
                placeholder="Ask a question…"
                aria-label="Ask a question"
                className="min-w-0 flex-1 rounded-full border border-line bg-wash px-4 py-2.5 text-[13px] text-ink outline-none focus:border-accent/50"
              />
              <button
                onClick={() => {
                  if (!askDraft.trim()) return;
                  setQuestions((p) => [
                    ...p,
                    { id: `q${p.length + 1}`, by: "You", text: askDraft.trim(), votes: 1, answered: false },
                  ]);
                  setAskDraft("");
                }}
                className="rounded-full vgrad px-4 py-2.5 text-[13px] font-semibold text-white"
              >
                Ask
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Host tools ── */}
      {sheet === "host" && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-[var(--scrim)] backdrop-blur-sm md:items-center">
          <div className="glass-strong anim-fade-up w-full max-w-md rounded-t-3xl p-5 md:rounded-3xl">
            <div className="flex items-center justify-between">
              <div className="text-[15px] font-semibold">Host tools</div>
              <button aria-label="Close" onClick={() => setSheet(null)} className="text-faint hover:text-ink">
                <X size={16} strokeWidth={2} />
              </button>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              {[
                [BarChart3, "New poll", () => setSheet("newpoll")],
                [UserPlus, "Invite co-host", () => {}],
                [MicOff, "Mute all", () => {}],
                [Pin, "Pin a link", () => {}],
              ].map(([Icon, label, fn], i) => {
                const I = Icon as typeof Pin;
                return (
                  <button
                    key={i}
                    onClick={fn as () => void}
                    className="flex flex-col items-start gap-2 rounded-2xl border border-line bg-wash p-4 text-left transition-colors hover:border-line-2"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-wash-2 text-accent">
                      <I size={16} strokeWidth={1.9} />
                    </span>
                    <span className="text-[13px] font-semibold">{label as string}</span>
                  </button>
                );
              })}
            </div>
            <div className="mt-3 rounded-2xl bg-wash px-4 py-3 text-[11.5px] leading-relaxed text-faint">
              {questions.filter((q) => !q.answered).length} questions waiting ·{" "}
              {hand ? "1 hand raised" : "no hands raised"} · recording on
            </div>
            <button className="mt-3 w-full rounded-full bg-danger px-4 py-2.5 text-[13px] font-semibold text-white">
              End Roundtable for everyone
            </button>
          </div>
        </div>
      )}

      {/* ── New poll composer ── */}
      {sheet === "newpoll" && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-[var(--scrim)] backdrop-blur-sm md:items-center">
          <div className="glass-strong anim-fade-up w-full max-w-md rounded-t-3xl p-5 md:rounded-3xl">
            <div className="flex items-center justify-between">
              <div className="text-[15px] font-semibold">New poll</div>
              <button aria-label="Close" onClick={() => setSheet("host")} className="text-faint hover:text-ink">
                <X size={16} strokeWidth={2} />
              </button>
            </div>
            <input
              value={newQ}
              onChange={(e) => setNewQ(e.target.value)}
              placeholder="Your question…"
              aria-label="Poll question"
              className="mt-3.5 w-full rounded-xl border border-line bg-wash px-4 py-3 text-[13.5px] text-ink outline-none placeholder:text-faint focus:border-accent/50"
            />
            <div className="mt-2.5 space-y-2">
              {newOpts.map((o, i) => (
                <input
                  key={i}
                  value={o}
                  onChange={(e) =>
                    setNewOpts((p) => p.map((x, j) => (j === i ? e.target.value : x)))
                  }
                  placeholder={`Option ${i + 1}`}
                  aria-label={`Poll option ${i + 1}`}
                  className="w-full rounded-xl border border-line bg-wash px-4 py-2.5 text-[13px] text-ink outline-none placeholder:text-faint focus:border-accent/50"
                />
              ))}
            </div>
            {newOpts.length < 4 && (
              <button
                onClick={() => setNewOpts((p) => [...p, ""])}
                className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-dashed border-line-2 px-3.5 py-2 text-[12px] text-mute hover:text-ink"
              >
                <Plus size={13} strokeWidth={2.2} /> Add option
              </button>
            )}
            <button
              onClick={() => {
                const opts = newOpts.filter((o) => o.trim());
                if (!newQ.trim() || opts.length < 2) return;
                setPoll({
                  id: "p" + Date.now(),
                  q: newQ.trim(),
                  options: opts.map((label, i) => ({ id: String(i), label, votes: 0 })),
                  closed: false,
                });
                setVoted(null);
                setShowPoll(true);
                setSheet(null);
                setNewQ("");
                setNewOpts(["", ""]);
              }}
              className="mt-4 w-full rounded-full vgrad px-4 py-2.5 text-[13px] font-semibold text-white"
            >
              Launch poll to {listeners} listeners
            </button>
          </div>
        </div>
      )}

      {/* Bottom controls */}
      <div className="glass-strong fixed inset-x-4 bottom-4 z-30 mx-auto flex max-w-md items-center justify-between rounded-3xl px-4 py-3">
        <button
          onClick={() => setHand((v) => !v)}
          className={cn(
            "flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-semibold transition-all active:scale-95",
            hand ? "vgrad text-white" : "bg-wash-2 text-ink hover:bg-wash-2"
          )}
        >
          <Hand size={16} strokeWidth={1.9} /> {hand ? "Hand raised" : "Request to speak"}
        </button>
        <button
          onClick={() => setReacted((c) => c + 1)}
          className="relative flex h-11 w-11 items-center justify-center rounded-full bg-wash-2 text-[16px] transition-transform active:scale-90"
          aria-label="React"
        >
          <ThumbsUp size={17} strokeWidth={1.85} />
          {reacted > 0 && (
            <span className="absolute -right-1 -top-1 rounded-full vgrad px-1.5 text-[9.5px] font-bold text-white tabular-nums">
              {reacted}
            </span>
          )}
        </button>
        <button
          onClick={() => setSheet("qa")}
          className="relative flex h-11 w-11 items-center justify-center rounded-full bg-wash-2"
          aria-label="Questions"
        >
          <MessageCircleQuestion size={17} strokeWidth={1.85} />
          <span className="absolute -right-1 -top-1 rounded-full vgrad px-1.5 text-[9.5px] font-bold text-white tabular-nums">
            {questions.filter((q) => !q.answered).length}
          </span>
        </button>
        {isHost ? (
          <button
            onClick={() => setSheet("host")}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-wash-2"
            aria-label="Host tools"
          >
            <Settings2 size={17} strokeWidth={1.85} />
          </button>
        ) : (
          <button
            className="flex h-11 w-11 items-center justify-center rounded-full bg-wash-2"
            aria-label="Clip timestamp"
          >
            <Scissors size={16} strokeWidth={1.85} />
          </button>
        )}
        <Link
          href="/roundtables"
          className="rounded-full bg-danger/90 px-4 py-2.5 text-[13px] font-semibold text-white"
        >
          Leave
        </Link>
      </div>

      {hand && (
        <div className="glass-strong anim-fade-up fixed bottom-[19rem] left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-2 text-[12px] text-mute">
          {host.short} can see your hand — you&apos;ll float up to the table if approved.
        </div>
      )}
    </div>
  );
}

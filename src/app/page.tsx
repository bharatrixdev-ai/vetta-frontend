import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  CalendarClock,
  Check,
  Fingerprint,
  Lock,
  Mic,
  Radio,
  ShieldCheck,
  Sliders,
  Sparkles,
  Video,
} from "lucide-react";
import { Logo, VMark } from "@/components/Logo";
import { LandingNav } from "@/components/LandingNav";
import { Reveal } from "@/components/Reveal";
import { Avatar } from "@/components/Avatar";
import { Button, Verified } from "@/components/ui";
import { LUMINARIES, NOTES, ROUNDTABLES, byHandle } from "@/lib/data";
import { inr } from "@/lib/utils";

const WALL = [...LUMINARIES, ...LUMINARIES];

/* ───────── Mini product shots — the page shows the app instead of describing it ───────── */

function MiniSession({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#233a63] via-[#2c2f55] to-[#3b2f6b] ${className}`}>
      <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-xl bg-black/35 px-2 py-1.5 text-[10px] font-medium text-white backdrop-blur">
        <Verified size={10} /> Dr. Sarah Kim
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Avatar name="Dr. Sarah Kim" size={64} />
      </div>
      <div className="absolute bottom-3 right-3 h-[44px] w-[64px] rounded-xl bg-gradient-to-br from-[#1c2b47] to-[#2a2344] ring-1 ring-white/20" />
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/40 px-2 py-1.5 backdrop-blur">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/12 text-white">
          <Mic size={11} strokeWidth={2} />
        </span>
        <span className="flex h-6 items-center gap-1 rounded-full vgrad px-2 text-[9.5px] font-semibold text-white">
          <Sparkles size={10} strokeWidth={2.2} /> Intel
        </span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-danger text-white">
          <Video size={11} strokeWidth={2} />
        </span>
      </div>
    </div>
  );
}

function MiniTable({ className = "" }: { className?: string }) {
  return (
    <div className={`glass-soft rounded-2xl p-3.5 ${className}`}>
      <div className="flex items-center gap-1.5 text-[9.5px] font-bold text-danger">
        <span className="anim-pulse-soft h-1.5 w-1.5 rounded-full bg-danger" /> LIVE · 214
      </div>
      <div className="mt-1.5 text-[12px] font-semibold leading-snug">
        Raising in 2026 — what changed
      </div>
      <div className="mt-2.5 flex justify-center gap-2.5">
        <div className="anim-speak rounded-full">
          <Avatar name="Ananya Iyer" size={34} ring />
        </div>
        <Avatar name="James Okafor" size={34} ring />
      </div>
      <div className="mt-2.5 grid grid-cols-8 gap-1">
        {Array.from({ length: 16 }).map((_, i) => (
          <Avatar key={i} name={`M${i}`} seed={`mini${i}`} size={15} className="opacity-70" />
        ))}
      </div>
    </div>
  );
}

function MiniNote({ className = "" }: { className?: string }) {
  const a = byHandle("rohan-verma")!;
  return (
    <div className={`glass-soft rounded-2xl p-3.5 ${className}`}>
      <div className="flex items-center gap-2">
        <Avatar name={a.name} size={26} />
        <span className="flex items-center gap-1 text-[11px] font-semibold">
          {a.short} <Verified size={10} />
        </span>
      </div>
      <p className="mt-2 text-[11px] leading-relaxed text-ink/90">
        Your first 10 engineers set the ceiling for your next 100.
      </p>
      <span className="mt-2.5 inline-block rounded-full vgrad px-2.5 py-1 text-[9.5px] font-bold text-white">
        Noted. 342
      </span>
    </div>
  );
}

/* Floating collage under the hero — the whole product in one glance. */
function HeroShot() {
  return (
    <Reveal className="relative mx-auto mt-14 max-w-3xl px-5 md:mt-16">
      <div aria-hidden className="pointer-events-none absolute inset-x-10 top-6 -z-10 h-56 rounded-full bg-[radial-gradient(closest-side,var(--glow-1),transparent)] blur-2xl" />
      <div className="grid grid-cols-[1fr_1.5fr_1fr] items-center gap-3 md:gap-4">
        <MiniTable className="lift -rotate-2" />
        <MiniSession className="lift aspect-[4/3] shadow-2xl" />
        <MiniNote className="lift rotate-2" />
      </div>
      <div className="mt-5 flex items-center justify-center gap-x-6 gap-y-1 text-[11.5px] font-medium text-faint">
        <span>Roundtables</span>
        <span className="text-ink">Sessions</span>
        <span>Notes</span>
      </div>
    </Reveal>
  );
}

export default function Landing() {
  return (
    <div className="min-h-dvh overflow-x-clip bg-bg">
      <LandingNav />

      {/* ───────────────── Hero ───────────────── */}
      <section className="relative px-5 pb-20 pt-32 md:pb-28 md:pt-44">
        {/* aurora */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="orb orb-a left-1/2 top-[-14rem] h-[30rem] w-[30rem] -translate-x-1/2" />
          <div className="orb orb-b right-[-8rem] top-[-6rem] h-[24rem] w-[24rem]" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="anim-fade-up mx-auto inline-flex items-center gap-2 rounded-full border border-line bg-wash px-3.5 py-1.5 text-[12.5px] font-medium text-mute backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-ok anim-pulse-soft" />
            Membership is earned, not bought
          </div>

          <h1 className="anim-fade-up delay-1 mt-7 text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.03em] md:text-[4.25rem]">
            Meet the people
            <br />
            <span className="vgrad-text anim-shimmer">worth meeting.</span>
          </h1>

          <p className="anim-fade-up delay-2 mx-auto mt-6 max-w-[34rem] text-[16px] leading-relaxed text-mute md:text-[17.5px]">
            Every profile is a verified track record.
            Book the hour. Join the room. Read the signal.
          </p>

          {/* claim handle */}
          <form className="anim-fade-up delay-3 mx-auto mt-9 flex max-w-md items-center gap-2 rounded-full border border-line bg-surface/70 p-1.5 pl-5 backdrop-blur-xl">
            <span className="select-none text-[14px] text-faint">vetta.network/</span>
            <input
              aria-label="Choose your handle"
              placeholder="yourname"
              className="min-w-0 flex-1 bg-transparent text-[14px] text-ink outline-none placeholder:text-faint"
            />
            <Link href="/login">
              <Button className="!px-4 !py-2 whitespace-nowrap !text-[13px]">Claim it</Button>
            </Link>
          </form>

          <div className="anim-fade-up delay-4 mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[12.5px] text-faint">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={14} strokeWidth={1.8} /> Human-verified profiles
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sliders size={14} strokeWidth={1.8} /> A feed you control
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock size={14} strokeWidth={1.8} /> Free to join
            </span>
          </div>
        </div>
      </section>

      <HeroShot />

      <div className="h-16 md:h-20" />

      {/* ───────────────── Luminary wall ───────────────── */}
      <section className="relative border-y border-line py-7">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent"
        />
        <div className="overflow-hidden">
          <div className="anim-marquee flex w-max gap-3 px-3">
            {WALL.map((l, i) => (
              <div
                key={l.handle + i}
                className="glass-soft flex items-center gap-3 rounded-2xl px-4 py-3"
              >
                <Avatar name={l.name} size={34} />
                <div>
                  <div className="flex items-center gap-1.5 whitespace-nowrap text-[13px] font-semibold">
                    {l.name} <Verified size={12} />
                  </div>
                  <div className="whitespace-nowrap text-[11px] text-faint">{l.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-5 text-center text-[12.5px] text-faint">
          Your card belongs on this wall —{" "}
          <span className="text-mute">earned, not claimed.</span>
        </p>
      </section>

      {/* ───────────────── Three primitives — shown, not told ───────────────── */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-[2rem] font-semibold tracking-[-0.02em] md:text-[2.75rem]">
            Three ways in.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              tag: "Sessions",
              line: "Book the hour.",
              href: "#sessions",
              shot: <MiniSession className="aspect-[16/10]" />,
            },
            {
              tag: "Roundtables",
              line: "Pull up a chair.",
              href: "#roundtables",
              shot: <MiniTable />,
            },
            {
              tag: "Notes",
              line: "Read the signal.",
              href: "#notes",
              shot: <MiniNote />,
            },
          ].map((c, i) => (
            <Reveal key={c.tag} delay={i * 90}>
              <a href={c.href} className="glass lift group flex h-full flex-col gap-4 rounded-3xl p-4">
                {c.shot}
                <div className="flex items-center justify-between px-1.5 pb-1">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                      {c.tag}
                    </div>
                    <div className="mt-0.5 text-[16px] font-semibold tracking-[-0.01em]">{c.line}</div>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-wash text-mute transition-all duration-200 group-hover:vgrad group-hover:text-white">
                    <ArrowRight size={15} strokeWidth={2} />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────────── Sessions ───────────────── */}
      <section id="sessions" className="scroll-mt-24 border-t border-line py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <Reveal>
            <div className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-accent">
              Sessions
            </div>
            <h2 className="mt-3 text-[2rem] font-semibold leading-[1.1] tracking-[-0.02em] md:text-[2.75rem]">
              The call you wish
              <br />
              you&apos;d had earlier.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-mute">
              Book time with someone whose record you can verify. Chat unlocks 48
              hours before, so the conversation starts before the call does.
            </p>
            <ul className="mt-7 space-y-3.5">
              {[
                [CalendarClock, "Rolling 60-day window", "Like train bookings — a new day opens each midnight. No year-long queues."],
                [Sparkles, "Conversation Intelligence", "Live notes, follow-up prompts, action items. Both sides can see it's on."],
                [ShieldCheck, "Fair by default", "Full refund until 24h before. If they no-show, instant refund plus credit."],
              ].map(([Icon, t, d], i) => {
                const I = Icon as typeof Sparkles;
                return (
                  <li key={t as string} className="flex gap-3.5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-line bg-wash text-accent">
                      <I size={16} strokeWidth={1.9} />
                    </span>
                    <div>
                      <div className="text-[14px] font-semibold">{t as string}</div>
                      <div className="mt-0.5 text-[13px] leading-relaxed text-mute">{d as string}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* Session mock */}
          <Reveal delay={120}>
            <div className="glass rounded-[28px] p-4">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#233a63] via-[#2c2f55] to-[#3b2f6b] pb-[68%]">
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-2xl bg-black/35 px-3 py-2 text-[12px] font-medium text-white backdrop-blur">
                  <Verified size={13} /> Dr. Sarah Kim
                  <span className="text-white/60">★ 4.9</span>
                </div>
                <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-black/35 px-2.5 py-1.5 text-[11px] font-medium text-white backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-ok" /> Excellent
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Avatar name="Dr. Sarah Kim" size={92} />
                </div>
                <div className="absolute bottom-4 right-4 h-[70px] w-[104px] rounded-2xl bg-gradient-to-br from-[#1c2b47] to-[#2a2344] ring-1 ring-white/20" />
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/40 px-2.5 py-2 backdrop-blur">
                  {[Mic, Video].map((I, i) => (
                    <span
                      key={i}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/12 text-white"
                    >
                      <I size={16} strokeWidth={1.9} />
                    </span>
                  ))}
                  <span className="flex h-9 items-center gap-1.5 rounded-full vgrad px-3 text-[12px] font-semibold text-white">
                    <Sparkles size={14} strokeWidth={2} /> Intelligence
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between px-2 pb-1 pt-4">
                <span className="text-[13px] text-mute">Deep Dive · 50 min</span>
                <span className="text-[13px] font-semibold tabular-nums vgrad-text">
                  22 min · 28 left
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────── Roundtables ───────────────── */}
      <section id="roundtables" className="scroll-mt-24 border-t border-line py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <Reveal className="order-2 md:order-1">
            <div className="glass rounded-[28px] p-6">
              <div className="flex items-center gap-2 text-[11.5px] font-bold text-danger">
                <span className="anim-pulse-soft h-2 w-2 rounded-full bg-danger" />
                LIVE · {ROUNDTABLES[0].listeners} listening
              </div>
              <div className="mt-2.5 text-[18px] font-semibold leading-snug">
                {ROUNDTABLES[0].title}
              </div>
              <div className="mt-5 flex items-center gap-4">
                {["Ananya Iyer", "James Okafor"].map((n, i) => (
                  <div key={n} className="flex flex-col items-center">
                    <div className={i === 0 ? "anim-speak rounded-full" : ""}>
                      <Avatar name={n} size={i === 0 ? 58 : 48} ring />
                    </div>
                    <div className="mt-1.5 text-[11.5px] font-medium">{n.split(" ")[0]}</div>
                    <div className="text-[10px] text-faint">{i === 0 ? "Host" : "Co-host"}</div>
                  </div>
                ))}
                <div className="ml-auto text-right text-[11.5px] text-faint">
                  head table
                  <div className="mt-0.5 flex items-center justify-end gap-1 text-mute">
                    <Mic size={12} strokeWidth={2} /> speaking
                  </div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-10 gap-1.5">
                {Array.from({ length: 30 }).map((_, i) => (
                  <Avatar key={i} name={`L ${i}`} seed={`wall${i}`} size={24} className="opacity-70" />
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
                <span className="text-[12px] text-faint">+184 more listening</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-wash-2 px-3 py-1.5 text-[12px] font-medium">
                  <Radio size={13} strokeWidth={2} /> Request to speak
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 md:order-2">
            <div className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-violet">
              Roundtables
            </div>
            <h2 className="mt-3 text-[2rem] font-semibold leading-[1.1] tracking-[-0.02em] md:text-[2.75rem]">
              Rooms with
              <br />
              a head table.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-mute">
              Not a stage, not a broadcast. Hosts and co-hosts sit at the head table;
              everyone else listens until they raise a hand. Free or ticketed —
              ticket-holders keep the recording and transcript.
            </p>
            <Link href="/discover" className="mt-7 inline-block">
              <Button variant="ghost" className="!px-5">
                Browse Roundtables <ArrowRight size={15} strokeWidth={2} />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ───────────────── Notes ───────────────── */}
      <section id="notes" className="scroll-mt-24 border-t border-line py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="mx-auto max-w-xl text-center">
            <div className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-ok">
              Notes
            </div>
            <h2 className="mt-3 text-[2rem] font-semibold tracking-[-0.02em] md:text-[2.75rem]">
              A feed that respects you.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-mute">
              No engagement bait, no strangers shouting. Short thoughts from verified
              practitioners — and the only reaction is{" "}
              <span className="font-semibold text-ink">Noted.</span>
            </p>
          </Reveal>

          <div className="mt-12 grid gap-3 md:grid-cols-3">
            {NOTES.slice(0, 3).map((n, i) => {
              const a = byHandle(n.author)!;
              return (
                <Reveal key={n.id} delay={i * 90}>
                  <div className="glass-soft lift h-full rounded-3xl p-5">
                    <div className="flex items-center gap-2.5">
                      <Avatar name={a.name} size={38} />
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 text-[13.5px] font-semibold">
                          <span className="truncate">{a.name}</span> <Verified size={12} />
                        </div>
                        <div className="truncate text-[11.5px] text-faint">{a.title}</div>
                      </div>
                    </div>
                    <p className="mt-3.5 text-[14px] leading-relaxed text-ink/90">{n.text}</p>
                    <div className="mt-4 flex items-center gap-2 border-t border-line pt-3.5">
                      <span className="rounded-full border border-line px-3 py-1.5 text-[12px] font-semibold text-mute">
                        Noted. {n.noted}
                      </span>
                      <span className="text-[12px] text-faint">{n.replies} replies</span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>


      {/* ───────────────── Two doors ───────────────── */}
      <section id="who" className="scroll-mt-24 border-t border-line py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="mx-auto max-w-xl text-center">
            <div className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-accent">
              Two doors, one room
            </div>
            <h2 className="mt-3 text-[2rem] font-semibold tracking-[-0.02em] md:text-[2.75rem]">
              Whoever you are today.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-mute">
              The intern and the CTO, for opposite reasons.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <Reveal>
              <div className="glass h-full rounded-3xl p-7">
                <div className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-ok">
                  If you&apos;re building your way up
                </div>
                <h3 className="mt-3 text-[26px] font-semibold leading-[1.15] tracking-[-0.015em]">
                  Skip the cold DM.<br />Buy the hour.
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {[
                    "Free to join — pay per Session",
                    "Free Roundtables every week",
                    "Every credential human-verified",
                    "Full refund until 24h before",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-[13.5px] text-mute">
                      <Check size={15} strokeWidth={2.2} className="mt-0.5 shrink-0 text-ok" />
                      {t}
                    </li>
                  ))}
                </ul>
                <Link href="/login" className="mt-6 inline-block">
                  <Button className="!px-5">
                    Start free <ArrowRight size={15} strokeWidth={2} />
                  </Button>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={110}>
              <div className="glass h-full rounded-3xl p-7 ring-1 ring-accent/25">
                <div className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-violet">
                  If people already ask for your time
                </div>
                <h3 className="mt-3 text-[26px] font-semibold leading-[1.15] tracking-[-0.015em]">
                  Get paid for<br />what you know.
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {[
                    "Your prices, your hours — 90% payout",
                    "Free or ticketed Roundtables",
                    "A 60-day window guards your calendar",
                    "A private Luminary-only floor",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-[13.5px] text-mute">
                      <Check size={15} strokeWidth={2.2} className="mt-0.5 shrink-0 text-violet" />
                      {t}
                    </li>
                  ))}
                </ul>
                <Link href="/apply" className="mt-6 inline-block">
                  <Button variant="ghost" className="!px-5">
                    Apply as a Luminary <ArrowRight size={15} strokeWidth={2} />
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────────── Vetting ───────────────── */}
      <section id="vetting" className="scroll-mt-24 border-t border-line py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="mx-auto max-w-xl text-center">
            <div className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-warn">
              How vetting works
            </div>
            <h2 className="mt-3 text-[2rem] font-semibold tracking-[-0.02em] md:text-[2.75rem]">
              Proof over prose.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-mute">
              A human checks every artifact before the badge appears.
            </p>
          </Reveal>

          <div className="relative mt-12 grid gap-4 md:grid-cols-3">
            {[
              [BadgeCheck, "01 — Apply", "Tell us who you are and link your work. Ten honest minutes."],
              [ShieldCheck, "02 — Proof review", "We verify each artifact with its source. About five days."],
              [Verified, "03 — Verified", "Your Provenance goes public. The badge means one thing, everywhere."],
            ].map(([Icon, t, d], i) => {
              const I = Icon as typeof BadgeCheck;
              return (
                <Reveal key={t as string} delay={i * 90}>
                  <div className="glass-soft h-full rounded-3xl p-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-line bg-wash text-ok">
                      <I size={18} strokeWidth={1.9} />
                    </span>
                    <div className="mt-4 text-[13px] font-semibold vgrad-text">{t as string}</div>
                    <p className="mt-2 text-[14px] leading-relaxed text-mute">{d as string}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>


      {/* ───────────────── Real people, your algorithm ───────────────── */}
      <section id="real" className="scroll-mt-24 border-t border-line py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="mx-auto max-w-xl text-center">
            <div className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-violet">
              Real people, real feed
            </div>
            <h2 className="mt-3 text-[2rem] font-semibold tracking-[-0.02em] md:text-[2.75rem]">
              Genuine, or it&apos;s gone.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-mute">
              Build with AI. Show up as yourself.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              [
                Fingerprint,
                "Real humans only",
                "One verified identity per Luminary — no personas, no deepfakes.",
                "ok",
              ],
              [
                BrainCircuit,
                "AI as a tool, not a mask",
                "Code, research and draft with AI. Presenting it as you is the line.",
                "accent",
              ],
              [
                Sliders,
                "An algorithm you set",
                "Your fields shape your feed. No watch-time tricks, no ads.",
                "violet",
              ],
            ].map(([Icon, t, d, tone], i) => {
              const I = Icon as typeof Fingerprint;
              const toneClass =
                tone === "ok" ? "text-ok" : tone === "accent" ? "text-accent" : "text-violet";
              return (
                <Reveal key={t as string} delay={i * 90}>
                  <div className="glass-soft h-full rounded-3xl p-6">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-2xl border border-line bg-wash ${toneClass}`}>
                      <I size={18} strokeWidth={1.9} />
                    </span>
                    <h3 className="mt-4 text-[16px] font-semibold">{t as string}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-mute">{d as string}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* the messaging rule */}
          <Reveal delay={120}>
            <div className="glass mt-4 flex flex-col items-start gap-4 rounded-3xl p-6 md:flex-row md:items-center">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl vgrad text-white">
                <Lock size={19} strokeWidth={1.9} />
              </span>
              <div className="flex-1">
                <h3 className="text-[16px] font-semibold">Nobody can slide into a Luminary&apos;s DMs</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-mute">
                  Book a Session and chat opens 48h before — that&apos;s the only door in.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────── Pricing ───────────────── */}
      <section id="pricing" className="scroll-mt-24 border-t border-line py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal className="text-center">
            <h2 className="text-[2rem] font-semibold tracking-[-0.02em] md:text-[2.75rem]">
              Honest pricing.
            </h2>
            <p className="mt-3 text-[15px] text-mute">
              Nothing hidden, nothing subscription-trapped.
            </p>
          </Reveal>

          <div className="mt-11 grid gap-4 md:grid-cols-3">
            {[
              ["Members", "Free", "Feed, Roundtables, discovery and booking. Forever.", false],
              ["Sessions", `from ${inr(1500)}`, "Each Luminary sets their own price — you see it before you book.", true],
              ["Luminaries", "90% payout", "Vetta keeps a small platform fee. Payouts via Razorpay.", false],
            ].map(([t, p, d, hero], i) => (
              <Reveal key={t as string} delay={i * 80}>
                <div
                  className={
                    hero
                      ? "glass h-full rounded-3xl p-6 ring-1 ring-accent/40"
                      : "glass-soft h-full rounded-3xl p-6"
                  }
                >
                  <div className="text-[13.5px] font-semibold text-mute">{t as string}</div>
                  <div className="mt-2 text-[26px] font-semibold tracking-tight">{p as string}</div>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-mute">{d as string}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── CTA ───────────────── */}
      <section className="relative overflow-hidden border-t border-line px-5 py-24 text-center md:py-32">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="orb orb-a left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 opacity-40" />
        </div>
        <Reveal className="relative mx-auto max-w-2xl">
          <VMark className="mx-auto h-12 w-12" />
          <h2 className="mt-6 text-[2.1rem] font-semibold leading-[1.1] tracking-[-0.025em] md:text-[3.25rem]">
            The people you look up to
            <br />
            are <span className="vgrad-text">one Session away.</span>
          </h2>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href="/login">
              <Button className="!px-7 !py-3.5 !text-[15px]">
                Find your person <ArrowRight size={16} strokeWidth={2} />
              </Button>
            </Link>
            <Link href="/apply">
              <Button variant="ghost" className="!px-7 !py-3.5 !text-[15px]">
                Apply as a Luminary
              </Button>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ───────────────── Footer ───────────────── */}
      <footer className="border-t border-line px-5 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <Logo />
              <p className="mt-3 max-w-[16rem] text-[13px] leading-relaxed text-mute">
                The vetted network of accomplished people.
              </p>
              <p className="mt-4 text-[12.5px] vgrad-text font-semibold">
                Earned, not claimed.
              </p>
            </div>
            {[
              ["Product", ["Sessions", "Roundtables", "Notes", "Pricing"]],
              ["Company", ["About", "Careers", "Press", "Contact"]],
              ["Legal", ["Terms", "Privacy", "Refunds", "Trust & safety"]],
            ].map(([h, items]) => (
              <div key={h as string}>
                <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-faint">
                  {h as string}
                </div>
                <ul className="mt-3 space-y-2">
                  {(items as string[]).map((it) => (
                    <li key={it}>
                      <span className="text-[13.5px] text-mute transition-colors hover:text-ink">
                        {it}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 md:flex-row">
            <span className="text-[12.5px] text-faint">
              © 2026 Vetta · Meet the people worth meeting.
            </span>
            <span className="text-[12.5px] text-faint">Made in India 🇮🇳</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

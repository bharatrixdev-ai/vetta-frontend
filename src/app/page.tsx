"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
  ChevronRight,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Logo, VMark } from "@/components/Logo";
import { LandingNav } from "@/components/LandingNav";
import { Avatar } from "@/components/Avatar";
import { Button, Verified } from "@/components/ui";
import { LUMINARIES, NOTES, ROUNDTABLES, byHandle } from "@/lib/data";
import { inr } from "@/lib/utils";

// Curated high-res Unsplash images for editorial aesthetic
const HERO_IMAGE = "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop";
const EDITORIAL_CARD_1 = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop";
const EDITORIAL_CARD_2 = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop";
const EDITORIAL_CARD_3 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";

const WALL = [...LUMINARIES, ...LUMINARIES];

/* ───────── Mini product shots with Framer Motion ───────── */

function MiniSession({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#121626] via-[#1a1c36] to-[#251a3d] border border-white/10 ${className}`}>
      <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-xl bg-black/50 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-md">
        <Verified size={10} /> Aaditya Deshmukh (AIR 4)
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Avatar name="Aaditya Deshmukh" size={64} />
      </div>
      <div className="absolute bottom-3 right-3 h-[44px] w-[64px] rounded-xl bg-gradient-to-br from-[#1c2b47] to-[#2a2344] ring-1 ring-white/20" />
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-md">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-white">
          <Mic size={11} strokeWidth={2} />
        </span>
        <span className="flex h-6 items-center gap-1 rounded-full bg-gradient-to-r from-[#3E6FE8] to-[#6E5BF0] px-2 text-[9.5px] font-semibold text-white shadow-sm">
          <Sparkles size={10} strokeWidth={2.2} /> Intel
        </span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3E6FE8] text-white">
          <Video size={11} strokeWidth={2} />
        </span>
      </div>
    </div>
  );
}

function MiniTable({ className = "" }: { className?: string }) {
  return (
    <div className={`glass-soft rounded-2xl p-4 border border-white/10 ${className}`}>
      <div className="flex items-center gap-1.5 text-[9.5px] font-bold text-accent">
        <span className="anim-pulse-soft h-1.5 w-1.5 rounded-full bg-accent" /> LIVE · 312
      </div>
      <div className="mt-1.5 text-[12px] font-semibold leading-snug text-white">
        Cracking Competitive Exams & Leadership Strategy
      </div>
      <div className="mt-2.5 flex justify-center gap-2.5">
        <div className="anim-speak rounded-full">
          <Avatar name="Aaditya Deshmukh" size={34} ring />
        </div>
        <Avatar name="Prof. Priya Sharma" size={34} ring />
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
  const a = byHandle("aaditya-deshmukh") ?? byHandle("rohan-verma")!;
  return (
    <div className={`glass-soft rounded-2xl p-4 border border-white/10 ${className}`}>
      <div className="flex items-center gap-2">
        <Avatar name={a.name} size={26} />
        <span className="flex items-center gap-1 text-[11px] font-semibold text-white">
          {a.short} <Verified size={10} />
        </span>
      </div>
      <p className="mt-2 text-[11px] leading-relaxed text-white/80">
        Prelims testing is about elimination logic, not just rote memory.
      </p>
      <span className="mt-2.5 inline-block rounded-full bg-gradient-to-r from-[#3E6FE8] to-[#6E5BF0] px-2.5 py-1 text-[9.5px] font-bold text-white shadow-xs">
        Noted. 512
      </span>
    </div>
  );
}

function HeroShot() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mx-auto mt-14 max-w-4xl px-5 md:mt-16"
    >
      <div aria-hidden className="pointer-events-none absolute inset-x-10 top-6 -z-10 h-64 rounded-full bg-[radial-gradient(closest-side,rgba(62,111,232,0.3),transparent)] blur-3xl" />
      <div className="grid grid-cols-[1fr_1.5fr_1fr] items-center gap-3 md:gap-4">
        <MiniTable className="lift -rotate-2 shadow-2xl" />
        <MiniSession className="lift aspect-[4/3] shadow-[0_20px_50px_rgba(110,91,240,0.25)]" />
        <MiniNote className="lift rotate-2 shadow-2xl" />
      </div>
      <div className="mt-6 flex items-center justify-center gap-x-8 text-[12px] font-medium text-mute tracking-wide">
        <a href="#roundtables" className="transition-colors hover:text-white">Roundtables</a>
        <a href="#sessions" className="font-semibold text-white">Sessions</a>
        <a href="#notes" className="transition-colors hover:text-white">Notes</a>
      </div>
    </motion.div>
  );
}

export default function Landing() {
  return (
    <div className="min-h-dvh overflow-x-clip bg-[#0b0b0c] text-white selection:bg-[#3E6FE8]/30 font-sans">
      <LandingNav />

      {/* ───────────────── Hero Section ───────────────── */}
      <section className="relative px-5 pb-20 pt-32 md:pb-32 md:pt-44">
        {/* Ambient Glowing Orbs */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-[-10rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(62,111,232,0.28)_0%,rgba(110,91,240,0.12)_60%,transparent_80%)] blur-3xl" />
          <div className="absolute right-[-10rem] top-[-4rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(110,91,240,0.2)_0%,transparent_70%)] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.75rem] font-bold leading-[1.05] tracking-[-0.035em] md:text-[5rem]"
          >
            Meet the people
            <br />
            <span className="bg-gradient-to-r from-white via-blue-200 to-indigo-300 bg-clip-text text-transparent italic font-serif font-normal">
              worth meeting.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-[38rem] text-[16px] leading-relaxed text-white/75 md:text-[18.5px]"
          >
            Verified track records of top exam rankers, master tutors, tech leaders, and civic figures. Book 1:1 advisory calls, join head-table discussions, and learn from those who cracked what you aim for.
          </motion.p>

          {/* Claim Handle Bar */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-9 flex max-w-md items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] p-1.5 pl-5 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] ring-1 ring-white/10"
          >
            <span className="select-none text-[14px] font-mono text-white/40">vetta.network/</span>
            <input
              aria-label="Choose your handle"
              placeholder="yourname"
              className="min-w-0 flex-1 bg-transparent text-[14px] text-white outline-none placeholder:text-white/30"
            />
            <Link href="/login">
              <Button className="!px-5 !py-2.5 whitespace-nowrap !text-[13px] !bg-gradient-to-r !from-[#3E6FE8] !to-[#6E5BF0] hover:!from-[#3361d6] hover:!to-[#5d4be0] !text-white font-semibold shadow-lg shadow-indigo-900/40">
                Claim handle <ArrowRight size={14} className="ml-1" />
              </Button>
            </Link>
          </motion.form>

          {/* Micro badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12.5px] text-white/50"
          >
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-accent" /> Exam Cracked Rankers & Tutors
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sliders size={14} className="text-violet" /> Verified Leaders & Executives
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock size={14} className="text-accent" /> Direct 1:1 Mentorship Access
            </span>
          </motion.div>
        </div>
      </section>

      <HeroShot />

      {/* ───────────────── Hero Editorial Banner ───────────────── */}
      <section className="mx-auto max-w-6xl px-5 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-[#12172a] via-[#101426] to-[#0b0b0c] p-8 md:p-16 shadow-[0_30px_80px_rgba(62,111,232,0.18)]"
        >
          <div aria-hidden className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#6E5BF0]/15 to-transparent pointer-events-none" />
          <div className="relative z-10 grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-[11.5px] font-semibold text-accent uppercase tracking-widest">
                <Sparkles size={12} /> Exclusively Vetted
              </div>
              <h2 className="mt-6 text-[2.25rem] font-serif font-normal italic leading-[1.1] text-white md:text-[3.5rem]">
                Imagine a space between vision & impact.
              </h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-white/70">
                Connect directly with UPSC/GATE toppers, master tutors, engineering CTOs, and civic leaders who have mastered what you are striving for.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/discover">
                  <Button className="!bg-white !text-black hover:!bg-white/90 font-semibold !px-6 !py-3">
                    Explore Mentors & Leaders <ArrowRight size={15} />
                  </Button>
                </Link>
                <Link href="/apply">
                  <Button variant="ghost" className="!border-white/20 !text-white hover:!bg-white/10 !px-6 !py-3">
                    Apply as Luminary
                  </Button>
                </Link>
              </div>
            </div>

            {/* Curated Editorial Hero Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <img
                src={HERO_IMAGE}
                alt="Executive & Mentor Editorial Visual"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-black/60 p-3 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-2.5">
                  <Avatar name="Aaditya Deshmukh" size={32} />
                  <div>
                    <div className="text-[12.5px] font-semibold text-white">Aaditya Deshmukh</div>
                    <div className="text-[10.5px] text-white/60">UPSC CSE AIR 4 · IAS & Policy Fellow</div>
                  </div>
                </div>
                <span className="rounded-full bg-[#3E6FE8]/30 border border-[#3E6FE8]/40 px-2.5 py-1 text-[10.5px] font-semibold text-blue-200">
                  Top Mentor
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ───────────────── Value Proposition Cards Section (Vetta Logo Gradient) ───────────────── */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-accent">
            Value Proposition
          </div>
          <h2 className="mt-3 text-[2.25rem] font-bold tracking-tight md:text-[3.25rem]">
            Where are you <span className="font-serif italic font-normal text-indigo-300">in your journey?</span>
          </h2>
        </motion.div>

        {/* 3 Cards matching Logo Palette */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Card 1: White/Silver Zero to One */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative flex flex-col justify-between rounded-3xl bg-gradient-to-b from-white/95 to-slate-100 p-8 text-black shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,255,255,0.15)]"
          >
            <div>
              <div className="text-[12px] font-bold tracking-wider text-slate-500 uppercase">01</div>
              <h3 className="mt-6 text-[28px] font-semibold leading-tight tracking-tight">
                Going <br />Zero to One
              </h3>
              <p className="mt-4 text-[13.5px] leading-relaxed text-slate-600">
                If you are building a new business unit, product, or startup from scratch and need direct advisory from founders who did it.
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5">
              <span className="text-[12px] font-bold text-slate-900">Founders & Early Stage</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white transition-transform group-hover:translate-x-1">
                <ChevronRight size={16} />
              </span>
            </div>
          </motion.div>

          {/* Card 2: Logo Gradient (Electric Blue to Indigo Lilac) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative flex flex-col justify-between rounded-3xl bg-gradient-to-b from-[#3E6FE8] via-[#524be0] to-[#6E5BF0] p-8 text-white shadow-2xl shadow-indigo-900/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(110,91,240,0.4)] ring-1 ring-white/20"
          >
            <div>
              <div className="text-[12px] font-bold tracking-wider text-blue-100 uppercase">02</div>
              <h3 className="mt-6 text-[28px] font-semibold leading-tight tracking-tight">
                Scaling from <br />One to N
              </h3>
              <p className="mt-4 text-[13.5px] leading-relaxed text-blue-50">
                If you have achieved Product-Market Fit and need to scale your team, engineering architecture, and revenue to new heights.
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-white/20 pt-5">
              <span className="text-[12px] font-bold text-white">Growth & Scaleups</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-indigo-900 transition-transform group-hover:translate-x-1">
                <ChevronRight size={16} />
              </span>
            </div>
          </motion.div>

          {/* Card 3: Dark Luxury Need Quick Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative flex flex-col justify-between rounded-3xl bg-gradient-to-b from-[#171924] to-[#0e1018] p-8 text-white border border-white/10 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-white/25"
          >
            <div>
              <div className="text-[12px] font-bold tracking-wider text-white/40 uppercase">03</div>
              <h3 className="mt-6 text-[28px] font-semibold leading-tight tracking-tight">
                Need Quick <br />Solutions
              </h3>
              <p className="mt-4 text-[13.5px] leading-relaxed text-white/60">
                If you know exactly what hurdle you are facing and need a 50-minute targeted strategy session with a verified specialist.
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-[12px] font-bold text-white/90">1:1 Targeted Advisory</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-transform group-hover:translate-x-1">
                <ChevronRight size={16} />
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───────────────── Brand Wall & Logo Matrix ───────────────── */}
      <section className="relative border-y border-white/10 bg-white/[0.01] py-12 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-[#0b0b0c] to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-[#0b0b0c] to-transparent" />

        <div className="mx-auto max-w-6xl px-5 text-center mb-8">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.25em] text-white/40">
            Trusted by Leaders at Startups & Global Organizations
          </p>
        </div>

        {/* Marquee Wall */}
        <div className="overflow-hidden">
          <div className="anim-marquee flex w-max gap-4 px-4">
            {WALL.map((l, i) => (
              <div
                key={l.handle + i}
                className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-md transition-colors hover:border-white/20"
              >
                <Avatar name={l.name} size={36} />
                <div>
                  <div className="flex items-center gap-1.5 whitespace-nowrap text-[13.5px] font-semibold text-white">
                    {l.name} <Verified size={12} />
                  </div>
                  <div className="whitespace-nowrap text-[11px] text-white/50">{l.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── Three Primitives (Sessions, Roundtables, Notes) ───────────────── */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl text-center"
        >
          <h2 className="text-[2.25rem] font-bold tracking-tight md:text-[3rem]">
            Three ways in.
          </h2>
          <p className="mt-3 text-[15px] text-white/60">
            Direct access engineered for clarity, speed, and real outcome.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              tag: "Sessions",
              line: "Book the hour.",
              href: "#sessions",
              shot: <MiniSession className="aspect-[16/10]" />,
              desc: "1:1 video strategy calls with pre-session agendas.",
            },
            {
              tag: "Roundtables",
              line: "Pull up a chair.",
              href: "#roundtables",
              shot: <MiniTable />,
              desc: "Live audio rooms with a dedicated head table.",
            },
            {
              tag: "Notes",
              line: "Read the signal.",
              href: "#notes",
              shot: <MiniNote />,
              desc: "Concise practitioner insights with zero noise.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.tag}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <a
                href={c.href}
                className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-accent/40 hover:bg-white/[0.04]"
              >
                {c.shot}
                <div className="mt-6 flex items-center justify-between px-1">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
                      {c.tag}
                    </div>
                    <div className="mt-1 text-[17px] font-semibold text-white">{c.line}</div>
                    <div className="mt-1 text-[12px] text-white/50">{c.desc}</div>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-200 group-hover:bg-[#3E6FE8] group-hover:border-[#3E6FE8]">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────────────── Detailed Sessions Section ───────────────── */}
      <section id="sessions" className="scroll-mt-24 border-t border-white/10 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-accent">
              Sessions
            </div>
            <h2 className="mt-3 text-[2.25rem] font-bold leading-[1.1] tracking-tight md:text-[3rem]">
              The call you wish <br />
              <span className="font-serif italic font-normal text-indigo-300">you had earlier.</span>
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/70">
              Book time with someone whose track record is verified. Async chat unlocks 48 hours before the call, ensuring you start with full context.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                [CalendarClock, "Rolling 60-Day Calendar", "Guaranteed availability window so calendars stay protected and responsive."],
                [Sparkles, "Conversation Intelligence", "Automated live summaries, key takeaways, and action items generated for both sides."],
                [ShieldCheck, "Fair & Protected", "Full refunds up to 24 hours prior. Protected payment handling on every session."],
              ].map(([Icon, t, d]) => {
                const I = Icon as typeof Sparkles;
                return (
                  <li key={t as string} className="flex gap-4">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                      <I size={17} />
                    </span>
                    <div>
                      <div className="text-[14.5px] font-semibold text-white">{t as string}</div>
                      <div className="mt-0.5 text-[13px] leading-relaxed text-white/60">{d as string}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Session Visual Mock */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[32px] border border-white/10 bg-gradient-to-b from-[#141828] to-[#0e1017] p-5 shadow-2xl"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#18233a] via-[#1c1c38] to-[#2b1836] pb-[66%] border border-white/10">
              <img
                src={EDITORIAL_CARD_1}
                alt="Dr Sarah Kim"
                className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-overlay"
              />
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-2xl bg-black/60 px-3.5 py-2 text-[12px] font-medium text-white backdrop-blur-md border border-white/10">
                <Verified size={13} /> Dr. Sarah Kim
                <span className="text-white/60">★ 4.9</span>
              </div>
              <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 text-[11px] font-medium text-emerald-300 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Active Now
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Avatar name="Dr. Sarah Kim" size={96} />
              </div>
              <div className="absolute bottom-4 right-4 h-[72px] w-[108px] rounded-2xl bg-black/60 border border-white/20 overflow-hidden shadow-lg">
                <img src={EDITORIAL_CARD_2} alt="Participant" className="h-full w-full object-cover" />
              </div>
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/70 px-3 py-2 backdrop-blur-md border border-white/10">
                {[Mic, Video].map((I, i) => (
                  <span key={i} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white">
                    <I size={16} />
                  </span>
                ))}
                <span className="flex h-9 items-center gap-1.5 rounded-full bg-gradient-to-r from-[#3E6FE8] to-[#6E5BF0] px-3.5 text-[12px] font-semibold text-white shadow-md">
                  <Sparkles size={14} /> Intelligence
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between px-3 pt-5 pb-1">
              <span className="text-[13.5px] text-white/60">Deep Dive Strategy · 50 min</span>
              <span className="text-[13.5px] font-semibold text-accent">
                22 min remaining
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───────────────── Roundtables Section ───────────────── */}
      <section id="roundtables" className="scroll-mt-24 border-t border-white/10 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-[#141628] to-[#0e0b14] p-7 shadow-2xl">
              <div className="flex items-center gap-2 text-[11.5px] font-bold text-accent">
                <span className="anim-pulse-soft h-2 w-2 rounded-full bg-accent" />
                LIVE NOW · {ROUNDTABLES[0].listeners} listening
              </div>
              <div className="mt-3 text-[19px] font-semibold leading-snug text-white">
                {ROUNDTABLES[0].title}
              </div>
              <div className="mt-6 flex items-center gap-4">
                {["Ananya Iyer", "James Okafor"].map((n, i) => (
                  <div key={n} className="flex flex-col items-center">
                    <div className={i === 0 ? "anim-speak rounded-full" : ""}>
                      <Avatar name={n} size={i === 0 ? 58 : 48} ring />
                    </div>
                    <div className="mt-2 text-[12px] font-medium text-white">{n.split(" ")[0]}</div>
                    <div className="text-[10px] text-white/50">{i === 0 ? "Host" : "Co-host"}</div>
                  </div>
                ))}
                <div className="ml-auto text-right text-[11.5px] text-white/50">
                  Head Table
                  <div className="mt-0.5 flex items-center justify-end gap-1 text-accent font-medium">
                    <Mic size={12} /> Speaking
                  </div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-10 gap-1.5 border-t border-white/10 pt-5">
                {Array.from({ length: 30 }).map((_, i) => (
                  <Avatar key={i} name={`L ${i}`} seed={`wall${i}`} size={24} className="opacity-70" />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-violet">
              Roundtables
            </div>
            <h2 className="mt-3 text-[2.25rem] font-bold leading-[1.1] tracking-tight md:text-[3rem]">
              Rooms with a <br />
              <span className="font-serif italic font-normal text-indigo-300">head table.</span>
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/70">
              Not a podcast broadcast, not a chaotic chat room. Hosts sit at the head table while attendees listen and raise hands for interactive discussion.
            </p>
            <Link href="/discover" className="mt-8 inline-block">
              <Button className="!bg-white/10 hover:!bg-white/20 !text-white !px-6 !py-3">
                Browse Live Roundtables <ArrowRight size={15} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ───────────────── Call to Action Footer ───────────────── */}
      <section className="relative overflow-hidden border-t border-white/10 px-5 py-24 text-center md:py-36">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(62,111,232,0.25)_0%,transparent_70%)] blur-3xl opacity-60" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-3xl"
        >
          <VMark className="mx-auto h-14 w-14" />
          <h2 className="mt-6 text-[2.5rem] font-bold leading-[1.1] tracking-tight md:text-[4rem]">
            The people you look up to
            <br />
            are <span className="font-serif italic font-normal bg-gradient-to-r from-white via-blue-200 to-violet-300 bg-clip-text text-transparent">one Session away.</span>
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/login">
              <Button className="!bg-gradient-to-r !from-[#3E6FE8] !to-[#6E5BF0] hover:!from-[#3361d6] hover:!to-[#5d4be0] !text-white !px-8 !py-4 !text-[15px] font-semibold shadow-xl shadow-indigo-900/40">
                Find your person <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            <Link href="/apply">
              <Button variant="ghost" className="!border-white/20 !text-white hover:!bg-white/10 !px-8 !py-4 !text-[15px]">
                Apply as a Luminary
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ───────────────── Footer ───────────────── */}
      <footer className="border-t border-white/10 px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <Logo />
              <p className="mt-4 max-w-[18rem] text-[13.5px] leading-relaxed text-white/60">
                The verified practitioner network for founders, leaders, and ambitious builders.
              </p>
            </div>
            {[
              ["Product", ["Sessions", "Roundtables", "Notes", "Pricing"]],
              ["Company", ["About", "Careers", "Press", "Contact"]],
              ["Legal", ["Terms", "Privacy", "Refunds", "Trust & Safety"]],
            ].map(([h, items]) => (
              <div key={h as string}>
                <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/40">
                  {h as string}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {(items as string[]).map((it) => (
                    <li key={it}>
                      <span className="text-[13.5px] text-white/60 transition-colors hover:text-white cursor-pointer">
                        {it}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
            <span className="text-[12.5px] text-white/40">
              © 2026 Vetta Network · All rights reserved.
            </span>
            <span className="text-[12.5px] text-white/40">Made with excellence 🇮🇳</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

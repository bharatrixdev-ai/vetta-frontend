"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarClock,
  Check,
  ChevronRight,
  Clock,
  Mic,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Video,
  Zap,
  BookOpen,
  Search,
  MessageCircle,
} from "lucide-react";
import { Logo, VMark } from "@/components/Logo";
import { LandingNav } from "@/components/LandingNav";
import { Avatar } from "@/components/Avatar";
import { Button, Verified } from "@/components/ui";
import { LUMINARIES } from "@/lib/data";

const WALL = [...LUMINARIES, ...LUMINARIES];

/* ───────── Phone Frame (DaisyUI mockup-phone) ───────── */
function PhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mockup-phone border-[#3E6FE8]/30 ${className}`}>
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1 !h-auto !min-h-0 bg-[#0b0b0c] p-0 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ───────── Vetta Discover Screen (matching real app) ───────── */
function DiscoverScreen() {
  const mentors = [
    { name: "Dr. Sarah Kim", title: "Dermatologist · AI Researcher", rating: "4.9", sessions: "102", tags: ["Medicine", "AI in Health"], price: "₹2,500", next: "Tomorrow · 7:30 PM" },
    { name: "Rohan Verma", title: "CTO, Finlay", rating: "4.8", sessions: "231", tags: ["Engineering", "Fintech"], price: "₹1,800", next: "Thu · 9:00 PM" },
  ];

  return (
    <div className="w-full bg-[#0b0b0c] text-white p-3 pt-6 text-left">
      {/* Search */}
      <div className="flex items-center gap-2 rounded-xl bg-white/[0.06] border border-white/10 px-3 py-2">
        <Search size={12} className="text-white/40" />
        <span className="text-[9px] text-white/40">People, topics, tables...</span>
      </div>

      {/* Tabs */}
      <div className="mt-3 flex gap-0.5">
        {["All", "Luminaries", "Roundtables"].map((t, i) => (
          <span key={t} className={`flex-1 text-center rounded-lg py-1.5 text-[8px] font-semibold ${i === 0 ? "bg-white/10 text-white" : "text-white/40"}`}>
            {t}
          </span>
        ))}
      </div>

      {/* Live Roundtable Banner */}
      <div className="mt-3 rounded-xl bg-gradient-to-r from-[#1a1d35] to-[#251a3d] border border-white/10 p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 rounded-full bg-red-500/20 px-2 py-0.5 text-[7px] font-bold text-red-300">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" /> LIVE · 214 listening
          </div>
          <span className="rounded-md bg-emerald-500/20 px-1.5 py-0.5 text-[7px] font-bold text-emerald-300">Free</span>
        </div>
        <div className="mt-2 text-[11px] font-semibold leading-snug">
          Raising in 2026 — what changed
        </div>
        <div className="mt-2 flex items-center gap-2">
          <div className="flex -space-x-1.5">
            <Avatar name="Ananya Iyer" size={18} />
            <Avatar name="James O" size={18} />
          </div>
          <span className="text-[8px] text-white/60">Ananya + James <Verified size={6} /></span>
          <span className="ml-auto rounded-full bg-white/10 px-2.5 py-1 text-[8px] font-semibold text-white">Join →</span>
        </div>
        {/* Audience dots */}
        <div className="mt-2 flex items-center gap-0.5">
          {Array.from({ length: 14 }).map((_, i) => (
            <Avatar key={i} name={`U${i}`} seed={`d${i}`} size={10} className="opacity-60" />
          ))}
          <span className="text-[7px] text-white/40 ml-1">+200</span>
        </div>
      </div>

      {/* Happening Soon */}
      <div className="mt-3">
        <div className="text-[8px] font-bold text-white/40 uppercase tracking-wider">Happening Soon</div>
        <div className="mt-2 flex gap-2 overflow-hidden">
          {[
            { time: "Today · 9:00 PM", title: "Clinical AI — hype vs practice", price: "₹199", hosts: ["Sarah", "AT"] },
            { time: "Tomorrow · 8:00 PM", title: "Portfolios that get callbacks", price: "Free", hosts: ["JO", "Dev"] },
          ].map((e) => (
            <div key={e.title} className="shrink-0 w-[48%] rounded-xl bg-white/[0.04] border border-white/8 p-2.5">
              <div className="flex items-center gap-1">
                <span className="text-[7px] text-emerald-300 font-medium">{e.time}</span>
                <span className="ml-auto rounded-md bg-white/10 px-1 py-0.5 text-[6.5px] font-bold text-white/70">{e.price}</span>
              </div>
              <div className="mt-1 text-[9px] font-semibold leading-snug text-white">{e.title}</div>
              <div className="mt-1.5 flex items-center gap-1">
                {e.hosts.map((h) => <Avatar key={h} name={h} size={14} />)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Pills */}
      <div className="mt-3 flex gap-1 overflow-hidden">
        {["For you", "Raising a round", "AI / ML", "Career switch", "Medicine"].map((cat, i) => (
          <span key={cat} className={`shrink-0 rounded-full px-2 py-1 text-[7.5px] font-semibold whitespace-nowrap ${i === 0 ? "bg-gradient-to-r from-[#3E6FE8] to-[#6E5BF0] text-white" : "bg-white/[0.06] text-white/60"}`}>
            {cat}
          </span>
        ))}
      </div>

      {/* Matched Mentors */}
      <div className="mt-3">
        <div className="text-[8px] font-bold text-white/40 uppercase tracking-wider">Matched to your fields · 10</div>
        <div className="mt-2 space-y-2">
          {mentors.map((m) => (
            <div key={m.name} className="rounded-xl bg-white/[0.03] border border-white/8 p-2.5">
              <div className="flex items-center gap-2">
                <Avatar name={m.name} size={28} ring />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 text-[9px] font-semibold text-white">
                    {m.name} <Verified size={7} />
                  </div>
                  <div className="text-[7.5px] text-white/50 truncate">{m.title}</div>
                  <div className="text-[7px] text-amber-300 flex items-center gap-0.5">
                    <Star size={6} fill="currentColor" /> {m.rating} · {m.sessions} Sessions
                  </div>
                </div>
              </div>
              <div className="mt-1.5 flex gap-1">
                {m.tags.map((t) => (
                  <span key={t} className="rounded-md bg-white/[0.06] px-1.5 py-0.5 text-[6.5px] text-white/60">{t}</span>
                ))}
              </div>
              <div className="mt-1.5 flex items-center justify-between text-[7.5px]">
                <span className="text-white/40">Next: {m.next}</span>
                <span className="font-bold text-accent">from {m.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ───────── Floating Badge Component ───────── */
function FloatingBadge({
  children,
  className = "",
  delay = 0,
  x = 0,
  y = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  x?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: x * 0.5, y: y * 0.5 + 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute z-20 ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ───────── Metric Ring (89% / 72% / 79%) ───────── */
function MetricRing({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="radial-progress text-accent text-[13px] font-bold" style={{ "--value": parseInt(value), "--size": "3.5rem", "--thickness": "3px" } as React.CSSProperties} role="progressbar">
        {value}%
      </div>
      <span className="text-[10px] text-white/50">{label}</span>
    </div>
  );
}

export default function Landing() {
  return (
    <div className="min-h-dvh overflow-x-clip bg-[#0b0b0c] text-white selection:bg-[#3E6FE8]/30 font-sans">
      <LandingNav />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section id="sessions" className="relative px-5 pt-28 pb-6 md:pt-40 md:pb-10">
        {/* Ambient glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-[-10rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(62,111,232,0.25)_0%,rgba(110,91,240,0.1)_60%,transparent_80%)] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.5rem] font-bold leading-[1.05] tracking-[-0.03em] md:text-[4.5rem]"
          >
            Meet the people
            <br />
            <span className="bg-gradient-to-r from-white via-blue-200 to-indigo-300 bg-clip-text text-transparent italic font-serif font-normal">
              worth meeting.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mx-auto mt-5 max-w-[32rem] text-[15px] leading-relaxed text-white/65 md:text-[17px]"
          >
            Verified mentors, exam toppers & industry leaders. Book 1:1 calls, join live roundtables, read practitioner notes.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-7 flex items-center justify-center gap-3"
          >
            <Link href="/login">
              <button className="btn btn-primary btn-md rounded-full gap-1 px-6 text-[13px] bg-gradient-to-r from-[#3E6FE8] to-[#6E5BF0] border-0 text-white shadow-lg shadow-indigo-900/40 hover:brightness-110">
                Get Started <ArrowRight size={15} />
              </button>
            </Link>
            <Link href="/discover">
              <button className="btn btn-ghost btn-md rounded-full px-6 text-[13px] border border-white/20 text-white hover:bg-white/10">
                See Mentors
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ PHONE SHOWCASE + FLOATING BADGES ═══════════════════ */}
      <section className="relative px-5 py-8 md:py-14 overflow-visible">
        <div className="relative mx-auto max-w-5xl flex items-center justify-center">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <PhoneFrame>
              <DiscoverScreen />
            </PhoneFrame>
          </motion.div>

          {/* ─── Floating Badges Around Phone ─── */}

          {/* Top-Left: Star rating */}
          <FloatingBadge className="left-[2%] top-[5%] md:left-[8%] md:top-[8%] hidden sm:block" delay={0.5} x={-20}>
            <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-[#141519]/90 backdrop-blur-xl px-4 py-2.5 shadow-xl">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(s => <Star key={s} size={11} fill="#f5b14c" className="text-[#f5b14c]" />)}
              </div>
              <span className="text-[12px] font-bold text-white">4.9</span>
              <span className="text-[10px] text-white/50">avg rating</span>
            </div>
          </FloatingBadge>

          {/* Top-Right: Mentors active */}
          <FloatingBadge className="right-[2%] top-[3%] md:right-[6%] md:top-[5%] hidden sm:block" delay={0.6} x={20}>
            <div className="flex items-center gap-2 rounded-2xl border border-emerald-500/25 bg-emerald-500/10 backdrop-blur-xl px-4 py-2.5 shadow-xl">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[12px] font-bold text-emerald-300">400+</span>
              <span className="text-[10px] text-emerald-200/60">mentors active</span>
            </div>
          </FloatingBadge>

          {/* Left: Session UI card */}
          <FloatingBadge className="left-[-2%] top-[40%] md:left-[3%] hidden sm:block" delay={0.7} x={-25}>
            <div className="w-[170px] rounded-2xl border border-white/10 bg-[#141519]/90 backdrop-blur-xl p-3 shadow-xl">
              <div className="flex items-center gap-2">
                <Avatar name="Aaditya Deshmukh" size={28} ring />
                <div>
                  <div className="flex items-center gap-1 text-[10px] font-semibold text-white">
                    Aaditya D. <Verified size={8} />
                  </div>
                  <div className="text-[8px] text-white/50">UPSC AIR 4</div>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[8px] text-white/40 flex items-center gap-1"><Clock size={8} /> 42 min</span>
                <span className="rounded-full bg-gradient-to-r from-[#3E6FE8] to-[#6E5BF0] px-2 py-0.5 text-[8px] font-semibold text-white">Book Call</span>
              </div>
            </div>
          </FloatingBadge>

          {/* Right: Stats badge */}
          <FloatingBadge className="right-[-2%] top-[38%] md:right-[3%] hidden sm:block" delay={0.75} x={25}>
            <div className="w-[160px] rounded-2xl border border-[#3E6FE8]/25 bg-[#141519]/90 backdrop-blur-xl p-3 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-r from-[#3E6FE8] to-[#6E5BF0] text-white">
                  <Zap size={14} />
                </div>
                <span className="text-[10px] font-bold text-white">98% Signal</span>
              </div>
              <div className="text-[8px] text-white/50">Verified track records,<br />no unvetted advice</div>
            </div>
          </FloatingBadge>

          {/* Bottom-Left: Bar chart badge */}
          <FloatingBadge className="left-[5%] bottom-[8%] md:left-[10%] hidden sm:block" delay={0.8} x={-15}>
            <div className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-[#141519]/90 backdrop-blur-xl px-3.5 py-2.5 shadow-xl">
              <TrendingUp size={16} className="text-accent" />
              <div>
                <div className="text-[11px] font-bold text-white">15k+ hours</div>
                <div className="text-[8px] text-white/40">advisory delivered</div>
              </div>
            </div>
          </FloatingBadge>

          {/* Bottom-Right: Live roundtable badge */}
          <FloatingBadge className="right-[5%] bottom-[10%] md:right-[10%] hidden sm:block" delay={0.85} x={15}>
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#141519]/90 backdrop-blur-xl px-3.5 py-2.5 shadow-xl">
              <Users size={14} className="text-violet-400" />
              <div>
                <div className="text-[11px] font-bold text-white">312 listening</div>
                <div className="text-[8px] text-white/40">live roundtable now</div>
              </div>
            </div>
          </FloatingBadge>
        </div>
      </section>

      {/* ═══════════════════ LOVED BY / BRAND WALL ═══════════════════ */}
      <section id="roundtables" className="relative border-y border-white/10 bg-white/[0.01] py-10 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0b0b0c] to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0b0b0c] to-transparent" />

        <div className="text-center mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/35">
            Trusted by leaders across organizations
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="anim-marquee flex w-max gap-3 px-4">
            {WALL.map((l, i) => (
              <div key={l.handle + i} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-2.5 backdrop-blur-md hover:border-white/15 transition-colors">
                <Avatar name={l.name} size={32} />
                <div>
                  <div className="flex items-center gap-1 whitespace-nowrap text-[12px] font-semibold text-white">
                    {l.name} <Verified size={10} />
                  </div>
                  <div className="whitespace-nowrap text-[10px] text-white/45">{l.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ BENCHMARKS + METRICS (89% 72% 79%) ═══════════════════ */}
      <section id="vetting" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="badge badge-outline badge-primary gap-1 text-[11px] uppercase tracking-wider mb-4">
              <TrendingUp size={12} /> Performance
            </div>
            <h2 className="text-[2rem] font-bold leading-tight tracking-tight md:text-[2.75rem]">
              Achieving Superior<br />
              <span className="font-serif italic font-normal text-indigo-300">Industry Benchmarks.</span>
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-white/60">
              Direct practitioner signal replacing unvetted advice. Connect with verified exam toppers & engineering leaders.
            </p>

            {/* Stats */}
            <div className="mt-6 stats stats-vertical sm:stats-horizontal bg-white/[0.03] border border-white/8 shadow-lg w-full">
              <div className="stat">
                <div className="stat-value text-white text-[24px]">400+</div>
                <div className="stat-desc text-white/50">Verified Mentors</div>
              </div>
              <div className="stat">
                <div className="stat-value text-white text-[24px]">98%</div>
                <div className="stat-desc text-white/50">Satisfaction</div>
              </div>
              <div className="stat">
                <div className="stat-value text-white text-[24px]">15k+</div>
                <div className="stat-desc text-white/50">Advisory Hours</div>
              </div>
            </div>

            {/* Dstudio circular metrics */}
            <div className="mt-6 flex items-center justify-start gap-6">
              <MetricRing value="89" label="Exam Speed" />
              <MetricRing value="72" label="Career Scale" />
              <MetricRing value="79" label="Signal Quality" />
            </div>
          </motion.div>

          {/* Right: Imagine a space editorial */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-[#12172a] to-[#0b0b0c] p-6 md:p-10 shadow-2xl"
          >
            <div aria-hidden className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#6E5BF0]/10 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="badge badge-ghost gap-1 text-[10px] uppercase tracking-wider">
                <Sparkles size={10} /> Exclusively Vetted
              </div>
              <h3 className="mt-4 text-[1.75rem] font-serif font-normal italic leading-[1.15] text-white md:text-[2.25rem]">
                Imagine a space between vision & impact.
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                UPSC/GATE toppers, tutors, CTOs, & civic leaders — all in one network.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/discover">
                  <button className="btn btn-sm rounded-full bg-white text-black border-0 hover:bg-white/90 gap-1 text-[12px]">
                    Explore Mentors <ArrowRight size={13} />
                  </button>
                </Link>
                <Link href="/apply">
                  <button className="btn btn-sm btn-ghost rounded-full border-white/20 text-white hover:bg-white/10 text-[12px]">
                    Apply as Luminary
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ VALUE PROPOSITION CARDS ═══════════════════ */}
      <section id="pricing" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="text-center mb-10">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Value Proposition</div>
          <h2 className="mt-2 text-[2rem] font-bold tracking-tight md:text-[2.75rem]">
            Where are you <span className="font-serif italic font-normal text-indigo-300">in your journey?</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            { num: "01", title: "Going\nZero to One", desc: "Building from scratch? Get direct advisory from founders who did it.", cta: "Founders & Early Stage", style: "bg-gradient-to-b from-white/95 to-slate-100 text-black", ctaStyle: "border-slate-200 text-slate-900", chevronStyle: "bg-slate-900 text-white" },
            { num: "02", title: "Scaling from\nOne to N", desc: "Achieved PMF? Scale team, architecture & revenue with proven leaders.", cta: "Growth & Scaleups", style: "bg-gradient-to-b from-[#3E6FE8] via-[#524be0] to-[#6E5BF0] text-white ring-1 ring-white/20 shadow-indigo-900/40", ctaStyle: "border-white/20 text-white", chevronStyle: "bg-white text-indigo-900" },
            { num: "03", title: "Need Quick\nSolutions", desc: "Know your hurdle? Get a 50-min targeted session with a specialist.", cta: "1:1 Advisory", style: "bg-gradient-to-b from-[#171924] to-[#0e1018] text-white border border-white/10", ctaStyle: "border-white/10 text-white/90", chevronStyle: "bg-white/10 text-white" },
          ].map((c) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`group card shadow-2xl rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 ${c.style}`}
            >
              <div>
                <div className="text-[11px] font-bold tracking-wider opacity-50 uppercase">{c.num}</div>
                <h3 className="mt-5 text-[26px] font-semibold leading-tight tracking-tight whitespace-pre-line">{c.title}</h3>
                <p className="mt-3 text-[13px] leading-relaxed opacity-70">{c.desc}</p>
              </div>
              <div className={`mt-7 flex items-center justify-between border-t pt-4 ${c.ctaStyle}`}>
                <span className="text-[11px] font-bold">{c.cta}</span>
                <span className={`flex h-7 w-7 items-center justify-center rounded-full transition-transform group-hover:translate-x-1 ${c.chevronStyle}`}>
                  <ChevronRight size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════ THREE WAYS IN ═══════════════════ */}
      <section id="notes" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="text-center mb-10">
          <h2 className="text-[2rem] font-bold tracking-tight md:text-[2.75rem]">Three ways in.</h2>
          <p className="mt-2 text-[14px] text-white/50">Direct access for clarity, speed & real outcome.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            { tag: "Sessions", line: "Book the hour.", icon: <Video size={18} className="text-accent" />, desc: "1:1 video strategy calls with pre-session agendas.", features: ["50-min deep dives", "AI summaries", "Session recording"] },
            { tag: "Roundtables", line: "Pull up a chair.", icon: <Users size={18} className="text-violet-400" />, desc: "Live audio rooms with a dedicated head table.", features: ["Live Q&A", "Head table speakers", "300+ audience"] },
            { tag: "Notes", line: "Read the signal.", icon: <BookOpen size={18} className="text-blue-300" />, desc: "Concise practitioner insights with zero noise.", features: ["Verified authors", "Community reactions", "Bookmark & share"] },
          ].map((c, i) => (
            <motion.div
              key={c.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group card bg-white/[0.02] border border-white/8 rounded-3xl p-5 hover:border-accent/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06]">{c.icon}</div>
                <span className="badge badge-ghost badge-sm text-[10px] uppercase tracking-wider">{c.tag}</span>
              </div>
              <div className="text-lg font-semibold text-white">{c.line}</div>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/55">{c.desc}</p>
              <ul className="mt-3 space-y-1.5">
                {c.features.map((f) => (
                  <li key={f} className="flex items-center gap-1.5 text-[11.5px] text-white/65">
                    <Check size={12} className="text-accent shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between border-t border-white/8 pt-3">
                <span className="text-[11px] font-semibold text-accent">Learn more</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/8 text-white group-hover:translate-x-0.5 transition-transform">
                  <ChevronRight size={13} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="border-t border-white/8 bg-[#070708] px-5 py-10">
        <div className="mx-auto max-w-6xl flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Logo wordClass="!text-white" />
            <span className="text-[11px] text-white/35">© {new Date().getFullYear()} Vetta Inc.</span>
          </div>
          <div className="flex gap-5 text-[11px] text-white/45">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

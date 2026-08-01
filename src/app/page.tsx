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
  Sliders,
  Award,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { Logo, VMark } from "@/components/Logo";
import { LandingNav } from "@/components/LandingNav";
import { Avatar } from "@/components/Avatar";
import { Button, Verified } from "@/components/ui";
import { LUMINARIES } from "@/lib/data";

const WALL = [...LUMINARIES, ...LUMINARIES];

/* ───────── Phone Frame Component ───────── */
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

/* ───────── Vetta Brand Splash Screen for Hero Phone ───────── */
function VettaHeroPhoneSplash() {
  return (
    <div className="w-full bg-gradient-to-b from-[#0e1224] via-[#0b0b0c] to-[#121629] text-white p-5 pt-8 text-center flex flex-col items-center justify-between min-h-[460px]">
      {/* Top Status */}
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <VMark className="!h-5 !w-5" />
          <span className="text-[11px] font-bold tracking-tight text-white">VETTA</span>
        </div>
        <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5 text-[7.5px] font-bold text-emerald-300 flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Network
        </span>
      </div>

      {/* Main Hero Branding Inside Phone */}
      <div className="my-auto py-4">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#3E6FE8] to-[#6E5BF0] p-3 shadow-lg shadow-indigo-900/50 ring-1 ring-white/20">
          <VMark className="!h-8 !w-8 text-white" />
        </div>
        <h3 className="mt-3 text-[16px] font-bold tracking-tight text-white leading-tight">
          Meet the people<br />
          <span className="bg-gradient-to-r from-white via-blue-200 to-indigo-300 bg-clip-text text-transparent italic font-serif font-normal">
            worth meeting.
          </span>
        </h3>
        <p className="mt-1.5 text-[9.5px] text-white/60 max-w-[180px] mx-auto leading-relaxed">
          Verified track records of toppers, master tutors & tech leaders.
        </p>

        {/* Core Pillars Chips Inside Phone */}
        <div className="mt-4 space-y-1.5 text-left">
          <div className="flex items-center gap-2 rounded-xl bg-white/[0.05] border border-white/10 p-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#3E6FE8]/30 text-accent shrink-0">
              <Video size={11} />
            </div>
            <div>
              <div className="text-[9px] font-semibold text-white">1:1 Advisory Calls</div>
              <div className="text-[7.5px] text-white/50">Book 50-min deep dives</div>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-white/[0.05] border border-white/10 p-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#6E5BF0]/30 text-violet-300 shrink-0">
              <Users size={11} />
            </div>
            <div>
              <div className="text-[9px] font-semibold text-white">Head-Table Roundtables</div>
              <div className="text-[7.5px] text-white/50">Live audio strategy rooms</div>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-white/[0.05] border border-white/10 p-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/30 text-emerald-300 shrink-0">
              <BookOpen size={11} />
            </div>
            <div>
              <div className="text-[9px] font-semibold text-white">Practitioner Notes</div>
              <div className="text-[7.5px] text-white/50">Verified zero-noise signals</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Inside Phone */}
      <Link href="/discover" className="w-full">
        <button className="w-full rounded-xl bg-gradient-to-r from-[#3E6FE8] to-[#6E5BF0] py-2 text-[10px] font-bold text-white shadow-md flex items-center justify-center gap-1 hover:brightness-110">
          Enter Network <ArrowRight size={10} />
        </button>
      </Link>
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

/* ───────── Circular Metric Ring (89% / 72% / 79%) ───────── */
function MetricRing({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className="radial-progress text-accent text-[13px] font-bold"
        style={{ "--value": parseInt(value), "--size": "3.8rem", "--thickness": "4px" } as React.CSSProperties}
        role="progressbar"
      >
        {value}%
      </div>
      <span className="text-[10.5px] text-white/60 font-medium">{label}</span>
    </div>
  );
}

export default function Landing() {
  return (
    <div className="min-h-dvh overflow-x-clip bg-[#0b0b0c] text-white selection:bg-[#3E6FE8]/30 font-sans">
      <LandingNav />

      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section className="relative px-5 pt-28 pb-8 md:pt-40 md:pb-12">
        {/* Ambient glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-[-10rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(62,111,232,0.25)_0%,rgba(110,91,240,0.12)_60%,transparent_80%)] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.6rem] font-bold leading-[1.05] tracking-[-0.03em] md:text-[4.75rem]"
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
            className="mx-auto mt-5 max-w-[34rem] text-[15px] leading-relaxed text-white/70 md:text-[18px]"
          >
            Verified track records of top exam rankers, master tutors, tech leaders, and civic figures. Book 1:1 advisory calls, join head-table discussions, and learn from those who cracked what you aim for.
          </motion.p>

          {/* Claim Handle Bar */}
          <motion.form
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mx-auto mt-8 flex max-w-md items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] p-1.5 pl-5 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] ring-1 ring-white/10"
          >
            <span className="select-none text-[13.5px] font-mono text-white/40">vetta.network/</span>
            <input
              aria-label="Choose your handle"
              placeholder="yourname"
              className="min-w-0 flex-1 bg-transparent text-[13.5px] text-white outline-none placeholder:text-white/30"
            />
            <Link href="/login">
              <Button className="!px-5 !py-2.5 whitespace-nowrap !text-[13px] !bg-gradient-to-r !from-[#3E6FE8] !to-[#6E5BF0] hover:!from-[#3361d6] hover:!to-[#5d4be0] !text-white font-semibold shadow-lg shadow-indigo-900/40 rounded-full">
                Claim handle <ArrowRight size={14} className="ml-1" />
              </Button>
            </Link>
          </motion.form>

          {/* Micro Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] text-white/50"
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

      {/* ═══════════════════ PHONE SHOWCASE WITH FLOATING FEATURE BADGES ═══════════════════ */}
      <section className="relative px-5 py-8 md:py-14 overflow-visible">
        <div className="relative mx-auto max-w-5xl flex items-center justify-center">
          {/* Hero Phone displaying Vetta Brand Splash */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <PhoneFrame>
              <VettaHeroPhoneSplash />
            </PhoneFrame>
          </motion.div>

          {/* ─── Floating Badges Surrounding Hero Phone ─── */}

          {/* Top-Left: Rating Badge */}
          <FloatingBadge className="left-[2%] top-[5%] md:left-[8%] md:top-[8%] hidden sm:block" delay={0.5} x={-20}>
            <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-[#141519]/90 backdrop-blur-xl px-4 py-2.5 shadow-xl">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={11} fill="#f5b14c" className="text-[#f5b14c]" />
                ))}
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

          {/* Left: 1:1 Session call preview card */}
          <FloatingBadge className="left-[-2%] top-[40%] md:left-[3%] hidden sm:block" delay={0.7} x={-25}>
            <div className="w-[175px] rounded-2xl border border-white/10 bg-[#141519]/90 backdrop-blur-xl p-3 shadow-xl">
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
                <span className="text-[8px] text-white/40 flex items-center gap-1">
                  <Clock size={8} /> 50 min
                </span>
                <span className="rounded-full bg-gradient-to-r from-[#3E6FE8] to-[#6E5BF0] px-2 py-0.5 text-[8px] font-semibold text-white">
                  Book Call
                </span>
              </div>
            </div>
          </FloatingBadge>

          {/* Right: 98% Signal badge */}
          <FloatingBadge className="right-[-2%] top-[38%] md:right-[3%] hidden sm:block" delay={0.75} x={25}>
            <div className="w-[160px] rounded-2xl border border-[#3E6FE8]/25 bg-[#141519]/90 backdrop-blur-xl p-3 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-r from-[#3E6FE8] to-[#6E5BF0] text-white">
                  <Zap size={14} />
                </div>
                <span className="text-[10px] font-bold text-white">98% Signal</span>
              </div>
              <div className="text-[8px] text-white/50">Verified track records,<br />zero unvetted advice</div>
            </div>
          </FloatingBadge>

          {/* Bottom-Left: Hours delivered */}
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

        {/* Quick Nav Anchors */}
        <div className="mt-10 flex items-center justify-center gap-x-8 text-[12px] font-medium text-white/40 tracking-wide">
          <a href="#sessions" className="hover:text-white transition-colors">Sessions</a>
          <a href="#roundtables" className="hover:text-white transition-colors">Roundtables</a>
          <a href="#notes" className="hover:text-white transition-colors">Notes</a>
          <a href="#vetting" className="hover:text-white transition-colors">Vetting</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>
      </section>

      {/* ═══════════════════ MARQUEE BRAND WALL ═══════════════════ */}
      <section className="relative border-y border-white/10 bg-white/[0.01] py-10 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0b0b0c] to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0b0b0c] to-transparent" />

        <div className="text-center mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/35">
            Verified Rankers, Tutors & Executives
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="anim-marquee flex w-max gap-3 px-4">
            {WALL.map((l, i) => (
              <div
                key={l.handle + i}
                className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-2.5 backdrop-blur-md hover:border-white/15 transition-colors"
              >
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

      {/* ═══════════════════ SECTION 1: #sessions ═══════════════════ */}
      <section id="sessions" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-[11.5px] font-semibold text-accent uppercase tracking-widest">
              <Video size={12} /> 1:1 Video Advisory
            </div>
            <h2 className="mt-5 text-[2.25rem] font-bold leading-tight tracking-tight md:text-[3.25rem]">
              Book 1:1 strategy calls<br />
              <span className="font-serif italic font-normal text-indigo-300">with top practitioners.</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/65">
              Set clear pre-session agendas, get direct advice on exam strategy or engineering architecture, and receive an AI-generated call summary with actionable next steps.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "50-minute structured strategy sessions",
                "Verified rankers: UPSC CSE AIR 4, GATE AIR 1 & master tutors",
                "Automatic session transcript & AI action items",
                "100% satisfaction guarantee",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[13.5px] text-white/80">
                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-4">
              <Link href="/discover">
                <Button className="!vgrad !text-white font-semibold !px-6 !py-3">
                  Find a Mentor <ArrowRight size={15} />
                </Button>
              </Link>
            </div>
          </div>

          {/* Interactive Session Card Preview */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#141727] to-[#0e101a] p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <Avatar name="Aaditya Deshmukh" size={44} ring />
                <div>
                  <div className="flex items-center gap-1.5 text-[14px] font-bold text-white">
                    Aaditya Deshmukh <Verified size={13} />
                  </div>
                  <div className="text-[11px] text-white/50">UPSC CSE AIR 4 · Policy Fellow</div>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 text-[11px] font-bold text-emerald-300">
                Available
              </span>
            </div>

            <div className="mt-5 space-y-3">
              <div className="rounded-2xl bg-white/[0.04] border border-white/8 p-4">
                <div className="text-[11px] font-bold uppercase tracking-wider text-accent">Selected Topic</div>
                <div className="mt-1 text-[14px] font-semibold text-white">UPSC CSE Mains Strategy & Answer Writing</div>
                <div className="mt-2 flex items-center justify-between text-[12px] text-white/60">
                  <span>Duration: 50 mins</span>
                  <span className="font-bold text-white">₹2,500 / session</span>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white/[0.02] border border-white/6 p-3 text-[12px] text-white/70">
                <span className="flex items-center gap-1.5"><CalendarClock size={14} className="text-accent" /> Next slot: Tomorrow, 7:30 PM</span>
                <Link href="/book/aaditya-deshmukh">
                  <span className="text-[11.5px] font-bold text-accent hover:underline">Select slot →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 2: #roundtables ═══════════════════ */}
      <section id="roundtables" className="mx-auto max-w-6xl px-5 py-20 md:py-28 border-t border-white/8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Live Roundtable UI Simulation */}
          <div className="order-2 lg:order-1 rounded-3xl border border-white/10 bg-gradient-to-b from-[#19152b] via-[#121424] to-[#0b0b0c] p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 rounded-full bg-red-500/20 border border-red-500/30 px-3 py-1 text-[11px] font-bold text-red-300">
                <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse" /> LIVE NOW · 312 Listening
              </span>
              <span className="text-[12px] font-semibold text-white/50">Free Access</span>
            </div>

            <h3 className="mt-4 text-[18px] font-bold text-white leading-snug">
              Cracking Competitive Exams & Leadership Strategy
            </h3>

            {/* Head Table Speakers */}
            <div className="mt-6 rounded-2xl bg-white/[0.04] border border-white/8 p-4">
              <div className="text-[10px] font-bold uppercase tracking-wider text-violet-300 mb-3">Head Table</div>
              <div className="flex items-center justify-around text-center">
                <div>
                  <div className="anim-speak rounded-full inline-block">
                    <Avatar name="Aaditya Deshmukh" size={44} ring />
                  </div>
                  <div className="mt-1.5 text-[11.5px] font-semibold text-white">Aaditya</div>
                  <div className="text-[9.5px] text-accent">Host · AIR 4</div>
                </div>
                <div>
                  <Avatar name="Prof. Priya Sharma" size={44} ring />
                  <div className="mt-1.5 text-[11.5px] font-semibold text-white">Prof. Priya</div>
                  <div className="text-[9.5px] text-white/50">Speaker · GATE AIR 1</div>
                </div>
                <div>
                  <Avatar name="Rohan Verma" size={44} ring />
                  <div className="mt-1.5 text-[11.5px] font-semibold text-white">Rohan</div>
                  <div className="text-[9.5px] text-white/50">Speaker · CTO</div>
                </div>
              </div>
            </div>

            {/* Audience Grid */}
            <div className="mt-4">
              <div className="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-2">Audience · 309</div>
              <div className="grid grid-cols-8 gap-1.5">
                {Array.from({ length: 24 }).map((_, i) => (
                  <Avatar key={i} name={`Listener${i}`} seed={`rt_aud_${i}`} size={20} className="opacity-60" />
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-[11.5px] font-semibold text-violet-300 uppercase tracking-widest">
              <Users size={12} /> Head-Table Roundtables
            </div>
            <h2 className="mt-5 text-[2.25rem] font-bold leading-tight tracking-tight md:text-[3.25rem]">
              Pull up a chair at<br />
              <span className="font-serif italic font-normal text-indigo-300">the head table.</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/65">
              Live audio strategy rooms hosted by luminaries. Listen to high-signal discussions, ask live questions during Q&A, and network with focused peers.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Dedicated head-table with verified subject matter experts",
                "Live Q&A and interactive audience participation",
                "Replays & transcribed key takeaways available post-event",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[13.5px] text-white/80">
                  <CheckCircle2 size={16} className="text-violet-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link href="/discover">
                <Button variant="ghost" className="!border-white/20 !text-white hover:!bg-white/10 !px-6 !py-3">
                  Explore Roundtables <ArrowRight size={15} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 3: #notes ═══════════════════ */}
      <section id="notes" className="mx-auto max-w-6xl px-5 py-20 md:py-28 border-t border-white/8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-3.5 py-1 text-[11.5px] font-semibold text-blue-300 uppercase tracking-widest">
            <BookOpen size={12} /> Practitioner Notes
          </div>
          <h2 className="mt-4 text-[2.25rem] font-bold tracking-tight md:text-[3.25rem]">
            Read the signal,<br />
            <span className="font-serif italic font-normal text-indigo-300">ignore the noise.</span>
          </h2>
          <p className="mt-3 text-[15px] text-white/65">
            Concise, practitioner-written insights from toppers and leaders sharing battle-tested frameworks.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              author: "Aaditya Deshmukh",
              title: "UPSC CSE AIR 4",
              noteTitle: "How I Structured My 14-Hour Revision Strategy",
              desc: "A breakdown of active recall, space repetition, and note condensation that secured a top 5 rank.",
              reads: "14.2k reads",
            },
            {
              author: "Prof. Priya Sharma",
              title: "GATE AIR 1",
              noteTitle: "Mathematical Problem-Solving Under Pressure",
              desc: "Tactics for eliminating silly mistakes in high-stakes technical competitive examinations.",
              reads: "9.8k reads",
            },
            {
              author: "Rohan Verma",
              title: "CTO, Finlay",
              noteTitle: "Architecture Decisions for 1M QPS Systems",
              desc: "What we got right, what broke, and how we scaled from 10k to 1 million queries per second.",
              reads: "18.5k reads",
            },
          ].map((n) => (
            <div key={n.noteTitle} className="group card bg-white/[0.03] border border-white/8 rounded-3xl p-6 hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5">
                  <Avatar name={n.author} size={32} />
                  <div>
                    <div className="flex items-center gap-1 text-[12.5px] font-semibold text-white">
                      {n.author} <Verified size={10} />
                    </div>
                    <div className="text-[10px] text-white/50">{n.title}</div>
                  </div>
                </div>
                <h3 className="mt-4 text-[16px] font-bold text-white group-hover:text-accent transition-colors leading-snug">
                  {n.noteTitle}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/60">{n.desc}</p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-3 text-[11.5px] text-white/45">
                <span>{n.reads}</span>
                <span className="font-semibold text-accent group-hover:translate-x-0.5 transition-transform flex items-center gap-1">Read Note →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════ SECTION 4: #vetting ═══════════════════ */}
      <section id="vetting" className="mx-auto max-w-6xl px-5 py-20 md:py-28 border-t border-white/8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-[11.5px] font-semibold text-emerald-300 uppercase tracking-widest">
              <TrendingUp size={12} /> Vetting & Performance
            </div>
            <h2 className="mt-5 text-[2.25rem] font-bold leading-tight tracking-tight md:text-[3.25rem]">
              Achieving Superior<br />
              <span className="font-serif italic font-normal text-indigo-300">Industry Benchmarks.</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/65">
              Vetta replaces unverified social media advice with direct practitioner signal. Every mentor on Vetta has submitted verified credentials, rank certificates, or executive background checks.
            </p>

            {/* Stat Cards */}
            <div className="mt-6 stats stats-vertical sm:stats-horizontal bg-white/[0.03] border border-white/8 shadow-lg w-full">
              <div className="stat">
                <div className="stat-value text-white text-[26px]">400+</div>
                <div className="stat-desc text-white/50">Verified Mentors</div>
              </div>
              <div className="stat">
                <div className="stat-value text-white text-[26px]">98%</div>
                <div className="stat-desc text-white/50">Satisfaction</div>
              </div>
              <div className="stat">
                <div className="stat-value text-white text-[26px]">15k+</div>
                <div className="stat-desc text-white/50">Advisory Hours</div>
              </div>
            </div>

            {/* Dstudio Radial Metrics */}
            <div className="mt-8 flex items-center justify-start gap-8 border-t border-white/10 pt-6">
              <MetricRing value="89" label="Exam Speed" />
              <MetricRing value="72" label="Career Scale" />
              <MetricRing value="79" label="Signal Quality" />
            </div>
          </div>

          {/* Right Editorial Banner */}
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-[#12172a] to-[#0b0b0c] p-8 md:p-12 shadow-2xl">
            <div aria-hidden className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#6E5BF0]/15 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                <Sparkles size={11} /> Exclusively Vetted
              </div>
              <h3 className="mt-4 text-[1.85rem] font-serif font-normal italic leading-[1.15] text-white md:text-[2.5rem]">
                Imagine a space between vision & impact.
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white/65">
                Connect directly with UPSC/GATE toppers, master tutors, engineering CTOs, and civic leaders who have mastered what you are striving for.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/discover">
                  <button className="btn btn-md rounded-full bg-white text-black border-0 hover:bg-white/90 gap-1 text-[13px] font-semibold">
                    Explore Network <ArrowRight size={14} />
                  </button>
                </Link>
                <Link href="/apply">
                  <button className="btn btn-md btn-ghost rounded-full border-white/20 text-white hover:bg-white/10 text-[13px]">
                    Apply as Luminary
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 5: #pricing ═══════════════════ */}
      <section id="pricing" className="mx-auto max-w-6xl px-5 py-20 md:py-28 border-t border-white/8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Value & Pricing</div>
          <h2 className="mt-3 text-[2.25rem] font-bold tracking-tight md:text-[3.25rem]">
            Where are you <span className="font-serif italic font-normal text-indigo-300">in your journey?</span>
          </h2>
          <p className="mt-3 text-[15px] text-white/65">
            Transparent pricing with zero hidden fees. Pay only for the advisory calls you book.
          </p>
        </div>

        {/* 3 Main Journey Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group card shadow-2xl rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 bg-gradient-to-b from-white/95 to-slate-100 text-black"
          >
            <div>
              <div className="text-[11px] font-bold tracking-wider text-slate-500 uppercase">01</div>
              <h3 className="mt-5 text-[26px] font-semibold leading-tight tracking-tight">
                Going <br />Zero to One
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600">
                Building a new product, startup, or exam prep plan from scratch? Direct 1:1 advisory from rankers and founders who did it.
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-4">
              <span className="text-[11.5px] font-bold text-slate-900">Founders & Aspirants</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white transition-transform group-hover:translate-x-1">
                <ChevronRight size={15} />
              </span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group card shadow-2xl rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 bg-gradient-to-b from-[#3E6FE8] via-[#524be0] to-[#6E5BF0] text-white ring-1 ring-white/20 shadow-indigo-900/40"
          >
            <div>
              <div className="text-[11px] font-bold tracking-wider text-blue-100 uppercase">02</div>
              <h3 className="mt-5 text-[26px] font-semibold leading-tight tracking-tight">
                Scaling from <br />One to N
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-blue-50">
                Already clear on fundamentals? Scale your interview readiness, answer writing, and technical architecture with senior leaders.
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-white/20 pt-4">
              <span className="text-[11.5px] font-bold text-white">Growth & Advanced</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-indigo-900 transition-transform group-hover:translate-x-1">
                <ChevronRight size={15} />
              </span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group card shadow-2xl rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 bg-gradient-to-b from-[#171924] to-[#0e1018] text-white border border-white/10"
          >
            <div>
              <div className="text-[11px] font-bold tracking-wider text-white/40 uppercase">03</div>
              <h3 className="mt-5 text-[26px] font-semibold leading-tight tracking-tight">
                Need Quick <br />Solutions
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-white/60">
                Facing a specific blocker? Get a 50-minute targeted session with a verified specialist to unblock your immediate obstacle.
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-[11.5px] font-bold text-white/90">1:1 Targeted Advisory</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-transform group-hover:translate-x-1">
                <ChevronRight size={15} />
              </span>
            </div>
          </motion.div>
        </div>

        {/* Pricing Tiers Bar */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
            <div className="text-[12px] font-bold uppercase tracking-wider text-accent">For Aspirants & Mentees</div>
            <div className="mt-2 text-[24px] font-bold text-white">Free Network Access</div>
            <p className="mt-2 text-[13.5px] text-white/60">Browse luminaries, listen to public Roundtables, and read practitioner Notes for free. Pay only per 1:1 session booked (set directly by mentors).</p>
            <div className="mt-6">
              <Link href="/login">
                <Button className="!vgrad !text-white font-semibold !px-5 !py-2.5">
                  Create Free Account →
                </Button>
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
            <div className="text-[12px] font-bold uppercase tracking-wider text-violet-300">For Mentors & Luminaries</div>
            <div className="mt-2 text-[24px] font-bold text-white">Verified Luminary Profile</div>
            <p className="mt-2 text-[13.5px] text-white/60">Apply with your rank certificate or track record. Set your own session rates, host roundtables, publish notes, and earn directly.</p>
            <div className="mt-6">
              <Link href="/apply">
                <Button variant="ghost" className="!border-white/20 !text-white hover:!bg-white/10 !px-5 !py-2.5">
                  Apply as Luminary →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="border-t border-white/8 bg-[#070708] px-5 py-10">
        <div className="mx-auto max-w-6xl flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Logo wordClass="!text-white" />
            <span className="text-[11px] text-white/35">© {new Date().getFullYear()} Vetta Inc. All rights reserved.</span>
          </div>
          <div className="flex gap-5 text-[11px] text-white/45">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

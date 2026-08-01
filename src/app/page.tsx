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
  CheckCircle2,
  Globe,
  Radio,
} from "lucide-react";
import { Logo, VMark } from "@/components/Logo";
import { LandingNav } from "@/components/LandingNav";
import { Avatar } from "@/components/Avatar";
import { Button, Verified } from "@/components/ui";
import { LUMINARIES } from "@/lib/data";

const WALL = [...LUMINARIES, ...LUMINARIES];

/* ───────── Phone Frame Component (Mobile Responsive) ───────── */
function PhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mockup-phone border-[#3E6FE8]/30 max-w-[300px] sm:max-w-none mx-auto ${className}`}>
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
    <div className="w-full bg-gradient-to-b from-[#0e1224] via-[#0b0b0c] to-[#121629] text-white p-4 sm:p-5 pt-8 text-center flex flex-col items-center justify-between min-h-[440px] sm:min-h-[460px]">
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
      <div className="my-auto py-3">
        <div className="mx-auto flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#3E6FE8] to-[#6E5BF0] p-3 shadow-lg shadow-indigo-900/50 ring-1 ring-white/20">
          <VMark className="!h-7 !w-7 sm:!h-8 sm:!w-8 text-white" />
        </div>
        <h3 className="mt-3 text-[15px] sm:text-[16px] font-bold tracking-tight text-white leading-tight">
          Meet the people<br />
          <span className="bg-gradient-to-r from-white via-blue-200 to-indigo-300 bg-clip-text text-transparent italic font-serif font-normal">
            worth meeting.
          </span>
        </h3>
        <p className="mt-1.5 text-[9px] sm:text-[9.5px] text-white/60 max-w-[180px] mx-auto leading-relaxed">
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

/* ───────── Circular Metric Ring (Mobile-optimized) ───────── */
function MetricRing({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className="radial-progress text-accent text-[14px] sm:text-[15px] font-bold"
        style={{ "--value": parseInt(value), "--size": "4rem", "--thickness": "4px" } as React.CSSProperties}
        role="progressbar"
      >
        {value}%
      </div>
      <span className="text-[11px] sm:text-[12px] text-white/60 font-semibold">{label}</span>
    </div>
  );
}

export default function Landing() {
  return (
    <div className="min-h-dvh overflow-x-clip bg-[#0b0b0c] text-white selection:bg-[#3E6FE8]/30 font-sans">
      <LandingNav />

      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section className="relative px-4 sm:px-5 pt-24 pb-8 sm:pt-36 md:pt-40 md:pb-12">
        {/* Ambient glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-[-10rem] h-[30rem] sm:h-[38rem] w-[30rem] sm:w-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(62,111,232,0.25)_0%,rgba(110,91,240,0.12)_60%,transparent_80%)] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.25rem] sm:text-[3rem] md:text-[4.75rem] font-bold leading-[1.08] tracking-[-0.03em]"
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
            className="mx-auto mt-4 sm:mt-5 max-w-[34rem] text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed text-white/70"
          >
            Verified track records of top exam rankers, master tutors, tech leaders, and civic figures. Book 1:1 advisory calls, join head-table discussions, and learn from those who cracked what you aim for.
          </motion.p>

          {/* Claim Handle Bar (Mobile Responsive) */}
          <motion.form
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mx-auto mt-6 sm:mt-8 flex flex-col sm:flex-row max-w-md items-stretch sm:items-center gap-2 rounded-2xl sm:rounded-full border border-white/15 bg-white/[0.04] p-2 sm:p-1.5 sm:pl-5 backdrop-blur-2xl shadow-xl ring-1 ring-white/10"
          >
            <div className="flex items-center gap-1 px-3 py-1 sm:p-0">
              <span className="select-none text-[12.5px] sm:text-[13.5px] font-mono text-white/40">vetta.network/</span>
              <input
                aria-label="Choose your handle"
                placeholder="yourname"
                className="min-w-0 flex-1 bg-transparent text-[13px] sm:text-[13.5px] text-white outline-none placeholder:text-white/30"
              />
            </div>
            <Link href="/login" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto !px-5 !py-2.5 whitespace-nowrap !text-[13px] !bg-gradient-to-r !from-[#3E6FE8] !to-[#6E5BF0] hover:!from-[#3361d6] hover:!to-[#5d4be0] !text-white font-semibold shadow-lg shadow-indigo-900/40 rounded-xl sm:rounded-full">
                Claim handle <ArrowRight size={14} className="ml-1" />
              </Button>
            </Link>
          </motion.form>

          {/* Micro Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-5 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-[11.5px] sm:text-[12px] text-white/50"
          >
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-accent" /> Exam Cracked Rankers & Tutors
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sliders size={13} className="text-violet" /> Verified Leaders & Executives
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock size={13} className="text-accent" /> Direct 1:1 Mentorship Access
            </span>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ PHONE SHOWCASE WITH FLOATING BADGES ═══════════════════ */}
      <section className="relative px-4 sm:px-5 py-6 sm:py-14 overflow-visible">
        <div className="relative mx-auto max-w-5xl flex flex-col items-center justify-center">
          {/* Hero Phone displaying Vetta Brand Splash */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-[290px] sm:max-w-none"
          >
            <PhoneFrame>
              <VettaHeroPhoneSplash />
            </PhoneFrame>
          </motion.div>

          {/* ─── Floating Badges Surrounding Hero Phone (Visible on Desktop/Tablet) ─── */}

          {/* Top-Left: Rating Badge */}
          <FloatingBadge className="left-[2%] top-[5%] md:left-[8%] md:top-[8%] hidden lg:block" delay={0.5} x={-20}>
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
          <FloatingBadge className="right-[2%] top-[3%] md:right-[6%] md:top-[5%] hidden lg:block" delay={0.6} x={20}>
            <div className="flex items-center gap-2 rounded-2xl border border-emerald-500/25 bg-emerald-500/10 backdrop-blur-xl px-4 py-2.5 shadow-xl">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[12px] font-bold text-emerald-300">400+</span>
              <span className="text-[10px] text-emerald-200/60">mentors active</span>
            </div>
          </FloatingBadge>

          {/* Left: 1:1 Session call preview card */}
          <FloatingBadge className="left-[-2%] top-[40%] md:left-[3%] hidden lg:block" delay={0.7} x={-25}>
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
          <FloatingBadge className="right-[-2%] top-[38%] md:right-[3%] hidden lg:block" delay={0.75} x={25}>
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

          {/* Mobile Stats Pills below Phone Frame */}
          <div className="flex lg:hidden flex-wrap items-center justify-center gap-2 mt-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold text-white">
              <Star size={11} fill="#f5b14c" className="text-amber-400" /> 4.9 Rating
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-[11px] font-semibold text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> 400+ Mentors
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#3E6FE8]/30 bg-[#3E6FE8]/10 px-3 py-1.5 text-[11px] font-semibold text-blue-300">
              <Zap size={11} /> 98% Signal
            </span>
          </div>
        </div>

        {/* Quick Nav Anchors */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] font-medium text-white/40 tracking-wide">
          <a href="#sessions" className="hover:text-white transition-colors">Sessions</a>
          <a href="#roundtables" className="hover:text-white transition-colors">Roundtables</a>
          <a href="#notes" className="hover:text-white transition-colors">Notes</a>
          <a href="#vetting" className="hover:text-white transition-colors">Vetting</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>
      </section>

      {/* ═══════════════════ MARQUEE BRAND WALL ═══════════════════ */}
      <section className="relative border-y border-white/10 bg-white/[0.01] py-8 sm:py-10 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24 bg-gradient-to-r from-[#0b0b0c] to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24 bg-gradient-to-l from-[#0b0b0c] to-transparent" />

        <div className="text-center mb-5 sm:mb-6 px-4">
          <p className="text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">
            Loved by Mentees & Trusted by Top Rankers
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="anim-marquee flex w-max gap-3 px-4">
            {WALL.map((l, i) => (
              <div
                key={l.handle + i}
                className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-3.5 py-2 sm:px-4 sm:py-2.5 backdrop-blur-md hover:border-white/15 transition-colors"
              >
                <Avatar name={l.name} size={30} />
                <div>
                  <div className="flex items-center gap-1 whitespace-nowrap text-[11.5px] sm:text-[12px] font-semibold text-white">
                    {l.name} <Verified size={10} />
                  </div>
                  <div className="whitespace-nowrap text-[9.5px] sm:text-[10px] text-white/45">{l.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ FEATURE 1: Take your live mentorship to the next level ═══════════════════ */}
      <section id="sessions" className="mx-auto max-w-6xl px-4 sm:px-5 py-14 sm:py-20 md:py-28">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">
          {/* UI Box on Left */}
          <div className="rounded-2xl sm:rounded-[32px] border border-white/10 bg-gradient-to-b from-[#141727] via-[#101322] to-[#0b0b0c] p-4 sm:p-6 md:p-8 shadow-2xl">
            <div className="rounded-xl sm:rounded-2xl bg-[#1b1f33] border border-white/10 p-4 sm:p-5 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="badge badge-warning gap-1 text-[9.5px] sm:text-[10px] font-bold">1:1 Call</span>
                <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-amber-300 font-semibold">
                  <Star size={10} fill="currentColor" /> 4.9 (102 reviews)
                </div>
              </div>

              <div className="mt-3 sm:mt-4 flex items-center gap-3">
                <Avatar name="Aaditya Deshmukh" size={42} ring />
                <div>
                  <div className="flex items-center gap-1 text-[13.5px] sm:text-[15px] font-bold text-white">
                    Aaditya Deshmukh <Verified size={12} />
                  </div>
                  <div className="text-[10.5px] sm:text-[11.5px] text-white/60">UPSC CSE AIR 4 · IAS & Policy Fellow</div>
                </div>
              </div>

              <div className="mt-3 sm:mt-4 border-t border-white/10 pt-3 flex flex-wrap items-center justify-between text-[11px] sm:text-[12px] text-white/70 gap-2">
                <span className="flex items-center gap-1.5"><Clock size={12} className="text-accent" /> 50 min Deep Dive</span>
                <span className="font-bold text-white">₹2,500</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white/[0.04] border border-white/8 p-3 sm:p-4 text-center">
                <div className="text-[18px] sm:text-[20px] font-bold text-white">15k+</div>
                <div className="text-[10px] sm:text-[11px] text-white/50">Hours Delivered</div>
              </div>
              <div className="rounded-xl bg-white/[0.04] border border-white/8 p-3 sm:p-4 text-center">
                <div className="text-[18px] sm:text-[20px] font-bold text-white">100%</div>
                <div className="text-[10px] sm:text-[11px] text-white/50">Verified Ranks</div>
              </div>
            </div>
          </div>

          {/* Text on Right */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-0.5 sm:px-3.5 sm:py-1 text-[10.5px] sm:text-[11.5px] font-semibold text-accent uppercase tracking-widest">
              <Video size={12} /> Direct Advisory
            </div>
            <h2 className="mt-3 sm:mt-4 text-[1.85rem] sm:text-[2.25rem] md:text-[3.25rem] font-bold leading-tight tracking-tight">
              Take your live mentorship<br />
              <span className="font-serif italic font-normal text-indigo-300">to the next level.</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-[14px] sm:text-[15.5px] leading-relaxed text-white/70">
              Connect 1:1 with verified UPSC/GATE toppers, master tutors, and engineering CTOs. Get pre-session agenda tools, video calling, and automatic AI summary action items.
            </p>

            <ul className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3">
              {[
                "Invite multiple hosts and co-mentors to your sessions",
                "50-minute structured strategy calls with agenda notes",
                "Verified credentials & certificates on every profile",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[12.5px] sm:text-[13.5px] text-white/85">
                  <CheckCircle2 size={15} className="text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 sm:mt-8">
              <Link href="/discover">
                <Button className="w-full sm:w-auto !vgrad !text-white font-semibold !px-6 !py-3">
                  Find a Mentor <ArrowRight size={15} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FEATURE 2: Go live everywhere at once ═══════════════════ */}
      <section id="roundtables" className="mx-auto max-w-6xl px-4 sm:px-5 py-14 sm:py-20 md:py-28 border-t border-white/8">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text on Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-0.5 sm:px-3.5 sm:py-1 text-[10.5px] sm:text-[11.5px] font-semibold text-violet-300 uppercase tracking-widest">
              <Radio size={12} /> Multi-Host Audio
            </div>
            <h2 className="mt-3 sm:mt-4 text-[1.85rem] sm:text-[2.25rem] md:text-[3.25rem] font-bold leading-tight tracking-tight">
              Go live everywhere<br />
              <span className="font-serif italic font-normal text-indigo-300">at once.</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-[14px] sm:text-[15.5px] leading-relaxed text-white/70">
              Host head-table audio discussions with multiple speakers, stream live Q&A sessions to your followers, and record automatically for post-event notes and insights.
            </p>

            <ul className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3">
              {[
                "Live head-table audio rooms with instant Q&A",
                "Broadcasting options & automated transcript generation",
                "Replays accessible anytime for community members",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[12.5px] sm:text-[13.5px] text-white/85">
                  <CheckCircle2 size={15} className="text-violet-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 sm:mt-8">
              <Link href="/discover">
                <Button variant="ghost" className="w-full sm:w-auto !border-white/20 !text-white hover:!bg-white/10 !px-6 !py-3">
                  Explore Roundtables <ArrowRight size={15} />
                </Button>
              </Link>
            </div>
          </div>

          {/* UI Box on Right */}
          <div className="rounded-2xl sm:rounded-[32px] border border-white/10 bg-gradient-to-b from-[#19152b] via-[#121424] to-[#0b0b0c] p-4 sm:p-6 md:p-8 shadow-2xl">
            <div className="flex items-center justify-between rounded-xl sm:rounded-2xl bg-white/[0.05] border border-white/10 p-3.5 sm:p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-r from-[#3E6FE8] to-[#6E5BF0] text-white">
                  <Radio size={18} />
                </div>
                <div>
                  <div className="text-[13px] sm:text-[14px] font-bold text-white">Live Roundtable Series</div>
                  <div className="text-[10px] sm:text-[11px] text-white/50">312 listening live</div>
                </div>
              </div>
              <span className="badge badge-error gap-1 text-[9.5px] sm:text-[10px] font-bold">LIVE</span>
            </div>

            <div className="mt-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/8 p-3.5 sm:p-4">
              <div className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-violet-300 mb-2">Head Table Speakers</div>
              <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                <Avatar name="Aaditya Deshmukh" size={34} ring />
                <Avatar name="Prof. Priya Sharma" size={34} ring />
                <Avatar name="Rohan Verma" size={34} ring />
                <span className="text-[10.5px] sm:text-[11px] text-white/50 font-semibold">+ 309 in audience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FEATURE 3: Achieving Superior Industry Benchmarks ═══════════════════ */}
      <section id="vetting" className="mx-auto max-w-6xl px-4 sm:px-5 py-14 sm:py-20 md:py-28 border-t border-white/8">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column: Heading & Stats */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 sm:px-3.5 sm:py-1 text-[10.5px] sm:text-[11.5px] font-semibold text-emerald-300 uppercase tracking-widest">
              <TrendingUp size={12} /> Verified Performance
            </div>
            <h2 className="mt-3 sm:mt-4 text-[1.85rem] sm:text-[2.25rem] md:text-[3.25rem] font-bold leading-tight tracking-tight">
              Achieving Superior<br />
              <span className="font-serif italic font-normal text-indigo-300">Industry Benchmarks.</span>
            </h2>

            {/* 3 Metric Rows */}
            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 font-bold shrink-0">
                  <Check size={18} />
                </div>
                <div>
                  <div className="text-[22px] sm:text-[26px] font-bold text-white leading-none">400+ Mentors</div>
                  <div className="mt-1 text-[12px] sm:text-[13px] text-white/60">Verified rankers & top tier tutors</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400 font-bold shrink-0">
                  <Zap size={18} />
                </div>
                <div>
                  <div className="text-[22px] sm:text-[26px] font-bold text-white leading-none">98% Satisfaction</div>
                  <div className="mt-1 text-[12px] sm:text-[13px] text-white/60">Rated 4.9/5 across 15k+ advisory hours</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-accent/20 text-accent font-bold shrink-0">
                  <Globe size={18} />
                </div>
                <div>
                  <div className="text-[22px] sm:text-[26px] font-bold text-white leading-none">15,000+ Hours</div>
                  <div className="mt-1 text-[12px] sm:text-[13px] text-white/60">Direct practitioner advisory delivered</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Luminary Card */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[32px] border border-white/10 bg-gradient-to-b from-[#12172a] via-[#101426] to-[#0b0b0c] p-5 sm:p-8 md:p-12 shadow-2xl">
            <div aria-hidden className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#6E5BF0]/15 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <Avatar name="Aaditya Deshmukh" size={60} ring />
              <div className="mt-3 sm:mt-4 flex items-center gap-2">
                <h3 className="text-[18px] sm:text-[22px] font-bold text-white">Aaditya Deshmukh</h3>
                <Verified size={16} />
              </div>
              <p className="text-[12px] sm:text-[13px] font-semibold text-accent">UPSC CSE AIR 4 · IAS & Policy Fellow</p>
              <p className="mt-2.5 sm:mt-3 text-[13px] sm:text-[14px] leading-relaxed text-white/70">
                "Vetta allows me to connect directly with serious UPSC aspirants, giving them structured 1:1 strategy without sales noise."
              </p>
              <div className="mt-5 sm:mt-6 flex items-center justify-between border-t border-white/10 pt-3.5 text-[11.5px] sm:text-[12px] text-white/50">
                <span>⭐ 4.9 · 102 Sessions</span>
                <Link href="/book/aaditya-deshmukh">
                  <span className="font-bold text-accent hover:underline">Book 1:1 Call →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FEATURE 4: Circular Metric Progress ═══════════════════ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-5 py-12 sm:py-16 border-t border-white/8">
        <div className="rounded-2xl sm:rounded-[32px] border border-white/10 bg-white/[0.02] p-6 sm:p-8 md:p-12 text-center">
          <div className="text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-2">Verified Benchmarks</div>
          <h3 className="text-[18px] sm:text-[22px] md:text-[28px] font-bold text-white">
            Actionable signal for exam & career performance
          </h3>
          <p className="mt-2 text-[13px] sm:text-[14px] text-white/60 max-w-xl mx-auto">
            Our network metrics ensure every session delivers measurable outcome and clarity.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-20">
            <MetricRing value="89" label="Exam Speed & Strategy" />
            <MetricRing value="72" label="Career Rank Scale" />
            <MetricRing value="79" label="Practitioner Signal" />
          </div>
        </div>
      </section>

      {/* ═══════════════════ PRICING SECTION ═══════════════════ */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 sm:px-5 py-14 sm:py-20 md:py-28 border-t border-white/8">
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-0.5 sm:px-3.5 sm:py-1 text-[10.5px] sm:text-[11.5px] font-semibold text-accent uppercase tracking-widest mb-3">
            Transparent Pricing
          </div>
          <h2 className="text-[1.85rem] sm:text-[2.25rem] md:text-[3.25rem] font-bold tracking-tight">
            Simple plans for <span className="font-serif italic font-normal text-indigo-300">every stage.</span>
          </h2>
          <p className="mt-2.5 sm:mt-3 text-[14px] sm:text-[15px] text-white/65">
            Choose how you connect. No hidden fees or recurring subscriptions required for booking sessions.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
          {/* Tier 1: Aspirant / Member */}
          <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-white/50">Free Member</div>
              <div className="mt-3 sm:mt-4 flex items-baseline gap-1">
                <span className="text-[32px] sm:text-[36px] font-bold text-white">₹0</span>
                <span className="text-[12px] sm:text-[13px] text-white/40">/ forever</span>
              </div>
              <p className="mt-2 text-[12.5px] sm:text-[13px] text-white/60 leading-relaxed">
                For students, aspirants, and learners exploring top mentors.
              </p>

              <ul className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3 border-t border-white/8 pt-4 sm:pt-5 text-[12.5px] sm:text-[13px] text-white/80">
                <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Browse 400+ verified mentors</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Join live public Roundtables</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Read practitioner Notes</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Pay only per 1:1 session booked</li>
              </ul>
            </div>
            <div className="mt-6 sm:mt-8">
              <Link href="/login" className="w-full">
                <button className="w-full btn btn-ghost rounded-full border-white/20 text-white hover:bg-white/10 text-[13px]">
                  Get Started Free
                </button>
              </Link>
            </div>
          </div>

          {/* Tier 2: 1:1 Sessions (Most Popular) */}
          <div className="rounded-2xl sm:rounded-3xl border border-[#3E6FE8]/40 bg-gradient-to-b from-[#161c36] via-[#121528] to-[#0d0f1c] p-6 sm:p-7 flex flex-col justify-between shadow-2xl relative ring-1 ring-white/15">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#3E6FE8] to-[#6E5BF0] px-3.5 py-0.5 text-[10px] sm:text-[10.5px] font-bold text-white uppercase tracking-wider shadow-md">
              Most Popular
            </div>

            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-accent">1:1 Advisory Sessions</div>
              <div className="mt-3 sm:mt-4 flex items-baseline gap-1">
                <span className="text-[30px] sm:text-[36px] font-bold text-white">from ₹1,500</span>
                <span className="text-[12px] sm:text-[13px] text-white/40">/ call</span>
              </div>
              <p className="mt-2 text-[12.5px] sm:text-[13px] text-white/70 leading-relaxed">
                Direct 50-minute video strategy call with your chosen topper or leader.
              </p>

              <ul className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3 border-t border-white/10 pt-4 sm:pt-5 text-[12.5px] sm:text-[13px] text-white/90">
                <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> 50-min private 1:1 video call</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Custom pre-session agenda submit</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> AI transcript & action item summary</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> 100% money-back satisfaction policy</li>
              </ul>
            </div>
            <div className="mt-6 sm:mt-8">
              <Link href="/discover" className="w-full">
                <button className="w-full btn btn-primary rounded-full bg-gradient-to-r from-[#3E6FE8] to-[#6E5BF0] border-0 text-white font-semibold text-[13px] shadow-lg hover:brightness-110">
                  Find a Mentor & Book →
                </button>
              </Link>
            </div>
          </div>

          {/* Tier 3: Verified Luminary */}
          <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-violet-300">Luminary Partner</div>
              <div className="mt-3 sm:mt-4 flex items-baseline gap-1">
                <span className="text-[32px] sm:text-[36px] font-bold text-white">Verified</span>
                <span className="text-[12px] sm:text-[13px] text-white/40">/ profile</span>
              </div>
              <p className="mt-2 text-[12.5px] sm:text-[13px] text-white/60 leading-relaxed">
                For exam toppers, master tutors, and executives offering advisory.
              </p>

              <ul className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3 border-t border-white/8 pt-4 sm:pt-5 text-[12.5px] sm:text-[13px] text-white/80">
                <li className="flex items-center gap-2"><Check size={14} className="text-violet-400" /> Set your own 1:1 session rates</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-violet-400" /> Host live audio Roundtables</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-violet-400" /> Publish practitioner Notes</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-violet-400" /> Verified badge on profile</li>
              </ul>
            </div>
            <div className="mt-6 sm:mt-8">
              <Link href="/apply" className="w-full">
                <button className="w-full btn btn-ghost rounded-full border-white/20 text-white hover:bg-white/10 text-[13px]">
                  Apply as Luminary
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 6: The latest from our blog & Notes ═══════════════════ */}
      <section id="notes" className="mx-auto max-w-6xl px-4 sm:px-5 py-14 sm:py-20 md:py-28 border-t border-white/8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-2">Practitioner Notes</div>
            <h2 className="text-[1.85rem] sm:text-[2rem] md:text-[2.75rem] font-bold tracking-tight">
              The latest from our blog & notes
            </h2>
          </div>
          <Link href="/discover" className="w-full sm:w-auto">
            <Button variant="ghost" className="w-full sm:w-auto !border-white/20 !text-white hover:!bg-white/10 !text-[13px]">
              View All Notes →
            </Button>
          </Link>
        </div>

        {/* 3 Card Grid */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
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
            <div key={n.noteTitle} className="group card bg-white/[0.03] border border-white/8 rounded-2xl sm:rounded-3xl p-5 sm:p-6 hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5">
                  <Avatar name={n.author} size={32} />
                  <div>
                    <div className="flex items-center gap-1 text-[12px] sm:text-[12.5px] font-semibold text-white">
                      {n.author} <Verified size={10} />
                    </div>
                    <div className="text-[9.5px] sm:text-[10px] text-white/50">{n.title}</div>
                  </div>
                </div>
                <h3 className="mt-3.5 sm:mt-4 text-[15px] sm:text-[16.5px] font-bold text-white group-hover:text-accent transition-colors leading-snug">
                  {n.noteTitle}
                </h3>
                <p className="mt-2 text-[12.5px] sm:text-[13px] leading-relaxed text-white/60">{n.desc}</p>
              </div>
              <div className="mt-5 sm:mt-6 flex items-center justify-between border-t border-white/8 pt-3 text-[11px] sm:text-[11.5px] text-white/45">
                <span>{n.reads}</span>
                <span className="font-semibold text-accent group-hover:translate-x-0.5 transition-transform flex items-center gap-1">Read Note →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="border-t border-white/8 bg-[#070708] px-4 sm:px-5 py-8 sm:py-10">
        <div className="mx-auto max-w-6xl flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <Logo wordClass="!text-white" />
            <span className="text-[10.5px] sm:text-[11px] text-white/35">© {new Date().getFullYear()} Vetta Inc. All rights reserved.</span>
          </div>
          <div className="flex gap-4 sm:gap-5 text-[10.5px] sm:text-[11px] text-white/45">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

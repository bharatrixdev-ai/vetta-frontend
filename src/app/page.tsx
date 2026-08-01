"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Globe,
  TrendingUp,
  Video,
  Users,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Star,
  PlayCircle,
  Play,
  Heart,
  MessageCircle,
  Send,
  Link as LinkIcon,
  Radio,
  Wifi,
  BatteryFull,
  MicOff,
  Video as VideoIcon,
  Phone
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
    <div className={`mockup-phone border-black shadow-2xl shadow-purple-900/10 max-w-[280px] sm:max-w-none mx-auto ${className}`}>
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1 !h-auto !min-h-0 bg-[#0f0e13] p-0 overflow-hidden relative">
          {/* Subtle gradient inside phone */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 via-transparent to-transparent pointer-events-none" />
          {children}
        </div>
      </div>
    </div>
  );
}

/* ───────── Vetta Discover Screen (1v1 Video UI) ───────── */
function VettaHeroPhoneSplash() {
  return (
    <div 
      className="w-full text-white pt-2 flex flex-col min-h-[460px] sm:min-h-[500px] relative z-10"
      style={{ backgroundImage: "url('/fashion_live.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Subtle top/bottom overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
      
      {/* iPhone Status Bar */}
      <div className="relative z-20 flex items-center justify-between px-5 py-1 text-[11px] font-semibold text-white tracking-wider">
        <span>9:11</span>
        <div className="flex items-center gap-1.5">
          <div className="flex items-end gap-0.5 h-2.5">
            <div className="w-[3px] h-[3px] bg-white rounded-[1px]" />
            <div className="w-[3px] h-[5px] bg-white rounded-[1px]" />
            <div className="w-[3px] h-[7px] bg-white rounded-[1px]" />
            <div className="w-[3px] h-[10px] bg-white rounded-[1px]" />
          </div>
          <Wifi size={12} strokeWidth={2.5} />
          <BatteryFull size={16} strokeWidth={1.5} className="rotate-90 translate-y-[1px]" />
        </div>
      </div>

      {/* Top Header - 1:1 Session Details */}
      <div className="relative z-20 flex items-center justify-between px-4 mt-2">
        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md rounded-full py-1.5 px-3 border border-white/20 shadow-lg">
          <Avatar name="Aditi Sharma" size={24} imgUrl="/fashion.png" />
          <div className="text-[11px] font-bold text-white tracking-tight">Aditi Sharma</div>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-red-500/90 px-2.5 py-1 text-[9px] font-bold text-white shadow-lg uppercase tracking-widest">
          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" /> 1:1 Call
        </div>
      </div>

      {/* Picture in Picture (Mentee) */}
      <div className="relative z-20 mt-4 mr-4 self-end w-20 h-28 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900">
         <div className="absolute inset-0 flex items-center justify-center">
            <Avatar name="Mentee User" size={80} className="opacity-50 blur-sm" />
         </div>
         <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Bottom Call Controls */}
      <div className="relative z-20 mt-auto px-4 pb-8 w-full flex items-center justify-center gap-4">
         <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
            <MicOff size={20} className="text-white" />
         </div>
         <div className="h-14 w-14 rounded-full bg-red-500 shadow-xl shadow-red-500/30 flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors">
            <Phone size={24} className="text-white rotate-[135deg]" fill="currentColor" />
         </div>
         <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
            <VideoIcon size={20} className="text-white" />
         </div>
      </div>
    </div>
  );
}

/* ───────── Floating Badge Component ───────── */
function FloatingBadge({ children, className = "", delay = 0, x = 0, y = 0 }: any) {
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

export default function Landing() {
  return (
    <div className="min-h-dvh overflow-x-clip bg-white text-[#111111] selection:bg-amber-200 font-sans">
      <LandingNav />

      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section className="relative px-4 pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        {/* Soft elegant background arcs behind phone */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden flex justify-center items-end">
          <div className="absolute bottom-0 w-[800px] h-[400px] border-[1.5px] border-[#e6ddff] rounded-t-full rounded-b-none translate-y-1/4" />
          <div className="absolute bottom-0 w-[1200px] h-[600px] border-[1px] border-[#f0ebff] rounded-t-full rounded-b-none translate-y-1/4" />
          {/* Subtle colored glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-purple-100/50 to-transparent blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.75rem] sm:text-[3.75rem] md:text-[5rem] font-extrabold leading-[1.05] tracking-tight text-[#111111]"
          >
            Meet the Super-fast<br />Expert Network
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mx-auto mt-6 max-w-[36rem] text-[15px] sm:text-[17px] md:text-[19px] leading-relaxed text-slate-500 font-medium"
          >
            Packed with lightning-fast 1:1 advisory video calls, interactive live roundtables, and practitioner notes — All 3x faster than traditional networking.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/login">
              <button className="w-full sm:w-auto rounded-full bg-[#111111] px-8 py-3.5 text-[14px] font-bold text-white shadow-xl shadow-slate-900/10 hover:scale-105 transition-transform">
                Get Started — For free!
              </button>
            </Link>
            <Link href="/discover">
              <button className="w-full sm:w-auto rounded-full border border-slate-300 bg-white px-8 py-3.5 text-[14px] font-bold text-[#111111] shadow-sm hover:bg-slate-50 hover:scale-105 transition-transform">
                Book A Mentor
              </button>
            </Link>
          </motion.div>
        </div>

        {/* ─── PHONE & REELUP-STYLE WIDGETS ─── */}
        <div className="relative mx-auto mt-16 max-w-5xl flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-[260px] sm:w-[300px]"
          >
            <PhoneFrame>
              <VettaHeroPhoneSplash />
            </PhoneFrame>
          </motion.div>

          {/* Left Top Solid Yellow Block */}
          <FloatingBadge className="left-[2%] top-[10%] hidden lg:block" delay={0.5} x={-30}>
            <div className="w-[180px] rounded-[24px] bg-[#ffe600] p-5 shadow-xl shadow-amber-200/50 text-[#111111]">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10">
                <Clock size={20} strokeWidth={2.5} />
              </div>
              <div className="mt-4 text-[32px] font-extrabold leading-none tracking-tight">15k<span className="text-[16px] font-bold">+</span></div>
              <div className="mt-1 text-[11px] font-bold text-black/70">Hours Advisory Delivered</div>
            </div>
          </FloatingBadge>

          {/* Left Bottom White Pill (Share link style) */}
          <FloatingBadge className="left-[12%] bottom-[20%] hidden lg:block" delay={0.6} x={-20}>
            <div className="flex items-center gap-3 rounded-full bg-white p-2.5 pr-6 shadow-xl border border-slate-100">
              <Avatar name="Aditi Sharma" size={40} imgUrl="/fashion.png" />
              <div>
                <div className="text-[12px] font-bold leading-tight">Share mentor<br />booking link</div>
                <div className="mt-1 inline-flex items-center gap-1 rounded bg-[#111111] px-2 py-0.5 text-[9px] font-bold text-white">
                  Get Link
                </div>
              </div>
            </div>
          </FloatingBadge>

          {/* Right Top Light White Card (Shoe equivalent) */}
          <FloatingBadge className="right-[5%] top-[15%] hidden lg:block" delay={0.6} x={30}>
            <div className="w-[160px] rounded-3xl bg-white p-3 shadow-2xl border border-slate-100 text-[#111111]">
              <div className="h-32 w-full rounded-2xl bg-[#e6ddff] flex items-center justify-center overflow-hidden relative">
                 <Avatar name="Kriti Verma" size={80} className="translate-y-4" />
              </div>
              <div className="mt-3 px-1 pb-1">
                <div className="text-[12px] font-bold">Style Creators</div>
                <div className="text-[11px] font-bold text-slate-500 mt-0.5">from ₹1500</div>
              </div>
            </div>
          </FloatingBadge>

          {/* Right Bottom Solid Orange Block */}
          <FloatingBadge className="right-[8%] bottom-[25%] hidden lg:block" delay={0.75} x={20}>
            <div className="w-[160px] rounded-[24px] bg-[#ff7b47] p-5 shadow-xl shadow-orange-500/30 text-white flex flex-col justify-between h-[150px]">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20">
                <Globe size={20} strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-[32px] font-extrabold leading-none tracking-tight">400+</div>
                <div className="mt-1 text-[10px] font-bold text-white/80 uppercase tracking-wide">Verified Mentors</div>
              </div>
            </div>
          </FloatingBadge>

          {/* Mobile badges */}
          <div className="flex lg:hidden flex-wrap items-center justify-center gap-2 mt-8 z-20">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ffe600] text-black px-4 py-2 text-[12px] font-bold shadow-md">
              <Clock size={14} /> 15k+ Hours
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ff7b47] text-white px-4 py-2 text-[12px] font-bold shadow-md">
              <Globe size={14} /> 400+ Mentors
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════ MARQUEE BRAND WALL ═══════════════════ */}
      <section className="relative bg-white py-10 overflow-hidden border-b border-slate-100">
        <div className="overflow-hidden">
          <div className="anim-marquee flex w-max gap-12 px-4 items-center">
            {WALL.map((l, i) => (
              <div
                key={l.handle + i}
                className="flex items-center gap-2 grayscale opacity-50 font-sans font-bold text-[18px] sm:text-[22px] tracking-tight uppercase"
              >
                {l.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ MASSIVE INTRO HEADLINE ═══════════════════ */}
      <section className="py-20 md:py-32 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] font-extrabold leading-[1.1] tracking-tight text-[#111111]">
          A network platform<br />designed for growth
        </h2>
        <p className="mt-6 text-[15px] sm:text-[17px] font-bold text-slate-500">
          Built to engage, unblock, and amaze you with an all-in-one verified advisory platform
        </p>
      </section>

      {/* ═══════════════════ SECTION 1: 1:1 Sessions (Purple Block) ═══════════════════ */}
      <section id="sessions" className="px-4 pb-20 md:pb-32 max-w-6xl mx-auto">
        <div className="rounded-[40px] md:rounded-[64px] bg-[#e6ddff] p-6 sm:p-12 md:p-16 relative overflow-hidden flex flex-col md:flex-row gap-10 md:items-center">
          {/* Inner Yellow Widget matching the "20X" block */}
          <div className="hidden lg:flex absolute left-12 top-12 w-[160px] h-[160px] rounded-[24px] bg-[#ffe600] p-5 flex-col justify-between shadow-xl z-20">
            <div className="text-[10px] font-bold uppercase tracking-widest text-black/50">UP TO</div>
            <div className="text-[48px] font-extrabold leading-none tracking-tight">20X</div>
            <div className="text-[12px] font-bold leading-tight mt-2">Jump in problem resolution</div>
          </div>

          <div className="w-full md:w-1/2 relative z-10 flex justify-center md:justify-start">
             {/* Large Video Mockup Card */}
             <div className="w-full max-w-[340px] rounded-[32px] overflow-hidden shadow-2xl relative bg-white lg:ml-20 mt-8 lg:mt-0">
               <div className="h-[280px] bg-gradient-to-br from-indigo-500 to-purple-700 relative flex items-center justify-center">
                 <Avatar name="Aditi Sharma" size={100} className="border-4 border-white shadow-xl" imgUrl="/fashion.png" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-14 w-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:bg-white/30 transition-colors">
                      <Play size={24} fill="currentColor" className="ml-1" />
                    </div>
                 </div>
               </div>
               <div className="p-5 flex items-center justify-between">
                 <div>
                   <div className="font-extrabold text-[16px]">Aditi Sharma</div>
                   <div className="text-[12px] font-bold text-slate-500">Brand Strategy Call</div>
                 </div>
                 <div className="rounded-full bg-[#111111] px-4 py-2 text-[12px] font-bold text-white">Book Call</div>
               </div>
             </div>
          </div>

          <div className="w-full md:w-1/2 relative z-10 lg:pl-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest">
              1:1 Sessions
            </div>
            <h3 className="mt-6 text-[2.5rem] sm:text-[3rem] font-extrabold leading-[1.05] tracking-tight text-[#111111]">
              Direct Video<br />Advisory
            </h3>
            <p className="mt-4 text-[15px] sm:text-[16px] font-bold text-slate-700 leading-relaxed max-w-sm">
              Connect 1:1 with verified fashion designers, brand strategists, and top creative directors. Ask exactly what you need to scale your label.
            </p>
            <div className="mt-8">
              <button className="rounded-full bg-[#111111] px-6 py-3 text-[14px] font-bold text-white shadow-md hover:scale-105 transition-transform">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 2: Roundtables (Yellow Block) ═══════════════════ */}
      <section id="roundtables" className="px-4 pb-20 md:pb-32 max-w-6xl mx-auto">
        <div className="rounded-[40px] md:rounded-[64px] bg-[#fceaaa] p-6 sm:p-12 md:p-16 relative overflow-hidden flex flex-col md:flex-row gap-10 md:items-center">
          
          <div className="w-full md:w-1/2 relative z-10 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest">
              Multi-Host
            </div>
            <h3 className="mt-6 text-[2.5rem] sm:text-[3rem] font-extrabold leading-[1.05] tracking-tight text-[#111111]">
              Go live everywhere<br />at once
            </h3>
            <p className="mt-4 text-[15px] sm:text-[16px] font-bold text-slate-700 leading-relaxed max-w-sm">
              Host head-table audio discussions with multiple speakers, stream live Q&A sessions to your followers, and record automatically.
            </p>
            <div className="mt-8">
              <button className="rounded-full bg-[#111111] px-6 py-3 text-[14px] font-bold text-white shadow-md hover:scale-105 transition-transform">
                Explore Roundtables
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative z-10 order-1 md:order-2 flex justify-center md:justify-end">
             {/* White UI Card matching ReelUp style */}
             <div className="w-full max-w-[340px] rounded-[32px] bg-white p-6 shadow-2xl relative">
               <div className="flex items-center gap-3">
                 <div className="h-12 w-12 rounded-[16px] bg-[#111111] text-white flex items-center justify-center">
                   <Radio size={24} />
                 </div>
                 <div>
                   <div className="text-[14px] font-extrabold text-slate-400 uppercase tracking-widest">Live Room</div>
                   <div className="text-[18px] font-extrabold mt-1">Building a D2C Brand</div>
                 </div>
               </div>
               
               <div className="mt-6 bg-[#f8f9fa] rounded-2xl p-4">
                 <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3">Head Table</div>
                 <div className="flex items-center gap-3">
                   <Avatar name="Aditi Sharma" size={48} ring imgUrl="/fashion.png" />
                   <Avatar name="Tanya Gujral" size={48} ring />
                 </div>
               </div>

               <div className="mt-4 flex items-center justify-between">
                 <div className="flex items-center gap-2 text-[12px] font-bold text-red-500 bg-red-50 px-3 py-1.5 rounded-full">
                   <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" /> Live · 312 Listening
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 3: Notes (Pink Block) ═══════════════════ */}
      <section id="notes" className="px-4 pb-20 md:pb-32 max-w-6xl mx-auto">
        <div className="rounded-[40px] md:rounded-[64px] bg-[#fcd5fa] p-6 sm:p-12 md:p-16 relative overflow-hidden flex flex-col md:flex-row gap-10 md:items-center">
          
          <div className="w-full md:w-1/2 relative z-10 flex justify-center md:justify-start">
             {/* Notes Card Mockup */}
             <div className="w-full max-w-[340px] rounded-[32px] bg-white overflow-hidden shadow-2xl relative">
               <div className="h-[200px] bg-gradient-to-br from-amber-400 to-orange-500 p-6 flex flex-col justify-end">
                 <h4 className="text-white text-[24px] font-extrabold leading-tight">Growing to 100k Followers</h4>
               </div>
               <div className="p-6">
                 <div className="flex items-center gap-3 mb-4">
                   <Avatar name="Aditi Sharma" size={32} imgUrl="/fashion.png" />
                   <span className="text-[14px] font-bold">Aditi Sharma <Verified size={14} className="inline-block text-blue-500" /></span>
                 </div>
                 <p className="text-[13px] font-bold text-slate-500 leading-relaxed mb-6">
                   Organic growth hacks, content aesthetic planning, and monetization tips for new creators...
                 </p>
                 <button className="w-full rounded-full bg-[#111111] py-3 text-[13px] font-bold text-white shadow-md">
                   Read Full Note
                 </button>
               </div>
               
               {/* Tiny overlapping stat badge */}
               <div className="absolute right-[-10px] bottom-24 bg-white shadow-xl rounded-xl p-3 flex flex-col items-center border border-slate-100">
                 <span className="text-[20px] font-extrabold">14k</span>
                 <span className="text-[9px] font-bold text-slate-500">Reads</span>
               </div>
             </div>
          </div>

          <div className="w-full md:w-1/2 relative z-10 lg:pl-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest">
              Practitioner Notes
            </div>
            <h3 className="mt-6 text-[2.5rem] sm:text-[3rem] font-extrabold leading-[1.05] tracking-tight text-[#111111]">
              Read the signal,<br />ignore the noise.
            </h3>
            <p className="mt-4 text-[15px] sm:text-[16px] font-bold text-slate-700 leading-relaxed max-w-sm">
              Concise, practitioner-written insights from top creators and leaders sharing battle-tested frameworks.
            </p>
            <div className="mt-8">
              <button className="rounded-full bg-[#111111] px-6 py-3 text-[14px] font-bold text-white shadow-md hover:scale-105 transition-transform">
                Browse Notes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ BENCHMARKS SECTION ═══════════════════ */}
      <section id="vetting" className="px-4 py-20 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-6">
            Proven Metrics
          </div>
          <h2 className="text-[2.25rem] sm:text-[3rem] font-extrabold leading-tight tracking-tight text-[#111111]">
            Achieving Superior<br />Industry Benchmarks
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#111111] px-4 py-1.5 text-[11px] font-bold text-white">
            <TrendingUp size={14} /> Rated top platform for verified advisory
          </div>
        </div>

        {/* 4 Block Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-12">
          <div className="rounded-[24px] border border-slate-100 bg-white p-6 sm:p-8 shadow-sm flex items-start gap-4">
            <div className="w-2.5 h-2.5 rounded-sm bg-orange-500 mt-2 shrink-0" />
            <div>
              <div className="text-[32px] sm:text-[40px] font-extrabold tracking-tight text-[#111111] leading-none">400+</div>
              <div className="mt-2 text-[12px] font-bold text-slate-500 uppercase">Verified Mentors Active</div>
            </div>
          </div>
          
          <div className="rounded-[24px] border border-slate-100 bg-white p-6 sm:p-8 shadow-sm flex items-start gap-4">
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-transparent border-b-yellow-400 mt-2 shrink-0" />
            <div>
              <div className="text-[32px] sm:text-[40px] font-extrabold tracking-tight text-[#111111] leading-none">50 min</div>
              <div className="mt-2 text-[12px] font-bold text-slate-500 uppercase">Avg 1:1 Session Time</div>
            </div>
          </div>

          <div className="rounded-[24px] border border-slate-100 bg-white p-6 sm:p-8 shadow-sm flex items-start gap-4">
            <div className="w-3 h-3 rounded-full bg-purple-500 mt-2 shrink-0" />
            <div>
              <div className="text-[32px] sm:text-[40px] font-extrabold tracking-tight text-[#111111] leading-none">20X</div>
              <div className="mt-2 text-[12px] font-bold text-slate-500 uppercase">Jump in problem resolution</div>
            </div>
          </div>

          <div className="rounded-[24px] border border-slate-100 bg-white p-6 sm:p-8 shadow-sm flex items-start gap-4">
            <div className="w-2.5 h-2.5 rotate-45 bg-emerald-400 mt-2 shrink-0" />
            <div>
              <div className="text-[32px] sm:text-[40px] font-extrabold tracking-tight text-[#111111] leading-none">98%</div>
              <div className="mt-2 text-[12px] font-bold text-slate-500 uppercase">Satisfaction Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ RESULTS / TESTIMONIALS SECTION ═══════════════════ */}
      <section className="px-4 py-20 md:py-32 max-w-6xl mx-auto border-t border-slate-100">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-6">
            Real Outcomes
          </div>
          <h2 className="text-[2.25rem] sm:text-[3rem] font-extrabold leading-tight tracking-tight text-[#111111]">
            The Results speak for<br />themselves
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Testimonial Card */}
          <div className="rounded-[32px] border border-slate-100 bg-white p-8 sm:p-10 shadow-lg flex flex-col sm:flex-row gap-8">
            <div className="w-[140px] h-[200px] shrink-0 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center">
                <Avatar name="Rahul Singh" size={80} className="border-4 border-white/20" />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h4 className="text-[18px] font-bold text-[#111111] mb-2">"Structured, verified, and exactly what I needed."</h4>
              <p className="text-[14px] font-bold text-slate-500 leading-relaxed mb-6">
                "Great platform! Prompt pre-session agenda tools helped me customize the focus of the call. I solved my brand strategy blockers in 50 minutes flat. Thank you!"
              </p>
              <div>
                <div className="font-extrabold text-[14px]">Rahul S.</div>
                <div className="text-[11px] font-bold text-slate-400 uppercase">Fashion Entrepreneur</div>
              </div>
            </div>
          </div>

          {/* Metric Stats Cards vertically stacked matching screenshot */}
          <div className="flex flex-col gap-4">
            <div className="rounded-[24px] bg-[#e6ddff] p-6 flex justify-between items-center shadow-sm">
              <div className="text-[12px] font-extrabold uppercase tracking-widest text-purple-900/50">Verified Profiles</div>
              <div className="text-[32px] font-extrabold text-purple-900">400+</div>
            </div>
            <div className="rounded-[24px] bg-[#e3edff] p-6 flex justify-between items-center shadow-sm">
              <div className="text-[12px] font-extrabold uppercase tracking-widest text-blue-900/50">Advisory Hours</div>
              <div className="text-[32px] font-extrabold text-blue-900">15k+</div>
            </div>
            <div className="rounded-[24px] bg-[#fad0ff] p-6 flex justify-between items-center shadow-sm">
              <div className="text-[12px] font-extrabold uppercase tracking-widest text-pink-900/50">Success Rate</div>
              <div className="text-[32px] font-extrabold text-pink-900">98%</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ BLOG / LATEST NOTES ═══════════════════ */}
      <section className="px-4 py-20 max-w-6xl mx-auto border-t border-slate-100">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-6">
            Our Blog
          </div>
          <h2 className="text-[2.25rem] sm:text-[3rem] font-extrabold leading-tight tracking-tight text-[#111111]">
            The latest from our blog
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              author: "Aditi Sharma",
              title: "Creative Director",
              noteTitle: "How I Grew My Brand to 100k Followers",
              color: "from-amber-400 to-orange-500",
              imgUrl: "/fashion.png",
            },
            {
              author: "Priya Sharma",
              title: "D2C Founder",
              noteTitle: "Sourcing Sustainable Fabrics in 2024",
              color: "from-emerald-400 to-teal-500",
            },
            {
              author: "Rohan Verma",
              title: "Marketing Lead",
              noteTitle: "Influencer Marketing Budgets for Bootstrapped Brands",
              color: "from-blue-400 to-indigo-600",
            },
          ].map((n) => (
            <div key={n.noteTitle} className="group cursor-pointer">
              <div className={`h-[180px] rounded-[32px] mb-6 bg-gradient-to-br ${n.color} shadow-lg relative overflow-hidden flex items-center justify-center`}>
                <Avatar name={n.author} size={80} className="border-4 border-white/20 shadow-2xl" imgUrl={n.imgUrl} />
              </div>
              <div className="px-2">
                <div className="flex items-center gap-2 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-3">
                  <span>{n.title}</span> • <span>5 MIN READ</span>
                </div>
                <h3 className="text-[20px] font-extrabold text-[#111111] group-hover:text-blue-600 transition-colors leading-tight">
                  {n.noteTitle}
                </h3>
                <div className="mt-6 flex items-center gap-2 text-[12px] font-extrabold text-[#111111]">
                  Read Story <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="border-t border-slate-100 bg-white px-4 py-12 mt-10">
        <div className="mx-auto max-w-6xl flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <Logo wordClass="!text-[#111111]" />
          </div>
          <div className="flex gap-6 text-[12px] font-bold text-slate-500">
            <Link href="/privacy" className="hover:text-[#111111] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#111111] transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-[#111111] transition-colors">Contact Us</Link>
          </div>
          <div className="text-[11px] font-bold text-slate-400">
            © {new Date().getFullYear()} Vetta Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

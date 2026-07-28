"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Download,
  FileText,
  Maximize2,
  MessageSquare,
  Mic,
  MicOff,
  MonitorUp,
  MoreHorizontal,
  PenLine,
  PhoneOff,
  Send,
  Sparkles,
  Video,
  VideoOff,
  Wifi,
  X,
} from "lucide-react";
import { Avatar } from "@/components/Avatar";
import { Button, Verified } from "@/components/ui";
import { byHandle, CURRENT_USER, INTELLIGENCE_FEED } from "@/lib/data";
import { cn } from "@/lib/utils";

const SARAH = byHandle("sarah-kim")!;
const TOTAL_MIN = 50;

/* ═══════════════ Green Room ═══════════════ */

function GreenRoom({ onEnter }: { onEnter: () => void }) {
  const [count, setCount] = useState(151);
  const [agenda, setAgenda] = useState([
    "Clinical practice → research: realistic 18-month path?",
    "Which of my 3 shortlisted labs fits best?",
    "Publishing without a PhD — where to start?",
  ]);
  const [mic, setMic] = useState(true);
  const [cam, setCam] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setCount((c) => Math.max(0, c - 1)), 1000);
    return () => clearInterval(t);
  }, []);

  const mm = String(Math.floor(count / 60)).padStart(2, "0");
  const ss = String(count % 60).padStart(2, "0");

  return (
    <div className="stage-dark relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-[#08090c] px-5 py-10">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="orb orb-a left-1/2 top-[-10rem] h-[26rem] w-[26rem] -translate-x-1/2 opacity-30" />
        <div className="orb orb-b bottom-[-8rem] right-[-4rem] h-[22rem] w-[22rem] opacity-25" />
      </div>

      <div className="relative w-full max-w-3xl">
        <div className="text-center">
          <div className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-faint">
            Green Room
          </div>
          <h1 className="mt-3 text-[26px] font-semibold tracking-[-0.02em] md:text-[32px]">
            Session with {SARAH.name}
          </h1>
          <div className="mt-2 inline-flex items-center gap-1.5 text-[13px] text-mute">
            <Verified size={13} /> {SARAH.title} · Deep Dive · 50 min
          </div>
          <div className="mt-5 text-[46px] font-semibold leading-none tracking-tight tabular-nums vgrad-text">
            {mm}:{ss}
          </div>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-[1.15fr_1fr]">
          <div className="glass overflow-hidden rounded-[26px] p-3">
            <div className="relative overflow-hidden rounded-[18px] bg-gradient-to-br from-[#1e2740] to-[#2c2450] pb-[64%]">
              <div className="absolute inset-0 flex items-center justify-center">
                {cam ? (
                  <Avatar name={CURRENT_USER.name} size={76} />
                ) : (
                  <div className="text-center">
                    <VideoOff size={26} strokeWidth={1.6} className="mx-auto text-faint" />
                    <div className="mt-2 text-[12px] text-faint">Camera off</div>
                  </div>
                )}
              </div>
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2">
                <button
                  aria-label={mic ? "Mute microphone" : "Unmute microphone"}
                  onClick={() => setMic(!mic)}
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-full backdrop-blur transition-all",
                    mic ? "bg-white/15 text-white hover:bg-white/25" : "bg-danger text-white"
                  )}
                >
                  {mic ? <Mic size={16} strokeWidth={1.9} /> : <MicOff size={16} strokeWidth={1.9} />}
                </button>
                <button
                  aria-label={cam ? "Turn camera off" : "Turn camera on"}
                  onClick={() => setCam(!cam)}
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-full backdrop-blur transition-all",
                    cam ? "bg-white/15 text-white hover:bg-white/25" : "bg-danger text-white"
                  )}
                >
                  {cam ? (
                    <Video size={16} strokeWidth={1.9} />
                  ) : (
                    <VideoOff size={16} strokeWidth={1.9} />
                  )}
                </button>
              </div>
            </div>
            <div className="mt-3 space-y-2 px-1 pb-1">
              {[
                ["Microphone", "MacBook Pro Mic"],
                ["Camera", "FaceTime HD"],
                ["Network", "Excellent"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between text-[12.5px]">
                  <span className="text-mute">{k}</span>
                  <span className="inline-flex items-center gap-1.5 text-ink">
                    <span className="h-1.5 w-1.5 rounded-full bg-ok" /> {v}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-[26px] p-5">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 text-[13px] font-semibold">
                <Sparkles size={14} strokeWidth={2} className="text-accent" /> Your agenda
              </div>
              <span className="text-[10.5px] text-faint">feeds Intelligence</span>
            </div>
            <div className="mt-3.5 space-y-2">
              {agenda.map((a, i) => (
                <div key={i} className="flex items-start gap-2.5 rounded-xl bg-wash px-3 py-2.5">
                  <span className="mt-0.5 text-[11px] font-bold text-accent">{i + 1}</span>
                  <input
                    aria-label={`Agenda item ${i + 1}`}
                    value={a}
                    onChange={(e) =>
                      setAgenda((p) => p.map((x, j) => (j === i ? e.target.value : x)))
                    }
                    className="w-full bg-transparent text-[12.5px] leading-snug text-ink outline-none"
                  />
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-xl bg-ok/10 px-3 py-2.5 text-[12px] text-ok">
              <span className="anim-pulse-soft h-1.5 w-1.5 rounded-full bg-ok" />
              {SARAH.short} is in the Green Room
            </div>
          </div>
        </div>

        <div className="mt-9 text-center">
          <Button className="!px-10 !py-3.5 !text-[15px]" onClick={onEnter}>
            Enter when ready
          </Button>
          <div className="mt-4">
            <Link
              href="/app"
              className="inline-flex items-center gap-1.5 text-[12.5px] text-faint hover:text-mute"
            >
              <ArrowLeft size={13} strokeWidth={2} /> Back home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════ Session Room ═══════════════ */

type PanelTab = "intel" | "transcript" | "notes" | "chat";

function TimerRing({ pct, warn }: { pct: number; warn: boolean }) {
  const r = 27;
  const c = 2 * Math.PI * r;
  return (
    <svg
      className="pointer-events-none absolute -inset-2 h-[calc(100%+16px)] w-[calc(100%+16px)] -rotate-90"
      viewBox="0 0 60 60"
      aria-hidden
    >
      <circle cx="30" cy="30" r={r} fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="2" />
      <circle
        cx="30"
        cy="30"
        r={r}
        fill="none"
        stroke={warn ? "#f5b14c" : "url(#ringg)"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - pct)}
        className="transition-all duration-1000 ease-linear"
      />
      <defs>
        <linearGradient id="ringg" x1="0" y1="0" x2="60" y2="60">
          <stop stopColor="#4F8DFF" />
          <stop offset="1" stopColor="#7C6FFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SpeakingBars({ active }: { active: boolean }) {
  return (
    <span className="flex items-end gap-[2px]" aria-hidden>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-[2.5px] rounded-full bg-ok transition-all duration-300"
          style={{
            height: active ? `${[7, 12, 9][i]}px` : "4px",
            opacity: active ? 1 : 0.3,
            animation: active ? `pulseSoft ${0.5 + i * 0.15}s ease-in-out infinite` : undefined,
          }}
        />
      ))}
    </span>
  );
}

function Room({ onEnd }: { onEnd: () => void }) {
  const [sec, setSec] = useState(22 * 60);
  const [chrome, setChrome] = useState(true);
  const [idCard, setIdCard] = useState(true);
  const [panel, setPanel] = useState<PanelTab | null>(null);
  const [mic, setMic] = useState(true);
  const [cam, setCam] = useState(true);
  const [sharing, setSharing] = useState(false);
  const [pipCorner, setPipCorner] = useState<0 | 1 | 2 | 3>(1);
  const [intelCount, setIntelCount] = useState(2);
  const [showExtend, setShowExtend] = useState(false);
  const [theyreTalking, setTheyreTalking] = useState(true);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const t = setInterval(() => setSec((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setIdCard(false), 3400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = setInterval(
      () => setIntelCount((c) => Math.min(INTELLIGENCE_FEED.length, c + 1)),
      7000
    );
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTheyreTalking((v) => !v), 4200);
    return () => clearInterval(t);
  }, []);

  const poke = useCallback(() => {
    setChrome(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setChrome(false), 3200);
  }, []);

  useEffect(() => {
    poke();
    window.addEventListener("mousemove", poke);
    window.addEventListener("touchstart", poke);
    window.addEventListener("keydown", poke);
    return () => {
      window.removeEventListener("mousemove", poke);
      window.removeEventListener("touchstart", poke);
      window.removeEventListener("keydown", poke);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [poke]);

  useEffect(() => {
    if (sec >= 45 * 60 && !showExtend) setShowExtend(true);
  }, [sec, showExtend]);

  const min = Math.floor(sec / 60);
  const left = Math.max(0, TOTAL_MIN - min);
  const pct = Math.min(1, sec / (TOTAL_MIN * 60));
  const warn = left <= 5;

  const CORNERS = ["left-4 top-4", "right-4 bottom-4", "left-4 bottom-4", "right-4 top-4"] as const;

  const Ctl = ({
    on = true,
    danger,
    label,
    onClick,
    children,
  }: {
    on?: boolean;
    danger?: boolean;
    label: string;
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <button
      aria-label={label}
      onClick={onClick}
      className={cn(
        "flex h-[52px] w-[52px] items-center justify-center rounded-full transition-all duration-200 hover:-translate-y-1 active:scale-95",
        danger
          ? "bg-danger text-white shadow-[0_8px_24px_rgba(255,93,93,0.45)] hover:brightness-110"
          : on
          ? "bg-white/[0.14] text-white backdrop-blur hover:bg-white/25"
          : "bg-white text-[#0b0b0c]"
      )}
    >
      {children}
    </button>
  );

  return (
    <div className="stage-dark relative min-h-dvh overflow-hidden bg-black">
      {/* Stage */}
      <div
        className={cn(
          "absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] md:inset-4",
          panel && "md:right-[372px]"
        )}
      >
        <div
          className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#1d3358] via-[#282a4e] to-[#372a63] md:rounded-[28px]"
          onClick={() => setIdCard((v) => !v)}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={cn(
                "rounded-full transition-all duration-500",
                theyreTalking && !sharing && "anim-speak"
              )}
            >
              <Avatar name={SARAH.name} size={148} />
            </div>
          </div>

          {sharing && (
            <div className="anim-fade-in absolute inset-0 flex items-center justify-center bg-[#0d1016]">
              <div className="text-center">
                <MonitorUp size={38} strokeWidth={1.5} className="mx-auto text-accent" />
                <div className="mt-3 text-[14px] font-medium">You&apos;re sharing your screen</div>
                <div className="mt-1 text-[12.5px] text-faint">
                  {SARAH.short} can see everything on this display
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSharing(false);
                  }}
                  className="mt-5 rounded-full bg-danger px-5 py-2 text-[13px] font-semibold text-white"
                >
                  Stop sharing
                </button>
              </div>
            </div>
          )}

          {/* Top chrome */}
          <div
            className={cn(
              "pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-4 transition-opacity duration-500",
              chrome || idCard ? "opacity-100" : "opacity-0"
            )}
          >
            <div
              className={cn(
                "glass-strong pointer-events-auto flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 transition-all duration-500",
                idCard ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
              )}
            >
              <Avatar name={SARAH.name} size={34} />
              <div>
                <div className="flex items-center gap-1.5 text-[13px] font-semibold">
                  {SARAH.name} <Verified size={12} />
                </div>
                <div className="text-[11px] text-mute">
                  {SARAH.title} · ★ {SARAH.rating.toFixed(1)}
                </div>
              </div>
              <SpeakingBars active={theyreTalking && !sharing} />
            </div>

            <div className="pointer-events-auto flex items-center gap-2">
              <span className="glass-strong flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11.5px] font-medium">
                <Wifi size={12} strokeWidth={2.2} className="text-ok" /> Excellent
              </span>
              <button
                aria-label="More options"
                className="glass-strong flex h-8 w-8 items-center justify-center rounded-full text-mute"
              >
                <MoreHorizontal size={15} strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* PiP */}
          <div
            className={cn(
              "absolute h-[104px] w-[150px] transition-all duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] md:h-[124px] md:w-[184px]",
              CORNERS[pipCorner]
            )}
          >
            <div className="group/pip relative h-full w-full">
              <TimerRing pct={pct} warn={warn} />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setPipCorner((c) => ((c + 1) % 4) as 0 | 1 | 2 | 3);
                }}
                aria-label="Move your video to the next corner"
                className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[20px] bg-gradient-to-br from-[#17233c] to-[#241d3d] shadow-2xl ring-1 ring-white/15 transition-transform active:scale-95"
              >
                {cam ? (
                  <Avatar name={CURRENT_USER.name} size={46} />
                ) : (
                  <VideoOff size={20} strokeWidth={1.7} className="text-faint" />
                )}
                {!mic && (
                  <span className="absolute bottom-2 left-2 flex h-6 w-6 items-center justify-center rounded-full bg-danger text-white">
                    <MicOff size={11} strokeWidth={2.2} />
                  </span>
                )}
                <span className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 backdrop-blur-[1px] transition-opacity group-hover/pip:opacity-100">
                  <Maximize2 size={15} strokeWidth={2} className="text-white" />
                </span>
              </button>
              <div
                className={cn(
                  "glass-strong pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-medium tabular-nums transition-opacity duration-200",
                  chrome ? "opacity-100" : "opacity-0"
                )}
              >
                <span className={warn ? "text-warn" : "text-ink"}>
                  {min} min · {left} left
                </span>
              </div>
            </div>
          </div>

          {showExtend && (
            <div className="glass-strong anim-fade-up absolute bottom-28 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl px-4 py-3 md:bottom-32">
              <span className="whitespace-nowrap text-[12.5px] font-medium text-warn">
                5 minutes left
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowExtend(false);
                }}
                className="whitespace-nowrap rounded-full vgrad px-3.5 py-1.5 text-[12px] font-semibold text-white"
              >
                Extend +15 min
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowExtend(false);
                }}
                aria-label="Dismiss"
                className="text-faint hover:text-ink"
              >
                <X size={14} strokeWidth={2} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Controls */}
      <div
        className={cn(
          "glass-strong absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2.5 rounded-full p-2.5 transition-all duration-300 md:bottom-7",
          panel && "md:-translate-x-[calc(50%+186px)]",
          chrome ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        )}
      >
        <Ctl label={mic ? "Mute microphone" : "Unmute microphone"} on={mic} onClick={() => setMic(!mic)}>
          {mic ? <Mic size={19} strokeWidth={1.9} /> : <MicOff size={19} strokeWidth={1.9} />}
        </Ctl>
        <Ctl label={cam ? "Turn camera off" : "Turn camera on"} on={cam} onClick={() => setCam(!cam)}>
          {cam ? <Video size={19} strokeWidth={1.9} /> : <VideoOff size={19} strokeWidth={1.9} />}
        </Ctl>
        <Ctl label="Share screen" on={!sharing} onClick={() => setSharing(!sharing)}>
          <MonitorUp size={19} strokeWidth={1.9} />
        </Ctl>
        <Ctl label="Whiteboard" onClick={() => {}}>
          <PenLine size={19} strokeWidth={1.9} />
        </Ctl>
        <button
          aria-label="Conversation Intelligence"
          onClick={() => setPanel(panel ? null : "intel")}
          className={cn(
            "flex h-[52px] items-center gap-1.5 rounded-full px-4 text-[13px] font-semibold transition-all duration-200 hover:-translate-y-1 active:scale-95",
            panel ? "vgrad text-white" : "bg-white/[0.14] text-white backdrop-blur hover:bg-white/25"
          )}
        >
          <Sparkles size={17} strokeWidth={2} />
          <span className="hidden md:inline">Intelligence</span>
        </button>
        <Ctl label="End Session" danger onClick={onEnd}>
          <PhoneOff size={19} strokeWidth={1.9} />
        </Ctl>
      </div>

      {/* Panel */}
      <aside
        className={cn(
          "glass-strong fixed inset-y-0 right-0 z-40 flex w-full max-w-[356px] transform-gpu flex-col p-4 transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] md:inset-y-4 md:right-4 md:rounded-[26px]",
          panel ? "translate-x-0" : "translate-x-full md:translate-x-[110%]"
        )}
      >
        <div className="flex items-center gap-1 rounded-full bg-wash p-1">
          {(
            [
              ["intel", "Intel"],
              ["transcript", "Transcript"],
              ["notes", "Notes"],
              ["chat", "Chat"],
            ] as const
          ).map(([id, name]) => (
            <button
              key={id}
              onClick={() => setPanel(id)}
              className={cn(
                "flex-1 rounded-full px-2 py-1.5 text-[12px] font-semibold transition-colors",
                panel === id ? "bg-wash-2 text-ink" : "text-faint hover:text-mute"
              )}
            >
              {name}
            </button>
          ))}
          <button
            aria-label="Close panel"
            onClick={() => setPanel(null)}
            className="px-2 text-faint hover:text-ink"
          >
            <X size={15} strokeWidth={2} />
          </button>
        </div>

        <div className="mt-4 flex-1 space-y-2.5 overflow-y-auto pb-2">
          {panel === "intel" && (
            <>
              <div className="rounded-xl bg-wash px-3 py-2 text-[10.5px] leading-relaxed text-faint">
                Both participants can see Intelligence is on. Nothing is recorded without
                consent from both sides.
              </div>
              {INTELLIGENCE_FEED.slice(0, intelCount).map((f, i) => (
                <div
                  key={i}
                  className={cn(
                    "anim-fade-up rounded-2xl border p-3.5",
                    f.kind === "followup"
                      ? "border-accent/30 bg-accent/[0.08]"
                      : "border-line bg-wash"
                  )}
                >
                  <div className="text-[10px] font-bold uppercase tracking-wider text-faint">
                    {f.kind === "topic"
                      ? "Now discussing"
                      : f.kind === "insight"
                      ? "Key insight"
                      : f.kind === "followup"
                      ? "Suggested follow-up"
                      : f.kind === "context"
                      ? "Context"
                      : "Agenda"}
                  </div>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink/90">{f.text}</p>
                </div>
              ))}
            </>
          )}

          {panel === "transcript" && (
            <div className="space-y-3 text-[12.5px] leading-relaxed">
              {[
                ["Sarah", "…the honest answer is most clinicians overestimate the coding bar and underestimate the writing bar."],
                ["You", "So the papers matter more than the portfolio?"],
                ["Sarah", "For labs, yes. One co-authored paper beats three side projects. Let's map who you could write with."],
              ].map(([w, t], i) => (
                <div key={i}>
                  <span className={cn("font-semibold", w === "You" ? "text-accent" : "text-ink")}>
                    {w}:{" "}
                  </span>
                  <span className="text-mute">{t}</span>
                </div>
              ))}
              <div className="anim-pulse-soft text-[12px] text-faint">Transcribing…</div>
            </div>
          )}

          {panel === "notes" && (
            <textarea
              aria-label="Private notes"
              placeholder="Your private notes — saved to the Recap automatically…"
              className="h-full min-h-[300px] w-full resize-none rounded-2xl border border-line bg-wash p-3.5 text-[13px] leading-relaxed text-ink outline-none placeholder:text-faint focus:border-accent/50"
            />
          )}

          {panel === "chat" && (
            <div className="flex h-full flex-col">
              <div className="flex-1 space-y-2 text-[12.5px]">
                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-wash-2 px-3.5 py-2.5">
                  Sharing the lab list link here ↓
                </div>
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-accent/20 px-3.5 py-2.5">
                  Got it — opening now.
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <input
                  aria-label="Message"
                  placeholder="Message…"
                  className="min-w-0 flex-1 rounded-full border border-line bg-wash px-4 py-2.5 text-[13px] text-ink outline-none focus:border-accent/50"
                />
                <button
                  aria-label="Send"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full vgrad text-white"
                >
                  <Send size={14} strokeWidth={2} />
                </button>
              </div>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}

/* ═══════════════ Recap ═══════════════ */

function Recap() {
  const [items, setItems] = useState([
    { t: "Email Dr. Rao's lab — mention the 2023 dataset paper", done: false },
    { t: "Draft 300-word research statement by Friday", done: false },
    { t: "Shortlist 2 clinicians to co-write with", done: true },
  ]);
  const [rating, setRating] = useState(0);

  return (
    <div className="hero-glow flex min-h-dvh flex-col items-center bg-bg px-5 py-14">
      <div className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-faint">
        Session Recap
      </div>
      <h1 className="mt-3 text-center text-[24px] font-semibold tracking-[-0.02em]">
        Deep Dive with {SARAH.name}
      </h1>
      <div className="mt-1.5 text-[13px] text-mute">50 minutes · today · recording processing</div>

      <div className="mt-8 w-full max-w-lg space-y-4">
        <div className="glass anim-fade-up rounded-3xl p-5">
          <div className="text-[13px] font-semibold">Topics covered</div>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {["Clinic → research path", "Lab shortlist", "Co-authoring", "Publishing without PhD"].map(
              (t) => (
                <span key={t} className="rounded-full bg-wash-2 px-3 py-1.5 text-[12px] text-mute">
                  {t}
                </span>
              )
            )}
          </div>
        </div>

        <div className="glass anim-fade-up delay-1 rounded-3xl p-5">
          <div className="text-[13px] font-semibold">Action items</div>
          <div className="mt-2.5 space-y-2">
            {items.map((it, i) => (
              <button
                key={i}
                onClick={() =>
                  setItems((p) => p.map((x, j) => (j === i ? { ...x, done: !x.done } : x)))
                }
                className="flex w-full items-start gap-3 rounded-xl bg-wash px-3.5 py-3 text-left"
              >
                <span
                  className={cn(
                    "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border",
                    it.done ? "border-transparent bg-ok text-white" : "border-line-2 text-transparent"
                  )}
                >
                  <Check size={11} strokeWidth={3} />
                </span>
                <span className={cn("text-[13.5px]", it.done && "text-faint line-through")}>
                  {it.t}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="glass anim-fade-up delay-2 rounded-3xl p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-[13px] font-semibold">Rate your Session</div>
              <div className="mt-0.5 text-[11.5px] text-faint">
                Private — never shown during calls
              </div>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  aria-label={`${n} star${n > 1 ? "s" : ""}`}
                  onClick={() => setRating(n)}
                  className={cn(
                    "text-[20px] transition-transform active:scale-90",
                    n <= rating ? "text-warn" : "text-faint/40"
                  )}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="anim-fade-up delay-3 flex flex-wrap justify-center gap-2.5 pt-1">
          <Button variant="ghost">
            <Download size={15} strokeWidth={1.9} /> Download PDF
          </Button>
          <Button variant="ghost">
            <FileText size={15} strokeWidth={1.9} /> Save to Notes
          </Button>
          <Link href={`/book/${SARAH.handle}`}>
            <Button>
              Book a follow-up <ArrowRight size={15} strokeWidth={2} />
            </Button>
          </Link>
        </div>

        <p className="flex items-center justify-center gap-1.5 text-center text-[12px] text-faint">
          <MessageSquare size={12} strokeWidth={2} /> Chat with {SARAH.short} stays open for 7 days.
        </p>
        <div className="text-center">
          <Link href="/app" className="text-[13px] text-mute hover:text-ink">
            ← Back home
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════ Machine ═══════════════ */

export function SessionView({ id: _id }: { id: string }) {
  const [stage, setStage] = useState<"green" | "room" | "recap">("green");
  if (stage === "green") return <GreenRoom onEnter={() => setStage("room")} />;
  if (stage === "room") return <Room onEnd={() => setStage("recap")} />;
  return <Recap />;
}

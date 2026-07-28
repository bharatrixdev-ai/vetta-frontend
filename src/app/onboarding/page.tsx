"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Banknote,
  Check,
  Code2,
  Compass,
  Layers,
  Megaphone,
  Microscope,
  PenTool,
  Rocket,
  Scale,
  Sparkles,
  Stethoscope,
  TrendingUp,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui";
import { FIELDS, GOALS } from "@/lib/data";
import { cn } from "@/lib/utils";

const ICONS: Record<string, typeof Code2> = {
  stethoscope: Stethoscope,
  code: Code2,
  sparkles: Sparkles,
  penTool: PenTool,
  layers: Layers,
  rocket: Rocket,
  trendingUp: TrendingUp,
  microscope: Microscope,
  compass: Compass,
  banknote: Banknote,
  megaphone: Megaphone,
  scale: Scale,
};

export default function Onboarding() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [fields, setFields] = useState<string[]>([]);
  const [goals, setGoals] = useState<string[]>([]);

  const toggle = (arr: string[], set: (v: string[]) => void, id: string) =>
    set(arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id]);

  const finish = () => {
    try {
      localStorage.setItem("vetta-fields", JSON.stringify(fields));
      localStorage.setItem("vetta-goals", JSON.stringify(goals));
    } catch {}
    if (goals.includes("share")) router.push("/apply");
    else router.push("/app");
  };

  const canNext = step === 0 ? fields.length >= 2 : goals.length >= 1;

  return (
    <div className="hero-glow min-h-dvh px-5 py-10">
      <div className="mx-auto max-w-2xl">
        <div className="flex items-center justify-between">
          <Logo />
          <span className="text-[12.5px] text-faint">Step {step + 1} of 2</span>
        </div>

        <div className="mt-6 flex gap-2">
          {[0, 1].map((i) => (
            <div
              key={i}
              className={cn("h-1 flex-1 rounded-full", i <= step ? "vgrad" : "bg-wash-2")}
            />
          ))}
        </div>

        {step === 0 ? (
          <div className="anim-fade-up mt-9">
            <h1 className="text-[28px] font-semibold leading-tight tracking-[-0.02em] md:text-[34px]">
              What are you into?
            </h1>
            <p className="mt-2.5 text-[14.5px] leading-relaxed text-mute">
              Pick at least two. This is the only thing that shapes your feed — no
              engagement tricks, no watch-time optimisation. Change it any time.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {FIELDS.map((f) => {
                const Icon = ICONS[f.emojiFree] ?? Sparkles;
                const on = fields.includes(f.id);
                return (
                  <button
                    key={f.id}
                    onClick={() => toggle(fields, setFields, f.id)}
                    aria-pressed={on}
                    className={cn(
                      "group relative flex min-h-[92px] flex-col items-start gap-2 rounded-2xl border p-4 text-left transition-all duration-200",
                      on
                        ? "border-accent/60 bg-accent/[0.08] ring-1 ring-accent/30"
                        : "glass-soft hover:border-line-2"
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-xl transition-colors",
                        on ? "vgrad text-white" : "bg-wash text-mute"
                      )}
                    >
                      <Icon size={17} strokeWidth={1.9} />
                    </span>
                    <span className="text-[13px] font-semibold leading-snug">{f.label}</span>
                    {on && (
                      <span className="absolute right-3 top-3 flex h-4 w-4 items-center justify-center rounded-full vgrad text-white">
                        <Check size={10} strokeWidth={3} />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-7 flex items-center justify-between">
              <span className="text-[12.5px] text-faint">
                {fields.length} selected {fields.length < 2 && "· pick at least 2"}
              </span>
              <Button disabled={!canNext} onClick={() => setStep(1)}>
                Continue <ArrowRight size={15} strokeWidth={2} />
              </Button>
            </div>
          </div>
        ) : (
          <div className="anim-fade-up mt-9">
            <h1 className="text-[28px] font-semibold leading-tight tracking-[-0.02em] md:text-[34px]">
              What brings you here?
            </h1>
            <p className="mt-2.5 text-[14.5px] leading-relaxed text-mute">
              So we can put the right people in front of you first.
            </p>

            <div className="mt-7 space-y-2.5">
              {GOALS.map((g) => {
                const on = goals.includes(g.id);
                return (
                  <button
                    key={g.id}
                    onClick={() => toggle(goals, setGoals, g.id)}
                    aria-pressed={on}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-2xl border px-5 py-4 text-left transition-all duration-200",
                      on
                        ? "border-accent/60 bg-accent/[0.08] ring-1 ring-accent/30"
                        : "glass-soft hover:border-line-2"
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-5 w-5 items-center justify-center rounded-full border transition-colors",
                        on ? "border-transparent vgrad text-white" : "border-line-2 text-transparent"
                      )}
                    >
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span className="text-[14px] font-medium">{g.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="glass-soft mt-6 rounded-2xl p-4">
              <div className="text-[12.5px] font-semibold">One house rule before you start</div>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-mute">
                Everything on Vetta must be genuinely yours. Use AI to build, research and
                write all you like — but no synthetic identities, no deepfaked people, no
                fabricated credentials. The badge only means something if that holds.
              </p>
            </div>

            <div className="mt-7 flex items-center justify-between">
              <button
                onClick={() => setStep(0)}
                className="text-[13px] text-faint hover:text-mute"
              >
                ← Back
              </button>
              <Button disabled={!canNext} onClick={finish}>
                {goals.includes("share") ? "Continue to application" : "Enter Vetta"}{" "}
                <ArrowRight size={15} strokeWidth={2} />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

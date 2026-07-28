"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui";
import { ArrowLeft, ArrowRight, Clock3, Paperclip, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = ["Who you are", "Your proof", "Your offer"];

export default function Apply() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [artifacts, setArtifacts] = useState<string[]>([
    "LinkedIn profile",
    "Company registry entry",
  ]);

  if (done) {
    return (
      <div className="hero-glow flex min-h-dvh flex-col items-center justify-center px-5 text-center">
        <div className="glass anim-fade-up w-full max-w-md rounded-3xl p-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-accent"><Clock3 size={28} strokeWidth={1.8} /></div>
          <h1 className="mt-4 text-xl font-semibold">Under review</h1>
          <p className="mt-2 text-[13.5px] leading-relaxed text-mute">
            A human reviews every application against its proof. Expect an answer in
            about <span className="text-ink">5 days</span>. We verify — we don&apos;t rubber-stamp.
          </p>
          <div className="mt-5 rounded-2xl bg-wash px-4 py-3 text-[12.5px] text-faint">
            Meanwhile your member profile stays fully active.
          </div>
          <Link href="/app" className="mt-6 block">
            <Button className="w-full">Back to Vetta</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-glow min-h-dvh px-5 py-10">
      <div className="mx-auto max-w-lg">
        <div className="flex items-center justify-between">
          <Link href="/app"><Logo /></Link>
          <Link href="/app" className="text-[12.5px] text-faint hover:text-mute">Save & exit</Link>
        </div>

        <h1 className="mt-8 text-2xl font-semibold">Become a Luminary</h1>
        <p className="mt-1.5 text-[13.5px] text-mute">
          The badge is earned. Ten honest minutes now, human review after.
        </p>

        {/* Stepper */}
        <div className="mt-6 flex items-center gap-2">
          {STEPS.map((s, i) => (
            <div key={s} className="flex flex-1 flex-col gap-1.5">
              <div className={cn("h-1 rounded-full", i <= step ? "vgrad" : "bg-wash-2")} />
              <span className={cn("text-[11px] font-medium", i <= step ? "text-ink" : "text-faint")}>
                {i + 1}. {s}
              </span>
            </div>
          ))}
        </div>

        <div className="glass anim-fade-up mt-6 rounded-3xl p-6" key={step}>
          {step === 0 && (
            <div className="space-y-3">
              <input placeholder="Full name" className="w-full rounded-xl border border-line bg-wash px-4 py-3 text-[14px] outline-none focus:border-accent/50" />
              <input placeholder="Headline — e.g. CTO, Finlay · ex-Paytora" className="w-full rounded-xl border border-line bg-wash px-4 py-3 text-[14px] outline-none focus:border-accent/50" />
              <input placeholder="LinkedIn / personal site" className="w-full rounded-xl border border-line bg-wash px-4 py-3 text-[14px] outline-none focus:border-accent/50" />
              <textarea placeholder="What can people book you for? One honest paragraph." rows={3} className="w-full resize-none rounded-xl border border-line bg-wash px-4 py-3 text-[14px] outline-none focus:border-accent/50" />
            </div>
          )}

          {step === 1 && (
            <div>
              <p className="text-[13px] leading-relaxed text-mute">
                Link artifacts that prove your record — degrees, employment, exits,
                licenses, publications. These become your public <span className="text-ink">Provenance</span> once verified.
              </p>
              <div className="mt-4 space-y-2">
                {artifacts.map((a) => (
                  <div key={a} className="flex items-center justify-between rounded-xl bg-wash px-4 py-3 text-[13.5px]">
                    <span className="inline-flex items-center gap-2"><Paperclip size={14} strokeWidth={1.9} className="text-faint" /> {a}</span>
                    <span className="text-[11px] text-warn">pending review</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setArtifacts((p) => [...p, `Artifact ${p.length + 1}`])}
                className="mt-3 w-full rounded-xl border border-dashed border-line-2 px-4 py-3 text-[13px] text-mute transition-colors hover:border-accent/50 hover:text-ink"
              >
                <span className="inline-flex items-center gap-1.5"><Plus size={14} strokeWidth={2.2} /> Add artifact (link or upload)</span>
              </button>
              <p className="mt-3 text-[11.5px] text-faint">
                Self-claims aren&apos;t enough on Vetta — that&apos;s the point.
              </p>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input placeholder="Quick Session price (₹)" className="rounded-xl border border-line bg-wash px-4 py-3 text-[14px] outline-none focus:border-accent/50" />
                <input placeholder="Deep Dive price (₹)" className="rounded-xl border border-line bg-wash px-4 py-3 text-[14px] outline-none focus:border-accent/50" />
              </div>
              <div className="rounded-xl bg-wash px-4 py-3.5">
                <div className="flex items-center justify-between text-[13.5px]">
                  <span>Booking window</span>
                  <span className="font-semibold vgrad-text">60 days · rolling</span>
                </div>
                <p className="mt-1 text-[11.5px] leading-relaxed text-faint">
                  Members can book at most 60 days ahead. The window rolls daily — your
                  calendar never gets scalped a year out. You can shorten it anytime.
                </p>
              </div>
              <div className="rounded-xl bg-wash px-4 py-3.5">
                <div className="flex items-center justify-between text-[13.5px]">
                  <span>Payouts</span>
                  <span className="text-ok">90% · via Razorpay</span>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              className={cn("text-[13px] text-faint hover:text-mute", step === 0 && "invisible")}
            >
              <ArrowLeft size={13} strokeWidth={2} className="mr-1 inline-block" /> Back
            </button>
            <Button onClick={() => (step < 2 ? setStep(step + 1) : setDone(true))}>
              {step < 2 ? <>Continue <ArrowRight size={15} strokeWidth={2} /></> : "Submit for review"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

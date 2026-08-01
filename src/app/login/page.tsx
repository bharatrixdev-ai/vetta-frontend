"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [stage, setStage] = useState<"start" | "otp" | "entering">("start");

  const enter = () => {
    setStage("entering");
    setTimeout(() => router.push("/app"), 500);
  };

  return (
    <div className="hero-glow flex min-h-dvh flex-col items-center justify-center px-5">
      <Link href="/" className="anim-fade-up">
        <Logo />
      </Link>

      <div className="glass anim-fade-up delay-1 mt-8 w-full max-w-sm rounded-3xl p-7">
        {stage !== "otp" ? (
          <>
            <h1 className="text-center text-xl font-semibold">Welcome to Vetta</h1>
            <p className="mt-1.5 text-center text-[13px] text-mute">
              Real people, real track records. Log in to continue.
            </p>

            <button
              onClick={enter}
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-full border border-line bg-white px-5 py-3 text-[14px] font-semibold text-black transition-transform active:scale-[0.98]"
            >
              <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden>
                <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.3 6.1 29.4 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z"/>
                <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 18.9 12 24 12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.3 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
                <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
                <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.7l6.2 5.2C36.9 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z"/>
              </svg>
              {stage === "entering" ? "Signing you in…" : "Continue with Google"}
            </button>

            <div className="my-5 flex items-center gap-3 text-[11px] text-faint">
              <div className="h-px flex-1 bg-line" /> or with email <div className="h-px flex-1 bg-line" />
            </div>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@work.com"
              type="email"
              className="w-full rounded-full border border-line bg-wash px-5 py-3 text-[14px] outline-none placeholder:text-faint focus:border-accent/60"
            />
            <Button
              className="mt-3 w-full"
              onClick={() => email.includes("@") && setStage("otp")}
              disabled={!email.includes("@")}
            >
              Send code
            </Button>
          </>
        ) : (
          <>
            <h1 className="text-center text-xl font-semibold">Check your email</h1>
            <p className="mt-1.5 text-center text-[13px] text-mute">
              We sent a 6-digit code to <span className="text-ink">{email}</span>
            </p>
            <div className="mt-6 flex justify-center gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <input
                  key={i}
                  maxLength={1}
                  inputMode="numeric"
                  className="h-12 w-10 rounded-xl border border-line bg-wash text-center text-lg font-semibold outline-none focus:border-accent/60"
                />
              ))}
            </div>
            <Button className="mt-6 w-full" onClick={enter}>
              {stage === "otp" ? "Verify & enter" : "Entering…"}
            </Button>
            <button
              onClick={() => setStage("start")}
              className="mt-3 w-full text-center text-[12.5px] text-faint hover:text-mute"
            >
              ← Different email
            </button>
          </>
        )}
      </div>

      <p className="anim-fade-up delay-2 mt-6 max-w-xs text-center text-[11.5px] leading-relaxed text-faint">
        Prototype auth — both paths continue to interest setup. By continuing you accept
        the Vetta terms and the authenticity pledge.
      </p>
    </div>
  );
}

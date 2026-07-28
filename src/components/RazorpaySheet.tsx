"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import { cn, inr } from "@/lib/utils";

export function RazorpaySheet({
  open,
  amount,
  label,
  onClose,
  onPaid,
}: {
  open: boolean;
  amount: number;
  label: string;
  onClose: () => void;
  onPaid: () => void;
}) {
  const [method, setMethod] = useState<"upi" | "card" | "netbanking">("upi");
  const [paying, setPaying] = useState(false);

  if (!open) return null;

  const pay = () => {
    setPaying(true);
    setTimeout(() => {
      setPaying(false);
      onPaid();
    }, 1400);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/60 backdrop-blur-sm md:items-center">
      <div className="anim-fade-up w-full max-w-md overflow-hidden rounded-t-3xl bg-[#10131a] shadow-2xl md:rounded-3xl">
        {/* Razorpay-style header */}
        <div className="flex items-center justify-between bg-[#0f1b33] px-5 py-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#2b84ea] text-[13px] font-bold text-white">
                R
              </span>
              <span className="text-[14px] font-semibold text-white">Razorpay</span>
              <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-medium text-white/70">
                Trusted Business
              </span>
            </div>
            <div className="mt-1 text-[11.5px] text-white/50">Vetta · {label}</div>
          </div>
          <div className="text-right">
            <div className="text-[17px] font-bold text-white tabular-nums">{inr(amount)}</div>
            <button onClick={onClose} className="text-[11.5px] text-white/50 hover:text-white">
              Close
            </button>
          </div>
        </div>

        {/* Methods */}
        <div className="flex border-b border-white/5">
          {(
            [
              ["upi", "UPI"],
              ["card", "Card"],
              ["netbanking", "Netbanking"],
            ] as const
          ).map(([id, name]) => (
            <button
              key={id}
              onClick={() => setMethod(id)}
              className={cn(
                "flex-1 px-4 py-3 text-[13px] font-semibold transition-colors",
                method === id
                  ? "border-b-2 border-[#2b84ea] text-white"
                  : "text-white/45 hover:text-white/80"
              )}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="px-5 py-5">
          {method === "upi" && (
            <div className="space-y-3">
              <div className="text-[12px] font-medium text-white/55">Pay using any UPI app</div>
              <div className="flex gap-2">
                {["GPay", "PhonePe", "Paytm", "BHIM"].map((a) => (
                  <div
                    key={a}
                    className="flex-1 rounded-xl border border-white/10 py-2.5 text-center text-[12px] font-medium text-white/75"
                  >
                    {a}
                  </div>
                ))}
              </div>
              <input
                placeholder="yourname@upi"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[14px] text-white outline-none placeholder:text-white/30 focus:border-[#2b84ea]"
              />
            </div>
          )}
          {method === "card" && (
            <div className="space-y-3">
              <input
                placeholder="Card number"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[14px] text-white outline-none placeholder:text-white/30 focus:border-[#2b84ea]"
              />
              <div className="flex gap-3">
                <input
                  placeholder="MM / YY"
                  className="w-1/2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[14px] text-white outline-none placeholder:text-white/30 focus:border-[#2b84ea]"
                />
                <input
                  placeholder="CVV"
                  className="w-1/2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[14px] text-white outline-none placeholder:text-white/30 focus:border-[#2b84ea]"
                />
              </div>
            </div>
          )}
          {method === "netbanking" && (
            <div className="grid grid-cols-3 gap-2">
              {["HDFC", "ICICI", "SBI", "Axis", "Kotak", "More"].map((b) => (
                <div
                  key={b}
                  className="rounded-xl border border-white/10 py-3 text-center text-[12.5px] font-medium text-white/75"
                >
                  {b}
                </div>
              ))}
            </div>
          )}

          <Button className="mt-5 w-full !rounded-xl bg-[#2b84ea]" onClick={pay} disabled={paying}>
            {paying ? "Processing…" : `Pay ${inr(amount)}`}
          </Button>
          <div className="mt-3 text-center text-[10.5px] text-white/35">
            Design prototype — no real payment moves. Refunds: full ≥24h before a Session.
          </div>
        </div>
      </div>
    </div>
  );
}

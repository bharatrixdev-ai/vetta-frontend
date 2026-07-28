"use client";

import Link from "next/link";
import { Shell } from "@/components/Shell";
import { Avatar } from "@/components/Avatar";
import { SectionLabel, Verified } from "@/components/ui";
import { byHandle, ROUNDTABLES } from "@/lib/data";
import { Lock, Radio } from "lucide-react";
import { Button } from "@/components/ui";
import { useRole } from "@/lib/role";
import { inr } from "@/lib/utils";

export default function Roundtables() {
  const { role } = useRole();
  const live = ROUNDTABLES.filter((r) => r.live);
  const upcoming = ROUNDTABLES.filter((r) => !r.live);

  return (
    <Shell>
      {role === "luminary" ? (
        <Link href="/studio">
          <div className="glass lift mb-5 flex items-center gap-3 rounded-2xl px-4 py-3.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl vgrad text-white">
              <Radio size={17} strokeWidth={1.9} />
            </span>
            <div className="flex-1">
              <div className="text-[13.5px] font-semibold">Host your own Roundtable</div>
              <div className="text-[12px] text-mute">Free or ticketed — set it in Studio</div>
            </div>
            <Button className="!px-3.5 !py-1.5 !text-[12px]">Schedule</Button>
          </div>
        </Link>
      ) : (
        <div className="glass-soft mb-5 flex items-center gap-3 rounded-2xl px-4 py-3">
          <Lock size={15} strokeWidth={1.9} className="shrink-0 text-faint" />
          <p className="flex-1 text-[12.5px] leading-relaxed text-mute">
            Roundtables are hosted by verified Luminaries. Join any table below — free
            ones are open to everyone.
          </p>
          <Link href="/apply" className="shrink-0 text-[12px] font-semibold vgrad-text">
            Apply →
          </Link>
        </div>
      )}

      <SectionLabel className="mb-2.5">Live now</SectionLabel>
      <div className="flex flex-col gap-3">
        {live.map((r) => {
          const host = byHandle(r.host)!;
          return (
            <Link key={r.id} href={`/roundtable/${r.id}`} className="glass lift anim-fade-up block rounded-2xl p-5">
              <div className="flex items-center gap-2 text-[11.5px] font-bold text-danger">
                <span className="anim-pulse-soft h-2 w-2 rounded-full bg-danger" />
                LIVE · {r.listeners} listening
              </div>
              <div className="mt-2 text-[16px] font-semibold leading-snug">{r.title}</div>
              <p className="mt-1 text-[13px] text-mute">{r.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <Avatar name={host.name} size={30} ring />
                    {r.cohosts.map((c) => (
                      <Avatar key={c} name={byHandle(c)!.name} size={30} ring />
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-[12px] text-mute">
                    {host.short}
                    {r.cohosts.length > 0 && ` +${r.cohosts.length}`} <Verified size={11} />
                  </span>
                </div>
                <span className="rounded-full vgrad px-4 py-1.5 text-[12.5px] font-semibold text-white">
                  Join table →
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <SectionLabel className="mb-2.5 mt-8">Upcoming</SectionLabel>
      <div className="flex flex-col gap-3">
        {upcoming.map((r, i) => {
          const host = byHandle(r.host)!;
          return (
            <Link
              key={r.id}
              href={`/roundtable/${r.id}`}
              className="glass-soft lift anim-fade-up block rounded-2xl p-5"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-[12px] font-semibold text-accent">{r.startsLabel}</div>
                  <div className="mt-1 text-[15px] font-semibold leading-snug">{r.title}</div>
                  <p className="mt-1 text-[12.5px] text-mute">{r.desc}</p>
                </div>
                <span
                  className={
                    r.price > 0
                      ? "shrink-0 rounded-full border border-warn/40 bg-warn/10 px-3 py-1 text-[12px] font-semibold text-warn"
                      : "shrink-0 rounded-full border border-ok/40 bg-ok/10 px-3 py-1 text-[12px] font-semibold text-ok"
                  }
                >
                  {r.price > 0 ? inr(r.price) : "Free"}
                </span>
              </div>
              <div className="mt-3 flex items-center gap-2 text-[12px] text-faint">
                <div className="flex -space-x-2">
                  <Avatar name={host.name} size={24} ring />
                  {r.cohosts.map((c) => (
                    <Avatar key={c} name={byHandle(c)!.name} size={24} ring />
                  ))}
                </div>
                Hosted by {host.name}
                {r.cohosts.length > 0 && ` + ${r.cohosts.length} co-host${r.cohosts.length > 1 ? "s" : ""}`}
                {r.price > 0 && " · ticket includes recording + transcript"}
              </div>
            </Link>
          );
        })}
      </div>
    </Shell>
  );
}

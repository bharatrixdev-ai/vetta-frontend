"use client";

import Link from "next/link";
import { Shell } from "@/components/Shell";
import { NoteCard } from "@/components/NoteCard";
import { Avatar } from "@/components/Avatar";
import { Button, SectionLabel, Verified } from "@/components/ui";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import { CreateSheet } from "@/components/CreateSheet";
import { byHandle, NOTES, UP_NEXT } from "@/lib/data";
import { useRole } from "@/lib/role";

function UpNextStrip() {
  return (
    <div className="mb-6">
      <SectionLabel className="mb-2.5">Up next</SectionLabel>
      <div className="no-scrollbar -mx-1 flex gap-3 overflow-x-auto px-1 pb-1">
        {UP_NEXT.map((u) => {
          const w = byHandle(u.withHandle);
          if (!w) return null;
          const live = u.minsTo === 0;
          const soon = u.minsTo > 0 && u.minsTo <= 10;
          return (
            <div key={u.id} className="glass anim-fade-up min-w-[290px] rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <Avatar name={w.name} size={44} ring />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 text-[13.5px] font-semibold">
                    <span className="truncate">{w.name}</span> <Verified size={12} />
                  </div>
                  <div className="truncate text-[12px] text-mute">{u.title}</div>
                  <div className="mt-0.5 text-[11.5px] text-faint">
                    {live ? (
                      <span className="font-semibold text-danger">● Live now</span>
                    ) : (
                      u.whenLabel
                    )}
                  </div>
                </div>
                <Link href={u.kind === "session" ? `/session/${u.id}` : `/roundtable/${u.id}`}>
                  <Button
                    variant={live || soon ? "primary" : "glass"}
                    className="!px-4 !py-2 text-[12.5px]"
                  >
                    {u.kind === "session" ? (soon ? "Green Room" : "Prepare") : live ? "Join" : "Remind"}
                  </Button>
                </Link>
              </div>
              {soon && (
                <div className="mt-3 rounded-xl bg-accent/10 px-3 py-2 text-[12px] text-accent">
                  Starts in {u.minsTo} min — your Green Room is open.
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Composer() {
  const { me } = useRole();
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="glass-soft lift mb-6 flex w-full items-center gap-3 rounded-2xl p-3.5 text-left"
      >
        <Avatar name={me.name} size={38} />
        <span className="flex-1 rounded-full border border-line bg-wash px-4 py-2.5 text-[13.5px] text-faint">
          Share a Note — a thought worth keeping…
        </span>
        <span className="rounded-full vgrad px-4 py-2 text-[13px] font-semibold text-white">
          Post
        </span>
      </button>
      <CreateSheet open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default function Home() {
  return (
    <Shell>
      <UpNextStrip />
      <Composer />
      <SectionLabel className="mb-2.5">Notes for you</SectionLabel>
      <div className="flex flex-col gap-3">
        {NOTES.map((n, i) => (
          <NoteCard key={n.id} note={n} delay={Math.min(i, 4)} />
        ))}
      </div>
    </Shell>
  );
}

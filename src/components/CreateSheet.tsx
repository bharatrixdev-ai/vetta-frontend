"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock, PenLine, Radio, Video, X } from "lucide-react";
import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/ui";
import { useRole } from "@/lib/role";
import { cn } from "@/lib/utils";

/**
 * What you can create depends on who you are.
 * Members: Notes only. Luminaries: Notes, Roundtables, Session slots.
 */
export function CreateSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { me, role } = useRole();
  const isLuminary = role === "luminary";
  const [note, setNote] = useState("");

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-[var(--scrim)] backdrop-blur-sm md:items-center"
      onClick={onClose}
    >
      <div
        className="glass-strong anim-fade-up w-full max-w-md rounded-t-3xl p-5 md:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div className="text-[15px] font-semibold">Create</div>
          <button aria-label="Close" onClick={onClose} className="text-faint hover:text-ink">
            <X size={16} strokeWidth={2} />
          </button>
        </div>

        {/* Share a Note — everyone */}
        <div className="mt-4 rounded-2xl border border-line bg-wash p-3.5">
          <div className="flex items-start gap-3">
            <Avatar name={me.name} size={36} />
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              placeholder="Share a Note — a thought worth keeping…"
              aria-label="Write a Note"
              className="min-h-[72px] w-full resize-none bg-transparent text-[14px] leading-relaxed text-ink outline-none placeholder:text-faint"
            />
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-[11px] text-faint">
              {note.length > 0 ? `${note.length} characters` : "Visible to your fields"}
            </span>
            <Button className="!px-4 !py-2 !text-[12.5px]" disabled={!note.trim()} onClick={onClose}>
              Post Note
            </Button>
          </div>
        </div>

        {/* Host actions */}
        <div className="mt-4 space-y-2">
          {isLuminary ? (
            <>
              <Link
                href="/studio"
                onClick={onClose}
                className="flex items-center gap-3 rounded-2xl border border-line bg-wash px-4 py-3.5 transition-colors hover:border-line-2"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl vgrad text-white">
                  <Radio size={17} strokeWidth={1.9} />
                </span>
                <div className="flex-1">
                  <div className="text-[13.5px] font-semibold">Schedule a Roundtable</div>
                  <div className="text-[11.5px] text-mute">Free or ticketed — your call</div>
                </div>
              </Link>
              <Link
                href="/studio"
                onClick={onClose}
                className="flex items-center gap-3 rounded-2xl border border-line bg-wash px-4 py-3.5 transition-colors hover:border-line-2"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl vgrad text-white">
                  <Video size={17} strokeWidth={1.9} />
                </span>
                <div className="flex-1">
                  <div className="text-[13.5px] font-semibold">Open Session slots</div>
                  <div className="text-[11.5px] text-mute">Set hours in the rolling window</div>
                </div>
              </Link>
            </>
          ) : (
            <div className="rounded-2xl border border-dashed border-line-2 px-4 py-4">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-wash-2 text-faint">
                  <Lock size={17} strokeWidth={1.9} />
                </span>
                <div className="min-w-0">
                  <div className="text-[13.5px] font-semibold">
                    Hosting is for Luminaries
                  </div>
                  <p className="mt-1 text-[12px] leading-relaxed text-mute">
                    Roundtables and paid Sessions are hosted by verified Luminaries. As a
                    member you can join any table, book Sessions, post Notes and reply.
                  </p>
                  <Link href="/apply" onClick={onClose}>
                    <Button variant="ghost" className="mt-3 !px-4 !py-2 !text-[12.5px]">
                      <PenLine size={13} strokeWidth={2} /> Apply to become one
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function CreateButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        aria-label="Create"
        onClick={() => setOpen(true)}
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-full vgrad text-white shadow-[0_6px_18px_rgba(79,141,255,0.4)] transition-transform active:scale-95",
          className
        )}
      >
        <PenLine size={18} strokeWidth={2.2} />
      </button>
      <CreateSheet open={open} onClose={() => setOpen(false)} />
    </>
  );
}

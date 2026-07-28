"use client";

import { useState } from "react";
import Link from "next/link";
import { Bookmark, BookmarkCheck, MessageCircle, Send } from "lucide-react";
import { Avatar } from "@/components/Avatar";
import { Verified } from "@/components/ui";
import { byHandle, type Note } from "@/lib/data";
import { useRole } from "@/lib/role";
import { cn } from "@/lib/utils";

type Reply = { by: string; text: string; mine?: boolean };

const SEED_REPLIES: Record<string, Reply[]> = {
  n1: [
    { by: "Rohan Verma", text: "The one-liner test is brutal and correct. We rewrote ours 40 times." },
  ],
  n3: [{ by: "Priya Nair", text: "This applies to your first 3 PMs too, honestly." }],
};

export function NoteCard({ note, delay }: { note: Note; delay?: number }) {
  const author = byHandle(note.author);
  const { me } = useRole();
  const [noted, setNoted] = useState(false);
  const [saved, setSaved] = useState(false);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [replies, setReplies] = useState<Reply[]>(SEED_REPLIES[note.id] ?? []);

  if (!author) return null;

  const send = () => {
    if (!draft.trim()) return;
    setReplies((r) => [...r, { by: me.name, text: draft.trim(), mine: true }]);
    setDraft("");
  };

  return (
    <article
      className="glass-soft lift anim-fade-up rounded-2xl p-4 md:p-5"
      style={delay ? { animationDelay: `${delay * 60}ms` } : undefined}
    >
      <div className="flex items-start gap-3">
        <Link href={`/profile/${author.handle}`}>
          <Avatar name={author.name} size={42} />
        </Link>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-1.5">
            <Link
              href={`/profile/${author.handle}`}
              className="text-[14px] font-semibold hover:underline"
            >
              {author.name}
            </Link>
            <Verified />
            <span className="truncate text-[12px] text-faint">
              {author.title} ·{" "}
              {note.minsAgo < 60 ? `${note.minsAgo}m` : `${Math.round(note.minsAgo / 60)}h`}
            </span>
          </div>
          <p className="mt-1.5 whitespace-pre-line text-[14.5px] leading-relaxed text-ink/90">
            {note.text}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setNoted((v) => !v)}
              aria-pressed={noted}
              className={cn(
                "rounded-full border px-3 py-1.5 text-[12.5px] font-semibold transition-all active:scale-95",
                noted
                  ? "border-transparent vgrad text-white"
                  : "border-line text-mute hover:border-line-2 hover:text-ink"
              )}
            >
              Noted. <span className="tabular-nums">{note.noted + (noted ? 1 : 0)}</span>
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12.5px] font-medium transition-colors hover:bg-wash",
                open ? "text-ink" : "text-mute hover:text-ink"
              )}
            >
              <MessageCircle size={13} strokeWidth={2} />
              {note.replies + replies.filter((r) => r.mine).length}
            </button>
            <button
              onClick={() => setSaved((v) => !v)}
              aria-pressed={saved}
              aria-label={saved ? "Saved" : "Save Note"}
              className={cn(
                "rounded-full p-2 transition-colors hover:bg-wash",
                saved ? "text-accent" : "text-mute hover:text-ink"
              )}
            >
              {saved ? (
                <BookmarkCheck size={14} strokeWidth={2} />
              ) : (
                <Bookmark size={14} strokeWidth={2} />
              )}
            </button>
            <div className="flex-1" />
            <Link
              href={`/book/${author.handle}`}
              className="rounded-full border border-line px-3 py-1.5 text-[12.5px] font-semibold text-mute transition-colors hover:border-accent/60 hover:text-ink"
            >
              Book a Session
            </Link>
          </div>

          {open && (
            <div className="anim-fade-up mt-3 border-t border-line pt-3">
              {replies.length > 0 && (
                <div className="mb-3 space-y-2.5">
                  {replies.map((r, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <Avatar name={r.by} size={26} />
                      <div className="min-w-0 rounded-2xl rounded-tl-sm bg-wash px-3 py-2">
                        <div className="text-[11.5px] font-semibold">{r.by}</div>
                        <p className="mt-0.5 text-[13px] leading-relaxed text-mute">{r.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex items-center gap-2">
                <Avatar name={me.name} size={28} />
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  placeholder={`Reply to ${author.short}…`}
                  aria-label="Write a reply"
                  className="min-w-0 flex-1 rounded-full border border-line bg-wash px-3.5 py-2 text-[13px] text-ink outline-none placeholder:text-faint focus:border-accent/50"
                />
                <button
                  onClick={send}
                  disabled={!draft.trim()}
                  aria-label="Send reply"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full vgrad text-white disabled:opacity-40"
                >
                  <Send size={13} strokeWidth={2} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

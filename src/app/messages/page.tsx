"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarClock,
  Check,
  Clock3,
  Compass,
  Lock,
  MessageSquare,
  Send,
  Sparkles,
} from "lucide-react";
import { Shell } from "@/components/Shell";
import { Avatar } from "@/components/Avatar";
import { Button, Verified } from "@/components/ui";
import {
  byHandle,
  CLIENT_NAMES,
  CLIENT_THREADS,
  THREADS,
  type Thread,
} from "@/lib/data";
import { useRole } from "@/lib/role";
import { cn } from "@/lib/utils";

/** Resolve the other party — a Luminary profile or a plain member. */
function partyFor(handle: string) {
  const l = byHandle(handle);
  if (l) return { name: l.name, short: l.short, title: l.title, verified: true };
  const c = CLIENT_NAMES[handle];
  if (c) return { ...c, verified: false };
  return { name: handle, short: handle, title: "", verified: false };
}

function StateBadge({ t }: { t: Thread }) {
  const map = {
    locked: [Lock, "text-faint"],
    active: [Check, "text-ok"],
    followup: [Clock3, "text-warn"],
    request: [Sparkles, "text-accent"],
  } as const;
  const [Icon, color] = map[t.state];
  return (
    <span className={cn("inline-flex items-center gap-1 text-[10.5px] font-medium", color)}>
      <Icon size={10} strokeWidth={2.2} /> {t.meta}
    </span>
  );
}

function ThreadView({ t }: { t: Thread }) {
  const w = partyFor(t.withHandle);
  const [accepted, setAccepted] = useState(false);
  const [queued, setQueued] = useState<string[]>([]);
  const [draft, setDraft] = useState("");
  const open = t.state === "active" || t.state === "followup" || accepted;

  const submit = () => {
    if (!draft.trim()) return;
    if (t.state === "locked") setQueued((q) => [...q, draft.trim()]);
    setDraft("");
  };

  return (
    <div className="flex h-full min-h-[420px] flex-col">
      <div className="flex items-center gap-3 border-b border-line pb-3">
        <Avatar name={w.name} size={40} ring />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 text-[14px] font-semibold">
            {w.name} {w.verified && <Verified size={12} />}
          </div>
          <StateBadge t={t} />
        </div>
      </div>

      <div className="flex-1 space-y-2.5 overflow-y-auto py-4">
        {t.state === "locked" && (
          <div className="glass-soft mx-auto max-w-sm rounded-2xl p-5 text-center">
            <Lock size={26} strokeWidth={1.6} className="mx-auto text-faint" />
            <div className="mt-2 text-[13.5px] font-semibold">
              Chat unlocks 48h before the Session
            </div>
            <p className="mt-1.5 text-[12.5px] leading-relaxed text-mute">
              {t.meta}. Queue messages now — they deliver the moment it opens.
            </p>
            {queued.length > 0 && (
              <div className="mt-3 space-y-1.5 text-left">
                {queued.map((q, i) => (
                  <div key={i} className="rounded-xl bg-wash px-3 py-2 text-[12.5px] text-faint">
                    <Clock3 size={11} strokeWidth={2} className="mr-1 inline-block" /> queued — {q}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {t.state === "request" && !accepted && (
          <div className="glass-soft mx-auto max-w-sm rounded-2xl p-5 text-center">
            <Avatar name={w.name} size={52} className="mx-auto" ring />
            <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[14px] font-semibold">
              {w.name} <Verified size={12} />
            </div>
            <div className="text-[12px] text-faint">{w.title}</div>
            <p className="mt-3 rounded-xl bg-wash px-3.5 py-2.5 text-[13px] italic text-mute">
              “{t.last}”
            </p>
            <div className="mt-4 flex justify-center gap-2">
              <button
                onClick={() => setAccepted(true)}
                className="rounded-full vgrad px-5 py-2 text-[13px] font-semibold text-white"
              >
                Accept
              </button>
              <button className="rounded-full border border-line px-5 py-2 text-[13px] text-mute">
                Decline
              </button>
            </div>
            <p className="mt-3 text-[11px] text-faint">
              Luminary connections happen only on Vetta.
            </p>
          </div>
        )}

        {open &&
          t.msgs.map((m, i) => (
            <div
              key={i}
              className={cn(
                "max-w-[80%] rounded-2xl px-4 py-2.5 text-[13.5px] leading-relaxed",
                m.from === "me"
                  ? "ml-auto rounded-tr-sm bg-accent/20"
                  : "rounded-tl-sm bg-wash-2"
              )}
            >
              {m.text}
              <div className="mt-1 text-right text-[10px] text-faint">{m.time}</div>
            </div>
          ))}

        {t.state === "followup" && (
          <div className="mx-auto w-fit rounded-full bg-warn/10 px-4 py-1.5 text-[11.5px] text-warn">
            Follow-up window ·{t.meta.split("·")[1]} — book again to keep it open
          </div>
        )}
        {accepted && (
          <div className="mx-auto w-fit rounded-full bg-ok/10 px-4 py-1.5 text-[11.5px] text-ok">
            Connected — say hello
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 border-t border-line pt-3">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder={
            t.state === "locked" ? "Queue a message — delivers on unlock…" : "Message…"
          }
          aria-label="Write a message"
          className="min-w-0 flex-1 rounded-full border border-line bg-wash px-4 py-2.5 text-[13.5px] text-ink outline-none focus:border-accent/50"
        />
        <button
          onClick={submit}
          aria-label="Send"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full vgrad px-4 py-2.5 text-[13px] font-semibold text-white"
        >
          <Send size={14} strokeWidth={2} /> Send
        </button>
      </div>
    </div>
  );
}

function ThreadList({
  list,
  sel,
  onSelect,
}: {
  list: Thread[];
  sel: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", sel && "hidden md:flex")}>
      {list.map((t) => {
        const w = partyFor(t.withHandle);
        return (
          <button
            key={t.id}
            onClick={() => onSelect(t.id)}
            className={cn(
              "glass-soft flex items-center gap-3 rounded-2xl px-3.5 py-3 text-left transition-all",
              sel === t.id && "border-accent/50 ring-1 ring-accent/30",
              t.state === "locked" && "opacity-75"
            )}
          >
            <Avatar name={w.name} size={42} />
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="flex min-w-0 items-center gap-1 text-[13.5px] font-semibold">
                  <span className="truncate">{w.short}</span>
                  {w.verified && <Verified size={11} />}
                </span>
                <span className="shrink-0 text-[10.5px] text-faint">{t.when}</span>
              </div>
              <div className="truncate text-[12px] text-mute">{t.last}</div>
              <StateBadge t={t} />
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default function Messages() {
  const { role } = useRole();
  const isLuminary = role === "luminary";
  const [seg, setSeg] = useState<"client" | "luminary">("client");
  const [sel, setSel] = useState<string | null>(null);

  // Members see only their own booked-Session chats. Luminaries get an inbox + the private floor.
  const memberThreads = THREADS.filter((t) => t.kind === "client");
  const luminaryClients = CLIENT_THREADS;
  const luminaryPeers = THREADS.filter((t) => t.kind === "luminary");

  const list = isLuminary
    ? seg === "client"
      ? luminaryClients
      : luminaryPeers
    : memberThreads;

  const selected = [...memberThreads, ...luminaryClients, ...luminaryPeers].find(
    (t) => t.id === sel
  );

  return (
    <Shell>
      {isLuminary ? (
        <>
          <div className="mb-4 flex items-center gap-1 rounded-full bg-wash p-1">
            {(
              [
                ["client", "Clients"],
                ["luminary", "Luminaries"],
              ] as const
            ).map(([id, name]) => (
              <button
                key={id}
                onClick={() => {
                  setSeg(id);
                  setSel(null);
                }}
                aria-pressed={seg === id}
                className={cn(
                  "flex flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-semibold transition-colors",
                  seg === id ? "bg-wash-2 text-ink" : "text-faint hover:text-mute"
                )}
              >
                {name}
                {id === "luminary" && (
                  <Sparkles size={11} strokeWidth={2.2} className="text-accent" />
                )}
              </button>
            ))}
          </div>
          <p className="mb-3 text-[11.5px] text-faint">
            {seg === "client"
              ? "People who booked you. Each chat opens 48h before their Session and stays open 7 days after."
              : "The private floor — Luminaries reach each other only here, by request."}
          </p>
        </>
      ) : (
        <>
          <h1 className="text-xl font-semibold">Messages</h1>
          <div className="glass-soft mb-4 mt-3 flex items-start gap-3 rounded-2xl px-4 py-3">
            <Lock size={15} strokeWidth={1.9} className="mt-0.5 shrink-0 text-faint" />
            <p className="text-[12.5px] leading-relaxed text-mute">
              You can&apos;t message a Luminary out of the blue — that&apos;s what keeps their
              attention worth something. Book a Session and this chat opens{" "}
              <span className="text-ink">48 hours before</span>, then stays open{" "}
              <span className="text-ink">7 days after</span>.
            </p>
          </div>
        </>
      )}

      {list.length === 0 ? (
        <div className="glass-soft rounded-3xl p-10 text-center">
          <MessageSquare size={30} strokeWidth={1.5} className="mx-auto text-faint" />
          <div className="mt-3 text-[14px] font-semibold">No conversations yet</div>
          <p className="mx-auto mt-1.5 max-w-xs text-[12.5px] leading-relaxed text-mute">
            {isLuminary
              ? seg === "client"
                ? "When someone books you, their chat appears here 48 hours before the Session."
                : "Connection requests from other Luminaries will land here."
              : "Book a Session with a Luminary and your conversation starts here."}
          </p>
          {!isLuminary && (
            <Link href="/explore" className="mt-5 inline-block">
              <Button>
                <Compass size={15} strokeWidth={1.9} /> Find a Luminary
              </Button>
            </Link>
          )}
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-[280px_1fr]">
          <ThreadList list={list} sel={sel} onSelect={setSel} />

          <div className={cn("glass-soft rounded-2xl p-4", !sel && "hidden md:block")}>
            {selected ? (
              <>
                <button
                  onClick={() => setSel(null)}
                  className="mb-2 inline-flex items-center gap-1.5 text-[12px] text-faint md:hidden"
                >
                  <ArrowLeft size={12} strokeWidth={2} /> All conversations
                </button>
                <ThreadView key={selected.id} t={selected} />
              </>
            ) : (
              <div className="flex h-full min-h-[380px] flex-col items-center justify-center text-center">
                <MessageSquare size={30} strokeWidth={1.5} className="text-faint" />
                <div className="mt-2 text-[13.5px] font-semibold">Pick a conversation</div>
                <p className="mt-1 max-w-[240px] text-[12px] leading-relaxed text-faint">
                  {isLuminary
                    ? "Client chats open 48h before each Session and stay open 7 days after."
                    : "Your Session chats live here."}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {!isLuminary && (
        <div className="glass-soft mt-4 flex items-center gap-3 rounded-2xl px-4 py-3.5">
          <CalendarClock size={16} strokeWidth={1.9} className="shrink-0 text-accent" />
          <p className="flex-1 text-[12.5px] leading-relaxed text-mute">
            Looking for someone specific? Browse verified Luminaries and book a Session to
            start talking.
          </p>
          <Link href="/explore" className="shrink-0 text-[12px] font-semibold vgrad-text">
            Explore →
          </Link>
        </div>
      )}
    </Shell>
  );
}

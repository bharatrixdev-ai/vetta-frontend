"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  Clock3,
  CreditCard,
  Eye,
  Lock,
  Radio,
  Settings2,
  Star,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { Shell } from "@/components/Shell";
import { Avatar } from "@/components/Avatar";
import { Button, GlassCard, SectionLabel, Verified } from "@/components/ui";
import {
  LUMINARY_EARNINGS,
  LUMINARY_REQUESTS,
  LUMINARY_SELF,
  LUMINARY_STATS,
  LUMINARY_UPCOMING,
} from "@/lib/data";
import { useRole } from "@/lib/role";
import { cn, inr } from "@/lib/utils";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function Metric({
  label,
  value,
  sub,
  delta,
  Icon,
}: {
  label: string;
  value: string;
  sub?: string;
  delta?: number;
  Icon: typeof Eye;
}) {
  return (
    <div className="glass-soft rounded-2xl p-4">
      <div className="flex items-start justify-between">
        <span className="text-[11.5px] font-medium text-faint">{label}</span>
        <Icon size={14} strokeWidth={1.9} className="text-faint" />
      </div>
      <div className="mt-2 text-[22px] font-semibold tracking-tight tabular-nums">{value}</div>
      {(sub || delta !== undefined) && (
        <div
          className={cn(
            "mt-0.5 text-[11.5px]",
            delta !== undefined ? (delta >= 0 ? "text-ok" : "text-danger") : "text-faint"
          )}
        >
          {delta !== undefined ? `${delta >= 0 ? "+" : ""}${delta}% this month` : sub}
        </div>
      )}
    </div>
  );
}

function EarningsChart() {
  const max = Math.max(...LUMINARY_EARNINGS.map((d) => d.amount));
  return (
    <div className="flex h-28 items-end gap-2">
      {LUMINARY_EARNINGS.map((d, i) => (
        <div key={d.month} className="group flex flex-1 flex-col items-center gap-1.5">
          <div className="relative w-full">
            <div
              className={cn(
                "w-full rounded-t-lg transition-all duration-300",
                i === LUMINARY_EARNINGS.length - 1 ? "vgrad" : "bg-wash-2"
              )}
              style={{ height: `${(d.amount / max) * 96}px` }}
            />
            <div className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-elev px-2 py-1 text-[10.5px] font-semibold tabular-nums opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
              {inr(d.amount)}
            </div>
          </div>
          <span className="text-[10.5px] text-faint">{d.month}</span>
        </div>
      ))}
    </div>
  );
}

function RoundtableComposer() {
  const [paid, setPaid] = useState(false);
  const [price, setPrice] = useState(199);
  const [title, setTitle] = useState("");

  return (
    <div className="mt-3 rounded-2xl border border-dashed border-line-2 p-4">
      <div className="text-[12.5px] font-semibold">Schedule a Roundtable</div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What's the table about?"
        aria-label="Roundtable title"
        className="mt-2.5 w-full rounded-xl border border-line bg-wash px-3.5 py-2.5 text-[13px] text-ink outline-none placeholder:text-faint focus:border-accent/50"
      />
      <div className="mt-3 flex items-center gap-1 rounded-full bg-wash p-1">
        {([[false, "Free"], [true, "Ticketed"]] as const).map(([v, label]) => (
          <button
            key={label}
            onClick={() => setPaid(v)}
            aria-pressed={paid === v}
            className={cn(
              "flex-1 rounded-full px-3 py-1.5 text-[12px] font-semibold transition-all",
              paid === v ? "vgrad text-white" : "text-faint hover:text-mute"
            )}
          >
            {label}
          </button>
        ))}
      </div>
      {paid && (
        <div className="anim-fade-up mt-3">
          <div className="flex items-center justify-between">
            <span className="text-[12.5px] text-mute">Ticket price</span>
            <span className="text-[13px] font-semibold tabular-nums vgrad-text">{inr(price)}</span>
          </div>
          <input
            type="range"
            min={49}
            max={999}
            step={50}
            value={price}
            aria-label="Ticket price in rupees"
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-2 w-full accent-[#4f8dff]"
          />
          <div className="mt-1 flex justify-between text-[10.5px] text-faint">
            <span>₹49</span>
            <span>you keep 90%</span>
            <span>₹999</span>
          </div>
        </div>
      )}
      <p className="mt-3 text-[11px] leading-relaxed text-faint">
        {paid
          ? "Ticket-holders get the live table, the recording and the transcript."
          : "Free tables are open to every member — good for building an audience."}
      </p>
      <Button className="mt-3 w-full !py-2 !text-[13px]">
        <Radio size={14} strokeWidth={1.9} /> Create table
      </Button>
    </div>
  );
}

export default function Studio() {
  const { role, setRole } = useRole();
  const [windowLen, setWindowLen] = useState(60);
  const [activeDays, setActiveDays] = useState<string[]>(["Tue", "Wed", "Thu", "Sat"]);
  const [requests, setRequests] = useState(
    LUMINARY_REQUESTS.map((r) => ({ ...r, state: r.state as "new" | "accepted" }))
  );

  const pending = requests.filter((r) => r.state === "new").length;

  if (role === "member") {
    return (
      <Shell>
        <div className="glass anim-fade-up rounded-3xl p-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-wash text-faint">
            <Lock size={24} strokeWidth={1.7} />
          </div>
          <h1 className="mt-4 text-lg font-semibold">Studio is for Luminaries</h1>
          <p className="mx-auto mt-2 max-w-sm text-[13.5px] leading-relaxed text-mute">
            Hosting Roundtables and opening paid Session slots requires a verified
            Luminary account. As a member you can join any Roundtable, book Sessions,
            post Notes and reply to them.
          </p>

          <div className="mx-auto mt-6 grid max-w-sm gap-2 text-left">
            {[
              [Check, "Join any Roundtable — free or ticketed", true],
              [Check, "Book Sessions with any Luminary", true],
              [Check, "Post Notes and reply in the feed", true],
              [Lock, "Host Roundtables", false],
              [Lock, "Take paid Sessions", false],
            ].map(([Icon, label, allowed], i) => {
              const I = Icon as typeof Check;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2.5 rounded-xl bg-wash px-3.5 py-2.5"
                >
                  <I
                    size={14}
                    strokeWidth={2.1}
                    className={allowed ? "text-ok" : "text-faint"}
                  />
                  <span
                    className={cn(
                      "text-[13px]",
                      allowed ? "text-ink" : "text-faint"
                    )}
                  >
                    {label as string}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            <Link href="/apply">
              <Button>Apply to become a Luminary</Button>
            </Link>
            <Button variant="ghost" onClick={() => setRole("luminary")}>
              <Eye size={14} strokeWidth={1.9} /> Preview the Luminary side
            </Button>
          </div>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      {/* Header */}
      <div className="mb-5 flex items-start justify-between gap-3">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-faint">
            Luminary Studio
          </div>
          <h1 className="mt-1 text-xl font-semibold">Your practice, managed.</h1>
        </div>
        <Link href={`/profile/${LUMINARY_SELF.handle}`}>
          <Button variant="ghost" className="!px-3.5 !py-2 !text-[12.5px]">
            <Eye size={14} strokeWidth={1.9} /> Public page
          </Button>
        </Link>
      </div>


      {/* Identity */}
      <GlassCard className="p-5">
        <div className="flex items-center gap-3.5">
          <Avatar name={LUMINARY_SELF.name} size={54} ring />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 text-[15px] font-semibold">
              {LUMINARY_SELF.name} <Verified size={13} />
            </div>
            <div className="truncate text-[12.5px] text-mute">{LUMINARY_SELF.title}</div>
            <div className="mt-0.5 text-[11.5px] text-faint">
              vetta.network/{LUMINARY_SELF.handle}
            </div>
          </div>
          <div className="hidden text-right sm:block">
            <div className="flex items-center justify-end gap-1 text-[14px] font-semibold">
              <Star size={13} strokeWidth={2} className="text-warn" fill="currentColor" />
              {LUMINARY_STATS.avgRating}
            </div>
            <div className="text-[11px] text-faint">{LUMINARY_SELF.sessionsDone} Sessions</div>
          </div>
        </div>
      </GlassCard>

      {/* Metrics */}
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Metric label="Profile views" value="1,284" delta={LUMINARY_STATS.viewsDelta} Icon={Eye} />
        <Metric
          label="Booking rate"
          value={`${LUMINARY_STATS.conversion}%`}
          sub="views → Sessions"
          Icon={TrendingUp}
        />
        <Metric
          label="Repeat clients"
          value={`${LUMINARY_STATS.repeatRate}%`}
          sub="book again"
          Icon={Users}
        />
        <Metric label="Avg. response" value="~2h" sub="members notice this" Icon={Clock3} />
      </div>

      {/* Earnings */}
      <GlassCard className="mt-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <SectionLabel>Earnings</SectionLabel>
            <div className="mt-2 text-[30px] font-semibold tracking-tight tabular-nums vgrad-text">
              {inr(LUMINARY_STATS.monthEarnings)}
            </div>
            <div className="text-[12px] text-faint">
              July · {LUMINARY_STATS.sessionsThisMonth} Sessions ·{" "}
              {LUMINARY_STATS.ticketedTables} ticketed Roundtables
            </div>
          </div>
          <div className="text-right">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-ok/12 px-2.5 py-1 text-[11px] font-medium text-ok">
              <CreditCard size={12} strokeWidth={2} /> Razorpay linked
            </span>
            <div className="mt-2 text-[13px] font-semibold tabular-nums">
              {inr(LUMINARY_STATS.pendingPayout)}
            </div>
            <div className="text-[11px] text-faint">payout {LUMINARY_STATS.payoutDay}</div>
          </div>
        </div>
        <div className="mt-5">
          <EarningsChart />
        </div>
      </GlassCard>

      {/* Requests */}
      <GlassCard className="mt-4 p-5">
        <div className="flex items-center justify-between">
          <SectionLabel>Session requests</SectionLabel>
          {pending > 0 && (
            <span className="rounded-full vgrad px-2 py-0.5 text-[10.5px] font-bold text-white">
              {pending} waiting
            </span>
          )}
        </div>
        <div className="mt-3 space-y-2">
          {requests.map((r) => (
            <div key={r.id} className="rounded-2xl bg-wash px-4 py-3.5">
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2.5">
                  <Avatar name={r.name} size={36} />
                  <div className="min-w-0">
                    <div className="truncate text-[13.5px] font-semibold">{r.name}</div>
                    <div className="truncate text-[11.5px] text-faint">{r.what}</div>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <span className="text-[13px] font-semibold tabular-nums">{inr(r.price)}</span>
                  {r.state === "new" ? (
                    <div className="flex gap-1.5">
                      <button
                        aria-label={`Accept request from ${r.name}`}
                        onClick={() =>
                          setRequests((p) =>
                            p.map((x) =>
                              x.id === r.id ? { ...x, state: "accepted" as const } : x
                            )
                          )
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-full vgrad text-white transition-transform active:scale-90"
                      >
                        <Check size={15} strokeWidth={2.4} />
                      </button>
                      <button
                        aria-label={`Decline request from ${r.name}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-faint transition-colors hover:text-ink"
                      >
                        <X size={14} strokeWidth={2.2} />
                      </button>
                    </div>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-ok">
                      <Check size={12} strokeWidth={2.6} /> Confirmed
                    </span>
                  )}
                </div>
              </div>
              <p className="mt-2 text-[12px] italic leading-relaxed text-mute">“{r.note}”</p>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Upcoming */}
      <GlassCard className="mt-4 p-5">
        <SectionLabel>Upcoming Sessions</SectionLabel>
        <div className="mt-3 space-y-2">
          {LUMINARY_UPCOMING.map((u) => (
            <div key={u.id} className="flex items-center gap-3 rounded-2xl bg-wash px-4 py-3">
              <Avatar name={u.who} size={34} />
              <div className="min-w-0 flex-1">
                <div className="truncate text-[13.5px] font-semibold">{u.who}</div>
                <div className="text-[11.5px] text-faint">
                  {u.what} · {u.when}
                </div>
              </div>
              {u.mins < 15 ? (
                <Link href={`/session/${u.id}`}>
                  <Button className="!px-3.5 !py-1.5 !text-[12px]">Green Room</Button>
                </Link>
              ) : (
                <span className="text-[11.5px] text-faint">in {Math.round(u.mins / 60)}h</span>
              )}
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Availability */}
      <GlassCard className="mt-4 p-5">
        <div className="flex items-center justify-between">
          <SectionLabel>Availability</SectionLabel>
          <Settings2 size={15} strokeWidth={1.9} className="text-faint" />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {DAYS.map((d) => (
            <button
              key={d}
              onClick={() =>
                setActiveDays((p) => (p.includes(d) ? p.filter((x) => x !== d) : [...p, d]))
              }
              className={cn(
                "min-h-[40px] rounded-full border px-4 text-[13px] font-semibold transition-all",
                activeDays.includes(d)
                  ? "border-transparent vgrad text-white"
                  : "border-line text-faint hover:text-mute"
              )}
            >
              {d}
            </button>
          ))}
        </div>
        <div className="mt-3 text-[12.5px] text-mute">
          Evening slots · 7:00–9:30 PM IST · 30-min buffer
        </div>

        <div className="mt-5 rounded-2xl bg-wash p-4">
          <div className="flex items-center justify-between">
            <div className="text-[13.5px] font-semibold">Booking window</div>
            <div className="text-[13.5px] font-semibold tabular-nums vgrad-text">
              {windowLen} days · rolling
            </div>
          </div>
          <input
            type="range"
            min={7}
            max={60}
            value={windowLen}
            aria-label="Booking window length in days"
            onChange={(e) => setWindowLen(Number(e.target.value))}
            className="mt-3 w-full accent-[#4f8dff]"
          />
          <div className="mt-1 flex justify-between text-[10.5px] text-faint">
            <span>7 days</span>
            <span>60 days (platform max)</span>
          </div>
          <p className="mt-3 text-[11.5px] leading-relaxed text-faint">
            IRCTC logic: members book at most {windowLen} days out; a new day opens every
            midnight as one rolls off. Nobody — however in-demand — gets queued for years.
          </p>
        </div>
      </GlassCard>

      {/* Offers + Roundtables */}
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <GlassCard className="p-5">
          <SectionLabel>Your offers</SectionLabel>
          <div className="mt-3 space-y-2">
            {LUMINARY_SELF.formats.map((f) => (
              <div
                key={f.id}
                className="flex items-center justify-between rounded-xl bg-wash px-3.5 py-2.5"
              >
                <div className="min-w-0">
                  <div className="truncate text-[13px] font-semibold">{f.label}</div>
                  <div className="text-[11px] text-faint">
                    {f.mins > 0 ? `${f.mins} min` : "48h turnaround"}
                  </div>
                </div>
                <span className="text-[13px] font-semibold tabular-nums">{inr(f.price)}</span>
              </div>
            ))}
          </div>
          <Button variant="ghost" className="mt-3 w-full !py-2 !text-[13px]">
            Edit offers
          </Button>
        </GlassCard>

        <GlassCard className="p-5">
          <div className="flex items-center justify-between">
            <SectionLabel>Roundtables</SectionLabel>
            <BarChart3 size={15} strokeWidth={1.9} className="text-faint" />
          </div>
          <div className="mt-3 rounded-2xl bg-wash px-4 py-3.5">
            <div className="text-[13px] font-semibold">Clinical AI — hype vs practice</div>
            <div className="mt-0.5 text-[11.5px] text-faint">
              Today · 9:00 PM · {inr(199)} · 61 tickets sold
            </div>
            <div className="mt-2 inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-ok">
              <TrendingUp size={12} strokeWidth={2.2} /> {inr(12139)} gross
            </div>
          </div>
          <RoundtableComposer />
        </GlassCard>
      </div>

      <Link
        href={`/profile/${LUMINARY_SELF.handle}`}
        className="glass-soft lift mt-4 flex items-center justify-between rounded-2xl px-5 py-4"
      >
        <div>
          <div className="text-[13.5px] font-semibold">See what members see</div>
          <div className="text-[12px] text-mute">Your public page, Provenance and reviews</div>
        </div>
        <ArrowUpRight size={16} strokeWidth={2} className="text-faint" />
      </Link>
    </Shell>
  );
}

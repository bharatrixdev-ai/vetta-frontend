"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BadgeCheck,
  Bell,
  ChevronRight,
  CreditCard,
  Database,
  Eye,
  Globe,
  Image as ImageIcon,
  KeyRound,
  LifeBuoy,
  LogOut,
  Moon,
  RefreshCw,
  Shield,
  Sliders,
  Sun,
  Trash2,
  UserRound,
} from "lucide-react";
import { Shell } from "@/components/Shell";
import { Avatar } from "@/components/Avatar";
import { Button, SectionLabel, Verified } from "@/components/ui";
import { FIELDS } from "@/lib/data";
import { useRole } from "@/lib/role";
import { cn } from "@/lib/utils";

type Visibility = "everyone" | "members" | "nobody";

const TILES = [
  { id: "privacy", label: "Privacy", Icon: Shield },
  { id: "feed", label: "Your feed", Icon: Sliders },
  { id: "theme", label: "Theme", Icon: Moon },
  { id: "notifications", label: "Alerts", Icon: Bell },
  { id: "payments", label: "Payments", Icon: CreditCard },
  { id: "language", label: "Language", Icon: Globe },
  { id: "password", label: "Password", Icon: KeyRound },
  { id: "data", label: "Your data", Icon: Database },
] as const;

function Row({
  label,
  value,
  Icon,
  danger,
  onClick,
}: {
  label: string;
  value?: string;
  Icon?: typeof Shield;
  danger?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors hover:bg-wash",
        danger && "text-danger"
      )}
    >
      {Icon && (
        <Icon
          size={17}
          strokeWidth={1.85}
          className={danger ? "text-danger" : "text-mute"}
        />
      )}
      <span className={cn("flex-1 text-[14px] font-medium", !danger && "text-ink")}>{label}</span>
      {value && <span className="text-[13px] text-faint">{value}</span>}
      <ChevronRight size={15} strokeWidth={2} className="text-faint" />
    </button>
  );
}

function Toggle({
  on,
  onChange,
  label,
}: {
  on: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={() => onChange(!on)}
      className={cn(
        "relative h-[26px] w-[46px] shrink-0 rounded-full transition-colors duration-200",
        on ? "vgrad" : "bg-wash-2"
      )}
    >
      <span
        className={cn(
          "absolute top-[3px] h-5 w-5 rounded-full bg-white shadow transition-transform duration-200",
          on ? "translate-x-[23px]" : "translate-x-[3px]"
        )}
      />
    </button>
  );
}

export default function Settings() {
  const { me, role } = useRole();
  const [vis, setVis] = useState<Visibility>("everyone");
  const [active, setActive] = useState<string>("privacy");
  const [light, setLight] = useState(false);
  const [fields, setFields] = useState<string[]>(["medicine", "ai", "careers"]);
  const [alerts, setAlerts] = useState({
    sessions: true,
    messages: true,
    tables: false,
    digest: true,
  });

  const toggleTheme = (v: boolean) => {
    setLight(v);
    document.documentElement.classList.toggle("light", v);
    document.cookie = `vetta-theme=${v ? "light" : "dark"}; path=/; max-age=31536000; samesite=lax`;
  };

  return (
    <Shell>
      <h1 className="text-xl font-semibold">Settings</h1>
      <p className="mt-1 text-[13px] text-mute">
        Control who sees you, what reaches you, and what shapes your feed.
      </p>

      {/* Identity */}
      <div className="glass mt-5 flex items-center gap-3.5 rounded-3xl p-5">
        <Avatar name={me.name} size={52} ring />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 text-[15px] font-semibold">
            <span className="truncate">{me.name}</span>
            {me.isLuminary && <Verified size={13} />}
          </div>
          <div className="truncate text-[12.5px] text-mute">{me.title}</div>
          <div className="text-[11.5px] text-faint">vetta.network/{me.handle}</div>
        </div>
        <Link href={`/profile/${me.handle}`}>
          <Button variant="ghost" className="!px-3.5 !py-2 !text-[12.5px]">
            Edit
          </Button>
        </Link>
      </div>

      {/* Visibility segmented control */}
      <div className="glass mt-4 rounded-3xl p-5">
        <SectionLabel>Who can see your Notes</SectionLabel>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {(
            [
              ["everyone", "Everyone", Globe],
              ["members", "Members", UserRound],
              ["nobody", "Nobody", Eye],
            ] as const
          ).map(([id, label, Icon]) => (
            <button
              key={id}
              onClick={() => setVis(id)}
              aria-pressed={vis === id}
              className={cn(
                "flex min-h-[74px] flex-col items-center justify-center gap-1.5 rounded-2xl border transition-all duration-200",
                vis === id
                  ? "border-transparent bg-surface shadow-[var(--card-shadow)] ring-1 ring-accent/40"
                  : "border-line bg-wash text-mute hover:border-line-2"
              )}
            >
              <Icon
                size={18}
                strokeWidth={1.9}
                className={vis === id ? "text-accent" : "text-faint"}
              />
              <span className={cn("text-[12px] font-semibold", vis === id && "text-ink")}>
                {label}
              </span>
            </button>
          ))}
        </div>
        <p className="mt-3 text-[11.5px] leading-relaxed text-faint">
          {vis === "everyone"
            ? "Your Notes appear in public feeds and search."
            : vis === "members"
            ? "Only signed-in Vetta members can see your Notes."
            : "Your Notes stay private — only you can see them."}
        </p>
      </div>

      {/* Circular tile grid */}
      <div className="glass mt-4 rounded-3xl p-5">
        <SectionLabel>All settings</SectionLabel>
        <div className="mt-4 grid grid-cols-4 gap-y-5">
          {TILES.map(({ id, label, Icon }) => {
            const on = active === id;
            return (
              <button
                key={id}
                onClick={() => setActive(id)}
                aria-pressed={on}
                className="flex flex-col items-center gap-2"
              >
                <span
                  className={cn(
                    "flex h-[54px] w-[54px] items-center justify-center rounded-full transition-all duration-200",
                    on
                      ? "vgrad text-white shadow-[0_8px_20px_rgba(79,141,255,0.35)]"
                      : "bg-wash text-mute hover:bg-wash-2"
                  )}
                >
                  <Icon size={20} strokeWidth={1.85} />
                </span>
                <span
                  className={cn(
                    "text-[11.5px] font-medium",
                    on ? "text-ink" : "text-faint"
                  )}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Panel — changes with the selected tile */}
      <div className="glass-soft mt-4 overflow-hidden rounded-3xl">
        {active === "privacy" && (
          <>
            <div className="border-b border-line px-4 pt-4 pb-2">
              <SectionLabel>Privacy</SectionLabel>
            </div>
            <Row label="Phone number" value="No one" Icon={Shield} />
            <Row label="Email address" value="No one" Icon={Shield} />
            <Row label="Who can book you" value={role === "luminary" ? "Any member" : "—"} Icon={UserRound} />
            <Row label="Blocked accounts" value="0" Icon={Eye} />
            <div className="flex items-center justify-between gap-3 border-t border-line px-4 py-3.5">
              <div>
                <div className="text-[14px] font-medium">Direct messages</div>
                <p className="mt-0.5 text-[11.5px] leading-relaxed text-mute">
                  {role === "luminary"
                    ? "Members can only message you after booking a Session — chat opens 48h before. Luminaries can request to connect."
                    : "You can message a Luminary once you've booked a Session with them."}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-wash-2 px-2.5 py-1 text-[10.5px] font-semibold text-faint">
                Locked
              </span>
            </div>
          </>
        )}

        {active === "feed" && (
          <div className="p-5">
            <SectionLabel>Your feed</SectionLabel>
            <p className="mt-2 text-[12.5px] leading-relaxed text-mute">
              These fields are the whole algorithm. Nothing else ranks your feed — no
              watch time, no ad bidding.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {FIELDS.map((f) => {
                const on = fields.includes(f.id);
                return (
                  <button
                    key={f.id}
                    onClick={() =>
                      setFields((p) =>
                        p.includes(f.id) ? p.filter((x) => x !== f.id) : [...p, f.id]
                      )
                    }
                    aria-pressed={on}
                    className={cn(
                      "rounded-full border px-3.5 py-2 text-[12.5px] font-medium transition-all",
                      on
                        ? "border-transparent vgrad text-white"
                        : "border-line text-mute hover:border-line-2 hover:text-ink"
                    )}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
            <p className="mt-4 text-[11.5px] text-faint">{fields.length} fields active</p>
          </div>
        )}

        {active === "theme" && (
          <div className="p-5">
            <SectionLabel>Theme</SectionLabel>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {(
                [
                  [false, "Dark Mode", Moon, "#0b0b0c", "#f4f5f7"],
                  [true, "Light Mode", Sun, "#f4f5f8", "#0f1218"],
                ] as const
              ).map(([val, label, Icon, bg, fg]) => (
                <button
                  key={label}
                  onClick={() => toggleTheme(val)}
                  aria-pressed={light === val}
                  className={cn(
                    "rounded-2xl border p-4 transition-all text-left flex flex-col justify-between h-28",
                    light === val ? "border-accent bg-accent/10 ring-1 ring-accent/40" : "border-line bg-wash hover:border-line-2"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <Icon size={20} className={light === val ? "text-accent" : "text-mute"} />
                    {light === val && <span className="h-2 w-2 rounded-full bg-accent" />}
                  </div>
                  <div className="text-[13.5px] font-semibold text-ink">{label}</div>
                </button>
              ))}
            </div>
            <p className="mt-3.5 text-[12px] leading-relaxed text-mute">
              Theme defaults to your system settings, or choose Dark / Light mode above.
            </p>
          </div>
        )}

        {active === "notifications" && (
          <>
            <div className="border-b border-line px-4 pt-4 pb-2">
              <SectionLabel>Alerts</SectionLabel>
            </div>
            {(
              [
                ["sessions", "Session reminders", "24h and 10 min before"],
                ["messages", "New messages", "When a chat unlocks or replies arrive"],
                ["tables", "Roundtables going live", "From Luminaries you follow"],
                ["digest", "Weekly digest", "The best Notes in your fields"],
              ] as const
            ).map(([id, label, sub]) => (
              <div
                key={id}
                className="flex items-center justify-between gap-3 border-b border-line px-4 py-3.5 last:border-0"
              >
                <div>
                  <div className="text-[14px] font-medium">{label}</div>
                  <div className="mt-0.5 text-[11.5px] text-mute">{sub}</div>
                </div>
                <Toggle
                  label={label}
                  on={alerts[id]}
                  onChange={(v) => setAlerts((p) => ({ ...p, [id]: v }))}
                />
              </div>
            ))}
          </>
        )}

        {active === "payments" && (
          <>
            <div className="border-b border-line px-4 pt-4 pb-2">
              <SectionLabel>Payments</SectionLabel>
            </div>
            <Row label="Payment methods" value="UPI · ••4821" Icon={CreditCard} />
            <Row label="Invoices & GST" value="12 receipts" Icon={Database} />
            <Row label="Refund status" value="None pending" Icon={RefreshCw} />
            {role === "luminary" && (
              <Row label="Payout account" value="Razorpay linked" Icon={BadgeCheck} />
            )}
          </>
        )}

        {active === "language" && (
          <>
            <div className="border-b border-line px-4 pt-4 pb-2">
              <SectionLabel>Language & region</SectionLabel>
            </div>
            <Row label="App language" value="English" Icon={Globe} />
            <Row label="Time zone" value="IST (GMT+5:30)" Icon={Globe} />
            <Row label="Currency" value="INR ₹" Icon={CreditCard} />
          </>
        )}

        {active === "password" && (
          <>
            <div className="border-b border-line px-4 pt-4 pb-2">
              <SectionLabel>Security</SectionLabel>
            </div>
            <Row label="Change password" Icon={KeyRound} />
            <Row label="Two-factor authentication" value="Off" Icon={Shield} />
            <Row label="Active sessions" value="2 devices" Icon={UserRound} />
          </>
        )}

        {active === "data" && (
          <>
            <div className="border-b border-line px-4 pt-4 pb-2">
              <SectionLabel>Your data</SectionLabel>
            </div>
            <Row label="Download your data" value="Notes, Sessions, receipts" Icon={Database} />
            <Row label="Session recordings" value="Kept 90 days" Icon={ImageIcon} />
            <Row label="Delete account" Icon={Trash2} danger />
          </>
        )}
      </div>

      {/* Authenticity pledge */}
      <div className="glass-soft mt-4 rounded-3xl p-5">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-wash text-ok">
            <BadgeCheck size={17} strokeWidth={1.9} />
          </span>
          <div>
            <div className="text-[13.5px] font-semibold">Authenticity pledge</div>
            <p className="mt-1 text-[12.5px] leading-relaxed text-mute">
              You agreed that everything here is genuinely yours. AI tools for building and
              research are fine — synthetic identities, deepfakes and fabricated credentials
              are not, and cost the account.
            </p>
          </div>
        </div>
      </div>

      {/* Footer actions */}
      <div className="glass-soft mt-4 overflow-hidden rounded-3xl">
        <Row label="Help & support" Icon={LifeBuoy} />
        <Row label="Terms, privacy & refunds" Icon={Shield} />
        <Row label="Log out" Icon={LogOut} danger />
      </div>

      <p className="mt-5 text-center text-[11.5px] text-faint">Vetta · v1.0 prototype</p>
    </Shell>
  );
}

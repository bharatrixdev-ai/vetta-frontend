import { cn } from "@/lib/utils";

export function GlassCard({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div className={cn("glass rounded-2xl", className)} onClick={onClick}>
      {children}
    </div>
  );
}

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "text-[11px] font-semibold uppercase tracking-[0.14em] text-faint",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Chip({
  children,
  active,
  className,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "whitespace-nowrap rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors",
        active
          ? "border-transparent vgrad text-white"
          : "border-line bg-wash text-mute hover:text-ink hover:border-line-2",
        className
      )}
    >
      {children}
    </button>
  );
}

export function Button({
  children,
  variant = "primary",
  className,
  onClick,
  type = "button",
  disabled,
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "glass" | "danger";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none",
        variant === "primary" &&
          "vgrad text-white shadow-[0_8px_24px_rgba(79,141,255,0.35)] hover:shadow-[0_10px_32px_rgba(79,141,255,0.5)] hover:brightness-110",
        variant === "ghost" &&
          "border border-line bg-transparent text-ink hover:bg-wash-2",
        variant === "glass" && "glass text-ink hover:bg-wash-2",
        variant === "danger" && "bg-danger text-white hover:brightness-110",
        className
      )}
    >
      {children}
    </button>
  );
}

export function Verified({ className, size = 14 }: { className?: string; size?: number }) {
  return (
    <svg
      suppressHydrationWarning
      viewBox="0 0 20 20"
      width={size}
      height={size}
      className={cn("inline-block shrink-0", className)}
      aria-label="Verified Luminary"
    >
      <defs>
        <linearGradient id="vbadge" x1="0" y1="0" x2="20" y2="20">
          <stop stopColor="#4F8DFF" />
          <stop offset="1" stopColor="#7C6FFF" />
        </linearGradient>
      </defs>
      <path
        d="M10 1.5l2.1 1.6 2.6-.3 1 2.4 2.4 1-.3 2.6L19.4 10l-1.6 2.1.3 2.6-2.4 1-1 2.4-2.6-.3L10 19.4l-2.1-1.6-2.6.3-1-2.4-2.4-1 .3-2.6L.6 10l1.6-2.1-.3-2.6 2.4-1 1-2.4 2.6.3L10 1.5z"
        fill="url(#vbadge)"
      />
      <path
        d="M6.4 10.2l2.3 2.3 4.6-4.8"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function Stat({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("text-center", className)}>
      <div className="text-lg font-semibold tabular-nums">{value}</div>
      <div className="mt-0.5 text-[11px] uppercase tracking-wider text-faint">{label}</div>
    </div>
  );
}

import { cn } from "@/lib/utils";

/** The Vetta ribbon-V — blue left stroke, lilac→violet right sweeping into the tail. */
export function VMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={cn("h-8 w-8", className)} aria-hidden fill="none">
      <defs>
        <linearGradient id="vgL" x1="10" y1="10" x2="26" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#63A0FF" />
          <stop offset="1" stopColor="#3E6FE8" />
        </linearGradient>
        <linearGradient id="vgR" x1="38" y1="10" x2="24" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CFC7FF" />
          <stop offset="1" stopColor="#6E5BF0" />
        </linearGradient>
      </defs>
      {/* left stroke */}
      <path
        d="M10.2 11.4c-1.5-.9-3.3.3-3 2l.8 4.7c.2 1.3 1 2.5 2.1 3.2l13.2 14.9-9.5-22.4a4.9 4.9 0 0 0-3.6-2.4Z"
        fill="url(#vgL)"
      />
      <path d="M9 10.8 23.3 36.2 20 20.5c-.3-1.4-1.2-2.6-2.5-3.3L9 10.8Z" fill="url(#vgL)" />
      {/* right stroke — sweeps down into the tail */}
      <path
        d="M39.8 10.6c1.6-.8 3.4.5 3 2.2l-3.2 14.7a7.6 7.6 0 0 1-2.6 4.2l-8.6 7.2c-1.7 1.4-4.2 0-4-2.2l1.9-16.5c.2-1.6 1.1-3 2.5-3.8l11-5.8Z"
        fill="url(#vgR)"
      />
    </svg>
  );
}

/** App-icon tile — dark in dark mode, white in light mode (matches the brand icons). */
export function AppTile({ className, mark }: { className?: string; mark?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-[22%] border border-line bg-surface shadow-[var(--card-shadow)]",
        className
      )}
    >
      <VMark className={cn("h-[52%] w-[52%]", mark)} />
    </div>
  );
}

export function Logo({
  className,
  wordClass,
}: {
  className?: string;
  wordClass?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <VMark />
      <span
        className={cn(
          "text-lg font-semibold lowercase tracking-[0.06em] text-ink",
          wordClass
        )}
      >
        vetta
      </span>
    </span>
  );
}

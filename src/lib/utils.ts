export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/** Deterministic tiny hash — used instead of Math.random so SSR and client agree. */
export function hash(s: string): number {
  let x = 7;
  for (let i = 0; i < s.length; i++) x = (x * 31 + s.charCodeAt(i)) % 100003;
  return x;
}

export function inr(n: number): string {
  return "₹" + n.toLocaleString("en-IN");
}

const HUES = [
  ["#4f8dff", "#7c6fff"],
  ["#ff8a5c", "#ff5d8f"],
  ["#28c76f", "#4f8dff"],
  ["#f5b14c", "#ff8a5c"],
  ["#7c6fff", "#c56fff"],
  ["#3ec6e0", "#4f8dff"],
  ["#ff5d8f", "#7c6fff"],
  ["#9adf5c", "#28c76f"],
];

export function hueFor(seed: string): [string, string] {
  const h = HUES[hash(seed) % HUES.length];
  return [h[0], h[1]];
}

export function initials(name: string): string {
  return name
    .replace(/^Dr\.\s+/i, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/** Day labels for the rolling booking window. */
export function windowDays(count = 74): Array<{
  idx: number;
  label: string;
  weekday: string;
  inWindow: boolean;
  full: boolean;
  slots: string[];
}> {
  const days = [];
  const base = new Date(2026, 6, 28); // fixed date → deterministic prototype
  for (let i = 1; i <= count; i++) {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    const inWindow = i <= 60;
    const seed = hash("day" + i);
    const full = inWindow && seed % 5 === 0;
    const off = seed % 7 === 3; // luminary's day off
    const slotPool = ["7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"];
    const slots =
      inWindow && !full && !off
        ? slotPool.filter((_, j) => (seed + j) % 3 !== 0).slice(0, 3 + (seed % 3))
        : [];
    days.push({
      idx: i,
      label: d.toLocaleDateString("en-IN", { day: "numeric", month: "short" }),
      weekday: d.toLocaleDateString("en-IN", { weekday: "short" }),
      inWindow,
      full: full || (inWindow && off && false),
      slots,
    });
  }
  return days;
}

import Link from "next/link";
import { Avatar } from "@/components/Avatar";
import { Verified } from "@/components/ui";
import { inr } from "@/lib/utils";
import type { Luminary } from "@/lib/data";

export function LuminaryCard({ l, delay }: { l: Luminary; delay?: number }) {
  return (
    <Link
      href={`/profile/${l.handle}`}
      className="glass-soft lift anim-fade-up block rounded-2xl p-4"
      style={delay ? { animationDelay: `${delay * 60}ms` } : undefined}
    >
      <div className="flex items-center gap-3">
        <Avatar name={l.name} size={52} ring />
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 text-[14.5px] font-semibold">
            <span className="truncate">{l.name}</span> <Verified />
          </div>
          <div className="truncate text-[12.5px] text-mute">{l.title}</div>
          <div className="mt-0.5 text-[11.5px] text-faint">
            ★ {l.rating.toFixed(1)} · {l.sessionsDone} Sessions · {l.years} yrs
          </div>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {l.tags.slice(0, 3).map((t) => (
          <span
            key={t}
            className="rounded-full bg-wash px-2.5 py-1 text-[11px] font-medium text-mute"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-line pt-3">
        <div className="text-[12px] text-faint">
          Next: <span className="text-mute">{l.nextSlot}</span>
        </div>
        <div className="text-[13px] font-semibold">
          from <span className="vgrad-text">{inr(l.priceFrom)}</span>
        </div>
      </div>
    </Link>
  );
}

import { cn, hueFor, initials } from "@/lib/utils";

export function Avatar({
  name,
  seed,
  size = 40,
  className,
  ring,
}: {
  name: string;
  seed?: string;
  size?: number;
  className?: string;
  ring?: boolean;
}) {
  const [a, b] = hueFor(seed ?? name);
  return (
    <div
      className={cn(
        "relative flex shrink-0 select-none items-center justify-center rounded-full font-semibold text-white",
        ring && "ring-2 ring-line-2",
        className
      )}
      style={{
        width: size,
        height: size,
        fontSize: Math.max(10, size * 0.34),
        backgroundImage: `linear-gradient(135deg, ${a}, ${b})`,
      }}
      aria-hidden
    >
      {initials(name)}
    </div>
  );
}

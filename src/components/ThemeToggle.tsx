"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const [light, setLight] = useState(false);

  useEffect(() => {
    setLight(document.documentElement.classList.contains("light"));
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    // Cookie so the server can render the right theme on the next request.
    document.cookie = `vetta-theme=${next ? "light" : "dark"}; path=/; max-age=31536000; samesite=lax`;
  };

  return (
    <button
      type="button"
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      aria-pressed={light}
      onClick={toggle}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full border border-line bg-wash text-mute transition-all duration-200 hover:border-line-2 hover:text-ink active:scale-95",
        className
      )}
    >
      {light ? <Moon size={17} strokeWidth={1.8} /> : <Sun size={17} strokeWidth={1.8} />}
    </button>
  );
}

"use client";

import { Eye } from "lucide-react";
import { useRole } from "@/lib/role";
import { cn } from "@/lib/utils";

/** Prototype affordance: flip between the member and Luminary experience. */
export function RoleSwitch({ className }: { className?: string }) {
  const { role, setRole } = useRole();

  return (
    <div className={cn("rounded-2xl border border-dashed border-line-2 p-2.5", className)}>
      <div className="mb-2 flex items-center gap-1.5 px-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-faint">
        <Eye size={11} strokeWidth={2.2} /> Viewing as
      </div>
      <div className="flex items-center gap-1 rounded-full bg-wash p-1">
        {(
          [
            ["member", "Member"],
            ["luminary", "Luminary"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            onClick={() => setRole(id)}
            className={cn(
              "flex-1 rounded-full px-3 py-1.5 text-[12px] font-semibold transition-all",
              role === id ? "vgrad text-white shadow-sm" : "text-faint hover:text-mute"
            )}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

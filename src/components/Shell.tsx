"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo, VMark } from "@/components/Logo";
import { Avatar } from "@/components/Avatar";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  BarChart3,
  Settings as SettingsIcon,
  Compass,
  Home,
  MessageSquare,
  User,
} from "lucide-react";
import { RoleSwitch } from "@/components/RoleSwitch";
import { CreateButton } from "@/components/CreateSheet";
import { Verified } from "@/components/ui";
import { useRole } from "@/lib/role";
import { cn } from "@/lib/utils";

type IconCmp = typeof Home;

function tabsFor(handle: string): Array<{ href: string; label: string; Icon: IconCmp }> {
  return [
    { href: "/app", label: "Home", Icon: Home },
    { href: "/discover", label: "Discover", Icon: Compass },
    { href: "/messages", label: "Messages", Icon: MessageSquare },
    { href: `/profile/${handle}`, label: "Profile", Icon: User },
  ];
}

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { me, role } = useRole();
  const TABS = tabsFor(me.handle);
  const isActive = (href: string) =>
    href === "/app" ? pathname === "/app" : pathname.startsWith(href.split("/")[1] ? `/${href.split("/")[1]}` : href);

  return (
    <div className="min-h-dvh bg-bg">
      {/* Desktop rail */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[228px] flex-col border-r border-line bg-bg/85 px-4 py-6 backdrop-blur-xl md:flex">
        <div className="flex items-center justify-between px-2">
          <Link href="/app" aria-label="Vetta home">
            <Logo />
          </Link>
          <ThemeToggle className="h-8 w-8" />
        </div>

        <nav className="mt-8 flex flex-1 flex-col gap-1">
          {TABS.map(({ href, label, Icon }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium transition-colors",
                  active ? "bg-wash-2 text-ink" : "text-mute hover:bg-wash hover:text-ink"
                )}
              >
                <Icon size={20} strokeWidth={active ? 2.1 : 1.75} />
                {label}
              </Link>
            );
          })}

          <div className="mx-3 my-3 border-t border-line" />

          {role === "luminary" && (
            <Link
              href="/studio"
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium transition-colors",
                isActive("/studio") ? "bg-wash-2 text-ink" : "text-mute hover:bg-wash hover:text-ink"
              )}
            >
              <BarChart3 size={20} strokeWidth={isActive("/studio") ? 2.1 : 1.75} />
              Studio
            </Link>
          )}

          <Link
            href="/settings"
            className={cn(
              "flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium transition-colors",
              isActive("/settings") ? "bg-wash-2 text-ink" : "text-mute hover:bg-wash hover:text-ink"
            )}
          >
            <SettingsIcon size={20} strokeWidth={isActive("/settings") ? 2.1 : 1.75} />
            Settings
          </Link>

          {role === "member" ? (
            <Link
              href="/apply"
              className="lift mx-1 mt-4 rounded-2xl border border-dashed border-line-2 px-3.5 py-3.5 text-[13px] leading-snug text-mute transition-colors hover:border-accent/50 hover:text-ink"
            >
              <span className="vgrad-text font-semibold">Become a Luminary</span>
              <br />
              Apply with your track record →
            </Link>
          ) : (
            <div className="mx-1 mt-4 rounded-2xl border border-line bg-wash px-3.5 py-3 text-[12px] leading-relaxed text-mute">
              <span className="inline-flex items-center gap-1 font-semibold text-ink">
                Verified Luminary <Verified size={11} />
              </span>
              <br />
              3 Sessions today · 2 requests waiting
            </div>
          )}

          <RoleSwitch className="mx-1 mt-3" />
        </nav>

        <Link
          href={`/profile/${me.handle}`}
          className="flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-wash"
        >
          <Avatar name={me.name} size={34} />
          <div className="min-w-0">
            <div className="flex items-center gap-1 truncate text-[13px] font-semibold">
              <span className="truncate">{me.name}</span>
              {me.isLuminary && <Verified size={11} />}
            </div>
            <div className="truncate text-[11px] text-faint">@{me.handle}</div>
          </div>
        </Link>
      </aside>

      {/* Mobile top bar */}
      <header className="glass-strong fixed inset-x-0 top-0 z-40 flex h-14 items-center justify-between px-4 md:hidden">
        <Link href="/app" aria-label="Vetta home" className="flex items-center gap-2">
          <VMark className="h-7 w-7" />
          <span className="text-[15px] font-semibold tracking-[0.06em]">vetta</span>
        </Link>
        <div className="flex items-center gap-1">
          <ThemeToggle className="h-9 w-9 border-0 bg-transparent" />
          <Link
            href="/messages"
            aria-label="Messages"
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-mute"
          >
            <MessageSquare size={20} strokeWidth={1.75} />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-accent ring-2 ring-bg" />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="px-4 pb-32 pt-[72px] md:ml-[228px] md:px-10 md:pb-16 md:pt-10">
        <div className="mx-auto w-full max-w-[680px]">{children}</div>
      </main>

      {/* Mobile bottom nav */}
      <nav
        aria-label="Primary"
        className="glass-strong fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-40 flex items-center justify-around rounded-[26px] px-1.5 py-2 md:hidden"
      >
        {TABS.map(({ href, label, Icon }) => {
          const active = isActive(href);
          return (
            <Link
              key={href}
              href={href}
              aria-label={label}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex min-h-[44px] min-w-[56px] flex-col items-center justify-center gap-0.5 rounded-2xl transition-transform duration-200",
                active && "-translate-y-0.5"
              )}
            >
              <Icon
                size={21}
                strokeWidth={active ? 2.2 : 1.75}
                className={active ? "text-ink" : "text-faint"}
              />
              <span
                className={cn(
                  "text-[10px] font-medium",
                  active ? "text-ink" : "text-faint"
                )}
              >
                {label}
              </span>
            </Link>
          );
        })}
        <CreateButton className="ml-0.5" />
      </nav>
    </div>
  );
}

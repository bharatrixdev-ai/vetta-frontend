"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, X, CheckCheck, Calendar, Radio, MessageSquare, Sparkles } from "lucide-react";
import { Avatar } from "@/components/Avatar";
import { Verified } from "@/components/ui";

export interface NotificationItem {
  id: string;
  type: "session" | "roundtable" | "note" | "system";
  title: string;
  desc: string;
  time: string;
  unread: boolean;
  user?: { name: string; avatar?: string };
}

const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: "1",
    type: "session",
    title: "Session Confirmed",
    desc: "Dr. Sarah Kim confirmed your 50-minute Session strategy call for tomorrow.",
    time: "10m ago",
    unread: true,
    user: { name: "Dr. Sarah Kim" },
  },
  {
    id: "2",
    type: "roundtable",
    title: "Roundtable Starting",
    desc: "Ananya Iyer is live now at the head table: 'Raising in 2026 — what changed'.",
    time: "25m ago",
    unread: true,
    user: { name: "Ananya Iyer" },
  },
  {
    id: "3",
    type: "note",
    title: "Noted by Rohan Verma",
    desc: "Rohan Verma and 42 others noted your published strategy note.",
    time: "2h ago",
    unread: true,
    user: { name: "Rohan Verma" },
  },
  {
    id: "4",
    type: "system",
    title: "Provenance Verified",
    desc: "Your credential artifact has been human-verified by the Vetta review board.",
    time: "1d ago",
    unread: false,
  },
];

export function NotificationTrigger({ onClick, unreadCount }: { onClick: () => void; unreadCount: number }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Notifications"
      className="relative flex h-9 w-9 items-center justify-center rounded-full text-mute transition-colors hover:bg-wash hover:text-ink"
    >
      <Bell size={19} strokeWidth={1.8} />
      {unreadCount > 0 && (
        <span className="absolute right-1.5 top-1.5 flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-danger opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-danger ring-2 ring-bg" />
        </span>
      )}
    </button>
  );
}

export function NotificationSheet({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);

  const unreadCount = notifications.filter((n) => n.unread).length;

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const getIcon = (type: NotificationItem["type"]) => {
    switch (type) {
      case "session":
        return <Calendar size={14} className="text-accent" />;
      case "roundtable":
        return <Radio size={14} className="text-danger" />;
      case "note":
        return <MessageSquare size={14} className="text-ok" />;
      default:
        return <Sparkles size={14} className="text-violet" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-line bg-surface p-5 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-line pb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-[17px] font-semibold tracking-tight">Notifications</h2>
                {unreadCount > 0 && (
                  <span className="rounded-full bg-danger/15 px-2.5 py-0.5 text-[11px] font-semibold text-danger">
                    {unreadCount} new
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {unreadCount > 0 && (
                  <button
                    onClick={markAllRead}
                    className="flex items-center gap-1 text-[12px] font-medium text-mute hover:text-ink"
                  >
                    <CheckCheck size={14} /> Mark read
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-wash text-mute hover:text-ink"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto py-3 space-y-2">
              {notifications.map((n) => (
                <div
                  key={n.id}
                  className={`group relative flex items-start gap-3 rounded-2xl p-3.5 transition-all ${
                    n.unread ? "bg-wash-2/80 ring-1 ring-line-2" : "hover:bg-wash/50"
                  }`}
                >
                  {n.user ? (
                    <div className="relative shrink-0">
                      <Avatar name={n.user.name} size={36} />
                      <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border border-bg bg-surface shadow-xs">
                        {getIcon(n.type)}
                      </span>
                    </div>
                  ) : (
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-wash">
                      {getIcon(n.type)}
                    </span>
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1 text-[13px] font-semibold">
                        <span className="truncate">{n.title}</span>
                        {n.user && <Verified size={11} />}
                      </div>
                      <span className="shrink-0 text-[11px] text-faint">{n.time}</span>
                    </div>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-mute">{n.desc}</p>
                  </div>
                  {n.unread && (
                    <span className="h-2 w-2 shrink-0 rounded-full bg-danger" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

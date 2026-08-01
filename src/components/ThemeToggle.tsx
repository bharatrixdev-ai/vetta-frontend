"use client";

import { useEffect } from "react";

/**
 * Automatically syncs the app theme according to user profile preference or OS system setting (prefers-color-scheme).
 * No manual toggle buttons are rendered as themes are handled automatically by profile / OS system defaults.
 */
export function ThemeSync() {
  useEffect(() => {
    // Check if user has an explicit profile theme preference stored in cookie
    const getCookieTheme = () => {
      const match = document.cookie.match(/(?:^|; )vetta-theme=([^;]*)/);
      return match ? match[1] : null;
    };

    const cookieTheme = getCookieTheme();

    if (cookieTheme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else if (cookieTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      // Default to OS system setting
      const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
      const applySystemTheme = (e: MediaQueryList | MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add("light");
          document.documentElement.classList.remove("dark");
        } else {
          document.documentElement.classList.remove("light");
          document.documentElement.classList.add("dark");
        }
      };

      applySystemTheme(mediaQuery);
      mediaQuery.addEventListener("change", applySystemTheme);
      return () => mediaQuery.removeEventListener("change", applySystemTheme);
    }
  }, []);

  return null;
}

export function ThemeToggle() {
  return null;
}

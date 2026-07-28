"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { CURRENT_USER, LUMINARY_SELF } from "@/lib/data";

export type Role = "member" | "luminary";

type Ctx = {
  role: Role;
  setRole: (r: Role) => void;
  me: {
    handle: string;
    name: string;
    title: string;
    isLuminary: boolean;
  };
};

const RoleCtx = createContext<Ctx>({
  role: "member",
  setRole: () => {},
  me: CURRENT_USER,
});

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = useState<Role>("member");

  useEffect(() => {
    try {
      const r = localStorage.getItem("vetta-role");
      if (r === "luminary") setRoleState("luminary");
    } catch {}
  }, []);

  const setRole = (r: Role) => {
    setRoleState(r);
    try {
      localStorage.setItem("vetta-role", r);
    } catch {}
  };

  const me =
    role === "luminary"
      ? {
          handle: LUMINARY_SELF.handle,
          name: LUMINARY_SELF.name,
          title: LUMINARY_SELF.title,
          isLuminary: true,
        }
      : CURRENT_USER;

  return <RoleCtx.Provider value={{ role, setRole, me }}>{children}</RoleCtx.Provider>;
}

export const useRole = () => useContext(RoleCtx);

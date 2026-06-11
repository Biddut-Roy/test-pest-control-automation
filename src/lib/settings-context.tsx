"use client";

import { createContext, useContext, type ReactNode } from "react";
import { siteConfig as fallback } from "./site-config";
import type { SiteConfig } from "./site-config";

const SettingsContext = createContext<SiteConfig>(fallback);

export function useSettings() {
  return useContext(SettingsContext);
}

export function SettingsProvider({
  children,
  overrides,
}: {
  children: ReactNode;
  overrides?: Partial<SiteConfig>;
}) {
  const config: SiteConfig = overrides
    ? { ...fallback, ...overrides }
    : fallback;

  return (
    <SettingsContext.Provider value={config}>
      {children}
    </SettingsContext.Provider>
  );
}

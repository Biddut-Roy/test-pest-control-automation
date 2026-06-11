import "server-only";

import { getSettings, mergeSettingsWithFallback } from "./queries";
import { siteConfig as fallback } from "./site-config";

let cachedConfig: ReturnType<typeof mergeSettingsWithFallback> | null = null;
let cacheTimestamp = 0;
const CACHE_TTL = 60_000;

export async function getSiteConfig() {
  const now = Date.now();
  if (cachedConfig && now - cacheTimestamp < CACHE_TTL) {
    return cachedConfig;
  }

  try {
    const dbSettings = await getSettings();
    cachedConfig = mergeSettingsWithFallback(dbSettings);
    cacheTimestamp = now;
  } catch {
    cachedConfig = fallback;
  }

  return cachedConfig!;
}

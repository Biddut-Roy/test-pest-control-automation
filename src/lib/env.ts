function requireEnv(key: string, fallback?: string): string {
  const value = process.env[key] || fallback;
  if (!value) {
    console.warn(`Missing environment variable: ${key} — using placeholder`);
    return "placeholder";
  }
  return value;
}

export const env = {
  databaseUrl: requireEnv("DATABASE_URL"),
  nextauthSecret: requireEnv("NEXTAUTH_SECRET", "dev-secret"),
  nextauthUrl: requireEnv("NEXTAUTH_URL", "http://localhost:3000"),
  openaiApiKey: requireEnv("OPENAI_API_KEY"),
  anthropicApiKey: requireEnv("ANTHROPIC_API_KEY"),
} as const;

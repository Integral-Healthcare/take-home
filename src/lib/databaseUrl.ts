/**
 * Resolves and validates DATABASE_URL.
 *
 * This project is wired to SQLite, so the URL must be a `file:` URL. The common failure is a
 * `DATABASE_URL` exported in your shell profile: neither `dotenv` nor Next.js overrides a
 * variable that is already set, so a global value silently wins over `.env` and produces a
 * confusing error much further downstream.
 */
export function resolveDatabaseUrl(): string {
  const url = process.env.DATABASE_URL;

  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. Did you run `cp .env.example .env`?"
    );
  }

  if (!url.startsWith("file:")) {
    throw new Error(
      [
        `Invalid DATABASE_URL: "${url}"`,
        "",
        'This project uses SQLite, so DATABASE_URL must start with "file:" (see .env.example).',
        "",
        "Your shell is most likely exporting a DATABASE_URL that overrides the one in .env —",
        "neither dotenv nor Next.js overrides a variable that is already set. Check with:",
        "",
        "  echo $DATABASE_URL",
        "",
        "Then either `unset DATABASE_URL` in this shell (or remove it from your shell profile),",
        "or scope it per command:",
        "",
        '  DATABASE_URL="file:./dev.db" npm run dev',
      ].join("\n")
    );
  }

  return url;
}

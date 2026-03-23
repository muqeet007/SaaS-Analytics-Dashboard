import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-white">
      <div className="flex flex-col items-center gap-6 px-4 text-center">
        <div className="rounded-full bg-zinc-800 px-4 py-1.5 text-xs font-medium text-zinc-400">
          Analytics Platform
        </div>
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          SaaS Dashboard
        </h1>
        <p className="max-w-md text-lg text-zinc-400">
          Track MRR, churn, user growth, and subscription metrics — all in one
          place.
        </p>
        <Link
          href="/dashboard"
          className="rounded-lg bg-white px-8 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}

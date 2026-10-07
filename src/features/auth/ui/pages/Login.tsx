import { Link } from "react-router";
import { Cloud, LogIn, Network, Terminal } from "lucide-react";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  const { fields, errors, isSubmitting, onSubmit } = useLogin();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#121016] px-4 py-10 text-neutral-200">
      <div className="w-full max-w-[350px] rounded-xl border border-white/[0.06] bg-[#1d1b21] px-6 py-8 shadow-2xl shadow-black/50">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6b4fa5]">
            <Network size={20} className="text-white" />
          </div>
          <h1 className="mt-5 text-xl font-semibold text-white">Synthetix AI</h1>
          <p className="mt-1 text-xs text-neutral-400">Sign in to your workspace</p>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-md border border-white/[0.06] bg-[#26242b] py-2.5 text-[11px] font-semibold uppercase tracking-wide text-neutral-200 transition hover:bg-[#2e2c34] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b6fd0]"
          >
            <Cloud size={18} />
            Google
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-md border border-white/[0.06] bg-[#26242b] py-2.5 text-[11px] font-semibold uppercase tracking-wide text-neutral-200 transition hover:bg-[#2e2c34] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b6fd0]"
          >
            <Terminal size={18} />
            GitHub
          </button>
        </div>

        <div className="my-6 flex items-center gap-3">
          <span className="h-px flex-1 bg-white/[0.07]" />
          <span className="text-[10px] font-medium text-neutral-400">or continue with email</span>
          <span className="h-px flex-1 bg-white/[0.07]" />
        </div>

        <form onSubmit={onSubmit} noValidate className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wide text-neutral-300"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="name@company.com"
              aria-invalid={!!errors.email}
              {...fields.email}
              className="w-full rounded-md border border-white/[0.06] bg-[#0f0d12] px-3 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-[#8b6fd0] focus:outline-none focus:ring-1 focus:ring-[#8b6fd0]"
            />
            {errors.email && (
              <p role="alert" className="mt-1 text-[11px] text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-[10px] font-semibold uppercase tracking-wide text-neutral-300"
              >
                Password
              </label>
              <a href="#" className="text-[11px] text-[#b79df0] hover:underline">
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              aria-invalid={!!errors.password}
              {...fields.password}
              className="w-full rounded-md border border-white/[0.06] bg-[#0f0d12] px-3 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-[#8b6fd0] focus:outline-none focus:ring-1 focus:ring-[#8b6fd0]"
            />
            {errors.password && (
              <p role="alert" className="mt-1 text-[11px] text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>

          <label className="flex cursor-pointer items-center gap-2 text-[11px] text-neutral-300">
            <input
              type="checkbox"
              {...fields.remember}
              className="h-3.5 w-3.5 rounded border-white/20 bg-[#0f0d12] accent-[#6b4fa5]"
            />
            Stay signed in
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-[#6b4fa5] py-3 text-sm font-medium text-white transition hover:bg-[#7a5cba] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b79df0] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
            <LogIn size={16} />
          </button>
        </form>

        <div className="mt-6 border-t border-white/[0.06] pt-5 text-center text-[11px] text-neutral-400">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="font-semibold text-[#b79df0] hover:underline">
            Sign Up
          </Link>
        </div>
      </div>

      <footer className="mt-6 text-center text-[10px] text-neutral-500">
        <p>© 2024 Synthetix AI. Enterprise Intelligence Platforms.</p>
        <div className="mt-1 flex justify-center gap-4">
          <a href="#" className="hover:text-neutral-300">Privacy Policy</a>
          <a href="#" className="hover:text-neutral-300">Terms of Service</a>
        </div>
      </footer>
    </main>
  );
}
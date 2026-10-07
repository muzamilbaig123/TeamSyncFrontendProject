import { Link } from "react-router";
import { Lock, Mail, Network, Sparkles, User } from "lucide-react";
import { useRegister } from "../../hooks/useRegister";
import { FormField } from "../FormField";
import PasswordStrength from "../PasswordStrength";

export default function Register() {
  const { fields, errors, isSubmitting, onSubmit, password, passwordScore } = useRegister();

  return (
    <div className="flex min-h-screen flex-col bg-[#131115] text-neutral-200">
      <div className="relative flex flex-1">
        <a
          href="/"
          className="absolute left-4 top-3 z-10 text-sm font-bold tracking-tight text-white/90"
        >
          Synthetix AI
        </a>

        {/* Left hero panel */}
        <aside className="relative hidden w-[40%] max-w-[520px] shrink-0 flex-col justify-end overflow-hidden border-r border-white/[0.06] p-8 lg:flex">
          {/* TODO: <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover" /> */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(70,100,170,0.45),transparent_60%),radial-gradient(ellipse_at_70%_70%,rgba(107,79,165,0.35),transparent_55%)] bg-[#0b0d1c]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#131115] via-[#131115]/40 to-transparent"
          />

          <div className="relative">
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b79df0]">
              <Sparkles size={14} />
              Next-gen intelligence
            </p>
            <h2 className="mt-4 max-w-[16ch] text-[28px] font-semibold leading-tight text-white">
              Accelerate your team&apos;s intelligence.
            </h2>
            <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-neutral-400">
              Connect your enterprise data to our specialized AI models and unlock unparalleled
              strategic insights in seconds.
            </p>

            <dl className="mt-8 flex gap-8">
              <div>
                <dt className="sr-only">Uptime SLA</dt>
                <dd className="text-base font-semibold text-neutral-200">99.9%</dd>
                <dd className="text-[10px] text-neutral-500">Uptime SLA</dd>
              </div>
              <div>
                <dt className="sr-only">Certification</dt>
                <dd className="text-base font-semibold text-neutral-200">ISO</dd>
                <dd className="text-[10px] text-neutral-500">27001 Certified</dd>
              </div>
            </dl>
          </div>
        </aside>

        {/* Form side */}
        <main className="flex flex-1 items-center justify-center px-6 py-16 sm:px-10">
          <div className="w-full max-w-[324px]">
            <div className="mb-8 flex h-9 w-9 items-center justify-center rounded-lg bg-[#6b4fa5] lg:hidden">
              <Network size={18} className="text-white" />
            </div>

            <h1 className="text-[26px] font-semibold tracking-tight text-white">
              Create your account
            </h1>
            <p className="mt-2 text-xs text-neutral-400">
              Experience the future of collaborative data intelligence.
            </p>

            <form onSubmit={onSubmit} noValidate className="mt-9 space-y-5">
              <FormField
                label="Full Name"
                icon={<User size={16} />}
                placeholder="Enter your full name"
                autoComplete="name"
                error={errors.fullName?.message}
                registration={fields.fullName}
              />

              <FormField
                label="Email Address"
                icon={<Mail size={16} />}
                type="email"
                placeholder="name@company.com"
                autoComplete="email"
                error={errors.email?.message}
                registration={fields.email}
              />

              <FormField
                label="Password"
                icon={<Lock size={16} />}
                type="password"
                placeholder="••••••••"
                autoComplete="new-password"
                error={errors.password?.message}
                registration={fields.password}
              >
                <PasswordStrength score={passwordScore} visible={!!password} />
              </FormField>

              <div>
                <label className="flex cursor-pointer items-start gap-3 text-[11px] leading-snug text-neutral-300">
                  <input
                    type="checkbox"
                    aria-invalid={!!errors.terms}
                    {...fields.terms}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-[#1c1a20] accent-[#6b4fa5]"
                  />
                  <span>
                    I agree to the{" "}
                    <a href="#" className="text-[#b79df0] hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#b79df0] hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>
                {errors.terms && (
                  <p role="alert" className="mt-1.5 text-[11px] text-red-400">
                    {errors.terms.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="h-[46px] w-full rounded-lg bg-gradient-to-r from-[#6b4fa5] to-[#cbb6ff] text-sm font-semibold text-[#26104d] transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cbb6ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#131115] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Creating account..." : "Create Account"}
              </button>
            </form>

            <div className="my-7 flex items-center gap-3">
              <span className="h-px flex-1 bg-white/[0.07]" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
                Or continue with
              </span>
              <span className="h-px flex-1 bg-white/[0.07]" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex h-[40px] items-center justify-center gap-2 rounded-lg border border-white/[0.1] text-xs font-medium text-neutral-200 transition hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b6fd0]"
              >
                <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                Google
              </button>
              <button
                type="button"
                className="flex h-[40px] items-center justify-center gap-2 rounded-lg border border-white/[0.1] text-xs font-medium text-neutral-200 transition hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b6fd0]"
              >
                <Network size={14} aria-hidden="true" />
                SSO
              </button>
            </div>

            <p className="mt-9 text-center text-xs text-neutral-400">
              Already have an account?{" "}
              <Link to="/" className="font-semibold text-[#b79df0] hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </main>
      </div>

      <footer className="flex flex-col items-center gap-3 border-t border-white/[0.06] px-6 py-5 text-[11px] text-neutral-400 md:flex-row md:justify-between">
        <span className="text-sm font-bold text-white/90">Synthetix AI</span>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-6">
          <a href="#" className="hover:text-neutral-200">Privacy Policy</a>
          <a href="#" className="hover:text-neutral-200">Terms of Service</a>
          <a href="#" className="hover:text-neutral-200">Security</a>
          <a href="#" className="hover:text-neutral-200">System Status</a>
        </nav>
        <span>© 2024 Synthetix AI. Enterprise Intelligence Platforms.</span>
      </footer>
    </div>
  );
}
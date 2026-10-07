type PasswordStrengthProps = {
  /** 0 = empty/very weak ... 4 = very strong */
  score: 0 | 1 | 2 | 3 | 4;
  /** Show the meter only once the user starts typing */
  visible?: boolean;
};

const LABELS: Record<PasswordStrengthProps["score"], string> = {
  0: "Too weak",
  1: "Weak password",
  2: "Fair password",
  3: "Good password",
  4: "Strong password",
};

const TOTAL_BARS = 4;

export default function PasswordStrength({ score, visible = true }: PasswordStrengthProps) {
  if (!visible) return null;

  return (
    <div className="mt-2" aria-live="polite">
      <div
        role="meter"
        aria-label="Password strength"
        aria-valuemin={0}
        aria-valuemax={TOTAL_BARS}
        aria-valuenow={score}
        aria-valuetext={LABELS[score]}
        className="grid grid-cols-4 gap-1.5"
      >
        {Array.from({ length: TOTAL_BARS }, (_, i) => (
          <span
            key={i}
            className={`h-[3px] rounded-full transition-colors duration-300 ${
              i < score ? "bg-[#c4b0f5]" : "bg-white/10"
            }`}
          />
        ))}
      </div>
      <p className="mt-1.5 text-[11px] text-[#b79df0]">{LABELS[score]}</p>
    </div>
  );
}
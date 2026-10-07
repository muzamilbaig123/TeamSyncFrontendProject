import { useId } from "react";
import type { FormFieldProps } from "../../../types/FormFieldTypes";

export function FormField({
  label,
  icon,
  type = "text",
  placeholder,
  autoComplete,
  error,
  registration,
  children,
}: FormFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[10px] font-semibold text-neutral-300">
        {label}
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">
          {icon}
        </span>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          {...registration}
          className={`h-[50px] w-full rounded-lg border bg-[#1c1a20] pl-11 pr-4 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 ${
            error
              ? "border-red-500/60 focus:border-red-400 focus:ring-red-400"
              : "border-white/[0.07] focus:border-[#8b6fd0] focus:ring-[#8b6fd0]"
          }`}
        />
      </div>
      {children}
      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-[11px] text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
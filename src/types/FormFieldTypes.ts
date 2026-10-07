import type { ReactNode } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

export type FormFieldProps = {
  label: string;
  icon: ReactNode;
  type?: string;
  placeholder: string;
  autoComplete?: string;
  error?: string;
  registration: UseFormRegisterReturn;
  children?: ReactNode; // e.g. strength meter under the input
};
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { PasswordScore, RegisterFormValues } from "../../../types/RegisterType";

export const useRegister = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    defaultValues: { fullName: "", email: "", password: "", terms: false },
  });

  const password = watch("password");

  const fields = {
    fullName: register("fullName" /* TODO: rules */),
    email: register("email" /* TODO: rules */),
    password: register("password" /* TODO: rules */),
    terms: register("terms" /* TODO: required + message */),
  };

  // TODO: password ka score nikalne ki logic khud likho (length, uppercase, number, symbol...)
  // Hint: ek pure function banao jo `password` leke 0-4 return kare, phir yahan call karo.
  const passwordScore = 0 as PasswordScore;

  const onSubmit = handleSubmit(async (data) => {
    // TODO: API call, "email already exists" jaisi errors ke liye setError
    console.log(data);
    navigate("/");
  });

  return { fields, errors, isSubmitting, onSubmit, password, passwordScore };
};
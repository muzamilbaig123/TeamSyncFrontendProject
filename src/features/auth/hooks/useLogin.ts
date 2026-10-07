import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { LoginFormValues } from "../../../types/LoginTypes";

export const useLogin = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    defaultValues: { email: "", password: "", remember: false },
  });

  // Validation rules yahan aayenge (UI ko sirf ready registrations milti hain)
  const fields = {
    email: register("email" /* TODO: rules (required, pattern) */),
    password: register("password" /* TODO: rules (required, minLength) */),
    remember: register("remember"),
  };

  // handleSubmit yahin wrap hai, UI me sirf <form onSubmit={onSubmit}>
  const onSubmit = handleSubmit(async (data) => {
    // TODO: axiosInstance se API call, server error handling (setError), token save
    console.log(data);
    navigate("/home");
  });

  return { fields, errors, isSubmitting, onSubmit };
};
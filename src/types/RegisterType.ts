export type RegisterFormValues = {
  fullName: string;
  email: string;
  password: string;
  terms: boolean;
};

export type PasswordScore = 0 | 1 | 2 | 3 | 4;
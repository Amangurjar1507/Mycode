export interface LoginHookProps {
  signupButton: () => void;
  validationLogin: () => void;
  errorObject: LoginError;
  setErrorObject: React.Dispatch<React.SetStateAction<LoginError>>;
  refreshing: boolean | undefined;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  password: string;
}
export interface LoginError {
  emailError: string;
}
export interface CustomError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

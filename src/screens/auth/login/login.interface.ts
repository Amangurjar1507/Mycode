export interface LoginHookProps {
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  signupButton: () => void;
  onTermsAndCondition: () => void;
  validateLogin: () => void;
  error: LoginError;
  setError: React.Dispatch<React.SetStateAction<LoginError>>;
  refreshing: boolean | undefined;
}
export interface LoginError {
  phoneNumberError: string;
}
export interface CustomError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

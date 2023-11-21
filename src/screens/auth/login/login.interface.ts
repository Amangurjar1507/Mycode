export interface LoginHookProps {
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  signupButton: () => void;
  onTermsAndCondition: () => void;
  validationLogin: () => void;
  errorObject: LoginError | any;
  setErrorObject: React.Dispatch<React.SetStateAction<LoginError>>;
  refreshing: boolean | undefined;
}
export interface LoginError {
  emailError: string;
  passwordError: string;
}
export interface CustomError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

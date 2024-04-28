export interface ReducerState {
  userData: loginPayload | undefined;
  isLogin: boolean;
  token: string | undefined;
  DarkTheme: boolean;
}

export interface loginPayload {
  fName: string;
  lName: string;
  education: string;
  location: string;
  experience: string;
  about: string;
  instagram: string;
  tikTok: string;
}

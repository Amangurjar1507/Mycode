export type RootStackParams = {
  Splash: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  VerifyOTP: {
    email?: string;
    type?: string;
  };
  ResetPassword: undefined;
  SignUp: undefined;
  CreateAccount: {
    email?: string;
  };
  AccountType: { stepFirst: stepFirstType | undefined };
  OtherDetails: { secondStep?: stepFirstType } | undefined;
  MyPrograms: undefined;
  MarketPlace: undefined;
  HomeBottomTabs: { userType?: number | undefined } | undefined;
  CreateNewProgram: undefined;
  ProgramName: undefined;
  BodyWeightOnly: { selectExercise?: Array<object> } | undefined;
  Exercise: undefined;
  Packages: undefined;
  CreateNewPackages: undefined;
  Programs: undefined;
  ProgramDetails: undefined;
  Transaction: undefined;
  Language: undefined;
  CountryRegion: undefined;
  ChangeEmailPassword: undefined;
  ChangeEmail: undefined;
  ChangePassword: undefined;
  Financials: undefined;
  Analytics: undefined;
  MyProfile: undefined;
  Settings: undefined;
  MyWorkoutLibrary: undefined;
  NewExercise: undefined;
  CreateReferralCode: undefined;
  Overview: undefined;
  ProgramManagement: undefined;
  ReferralManagement: undefined;
  FinancialManagement: undefined;
  TraineeManagement: undefined;
  UserManagement: undefined;
  EditProfile: {
    selectLocation?: string,
  } | undefined;
  Location: {
    secondStep?: stepFirstType,
    typeScreen?: string
  } | undefined;
  FinanManagement: undefined;
  RefManagement: undefined;
  MarketPlace: undefined;
  Workout: undefined;
  History: undefined;
  WorkoutPlan: undefined;
  WorkoutDetails: undefined;
  Testing: undefined;
  Filters: { filterType?: string } | undefined;
  MainMuscle: { filterType: string | undefined } | undefined;
  DuplicateSession: undefined;
};
interface stepFirstType {
  accountType?: string | undefined;
  email?: string | undefined;
  isAccept: boolean;
  dateOfBirth: string;
  fName: string | undefined;
  lName: string | undefined;
  password: string | undefined;
}


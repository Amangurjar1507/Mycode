import HomeBottomTabs from '@navigation/bottomTabs/homeBottomTabs/HomeBottomTabs';
import screenName from '@navigation/screenName';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountType from '@screens/auth/accountType/AccountType';
import CreateAccount from '@screens/auth/createAccount/CreateAccount';
import ForgotPassword from '@screens/auth/forgotPassword/ForgotPassword';
import Login from '@screens/auth/login/Login';
import OtherDetails from '@screens/auth/otherDeatils/OtherDetails';
import ResetPassword from '@screens/auth/resetPassword/ResetPassword';
import SignUp from '@screens/auth/signUp/SignUp';
import Splash from '@screens/auth/splash/Splash';
import VerifyOTP from '@screens/auth/verifyOTP/VerifyOTP';
import EditProfile from '@screens/editProfile/EditProfile';
import MyProfile from '@screens/myProfile/MyProfile';
import History from '@screens/trainee/history/History';
import MarketPlace from '@screens/trainee/marketPlace/MarketPlace';
import Workout from '@screens/trainee/workout/Workout';
import BodyWeightOnly from '@screens/trainer/bodyWeightOnly/BodyWeightOnly';
import ChangeEmail from '@screens/trainer/changeEmail/ChangeEmail';
import ChangeEmailPassword from '@screens/trainer/changeEmailPassword/ChangeEmailPassword';
import ChangePassword from '@screens/trainer/changePassword/ChangePassword';
import CountryRegion from '@screens/trainer/countryRegion/CountryRegion';
import CreateNewPackages from '@screens/trainer/createNewPackages/CreateNewPackages';
import CreateNewProgram from '@screens/trainer/createNewProgram/CreateNewProgram';
import CreateReferralCode from '@screens/trainer/createReferralCode/CreateReferralCode';
import DuplicateSession from '@screens/trainer/duplicateSession/DuplicateSession';
import Exercise from '@screens/trainer/exercise/Exercise';
import Filters from '@screens/trainer/filters/Filters';
import FinanManagement from '@screens/trainer/finanManagement/FinanManagement';
import FinancialManagement from '@screens/trainer/financialManagement/FinancialManagement';
import Language from '@screens/trainer/language/Language';
import Location from '@screens/trainer/location/Location';
import MainMuscle from '@screens/trainer/mainMuscle/MainMuscle';
import MyWorkoutLibrary from '@screens/trainer/myWorkoutLibrary/MyWorkoutLibrary';
import NewExercise from '@screens/trainer/newExercise/NewExercise';
import Overview from '@screens/trainer/overview/Overview';
import Packages from '@screens/trainer/packages/Packages';
import ProgramDetails from '@screens/trainer/programDetails/ProgramDetails';
import ProgramManagement from '@screens/trainer/programManagement/ProgramManagement';
import ProgramName from '@screens/trainer/programName/ProgramName';
import Programs from '@screens/trainer/programs/Programs';
import RefManagement from '@screens/trainer/refManagement/RefManagement';
import ReferralManagement from '@screens/trainer/referralManagement/ReferralManagement';
import TraineeManagement from '@screens/trainer/traineeManagement/TraineeManagement';
import Transaction from '@screens/trainer/transaction/Transaction';
import UserManagement from '@screens/trainer/userManagement/UserManagement';
import WorkoutDetails from '@screens/trainer/workoutDetails/WorkoutDetails';
import WorkoutPlan from '@screens/trainer/workoutPlan/WorkoutPlan';
import {FC} from 'react';
import {useSelector} from 'react-redux';
import {RootStackParams} from './rootStackParams';

const Stack = createNativeStackNavigator<RootStackParams>();

const RootStack: FC = () => {
  const userLogin = useSelector((state: any) => state);

  const navigation = () => {
    if (userLogin?.UserData?.isLogin === true) {
      return screenName.HomeBottomTabs;
    } else {
      return screenName.Splash;
    }
  };
  return (
    <Stack.Navigator
      initialRouteName={navigation()}
      // initialRouteName={'OtherDetails'}
      screenOptions={{
        headerShown: false,
      }}>
      {/* Auth screen */}
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="AccountType" component={AccountType} />
      <Stack.Screen name="OtherDetails" component={OtherDetails} />

      {/* Home bottom tab */}
      <Stack.Screen name="HomeBottomTabs" component={HomeBottomTabs} />

      {/* Trainer screens */}
      {/* MyPrograms tab screens */}
      <Stack.Screen name="CreateNewProgram" component={CreateNewProgram} />
      <Stack.Screen name="CreateNewPackages" component={CreateNewPackages} />
      <Stack.Screen name="Exercise" component={Exercise} />
      <Stack.Screen name="MyWorkoutLibrary" component={MyWorkoutLibrary} />
      <Stack.Screen name="Packages" component={Packages} />
      <Stack.Screen name="ProgramName" component={ProgramName} />
      <Stack.Screen name="ProgramDetails" component={ProgramDetails} />
      <Stack.Screen name="BodyWeightOnly" component={BodyWeightOnly} />
      <Stack.Screen name="Programs" component={Programs} />
      <Stack.Screen name="NewExercise" component={NewExercise} />
      <Stack.Screen name="Filters" component={Filters} />
      <Stack.Screen name="MainMuscle" component={MainMuscle} />
      <Stack.Screen name="DuplicateSession" component={DuplicateSession} />

      {/* Financial tab screens */}
      <Stack.Screen name="CreateReferralCode" component={CreateReferralCode} />
      <Stack.Screen name="FinanManagement" component={FinanManagement} />
      <Stack.Screen name="RefManagement" component={RefManagement} />

      {/* Analytics tab screens */}
      <Stack.Screen name="Overview" component={Overview} />
      <Stack.Screen name="ProgramManagement" component={ProgramManagement} />
      <Stack.Screen name="ReferralManagement" component={ReferralManagement} />
      <Stack.Screen
        name="FinancialManagement"
        component={FinancialManagement}
      />
      <Stack.Screen name="TraineeManagement" component={TraineeManagement} />
      <Stack.Screen name="UserManagement" component={UserManagement} />

      {/* MyProfile tab screens */}
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="WorkoutPlan" component={WorkoutPlan} />
      <Stack.Screen name="WorkoutDetails" component={WorkoutDetails} />

      {/* Settings tab screens */}
      <Stack.Screen name="ChangeEmail" component={ChangeEmail} />
      <Stack.Screen
        name="ChangeEmailPassword"
        component={ChangeEmailPassword}
      />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="Transaction" component={Transaction} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="CountryRegion" component={CountryRegion} />

      {/* Trainee */}
      <Stack.Screen name="MarketPlace" component={MarketPlace} />
      <Stack.Screen name="Workout" component={Workout} />
      <Stack.Screen name="History" component={History} />
    </Stack.Navigator>
  );
};

export default RootStack;

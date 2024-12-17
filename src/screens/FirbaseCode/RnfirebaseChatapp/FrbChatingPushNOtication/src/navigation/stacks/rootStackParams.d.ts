import {ExerciseData} from '@screens/trainer/bodyWeightOnly/BodyWeightOnly';
import {MuscleListItemProps} from '@screens/trainer/filters/Filters';
import {FilterDataPass} from '@screens/trainer/myPrograms/MyPrograms';
import {workoutListProps} from '@screens/trainer/myWorkoutLibrary/MyWorkoutLibrary';
import {SessionItemProps} from 'src/components/card/sessionCard/SessionCard';

export type RootStackParams = {
  SplashScreen: undefined;
  Login: undefined;
  OrderList: undefined;
  Dashboard: undefined;
  HomeDrawerCustom: undefined;
  OrderDetails:
    | {
        id?: number;
        colorKey: string;
      }
    | undefined;
  Notification: undefined;
};

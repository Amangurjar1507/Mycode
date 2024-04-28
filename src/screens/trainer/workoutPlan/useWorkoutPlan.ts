import { useAuthNavigation } from '@hooks/useAppNavigation';
import { useCallback, useState } from 'react';
import { WorkoutPlanStateProps } from './WorkoutPlan';

const useWorkoutPlan = () => {
  const navigation = useAuthNavigation();

  const [workoutPlan, setWorkoutPlan] = useState<WorkoutPlanStateProps>({
    selectedIndex: undefined,
    publishModalShow: false,
  });

  //** Navigate to Work out Details screen */
  const onViewAsUser = useCallback(() => {
    navigation.navigate('WorkoutDetails');
  }, [navigation]);

  //** Congratulations modal show function */
  const onDoneModal = useCallback(() => {
    setWorkoutPlan(prevState => ({
      ...prevState,
      publishModalShow: !prevState.publishModalShow,
    }));
  }, [workoutPlan?.publishModalShow]);

  //** Expand View show function */
  const onExpandClick = useCallback(
    (index: number) => {
      if (workoutPlan?.selectedIndex == index) {
        setWorkoutPlan(prevState => ({
          ...prevState,
          selectedIndex: undefined,
        }));
      } else {
        setWorkoutPlan(prevState => ({
          ...prevState,
          selectedIndex: index,
        }));
      }
    },
    [workoutPlan?.selectedIndex],
  );

  return {
    onViewAsUser,
    onDoneModal,
    workoutPlan,
    onExpandClick,
  };
};

export default useWorkoutPlan;

import { useAuthNavigation } from '@hooks/useAppNavigation';
import { useCallback } from 'react';

const useWorkoutDetails = () => {
  const navigation = useAuthNavigation();

  //** Go back screen */
  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return { onGoBack };
};

export default useWorkoutDetails;

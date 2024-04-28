import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useCallback} from 'react';

const usePrograms = () => {
  const navigation = useAuthNavigation();

  //** Navigate to programs details screen */
  const onNavigateToProgramsDetailsScreen = useCallback(() => {
    navigation.navigate('ProgramDetails');
  }, [navigation]);
  return {
    onNavigateToProgramsDetailsScreen,
  };
  return {};
};

export default usePrograms;

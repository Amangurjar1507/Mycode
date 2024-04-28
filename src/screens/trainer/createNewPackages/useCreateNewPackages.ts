import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useCallback} from 'react';

const useCreateNewPackages = () => {
  const navigation = useAuthNavigation();

  //** Navigate to programs screen */
  const onNavigateToProgramsScreen = useCallback(() => {
    navigation.navigate('Programs');
  }, [navigation]);
  return {
    onNavigateToProgramsScreen,
  };
};

export default useCreateNewPackages;

import { useAuthNavigation } from '@hooks/useAppNavigation';
import { useCallback } from 'react';

const useMyProfile = () => {
  const navigation = useAuthNavigation();

  //** Navigate to EditProfile screen */
  const onPressEditProfile = useCallback(() => {
    navigation.navigate('EditProfile');
  }, [navigation]);

  return {
    onPressEditProfile,
  };
};

export default useMyProfile;

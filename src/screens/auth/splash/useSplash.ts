import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useCallback, useRef} from 'react';
import Video from 'react-native-video';

const useSplash = () => {
  const navigation = useAuthNavigation();
  const videoRef = useRef<Video>(null);

  //** Navigate to signup screen */
  const onClickSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  //** Navigate to login screen */
  const onClickLogin = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);
  return {
    videoRef,
    onClickSignUp,
    onClickLogin,
  };
};
export default useSplash;

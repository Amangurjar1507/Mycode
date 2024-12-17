import { useEffect, useState } from 'react';
import { Animated } from 'react-native';
import { useAuthNavigation } from '../../../hooks/useAppNavigation';
import { useAppSelector } from '../../../hooks/useRedux';
import { RootState } from '../../../services/redux/store';

const useSplashScreen = () => {
  const navigation = useAuthNavigation();
  const [fadeAnim] = useState(new Animated.Value(0));
  const {isLogin} = useAppSelector((state: RootState) => state?.UserData);

 
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();

    const timeout = setTimeout(() => {
      navigation.navigate(isLogin ? 'HomeDrawerCustom' : 'Login'); 
    }, 3500);

    return () => clearTimeout(timeout);
  }, [fadeAnim, navigation]);

  return {
    fadeAnim
  };
};

export default useSplashScreen;

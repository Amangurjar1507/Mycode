import React, { FC } from 'react';
import { Animated, View } from 'react-native';
import imageIndex from '../../../assets/imageIndex';
import CustomStatusbar from '../../../components/common/customStatusbar/CustomStatusbar';
import color from '../../../theme/color';
import styles from './splashScreen.style';
import useSplashScreen from './useSplashScreen';

export interface LoginProps {
  updateLoginInputValue: (key: string, value: string | boolean) => void;
}

export interface UserSplashProps {}

const SplashScreen: FC = () => {
  const {fadeAnim} = useSplashScreen();

  return (
    <View style={styles.container}>
      <CustomStatusbar
        backgroundColor={color.darkGreen}
        barStyle="light-content"
      />
      <View style={styles.scrollContainer}>
        <Animated.Image
          style={[styles.logo, {opacity: fadeAnim}]}
          source={imageIndex.splsahLogo}
        />
      </View>
    </View>
  );
};

export default SplashScreen;

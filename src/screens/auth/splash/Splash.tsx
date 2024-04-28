import {Button, CustomStatusbar} from '@components';
import imageIndex from '@imageIndex';
import color from '@theme/color';
import React, {FC} from 'react';
import {Image, View} from 'react-native';
import Video from 'react-native-video';
import styles from './splash.style';
import useSplash from './useSplash';

const Splash: FC = () => {
  const {videoRef, onClickSignUp, onClickLogin} = useSplash();
  return (
    <View style={styles.container}>
      <CustomStatusbar
        translucent={true}
        backgroundColor={color.transparent}
        containerStyle={styles.statusBarContainer}
        barStyle="light-content"
      />
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={imageIndex.bodiFyLogo}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.contentContainer}>
          <Button
            label="Create Account"
            onPress={onClickSignUp}
            containerStyle={styles.solidContainerStyle}
          />
          <View style={styles.loginButton}>
            <Button
              label="Login"
              type="Outline"
              onPress={onClickLogin}
              containerStyle={styles.containerStyle}
            />
          </View>
        </View>
        <Video
          ref={videoRef}
          source={imageIndex.splashVideo}
          style={styles.videoStyle}
          resizeMode="cover"
          fullscreenOrientation="portrait"
          muted={true}
          repeat={true}
        />
      </View>
    </View>
  );
};

export default Splash;

import React from 'react';
import {View, Text, Image} from 'react-native';
import imageIndex from '../../../assets/imageIndex';
import Button from '../../../components/common/button/Button';
import style from './invite.style';
import LottieView from 'lottie-react-native';
import InviteController from './invite.controller';
import CustomStatusBar from '../../../components/common/CustomStatusBar/CustomStatusBar';
const Invite = () => {
  const {userUpdate} = InviteController();

  return (
    <View style={style.mainContainer}>
      <CustomStatusBar barStyle="light-content" />
      <Image style={style.imageStyle} source={imageIndex.SparkleScreen} />
      <View style={style.lottieView}>
        <LottieView
          source={require('../../../assets/lottie/lottie.json')}
          autoPlay
          loop
        />
      </View>
      <View style={style.mainViewText}>
        <Text style={style.textStyle}>YOU WILL BE NOTIFIED</Text>
        <Text style={style.textStyle}>WHEN WE GO LIVE!!</Text>
      </View>
      <Button
        text="YOU'RE ON THE INVITE LIST"
        buttonContainer={style.buttonStyle}
        buttonTextStyle={style.buttonText}
        onPress={userUpdate}
        // isLoading
      />
      <Text style={style.joinTextStyle}>JOIN OUR GROWING COMMUNITY</Text>
      <View style={style.mainImageView}>
        <Image source={imageIndex.Discord} style={style.logImage} />
        <Image source={imageIndex.Twitter} style={style.logImage} />
        <Image source={imageIndex.Insta} style={style.logImage} />
        <Image source={imageIndex.Linkedin} style={style.logImage} />
        <Image source={imageIndex.youtube} style={style.logImage} />
      </View>
    </View>
  );
};

export default Invite;

import {StyleSheet} from 'react-native';
import {color, font} from '../../../theme';

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'black',
    flex: 1,
  },
  imageStyle: {
    height: 79,
    width: 253,
    resizeMode: 'center',
    alignSelf: 'center',
  },
  mainViewText: {
    justifyContent: 'flex-end',
    flex: 0.9,
  },
  buttonMain: {
    justifyContent: 'flex-end',
  },
  textStyle: {
    color: color.textWhite,
    textAlign: 'center',
    fontSize: 20,
    margin: 7,
    bottom: 50,
    lineHeight: 22,
    fontFamily: font.MontserratMedium,
    letterSpacing: 1,
  },
  buttonStyle: {
    marginHorizontal: 20,
    backgroundColor: color.textWhite,
    bottom: 25,
  },
  lottieView: {
    // flex: 1,
    height: 300,
  },
  buttonText: {
    fontSize: 16,
    color: color.buttonColor,
    fontFamily: font.MontserratMedium,
    lineHeight: 18,
    letterSpacing: 1,
  },
  mainImageView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
  },
  logImage: {
    height: 35,
    width: 35,
    resizeMode: 'center',
    marginTop: 5,
  },
  joinTextStyle: {
    fontSize: 16,
    color: color.textWhite,
    fontFamily: font.MontserratMedium,
    lineHeight: 18,
    textAlign: 'center',
    letterSpacing: 1,
  },
});

export default style;

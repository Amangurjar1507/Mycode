import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.textWhite,
  },
  scrollView: {
    paddingBottom: 200,
    flexGrow: 1,
  },
  keyboardContainer: {
    flex: 1,
  },
  logoImage: {
    height: 76,
    width: '100%',
    resizeMode: 'contain',
    marginTop: 89,
    alignSelf: 'center',
  },
  backgroundImage: {
    height: 300,
    width: '100%',
  },
  signinText: {
    fontSize: 16,
    fontFamily: font.MontserratBlack,
    color: color.black,
    marginHorizontal: 32,
    textAlign: 'center',
    marginTop: 45,
  },
  inputContainer: {
    marginHorizontal: 32,
    marginTop: 45,
  },
  inputRowView: {
    borderColor: 'red',
  },
  inputPasswordContainer: {
    marginHorizontal: 32,
  },
  lostPasswordText: {
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'right',
  },
  buttonContainer: {
    marginHorizontal: 32,
    marginTop: 45,
  },
  buttonName: {
    fontFamily: font.MontserratBlack,
  },
  signupAccount: {
    fontSize: 14,
    lineHeight: 18,
    color: 'blcak',
  },
  signupText: {
    fontSize: 14,
    lineHeight: 18,
    color: color.black,
    fontWeight: '800',
  },
  signupView: {
    flexDirection: 'row',
    marginTop: 50,
    alignSelf: 'center',
    alignItems: 'center',
  },
  conditionView: {
    flexDirection: 'row',
    marginTop: 28,

    alignSelf: 'center',
  },
  conditionText: {
    fontSize: 12,
    lineHeight: 20,
    marginTop: 28,
    marginHorizontal: 32,
    textAlign: 'center',
    fontWeight: '900',
  },
  termsText: {
    fontSize: 12,
    lineHeight: 20,
    color: color.black,
    fontWeight: '600',
  },
  forgotPasswordView: {
    marginRight: 49,
    marginTop: 10,
    alignSelf: 'flex-end',
    padding: 5,
  },
});
export default style;

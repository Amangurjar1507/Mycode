import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  headingText: {
    marginTop: 20,
    fontFamily: font.workSansSemiBold,
    fontWeight: '600',
    fontSize: 28,
    lineHeight: 32.84,
    color: color.primaryText,
  },
  formContainer: {
    flex: 1,
    marginTop: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  forgotPassButton: {
    alignItems: 'flex-end',
  },
  forgotPasswordLabel: {
    fontSize: 12,
    lineHeight: 16,
    color: color.primaryText,
    fontFamily: font.openSansRegular,
    fontWeight: '600',
  },
  btnContainer: {
    paddingHorizontal: 20,
  },
  btnStyle: {
    marginTop: 30,
    alignSelf: 'center',
    width: 257,
  },
  privacyContainer: {
    marginTop: 10,
  },
  dontHaveAccount: {
    fontSize: 12,
    lineHeight: 16,
    color: color.secondaryText,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 30,
  },
  dontIfDont: {
    marginTop: 16,
    fontFamily: font.openSansRegular,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16.34,
    color: color.secondaryText,
    textAlign: 'center',
    marginHorizontal: 15,
    marginBottom: 38, //48 for other
  },
  signUpLabel: {
    fontFamily: font.openSansRegular,
    fontWeight: '700',
    color: color.primaryText,
    textDecorationLine: 'underline',
  },
});

export default styles;

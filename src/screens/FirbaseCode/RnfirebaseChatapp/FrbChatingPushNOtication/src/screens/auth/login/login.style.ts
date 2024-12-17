import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headingText: {
    marginTop: '50%',
    fontFamily: font.workSansSemiBold,
    fontSize: 28,
    lineHeight: 32.84,
    color: color.darkGreen,
  },
  formContainer: {
    flex: 1,
    marginTop: 61,
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
    alignSelf: 'center',
    width: 300,
    marginBottom: 30,
  },
  privacyContainer: {
    marginTop: 10,
  },
  dontHaveAccount: {
    fontSize: 12,
    lineHeight: 16,
    color: color.primaryText,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 16,
  },
  dontIfDont: {
    fontFamily: font.openSansRegular,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16.34,
    color: color.primaryText,
    textAlign: 'center',
    marginHorizontal: 15,
    marginVertical: 16,
  },
  signUpLabel: {
    fontFamily: font.openSansRegular,
    fontWeight: '700',
    color: color.primaryText,
    textDecorationLine: 'underline',
  },
  emailContainer: {
    marginTop: 0,
  },
});

export default styles;

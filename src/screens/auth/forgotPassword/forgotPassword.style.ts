import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  containerView: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  description: {
    fontSize: 12,
    lineHeight: 16.34,
    color: color.secondaryText,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    width: '100%',
  },
  dataContainer: {
    flex: 1,
    marginTop: 61,
  },
  rememberLabel: {
    lineHeight: 16,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 12,
    marginTop: 16,
    color: color.secondaryText,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 28,
  },
  loginLabel: {
    fontWeight: '700',
    color: color.primaryText,
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    paddingBottom: 20,
    alignItems: 'center',
  },
  inputContainerEmail: {
    marginTop: 0,
    marginBottom: 10,
  },
  headerContainerStyle: {
    paddingBottom: 0,
  },
  btnContainerStyle: {
    width: 257,
    height: 46,
  },
});

export default styles;

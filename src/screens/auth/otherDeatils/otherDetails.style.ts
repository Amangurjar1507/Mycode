import color from '@theme/color';
import font from '@theme/font';
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  keyView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  keyBoardView: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  description: {
    width: '80%',
  },
  socialView: {
    marginTop: 23,
  },
  socialHeadingText: {
    fontFamily: font.openSansRegular,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    color: color.primaryText,
    marginBottom: 12,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.primaryBG,
    height: 91,
  },
  inputContainerStyle: {
    height: 91,
    alignItems: 'flex-start',
    paddingTop: Platform.OS == 'ios' ? 5 : 0,
  },
  heightDropdown: {
    flex: 1,
  },
  headerContainerStyle: {
    paddingBottom: 0,
  },
  headingDesTextStyle: {
    marginTop: 9,
    marginBottom: 10,
  },
  inputContainer: {
    marginTop: 20,
  },
  btnContainerStyle: {
    height: 46,
    width: 257,
  },
  inputViewStyle: {
    marginTop: 49,
  },
  inputView: {
    marginTop: 0,
    marginBottom: 0,
  },
  youtubeContainer: {
    marginTop: 49,
    marginBottom: 0,
  },
  aboutInput: {
    marginTop: 29,
  },
});

export default styles;

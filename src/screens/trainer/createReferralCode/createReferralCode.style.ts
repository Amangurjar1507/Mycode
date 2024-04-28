import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  headerContainerStyle: {
    paddingTop: 11,
    paddingBottom: 0,
  },
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
    paddingHorizontal: 20,
  },
  contentContainer: {
    // flex: 1,
  },
  inputContainerStyle: {
    height: 160,
    alignItems: 'flex-start',
    paddingTop: 10,
    backgroundColor: color.secondaryBG,
    borderWidth: 0,
  },
  createCodeInputContainerStyle: {
    borderStyle: 'dashed',
    borderColor: color.primary,
    borderWidth: 1,
    backgroundColor: color.secondaryBG,
    marginTop: 0,
    height: 46,
  },
  createCodeInputStyle: {
    fontFamily: font.openSansRegular,
    fontWeight: '700',
    fontSize: 20,
    color: color.primary,
    letterSpacing: 8,
    textAlign: 'center',
  },
  createCodeContainerStyle: {
    marginTop: 37,
    marginBottom: 10,
  },
  containerStyle: {
    marginTop: 48,
  },
  containerStyleRef: {
    marginTop: 28,
  },
  inputContainer: {
    backgroundColor: color.secondaryBG,
    borderWidth: 0,
    height: 46,
  },
  inputStyle: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    color: color.primaryText,
  },
  containerView: {
    marginTop: 0,
  },
  btnView: {
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: color.primaryBG,
    paddingVertical: 20,
  },
  copyView: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: 40,
    width: 113,
    gap: 6,
    alignItems: 'center',
  },
  copyText: {
    paddingHorizontal: 6,
    fontFamily: font.workSansRegular,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.42,
    textAlign: 'center',
    color: color.secondaryText,
  },
  btnStyle: {
    width: 257,
  },
  isCopyCode: {
    color: color.primary,
  },
});

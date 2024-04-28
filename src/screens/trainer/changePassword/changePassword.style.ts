import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerViewStyle: {
    paddingHorizontal: 0,
  },
  headerContainerStyle: {
    paddingHorizontal: 20,
  },
  inputContentContainers: {
    marginTop: 27,
    flex: 1,
    marginBottom: 50,
    paddingHorizontal: 20,
  },
  oldPasswordInputStyle: {
    marginTop: 0,
  },
  oldInputContainerStyle: {
    backgroundColor: color.secondaryBG,
  },
  inputTextStyle: {
    color: color.primaryText,
    fontSize: 13,
  },
  btnView: {
    paddingVertical: 12,
    backgroundColor: color.primaryBG,
    paddingBottom: 30,
  },
  createPackagesBtnStyle: {
    width: 257,
    height: 47,
    borderRadius: 71,
    alignSelf: 'center',
  },
  createPackagesStyle: {
    color: color.secondaryBG,
    fontSize: 14,
    lineHeight: 19.07,
    fontFamily: font.openSansRegular,
    fontWeight: '600',
  },
  btnViewStyle: {
    marginTop: 44,
  },
  confirmLableStyle: {
    color: color.secondaryBG,
  },
  confirmBtnStyle: {
    backgroundColor: color.primary,
    marginHorizontal: 60,
  },
  keyBoardView: {
    flex: 1,
  },
  descriptionText: {
    marginLeft: 51,
    marginRight: 39,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: color.primaryText,
  },
});

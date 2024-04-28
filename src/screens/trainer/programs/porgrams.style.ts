import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primaryBG,
  },
  headerContainerStyle: {
    paddingTop: 14,
    paddingBottom: 8,
  },
  contentContainerStyle: {
    marginTop: 7,
    flexGrow: 1,
  },
  footerSpace: {
    marginBottom: 30,
  },
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.secondaryBG,
    height: 92,
    paddingTop: 21,
    paddingBottom: 25,
  },
  cancelBtnStyle: {
    width: 167,
    marginRight: 20,
    borderColor: color.primary,
  },
  cancelBtnText: {
    color: color.primary,
    fontSize: 14,
    lineHeight: 16.42,
    fontFamily: font.workSansRegular,
    fontWeight: '400',
  },
  createPackagesBtnStyle: {
    width: 167,
  },
  createPackagesStyle: {
    color: color.priceTagBG,
    fontSize: 14,
    lineHeight: 16.42,
    fontFamily: font.workSansRegular,
    fontWeight: '400',
  },
});

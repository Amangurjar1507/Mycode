import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 0,
  },
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  mainContainer: {
    flex: 1,
  },
  contentContainerStyle: {
    marginTop: 5,
    flexGrow: 1,
    paddingBottom: 50,
  },
  footerSpace: {
    marginBottom: 30,
  },
  btnView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.primaryBG,
    height: 91,
  },
  createPackagesBtnStyle: {
    width: 257,
  },
  createPackagesStyle: {
    color: color.secondaryBG,
    fontSize: 14,
    lineHeight: 19.07,
    fontFamily: font.openSansRegular,
    fontWeight: '600',
  },
});

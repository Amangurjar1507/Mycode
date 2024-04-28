import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  mainContainer: {
    flex: 1,
  },
  contentContainerStyle: {
    marginTop: 18,
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
  searchBarStyle: {
    marginTop: 0,
  },
});

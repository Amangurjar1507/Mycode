import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  searchBarContainer: {
    // paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  searchView: {
    backgroundColor: color.secondaryBG,
    borderWidth: 0.5,
    borderColor: color.lightgray,
  },
  addIconContainerStyle: {
    backgroundColor: color.primary,
  },
  inputStyle: {
    color: color.primaryText,
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 50,
  },
  emptyContainer: {
    backgroundColor: color.paleLavender,
    height: 514,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  emptyText: {
    fontSize: 12,
    color: color.primaryText,
    lineHeight: 16,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 39,
    marginTop: 16,
  },
  btnContainer: {
    height: 38,
    width: 161,
  },
  btnText: {
    fontSize: 15,
    color: color.secondaryBG,
    lineHeight: 17,
    fontFamily: font.workSansRegular,
    fontWeight: '600',
  },
  footer: {
    marginBottom: 30,
  },
  chartLable: {
    width: 60,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 10.5,
    lineHeight: 14.3,
    top: -6,
    color: color.primaryText,
  },
  wrapper: {
    backgroundColor: color.transparentColor,
  },
  sheetContainer: {
    height: 160,
  },
});

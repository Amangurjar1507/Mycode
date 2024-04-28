import color from '@theme/color';
import font from '@theme/font';
import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerViewStyle: {
    paddingHorizontal: 0,
  },
  containerStyle: {
    height: 40,
    borderRadius: 2,
    padding: 10,
    backgroundColor: color.secondaryBG,
    ...Platform.select({
      ios: {
        shadowOffset: {width: 0, height: 4},
        shadowColor: color.primaryText,
        shadowOpacity: 0.05,
        shadowRadius: 40,
      },
      android: {
        elevation: 20,
      },
    }),
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  filterIconContainerStyle: {
    height: 36,
    width: 36,
  },
  inputStyle: {
    fontSize: 15,
    color: color.primaryText,
    lineHeight: 22,
  },
  graphContainerStyle: {
    marginTop: 12,
    marginBottom: 50,
  },
  placeholderStyle: {
    fontSize: 15,
    color: color.primaryText,
    lineHeight: 22,
  },
  cardStyleView: {
    padding: 12,
    backgroundColor: color.secondaryBG,
    borderRadius: 10,
    height: 259,
    maxHeight: 259,
    ...Platform.select({
      ios: {
        shadowColor: color.primaryText,
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 40,
      },
      android: {
        elevation: 8,
      },
    }),
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
});

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
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  placeholderStyle: {
    fontSize: 15,
    color: color.primaryText,
    lineHeight: 22,
  },
  listView: {
    padding: 12,
    backgroundColor: color.secondaryBG,
    borderRadius: 10,
    height: 141,
    ...Platform.select({
      ios: {
        shadowColor: color.primaryText,
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.01,
        shadowRadius: 10,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  graphContainerStyle: {
    marginTop: 12,
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 50,
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

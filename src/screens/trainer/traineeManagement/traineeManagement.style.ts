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
    height: 227,
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
  contentView: {
    flex: 1,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 29,
  },
  title: {
    flex: 1,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    color: color.secondaryText,
  },
  value: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: color.primaryText,
  },
  expandText: {
    fontFamily: font.workSansRegular,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: color.primary,
    textAlign: 'right',
    marginTop: 10,
    marginBottom: 10,
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
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 50,
  },
});

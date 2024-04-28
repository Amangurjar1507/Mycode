import color from '@theme/color';
import font from '@theme/font';
import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.secondaryBG,
    height: 62,
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 16,
    ...Platform.select({
      ios: {
        shadowColor: color.primaryText,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.02,
        shadowRadius: 5,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  amountView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  idText: {
    flex: 1,
    fontSize: 12,
    fontFamily: font.openSansRegular,
    fontWeight: '500',
    lineHeight: 14.52,
    color: color.primaryText,
  },
  amountText: {
    fontSize: 12,
    fontFamily: font.openSansRegular,
    fontWeight: '500',
    lineHeight: 14.52,
    color: color.primaryText,
  },
  dateText: {
    marginTop: 4,
    fontSize: 10,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    lineHeight: 12.1,
    color: color.secondaryText,
  },
});

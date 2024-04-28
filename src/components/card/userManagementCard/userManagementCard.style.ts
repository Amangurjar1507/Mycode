import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.secondaryBG,
    borderRadius: 5,
    height: 103,
    paddingHorizontal: 13,
    paddingVertical: 10,
  },
  columnStyle: {
    flex: 1,
    height: 82,
  },
  labalText: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 16,
    color: color.secondaryText,
  },
  valueText: {
    fontFamily: font.openSansRegular,
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 16,
    color: color.primaryText,
  },
  discountView: {
    flexDirection: 'row',
  },
  discount: {
    flex: 1,
  },
});

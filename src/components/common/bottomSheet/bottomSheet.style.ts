import color from '@theme/color';
import font from '@theme/font';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: color.secondaryBG,
  },
  rowView: {
    height: 45,
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 8,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: color.primaryText,
    textTransform: 'capitalize',
  },
});

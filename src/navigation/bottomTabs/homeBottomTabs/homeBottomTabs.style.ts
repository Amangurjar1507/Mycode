import color from '@theme/color';
import font from '@theme/font';
import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: color.secondaryBG,
    paddingTop: 10,
    paddingHorizontal: 15,
    paddingBottom: 28,
    elevation: 15,
    shadowColor: color.primary,
  },
  rowView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  nameText: {
    marginTop: 6,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 13.62,
    color: color.secondaryText,
  },
});

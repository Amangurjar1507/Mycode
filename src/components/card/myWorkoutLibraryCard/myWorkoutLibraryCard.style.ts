import color from '@theme/color';
import font from '@theme/font';
import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.buttonBG,
    borderRadius: 5,
    ...Platform.select({
      ios: {
        shadowOffset: {width: 0, height: 1},
        shadowColor: color.primaryText,
        shadowOpacity: 0.2,
        shadowRadius: 1,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  imageView: {
    height: 100,
    width: '100%',
    borderRadius: 5,
    justifyContent: 'flex-end',
  },
  detailsView: {
    height: 43,
    backgroundColor: color.secondaryText,
    padding: 7,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingBottom: 0,
  },
  titleText: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14.8,
    color: color.secondaryBG,
  },
  desText: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14.8,
    color: color.secondaryBG,
  },
});

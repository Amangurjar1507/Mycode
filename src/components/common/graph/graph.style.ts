import color from '@theme/color';
import font from '@theme/font';
import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    height: 247,
    maxHeight: 247,
    backgroundColor: color.secondaryBG,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: color.primaryText,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.01,
        shadowRadius: 1,
      },
      android: {
        elevation: 0.5,
      },
    }),
    padding: 10,
  },
  titleText: {
    textAlign: 'center',
    fontFamily: font.openSansRegular,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24,
    color: color.primaryText,
  },
  chartContainer: {
    height: 157,
    width: '100%',
    maxHeight: 157,
    // borderWidth: 1,
  },
  dropdownCotainer: {
    marginTop: 10,
    width: 106,
    alignSelf: 'flex-end',
  },
  labelView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 16,
    width: 47,
    borderRadius: 3.15,
    backgroundColor: color.buttonBG,
    marginTop: -14,
  },
  labelText: {
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: font.openSansRegular,
    fontSize: 10.05,
    lineHeight: 14.3,
    color: color.primaryText,
  },
  dropdownBG: {
    backgroundColor: color.buttonBG,
  },
});

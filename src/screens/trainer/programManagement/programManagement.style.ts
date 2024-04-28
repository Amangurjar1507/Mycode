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
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 20,
      },
    }),
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 13,
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
    marginTop: 14,
    padding: 11,
    backgroundColor: color.secondaryBG,
    borderRadius: 10,
    height: 259,
    maxHeight: 259,
    ...Platform.select({
      ios: {
        shadowColor: color.primaryText,
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 5,
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
  rowDollorIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  priceRowViewStyle: {
    flexDirection: 'row',
    marginBottom: 14,
  },
  textManageTextView: {
    marginLeft: 6,
  },
  priceTextStyle: {
    fontSize: 10,
    fontFamily: font.openSansSemiBold,
    color: color.secondaryText,
  },
  priceUKTextStyle: {
    fontSize: 14,
    fontFamily: font.openSansSemiBold,
    color: color.primaryText,
  },
  activeCardStyleView: {
    width: 70,
    borderRadius: 50,
    backgroundColor: color.forestGreen,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: 'center',
    flexDirection: 'row',
  },
  activePoinStyle: {
    height: 7,
    width: 7,
    borderRadius: 40,
    backgroundColor: color.viridianGreen,
    marginRight: 7,
  },
  activeTextPoint: {
    fontSize: 12,
    fontFamily: font.openSansRegular,
    color: color.viridianGreen,
  },
});

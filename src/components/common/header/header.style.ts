import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 20,
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightButtonText: {
    paddingHorizontal: 5,
    height: 25,
    fontFamily: font.openSansRegular,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 19,
    color: color.primary,
    marginLeft: 5,
    textTransform: 'capitalize',
  },
  lableView: {
    // flex: 1,
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  lableStyle: {
    marginLeft: 15,
    fontFamily: font.workSansMedium,
    fontWeight: '400',
    fontSize: 20,
    color: color.primaryText,
    lineHeight: 23.46,
  },
  descriptionStyle: {
    marginTop: 10,
    marginLeft: 31,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: color.primaryText,
  },
  headingStyle: {
    marginTop: 40,
    fontFamily: font.workSansSemiBold,
    fontWeight: '600',
    fontSize: 28,
    lineHeight: 32.84,
    color: color.primaryText,
  },
  headingDesStyle: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16.34,
    color: color.primaryText,
  },
});

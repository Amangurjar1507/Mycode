import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const style = StyleSheet.create({
  marginContainer: {
    marginHorizontal: 20,
  },
  container: {
    flexDirection: 'row',
    height: 46,
    borderRadius: 46 / 2,
    backgroundColor: color.darkGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inActiveContainer: {
    flexDirection: 'row',
    backgroundColor: color.buttonBG,
    height: 46,
    borderRadius: 46 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineContainer: {
    flexDirection: 'row',
    height: 46,
    borderRadius: 46 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: color.secondaryBG,
  },
  nameStyle: {
    fontFamily: font.openSansSemiBold,
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 19,
    color: color.secondaryBG,
  },
  inActiveNameStyle: {
    fontFamily: font.openSansSemiBold,
    fontSize: 16,
    fontWeight: '700',
    color: color.primaryText,
    lineHeight: 19,
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {
    marginRight: 5,
  },
  rightIcon: {
    marginLeft: 5,
  },
});
export default style;

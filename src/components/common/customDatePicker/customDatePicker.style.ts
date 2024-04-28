import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 46,
    borderWidth: 0.5,
    borderColor: color.secondaryText,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: color.primaryBG,
    marginVertical: 20,
  },
  isFoucs: {
    borderWidth: 1.5,
    borderColor: color.primary,
  },
  labelView: {
    marginLeft: 7,
    paddingHorizontal: 4,
    backgroundColor: color.primaryBG,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
    position: 'absolute',
    height: 18,
    top: -9,
  },
  labelText: {
    fontSize: 13,
    fontFamily: font.openSansSemiBold,
    fontWeight: '600',
    color: color.primaryText,
    lineHeight: 17.7,
  },
  iconView: {
    height: 30,
    width: 30,
    backgroundColor: color.primaryBG,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    flex: 1,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 34,
    color: color.secondaryText,
  },
  dateText: {
    flex: 1,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 34,
    color: color.primaryText,
  },
  errorLabel: {
    fontSize: 12,
    lineHeight: 16,
    color: color.warning,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    top: 224,
    position: 'absolute',
  },
});

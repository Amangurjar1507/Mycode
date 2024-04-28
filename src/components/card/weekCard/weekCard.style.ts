import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 49,
    marginRight: 20,
    borderWidth: 1,
    borderColor: color.buttonBG,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    fontFamily: font.openSansRegular,
    color: color.primaryText,
  },
});

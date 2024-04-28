import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  errorStyle: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 12,
    color: color.warning,
  },
  errorViewStyle: {
    marginTop: 7,
  },
});
export default styles;

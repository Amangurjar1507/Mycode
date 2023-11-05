import {StyleSheet} from 'react-native';
import {color, font} from '../../../theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableStyle: {
    height: 55,
    borderRadius: 8,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: color.textWhite,
    fontFamily: font.MontserratMedium,
  },
});

export default styles;

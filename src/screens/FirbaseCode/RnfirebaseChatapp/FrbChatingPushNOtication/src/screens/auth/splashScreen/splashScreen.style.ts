import { StyleSheet } from 'react-native';
import color from '../../../theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 300,
    width: 300,
    resizeMode: 'contain',
  },
});

export default styles;

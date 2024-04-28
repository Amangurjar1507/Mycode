import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 15,
  },
  uploadContainer: {
    height: 84,
    borderRadius: 5,
    backgroundColor: color.secondaryBG,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lable: {
    marginBottom: 10,
    fontFamily: font.workSansRegular,
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 17.6,
    color: color.primaryText,
  },
  optionalLable: {
    fontFamily: font.workSansRegular,
    fontWeight: '300',
    fontSize: 15,
    lineHeight: 17.6,
    color: color.primaryText,
  },
  uploadText: {
    marginTop: 2.91,
    textAlign: 'center',
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 8,
    lineHeight: 10.74,
    letterSpacing: 0.1,
    color: color.secondaryText,
  },
  ratioText: {
    marginTop: 8,
    textAlign: 'center',
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 8,
    lineHeight: 10.74,
    letterSpacing: 0.1,
    color: color.secondaryText,
  },
});

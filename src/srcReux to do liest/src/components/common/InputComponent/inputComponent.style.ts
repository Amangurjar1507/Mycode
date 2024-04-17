import {StyleSheet} from 'react-native';
import font from '../../../theme/font';
import color from '../../../theme/color';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  textStyle: {
    fontSize: 12,
    fontFamily: font.MontserratBlack,
    color: 'grey',
  },
  borderView: {
    flexDirection: 'row',
    height: 45,
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: 'white',
    marginTop: 8,
    color: 'red',
    overflow: 'hidden',
    borderWidth:1
  
  },
  inputStyle: {
    flex: 1,
    fontSize: 14,
    color: 'black',
    fontFamily: font.MontserratBold,
    marginBottom: -5,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
     
  },
  imageButton: {
    paddingHorizontal: 8,
    width: 30,
  },
  placeholderText: {
    bottom: 10,
    paddingLeft: 5,
    fontSize: 15,
    lineHeight: 18,
  },
  error: {
    fontSize: 12,
    marginTop: 5,
  },
  hideStyle: {
    height: 20,
    width: 22,
    resizeMode: 'contain',
  },
  eyetouch: {
    alignSelf: 'center',
  },
  errorText: {
    fontSize: 12,
    color: 'green',
    marginTop: 5,
    fontFamily: font.MontserratBoldItalic,
  },
});

export default styles;

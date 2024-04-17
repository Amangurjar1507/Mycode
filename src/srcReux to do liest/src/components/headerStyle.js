import {StyleSheet} from 'react-native';
 
export const style = StyleSheet.create({
  container: {
    paddingHorizontal: 27,
    paddingBottom: 22,
  },
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 23,
  },
  title: {
     fontSize: 20,
     textAlign: 'center',
    flex: 1,
    alignSelf: 'center',
    color:"black"
  },
  backView: {
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  rightIcon: {
    paddingHorizontal: 4,
    padding: 4,
  },
  circleView: {
     height: 30,
    width: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default style;
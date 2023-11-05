import {StyleSheet} from 'react-native';
import {color, font} from '../../theme';

const style = StyleSheet.create({
  tabText: {
    fontSize: 8,
    fontFamily: font.interRegular,
    marginTop: 5,
  },
  container: {
    height: 70,
    backgroundColor: color.white,
  },
  mainView: {
    height: 70,
    backgroundColor: color.white,
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  topView: {
    width: 50,
    height: 1.5,
  },
  tabButton: {
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
  },
  halfCurveView: {
    borderRadius: 100,
    height: 50,
    width: 50,
    marginTop: 5,
  },
  lineView: {
    flex: 1,
  },
  iconView: {
    flex: 0,
    alignItems: 'center',
  },
  notificationDot: {
    height: 15,
    width: 15,
    borderRadius: 50,
    position: 'absolute',
    top: -5,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default style;

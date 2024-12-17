import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: color.darkGreen,
    height: 76,
    paddingHorizontal: 20,
  },
  rightIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  titleRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  backButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
    paddingVertical: 6,
  },
  labelContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  labelText: {
    fontFamily: font.openSansBold,
    fontWeight: '700',
    fontSize: 19,
    color: color.secondaryBG,
    lineHeight: 23,
    textTransform: 'capitalize',
  },
  subLabelText: {
    fontFamily: font.workSansRegular,
    fontWeight: '200',
    fontSize: 12,
    lineHeight: 16,
    color: color.deactivatedBG,
    textTransform: 'capitalize',
  },
  rightView: {
    flex: 0.2,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 3,
    paddingVertical: 3,
    marginLeft: 10,
  },
  notificationActive: {
    height: 8,
    width: 8,
    backgroundColor:color.warning,
    borderRadius: 15,
    position: 'absolute',
    right: 7,
    top: '66%',
  },
});

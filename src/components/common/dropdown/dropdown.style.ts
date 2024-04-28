import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  mainView: {
    flexDirection: 'column',
  },
  label: {
    fontFamily: font.openSansRegular,
    fontSize: 13,
    lineHeight: 22,
    fontWeight: '600',
    color: color.primaryText,
    marginBottom: 8,
  },
  container: {
    flex: 1,
    height: 36,
    borderRadius: 4,
    paddingHorizontal: 9,
    paddingVertical: 9,
    backgroundColor: color.lightgray,
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeholderText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 16.34,
    fontWeight: '400',
    fontFamily: font.openSansRegular,
    color: color.secondaryText,
  },
  valueText: {
    fontFamily: font.openSansRegular,
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 16.34,
    flex: 1,
    color: color.primaryText,
  },
  itemDivider: {
    height: 1,
    backgroundColor: color.lightgray,
  },
  itemRow: {
    paddingHorizontal: 11,
    paddingVertical: 12,
    backgroundColor: color.secondaryBG,
  },
  titleText: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: color.primaryText,
  },

  innerLable: {
    color: color.lightgray,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: font.workSansRegular,
    marginBottom: 6,
  },
  valueView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterIconStyle: {
    height: 36,
    width: 36,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 13,
    backgroundColor: color.primaryText,
  },
  filterRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  openDropdown: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    maxHeight: 150,
    zIndex: 1,
    backgroundColor: color.secondaryBG,
  },
  arrowView: {
    height: 24,
    width: 24,
    // marginLeft: 4,
  },
  innerLableView: {
    flex: 1,
  },
});
export default style;

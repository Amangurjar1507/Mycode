import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 38,
    borderBottomWidth: 1,
    borderBottomColor: color.secondaryText,
    // marginHorizontal: 20,
    backgroundColor: color.primaryBG,
  },
  tabRow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  titleView: {
    flex: 1,
    justifyContent: 'flex-end',
    borderBottomWidth: 4,
  },
  titleText: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 18,
    color: color.primaryText,
    marginBottom: 6,
  },
  bottomIndicatorView: {
    width: 158,
    height: 4,
    marginTop: 6,
  },
  focusIndicator: {
    height: 4,
    backgroundColor: color.primary,
  },
});

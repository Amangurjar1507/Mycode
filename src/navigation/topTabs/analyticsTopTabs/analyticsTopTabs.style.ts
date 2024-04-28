import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    minHeight: 38,
    height: 38,
    borderBottomWidth: 0.5,
    borderBottomColor: color.lightgray,
    backgroundColor: color.primaryBG,
  },
  mainContainer: {
    flexGrow: 1,
    height: 38,
    // borderBottomColor: color.lightgray,
    alignItems: 'flex-end',
    backgroundColor: color.primaryBG,
  },
  tabRow: {
    flex: 1,
  },
  titleView: {
    borderBottomWidth: 4,
  },
  titleText: {
    fontFamily: font.openSansRegular,
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 18,
    color: color.primaryText,
    marginBottom: 6,
  },
});

import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 31,
    marginBottom: 17,
    width: '100%',
  },
  searchView: {
    height: 42,
    flexDirection: 'row',
    borderRadius: 5,
    paddingHorizontal: 12,
    alignItems: 'center',
    flex: 1,
    backgroundColor: color.primaryText,
  },
  searchInputStyle: {
    flex: 1,
    fontSize: 13,
    lineHeight: 17,
    fontFamily: font.openSansRegular,
    // marginLeft: 10,
    color: color.secondaryBG,
    fontWeight: '400',
  },
  filterView: {
    height: 42,
    width: 42,
    backgroundColor: color.primaryText,
    marginLeft: 12,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  folderBtnView: {
    height: 42,
    width: 42,
    backgroundColor: color.primary,
    marginLeft: 12,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;

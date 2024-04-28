import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
  },
  sectionTitleText: {
    fontFamily: font.workSansRegular,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.42,
    color: color.primaryText,
  },
  sectionsView: {
    marginBottom: 24,
    backgroundColor: color.secondaryBG,
    borderRadius: 10,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    height: 74,
    backgroundColor: color.secondaryBG,
    borderRadius: 10,
  },
  rowViewOne: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 17,
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  rowTitle: {
    marginLeft: 10,
    fontFamily: font.openSansMedium,
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 17.7,
    color: color.primaryText,
  },
  isDeleted: {
    color: color.warning,
  },
  divider: {
    borderTopWidth: 1,
    borderTopColor: color.lightgray,
  },
  singleItem: {
    marginTop: 12,
  },
});
export default styles;

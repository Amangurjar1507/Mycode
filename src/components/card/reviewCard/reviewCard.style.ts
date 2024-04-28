import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 74,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  imageView: {
    height: 46,
    width: 46,
  },
  image: {
    height: 47,
    width: 47,
  },
  detailsView: {
    marginLeft: 11.19,
    flex: 1,
    marginRight: 11.2,
  },
  titleText: {
    fontFamily: font.openSansRegular,
    fontSize: 10,
    lineHeight: 18,
    color: color.secondaryText,
    flex: 1,
  },
  desText: {
    marginTop: 5,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 15.08,
    color: color.primaryText,
  },
  reviewRowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
  },
  ratingTextStyle: {
    marginRight: 4,
    fontSize: 12,
    fontFamily: font.openSansMedium,
    color: color.primaryText,
  },
  rowView: {
    flexDirection: 'row',
  },
});

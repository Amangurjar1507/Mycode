import color from '@theme/color';
import font from '@theme/font';
import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    paddingHorizontal: 12,
    backgroundColor: color.secondaryBG,
    borderRadius: 10,
    height: 259,
    maxHeight: 259,
    ...Platform.select({
      ios: {
        shadowColor: color.primaryText,
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.01,
        shadowRadius: 5,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
  dotsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 19,
    marginTop: 24,
  },
  dotView: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: color.primary,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    height: 6,
    width: 6,
    borderRadius: 5,
    backgroundColor: color.secondaryBG,
  },
  activeDot: {
    backgroundColor: color.primary,
  },
  slide: {
    width: '100%',
    height: '100%',
  },
  card: {
    backgroundColor: color.primaryBG,
    width: 158,
    height: 92,
    marginRight: 13,
    marginBottom: 13,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  cardTitleView: {
    height: 63,
    width: 147,
  },
  cardTitle: {
    fontFamily: font.openSansRegular,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 19,
    color: color.primaryText,
  },
  amount: {
    marginTop: 10,
    fontFamily: font.openSansRegular,
    fontWeight: '600',
    fontSize: 25,
    lineHeight: 34,
    color: color.primaryText,
  },
  progressView: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconView: {
    height: 13,
    width: 13,
    marginRight: 2,
  },
  progrssPercent: {
    fontFamily: font.openSansRegular,
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 13.62,
    color: color.primary,
  },
  progrssText: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 13.62,
    color: color.primaryText,
  },
  isSelected: {
    borderWidth: 1,
    borderColor: color.primary,
  },
});

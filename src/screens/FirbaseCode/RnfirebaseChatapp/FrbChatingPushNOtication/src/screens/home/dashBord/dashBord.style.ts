import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.whiteLight,
  },
  containerScroll: {
    flex: 1,
    backgroundColor: color.whiteLight,
    paddingHorizontal: 20,
  },
  insightsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  insightsSectionOrder: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  insightBox: {
    backgroundColor: color.secondaryBG,
    borderRadius: 10,
    width: '48%',
    paddingHorizontal: 25,
    paddingVertical: 16,
    alignItems: 'flex-start',
    justifyContent: 'center',
    elevation: 1,
  },
  insightValue: {
    fontSize: 20,
    fontWeight: '700',
    color: color.black,
    lineHeight: 24,
    fontFamily: font.openSansBold,
  },
  insightLabel: {
    fontSize: 15,
    color: color.black,
    marginBottom: 10,
    lineHeight: 18,
    fontWeight: '400',
    fontFamily: font.openSansMedium,
  },
  insightBoxSmall: {
    backgroundColor: color.secondaryBG,
    borderRadius: 10,
    width: '48%',
    paddingHorizontal: 10,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    flexDirection: 'row',
  },
  insightLabelSmall: {
    fontSize: 14,
    color: color.secondaryText,
    marginTop: 3,
    lineHeight: 16,
    fontWeight: '500',
    fontFamily: font.openSansRegular,
  },
  insightValuueSmall: {
    fontSize: 15,
    color: color.black,
    marginBottom: 3,
    lineHeight: 18,
    fontWeight: '400',
    fontFamily: font.openSansMedium,
  },
  ordersSection: {
    marginBottom: 20,
  },
  ordersHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  ordersTitle: {
    fontSize: 18,
    color: color.black,
    marginBottom: 3,
    lineHeight: 18,
    fontWeight: '600',
    fontFamily: font.openSansBold,
  },
  viewAll: {
    fontSize: 14,
    color: color.black,
    marginBottom: 3,
    lineHeight: 16,
    fontWeight: '300',
    fontFamily: font.openSansBold,
  },
  cardTextView: {
    flex: 1,
    marginLeft: 10,
  },
  svgViewStyle: {
    position: 'absolute',
    alignSelf: 'center',
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  // chartSection: {
  //   alignItems: 'center',
  //   marginBottom: 30,
  // },
  // chartDate: {
  //   fontSize: 16,
  //   marginBottom: 10,
  // },
});

export default styles;

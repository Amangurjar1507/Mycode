import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC, memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './referralCard.style';

interface ReferralCardProps {
  item: ItemProps;
  index: number;
  onPress?: () => void;
  onPressThreeDot?: () => void;
}
interface ItemProps {
  id: number;
  referralCode?: string | undefined;
  referredBy?: string | undefined;
  noOfSubs?: string | undefined;
  conversionRate?: string | undefined;
  revenueGenerated?: string | undefined;
  discount?: string | undefined;
}
const ReferralCard: FC<ReferralCardProps> = ({
  item,
  index,
  onPress,
  onPressThreeDot,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, {marginTop: index !== 0 ? 12 : 0}]}>
      <View style={styles.columnStyle}>
        <Text style={styles.labalText}>Referral code</Text>
        <Text style={[styles.valueText, {color: color.primary}]}>
          {item?.referralCode}
        </Text>
        <Text style={[styles.labalText, {marginTop: 14}]}>
          No of Subscribers
        </Text>
        <Text style={styles.valueText}>{item?.noOfSubs}</Text>
      </View>
      <View style={styles.columnStyle}>
        <Text style={styles.labalText}>Referral by</Text>
        <Text style={styles.valueText}>{item?.referredBy}</Text>
        <Text style={[styles.labalText, {marginTop: 14}]}>Conversion Rate</Text>
        <Text style={styles.valueText}>{item?.conversionRate}</Text>
      </View>
      <View style={styles.columnStyle}>
        <View style={styles.discountView}>
          <View style={styles.discount}>
            <Text style={styles.labalText}>Discount</Text>
            <Text style={styles.valueText}>{item?.discount}</Text>
          </View>
          <TouchableOpacity activeOpacity={0.8} onPress={onPressThreeDot}>
            <SvgIndex.moreVertical />
          </TouchableOpacity>
        </View>
        <Text style={[styles.labalText, {marginTop: 14}]}>
          Revenue Generated
        </Text>
        <Text style={styles.valueText}>{item?.revenueGenerated}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(ReferralCard);

import SvgIndex from '@svgIndex';
import React, {FC, memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './userManagementCard.style';

interface userManagementCardProps {
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
const UserManagementCard: FC<userManagementCardProps> = ({
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
        <Text style={styles.labalText}>Username</Text>
        <Text style={[styles.valueText]}>{item?.referralCode}</Text>
        <Text style={[styles.labalText, {marginTop: 14}]}>Completed %</Text>
        <Text style={styles.valueText}>{item?.noOfSubs}</Text>
      </View>
      <View style={styles.columnStyle}>
        <View style={styles.discountView}>
          <View style={styles.discount}>
            <Text style={styles.labalText}>Date of Subscription</Text>
            <Text style={styles.valueText}>{item?.discount}</Text>
          </View>
          <TouchableOpacity activeOpacity={0.8} onPress={onPressThreeDot}>
            <SvgIndex.moreVertical />
          </TouchableOpacity>
        </View>
        <Text style={[styles.labalText, {marginTop: 14}]}>
          Sessions Completed (#)
        </Text>
        <Text style={styles.valueText}>{item?.revenueGenerated}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(UserManagementCard);

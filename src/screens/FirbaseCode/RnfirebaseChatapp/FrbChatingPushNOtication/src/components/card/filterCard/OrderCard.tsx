import React, {FC, memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './orderCard.style';
import {Log} from '../../../utility/log';

interface OrderCardProps {
  item: any;
  index: number;
  onPress?: (item: object) => void;
}

const OrderCard: FC<OrderCardProps> = ({item, onPress, index}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pickup':
        return styles.pickupPending;
      case 'deliverd':
        return styles.delivered;
      case 'failedToDelivery':
        return styles.failed;
      case 'outofDelivery':
        return styles.outofDeliverd;
      default:
        return {};
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        if (onPress) {
          onPress(getStatusColor(item?.status));
        }
      }}
      style={styles.card}>
      <View style={styles.orderInfo}>
        <Text style={styles.orderNumber}>Order No. {item?.order_id}</Text>
        <Text style={styles.orderAddress}>{item?.user?.user_address}</Text>
      </View>
      <View style={[styles.statusContainer, getStatusColor(item?.status)]}>
        <Text style={styles.statusText}>
          {/* {item?.status} */}
          {item?.status
            ?.replace(/([A-Z])/g, ' $1')
            .trim()
            .toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(OrderCard);

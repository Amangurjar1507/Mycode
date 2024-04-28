import React, {FC, memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './transactionCard.style';
interface TransactionCardProps {
  item: ItemProps;
  index: number;
  onPress?: () => void;
}
interface ItemProps {
  id?: number | undefined;
  identifier?: string | undefined;
  amount?: string | undefined;
  date?: string | undefined;
}
const TransactionCard: FC<TransactionCardProps> = ({item, index, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, {marginTop: index !== 0 ? 12 : 0}]}>
      <View style={styles.amountView}>
        <Text style={styles.idText}>ID: {item?.identifier}</Text>
        <Text style={styles.amountText}>${item?.amount}</Text>
      </View>
      <Text style={styles.dateText}>${item?.date}</Text>
    </TouchableOpacity>
  );
};

export default memo(TransactionCard);

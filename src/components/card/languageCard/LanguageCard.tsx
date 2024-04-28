import React, {FC, memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './language.style';

interface LanguageCardProps {
  item: ItemProps | any;
  index: number;
  onPress?: () => void;
}
interface ItemProps {
  id?: number | undefined;
  title?: string | undefined;
  country?: string | undefined;
  selected?: boolean;
}
const LanguageCard: FC<LanguageCardProps> = ({item, index, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, item?.selected && styles.selectedView]}>
      <Text style={[styles.title, item?.selected && styles.selectedText]}>
        {item?.title}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(LanguageCard);

import imageIndex from '@imageIndex';
import color from '@theme/color';
import React, {FC, memo} from 'react';
import {
  ImageBackground,
  ImageProps,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './myWorkoutLibraryCard.style';

interface MyWorkoutLibraryCardProps {
  item: ItemProps;
  index: number;
  onPress?: () => void;
  selectIndexMatch?: number;
}
interface ItemProps {
  id?: number | undefined;
  image?: ImageProps | undefined;
  title?: string | undefined;
  descriptions?: string | undefined;
}

const MyWorkoutLibraryCard: FC<MyWorkoutLibraryCardProps> = ({
  item,
  index,
  onPress,
  selectIndexMatch,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        styles.container,
        {
          marginRight: index % 2 == 0 ? 8 : 0,
          marginLeft: index % 2 != 0 ? 8 : 0,
          borderWidth: index == selectIndexMatch ? 2 : 0,
          borderColor:
            index == selectIndexMatch ? color.primary : color.buttonBG,
          marginTop: index !== 0 && index !== 1 ? 14 : 0,
        },
      ]}>
      <ImageBackground
        resizeMode="cover"
        style={styles.imageView}
        source={imageIndex.myWorkoutCardLibrary}>
        <View style={styles.detailsView}>
          <Text style={styles.titleText}>{item?.title}</Text>
          <Text style={styles.desText}>{item?.descriptions}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default memo(MyWorkoutLibraryCard);

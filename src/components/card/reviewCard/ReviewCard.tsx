import imageIndex from '@imageIndex';
import SvgIndex from '@svgIndex';
import React, {FC, memo} from 'react';
import {Image, ImageProps, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './reviewCard.style';

interface ReviewsMessageCardProps {
  item: ItemProps;
  index: number;
  onPress?: () => void;
}
interface ItemProps {
  id?: number | undefined;
  image?: ImageProps | undefined;
  title?: string | undefined;
  descriptions?: string | undefined;
}
const ReviewCard: FC<ReviewsMessageCardProps> = ({item, index, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, {marginTop: index !== 0 ? 12 : 0}]}>
      <View style={styles.imageView}>
        <Image
          source={imageIndex.userProfile}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.detailsView}>
        <View style={styles.rowView}>
          <Text style={styles.titleText}>Oanna * 3d ago</Text>
          <View style={styles.reviewRowView}>
            <Text style={styles.ratingTextStyle}>4.9</Text>
            <SvgIndex.yellowStar />
          </View>
        </View>
        <Text style={styles.desText}>
          Cool program! quite intense but definitely{'\n'} you can see results!
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(ReviewCard);

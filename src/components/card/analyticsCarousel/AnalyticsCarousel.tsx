import SvgIndex from '@svgIndex';
import React, { FC, memo, useEffect, useRef, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { styles } from './analyticsCarousel.style';
interface DataItem {
  id: number;
  title: string;
  amount: string;
  progress: string;
}
interface CarouselItem {
  data: DataItem[];
}
interface AnalyticsCarouselProps {
  data: CarouselItem[];
  containerStyle?: ViewStyle;
}
const AnalyticsCarousel: FC<AnalyticsCarouselProps> = ({
  data,
  containerStyle,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<any>>(null);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % data?.length;
      setCurrentIndex(nextIndex);
      flatListRef.current?.scrollToIndex({index: nextIndex});
    }, 1000);
    return () => clearInterval(interval);
  }, [currentIndex, data?.length]);

  const handleDotPress = (index: number) => {
    flatListRef.current?.scrollToIndex({index});
    setCurrentIndex(index);
  };
  //** Handle highlight item */
  const handleSelect = (id: number) => {
    setSelected(id === selected ? null : id);
  };

  const renderList = ({item}: {item: DataItem}) => {
    const isSelected = selected === item.id;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => handleSelect(item?.id)}
        key={item?.id}
        style={[styles.card, isSelected && styles.isSelected]}>
        {item?.amount && (
          <View style={styles.cardTitleView}>
            <Text style={styles.cardTitle}>{item?.title}</Text>
            <Text style={styles.amount}>{item?.amount}</Text>
          </View>
        )}
        {item?.progress && (
          <View style={styles.progressView}>
            <View style={styles.iconView}>
              <SvgIndex.trendingUp />
            </View>
            <Text style={styles.progrssPercent}>
              {item?.progress}%{' '}
              <Text style={styles.progrssText}>Increase of active users</Text>
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };
  const renderItem = ({item}: {item: CarouselItem}) => {
    return (
      <FlatList
        key={item?.data[0]?.id}
        contentContainerStyle={styles.contentContainerStyle}
        data={item?.data}
        keyExtractor={list => list?.id?.toString()}
        numColumns={2}
        renderItem={renderList}
        bounces={false}
      />
    );
  };
  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index?.toString()}
        horizontal
        pagingEnabled
        bounces={false}
        onMomentumScrollEnd={event => {
          const newIndex = Math.floor(
            event.nativeEvent.contentOffset.x /
              event.nativeEvent.layoutMeasurement.width,
          );
          setCurrentIndex(newIndex);
        }}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <View style={styles.dotsContainer}>
        {data?.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={styles.dotView}
            onPress={() => handleDotPress(index)}>
            <View
              style={[styles.dot, index === currentIndex && styles.activeDot]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
export default memo(AnalyticsCarousel);

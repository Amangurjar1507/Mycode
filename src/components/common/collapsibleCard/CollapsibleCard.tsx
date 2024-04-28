import SvgIndex from '@svgIndex';
import React, {FC, memo, useState} from 'react';
import {
  Animated,
  Easing,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './collapsibleCard.style';

interface CollapsibleCardProps {
  title?: string;
  description?: string;
  content?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle> | undefined;
  collapsedStyle?: StyleProp<ViewStyle> | undefined;
  contentStyle?: StyleProp<ViewStyle> | undefined;
  smallIconDrop?: boolean;
  isExpandedAll?: boolean;
}

const CollapsibleCard: FC<CollapsibleCardProps> = ({
  title,
  description,
  content,
  containerStyle,
  collapsedStyle,
  smallIconDrop,
  contentStyle,
  isExpandedAll,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const animation = new Animated.Value(0);

  const toggleExpanded = () => {
    if (expanded) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => setExpanded(false));
    } else {
      Animated.timing(animation, {
        toValue: contentHeight,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => setExpanded(true));
    }
  };

  const handleLayout = (event: any) => {
    setContentHeight(event.nativeEvent.layout.height);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        onPress={toggleExpanded}
        style={[styles.collapsedView, collapsedStyle]}>
        <View style={styles.titleView}>
          {title && <Text style={styles.title}>{title}</Text>}
          {description && <Text style={styles.description}>{description}</Text>}
        </View>
        <View style={styles.iconView}>
          {smallIconDrop ? (
            <>
              {expanded ? (
                <SvgIndex.openDownArrow />
              ) : (
                <SvgIndex.viewDownArrow />
              )}
            </>
          ) : (
            <>
              {expanded ? (
                <SvgIndex.topArrow width={24} height={24} />
              ) : (
                <SvgIndex.downArroy />
              )}
            </>
          )}
        </View>
      </TouchableOpacity>
      {(expanded || isExpandedAll) && content && (
        <Animated.View
          style={[styles.content, contentStyle]}
          onLayout={handleLayout}>
          {content}
        </Animated.View>
      )}
    </View>
  );
};

export default memo(CollapsibleCard);

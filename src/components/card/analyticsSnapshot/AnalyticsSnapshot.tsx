import SvgIndex from '@svgIndex';
import React, {FC, memo, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './analyticsSnapshot.style';

interface Item {
  id: number;
  title?: string | undefined;
  amount?: string | undefined;
  progress?: string | undefined;
  type?: string | undefined;
}
interface AnalyticsSnapshotProps {
  data: Item[];
  showFullCard?: boolean;
}
const AnalyticsSnapshot: FC<AnalyticsSnapshotProps> = ({
  data,
  showFullCard,
}) => {
  const [selected, setSelected] = useState<number | null>(null);
  //** Handle highlight item */
  const handleSelect = (id: number) => {
    setSelected(id === selected ? null : id);
  };
  return (
    <View style={styles.container}>
      {data?.map((item, index) => {
        const isSelected = selected === item.id;
        return (
          <React.Fragment key={item?.id}>
            {index === 0 ? (
              showFullCard && (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => handleSelect(item?.id)}
                  style={styles.fContainer}>
                  <View style={styles.fContentView}>
                    <Text style={styles.fTitle}>{item?.title}</Text>
                    {item?.type && (
                      <Text style={styles.fTitle}>{item?.type}</Text>
                    )}
                    <Text style={styles.fAmount}>{item?.amount}</Text>
                  </View>
                  <View style={styles.fProgressView}>
                    <View style={styles.iconView}>
                      <SvgIndex.trendingUpWhite />
                    </View>
                    <Text style={styles.fProgressValue}>
                      {item?.progress}%{' '}
                      <Text style={styles.fProgressText}>
                        Increase of active users
                      </Text>
                    </Text>
                  </View>
                </TouchableOpacity>
              )
            ) : (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => handleSelect(item?.id)}
                style={[
                  styles.hContainer,
                  isSelected && styles.isSelected,
                  {height: !showFullCard ? 117 : 92},
                ]}>
                <View style={styles.hContentView}>
                  <Text style={styles.hTitle}>{item?.title}</Text>
                  {!showFullCard && item?.type && (
                    <View style={{height: 16}}>
                      <Text style={styles.fType}>({item?.type})</Text>
                    </View>
                  )}
                  <Text style={styles.hAmount}>{item?.amount}</Text>
                </View>
                {item?.progress && (
                  <View style={styles.hProgressView}>
                    <View style={styles.iconView}>
                      <SvgIndex.trendingUp />
                    </View>
                    <Text style={styles.hProgressValue}>
                      {item?.progress}%{' '}
                      <Text style={styles.hProgressText}>
                        Increase of active users
                      </Text>
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            )}
          </React.Fragment>
        );
      })}
    </View>
  );
};

export default memo(AnalyticsSnapshot);

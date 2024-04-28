import {useAuthNavigation} from '@hooks/useAppNavigation';
import SvgIndex from '@svgIndex';
import React, {FC, memo, useCallback} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './settingsCard.style';

interface SettingsCardProps {
  item: ItemProps;
  index?: number;
  onPress?: () => void;
}
interface ItemProps {
  id?: string | undefined;
  sectionTitle?: string | undefined;
  settings?: SettingsProps[];
}
interface SettingsProps {
  id?: string | undefined;
  title?: string | undefined;
  icon?: any;
  navigation?: string | undefined;
}

const SettingsCard: FC<SettingsCardProps> = ({item, index, onPress}) => {
  const navigation = useAuthNavigation();
  const onNavigate = useCallback(
    (screenName: any) => {
      navigation.navigate(screenName);
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      {item?.sectionTitle && (
        <Text style={styles.sectionTitleText}>{item?.sectionTitle}</Text>
      )}
      <View
        style={[
          styles.sectionsView,
          {marginTop: item?.sectionTitle == '' ? 0 : 12},
        ]}>
        {item?.settings?.map((list: any, i: number) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              if (item?.id === '6' || item?.id === '7') {
                onPress?.();
              } else {
                onNavigate(list?.navigation);
              }
            }}
            style={[styles.rowView, i !== 0 && styles.divider]}>
            <View style={styles.rowViewOne}>
              <View style={styles.titleView}>
                {list?.icon && <list.icon />}
                <Text
                  style={[
                    styles.rowTitle,
                    list?.title == 'Delete Account' && styles.isDeleted,
                  ]}>
                  {list?.title}
                </Text>
              </View>
              {list?.title === 'Delete Account' ||
              list?.title === 'Log Out' ? null : (
                <SvgIndex.arrowRightIos height={18} width={18} />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default memo(SettingsCard);

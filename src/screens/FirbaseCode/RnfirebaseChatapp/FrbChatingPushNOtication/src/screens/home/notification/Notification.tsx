import React, {FC} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import color from '../../../theme/color';
import useNotification from './useNotification';
 import imageIndex from '../../../assets/imageIndex';
import CustomStatusbar from '../../../components/common/customStatusbar/CustomStatusbar';
import {Header, Loader} from '../../../components/componentsIndex';
import EmptyContainer from '../../../components/common/emptyContainer/EmptyContainer';
import styles from './notification.style';

const Notification: FC = () => {
  const {loading, notification} = useNotification();

  return (
    <View style={styles.container}>
      <CustomStatusbar
        translucent={true}
        backgroundColor={color.darkGreen}
        containerStyle={styles.statusBarContainer}
        barStyle="light-content"
      />
      {/* header details */}
      <Header showBackIcon />
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          data={notification}
          contentContainerStyle={styles.cateryContentContainerStyle}
          keyExtractor={(_, index) => {
            return `${index}`;
          }}
          renderItem={({item, index}) => (
            <TouchableOpacity
              activeOpacity={0.9}
              key={index}
              style={styles.cardViewStyle}>
              <Image
                style={styles.cardImageStyle}
                source={imageIndex.boxDelivery}
              />
              <View>
                <Text style={styles.userMsgTextStyle}>{item?.item_name}</Text>
                <Text style={styles.userLabelTextStyle}>
                  {item?.description}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyContainer />}
        />
      )}
    </View>
  );
};

export default Notification;

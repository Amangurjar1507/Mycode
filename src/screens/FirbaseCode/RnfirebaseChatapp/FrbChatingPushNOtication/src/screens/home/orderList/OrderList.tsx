import React, {FC} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import {OrderCard} from '../../../components/cardIndex';
import CustomStatusbar from '../../../components/common/customStatusbar/CustomStatusbar';
import EmptyContainer from '../../../components/common/emptyContainer/EmptyContainer';
import {Header, Loader} from '../../../components/componentsIndex';
import color from '../../../theme/color';
import styles from './orderList.style';
import useOrderList from './useOrderList';

const OrderList: FC = () => {
  const {orderListState, onRefresh, navigateToOrderDetails} = useOrderList();
  return (
    <View style={styles.container}>
      <CustomStatusbar
        backgroundColor={color.darkGreen}
        barStyle="light-content"
      />
      <Header showBackIcon  />
      {orderListState?.isLoading ? (
        <Loader />
      ) : (
        <FlatList
          data={orderListState?.OrderList}
          keyExtractor={(_, index) => {
            return `${index}`;
          }}
          renderItem={({item, index}) => (
            <OrderCard
              key={index}
              item={item}
              index={index}
              onPress={(color: any) => {
                navigateToOrderDetails(item?.order_id, color?.backgroundColor);
              }}
            />
          )}
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <EmptyContainer message={'Order list empty !!'} />
          }
          refreshing={orderListState?.isRefreshing}
          refreshControl={
            <RefreshControl
              tintColor={color.darkGreen}
              refreshing={orderListState?.isRefreshing}
              onRefresh={onRefresh}
            />
          }
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          initialNumToRender={10}
        />
      )}
    </View>
  );
};

export default OrderList;

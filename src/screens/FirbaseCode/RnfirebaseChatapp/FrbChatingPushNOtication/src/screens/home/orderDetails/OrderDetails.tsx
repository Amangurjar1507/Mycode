import React, {FC} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Share,
} from 'react-native';
import CallIcon from '../../../assets/svg/CallIcon';
import Map from '../../../assets/svg/Map';
import Money from '../../../assets/svg/Money';
import Paid from '../../../assets/svg/Paid';
import PickupIcon from '../../../assets/svg/PickupIcon';
import Time from '../../../assets/svg/Time';
import User from '../../../assets/svg/User';
import CustomStatusbar from '../../../components/common/customStatusbar/CustomStatusbar';
import EmptyContainer from '../../../components/common/emptyContainer/EmptyContainer';
import {Button, Header, Spinner} from '../../../components/componentsIndex';
import color from '../../../theme/color';
import styles from './orderDetails.style';
import useOrderDetails from './useOrderDetails';
import {statusOptions} from './orderDetails.const';
import ShareIcon from '../../../assets/svg/ShareIcon';

const OrderDetails: FC = () => {
  const {
    handleCloseSelect,
    handleSelect,
    orderDetailsState,
    updateOrderDetailsState,
    onOrderStatusUpdate,
    params,
    formatDateTime,
    getTimeLeft,
    makeCall,
    shareAddress,
    ConfimPickup,
    startLocation,
  } = useOrderDetails();

  return (
    <View style={styles.container}>
      <CustomStatusbar
        backgroundColor={color.darkGreen}
        barStyle="light-content"
      />
      <Header showBackIcon rightButton />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.modalOverlay}
          onPress={handleCloseSelect}>
          <View style={styles.card}>
            {/* Order Info */}
            <View style={styles.header}>
              <Text allowFontScaling={false} style={styles.orderId}>
                Order No. {orderDetailsState?.OrderDetails?.order_id ?? '1234'}
              </Text>
              <View
                style={[
                  styles.statusButton,
                  {backgroundColor: params?.colorKey},
                ]}>
                <Text allowFontScaling={false} style={styles.statusText}>
                  {orderDetailsState?.OrderDetails?.status
                    ?.replace(/([A-Z])/g, ' $1')
                    .trim()
                    .toUpperCase() ?? 'Pending'}
                </Text>
              </View>
            </View>
            <Text style={styles.address}>
              {orderDetailsState?.OrderDetails?.user?.user_address}
            </Text>

            {/* Customer Info */}
            <View style={styles.sectionRowView}>
              <User />
              <Text allowFontScaling={false} style={styles.customerName}>
                {orderDetailsState?.OrderDetails?.user?.firstName}{' '}
                {orderDetailsState?.OrderDetails?.user?.lastName}
              </Text>
            </View>

            {/* Pickup Center */}
            <View style={styles.section}>
              <View style={styles.rowView}>
                <View style={styles.rowViewFlexPicupIcon}>
                  <PickupIcon />
                  <Text allowFontScaling={false} style={styles.sectionHeader}>
                    Pickup Center
                  </Text>
                </View>
                <View style={styles.rowView}>
                  <TouchableOpacity
                    onPress={() =>
                      makeCall(
                        orderDetailsState?.OrderDetails?.wholesaler?.mobile,
                      )
                    }
                    style={styles.iconSbvgSpace}>
                    <CallIcon />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      shareAddress(
                        orderDetailsState?.OrderDetails?.wholesaler?.address,
                      )
                    }
                    style={styles.iconSbvgSpace}>
                    <ShareIcon />
                  </TouchableOpacity>
                </View>
              </View>
              <Text allowFontScaling={false} style={styles.centerDetails}>
                {orderDetailsState?.OrderDetails?.wholesaler?.address}
              </Text>
            </View>

            {/* Products List */}
            <FlatList
              data={orderDetailsState?.OrderList?.filter((item: any) => {
                return (
                  `${item.user.firstName} ${item.user.lastName}` ===
                  orderDetailsState?.fullName
                );
              })}
              keyExtractor={(_, index) => {
                return `${index}`;
              }}
              renderItem={({item, index}: any) => {
                const imagesArray = JSON.parse(item?.images);
                const firstImageUri = imagesArray[0];
                return (
                  <View key={index} style={styles.productRow}>
                    <Image
                      style={styles.productImage}
                      source={{uri: firstImageUri}}
                    />
                    <View style={styles.productDetails}>
                      <Text allowFontScaling={false} style={styles.productName}>
                        {item?.item_name}
                      </Text>
                      <Text
                        allowFontScaling={false}
                        style={styles.productQuantity}>
                        Qty: {item?.quantity}
                      </Text>
                    </View>
                  </View>
                );
              }}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                <EmptyContainer message={'Order list empty !!'} />
              }
            />

            {/* Delivery Info */}
            <View style={styles.section}>
              <View style={styles.rowView}>
                <View style={styles.rowViewFlexPicupIcon}>
                  <Map />
                  <Text allowFontScaling={false} style={styles.sectionHeader}>
                    Delivery
                  </Text>
                </View>
                <View style={styles.rowView}>
                  <TouchableOpacity
                    onPress={() =>
                      makeCall(orderDetailsState?.OrderDetails?.user?.mobile)
                    }
                    style={styles.iconSbvgSpace}>
                    <CallIcon />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      shareAddress(
                        orderDetailsState?.OrderDetails?.user?.user_address,
                      )
                    }
                    style={styles.iconSbvgSpace}>
                    <ShareIcon />
                  </TouchableOpacity>
                </View>
              </View>
              <Text allowFontScaling={false} style={styles.centerDetails}>
                {orderDetailsState?.OrderDetails?.user?.user_address}
              </Text>
            </View>

            <View style={styles.section}>
              <View style={styles.deliveryRow}>
                {orderDetailsState?.OrderDetails?.payment_mode == 'online' ? (
                  <>
                    <Paid />
                    <Text allowFontScaling={false} style={styles.paidStatus}>
                      {'Paid'}
                    </Text>
                  </>
                ) : (
                  <>
                    <Money />
                    <Text allowFontScaling={false} style={styles.price}>
                      {orderDetailsState?.OrderDetails?.final_price ?? 'N/A'}
                    </Text>
                  </>
                )}
              </View>
              <View style={styles.cardNormalStatus}>
                <View style={styles.cardNormall}>
                  {/* Delivery Pickup Section */}
                  <View style={styles.deliveryInfo}>
                    <Text allowFontScaling={false} style={styles.heading}>
                      Delivery Pickup By
                    </Text>
                    <Text allowFontScaling={false} style={styles.dateTime}>
                      {formatDateTime(
                        orderDetailsState?.OrderDetails?.time_slot?.to_time,
                      )}
                    </Text>
                  </View>

                  {/* Time Left Section */}
                  <View style={styles.timeLeft}>
                    <View style={styles.rowView}>
                      <Time />
                      <Text style={styles.timeLeftText}>TIME LEFT</Text>
                    </View>
                    <Text style={styles.time}>
                      {getTimeLeft(
                        orderDetailsState?.OrderDetails?.time_slot?.from_time,
                        orderDetailsState?.OrderDetails?.time_slot?.to_time,
                      )}{' '}
                      Hrs
                    </Text>
                  </View>

                  {/* Update Status Dropdown */}
                </View>
                <View style={styles.updateStatus}>
                  <Text style={styles.updateText}>Update Status</Text>
                  <TouchableOpacity
                    style={styles.dropdownButton}
                    onPress={() =>
                      updateOrderDetailsState({modalStatusVisible: true})
                    }>
                    <Text style={styles.buttonText}>
                      {orderDetailsState?.selectedStatus}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {orderDetailsState?.modalStatusVisible && (
                <View style={styles.modalContent}>
                  <FlatList
                    data={statusOptions}
                    keyExtractor={item => item.value}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        style={styles.optionItem}
                        onPress={() => handleSelect(item)}>
                        <Text style={styles.optionText}>{item.label}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              )}
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
      {orderDetailsState?.isLoading && (
        <Spinner visible={orderDetailsState?.isLoading} />
      )}
      <Button
        containerStyle={styles.containerStyleBtn}
        label={orderDetailsState?.isConfirmPickup ? 'Start' : 'Confirm Pickup'}
        onPress={() => {
          if (!orderDetailsState?.isConfirmPickup) {
            ConfimPickup();
          } else {
            startLocation(orderDetailsState?.OrderDetails?.user?.user_address);
          }
        }}
        isLoading={orderDetailsState?.isLoadingConfirm}
      />
    </View>
  );
};

export default OrderDetails;

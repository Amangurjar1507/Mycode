import React, {FC} from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import * as Progress from 'react-native-progress';
import Gaol from '../../../assets/svg/Gaol';
import Star from '../../../assets/svg/Star';
import {OrderCard} from '../../../components/cardIndex';
import CustomStatusbar from '../../../components/common/customStatusbar/CustomStatusbar';
import EmptyContainer from '../../../components/common/emptyContainer/EmptyContainer';
import {Header, Spinner} from '../../../components/componentsIndex';
import color from '../../../theme/color';
import styles from './dashBord.style';
import useDashBord from './useDashBord';

export interface ReviewType {
  rating: number | null;
  review: string | null;
  firstName: string;
  userId: number;
  orderId: number;
}

const Dashboard: FC = () => {
  const {
    navigateToAllOrders,
    navigateToOrderDetails,
    orderListState,
    navigateNotification,
  } = useDashBord();
  return (
    <View style={styles.container}>
      <CustomStatusbar
        backgroundColor={color.darkGreen}
        barStyle="light-content"
      />
      <Header
        showBackIcon
        rightButton
        onPressRightButton={navigateNotification}
      />
      <ScrollView style={styles.containerScroll}>
        {/* Insights Section */}
        <View style={styles.insightsSectionOrder}>
          <View style={styles.insightBox}>
            <Text style={styles.insightLabel}>Total Orders</Text>
            <Text style={styles.insightValue}>
              {orderListState?.OrderList?.length ?? 0}
            </Text>
          </View>
        </View>
        <View style={styles.insightsSection}>
          <View style={styles.insightBoxSmall}>
            <View>
              <Progress.Circle
                size={45}
                progress={orderListState?.progressOrderValue}
                thickness={2.5}
                color={color.pacificBlue}
                unfilledColor={color.secondaryBG}
              />
              <View style={styles.svgViewStyle}>
                <Gaol />
              </View>
            </View>
            <View style={styles.cardTextView}>
              <Text style={styles.insightValuueSmall}>
                {(orderListState?.progressOrderValue * 100).toFixed(0)}%
              </Text>
              <Text style={styles.insightLabelSmall}>Order Completion</Text>
            </View>
          </View>
          <View style={styles.insightBoxSmall}>
            <View>
              <Progress.Circle
                size={45}
                progress={orderListState?.progressValue}
                thickness={2.5}
                color={color.viridianGreen}
                unfilledColor={color.secondaryBG}
              />
              <View style={styles.svgViewStyle}>
                <Star />
              </View>
            </View>
            <View style={styles.cardTextView}>
              <Text
                style={
                  styles.insightValuueSmall
                }>{`${orderListState?.averageRating} / 5`}</Text>
              <Text style={styles.insightLabelSmall}>Ratings</Text>
            </View>
          </View>
        </View>

        {/* Orders Section */}
        <View style={styles.ordersSection}>
          <View style={styles.ordersHeader}>
            <Text style={styles.ordersTitle}>Orders</Text>
            <TouchableOpacity activeOpacity={0.8} onPress={navigateToAllOrders}>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={orderListState?.OrderList?.slice(0, 5)}
          keyExtractor={(_, index) => {
            return `${index}`;
          }}
          renderItem={({item, index}: any) => (
            <OrderCard
              key={index}
              item={item}
              index={index}
              onPress={(color: any) => {
                navigateToOrderDetails(item?.order_id, color?.backgroundColor);
              }}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <EmptyContainer message={'Order list empty !!'} />
          }
        />
      </ScrollView>
      {orderListState?.isLoading && (
        <Spinner visible={orderListState?.isLoading} />
      )}
    </View>
  );
};

export default Dashboard;

import messaging from '@react-native-firebase/messaging';
import { useIsFocused } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import PushNotification from 'react-native-push-notification';
import { useAuthNavigation } from '../../../hooks/useAppNavigation';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import axiosInstance from '../../../services/api';
import constant from '../../../services/config/constant';
import params from '../../../services/config/params';
import { RootState } from '../../../services/redux/store';
import { toggleShowNotification } from '../../../services/redux/userReducer/reducer';
import { Log } from '../../../utility/log';

const useDashBord = () => {
  const navigation = useAuthNavigation();
  const dispatch = useAppDispatch();
  const {token, id} = useAppSelector((state: RootState) => state.UserData);
  const isFocused = useIsFocused();
  const [orderListState, setOrderListState] = useState({
    OrderList: [],
    isLoading: false,
    averageRating: '',
    progressValue: 0,
    progressOrderValue: 0,
  });

  //** Update dashboard state */
  const updateOrderState = useCallback(
    (newState: Partial<typeof orderListState>) => {
      setOrderListState(prevState => ({...prevState, ...newState}));
    },
    [],
  );

  //** Fetch all dashboard data without delay */
  const fetchDashboardData = useCallback(async () => {
    updateOrderState({isLoading: true});
    try {
      await Promise.all([onGetRatingList(), onGetOrderList()]);
    } catch (error) {
      Log('Dashboard fetch error:', error);
    } finally {
      updateOrderState({isLoading: false});
    }
  }, [token]);

  useEffect(() => {
    getFcmToken();
    if (isFocused) {
      fetchDashboardData();
    }
  }, [isFocused, fetchDashboardData]);

  /** Notification show when app is in background */
  useEffect(() => {
    messaging().onMessage((remoteMessage: any) => {
      PushNotification.createChannel(
        {
          channelId: 'deliveryboy', // Unique channel ID
          channelName: 'Delivery Boy Notifications', // Channel name shown in system settings
          channelDescription: 'Notifications for Delivery Boy App', // Optional description
          importance: 4, // High importance for heads-up notifications
          vibrate: true, // Enable vibration
        },
        created => console.log(`Channel created: ${created}`), // Debugging callback
      );

      PushNotification.cancelAllLocalNotifications();
      PushNotification.localNotification({
        channelId: 'deliveryboy',
        title: remoteMessage?.notification?.title,
        message: remoteMessage?.notification?.body,
      });
      navigateToNotification();
    });
    /** Notification show when app is in background */
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      navigateToNotification();
    });
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          navigateToNotification();
        }
      });
  }, []);

  /** get fcm token */
  const getFcmToken = async () => {
    await messaging()
      .getToken()
      .then(res => {
        Log('FCM Token:', res);
        updateFCMToken(res);
      })
      .catch(e => {
        Log('FCM Token ee:', e);
      });
  };

  /** Update FCM token api call */
  const updateFCMToken = async (fcmToken: string) => {
    const formdata = {
      [params.deviceToken]: fcmToken,
      [params.deliveryBoyId]: id?.toString(),
    };
    console.log(formdata);

    try {
      const {data} = await axiosInstance.post(
        'https://dropdose-backend.onrender.com/api/save-token',
        formdata,
        {
          headers: {
            auth: token,
          },
        },
      );
      Log('data===>>>', data);
    } catch (error: any) {
      Log('error fcm update', error?.response);
    }
  };

  //** Start rating list API call */
  const onGetRatingList = async () => {
    try {
      const {data} = await axiosInstance.get(
        `${constant.baseURL}${constant.getallRatings}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (data) {
        const totalRating = data.reduce(
          (sum: any, review: any) => sum + (Number(review.rating) || 0),
          0,
        );
        const ratedCount = data?.filter(
          (review: any) => review?.rating != null,
        ).length;
        const averageRating = ratedCount > 0 ? totalRating / ratedCount : 0;

        updateOrderState({
          averageRating: averageRating.toFixed(1),
          progressValue: averageRating / 5,
        });
      }
    } catch (error) {
      Log('Rating API error:', error);
    }
  };

  //** Start order list API call */
  const onGetOrderList = async () => {
    try {
      const {data} = await axiosInstance.get(
        `${constant.baseURL}${constant.assignedOrders}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (data) {
        const totalOrders = data.orders.length;
        const completedOrders = data.orders.filter(
          (order: any) => order.status === 'deliverd',
        ).length;
        const orderCompletion =
          totalOrders > 0 ? completedOrders / totalOrders : 0;
        updateOrderState({
          OrderList: data.orders,
          progressOrderValue: orderCompletion,
        });
      }
    } catch (error) {
      Log('Order List API error:', error);
    }
  };

  //** Navigate to order screens */
  const navigateToAllOrders = useCallback(() => {
    navigation.navigate('OrderList');
  }, [navigation]);

  //** Navigate to order details screens */
  const navigateToOrderDetails = useCallback(
    (id: number, colorKey: string) => {
      navigation.navigate('OrderDetails', {
        id: id,
        colorKey: colorKey,
      });
    },
    [navigation],
  );

  /** Navigation to notification screen */
  const navigateToNotification = () => {
    PushNotification.configure({
      onNotification: notification => {
        console.log(notification, 'notification');
        dispatch(toggleShowNotification());
      },
    });
  };
  /** Navigation to Icon click after navigate notification screen */
  const navigateNotification = () => {
    navigation.navigate('Notification');
  };

  return {
    navigateToAllOrders,
    navigateToOrderDetails,
    orderListState,
    navigateNotification,
  };
};

export default useDashBord;

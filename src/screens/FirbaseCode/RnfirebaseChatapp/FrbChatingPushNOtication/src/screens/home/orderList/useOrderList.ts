import {useCallback, useEffect, useState} from 'react';
import axiosInstance from '../../../services/api';
import constant from '../../../services/config/constant';
import {useAppSelector} from '../../../hooks/useRedux';
import {RootState} from '../../../services/redux/store';
import {useIsFocused} from '@react-navigation/native';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
import {Log} from '../../../utility/log';

const useOrderList = () => {
  const {token} = useAppSelector((state: RootState) => state.UserData);
  const isFocused = useIsFocused();
  const navigation = useAuthNavigation();
  const [orderListState, setOrderListState] = useState<any>({
    OrderList: [],
    isRefreshing: false,
    isLoading: false,
  });

  //** Update exercise state */
  const updateOrderState = useCallback(<T>(key: string, value: T) => {
    setOrderListState((prevState: any) => ({...prevState, [key]: value}));
  }, []);

  useEffect(() => {
    if (isFocused) {
      updateOrderState('isLoading', true);
      onGetOrderList();
    }
  }, [isFocused, updateOrderState]);

  //** Refresh Order list */
  const onRefresh = useCallback(() => {
    onGetOrderList();
  }, [orderListState?.isRefreshing]);

  //** Start order list getting api call */
  const onGetOrderList = async () => {
    try {
      const {data} = await axiosInstance.get(
        `${constant?.baseURL}${constant?.assignedOrders}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (data) {
        updateOrderState('OrderList', data?.orders);
        updateOrderState('isLoading', false);
        updateOrderState('isRefreshing', false);
      }
    } catch (error: any) {
      Log('ordder error: ', error);
      updateOrderState('isLoading', false);
      updateOrderState('isRefreshing', false);
    }
  };
  //** End order list getting api call */

  const navigateToOrderDetails = useCallback(
    (id: number, colorKey: string) => {
      navigation.navigate('OrderDetails', {
        id: id,
        colorKey: colorKey,
      });
    },
    [navigation],
  );

  return {orderListState, onRefresh, navigateToOrderDetails};
};

export default useOrderList;

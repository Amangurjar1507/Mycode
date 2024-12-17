import {useIsFocused} from '@react-navigation/native';
import {useAuthNavigation, useAuthRoute} from '../../../hooks/useAppNavigation';
import {useAppSelector} from '../../../hooks/useRedux';
import {RootState} from '../../../services/redux/store';
import {useCallback, useEffect, useState} from 'react';
import axiosInstance from '../../../services/api';
import constant from '../../../services/config/constant';
import {Toast} from '../../../utility/functions/toast';
import {Log} from '../../../utility/log';
import moment from 'moment';
import {Linking, Share} from 'react-native';

const useOrderDetails = () => {
  const navigation = useAuthNavigation();
  const {token} = useAppSelector((state: RootState) => state.UserData);
  const {params} = useAuthRoute('OrderDetails');
  const isFocused = useIsFocused();
  const [orderDetailsState, setOrderDetailsState] = useState({
    OrderDetails: [],
    OrderList: [],
    orderId: undefined,
    isLoading: false,
    isLoadingConfirm: false,
    isConfirmPickup: false,
    selectedStatus: 'Select an option',
    selectedValueStatus: 'Select an option',
    modalStatusVisible: false,
    fullName: '',
  });

  //** Update orderDetails state */
  const updateOrderDetailsState = useCallback(
    (newState: Partial<typeof orderDetailsState>) => {
      setOrderDetailsState(prevState => ({...prevState, ...newState}));
    },
    [],
  );

  useEffect(() => {
    if (isFocused) {
      updateOrderDetailsState({isLoading: true});
      if (params?.id) {
        updateOrderDetailsState({orderId: params?.id});
        onGetOrderDetailsList(params?.id);
        onGetOrderList();
      }
    }
  }, [isFocused, updateOrderDetailsState]);

  //** select status  */
  const handleSelect = (item: any) => {
    updateOrderDetailsState({selectedStatus: item?.label});
    updateOrderDetailsState({selectedValueStatus: item?.value});
    onOrderStatusUpdate(item?.value);
    updateOrderDetailsState({modalStatusVisible: false});
  };

  //** modal close  */
  const handleCloseSelect = () => {
    updateOrderDetailsState({modalStatusVisible: false});
  };

  //** Start order details getting api call */
  const onGetOrderDetailsList = async (id: number) => {
    try {
      const {data} = await axiosInstance.get(
        `${constant?.baseURL}${constant?.OrderDetailsGet}/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (data) {
        Log('data order detailsss', data);
        updateOrderDetailsState({
          fullName: `${data?.order?.user?.firstName} ${data?.order?.user?.lastName}`,
        });
        updateOrderDetailsState({OrderDetails: data?.order});
      }
    } catch (error: any) {
      Log('ordder details error: ', error);
      updateOrderDetailsState({isLoading: false});
    }
  };
  //** End order details getting api call */

  //** order Status update  api call  */
  const onOrderStatusUpdate = useCallback(
    async (type: string) => {
      const formData = {
        status: type ?? orderDetailsState?.selectedValueStatus,
      };
      console.log(formData, 'formData');

      try {
        const {data} = await axiosInstance.put(
          `${constant?.baseURL}${constant?.updateStatus}/${orderDetailsState?.orderId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          },
        );
        if (data) {
          Toast(data?.message);
          Log('status update checkkkk', data);
        }
      } catch (error: any) {
        Log('error status update', error);
        Toast(error?.response?.data?.msg);
      }
    },
    [orderDetailsState],
  );

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
        updateOrderDetailsState({OrderList: data?.orders});
        updateOrderDetailsState({isLoading: false});
      }
    } catch (error: any) {
      Log('ordder error: ', error);
    }
  };
  //** End order list getting api call */

  //** date format */
  const formatDateTime = (isoString: string) => {
    const date = moment(isoString);
    return `${date.format('h:mm A')}, ${date.format('ddd, DD/MM/YYYY')}`;
  };

  //** time format */

  const getTimeLeft = (fromTime: string, toTime: string) => {
    const startTime = moment(fromTime);
    const endTime = moment(toTime);
    const duration = moment.duration(endTime.diff(startTime));
    const hours = Math.floor(duration.asHours());
    const minutes = duration.minutes();
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  };

  //** call function */
  const makeCall = (number: string) => {
    const url = `tel:${number}`;
    Linking.openURL(url);
  };

  //** share addres function */

  const shareAddress = async (address: string) => {
    try {
      await Share.share({
        message: address,
        title: 'Product Details',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const ConfimPickup = () => {
    updateOrderDetailsState({isLoadingConfirm: true});
    if (orderDetailsState?.selectedStatus != 'Select an option') {
      // onOrderStatusUpdate();
      updateOrderDetailsState({
        isLoadingConfirm: false,
        isConfirmPickup: true,
      });
    } else {
      setTimeout(() => {
        updateOrderDetailsState({
          isLoadingConfirm: false,
          isConfirmPickup: true,
        });
      }, 2000);
    }
  };

  const startLocation = (AddressMap?: string) => {
    updateOrderDetailsState({isLoadingConfirm: true});
    // onOrderStatusUpdate();
    setTimeout(async () => {
      updateOrderDetailsState({
        isLoadingConfirm: false,
      });
      const url = `https://www.google.com/maps/dir/?api=1&destination=${AddressMap}&travelmode=driving`;
      await Linking.openURL(url);
    }, 2000);
  };
  return {
    handleSelect,
    handleCloseSelect,
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
  };
};

export default useOrderDetails;

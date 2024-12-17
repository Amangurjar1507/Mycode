import {useCallback, useEffect, useState} from 'react';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
import {useIsFocused} from '@react-navigation/native';
import constant from '../../../services/config/constant';
import axiosInstance from '../../../services/api';
import {useAppDispatch, useAppSelector} from '../../../hooks/useRedux';
import {RootState} from '../../../services/redux/store';
import {Log} from '../../../utility/log';
import { toggleHideNotification } from '../../../services/redux/userReducer/reducer';
 
const useNotification = () => {
  const navigation = useAuthNavigation();
  const isFocused = useIsFocused();
  const dispatch = useAppDispatch();
  const {token, id,isActiveNotification} = useAppSelector((state: RootState) => state.UserData);
  const [notification, setNotification] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    dispatch(toggleHideNotification());
    if (isFocused) {
      setLoading(true);
      onGetNotificationList();
    }
  }, [isFocused]);

  

  //** Start order notifition getting api call */
  const onGetNotificationList = async () => {
    try {
      const {data} = await axiosInstance.get(
        `${constant?.baseURL}${constant?.getallNotification}/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (data) {
        Log('data notificatoion data', data?.notifications);
        setNotification(data?.notifications);
        setLoading(false);
      }
    } catch (error: any) {
      Log('ordder notificatoion error: ', error);
      setLoading(false);
    }
  };
  //** End order notifition getting api call */

  return {
    navigation,
    notification,
    loading,
  };
};

export default useNotification;

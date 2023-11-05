import {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import {axiosInstance} from '../../../services/api/api';
import constant from '../../../services/config/constant';
import params from '../../../services/config/params';
import {inviteInterface} from './invite.interface';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../services/redux/types';
import {Success} from '../../../services/redux/userReducer/action';

import DeviceInfo from 'react-native-device-info';
const InviteController = (): inviteInterface => {
  const [deviceName, setDeviceName] = useState<string>('');
  const [deviceToken, setDeviceToken] = useState<string>('');
  useEffect(() => {
    deViceName();
    getToken();
  }, []);
  const dispatch = useDispatch();
  let model = DeviceInfo.getModel();
  let version = DeviceInfo.getVersion();
  let token = DeviceInfo.getDeviceToken();
  let platform = Platform.OS === 'ios' ? 'IOS' : 'Android';
  const userData: any = useSelector((state: RootState) => state.UserReducer);
  const data = {
    version: version,
    deviceName: deviceName,
    platform: platform,
    model: model,
    fCmToken: token,
  };
  const deViceName = () => {
    DeviceInfo.getDeviceName()
      .then(name => setDeviceName(name))
      .catch(error => console.log('Error getting device name:', error));
  };

  const getToken = () => {
    DeviceInfo.getDeviceToken()
      .then(token => {
        setDeviceToken(token);
        console.log('token', token);
      })
      .catch(error => console.log('Error getting device token:', error));
  };
  const userUpdate = async () => {
    dispatch(Success(data));
    try {
      const formData = new URLSearchParams();
      formData.append(params.deviceName, deviceName);
      formData.append(params.version, version);
      formData.append(params.platform, platform);
      formData.append(params.fCMToken, token);
      const {data} = await axiosInstance.post(
        constant.userCreateUpdate,
        formData.toString(),
      );
      if (data) {
        dispatch(Success(data));
      } else {
        // console.log('dfd');
      }
    } catch (e: any) {}
  };
  return {
    userUpdate,
  };
};

export default InviteController;

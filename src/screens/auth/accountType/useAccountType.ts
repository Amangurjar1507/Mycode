import { useCallback, useState } from 'react';
import { useAuthNavigation, useAuthRoute } from '@hooks/useAppNavigation';
import { bodiFyAccountType } from './AccountType';
import { Toast } from '@utility/functions/toast';
import params from '@config/params';
import constant from '@config/constant';
import { axiosInstance } from '@api/api';
import { loginSuccess } from '@redux/userReducer/reducer';
import { useDispatch } from 'react-redux';

const useAccountType = () => {
  const navigation = useAuthNavigation();
  const dispatch = useDispatch();
  const [type, setType] = useState<bodiFyAccountType>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const route = useAuthRoute('AccountType');

  //** second step data add after pass OtherDetails screen */
  const stepFirstWithStepSecond: any = {
    ...route?.params?.stepFirst,
    accountType: type,
  };
  //** OnPress continue */
  const onPressContinue = useCallback(async () => {
    if (type == 'instructor') {
      navigation.navigate('OtherDetails', {
        secondStep: stepFirstWithStepSecond
      });
    } else {
      setLoading(true)
      const formData = new URLSearchParams();
      formData.append(params?.email, stepFirstWithStepSecond?.email);
      formData.append(params?.password, stepFirstWithStepSecond?.password);
      formData.append(params?.firstName, stepFirstWithStepSecond?.fName);
      formData.append(params?.lastName, stepFirstWithStepSecond?.lName);
      formData.append(params?.dateOfBirth, stepFirstWithStepSecond?.dateOfBirth);
      formData.append(params?.privacyPolicy, stepFirstWithStepSecond?.isAccept);
      formData.append(params?.typeUser, String(type));
      try {
        const { data } = await axiosInstance.post(
          constant?.signup,
          formData.toString(),
        );
        if (data) {
          dispatch(loginSuccess(data));
          setLoading(false)
          Toast(data?.message);
          navigation.navigate('HomeBottomTabs');
        }
      } catch (e: any) {
        setLoading(false)
        Toast(e?.response?.data?.message);
      }
    }

  }, [type, navigation]);
  return { type, setType, onPressContinue, loading };
};

export default useAccountType;

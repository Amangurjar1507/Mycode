import {useCallback, useMemo, useState} from 'react';
import {UserLoginErrorProps, UserLoginProps} from './Login';
import axios from 'axios';
import {useAppDispatch} from '../../../hooks/useRedux';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
import {
  checkEmail,
  checkPswd,
} from '../../../utility/validation/stringValidation';
import validationMessage from '../../../utility/validation/validationMessage';
import params from '../../../services/config/params';
import constant from '../../../services/config/constant';
import {Log} from '../../../utility/log';
import {Toast} from '../../../utility/functions/toast';
import {loginSuccess} from '../../../services/redux/userReducer/reducer';
import {fetchUserProfile} from '../../../services/redux/userReducer/userAPICall';
import axiosInstance from '../../../services/api';
import {Keyboard} from 'react-native';

const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigation = useAuthNavigation();
  const [userLogin, setUserLogin] = useState<UserLoginProps>({
    email: '',
    password: '',
    isLoading: false,
  });
  const [userLoginError, setUserLoginError] = useState<UserLoginErrorProps>({
    emailError: undefined,
    passwordError: undefined,
  });

  //** Update state values */
  const updateLoginInputValue = useCallback(
    (key: string, value: string | boolean) => {
      setUserLogin(prevState => ({...prevState, [key]: value}));
    },
    [userLogin],
  );

  //** Handle login button */
  const isLogin = useMemo(
    () => !userLogin?.email || !userLogin?.password,
    [userLogin],
  );

  //** Validate login */
  const onValidateLogin = useCallback(() => {
    let tempError = {};
    if (!checkEmail(userLogin?.email)) {
      tempError = {
        emailError: validationMessage.invalidEmail,
      };
    } else if (!userLogin?.password) {
      tempError = {
        passwordError: validationMessage.invalidPassword,
      };
    } else {
      tempError = {};
      onLoginSubmit();
    }
    setUserLoginError(tempError);
  }, [userLogin, userLoginError]);

  //** Call Login Api */
  const onLoginSubmit = useCallback(async () => {
    updateLoginInputValue('isLoading', true);
    const formData = new URLSearchParams();
    formData.append(params?.email, userLogin?.email);
    formData.append(params?.password, userLogin?.password);
    try {
      const {data} = await axiosInstance.post(
        constant?.login,
        formData.toString(),
      );
      let userData = {
        accessToken: data?.token,
        id: data?.deliveryBoy?.id,
      };
      Keyboard.dismiss();
      updateLoginInputValue('isLoading', false);
      if (data) {
        Log(data, 'data');
        Toast(data?.message);
        dispatch(loginSuccess(userData));
        dispatch(fetchUserProfile(data?.token));
        navigation.reset({
          index: 0,
          routes: [{name: 'HomeDrawerCustom'}],
        });
        updateLoginInputValue('email', '');
        updateLoginInputValue('password', '');
      }
    } catch (error: any) {
      updateLoginInputValue('isLoading', false);
      Toast(error?.response?.data?.message);
    }
  }, [userLogin]);

  return {
    userLogin,
    userLoginError,
    updateLoginInputValue,
    isLogin,
    onValidateLogin,
  };
};

export default useLogin;

import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import params from '@config/params';
import {useAuthNavigation} from '@hooks/useAppNavigation';
import {loginSuccess} from '@redux/userReducer/reducer';
import {Toast} from '@utility/functions/toast';
import {Log} from '@utility/log';
import {checkEmail} from '@utility/validation/stringValidation';
import validationMessage from '@utility/validation/validationMessage';
import {useCallback, useMemo, useState} from 'react';
import {useDispatch} from 'react-redux';
import {UserLoginErrorProps, UserLoginProps} from './Login';

const useLogin = () => {
  const dispatch = useDispatch();
  const navigation = useAuthNavigation();
  const [userLogin, setUserLogin] = useState<UserLoginProps>({
    email: 'demo@gmail.com',
    password: '12345678',
    loading: false,
  });
  const [error, setError] = useState<UserLoginErrorProps>({
    email: undefined,
    password: undefined,
  });

  //** Handle submit button isDisabled & isActive*/
  const isDisabled = useMemo(
    () => !userLogin?.email || !userLogin?.password,
    [userLogin],
  );

  //** Handle state change values */
  const handleChangeValue = useCallback(
    (value: string, state: string) => {
      setUserLogin(prevState => ({...prevState, [state]: value}));
    },
    [userLogin],
  );

  //** OnPress back icon */
  const onClickBack = useCallback(() => {}, [navigation]);

  //** Navigate to forgot password screen */
  const onClickForgotPassword = useCallback(() => {
    navigation.navigate('ForgotPassword');
  }, [navigation]);

  //** Navigate to signup screen */
  const onPressSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  //** Validate login*/
  const onValidate = useCallback(() => {
    let isValid = true;
    if (!userLogin?.email) {
      isValid = false;
      error.email = validationMessage.emptyEmail;
    } else if (!checkEmail(userLogin?.email)) {
      isValid = false;
      error.email = validationMessage.invalidEmail;
    } else {
      error.email = undefined;
    }
    setError({...error});
    if (isValid) {
      onPressLogin();
    }
  }, [userLogin?.email, error, userLogin?.password]);

  //**  Api Sign In function */
  const onPressLogin = useCallback(async () => {
    setUserLogin(prevState => ({
      ...prevState,
      loading: true,
    }));
    const formData = new URLSearchParams();
    formData.append(params?.email, userLogin?.email?.toLowerCase());
    formData.append(params?.password, userLogin?.password);
    try {
      const {data, headers} = await axiosInstance.post(
        constant?.login,
        formData.toString(),
      );
      const Token = headers?.['set-cookie']
        ?.find(cookie => cookie?.includes('accessToken'))
        ?.split(';')[0]
        .split('=')[1];
      Log('accessToken::', Token);
      let dataToken = {
        accessToken: Token,
      };
      setUserLogin(prevState => ({
        ...prevState,
        loading: false,
      }));
      if (data) {
        dispatch(loginSuccess(dataToken));
        setUserLogin(prevState => ({
          ...prevState,
          email: '',
          password: '',
        }));
        Toast(data?.message);
        navigation.navigate('HomeBottomTabs');
      }
    } catch (e: any) {
      setUserLogin(prevState => ({
        ...prevState,
        loading: false,
      }));
      Toast(e?.response?.data?.message);
    }
  }, [navigation, userLogin]);

  return {
    userLogin,
    error,
    setError,
    isDisabled,
    handleChangeValue,
    onClickBack,
    onClickForgotPassword,
    onPressSignUp,
    onValidate,
  };
};

export default useLogin;

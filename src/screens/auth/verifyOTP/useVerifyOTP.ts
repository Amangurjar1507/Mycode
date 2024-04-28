import {useAuthNavigation, useAuthRoute} from '@hooks/useAppNavigation';
import validationMessage from '@utility/validation/validationMessage';
import {useCallback, useRef, useState} from 'react';
import {Keyboard, TextInput} from 'react-native';

const useVerifyOTP = () => {
  const navigation = useAuthNavigation();
  const OTPRef = useRef<TextInput>(null);
  const route = useAuthRoute('VerifyOTP');
  const staticOTP = '1234';
  const [otp, setOtp] = useState<string>('');
  const [error, setError] = useState<string | undefined>(undefined);

  //** handle OTP change value */
  const onChangeValue = useCallback(
    (value: string) => {
      setOtp(value);
      value?.length === 4 && Keyboard.dismiss();
    },
    [otp],
  );

  //** handle keyboard down on enter OTP*/
  const onSubmitEditing = useCallback(() => {
    Keyboard.dismiss();
  }, [otp]);

  //** Validate OTP verification */
  const onValidate = useCallback(() => {
    let isValid = true;
    if (otp !== staticOTP) {
      setError(validationMessage.inCorrectCode2);
      isValid = false;
    } else {
      setError(undefined);
    }

    if (isValid) {
      if (route.params?.type === 'signup') {
        navigation.navigate('CreateAccount', {
          email: route?.params?.email,
        });
      } else {
        navigation.navigate('ResetPassword');
      }
    }
  }, [otp, navigation, route.params?.type]);

  //** Navigate to login screen onpress login text*/
  const onPressLogin = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  return {
    otp,
    OTPRef,
    error,
    onChangeValue,
    onSubmitEditing,
    onValidate,
    onPressLogin,
  };
};

export default useVerifyOTP;

import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useCallback, useState} from 'react';
import validationMessage from '@utility/validation/validationMessage';
import {checkEmail} from '@utility/validation/stringValidation';
import {ForgotPasswordErrorProps} from './ForgotPassword';

const useForgotPassword = () => {
  const navigation = useAuthNavigation();
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<ForgotPasswordErrorProps>({
    email: undefined,
  });

  //** Validate Forgot Passeord */
  const onValidate = useCallback(() => {
    let isValid = true;
    if (!email) {
      isValid = false;
      error.email = validationMessage.emptyEmail;
    } else if (!checkEmail(email)) {
      isValid = false;
      error.email = validationMessage.invalidEmail;
    } else {
      error.email = undefined;
    }
    setError({...error});
    if (isValid) {
      onPressSent();
    }
  }, [email, error, navigation]);

  //** OnPress sent otp button */
  const onPressSent = useCallback(() => {
    navigation.navigate('VerifyOTP', {
      email: 'email',
      type: 'forgot-password',
    });
  }, [navigation]);

  //** OnPress login text to back login screen */
  const onPressLogin = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  return {email, setEmail, error, onValidate, onPressSent, onPressLogin};
};

export default useForgotPassword;

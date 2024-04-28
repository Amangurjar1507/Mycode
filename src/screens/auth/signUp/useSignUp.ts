import { useAuthNavigation } from '@hooks/useAppNavigation';
import { checkEmail } from '@utility/validation/stringValidation';
import validationMessage from '@utility/validation/validationMessage';
import { useCallback, useState } from 'react';
import { SignUpErrorProps } from './SignUp';

const useSignUp = () => {
  const navigation = useAuthNavigation();
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<SignUpErrorProps>({
    email: undefined,
  });

  //** Navigate to login screen */
  const onPressLogin = useCallback(() => {
    navigation.navigate('Login');
    setEmail('');
  }, [navigation]);

  //** Validate create account */
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
    setError({ ...error });
    if (isValid) {
      onPressSignUp();
    }
  }, [email, error, navigation]);

  //** Submit create account */
  const onPressSignUp = useCallback(() => {
    navigation.navigate('VerifyOTP', {
      email: email,
      type: 'signup',
    });
    setEmail('');
  }, [navigation, email]);

  return { email, setEmail, error, onValidate, onPressLogin, onPressSignUp };
};

export default useSignUp;

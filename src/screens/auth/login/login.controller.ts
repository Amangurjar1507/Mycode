import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AuthNavigationProps} from '../../../navigation/stacks/authStack';
import {LoginHookProps} from './login.interface';

const loginController = (): LoginHookProps => {
  const navigation = useNavigation<AuthNavigationProps>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onLogin = () => {
    // navigation.navigate('bottomTab');
  };

  const onForgotPassword = () => {
    // navigation.navigate('forgotpassword');
  };

  const onSignUp = () => {
    // navigation.navigate('signUp');
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    onLogin,
    onForgotPassword,
    onSignUp,
  };
};

export default loginController;

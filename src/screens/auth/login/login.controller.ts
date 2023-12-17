import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AuthNavigationProps} from '../../../navigation/stacks/authStack';
import {LoginError, LoginHookProps} from './login.interface';
import ValidationMessage from '../../../utility/validation/validationMessage';
import {
  emailRegex,
  mobileNumberPattern,
} from '../../../utility/validation/stringValidation';
import validationMessage from '../../../utility/validation/validationMessage';
import params from '../../../services/config/params';
import axiosInstance from '../../../services/api';
import constant from '../../../services/config/constant';
// import examples from 'libphonenumber-js/mobile/examples';
// import {getExampleNumber} from 'libphonenumber-js';

const loginController = (): LoginHookProps => {
  const navigation = useNavigation<AuthNavigationProps>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorObject, setErrorObject] = useState<LoginError>({
    emailError: undefined,
  });
  // const onSelectCountry = (item: any) => {
  //   const phoneNumberLength = getExampleNumber(item?.code, examples);
  //   setTimeout(() => {
  //     setMobileNumberLength(phoneNumberLength?.nationalNumber?.length);
  //     setSelectCountryName(item?.name);
  //     setSelectFlag(item?.flag);
  //     setSelectCountryCode(item?.dial_code);
  //     setCountryModal(false);
  //     setMobileNumber('');
  //   }, 0);
  // };

  const isNumeric = (num: number | string): boolean =>
    (typeof num === 'number' ||
      (typeof num === 'string' && num.trim() !== '')) &&
    !isNaN(num as number);
  const changeParams: boolean = isNumeric(email);
  const validationLogin = () => {
    /** Validation login */
    let isValidate = true;
    if (!email) {
      isValidate = false;
      errorObject.emailError = ValidationMessage.emptyEmail;
    } else if (emailRegex.test(email) == changeParams) {
      isValidate = false;
      errorObject.emailError = validationMessage.invalidEmail;
    } else if (!mobileNumberPattern.test(email) == changeParams) {
      isValidate = false;
      errorObject.emailError = ValidationMessage.invalidMobile;
    } else {
      errorObject.emailError = undefined;
    }

    setErrorObject({...errorObject});
    if (isValidate) {
      onSignup();
    }
  };

  const onSignup = async () => {
    // setLoading(true);
    /** Login api call */
    try {
      const formData = {
        // [changeParams == true ? params.mobileNumber : params.email]: email,
        [params.password]: password,
      };
      const {data} = await axiosInstance.post(constant.login, formData);
      // setLoading(false);
      //
      // dispatch(loginSuccess(data?.data[0]));
      // let newData: any = JSON.stringify(data?.data?.flag);
      // if (newData == null) {
      //   dispatch(loginSuccess(data?.data[0]));
      //   navigation.reset({
      //     index: 0,
      //     routes: [{name: 'bottomTab'}],
      //   });
      // } else {
      //   navigation.navigate('profileVerification', {
      //     screen: 'login',
      //   });
      //   Snackbar.show({text: data?.message});
      // }
    } catch (e: any) {
      // setLoading(false);
      // Snackbar.show({
      //   text: e?.response?.data?.message ?? 'Something Went Wrong',
      // });
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    errorObject,
    setErrorObject,
    validationLogin,
  };
};

export default loginController;

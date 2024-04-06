import React, { useState } from 'react';
import { View } from 'react-native';
import { Spinner } from '../../../components';
import WebView from 'react-native-webview';
// import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
// import {
//   AuthNavigationProps,
//   AuthParams,
// } from '../../../navigation/stacks/authStack';
// import params from '../../../services/config/params';
// import constant from '../../../services/config/constant';
// import axiosInstance from '../../../services/api';
// import { Log } from '../../../utility/log';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../../services/config/redux/store';
// import { toast } from '../../../utility/Snackbar';

const WebViewScreen = () => {
//   const route: any = useRoute<RouteProp<AuthParams, 'webViewScreen'>>();
  const navigation = useNavigation<AuthNavigationProps>();
  const [loading, setLoading] = useState(true);
  const { token } = useSelector((state) => state.userReducer);

  const onPaySubmit = (data) => {
    let demoUrl =
      'https://razorpay.com/payment-link/plink_NmaE4DKDW7Cyk9/test';
    if (!demoUrl?.includes('razorpay_payment_link_reference_id')) {
      onPaymentDone(data?.url);
    }
  };

  /** sending fiat post API call */
  const onPaymentDone = async (dataUrl) => {
    try {
      const formData = {
        [params.url]: dataUrl,
      };
      const { data } = await axiosInstance.post(
        constant.userTransactionHistory,
        formData,
        {
          headers: {
            auth: token,
          },
        },
      );
      toast(data?.message);
      // navigation.goBack();
      navigation.navigate('myWalletScreen');
    } catch (e: any) {
      Log('Payment Done Error:', e?.response);
    }
  };

  const handleNavigationStateChange = (navState: any) => {
    if (navState.loading) {
      setLoading(true);
    } else {
      setLoading(false);
      onPaySubmit(navState);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        // source={{
        //   uri: route?.params?.razarPay?.[0]?.paymentLink,
        // }}
        // onLoadStart={() => setLoading(true)}
        // onLoad={() => setLoading(false)}
        // renderLoading={() => <Spinner />}
        // onNavigationStateChange={handleNavigationStateChange}
      />
    </View>
  );
};

export default WebViewScreen;
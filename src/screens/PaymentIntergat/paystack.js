import React, {useRef} from 'react';
import {Paystack} from 'react-native-paystack-webview';
import {View, TouchableOpacity, Text} from 'react-native';

function Pay() {
  const paystackWebViewRef = useRef(); // Remove generic typing
  const apiKey = 'pk_test_308477c3547875df50c9010450e81d3183e1a33b'; // Replace with your API key
  const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Paystack
        paystackKey={apiKey}
        amount={25000}
        firstName="Raghav"
        lastName="Gurjar"
        billingemail="test@yopmail.com"
        currency={'NGN'}
        onCancel={e => {
          // handle response here
          console.log('res error', e);
        }}
        onSuccess={res => {
          // handle response here
          console.log('res succes', res);
        }}
        ref={paystackWebViewRef}
      />

      <TouchableOpacity
        style={{
          height: 40,
          width: 100,
          backgroundColor: 'pink',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => paystackWebViewRef.current.startTransaction()}>
        <Text>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Pay;



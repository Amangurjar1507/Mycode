import {View, Text} from 'react-native';
import React from 'react';
// import NetInfo from '@react-native-community/netinfo';

export default function NoInternet() {
  // const [isInternetAvailable, setIsInternetAvailable] = useState<boolean>(true);
  // useEffect(() => {
  //   const unsubscribe = NetInfo.addEventListener(state => {
  //     if (state?.isConnected == true) {
  //       setIsInternetAvailable(false);
  //     } else {
  //       setIsInternetAvailable(true);
  //     }
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  // const openSetting = () => {
  //   if (Platform.OS == 'android') {
  //     Linking.sendIntent('android.settings.WIFI_SETTINGS');
  //   } else {
  //     Linking.openURL('App-Prefs:root=WIFI');
  //   }
  // };

  // const onClickTryAgain = () => {
  //   NetInfo.refresh().then(state => {
  //     if (state?.isConnected == true) {
  //       setIsInternetAvailable(false);
  //     } else {
  //       setIsInternetAvailable(true);
  //     }
  //   });
  // };

  return (
    <View>
      <Text>NoInternet</Text>
    </View>
  );
}

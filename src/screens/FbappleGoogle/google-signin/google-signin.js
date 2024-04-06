import React, {useEffect, useState} from 'react';
import {Button, View, Image} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import styles from './homestyle';
import {AddComponent} from '../../components';
import screenName from '../../navigation/screenName';
import {useNavigation} from '@react-navigation/native';
import {imageIndex, svgIndex} from '../../assets';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LoginButton, AccessToken} from 'react-native-fbsdk';
// export interface NeW {
//   name: string;
//   enthusiasmLevel?: number;
//   error: string;
// }
const Home = () => {
  const [name, setname] = useState({
    user: {
      name: '',
      enthusiasmlevel: '',
      error: '',
    },
  });
  const navigation = useNavigation();
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '308453591154-2t7qdpjnvercfg2a8vssdjjk6b5cff3u.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  }, []);
  const signin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('due', userInfo);
    } catch (error) {
      console.log('message:', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Canclled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available');
      } else {
        console.log('Some Error:');
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <GoogleSigninButton
        color={GoogleSigninButton.Color.Dark}
        onPress={signin}
        style={{
          justifyContent: "center",
          alignItems: "center",
          top: 120, marginLeft: 90,
          padding: 10
        }}
      />
      <Button title='Profile' onPress={() => navigation.navigate(screenName.LoginScreen)} />
      <AddComponent Name='All get value' /> */}
       <LoginButton
        onLoginFinished={(error, result) => {
          if (error) {
            console.log('login has error: ' + result.error);
          } else if (result.isCancelled) {
            console.log('login is cancelled.');
          } else {
            AccessToken.getCurrentAccessToken().then(data => {
              console.log(data.accessToken.toString());
            });
          }
        }}
        onLogoutFinished={() => console.log('logout.')}
      />
    </SafeAreaView>
  );
};

export default Home;


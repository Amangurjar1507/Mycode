
// import {
//     GoogleSignin,
//     statusCodes,
//   } from '@react-native-google-signin/google-signin';
useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email', 'profile'],
      webClientId:
        '420594061513-olfogan69tq9uie1f3gvbismboue300t.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

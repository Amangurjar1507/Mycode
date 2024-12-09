// import React, { useEffect } from 'react';
// import { View, Button, Linking, Share, Alert } from 'react-native';

// const DemoAppLink = () => {
//   useEffect(() => {
//     const handleDeepLink = async () => {
//       const appLink = 'https://demoapp.com';
//       const url = await Linking.getInitialURL();
//       console.log('APP', url);
//       if (url === appLink) {
//         console.log('APP');
//       }
//     };

//     Linking.addEventListener('url', handleDeepLink); // Add this event listener

//     return () => {
//       Linking.removeEventListener('url', handleDeepLink); // Clean up the event listener
//     };
//   }, []);

//   const shareProduct = async () => {
//     const appLink = 'https://demoapp.com';

//     try {
//       await Share.share({
//         message: appLink,
//       });
//     } catch (error) {
//       console.log('Sharing Error:', error.message);
//     }
//   };

//   const openDemoApp = () => {
//     const deepLink = 'yourapp://'; // Replace with your app's deep link
//     Linking.openURL(deepLink).catch(() => {
//       Alert.alert('Error', 'Unable to open the app. Make sure it is installed.');
//     });
//   };

//   return (
//     <View style={{ justifyContent: 'center', flex: 1 }}>
//       <Button title="Open App" onPress={shareProduct} />
//     </View>
//   );
// };

// export default DemoAppLink;
// import React, { useEffect } from 'react';
// import { View, Button, Linking, Share, Alert } from 'react-native';

// const DemoAppLink = () => {
//   useEffect(() => {
//     const handleDeepLink = async (event) => {
//       const appLink = 'https://demoapp.com';
//       const url = event.url;
//       console.log('Received URL:', url);
      
//       if (url === appLink) {
//         console.log('Opening the app...');
//         // Handle the deep link action, e.g., navigate to a specific screen
//       }
//     };

//     Linking.addEventListener('url', handleDeepLink);

//     return () => {
//       Linking.removeEventListener('url', handleDeepLink);
//     };
//   }, []);

//   const shareProduct = async () => {
//     const appLink = 'https://demoapp.com';

//     try {
//       await Share.share({
//         message: appLink,
//       });
//     } catch (error) {
//       console.log('Sharing Error:', error.message);
//     }
//   };

//   const openDemoApp = () => {
//     const deepLink = 'yourapp://'; // Replace with your actual deep link scheme
//     Linking.openURL(deepLink).catch(() => {
//       Alert.alert('Error', 'Unable to open the app. Make sure it is installed.');
//     });
//   };

//   return (
//     <View style={{ justifyContent: 'center', flex: 1 }}>
//       <Button title="Open App" onPress={openDemoApp} />
//       <Button title="Share Product" onPress={shareProduct} />
//     </View>
//   );
// };

// export default DemoAppLink;


// import React, { useEffect } from 'react';
// import { View, Button, Linking, Share, Alert } from 'react-native';

// const DemoAppLink = () => {
//   useEffect(() => {
//     const handleDeepLink = async () => {
//       const appLink = 'https://demoapp.com';
//       const url = await Linking.getInitialURL();
//       console.log('Initial URL:', url);
//       if (url === appLink) {
//         console.log('Deep Link Matched:', url);
//       }
//     };

//     Linking.addEventListener('url', handleDeepLink);

//     return () => {
//       Linking.removeEventListener('url', handleDeepLink);
//     };
//   }, []);

//   const shareProduct = async () => {
//     const appLink = 'https://demoapp.com';

//     try {
//       await Share.share({
//         message: appLink,
//       });
//     } catch (error) {
//       console.log('Sharing Error:', error.message);
//     }
//   };

//   const openDemoApp = () => {
//     const deepLink = 'yourapp://'; // Replace with your actual deep link scheme
//     console.log('Opening App with Deep Link:', deepLink);
//     Linking.openURL(deepLink).catch(() => {
//       Alert.alert('Error', 'Unable to open the app. Make sure it is installed.');
//     });
//   };

//   return (
//     <View style={{ justifyContent: 'center', flex: 1 }}>
//       <Button title="Open App" onPress={openDemoApp} />
//     </View>
//   );
// };

// export default DemoAppLink;



// import React, {useEffect} from 'react';
// import {View, Button, Linking, Share, Alert} from 'react-native';
// import { hasDynamicIsland } from 'react-native-device-info';

// const DemoAppLink = () => {
//   useEffect(() => {
//     const handleDeepLink = async () => {

//       const appLink = 'https://demoapp.com';
//       const url = await Linking.getInitialURL();
//       console.log('APP', url);
//       if (url === appLink) {
//         console.log('APP');
//       }
//     };
//     handleDeepLink();
//   }, []);
//   const shareProduct = async () => {
//     const appLink = 'https://demoapp.com';
//     // const appLink = 'https://www.demoapp.com';

//     try {
//       await Share.share({
//         message: appLink,
//       });
//     } catch (error) {
//       console.log('Sharing Error:', error.message);
//     }
//   };
//   const openDemoApp = () => {
//     const deepLink = 'yourapp://';
//     Linking.openURL(deepLink).catch(() => {
//       Alert.alert(
//         'Error',
//         'Unable to open the app. Make sure it is installed.',
//       );
//     });
//   };

//   return (
//     <View style={{justifyContent: 'center', flex: 1}}>
//       <Button title="Open App" onPress={shareProduct} />
//     </View>
//   );
// };

// export default DemoAppLink;



// <intent-filter android:label="filter_react_native">
//     <action android:name="android.intent.action.VIEW" />
//     <category android:name="android.intent.category.DEFAULT" />
//     <category android:name="android.intent.category.BROWSABLE" />
//     <data android:scheme="https" android:host="demoapp.com" />
//     <data android:scheme="http" android:host="demoapp.com" />
// </intent-filter>







// // Ya  mera hai es me 
// <intent-filter android:autoVerify="true">
// <action android:name="android.intent.action.VIEW" />
// <category android:name="android.intent.category.DEFAULT" />
// <category android:name="android.intent.category.BROWSABLE" /> 
// <!-- <data android:scheme="https" android:host="demoapp.com"  />
// <data android:scheme="http" android:host="demoapp.com"  /> -->
// <data android:scheme="http" android:host="b4-hit-coin.appworkdemo.com" />  
// <data android:scheme="https" android:host="b4-hit-coin.appworkdemo.com" />  
// </intent-filter>

// // const shareProduct = async () => {
// //   // const appLink = ' https://deeplinkdemo.com' ;
// //   const appLink = ' http://betting.appworkdemo.com/' ;
// //   try {
// //     await Share.share({
// //       message: appLink,
// //     });
// //   } catch (error) {
// //     console.log('Sharing Error:', error.message);
// //   }
// // };




// Raghav 


// var isListenerAttached = false;
//   var subscribe: any;
//   React.useEffect(() => {
//     if (!isListenerAttached) {
//       subscribe = Linking.addEventListener('url', HandleUrl);
//       isListenerAttached = true;
//     }
//     return () => subscribe.remove();
//   }, []);

//   React.useEffect(() => {
//     Linking.getInitialURL().then(url => {
//       if (url) {
//         var urlRegex = /[?&]([^=#]+)=([^&#]*)/g,
//           params: any = {},
//           match;
//         while ((match = urlRegex?.exec(url))) {
//           params[match[1]] = match[2];
//         }
//         var key,
//           keys = Object.keys(params);
//         var n = keys.length;
//         var newobj: any = {};
//         while (n--) {
//           key = keys[n];
//           newobj[key.toLowerCase()] = params[key];
//         }
//         console.log('newobject', newobj);
//         navigate(screenName.login, {
//           referral: newobj.referral,
//           Screen: 'SignUp',
//         });
//         // if (userLogin.isLogin) {
//         //   navigate(screenName.login);
//         // } else {
//         //   navigate(screenName.joinWhiteList, {
//         //     referralCode: newobj['left-referral']
//         //       : newobj['right-referral'],
//         //   });
//         // }
//       }
//     });
//   }, []);

//   const HandleUrl = (event: any) => {
//     if (event?.url) {
//       var urlRegex = /[?&]([^=#]+)=([^&#]*)/g,
//         params: any = {},
//         match;

//       while ((match = urlRegex.exec(event?.url))) {
//         params[match[1]] = match[2];
//       }
//       var key,
//         keys = Object.keys(params);
//       var n = keys.length;
//       var newobj: any = {};
//       while (n--) {
//         key = keys[n];
//         newobj[key.toLowerCase()] = params[key];
//       }
//       console.log('newobj', newobj);
//       navigate(screenName.login, {referral: newobj.referral, Screen: 'SignUp'});
//       // if (userLogin.isLogin) {
//       //   navigate(screenName.dashboard);
//       // } else {
//       //   navigate(screenName.joinWhiteList, {
//       //     referralCode: newobj['left-referral']
//       //       : newobj['right-referral'],
//       //   });
//       // }
//     }
//   };
//   //
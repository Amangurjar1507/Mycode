// import {Alert, Platform, StatusBar, Linking} from 'react-native';
// import {InAppBrowser} from 'react-native-inappbrowser-reborn';

// const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));
// export const openLink = async (name, statusBarStyle, animated = true) => {
//   console.log('Type name', name);
//   try {
//     const url = 'https://www.google.com/search?q=' + `${name}`;
//     if (await InAppBrowser.isAvailable()) {
//       const delay = animated && Platform.OS === 'ios' ? 400 : 0;
//       setTimeout(() => StatusBar.setBarStyle('light-content'), delay);
//       const result = await InAppBrowser.open(url, {
//         showTitle: true,
//         toolbarColor: 'black',
//         secondaryToolbarColor: 'black',
//         navigationBarColor: 'black',
//         navigationBarDividerColor: 'black',
//         enableUrlBarHiding: true,
//         enableDefaultShare: true,
//         forceCloseOnRedirection: false,
//         animations: {
//           startEnter: 'slide_in_right',
//           startExit: 'slide_out_left',
//           endEnter: 'slide_in_left',
//           endExit: 'slide_out_right',
//         },
//         headers: {
//           'my-custom-header': 'my custom header value',
//         },
//         hasBackButton: true,
//         browserPackage: undefined,
//         showInRecents: true,
//         includeReferrer: true,
//       });
//       await sleep(800);
//       console.log('Response', JSON.stringify(result));
//       // Alert.alert('Response', JSON.stringify(result));
//     } else {
//       Linking.openURL(url);
//     }
//   } catch (error) {
//     await sleep(50);
//     console.log('errorMessage', error);
//   } finally {
//     StatusBar.setBarStyle(statusBarStyle);
//   }
// };

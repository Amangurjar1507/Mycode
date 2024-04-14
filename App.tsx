//
import React from 'react';
import {LogBox} from 'react-native';
import Route from './src/navigation';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead',
]);
LogBox.ignoreAllLogs();

const App = () => {
  return <Route />;
};
export default App;



// immpornt web
// https://www.callstack.com/blog/the-mini-guide-to-react-native-optimization-for-web3?utm_campaign=community&utm_medium=email&_hsenc=p2ANqtz-_MVk9EVKSv7M6SJs09o6M4S5WAm1X2x6I6zZWBXCmZUWjDjYk1aummHLFP8ItYGnDjK39D7FgU5XEg6jmsiIggqM6tyw&_hsmi=301195644&utm_content=301195644&utm_source=hs_email
// https://www.nativewind.dev/quick-starts/nextjs
// https://github.com/sweatco/rn-scratch-card
// https://github.com/wumke/react-native-exit-app
// https://github.com/ridvanaltun/react-native-deepar?tab=readme-ov-file#what-is-deepar
// https://medium.com/@riteshp175862/sonarqube-implementation-in-react-native-792f37726384
// https://www.banuba.com/company



// Reudx setp
// import React, {useEffect} from 'react';
// import {LogBox} from 'react-native';
// import Route from './src/navigation';
// import SplashScreen from 'react-native-splash-screen';
// import store from './src/services/redux/store';
// import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';

// LogBox.ignoreLogs([
//   "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
// ]);

// LogBox.ignoreAllLogs();

// const App = () => {
//   const persistStore = store();
//   useEffect(() => {
//     setTimeout(() => {
//       SplashScreen.hide();
//     }, 2000);
//   }, []);

//   return (
//     <Provider store={persistStore.store}>
//       <PersistGate loading={null} persistor={persistStore.persistor}>
//         <Route />
//       </PersistGate>
//     </Provider>
//   );
// };

// export default App;
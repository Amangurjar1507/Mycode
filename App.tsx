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


// import React, {FC, memo} from 'react';
// import {
//   PanGestureHandler,
//   GestureHandlerRootView,
// } from 'react-native-gesture-handler';
// import Animated from 'react-native-reanimated';
// import {SwipButtonProps} from './swipButton.interface';
// import {Image, View} from 'react-native';
// import useSwipButton from './useSwipButton';
// import styles from './swipButton.style';
// import imageIndex from '../../../assets/imageIndex';

// const SwipButton: FC<SwipButtonProps> = ({
//   buttonContainer,
//   title,
//   buttonTextStyle,
//   onPressShow,
// }) => {
//   const {animatedGestureHandler, AnimatedStyles} = useSwipButton(onPressShow);
//   return (
//     <GestureHandlerRootView style={styles.container}>
//       <View style={styles.containerMain}>
//         <View style={[styles.buttonStyle, buttonContainer]}>
//           <PanGestureHandler onGestureEvent={animatedGestureHandler}>
//             <Animated.View
//               style={[styles.buttonSwipIconStyle, AnimatedStyles.swipeStyle]}>
//               <Image
//                 source={imageIndex.swipeRight}
//                 style={styles.swipIconStyle}
//               />
//             </Animated.View>
//           </PanGestureHandler>
//           <Animated.Text style={[AnimatedStyles.swipeText, buttonTextStyle]}>
//             {title}
//           </Animated.Text>
//         </View>
//       </View>
//     </GestureHandlerRootView>
//   );
// };

// export default memo(SwipButton);
// import {
//   Extrapolate,
//   interpolate,
//   useAnimatedGestureHandler,
//   useAnimatedStyle,
//   useSharedValue,
//   withSpring,
//   runOnJS,
// } from 'react-native-reanimated';

// // Custom hook for swipe button functionality
// const useSwipButton = (onPressShow: () => void, onPressClose: () => void) => {
//    const X = useSharedValue(10);
//   // Define input range for interpolation
//   const InterpolateXInput = [0, 150];

//   // Define animated gesture handler for swipe actions
//   const animatedGestureHandler = useAnimatedGestureHandler({
//     // Handler for active gesture state
//     onActive: e => {
//       if (e.translationX < 0) {
//         // Update X value based on gesture translation
//         X.value = -e.translationX;
//       } else {
//         X.value = e.translationX;
//       }
//     },
//      onEnd: () => {
//        if (X.value < 150) {
//         // Spring back to initial position
//         X.value = withSpring(10);
//       } else {
//         // Slide button to the end position with spring animation
//         X.value = withSpring(240);
//         // Execute onPressShow callback using runOnJS to ensure it's executed on the JS thread
//         runOnJS(onPressShow)();
//       }
//     },
//   });

//   // Define animated styles for swipe button and text
//   const AnimatedStyles = {
//     swipeStyle: useAnimatedStyle(() => {
//       // Apply translation based on X value
//       return { transform: [{ translateX: X.value }] };
//     }),
//     swipeText: useAnimatedStyle(() => {
//       // Interpolate opacity and translation based on X value
//       return {
//         opacity: interpolate(
//           X.value,
//           InterpolateXInput,
//           [0.8, 0],
//           Extrapolate.CLAMP,
//         ),
//         transform: [
//           {
//             translateX: interpolate(
//               X.value,
//               InterpolateXInput,
//               [0, 150],
//               Extrapolate.CLAMP,
//             ),
//           },
//         ],
//       };
//     }),
//   };
//   return {
//     animatedGestureHandler,
//     AnimatedStyles,
//   };
// };

// export default useSwipButton;
// import {StyleProp, TextStyle, ViewStyle} from 'react-native/types';

// export interface SwipButtonProps {
//   title?: string;
//   buttonTextStyle?: StyleProp<TextStyle> | undefined;
//   buttonContainer?: StyleProp<ViewStyle> | undefined;
//   onPressShow: () => void;
//  }






// Screen code

// import React, {FC} from 'react';
// import {View, FlatList} from 'react-native';
// import styles from './newsFeed.style';
// import {CustomStatusbar, Header, SwipButton} from '../../../components/componentsIndex';
// import useNewsFeed from './useNewsFeed';
// import NewsCard from '../../../components/card/newsCard/NewsCard';

// const NewsFeed: FC = () => {
//   const {onSwipNewsShow, newsFeedData, setNewsFeedData, Show, onSwipNewsClose} =
//     useNewsFeed();
//   return (
//     <View style={styles.maincontainer}>
//       <CustomStatusbar  />
//       <Header lable ="News Feed" />
//       <View style={styles.container}>
//         <SwipButton
//           title=" >> Right Swipe to  >>"
//           onPressShow={onSwipNewsShow}
//           buttonTextStyle={styles.buttonTextStyle}
//         />
//         {Show && (
//           <FlatList
//             data={newsFeedData}
//             style={styles.flatList}
//             keyExtractor={(item, index) => {
//               return `${index}`;
//             }}
//             renderItem={({item, index}) => (
//               <NewsCard item={item} index={index} />
//             )}
//             showsVerticalScrollIndicator={false}
//           />
//         )}
//       </View>
//     </View>
//   );
// };

// export default NewsFeed;


// import {useCallback, useState} from 'react';
// import useSWR from 'swr';
// import constant from '../../../services/config/constant';
// import { Log } from '../../../utility/log';
 
// const useNewsFeed = () => {
//   const [Show, setShow] = useState<boolean>(false);
//   const [newsFeedData, setNewsFeedData] = useState([]);
//   const onSwipNewsShow = useCallback(() => {
//     setShow(true);
//   }, [Show]);
//   const onSwipNewsClose = useCallback(() => {
//     setShow(!Show);
//   }, [Show]);

// // Fetch data using useSWR hook
// const { data, error } = useSWR(constant.baseURL, async (url: string) => {
//   try {
//     // Send a GET request to the specified URL
//     const response = await fetch(url);
//     // Check if the response is OK (status code in the range 200-299)
//     if (!response.ok) {
//       // If response is not OK, throw an error
//       throw new Error('Failed to fetch data');
//     }
//     // Parse the response body as JSON
//     const responseData = await response.json();
//     // Set the fetched data to the state variable
//     setNewsFeedData(responseData?.articles);
//     // Return the fetched data
//     return responseData;
//   } catch (error) {
//     Log("error",error)
//      // rethrow the error to be caught by useSWR
//     throw error;
//   }
// });

//   return {onSwipNewsShow, onSwipNewsClose, Show, newsFeedData, setNewsFeedData};
// };

// export default useNewsFeed;
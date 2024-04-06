// import React, {useRef, useState} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   PanResponder,
//   Text,
//   Animated,
// } from 'react-native';

// const App = () => {
//   const [sliderDimensions, setSliderDimensions] = useState({
//     height: null,
//     top: null,
//     bottom: null,
//   });

//   const numBoxes = 4;
//   const boxColors = ['#FF5733', '#33FF57', '#B733FF', '#4D94FF']; // Colors for each box
//   const colorLabels = ['Box 1', 'Box 2', 'Box 3', 'Box 4'];
//   const boxHeight = sliderDimensions.height / numBoxes;

//   const stepperAnim = useRef(new Animated.Value(0)).current;

//   const stepperResponder = PanResponder.create({
//     onStartShouldSetPanResponder: () => true,
//     onPanResponderStart: () => true,
//     onPanResponderEnd: () => false,
//     onPanResponderGrant: () => {
//       // No need for Animated.Value for static UI
//     },
//     numberActiveTouches: 10,
//     onPanResponderMove: (_, {dy, moveY}) => {
//       // No need for setValue if the UI is static
//       if (moveY > sliderDimensions.top && moveY < sliderDimensions.bottom) {
//         stepperAnim.setValue(dy);
//       }
//     },
//     onPanResponderRelease: () => {
//       // No need for flattenOffset if the UI is static
//     },
//   });

//   const getColorLabel = () => {
//     const currentPosition = stepperResponder.moveY; // Use moveY directly
//     const index = Math.floor(currentPosition / boxHeight);
//     return colorLabels[index] || '';
//   };

//   return (
//     <SafeAreaView style={{justifyContent: 'center', flex: 1}}>
//       <View
//         style={styles.slider}
//         onLayout={evt => {
//           const {height, y} = evt.nativeEvent.layout;
//           setSliderDimensions({
//             height: height,
//             top: y,
//             bottom: y + height,
//           });
//         }}>
//         <View style={styles.rail}>
//           <View style={styles.railFill}>
//             {sliderDimensions.height &&
//               boxColors.map((color, index) => (
//                 <View
//                   key={index}
//                   style={[
//                     styles.railFillSpace,
//                     {
//                       height: boxHeight,
//                       backgroundColor: color,
//                     },
//                   ]}
//                 />
//               ))}
//           </View>
//         </View>
//         <Animated.View
//           {...stepperResponder.panHandlers}
//           style={[
//             styles.stepper,
//             {
//               transform: [{translateY: stepperAnim}],
//             },
//           ]}
//         />
//         <Text style={styles.colorLabel}>{getColorLabel()}</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   slider: {
//     width: 50,
//     height: '80%',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     position: 'relative',
//     marginBottom: 50,
//     alignItems: 'center', // Center the slider horizontally
//   },
//   rail: {
//     width: 20,
//     height: '100%',
//     backgroundColor: 'grey',
//     alignItems: 'center',
//   },
//   stepper: {
//     width: '100%',
//     height: 2,
//     backgroundColor: 'black',
//     position: 'absolute',
//     bottom: '50%',
//   },
//   railFill: {
//     width: '100%',
//     position: 'absolute',
//     bottom: 0,
//   },
//   railFillSpace: {
//     width: '100%',
//     position: 'relative',
//     height: 20,
//   },
//   colorLabel: {
//     marginTop: 10,
//     color: 'black',
//   },
// });

// export default App;

import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  PanResponder,
  Text,
  Animated,
} from 'react-native';

const App = () => {
  const [sliderDimensions, setSliderDimensions] = useState({
    height: null,
    top: null,
    bottom: null,
  });

  const numBoxes = 4;
  const boxColors = ['#FF5733', '#33FF57', '#B733FF', '#4D94FF'];
  const boxHeight = sliderDimensions.height / numBoxes;
  const [showValue, setShowValue] = useState(0);
  const stepperAnim = useRef(new Animated.Value(0)).current;

  const stepperResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, {dy, moveY}) => {
      if (moveY > sliderDimensions.top && moveY < sliderDimensions.bottom) {
        stepperAnim.setValue(dy);
        const currentPosition = moveY - sliderDimensions.top;
        const index = Math.floor(currentPosition / boxHeight);
        let newValue = currentPosition;
        console.log('Index:', index + 1, 'Value:', currentPosition.toFixed(0));
        setShowValue(newValue);
      }
    },
    onPanResponderRelease: () => {
      // Add any release logic here if needed
    },
  });

  const getColorLabel = () => {
    const currentPosition = stepperResponder.moveY;
    const index = Math.floor(currentPosition / boxHeight);
  };

  return (
    <SafeAreaView style={{justifyContent: 'center', flex: 1}}>
      <View
        style={styles.slider}
        onLayout={evt => {
          const {height, y} = evt.nativeEvent.layout;
          setSliderDimensions({
            height: height,
            top: y,
            bottom: y + height,
          });
        }}>
        <View style={styles.rail}>
          <View style={styles.railFill}>
            {sliderDimensions.height &&
              boxColors.map((color, index) => (
                <View
                  key={index}
                  style={[
                    styles.railFillSpace,
                    {
                      height: boxHeight,
                      backgroundColor: color,
                    },
                  ]}
                />
              ))}
          </View>
        </View>
        <Animated.View
          {...stepperResponder.panHandlers}
          style={[
            styles.stepper,
            {
              transform: [{translateY: stepperAnim}],
            },
          ]}
        />
        <Text style={styles.colorLabel}>{getColorLabel()}</Text>
        <Text>{showValue}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  slider: {
    width: 50,
    height: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    marginBottom: 50,
    alignItems: 'center', // Center the slider horizontally
  },
  rail: {
    width: 20,
    height: '100%',
    backgroundColor: 'grey',
    alignItems: 'center',
  },
  stepper: {
    width: '100%',
    height: 10,
    backgroundColor: 'black',
    position: 'absolute',
    bottom: '50%',
  },
  railFill: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  railFillSpace: {
    width: '100%',
    position: 'relative',
    height: 45,
  },
  colorLabel: {
    marginTop: 10,
    color: 'black',
  },
});

export default App;


// import React, {useState} from 'react';
// import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
// import {PanGestureHandler, State} from 'react-native-gesture-handler';

// const AuthStack = () => {
//   const [selectedColor, setSelectedColor] = useState(null);

//   const colorOptions = [
//     {id: 1, color: 'green', label: 'Green'},
//     {id: 2, color: 'lightgreen', label: 'Light'},
//     {id: 3, color: 'pink', label: 'Pink'},
//     {id: 4, color: 'red', label: 'Red'},
//   ];

//   const handleGestureEvent = event => {
//     const selectedIndex = Math.round(event.nativeEvent.translationY / 80);
//     if (selectedIndex >= 0 && selectedIndex < colorOptions.length) {
//       setSelectedColor(colorOptions[selectedIndex].color);
//     }
//   };

//   const handleGestureStateChange = event => {
//     if (event.nativeEvent.state === State.END) {
//       // Handle any logic you want when the gesture ends
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.colorOptionsContainer}>
//         {colorOptions.map(option => (
//           <View
//             key={option.id}
//             style={[
//               styles.colorOption,
//               {
//                 backgroundColor: option.color,
//                 opacity: option.color === selectedColor ? 1 : 0.7,
//               },
//             ]}>
//             <Text>{option.label}</Text>
//           </View>
//         ))}
//       </View>

//       {selectedColor && (
//         <View style={styles.selectedColorContainer}>
//           <Text>{`Selected Color: ${selectedColor}`}</Text>
//         </View>
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   colorOptionsContainer: {
//     flexDirection: 'column',
//     justifyContent: 'center',
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   colorOption: {
//     width: 100,
//     height: 80,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 10,
//     marginHorizontal: 5,
//   },
//   selectedColorContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,
//   },
//   slider: {
//     height: 240, // Adjust the height as needed
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   sliderIndicator: {
//     width: 60,
//     height: 4,
//     backgroundColor: 'black',
//     borderRadius: 2,
//   },
// });

// export default AuthStack;



// import React, {useRef, useState} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   PanResponder,
//   Text,
//   Animated,
// } from 'react-native';

// const App = () => {
//   const [sliderDimensions, setSliderDimensions] = useState({
//     height: null,
//     top: null,
//     bottom: null,
//   });

//   const numBoxes = 4;
//   const boxColors = ['#FF5733', '#33FF57', '#B733FF', '#4D94FF']; // Colors for each box
//   const colorLabels = ['Box 1', 'Box 2', 'Box 3', 'Box 4'];
//   const boxHeight = sliderDimensions.height / numBoxes;

//   const stepperAnim = useRef(new Animated.Value(0)).current;

//   const stepperResponder = PanResponder.create({
//     onStartShouldSetPanResponder: () => true,
//     onPanResponderStart: () => true,
//     onPanResponderEnd: () => false,
//     onPanResponderGrant: () => {
//       // No need for Animated.Value for static UI
//     },
//     numberActiveTouches: 10,
//     onPanResponderMove: (_, {dy, moveY}) => {
//       // No need for setValue if the UI is static
//       if (moveY > sliderDimensions.top && moveY < sliderDimensions.bottom) {
//         stepperAnim.setValue(dy);
//       }
//     },
//     onPanResponderRelease: () => {
//       // No need for flattenOffset if the UI is static
//     },
//   });

//   const getColorLabel = () => {
//     const currentPosition = stepperResponder.moveY; // Use moveY directly
//     const index = Math.floor(currentPosition / boxHeight);
//     return colorLabels[index] || '';
//   };

//   return (
//     <SafeAreaView style={{justifyContent: 'center', flex: 1}}>
//       <View
//         style={styles.slider}
//         onLayout={evt => {
//           const {height, y} = evt.nativeEvent.layout;
//           setSliderDimensions({
//             height: height,
//             top: y,
//             bottom: y + height,
//           });
//         }}>
//         <View style={styles.rail}>
//           <View style={styles.railFill}>
//             {sliderDimensions.height &&
//               boxColors.map((color, index) => (
//                 <View
//                   key={index}
//                   style={[
//                     styles.railFillSpace,
//                     {
//                       height: boxHeight,
//                       backgroundColor: color,
//                     },
//                   ]}
//                 />
//               ))}
//           </View>
//         </View>
//         <Animated.View
//           {...stepperResponder.panHandlers}
//           style={[
//             styles.stepper,
//             {
//               transform: [{translateY: stepperAnim}],
//             },
//           ]}
//         />
//         <Text style={styles.colorLabel}>{getColorLabel()}</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   slider: {
//     width: 50,
//     height: '80%',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     position: 'relative',
//     marginBottom: 50,
//     alignItems: 'center', // Center the slider horizontally
//   },
//   rail: {
//     width: 20,
//     height: '100%',
//     backgroundColor: 'grey',
//     alignItems: 'center',
//   },
//   stepper: {
//     width: '100%',
//     height: 2,
//     backgroundColor: 'black',
//     position: 'absolute',
//     bottom: '50%',
//   },
//   railFill: {
//     width: '100%',
//     position: 'absolute',
//     bottom: 0,
//   },
//   railFillSpace: {
//     width: '100%',
//     position: 'relative',
//     height: 20,
//   },
//   colorLabel: {
//     marginTop: 10,
//     color: 'black',
//   },
// });

// export default App;

// import React, {useRef, useState} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   PanResponder,
//   Text,
//   Animated,
// } from 'react-native';

// const App = () => {
//   const [sliderDimensions, setSliderDimensions] = useState({
//     height: null,
//     top: null,
//     bottom: null,
//   });

//   const numBoxes = 4;
//   const boxColors = ['#FF5733', '#33FF57', '#B733FF', '#4D94FF'];
//   const boxHeight = sliderDimensions.height / numBoxes;
//   const [showValue, setShowValue] = useState(0);
//   const stepperAnim = useRef(new Animated.Value(0)).current;

//   const stepperResponder = PanResponder.create({
//     onStartShouldSetPanResponder: () => true,
//     onPanResponderMove: (_, {dy, moveY}) => {
//       if (moveY > sliderDimensions.top && moveY < sliderDimensions.bottom) {
//         stepperAnim.setValue(dy);
//         const currentPosition = moveY - sliderDimensions.top;
//         const index = Math.floor(currentPosition / boxHeight);
//         let newValue = currentPosition;
//         console.log('Index:', index + 1, 'Value:', currentPosition.toFixed(0));
//         setShowValue(newValue);
//       }
//     },
//     onPanResponderRelease: () => {
//       // Add any release logic here if needed
//     },
//   });

//   const getColorLabel = () => {
//     const currentPosition = stepperResponder.moveY;
//     const index = Math.floor(currentPosition / boxHeight);
//   };

//   return (
//     <SafeAreaView style={{justifyContent: 'center', flex: 1}}>
//       <View
//         style={styles.slider}
//         onLayout={evt => {
//           const {height, y} = evt.nativeEvent.layout;
//           setSliderDimensions({
//             height: height,
//             top: y,
//             bottom: y + height,
//           });
//         }}>
//         <View style={styles.rail}>
//           <View style={styles.railFill}>
//             {sliderDimensions.height &&
//               boxColors.map((color, index) => (
//                 <View
//                   key={index}
//                   style={[
//                     styles.railFillSpace,
//                     {
//                       height: boxHeight,
//                       backgroundColor: color,
//                     },
//                   ]}
//                 />
//               ))}
//           </View>
//         </View>
//         <Animated.View
//           {...stepperResponder.panHandlers}
//           style={[
//             styles.stepper,
//             {
//               transform: [{translateY: stepperAnim}],
//             },
//           ]}
//         />
//         <Text style={styles.colorLabel}>{getColorLabel()}</Text>
//         <Text>{showValue}</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   slider: {
//     width: 50,
//     height: '80%',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     position: 'relative',
//     marginBottom: 50,
//     alignItems: 'center', // Center the slider horizontally
//   },
//   rail: {
//     width: 20,
//     height: '100%',
//     backgroundColor: 'grey',
//     alignItems: 'center',
//   },
//   stepper: {
//     width: '100%',
//     height: 10,
//     backgroundColor: 'black',
//     position: 'absolute',
//     bottom: '50%',
//   },
//   railFill: {
//     width: '100%',
//     position: 'absolute',
//     bottom: 0,
//   },
//   railFillSpace: {
//     width: '100%',
//     position: 'relative',
//     height: 45,
//   },
//   colorLabel: {
//     marginTop: 10,
//     color: 'black',
//   },
// });

// export default App;



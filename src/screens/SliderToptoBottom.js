import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  PanResponder,
  Text,
  Animated,
  Dimensions,
} from 'react-native';

const Slider = () => {
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
  const windowHeight = Dimensions.get('screen').height;

  const stepperResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, {dy, moveY}) => {
      if (moveY > sliderDimensions.top && moveY < sliderDimensions.bottom) {
        stepperAnim.setValue(dy);
        const currentPosition = moveY - sliderDimensions.top;
        // const index = Math.floor(currentPosition / boxHeight);
        // const color = boxColors[index];
        // const newValue = getColorValue(color);
      }
    },
  });

  const handleLayout = ({
    nativeEvent: {
      layout: {height},
    },
  }) => {
    setSliderDimensions({
      height,
      top: 120,
      bottom: 20 + height,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.slider} onLayout={handleLayout}>
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
        <Text>{showValue}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  slider: {
    width: 120,
    height: '62%',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    marginBottom: 50,
    alignItems: 'center',
  },
  rail: {
    width: 120,
    height: '100%',
    alignItems: 'center',
    flex: 1,
  },
  stepper: {
    width: '45%',
    height: 25,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: '48%',
    flex: 1,
    borderRadius: 7,
  },
  railFill: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  railFillSpace: {
    width: '100%',
    position: 'relative',
  },
});

export default Slider;








// import React, {useRef, useState} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   PanResponder,
//   Text,
//   Animated,
// } from 'react-native';

// const Slider = () => {
//   const [sliderDimensions, setSliderDimensions] = useState({
//     height: null,
//     top: 112,
//     bottom: null,
//   });
//   const numBoxes = 4;
//   const boxColors = ['#FF5733', '#33FF57', '#B733FF', '#4D94FF'];
//   const boxHeight = sliderDimensions.height / numBoxes;
//   const [showValue, setShowValue] = useState(0);
//   const stepperAnim = useRef(new Animated.Value(0)).current;

//   const getColorValue = color => {
//     // Map each color to its corresponding value
//     switch (color) {
//       case '#FF5733':
//         return 1;
//       case '#33FF57':
//         return 2;
//       case '#B733FF':
//         return 3;
//       case '#4D94FF':
//         return 4;
//       default:
//         return 0;
//     }
//   };

//   const stepperResponder = PanResponder.create({
//     onStartShouldSetPanResponder: () => true,
//     onPanResponderMove: (_, {dy, moveY}) => {
//       if (moveY > sliderDimensions.top && moveY < sliderDimensions.bottom) {
//         stepperAnim.setValue(dy);
//         const currentPosition = moveY - sliderDimensions.top;
//         const index = Math.floor(currentPosition / boxHeight);
//         const color = boxColors[index];
//         const newValue = getColorValue(color);
//       }
//     },
//   });

//   return (
//     <View
//       style={styles.slider}
//       onLayout={evt => {
//         const {height, y} = evt.nativeEvent.layout;
//         setSliderDimensions({
//           height: height,
//           top: y,
//           bottom: y + height,
//         });
//       }}>
//       <View style={styles.rail}>
//         <View style={styles.railFill}>
//           {sliderDimensions.height &&
//             boxColors.map((color, index) => (
//               <View
//                 key={index}
//                 style={[
//                   styles.railFillSpace,
//                   {
//                     height: boxHeight,
//                     backgroundColor: color,
//                   },
//                 ]}
//               />
//             ))}
//         </View>
//       </View>
//       <Animated.View
//         {...stepperResponder.panHandlers}
//         style={[
//           styles.stepper,
//           {
//             transform: [{translateY: stepperAnim}],
//           },
//         ]}
//       />
//       <Text>{showValue}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   slider: {
//     width: 120,
//     height: '62%',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     position: 'relative',
//     marginBottom: 50,
//     alignItems: 'center',
//   },
//   rail: {
//     width: 120,
//     height: '100%',
//     alignItems: 'center',
//     flex: 1,
//   },
//   stepper: {
//     width: '45%',
//     height: 25,
//     backgroundColor: 'white',
//     position: 'absolute',
//     bottom: '48%',
//     flex: 1,
//     borderRadius: 7,
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

// export default Slider;


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

  const stepperResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, {dy, moveY}) => {
      if (moveY > sliderDimensions.top && moveY < sliderDimensions.bottom) {
        stepperAnim.setValue(dy);

        const currentPosition = moveY - sliderDimensions.top;
        const index = Math.floor(currentPosition / boxHeight);
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
        <View style={styles.stepperContainer}>
          <Animated.View
            {...stepperResponder.panHandlers}
            style={[
              styles.stepper,
              {
                transform: [{translateY: stepperAnim}],
              },
            ]}
          />
        </View>
        <Text>{showValue}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'red',
    height: '66%',
  },
  slider: {
    width: 120,
    height: '82%',
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
  stepperContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
  stepper: {
    width: '45%',
    height: 25,
    backgroundColor: 'white',
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

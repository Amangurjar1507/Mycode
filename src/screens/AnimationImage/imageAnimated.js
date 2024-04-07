import React, { useState, useRef } from 'react';
import { View, Text, Button, Image, StyleSheet, PanResponder, Animated } from 'react-native';
 import ImagePicker from 'react-native-image-crop-picker';

const ImageSelectorApp = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: pan.x,
            dy: pan.y,
          },
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    })
  ).current;

  const pickImage = () => {
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: false
        }).then(image => {
          console.log("image",image)


          setSelectedImage(image.path);
        });
      };
   console.log("selectedImage",selectedImage)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Image Selector</Text>
      <Button title="Select Image" onPress={pickImage} />
      {selectedImage && (
        <Animated.View
          {...panResponder.panHandlers}
          style={{
            transform: [{ translateX: pan.x }, { translateY: pan.y }],
          }}>
          <Image source={{ uri: selectedImage }} style={styles.image} />
        </Animated.View>
      )}
 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
});

export default ImageSelectorApp;

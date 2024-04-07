import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Ram Rajput',
    image: 'https://avatars2.githubusercontent.com/u/498852?s=400&v=4',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Ram Rajput',
    image:
      'https://themusclemedics.com/wp-content/uploads/2018/04/Circle-Profile-PNG-1024x1024.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Ram Rajput',
    image: 'https://avatars2.githubusercontent.com/u/498852?s=400&v=4',
  },
];

const AnimatedItem = Animatable.createAnimatableComponent(View);

const CardAnimation = () => {
  const [data, setData] = useState(DATA);

  const removeItem = itemId => {
    const newData = data.filter(item => item.id !== itemId);
    setData(newData);
  };

  const renderItem = item => {
    return (
      <AnimatedItem
        animation="fadeInRightBig"
        duration={1000}
        style={styles.item}>
        <Image
          source={{uri: item.item.image}}
          style={{
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
        <Text style={styles.title}>{item.item.title}</Text>
        <Animatable.View
          duration={2000}
          animation="fadeInRightBig"
          style={{bottom: 14, left: 3}}>
          <Text
            onPress={() => removeItem(item.item.id)}
            style={styles.closeButton}
            suppressHighlighting={true}>
            X
          </Text>
        </Animatable.View>
      </AnimatedItem>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#000000',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    marginLeft: 12,
    flex: 1,
    marginTop: 12,
    color: 'white',
  },
  closeButton: {
    color: 'white',
    fontSize: 16,
    marginLeft: 20,
  },
});

export default CardAnimation;

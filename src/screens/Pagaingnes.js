// import * as React from 'react';
// import {ActivityIndicator} from 'react-native';
// var _ = require('lodash');

// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   SectionList,
//   Button,
//   RefreshControl,
// } from 'react-native';

// function Item(item) {
//   return (
//     <View style={styles.item}>
//       <Text style={styles.title}>{item.title.first_name}</Text>
//     </View>
//   );
// }

// export default function testSectionList({navigation}) {
//   const [data, setData] = React.useState();
//   const [loading, setLoading] = React.useState(true);
//   const [refreshing, setRefreshing] = React.useState(false);
//   const [showRefreshingIndicator, setShowRefreshingIndicator] =
//     React.useState(false);

//   const dataIndex = React.useRef(0);
//   const totalHits = React.useRef(42); // In real example: Update this with first result from api

//   const fetchData = async (reset: boolean) => {
//     if (reset === true) dataIndex.current = 0;

//     // Make sure to return if no more data from API
//     if (dataIndex.current !== 0 && dataIndex.current >= totalHits.current)
//       return [];

//     // For example usage, select a random page
//     const fakepage = Math.round(Math.random()) * 2;
//     const resultObject = await fetch(
//       `https://reqres.in/api/users?page=${fakepage}`,
//     );
//     const result = await resultObject.json();

//     dataIndex.current++;

//     return {
//       title: `${dataIndex.current - 1}`,
//       data: await result.data,
//     };
//   };

//   const count = () => {
//     alert(data.length);
//   };

//   const checkPageNumbers = () => {
//     const numbers = data.map(item => parseInt(item.title));
//     const incremental = [...Array(data.length).keys()];

//     alert(_.isEqual(numbers, incremental));
//   };

//   const getInitialData = async () => {
//     const list = await fetchData(false);
//     if (!list) return;

//     setData([list]);

//     setLoading(false);
//   };

//   React.useEffect(() => {
//     getInitialData();
//   }, []);

//   const onEndReached = async () => {
//     const newItems = await fetchData(false);
//     if (!newItems.data.length) return;
//     setData([...data, newItems]);
//   };

//   const onRefresh = React.useCallback(async () => {
//     setShowRefreshingIndicator(true);

//     const newItems = await fetchData(true);
//     setData([newItems]);

//     setShowRefreshingIndicator(false);
//   }, [refreshing]);

//   if (loading) return <Text>Loading...</Text>;

//   return (
//     <SafeAreaView style={styles.container}>
//       <Button title={'Check numbers'} onPress={() => checkPageNumbers()} />
//       <Button title={'Check length'} onPress={() => count()} />
//       <SectionList
//         sections={data}
//         refreshing={refreshing}
//         refreshControl={
//           <RefreshControl
//             refreshing={showRefreshingIndicator}
//             onRefresh={onRefresh}
//           />
//         }
//         onEndReached={() => {
//           if (refreshing) return;
//           setRefreshing(true);
//           onEndReached().then(() => {
//             setRefreshing(false);
//           });
//         }}
//         onEndReachedThreshold={1}
//         keyExtractor={(item, index) => item + index}
//         renderItem={({item}) => <Item title={item} />}
//         renderSectionHeader={({section: {title}}) => (
//           <Text style={styles.header}>{title}</Text>
//         )}
//         ListFooterComponent={<ActivityIndicator size={'large'} />}
//         stickySectionHeadersEnabled={false}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 40,
//     marginHorizontal: 16,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 2,
//     marginVertical: 2,
//   },
//   header: {
//     fontSize: 16,
//   },
//   title: {
//     fontSize: 12,
//   },
// });


// import React, {useEffect, useState} from 'react';
// import {
//   ActivityIndicator,
//   View,
//   FlatList,
//   Text,
//   StyleSheet,
// } from 'react-native';

// const App = () => {
//   const [newData, setNewData] = useState([]);
//   const [isLoading, setLoading] = useState(false);
//   const [newValue, setNewValue] = useState(0);
//   useEffect(() => {
//     getData();
//   }, []);
//   const getData = () => {
//     setLoading(true);
//     fetch(
//       'https://api.instantwebtools.net/v1/passenger?page=0&size/10' + newValue,
//     )
//       .then(response => response.json())
//       .then(responseData => {
//         setLoading(false);
//         setNewData(responseData.data);
//       });
//   };
//   const renderItem = item => {
//     let newIndex = item.index;
//     return (
//       <View style={styles.main}>
//         <Text style={styles.text}>{item.name}</Text>
//         <Text style={styles.text}>{item.trips}</Text>
//       </View>
//     );
//   };
//   const ListFooter = () => {
//     return isLoading ? (
//       <View style={{marginTop: 10, alignItems: 'center'}}>
//         <ActivityIndicator
//           size={'large'}
//           color={'blue'}
//           style={{marginTop: 12}}
//         />
//       </View>
//     ) : null;
//   };
//   const onEndReached = () => {
//     {
//       setNewData({newValue: newValue + 1, isLoading: true}, getData());
//     }
//   };
//   return (
//     <View style={{flex: 1, marginTop: 90}}>
//       <FlatList
//         data={newData}
//         renderItem={({item, index}) => renderItem(item, index)}
//         showsVerticalScrollIndicator={false}
//         onEndReached={onEndReached}
//         onEndReachedThreshold={0}
//         ListFooterComponent={ListFooter}
//         keyExtractor={(item, index) => index.toString()}
//       />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   main: {
//     width: '77%',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 1,
//     marginHorizontal: 50,
//     paddingTop: 20,
//     margin: 12,
//   },
//   text: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     bottom: 8,
//   },
// });

// export default App;
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Image, Text} from 'react-native';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';
const App = () => {
  let limit = 10;
  let loadMore = true;
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [skip, setSkip] = useState(1);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    let query = `page=${skip}&size=${limit}`;
    fetch('https://api.instantwebtools.net/v1/passenger?' + query)
      .then(response => response.json())
      .then(response => {
        setLoading(false);
        if (response.data.lenght == 0) {
          loadMore = false;
        }
        console.log('newww', response.data);
        setData([...data, ...response.data]);
        setSkip(skip + 1);
      });
  };
  const onEndReached = () => {
    if (loadMore) {
      setLoading(true);
      getData();
    }
  };
  const renderItem = item => {
    return (
      <View style={{padding: 20, backgroundColor: 'lightgrey', margin: 12}}>
        <Text
          style={{
            fontSize: 20,
            margin: 5,
            color: 'black',
            textAlign: 'center',
          }}>
          Name : {item.name}
        </Text>
        <Text
          style={{
            fontSize: 20,
            margin: 5,
            color: 'black',
            textAlign: 'center',
          }}>
          Trips : {item.trips}
        </Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        decelerationRate={0}
        snapToAlignment={'center'}
        data={data}
        renderItem={({item}) => renderItem(item)}
        onEndReached={onEndReached}
      />
      {isLoading && (
        <ActivityIndicator
          style={{marginVertical: 10}}
          size={40}
          color={'#1f8ca4'}
        />
      )}
    </View>
  );
};

export default App;
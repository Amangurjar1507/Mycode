// const addData = dataArray => {
//     try {
//       if (realm) {
//         realm.write(() => {
//           dataArray.forEach(jsonData => {
//             realm.create('Person', jsonData, Realm.UpdateMode.Modified);
//           });
//         });
//       } else {
//         console.error('Realm not initialized yet.');
//       }
//     } catch (error) {
//       console.error('Error adding data:', error.message);
//     }
//   };

//   const searchValue = text => {
//     getData();
//     let filterData = searchBlogData?.filter(item => {
//       const itemData = `${item.first_name}`;
//       const textData = text.toLowerCase();
//       return itemData.toLowerCase().includes(textData);
//     });
//     setSearch(text);
//     text == '' ? setFilterDataValue([]) : setFilterDataValue(filterData);
//   };


// const App = () => {
//     const [realm, setRealm] = useState();
//     const [blogData, setBlogData] = useState([]);
//     const [searchBlogData, setSearchBlogData] = useState([]);
//     const [search, setSearch] = useState('');
//     const [dataBase, setDataBase] = useState(dataArray);
  
//     useEffect(() => {
//       const initializeRealm = async () => {
//         try {
//           const openedRealm = await Realm.open({
//             schema: [PersonSchema, ChildSchema],
//             schemaVersion: 1,
//           });
//           setRealm(openedRealm);
//           addData();
//           getData();
//         } catch (error) {
//           console.error('Error opening realm:', error.message);
//         }
//       };
//       initializeRealm();
//       return () => {
//         if (realm) {
//           realm.close();
//         }
//       };
//     }, []);
  
//     const addData = dataArray => {
//       try {
//         if (realm) {
//           realm.write(() => {
//             dataArray.forEach(jsonData => {
//               realm.create('Person', jsonData, Realm.UpdateMode.Modified);
//             });
//           });
//           // console.log('Data added successfully.');
//         } else {
//           console.error('Realm not initialized yet.');
//         }
//       } catch (error) {
//         console.error('Error adding data:', error.message);
//       }
//     };
//     const getData = () => {
//       try {
//         if (realm) {
//           const result = realm.objects('Person');
//           setBlogData(result);
//           setSearchBlogData(result);
//         } else {
//           console.error('Realm not initialized yet.');
//         }
//       } catch (error) {
//         console.error('Error getting data:', error.message);
//       }
//     };
//     addData(dataArray);
  
//     const searchValue = text => {
//       let filterData = searchBlogData?.filter(item => {
//         const itemData = `${item.first_name} `;
//         const textData = text.toLowerCase();
//         return itemData.toLowerCase().includes(textData);
//       });
//       setSearch(text);
//       setBlogData(filterData);
//     };
  
//     return (
//       <View style={style.container}>
//         <TextInput
//           style={style.inputStyle}
//           placeholderTextColor={'white'}
//           placeholder="Search Name"
//           value={search}
//           onChangeText={searchValue}
//         />
  
//         {realm && (
//           <>
//             <FlatList
//               showsVerticalScrollIndicator={true}
//               // scrollEnabled={true}
//               data={blogData}
//               renderItem={({item, index}) => (
//                 <View style={style.cardViewStyle}>
//                   <Text style={style.text}>{item.first_name}</Text>
//                 </View>
//               )}
//             />
//             <Button title="Get Data" onPress={getData} />
//           </>
//         )}
//       </View>
//     );
//   };
  
//   export default App;
  
  
import React, {useEffect, useState} from 'react';
import {View, Text, Button, TextInput, FlatList} from 'react-native';
import Realm from 'realm';
import MockData from './src/screens/Mock';
import style from './src/screens/style';

const PersonSchema = {
  name: 'Person',
  primaryKey: '_id',
  properties: {
    _id: 'string',
    first_name: 'string',
    last_name: 'string',
    email: 'string',
    children: 'Child[]',
  },
};

const dataArray = [
  {
    _id: '5df38f6e695566a48211da8f',
    first_name: 'Blankenship',
    last_name: 'Vincent',
    email: 'mailto:blankenshipvincent@rocklogic.com',
    children: [
      {
        first_name: 'Robinson',
        last_name: 'Alston',
        email: 'mailto:robinsonalston@rocklogic.com',
      },
    ],
  },

  {
    _id: '5df38f6e8a4caadc4aa0dc36',
    first_name: 'Frederick',
    last_name: 'Stuart',
    email: 'mailto:frederickstuart@rocklogic.com',
    children: [
      {
        first_name: 'Reed',
        last_name: 'Velez',
        email: 'mailto:reedvelez@rocklogic.com',
      },
    ],
  },
  {
    _id: '5df38f6ed1b60849d8418f07',
    first_name: 'Larson',
    last_name: 'Mcfarland',
    email: 'mailto:larsonmcfarland@rocklogic.com',
    children: [
      {
        first_name: 'Betty',
        last_name: 'Gardner',
        email: 'mailto:bettygardner@rocklogic.com',
      },
    ],
  },
  {
    _id: '5df38f6e309c25aad80b173a',
    first_name: 'Keisha',
    last_name: 'Hatfield',
    email: 'mailto:keishahatfield@rocklogic.com',
    children: [
      {
        first_name: 'Logan',
        last_name: 'Burt',
        email: 'mailto:loganburt@rocklogic.com',
      },
    ],
  },
  {
    _id: '5df38f6e6f1b688895260cf4',
    first_name: 'Alexis',
    last_name: 'Anthony',
    email: 'mailto:alexisanthony@rocklogic.com',
    children: [
      {
        first_name: 'Dale',
        last_name: 'Camacho',
        email: 'mailto:dalecamacho@rocklogic.com',
      },
    ],
  },
  {
    _id: '5df38f6e915a301a32d4dade',
    first_name: 'Bonner',
    last_name: 'Banks',
    email: 'mailto:bonnerbanks@rocklogic.com',
    children: [
      {
        first_name: 'Leach',
        last_name: 'Moran',
        email: 'mailto:leachmoran@rocklogic.com',
      },
    ],
  },
  {
    _id: '5df38f6e2d2efbfc82143676',
    first_name: 'Josephine',
    last_name: 'Conrad',
    email: 'mailto:josephineconrad@rocklogic.com',
    children: [
      {
        first_name: 'Warner',
        last_name: 'Aguirre',
        email: 'mailto:warneraguirre@rocklogic.com',
      },
    ],
  },
  {
    _id: '5ddf38f6e2d2efbfc82143676',
    first_name: 'Ram',
    last_name: 'Conrad',
    email: 'mailto:josephineconrad@rocklogic.com',
    children: [
      {
        first_name: 'Warner',
        last_name: 'Aguirre',
        email: 'mailto:warneraguirre@rocklogic.com',
      },
    ],
  },
  {
    _id: '5ddf38f6e2d2efbfc82143676',
    first_name: 'Goodman',
    last_name: 'Conrad',
    email: 'mailto:josephineconrad@rocklogic.com',
    children: [
      {
        first_name: 'Warner',
        last_name: 'Aguirre',
        email: 'mailto:warneraguirre@rocklogic.com',
      },
    ],
  },
  {
    _id: '5ddf38f6e2d2efbfc821436',
    first_name: 'Ram',
    last_name: 'Conrad',
    email: 'mailto:josephineconrad@rocklogic.com',
    children: [
      {
        first_name: 'Warner',
        last_name: 'Aguirre',
        email: 'mailto:warneraguirre@rocklogic.com',
      },
    ],
  },
  {
    _id: '5ddf38f6e2d2efbfc821436',
    first_name: 'Aguirre',
    last_name: 'Conrad',
    email: 'mailto:josephineconrad@rocklogic.com',
    children: [
      {
        first_name: 'Warner',
        last_name: 'Aguirre',
        email: 'mailto:warneraguirre@rocklogic.com',
      },
    ],
  },
  {
    _id: '5ddf38f6e2d2edfbfc821436',
    first_name: 'Kamlesh',
    last_name: 'Conrad',
    email: 'mailto:josephineconrad@rocklogic.com',
    children: [
      {
        first_name: 'Warner',
        last_name: 'Aguirre',
        email: 'mailto:warneraguirre@rocklogic.com',
      },
    ],
  },
  {
    _id: '5ddf38f6e2d2efbfcd821436',
    first_name: 'warneraguirre',
    last_name: 'Conrad',
    email: 'mailto:josephineconrad@rocklogic.com',
    children: [
      {
        first_name: 'Warner',
        last_name: 'Aguirre',
        email: 'mailto:warneraguirre@rocklogic.com',
      },
    ],
  },
  {
    _id: '5ddf38f6sse2d2efbfcd821436',
    first_name: 'Conrad',
    last_name: 'Conrdad',
    email: 'mailto:josephineconrad@rocklogic.com',
    children: [
      {
        first_name: 'Warner',
        last_name: 'Aguirre',
        email: 'mailto:warneraguirre@rocklogic.com',
      },
    ],
  },
  {
    _id: '5ddf38f6e2d2efbdfcd821436',
    first_name: 'Arroung',
    last_name: 'Conrad',
    email: 'mailto:josephineconrad@rocklogic.com',
    children: [
      {
        first_name: 'Warner',
        last_name: 'Aguirre',
        email: 'mailto:warneraguirre@rocklogic.com',
      },
    ],
  },
  {
    _id: '5ddf38f6e2d2efbdfcd821436',
    first_name: 'Kara',
    last_name: 'Conrad',
    email: 'mailto:josephineconrad@rocklogic.com',
    children: [
      {
        first_name: 'Warner',
        last_name: 'Aguirre',
        email: 'mailto:warneraguirre@rocklogic.com',
      },
    ],
  },
];
const ChildSchema = {
  name: 'Child',
  properties: {
    first_name: 'string',
    last_name: 'string',
    email: 'string',
  },
};

const App = () => {
  const [realm, setRealm] = useState();
  const [blogData, setBlogData] = useState([]);
  const [searchBlogData, setSearchBlogData] = useState([]);
  const [search, setSearch] = useState('');
  const [dataBase, setDataBase] = useState(dataArray);

  useEffect(() => {
    const initializeRealm = async () => {
      try {
        const openedRealm = await Realm.open({
          schema: [PersonSchema, ChildSchema],
          schemaVersion: 1,
        });
        setRealm(openedRealm);
        addData();
        getData();
      } catch (error) {
        console.error('Error opening realm:', error.message);
      }
    };
    initializeRealm();
    return () => {
      if (realm) {
        realm.close();
      }
    };
  }, []);

  const addData = dataArray => {
    try {
      if (realm) {
        realm.write(() => {
          dataArray.forEach(jsonData => {
            realm.create('Person', jsonData, Realm.UpdateMode.Modified);
          });
        });
        // console.log('Data added successfully.');
      } else {
        console.error('Realm not initialized yet.');
      }
    } catch (error) {
      console.error('Error adding data:', error.message);
    }
  };
  const getData = () => {
    try {
      if (realm) {
        const result = realm.objects('Person');
        setBlogData(result);
        setSearchBlogData(result);
      } else {
        console.error('Realm not initialized yet.');
      }
    } catch (error) {
      console.error('Error getting data:', error.message);
    }
  };
  addData(dataArray);

  const searchValue = text => {
    let filterData = searchBlogData?.filter(item => {
      const itemData = `${item.first_name} `;
      const textData = text.toLowerCase();
      return itemData.toLowerCase().includes(textData);
    });
    setSearch(text);
    setBlogData(filterData);
  };

  return (
    <View style={style.container}>
      <TextInput
        style={style.inputStyle}
        placeholderTextColor={'white'}
        placeholder="Search Name"
        value={search}
        onChangeText={searchValue}
      />

      {realm && (
        <>
          <FlatList
            showsVerticalScrollIndicator={true}
            // scrollEnabled={true}
            data={blogData}
            renderItem={({item, index}) => (
              <View style={style.cardViewStyle}>
                <Text style={style.text}>{item.first_name}</Text>
              </View>
            )}
          />
          <Button title="Get Data" onPress={getData} />
        </>
      )}
    </View>
  );
};

export default App;


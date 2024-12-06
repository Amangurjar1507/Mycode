import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persist} from 'zustand/middleware';

const initialValue = {
  Data: [],
};

export const useStore = create(
  persist(
    (setData, getData) => ({
      initialValue,
      add: newValue => setData({Data: [...getData().Data, newValue]}),
      edit: (item, editData) =>
        setData({
          Data: getData().Data.map(newId =>
            newId.id === item ? {...newId, ...editData} : newId,
          ),
        }),
      delete: item =>
        setData({
          Data: getData().Data.filter(itemId => itemId.id !== item),
        }),
    }),
    {
      name: 'allStoreData',
      getStorage: () => AsyncStorage,
    },
  ),
);

// rnwatermelondbapp-main

// import {create} from 'zustand';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {persist} from 'zustand/middleware';

// export const useStore = create(
//   persist(
//     (setData, getData) => ({
//       Data: [],
//       add: newValue => setData({Data: [...getData().Data, newValue]}),
//       edit: (bearId, updatedBear) =>
//         setData({
//           Data: getData().Data.map(newId =>
//             newId.id === bearId ? {...newId, ...updatedBear} : newId,
//           ),
//         }),
//       delete: bearId =>
//         setData({
//           Data: getData().Data.filter(deId => deId.id !== bearId),
//         }),
//     }),
//     {
//       name: 'allStoreData',
//       getStorage: () => AsyncStorage,
//     },
//   ),
// );

// export const useBearStore = create(
//   persist(
//     (set, get) => ({
//       bears: 0,
//       addABear: () => set({bears: get().bears + 1}),
//     }),
//     {
//       name: 'food-storage',
//       storage: createJSONStorage(() => sessionStorage),
//     },
//   ),
// );

// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   FlatList,
//   Alert,
// } from 'react-native';
// import {useStore, useBearStore} from './dataStore';

// const AddValue = () => {
//   const [value, setValue] = useState('');
//   const [editName, setEditName] = useState(null);
//   const allData = useStore(state => state.Data);
//   const addValue = useStore(state => state.add);
//   const editValue = useStore(state => state.edit);
//   const deleteValue = useStore(state => state.delete);
//   const addCount = useStore(state => useBearStore);
//   console.log('allData', allData);

//   const handleAddBear = () => {
//     if (value == '') {
//       Alert.alert('please enter your name');
//     } else {
//       if (editName !== null) {
//         editValue(editName, {name: value});
//         setEditName(null);
//       } else {
//         const newData = {id: allData.length + 1, name: value};
//         addValue(newData);
//       }
//       setValue('');
//     }
//   };

//   const onEdit = bearId => {
//     setEditName(bearId);
//     const bearToEdit = allData.find(bear => bear.id === bearId);
//     if (bearToEdit) {
//       setValue(bearToEdit.name);
//     }
//   };

//   return (
//     <View>
//       <View>
//         <View
//           style={{
//             marginHorizontal: 20,
//             borderWidth: 1,
//             marginTop: 20,
//             borderRadius: 12,
//           }}>
//           <TextInput
//             value={value}
//             onChangeText={value => setValue(value)}
//             placeholder="Enter Name"
//             placeholderTextColor={'black'}
//             style={{
//               fontSize: 18,
//               color: 'black',
//               marginLeft: 12,
//             }}
//           />
//         </View>
//         <TouchableOpacity
//           onPress={handleAddBear}
//           style={{
//             backgroundColor: 'green',
//             borderRadius: 10,
//             marginHorizontal: 21,
//             marginTop: 20,
//             paddingVertical: 11,
//             flexShrink: 1,
//           }}>
//           <Text style={{textAlign: 'center', color: 'white', fontSize: 18}}>
//             Add
//           </Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={allData}
//         keyExtractor={bear => bear.id.toString()}
//         renderItem={({item: bear}) => (
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'center',
//               alignItems: 'center',
//               marginTop: 20,
//               backgroundColor: '#4776E652',
//               padding: 8,
//               marginHorizontal: 20,
//               borderRadius: 12,
//             }}>
//             <Text
//               style={{
//                 color: 'black',
//                 fontSize: 20,
//                 flex: 1,
//                 marginLeft: 20,
//                 lineHeight: 22,
//               }}>
//               {bear.name}
//             </Text>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//               <TouchableOpacity
//                 onPress={() => deleteValue(bear.id)}
//                 style={{
//                   borderRadius: 10,
//                   padding: 5,
//                 }}>
//                 <Text style={{textAlign: 'left', color: 'red', fontSize: 18}}>
//                   Delete
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 onPress={() => onEdit(bear.id)}
//                 style={{
//                   borderRadius: 10,
//                   padding: 12,
//                 }}>
//                 <Text style={{textAlign: 'left', color: 'green', fontSize: 18}}>
//                   Edit
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default AddValue;


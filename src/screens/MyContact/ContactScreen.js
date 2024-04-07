import {View, Text, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import {AlphabetList} from 'react-native-section-alphabet-list';
import contactData from './contactData';
import style from './contact.style';

const ContactScreen = () => {
  const [name, setName] = useState();
  const [dataFilter, setDataFilter] = useState(contactData);
  const [Data, setData] = useState(contactData);

  const handleSearch = text => {
    if (text?.length == 0 || setName(text)) {
      setName(text);
      const filter = dataFilter?.filter(item => {
        const itemData = item?.value;
        const textData = text.toLowerCase();
        return itemData.toLowerCase().includes(textData);
      });
      setData(filter);
      {
        name == '' ? setDataFilter(filter) : setData(filter);
      }
    }
  };
  const renderItem = item => {
    return (
      <View style={style.viewStyle}>
        <View style={style.contactCon}>
          <View>
            <Image
              source={{
                uri: item.profile,
              }}
              style={style.profileStyle}
            />
            <View style={{position: 'absolute'}}>
              <Image
                source={{
                  uri: item.image,
                }}
                style={style.image}
              />
            </View>
          </View>
          <View style={style.contactDat}>
            <Text style={style.name}>{item.value}</Text>
            <Text style={style.phoneNumber}>indore</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={style.container}>
      <View style={style.mainView}>
        {/* <TextInput
          style={{
            height: 45,
            justifyContent: 'center',
            backgroundColor: 'white',
            marginHorizontal: 20,
            alignItems: 'center',
          }}
          placeholder="enter name"
          placeholderTextColor={'red'}
          value={name}
          onChangeText={text => handleSearch(text)}
        /> */}
        <AlphabetList
          style={style.scrollContainer}
          data={Data}
          renderCustomItem={renderItem}
          renderCustomSectionHeader={() => {}}
          indexLetterStyle={style.indexLetterStyle}
          letterListContainerStyle={style.letterListContainerStyle}
          indexLetterContainerStyle={style.indexLetterContainerStyle}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
export default ContactScreen;

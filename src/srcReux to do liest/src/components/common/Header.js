import React, {memo} from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import style from '../headerStyle';
import auth from '@react-native-firebase/auth';

 const Header: React.FC<PropType> = props => {
  const navigation = useNavigation ();

   const goBack = (): void => {
    navigation.goBack();
  };
  const handleSignOut = async () => {
    try {
      await auth().signOut();
      console.log('User signed out!');
      navigation.navigate('Login')
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };
  return (
    <View style={{ flexDirection: 'row',
      backgroundColor:"white",
      height:55,
      justifyContent:"center",
      alignItems:"center"
    }}>
      {props.backIcon && (
        <TouchableOpacity
          onPress={goBack}
          activeOpacity={0.7}
          style={style.backView}>
            <Image source={{uri:"https://static.vecteezy.com/system/resources/previews/000/589/878/original/vector-back-icon.jpg"}}
            style={{height:22,width:22}}
            
            />
         </TouchableOpacity>
      )}
 
      <Text style={[style.title, props.titleStyle]}>{props.title}</Text>
      {props.logout && (
        <TouchableOpacity
          onPress={handleSignOut}
          activeOpacity={0.7}
          style={style.backView}>
      <Text style={{marginTop:10,margin:12,color:"red"}}>Logout</Text>
         </TouchableOpacity>
      )}
      
    </View>
  );
};

export default memo(Header);
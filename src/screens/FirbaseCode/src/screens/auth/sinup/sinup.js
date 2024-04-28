import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
  Alert,
} from 'react-native';
 import { useNavigation } from '@react-navigation/native';
import Button from '../../../components/common/button/Button';
import InputComponent from '../../../components/common/InputComponent/InputComponent';
import imageIndex from '../../../assets/imageIndex';
import style from './login.style';
import { firebase } from "@react-native-firebase/database";
import Snackbar from 'react-native-snackbar';
 const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading ,setisLoading] =  useState(false)

  const navigation = useNavigation();
  const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");

  const signupUserWithEmailAndPassword = () => {
    if (!strongRegex.test(email)) {
      alert('Please enter a valid email');
      return;
    } else if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }
    setisLoading(true);
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
          setisLoading(false);
         Snackbar.show({
          text: 'You are Sinup successfully',
          duration: 3000,
          backgroundColor:"green",
          action: {
            text: 'UNDO',
            textColor: 'white',
           },
        });
         navigation.navigate("Login");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          alert("The email address is already in use");
          setisLoading(false);
         } else if (error.code === "auth/weak-password") {
          alert("Password is too weak");
          setisLoading(false);
         } else if (error.code === "auth/invalid-email") {
          alert("Invalid email address");
          setisLoading(false);
        } else if (error.code === "auth/internal-error") {
          alert("Internal error occurred");
          setisLoading(false);
        } else {
          console.error(error);
          setisLoading(false);
  
        }
        setisLoading(false);
      });
  }; 
  
  
  return (
    <View style={style.container}>
      <KeyboardAvoidingView
        style={style.keyboardContainer}
        behavior={Platform.OS == 'ios' ? 'height' : undefined}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.scrollView}>
             <View style ={{   
               alignSelf: 'center',    
}}>

            <Image source={imageIndex.heroS} resizeMode="center"  />
            </View>

<Text style={{
  fontSize: 25,
  color: "black",
 marginHorizontal: 20,
 textAlign: 'center',
 fontWeight:"500"
}}>
Create Account
          </Text>
 
         
          <View style={{    marginHorizontal: 32,
          
}}>

          <InputComponent 
          placeholder='Enter email'
          value={email}
          onChangeText={setEmail}
          placeholderTextColor ={"black"}          
          
          />
                   
          <InputComponent 
           value={password}
           placeholder='Enter Password'

           onChangeText={setPassword}
           placeholderTextColor ={"black"}          

          />
          <View style={{marginTop: 45,
}}>

<Button  text ="Create An Account"  onPress={signupUserWithEmailAndPassword} 
          isLoading={isLoading}
          />
           
           </View>
             
            
          </View>
 
         </ScrollView>
      </KeyboardAvoidingView>
    </View>
      );
};

export default Signup;

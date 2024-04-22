import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
   TouchableOpacity,
  View,
  Alert
} from 'react-native';
 import style from './login.style';
import InputComponent from '../../../components/common/InputComponent/InputComponent';
  import imageIndex from '../../../assets/imageIndex';
import {useNavigation} from '@react-navigation/native';
import { firebase } from "@react-native-firebase/database";
 import Button from '../../../components/common/button/Button';
import Snackbar from 'react-native-snackbar';



const Login = () => {
 
const [email ,Setemail] =  useState();
const [password ,setPassword] =  useState()
const [isLoading ,setisLoading] =  useState(false)
const navigation = useNavigation();
const signupButton =()=>{
  navigation.navigate("Sinup")
}
 

const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
const loginUserWithEmailPassword = () => {
  if (!strongRegex.test(email)) {
    alert('Please enter a valid email');
    return;
  } else if (password.length < 6) {
    alert('Password must be at least 6 characters long');
    return;
  }

  setisLoading(true);

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setisLoading(false);
      console.log('User:', user);
      Setemail("");
      setPassword("")
      Snackbar.show({
        text: 'You are logged in successfully',
        duration: 3000,
        backgroundColor:"green",
        action: {
           textColor: 'white',
         },
      });
       navigation.navigate("Home", { user });
    })
    .catch((error) => {
      setisLoading(false);
      switch (error.code) {
        case "auth/user-not-found":
        case "auth/wrong-password":
          alert("Invalid email or password");
          setPassword("");
          setEmail("");
          break;
        case "auth/invalid-email":
          alert("Invalid email address");
          setPassword("");
          setEmail("");
          break;
        case "auth/internal-error":
          alert("Internal error occurred");
          setPassword("");
          setEmail("");
          break;
        default:
          alert("An error occurred. Please try again.");
          console.error(error);
          setPassword("");
          setEmail("");
          break;
      }
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
Sign In To Your Account    
      </Text>
             

         
          <View style={{    marginHorizontal: 32,
          
}}>

          <InputComponent 
          placeholder='Enter your email address'
          value={email}
          onChangeText={Setemail}
          placeholderTextColor ={"black"}          
          
          />
                   
          <InputComponent 
           value={password}
           placeholder='Enter your Password'

           onChangeText={setPassword}
           placeholderTextColor ={"black"}          

          />
          <View style={{    marginTop: 45,
}}>
          <Button  text ="Login"  onPress={loginUserWithEmailPassword} 
          
          isLoading={isLoading}
          />
           </View>

              <Text style={style.signupText} onPress={signupButton}>Sign up</Text>
           </View>
 
         </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

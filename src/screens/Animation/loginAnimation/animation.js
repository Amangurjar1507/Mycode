// import React, {useState} from 'react';
// import {
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
// } from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import CardAnimation from './src/Screen/CardAnimation';

// const SignupScreen = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [show, setShow] = useState(true);
//   const zoomOut = {
//     0: {
//       opacity: 0.8,
//       scale: 0.8,
//     },
//     0.8: {
//       opacity: 0.5,
//       scale: 2,
//     },
//     1: {
//       opacity: 1,
//       scale: 1,
//     },
//   };

//   return (
//     <ScrollView
//       style={{
//         flexGrow: 1,
//       }}>
//       {show ? (
//         <>
//           <Animatable.View
//             animation="fadeInDown"
//             direction="normal"
//             style={{marginTop: 160, justifyContent: 'center'}}>
//             <Animatable.View animation="fadeInUp" style={styles.formContainer}>
//               <Animatable.Image
//                 delay={1000}
//                 source={{
//                   uri: 'https://trabo.co/img/_Sign_Up_Illustration-8.png',
//                 }}
//                 animation="fadeInDown"
//                 style={{
//                   height: 200,
//                   width: 200,
//                   alignItems: 'center',
//                   marginTop: 20,
//                   resizeMode: 'stretch',
//                 }}></Animatable.Image>
//               <Animatable.Text
//                 delay={800}
//                 animation={'fadeIn'}
//                 style={styles.title}>
//                 Welcome Back!{' '}
//               </Animatable.Text>
//               <Animatable.View
//                 animation="fadeInUp"
//                 delay={1600}
//                 style={{
//                   width: '80%',
//                   height: 52,
//                   borderWidth: 1,
//                   marginBottom: 10,
//                   paddingHorizontal: 16,
//                   borderRadius: 10,
//                   justifyContent: 'center',
//                   borderColor: username == '' ? 'grey' : '#a7e6ab',
//                   margin: 3,
//                 }}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Mobile Number"
//                   placeholderTextColor={'black'}
//                   value={username}
//                   onChangeText={text => setUsername(text)}
//                 />
//               </Animatable.View>
//               <Animatable.View
//                 animation="fadeInUp"
//                 delay={1600}
//                 style={{
//                   width: '80%',
//                   height: 52,
//                   borderColor: password == '' ? 'grey' : '#a7e6ab',
//                   borderWidth: 1,
//                   marginBottom: 10,
//                   paddingHorizontal: 16,
//                   borderRadius: 10,
//                   justifyContent: 'center',
//                   margin: 3,
//                 }}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Password"
//                   secureTextEntry
//                   value={password}
//                   placeholderTextColor={'#0d0d0d'}
//                   onChangeText={text => setPassword(text)}
//                 />
//               </Animatable.View>
//               <Animatable.Text
//                 animation="fadeInUp"
//                 delay={1600}
//                 style={{
//                   left: 90,
//                   marginTop: 7,
//                   fontSize: 14,
//                   fontWeight: '600',
//                   color: 'black',
//                 }}>
//                 Forgot Password?
//               </Animatable.Text>
//               <Animatable.View
//                 animation={'fadeInRightBig'}
//                 delay={1200}
//                 style={{
//                   alignItems: 'center',
//                   paddingVertical: 20,
//                   flex: 1,
//                   marginTop: 80,
//                 }}>
//                 <TouchableOpacity
//                   style={styles.button}
//                   onPress={() => {
//                     setShow(!show);
//                   }}>
//                   <Text style={styles.buttonText}>Login</Text>
//                 </TouchableOpacity>
//               </Animatable.View>
//             </Animatable.View>
//           </Animatable.View>
//         </>
//       ) : (
//         <CardAnimation />
//       )}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   formContainer: {
//     alignItems: 'center',
//   },

//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     marginTop: 30,
//   },
//   input: {
//     fontSize: 16,
//     color: 'black',
//   },
//   button: {
//     backgroundColor: '#000000',
//     borderRadius: 5,
//     alignItems: 'center',
//     height: 43,
//     justifyContent: 'center',
//     paddingHorizontal: 128,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 18,
//     textAlign: 'center',
//   },
// });

// export default SignupScreen;


// Trabo - Travel Booking Engine
// https://trabo.co
import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import CardAnimation from './src/Screen/CardAnimation';

const SignupScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(true);
  const zoomOut = {
    0: {
      opacity: 0.8,
      scale: 0.8,
    },
    0.8: {
      opacity: 0.5,
      scale: 2,
    },
    1: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <ScrollView
      style={{
        flexGrow: 1,
      }}>
      {show ? (
        <>
          <Animatable.View
            animation="fadeInDown"
            direction="normal"
            style={{marginTop: 160, justifyContent: 'center'}}>
            <Animatable.View animation="fadeInUp" style={styles.formContainer}>
              <Animatable.Image
                delay={1000}
                source={{
                  uri: 'https://trabo.co/img/_Sign_Up_Illustration-8.png',
                }}
                  animation="fadeInDown"
                style={{
                  height: 200,
                  width: 200,
                  alignItems: 'center',
                  marginTop: 20,
                  resizeMode: 'stretch',
                }}></Animatable.Image>
              <Animatable.Text
                delay={800}
                animation={'fadeIn'}
                style={styles.title}>
                Welcome Back!{' '}
              </Animatable.Text>
              <Animatable.View
                animation="fadeInUp"
                delay={1600}
                style={{
                  width: '80%',
                  height: 52,
                  borderWidth: 1,
                  marginBottom: 10,
                  paddingHorizontal: 16,
                  borderRadius: 10,
                  justifyContent: 'center',
                  borderColor: username == '' ? 'grey' : '#a7e6ab',
                  margin: 3,
                }}>
                <TextInput
                  style={styles.input}
                  placeholder="Mobile Number"
                  placeholderTextColor={'black'}
                  value={username}
                  onChangeText={text => setUsername(text)}
                />
              </Animatable.View>
              <Animatable.View
                animation="fadeInUp"
                delay={1600}
                style={{
                  width: '80%',
                  height: 52,
                  borderColor: password == '' ? 'grey' : '#a7e6ab',
                  borderWidth: 1,
                  marginBottom: 10,
                  paddingHorizontal: 16,
                  borderRadius: 10,
                  justifyContent: 'center',
                  margin: 3,
                }}>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry
                  value={password}
                  placeholderTextColor={'#0d0d0d'}
                  onChangeText={text => setPassword(text)}
                />
              </Animatable.View>
              <Animatable.Text
                animation="fadeInUp"
                delay={1600}
                style={{
                  left: 90,
                  marginTop: 7,
                  fontSize: 14,
                  fontWeight: '600',
                  color: 'black',
                }}>
                Forgot Password?
              </Animatable.Text>
              <Animatable.View
                animation={'fadeInRightBig'}
                delay={1200}
                style={{
                  alignItems: 'center',
                  paddingVertical: 20,
                  flex: 1,
                  marginTop: 80,
                }}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    setShow(!show);
                  }}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
              </Animatable.View>
            </Animatable.View>
          </Animatable.View>
        </>
      ) :<Text>lpso0di9cj</Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  formContainer: {
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 30,
  },
  input: {
    fontSize: 16,
    color: 'black',
  },
  button: {
    backgroundColor: '#000000',
    borderRadius: 5,
    alignItems: 'center',
    height: 43,
    justifyContent: 'center',
    paddingHorizontal: 128,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default SignupScreen;

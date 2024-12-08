// import React, {useEffect} from 'react';
// import {View, Button} from 'react-native';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,

// } from '@react-native-google-signin/google-signin';

// const App = () => {
//   useEffect(() => {
//     GoogleSignin.configure({
//       webClientId:
//         '232730700241-4ak0lgagi1ig3u0oeo76cauk85ea3k74.apps.googleusercontent.com',
//     });
//   }, []); // Only configure once on component mount

//   const signIn = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       console.log('User Info --> ', userInfo);
//     } catch (error) {
//       console.error('Google Sign-In Error --> ', error.code, error.message);

//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         console.log('User Cancelled the Login Flow');
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         console.log('Signing In');
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         console.log('Play Services Not Available or Outdated');
//       } else {
//         console.log('Some Other Error Happened');
//       }
//     }
//   };

//   return (
//     <View>
//       <GoogleSigninButton
//         style={{width: 192, height: 48, marginTop: 60}}
//         size={GoogleSigninButton.Size.Wide}
//         color={GoogleSigninButton.Color.Dark}
//         onPress={signIn}
//       />
//     </View>
//   );
// };
// export default App;
import {View, Text} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import {Circle, Line, Rect, Svg} from 'react-native-svg';

const Wallet: React.FC = () => {
  const data = [
    {
      id: 'A',
      label: '',
      children: [
        {
          id: 'B',
          label: '',
          children: [
            {
              id: 'D',
              label: '',
              children: [
                {id: 'K', label: 'K', children: []},
                {id: 'L', label: 'L', children: []},
              ],
            },
            {id: 'E', label: 'E', children: []},
            {
              id: 'F',
              label: '',
              children: [{id: 'M', label: 'M', children: []}],
            },
          ],
        },
        {
          id: 'C',
          label: '',
          children: [
            // {
            //   id: 'G',
            //   label: 'G',
            //   children: [
            //     {id: 'Z', label: 'Z', children: []},
            //     {id: 'Y', label: 'Y', children: []},
            //   ],
            // },
            // {id: 'H', label: 'H', children: []},
            // {id: 'I', label: 'I', children: []},
            // {id: 'J', label: 'J', children: []},
          ],
        },
      ],
    },
  ];

  const TreeNode = ({node, x = 50, y = 50}) => {
    return (
      <View
        style={{
          alignItems: 'center',
        }}>
        <Svg height="100" width="100">
          <Circle
            cx={x}
            cy={y}
            r="20"
            fill="red"
            stroke="red"
            strokeWidth="2"
          />
        </Svg>
        {node.children && node.children.length > 0 && (
          <Line
            x1={x}
            y1={y}
            x2={node.children[0].x}
            y2={node.children[0].y}
            stroke="pink"
            strokeWidth="2"
          />
        )}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          {node.children &&
            node.children.map((child, index) => (
              <TreeNode
                key={child.id}
                node={child}
                x={x + (index - (node.children.length - 1) / 2) * 60} // Adjust spacing here
                y={y + 60} // Adjust vertical spacing here
              />
            ))}
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, marginTop: 45, backgroundColor: 'white'}}>
      <View>
        <ScrollView horizontal>
          <TreeNode node={data[0]} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Wallet;

{/* <key>CFBundleURLTypes</key>
<array>
  <dict>
  <key>CFBundleURLSchemes</key>
  <array>
    <string>fb6403685536365667</string>
  </array>
  </dict>
</array>
<key>FacebookAppID</key>
<string>6403685536365667</string>
<key>FacebookClientToken</key>
<string>CLIENT-TOKEN</string>
<key>FacebookDisplayName</key>
<string>DemoFire</string>
<key>LSApplicationQueriesSchemes</key>
<array>
  <string>fbapi</string>
  <string>fb-messenger-share-api</string>
  <string>fbauth2</string>
  <string>fbshareextension</string>
</array>

#import <FBSDKCoreKit/FBSDKCoreKit.h>


import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

export default class App extends Component {
  state = {userInfo: {}};

  getInfoFromToken = token => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id, name,  first_name, last_name',
      },
    };
    const profileRequest = new GraphRequest(
      '/me',
      {token, parameters: PROFILE_REQUEST_PARAMS},
      (error, result) => {
        if (error) {
          console.log('login info has error: ' + error);
        } else {
          this.setState({userInfo: result});
          console.log('result:', result);
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };

  render() {
    return (
      <View style={{flex: 1, margin: 50}}>
        <LoginButton
          onLoginFinished={(error, result) => {
            if (error) {
              console.log('login has error: ' + result.error);
            } else if (result.isCancelled) {
              console.log('login is cancelled.');
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                const accessToken = data.accessToken.toString();
                this.getInfoFromToken(accessToken);
              });
            }
          }}
          onLogoutFinished={() => this.setState({userInfo: {}})}
        />
        {this.state.userInfo.name && (
          <Text style={{fontSize: 16, marginVertical: 16}}>
            Logged in As {this.state.userInfo.name}
          </Text>
        )}
      </View>
    );
  }
}




 */}


 import {AccessToken, LoginManager} from 'react-native-fbsdk-next';
 const facebookLogin = () => {
  /* facebook Login **/
  LoginManager.logInWithPermissions(['public_profile', 'email'])
    .then((result: any) => {
      if (result.isCancelled) {
        Log({logLable: 'Facebook login cancel', logValue: ''});
      } else {
        Log({
          logLable: 'Login success with permissions:',
          logValue: result.grantedPermissions.toString(),
        });
        return AccessToken.getCurrentAccessToken();
      }
    })
    .then((data) => {
      // const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
      fetch(
        'https://graph.facebook.com/v2.5/me?fields=email,name,picture&access_token=' +
          data.accessToken,
      )
        .then(response => response.json())
        .then(json => {
          Log({logLable: 'json', logValue: json});
        })
        .catch(err => {
          // console.log('ERROR GETTING DATA FROM FACEBOOK', err);
        });
    })
    .then(currentUser => {
      // console.log('Facebook login user:', currentUser);
    })
    .catch(error => {
      // console.log('Facebook login fail:', error);
    });
};


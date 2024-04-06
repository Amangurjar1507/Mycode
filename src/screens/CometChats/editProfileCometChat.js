import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {useSelector} from 'react-redux';
import {AuthNavigationProps} from '../../../navigation/stacks/authStack';
import axiosInstance from '../../../services/api';
import constant from '../../../services/config/constant';
import params from '../../../services/config/params';
import {RootState} from '../../../services/redux/store';
import {
  checkString,
  checkUserName,
  isValidUrl,
} from '../../../utility/validation/stringValidation';
import validationMessage from '../../../utility/validation/validationMessage';
import {EditProfileProps, ErrorProps} from './editProfileScreen.interface';
import {CometChat} from '@cometchat/chat-sdk-react-native';
 
const editProfileScreenController = (): EditProfileProps => {
  const navigation = useNavigation<AuthNavigationProps>();
  const {userData, token, cometChatData}: any = useSelector(
    (state: RootState) => state.userReducer,
  );
  const [name, setName] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [links, setLinks] = useState<string>('');
  const [bio, setBio] = useState<any>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [profileImage, setProfileImage] = useState<any>();
  const [newImage, setNewImage] = useState(null);
  const [errorObject, setErrorObject] = useState<ErrorProps>({
    nameError: undefined,
    userNameError: undefined,
    linksError: undefined,
    bioError: undefined,
  });

  useEffect(() => {
    setName(userData?.name ?? '');
    setUserName(userData?.userName ?? '');
    setLinks(userData?.links ?? '');
    setProfileImage(userData?.profile ?? '');
    setBio(userData?.Bio ?? '');
  }, [userData]);

  /* Android image picker permission  /
  useEffect(() => {
    const requestPermission = async () => {
      try {
        const cameraPermission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        const galleryPermission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
        );
        if (
          cameraPermission === PermissionsAndroid.RESULTS.GRANTED &&
          galleryPermission === PermissionsAndroid.RESULTS.GRANTED
        ) {
        } else {
        }
      } catch (error) {}
      requestPermission();
    };
  }, []);

  const openImagePicker = async () => {
    try {
      const image = await ImagePicker.openPicker({
        mediaType: 'photo',
        compressImageQuality: 1,
      });

      let imageData = {
        name: 'Idea_img.jpeg',
        uri: image.path,
        type: 'image/jpeg',
      };

      setProfileImage(imageData);
    } catch (error) {}
  };

  const updateProfileWithExternalImage = async (data: any) => {
    console.log('data data data:', data?.data.profile);

    try {
      const loggedInUser = await CometChat.getLoggedinUser();
      if (loggedInUser) {
        const appId = cometChat.cometChatAppId;
        console.log('profileImage?.uri', profileImage?.uri);
        let imageData = {
          name: 'Idea_img.jpeg',
          uri: profileImage.uri,
          type: 'image/jpeg',
        };
        try {
          if (profileImage) {
            const updateUrl = `https://${appId}.api-in.cometchat.io/v3/users/${'abhay'}`;
            // const formData = new FormData();
            // formData.append(
            //   'avatar',
            //   'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxLzI3OS1wYWkxNTc5LW5hbS1qb2IxNTI5LnBuZw.png',
            // );
            // formData.append('name', name);
            const updateOptions = {
              method: 'PUT',
              headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                // 'Content-Type': 'multipart/form-data',
                apikey: 'https://data-eu.cometchat.io/avatars/photo123.jpg',
              },
              body: JSON.stringify({
                // "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxLzI3OS1wYWkxNTc5LW5hbS1qb2IxNTI5LnBuZw.png"
                // avatar: `https://${data?.data.profile}`,
                // avatar: imageData,
                // name: name,
                name: 'abhay',
                // avatar: base64Image,
              }),
              // body: formData,
            };
            fetch(updateUrl)
              .then(res => {})
              // .then(json => console.log(json))
              .catch(err => console.error('error: catch' + err));
            const updateResponse = await fetch(updateUrl, updateOptions);
            const updateJson = await updateResponse.json();
            console.log('Additional details updated:', updateJson);
          } else {
            console.log('Image URL is missing.');
          }
        } catch (uploadError) {
          console.log('Error uploading image:', uploadError);
        }
      }
    } catch (error) {}
  };

  // const updateProfileWithExternalImage = async (data: any) => {
  //   try {
  //     const loggedInUser = await CometChat.getLoggedinUser();
  //     if (loggedInUser) {
  //       const appId = cometChatConstants.APP_ID;

  //       if (profileImage) {
  //         const updateUrl = `https://${appId}.api-in.cometchat.io/v3/users/${'65eb16fa46349e744b4ba3c5'}`;

  //         const formData = new FormData();
  //         // formData.append('avatar', {
  //         //   name: 'Idea_img.jpeg',
  //         //   uri: profileImage.uri,
  //         //   type: 'image/jpeg',
  //         // });
  //         formData.append('name', name);

  //         const updateOptions = {
  //           method: 'PUT',
  //           headers: {
  //             'Content-Type': 'multipart/form-data',
  //             apikey: cometChatConstants.AUTH_KEY,
  //           },
  //           body: formData,
  //         };

  //         const updateResponse = await fetch(updateUrl, updateOptions);
  //         const updateJson = await updateResponse.json();
  //         console.log('Additional details updated:', updateJson);
  //       } else {
  //         console.log('Image URI is missing.');
  //       }
  //     }
  //   } catch (error) {
  //     console.log('Failed to update user profile:', error);
  //   }
  // };

  //   try {
  //     const loggedInUser = await CometChat.getLoggedinUser();
  //     if (profileImage) {
  //       const appId = cometChatConstants.APP_ID;
  //       const updateUrl = `https://${appId}.api-in.cometchat.io/v3/users/${'65eb16fa46349e744b4ba3c5'}`;
  //       const formData = new FormData();
  //       // formData.append('avatar', {
  //       //   name: 'Idea_img.jpeg',
  //       //   uri: profileImage.uri,
  //       //   type: 'image/jpeg',
  //       // });
  //       // formData.append('name', name);
  //       const updateOptions = {
  //         method: 'PUT',
  //         headers: {
  //           accept: 'application/json',

  //           'Content-Type': 'multipart/form-data',
  //           apikey: cometChatConstants.AUTH_KEY,
  //         },
  //         // body: ,
  //         body: JSON.stringify({
  //           name: 'jf',
  //           // metadata: {
  //           //   '@private': {
  //           //     email: 'user@email.com',
  //           //     contactNumber: '0123456789',
  //           //   },
  //           // },
  //           // tags: ['tag1'],
  //           // unset: ['avatar'],
  //         }),
  //       };

  //       const updateResponse = await fetch(updateUrl, updateOptions);
  //       const updateJson = await updateResponse.json();
  //       console.log('Additional details updated:', updateJson);
  //     }
  //   } catch (error) {
  //     console.log('Failed to update user profile:', error);
  //   }
  // };

  /* validation for profile page /
  const handleValidation = () => {
    let isValid = true;
    setBio(bio?.trim());
    setLinks(links?.trim());
    if (!name) {
      isValid = false;
      errorObject.nameError = validationMessage.emptyName;
    } else if (!checkString(name)) {
      isValid = false;
      errorObject.nameError = validationMessage.invalidName;
    } else {
      errorObject.nameError = undefined;
    }
    if (!userName) {
      isValid = false;
      errorObject.userNameError = validationMessage.emptyUserName;
    } else if (!checkUserName(userName)) {
      isValid = false;
      errorObject.userNameError = validationMessage.invalidUserName;
    } else {
      errorObject.userNameError = undefined;
    }
    if (links?.length) {
      if (!isValidUrl(links)) {
        isValid = false;
        errorObject.linksError = validationMessage.invalidLinks;
      } else {
        errorObject.linksError = undefined;
      }
    }
    setErrorObject({...errorObject});
    if (isValid) {
      editProfileDetail();
    }
  };

  // edit Profile Detail Api call
  const editProfileDetail = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append(params.name, name);
      formData.append(params.userName, userName);
      formData.append(params.Bio, bio?.trim());
      formData.append(params.links, links?.trim());
      formData.append(params.profile, profileImage);
      const {data} = await axiosInstance.post(constant.editProfile, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          auth: `${token}`,
        },
      });
      setLoading(false);
      updateProfileWithExternalImage(data);
      navigation.goBack();
      toast(data?.message);
    } catch (e: any) {
      setLoading(false);
      toast(e?.response?.data?.message);
    }
  };

  /* Navigate to back screen /
  const onBackIconClick = (): void => {
    navigation.goBack();
  };

  return {
    name,
    setName,
    userName,
    setUserName,
    links,
    setLinks,
    bio,
    setBio,
    onBackIconClick,
    errorObject,
    handleValidation,
    setErrorObject,
    loading,
    setLoading,
    editProfileDetail,
    profileImage,
    setProfileImage,
    openImagePicker,
    userData,
  };
};

export default editProfileScreenController;


15:27
import {CometChat} from '@cometchat/chat-sdk-react-native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import messaging from '@react-native-firebase/messaging';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Alert, PermissionsAndroid, Platform} from 'react-native';
import PushNotification from 'react-native-push-notification';
import {useDispatch} from 'react-redux';
import {AuthNavigationProps} from '../../../navigation/stacks/authStack';
import axiosInstance from '../../../services/api';
import cometChat from '../../../services/config/cometChat';
import constant from '../../../services/config/constant';
import params from '../../../services/config/params';
import {
  cometChatData,
  loginSuccess,
} from '../../../services/redux/userReducer/reducer';
import {toast} from '../../../utility/functions/toast';
import {Log} from '../../../utility/log';
import {
  checkEmail,
  checkPassword,
} from '../../../utility/validation/stringValidation';
import validationMessage from '../../../utility/validation/validationMessage';
import {ErrorProps, LoginProps} from './login.interface';

const loginController = (): LoginProps => {
  const dispatch = useDispatch();
  const navigation = useNavigation<AuthNavigationProps>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorObject, setErrorObject] = useState<ErrorProps>({
    emailError: undefined,
    passwordError: undefined,
  });

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email', 'profile'],
      webClientId:
        '555562906209-695ru78am78oln11skuvp20kdfaa2gc8.apps.googleusercontent.com',
      offlineAccess: true,
    });
    PushNotification.createChannel(
      {
        channelId: 'CrypConect',
        channelName: 'CrypConectNotificationChannel',
      },
      created => {},
    );
  }, []);

  /**Media permissoin */
  useEffect(() => {
    getAllMedia();
    const requestStoragePermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission',
            message: 'App needs access to your storage to load videos.',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getAllMedia();
        } else {
        }
      } catch (err) {
        Log('err:', err);
      }
    };
    if (Platform.OS === 'android') {
      requestStoragePermission();
    } else {
      getAllMedia();
    }
  }, []);

  useEffect(() => {
    requestUserPermission();
  }, []);

  /* Google login /
  const onGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      socialLogin(userInfo, 'google');
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  /* Apple Login /
  const appleLogin = async () => {
    //   await appleAuth
    //     .performRequest({
    //       requestedOperation: appleAuth.Operation.LOGIN,
    //       requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    //     })
    //     .then(appleAuthRequestResponse => {
    //       let {identityToken, email, user} = appleAuthRequestResponse;
    //       // socialLogin(appleAuthRequestResponse, 'apple');
    //     })
    //     .catch(error => {});
  };

  /**Facebook Login */
  const facebookLogin = () => {
    //   LoginManager.logInWithPermissions(['public_profile', 'email'])
    //     .then((result: any) => {
    //       if (result.isCancelled) {
    //       } else {
    //         return AccessToken.getCurrentAccessToken();
    //       }
    //     })
    //     .then((data: any) => {
    //       // const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
    //       fetch(
    //         'https://graph.facebook.com/v2.5/me?fields=email,name,picture&access_token=' +
    //           data.accessToken,
    //       )
    //         .then(response => response.json())
    //         .then(json => {})
    //         .catch(err => {});
    //     })
    //     .then(currentUser => {
    //     })
    //     .catch(error => {});
  };

  /* Social login api call /
  const socialLogin = (detail: any, type: string) => {
    let data = {
      [params.email]: detail?.user?.email,
      [params.name]: detail?.user?.name,
      [params.provider]: type,
      [params.idToken]: detail?.idToken,
    };
    axiosInstance
      .post(constant.userSocialLogin, data)
      .then(response => {
        dispatch(loginSuccess(response.data.data));
        navigation.reset({
          index: 0,
          routes: [{name: 'messages'}],
        });
        toast(response.data.message);
      })
      .catch((err: any) => {
        navigation.navigate('signup', {
          item: detail,
          type: 'social',
        });
        toast(err?.response.data.message);
      });
  };

  /* Validate the login form /
  const validateLogin = () => {
    let isValidate = true;
    if (email === '') {
      isValidate = false;
      errorObject.emailError = validationMessage.userName;
    } else {
      errorObject.emailError = '';
    }
    if (password === '') {
      isValidate = false;
      errorObject.passwordError = validationMessage.emptyPassword;
    } else if (!checkPassword(password)) {
      isValidate = false;
      errorObject.passwordError = validationMessage.invalidPassword;
    } else {
      errorObject.passwordError = '';
    }
    setErrorObject({...errorObject});
    if (isValidate) {
      loginApiCall();
    }
  };

  /* Login api call /
  const loginApiCall = async () => {
    setLoading(true);
    let emailAddress: any;
    let name: any;
    if (!checkEmail(email)) {
      name = email;
    } else {
      emailAddress = email;
    }
    const param = emailAddress ? params.email : params.userName;
    try {
      const {data} = await axiosInstance.post(constant.login, {
        [param]: emailAddress ? email?.toLowerCase() : email,
        [params.password]: password,
      });

      // saurabh soni
      let UID = data?.data?._id;
      try {
        CometChat.login(UID, cometChat.cometChatAuthKey)
          .then(user => {
            if (user) {
              setLoading(false);
              toast('Login Successfully!');
              Log('user::1', JSON.stringify(user));
              dispatch(loginSuccess(data));
              // dispatch(cometChatData({user}));
              navigation.reset({
                index: 0,
                routes: [{name: 'bottomTabNav'}],
              });
              setEmail('');
              setPassword('');
            } else {
              Log('Error::2', JSON.stringify(user));
              setLoading(false);
              toast(`Error::3 ${user}`);
            }
          })
          .catch(error => {
            if (error.code === 'ERR_UID_NOT_FOUND') {
              createNewUser(UID, cometChat.cometChatAuthKey);
            } else {
              Log('Error::4', JSON.stringify(error));
              setLoading(false);
              toast(`Error::5 ${error}`);
            }
          });
      } catch (error) {
        Log('Error::6', JSON.stringify(error));
        setLoading(false);
        toast(`Error::7 ${error}`);
      }

      // let UID = data?.data?._id;
      // CometChatUIKit?.login({uid: UID})
      //   .then(user => {
      //     // Log('user::1', user);
      //     CometChat?.registerTokenForPushNotification(
      //       cometChat?.cometChatAuthKey,
      //     )
      //       .then(res => {
      //         // Log('res::2', res);
      //         if (res) {
      //           toast(data?.message);
      //           dispatch(loginSuccess(data));
      //           dispatch(cometChatData({user}));
      //           setLoading(false);
      //           navigation.reset({
      //             index: 0,
      //             routes: [{name: 'bottomTabNav'}],
      //           });
      //           setLoading(false);
      //           setEmail('');
      //           setPassword('');
      //         }
      //       })
      //       .catch(err => {
      //         toast('COMETCHAT TOKEN REGISTER FAILED');
      //         // Log('COMETCHAT TOKEN REGISTER FAILED :', err);
      //       });
      //   })
      //   .catch(err => {
      //     setLoading(false);
      //     // Log('errr::2', err);
      //     Alert.alert('Error', 'Unable to login');
      //   });
    } catch (e: any) {
      setLoading(false);
      toast(e?.response?.data?.message);
    }
  };

  const createNewUser = (uid: string, authKey: string) => {
    let name = uid;
    let user = new CometChat.User(uid);
    user.setName(name);
    CometChat.createUser(user, authKey).then(
      user => {
        if (user) {
          setLoading(false);
          toast('User created Successfully!');
          Log('user::8', JSON.stringify(user));
          loginApiCall();
        } else {
          Log('Error::9', JSON.stringify(user));
          setLoading(false);
          toast(`Error::10 ${user}`);
        }
      },
      error => {
        setLoading(false);
        toast('User created Successfully!');
        Log('user::11', JSON.stringify(error));
      },
    );
  };

  /* Navigate to Forgot Password screen /
  const onForgotPasswordClick = (): void => {
    navigation.navigate('forgotPassword');
    setEmail('');
    setPassword('');
    setErrorObject({...errorObject});
  };

  /* Navigate to Sign up screen /
  const onSignUpClick = (): void => {
    navigation.navigate('signup');
    setEmail('');
    setPassword('');
    setErrorObject({...errorObject});
  };

  /* Notification user permission function /
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  };

  /* Getting all gallery media /
  const getAllMedia = () => {
    CameraRoll.getPhotos({
      assetType: 'Videos',
      first: 200,
      mimeTypes: ['video/mp4'],
      include: ['fileExtension'],
      includeSharedAlbums: true,
    })
      .then((res: any) => {})
      .catch((error: any) => {});
  };

  return {
    password,
    setPassword,
    onSignUpClick,
    onForgotPasswordClick,
    errorObject,
    loading,
    validateLogin,
    email,
    setEmail,
    onGoogleLogin,
    appleLogin,
    facebookLogin,
  };
};

export default loginController;




import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Image, Platform } from 'react-native';
import CometChat from '@cometchat-pro/react-native-chat';
import ImagePicker from 'react-native-image-picker';

const UserProfileUpdate = () => {
  const [newName, setNewName] = useState('');
  const [newImage, setNewImage] = useState(null);

  useEffect(() => {
    // Initialize CometChat SDK
    CometChat.init(YOUR_APP_ID, YOUR_API_KEY).then(
      () => {
        console.log('CometChat initialized successfully');
      },
      (error) => {
        console.log('CometChat initialization failed with error:', error);
      }
    );
  }, []);

  const updateProfile = async () => {
    try {
      let updatedUser = { name: newName };

      // If newImage is present, upload the image first and then update user profile
      if (newImage) {
        const fileUrl = await uploadImage(newImage);
        updatedUser = { ...updatedUser, avatar: fileUrl };
      }

      const user = await CometChat.updateCurrentUser(updatedUser);
      console.log('User profile updated successfully:', user);
    } catch (error) {
      console.log('Failed to update user profile:', error);
    }
  };

  const uploadImage = (image) => {
    return new Promise((resolve, reject) => {
      const uploadFile = {
        uri: image.uri,
        type: image.type,
        name: image.fileName,
      };

      CometChat.uploadFile(uploadFile, CometChat.RECEIVER_TYPE.USER, CometChat.getLoggedInUser().getUid()).then(
        (response) => {
          resolve(response.url);
        },
        (error) => {
          reject(error);
        }
      );
    });
  };

  const selectImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error:', response.error);
      } else {
        setNewImage(response);
      }
    });
  };

  return (
    <View>
      <TextInput
        placeholder="Enter new name"
        value={newName}
        onChangeText={(text) => setNewName(text)}
      />
      <Button title="Select Image" onPress={selectImage} />
      {newImage && <Image source={{ uri: newImage.uri }} style={{ width: 100, height: 100 }} />}
      <Button title="Update Profile" onPress={updateProfile} />
    </View>
  );
};

export default UserProfileUpdate;

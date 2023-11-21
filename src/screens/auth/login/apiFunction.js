// const editPhoto = (): void => {
//     ImagePicker.openPicker({
//       mediaType: 'photo',
//     })
//       .then(image => {
//         let imageData: any = {
//           name: 'Idea_img.jpeg',
//           uri: image.path,
//           type: 'image/jpeg',
//         };
//         setEditImage(imageData);
//       })
//       .catch(e => console.log('imageError', e));
//   };

// const editProfileApi = async () => {
//   setLoading(true);
//   /** EditProfileApi api call */
//   try {
//     const formData = new FormData();
//     formData.append(params.email, email);
//   //   if (editImage?.uri) {
//   //     formData.append(params.profile, editImage);
//   //   }
//     formData.append(params.userName, userName);
//     formData.append(params.profile, editImage);
//     const {data} = await axiosInstance.post(constant.editProfile, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//         auth: `${userData?.token}`,
//       },
//     });
//     let flatMobileData =
//       userData?.userData?.mobileNumber?.toString() != mobileNumbers;
//     let flatEmailData = userData?.userData?.email != email;
//     setLoading(false);
//     if (flatEmailData || flatMobileData) {
//       navigation.navigate('profileUpdateOtp', {
//         mobileNumber: mobileNumbers,
//         email: email,
//         editData: newData,
//       });
//     } else {
//       navigation.goBack({
//         index: 0,
//         routes: [{name: 'myProfileDetailsPage'}],
//       });
//       dispatch(getProfileDetail(userData?.token));
//       setEmail('');

//       Snackbar.show({text: data?.message});
//     }
//     Snackbar.show({text: data?.message});
//   } catch (e: any) {
//     console.log('e', e);
//     setLoading(false);
//     Snackbar.show({text: e?.response?.data?.message});
//   }
// };

// Get @@@@
//   const onGetTermsPrivacy = async () => {
//     try {
//       const {data} = await axiosInstance.get(constant.getCMS);
//       dispatch(privacyTermsData(data?.data));
//     } catch (e: any) {
//       console.log('error', e);
//     }
//   };
// Get @@@@
// export const getProfileDetail = (token: string) => {
//    return (dispatch: any) => {
//     axiosInstance
//       .get(constant.getUserprofile, {headers: {auth: token}})
//       .then(response => {
//         dispatch(editProfiles(response.data.data[0]));
//       })
//       .catch(error => {
//         console.log('getUserprofile api call error', error);
//       });
//   };
// };

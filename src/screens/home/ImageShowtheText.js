// import {useEffect, useState} from 'react';
// import {
//   RouteProp,
//   useIsFocused,
//   useNavigation,
//   useRoute,
// } from '@react-navigation/native';
// import {
//   AuthNavigationProps,
//   AuthParams,
// } from '@navigation/stacks/stackNavigationParams';
// import params from '@config/params';
// import {axiosInstance} from '@api/api';
// import constant from '@config/constant';
// import {Toast} from '@utility/toast';
// import {RootState} from '@config/redux/types';
// import {useAppSelector} from '@config/redux/useReduxHooks';
// import {ErrorProps} from './informationsId';
// import validationMessage from '@utility/validation/validationMessage';
// import TextRecognition, {
//   TextRecognitionResult,
// } from '@react-native-ml-kit/text-recognition';

// const useInformationsId = () => {
//   const navigation = useNavigation<AuthNavigationProps>();
//   const route = useRoute<RouteProp<AuthParams, 'informationsId'>>();
//   const {token, userData}: any = useAppSelector(
//     (state: RootState) => state.UserReducer,
//   );
//   const isFocused = useIsFocused();
//   const [frontImg, setfrontImg] = useState<any>(route?.params?.frontImg?.uri);
//   const [idNumber, setIdNumber] = useState<string>();
//   const [expireDate, setExpireDate] = useState<string>();
//   const [name, setName] = useState<string>();
//   const [surname, setSurname] = useState<string>();
//   const [dateofBirth, setDateofBirth] = useState<string>();
//   const [sex, setSex] = useState<string>();
//   const [nationality, setNationality] = useState<string>();
//   const [loading, setLoading] = useState<boolean>(false);
//   const [dataLoader, setDataLoader] = useState<boolean>(false);
//   const [errorObject, setErrorObject] = useState<ErrorProps>({
//     idNumber: undefined,
//     expireDate: undefined,
//     name: undefined,
//     surName: undefined,
//     dateofBirth: undefined,
//     sex: undefined,
//     nationality: undefined,
//   });

//   const onBack = (): void => {
//     navigation.goBack();
//   };

//   useEffect(() => {
//     if (isFocused) {
//       // handleChoose();
//       setDataLoader(true);
//       setTimeout(() => {
//         setDataLoader(false);
//       }, 1500);
//     }
//   }, [isFocused]);

//   const handleChoose = async () => {
//     try {
//       const results = await TextRecognition.recognize(
//         route?.params?.frontImg?.uri,
//       );

//       const extractedData = results.text
//         .split('\n')
//         .filter(Boolean)
//         .map(line => line.toUpperCase());

//       // const surnameKeywords = ['SURNAME', 'SUMAME'];
//       // const surNameIndex = extractedData.findIndex(line =>
//       //   surnameKeywords.some(keyword => line.includes(keyword)),
//       // );
//       // if (surNameIndex !== -1 && surNameIndex < extractedData.length - 1) {
//       //   const surnameValue = extractedData[surNameIndex + 1].trim();
//       //   setSurname(surnameValue);
//       // }

//       // const idNumberKeywords = ['PASSPORT NO', 'PASSPART NO'];
//       // const idNumberIndex = extractedData.findIndex(line =>
//       //   idNumberKeywords.some(keyword => line.includes(keyword)),
//       // );
//       // if (idNumberIndex !== -1 && idNumberIndex < extractedData.length - 1) {
//       //   const idNumberValue = extractedData[idNumberIndex + 1].trim();
//       //   setIdNumber(idNumberValue);
//       // }

//       // const expiryKeywords = ['DATE OF EXPIRY', 'DATE OF EXPIEY'];
//       // const ExpieyIndex = extractedData.findIndex(line =>
//       //   expiryKeywords.some(keyword => line.includes(keyword)),
//       // );
//       // if (ExpieyIndex !== -1 && ExpieyIndex < extractedData.length - 1) {
//       //   const ExpieyValue = extractedData[ExpieyIndex + 1].trim();
//       //   setExpireDate(ExpieyValue);
//       // }

//       // const sexIndex = extractedData.findIndex(line => line.includes('SEX'));
//       // if (sexIndex !== -1 && sexIndex < extractedData.length - 1) {
//       //   const sexValue = extractedData[sexIndex + 1].trim();
//       //   setSex(sexValue);
//       // }

//       // const birthIndex = extractedData.findIndex(line =>
//       //   line.includes('DATE OF BIRTH'),
//       // );
//       // if (birthIndex !== -1 && birthIndex < extractedData.length - 1) {
//       //   const birthValue = extractedData[birthIndex + 1].trim();
//       //   setDateofBirth(birthValue);
//       // }
//       // const nameIndex = extractedData.findIndex(line =>
//       //   line.includes('GIVEN NAME'),
//       // );
//       // if (nameIndex !== -1 && nameIndex < extractedData.length - 1) {
//       //   const nameValue = extractedData[nameIndex + 1].trim();
//       //   setName(nameValue);
//       // }
//       // const nationalityIndex = extractedData.findIndex(line =>
//       //   line.includes('NATIONALITY'),
//       // );
//       // if (
//       //   nationalityIndex !== -1 &&
//       //   nationalityIndex < extractedData.length - 1
//       // ) {
//       //   const nationalityValue = extractedData[nationalityIndex + 1].trim();
//       //   setNationality(nationalityValue);
//       // }
//     } catch (error) {}
//   };

//   const onNavigation = (): void => {
//     navigation.navigate('myId');
//   };

//   const validationPassPort = (): void => {
//     / validation Pass Port /
//     let isValidate = true;

//     if (!idNumber) {
//       isValidate = false;
//       errorObject.idNumber = validationMessage.emptyIdNumber;
//     } else {
//       errorObject.idNumber = undefined;
//     }

//     if (!name) {
//       isValidate = false;
//       errorObject.name = validationMessage.emptyName;
//     } else {
//       errorObject.name = undefined;
//     }
//     if (!surname) {
//       isValidate = false;
//       errorObject.surName = validationMessage.emptySurName;
//     } else {
//       errorObject.surName = undefined;
//     }

//     if (!sex) {
//       isValidate = false;
//       errorObject.sex = validationMessage.emptySex;
//     } else {
//       errorObject.sex = undefined;
//     }

//     if (!nationality) {
//       isValidate = false;
//       errorObject.nationality = validationMessage.emptynationality;
//     } else {
//       errorObject.nationality = undefined;
//     }

//     if (!dateofBirth) {
//       isValidate = false;
//       errorObject.dateofBirth = validationMessage.emptyBod;
//     } else {
//       errorObject.dateofBirth = undefined;
//     }

//     if (!expireDate) {
//       isValidate = false;
//       errorObject.expireDate = validationMessage.emptyExpDate;
//     } else {
//       errorObject.expireDate = undefined;
//     }

//     setErrorObject({...errorObject});

//     if (isValidate) {
//       onStorePassPort();
//     }

//     // if (isValidate) {
//     //   onStorePassPort();
//     // } else {
//     //   Toast({text: 'Please re-upload passport'});
//     //   navigation.goBack();
//     // }
//   };

//   const onStorePassPort = async () => {
//     /*  Store Pass Port Api call /
//     try {
//       const formData = new FormData();
//       formData.append(params.passportFrontImage, route?.params?.frontImg);
//       formData.append(params.passportBackImage, route?.params?.backImg);
//       formData.append(params.idNumber, idNumber);
//       formData.append(params.expiryDate, expireDate);
//       formData.append(params.name, name);
//       formData.append(params.surname, surname);
//       formData.append(params.dob, dateofBirth);
//       formData.append(params.sex, sex);
//       formData.append(params.nationality, nationality);
//       formData.append(params.type, route?.params?.typeUserCard?.type?.item?.title == 'Me' ? 'me':'friends');
//       setLoading(true);
//       const {data} = await axiosInstance.post(
//         constant.storeUserPassport,
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'multipart/form-data',
//           },
//         },
//       );

//       if (data?.success == true) {
//         onNavigation();
//       }
//       setLoading(false);

//       Toast({text: data.message});
//     } catch (e: any) {
//       setLoading(false);
//       Toast({text: e?.response?.data?.message});
//     }
//   };

//   return {
//     onBack,
//     onNavigation,
//     idNumber,
//     setIdNumber,
//     expireDate,
//     setExpireDate,
//     name,
//     setName,
//     surname,
//     setSurname,
//     dateofBirth,
//     setDateofBirth,
//     sex,
//     setSex,
//     nationality,
//     setNationality,
//     validationPassPort,
//     loading,
//     route,
//     errorObject,
//     frontImg,
//     dataLoader,
//   };
// };

// export default useInformationsId;


//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const MyComponent = () => {
    return (
        <View style={styles.container}>
            <Text>MyComponent</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default MyComponent;

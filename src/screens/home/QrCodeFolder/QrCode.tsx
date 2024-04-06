import React from 'react';
import {View, Image, ScrollView, Text, TouchableOpacity} from 'react-native';
// import QRCode from 'react-native-qrcode-svg';
import {useTheme} from '@react-navigation/native';
// import style from './qrCode.style';
import imageIndex from '../../assets/imageIndex';
import color from '../../theme/color';
// import Clipboard from '@react-native-clipboard/clipboard';
// import  from 'react-native-qrcode-scanner';

const QrCode = () => {
//   const isNumeric = (num: number | string): boolean =>
//     (typeof num === 'number' ||
//       (typeof num === 'string' && num.trim() !== '')) &&
//     !isNaN(num as number);
//   const changeParams: boolean = isNumeric(email)
// ;
//  const validationLogin = () => {
//   };


  const {dark, colors} = useTheme();
  const qrData: any = JSON.stringify({
    mobile: '455454',
    merchantName: 'ram',
    merchantId: 'id',
  });
  const copyToClipboard = () => {
    let detail: any = ' allUsers?.userData?.wallet?.businessWalletId';
    // Clipboard.setString(detail);
  };
  return (
    <View
      style={[
        {
          backgroundColor: colors.background,
        },
      ]}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        {/* <QRCode
          // @ts-ignore
          value={qrData}
          size={200}
          logo={imageIndex.yesPay}
          logoSize={30}
          backgroundColor={color.textWhite}
          logoBackgroundColor={color.black}
        /> */}
           {/* <QRCodeScanner
                      onRead={handleScan}
                      reactivate={true}
                      reactivateTimeout={3000}
                      showMarker={true}
                      markerStyle={{ borderColor: color.white, borderRadius: 10 }}
                      markerSize={300}
                      vibrate={true}
                    /> */}
                       {/* ${' '}
                    {new Intl.NumberFormat('en-IN', {
                      maximumSignificantDigits: 3,
                    }).format(parseInt(amountShow))} */}
      </ScrollView>
    </View>
  );
};

export default QrCode;




// import React from 'react';
// import {
//   View,
//   Image,
//   KeyboardAvoidingView,
//   ScrollView,
//   Text,
//   TouchableOpacity,
//   Platform,
//   FlatList,
//   ActivityIndicator,
// } from 'react-native';
// import QRCode from 'react-native-qrcode-svg';
// import {useTheme} from '@react-navigation/native';
// import style from './qrCode.style';
// import qrCodeController from './qrCode.controller';
// import {CustomStatusbar, Header} from '../../components';
// import {color} from '../../theme';
// import imageIndex from '../../assets/imageIndex';
// import AmountModal from '../../components/common/amountModal/AmountModal';
// import ActiveModal from '../../components/common/activeModal/ActiveModal';
// import NoDataFound from '../../components/common/noDataFound/NoDataFound';

// const QrCode = () => {
//   const {
//     allUsers,
//     qrData,
//     amountModal,
//     opMenuModal,
//     menuModal,
//     copyClipboard,
//     modal,
//     amount,
//     setAmount,
//     closeModal,
//     okButton,
//     paymentData,
//     tokenId,
//     selectedModal,
//     onSelectedRadio,
//     radioModal,
//     amountShow,
//     selectedIndex,
//     loading,
//     inputRef,
//     selectedModalClose,
//     errorObject,
//   } = qrCodeController();
//   const {colors} = useTheme();
//   const formattedNumber = amount => {
//     const parsedValue = parseFloat(amount); // Use parseFloat for decimal numbers
//     if (!isNaN(parsedValue)) {
//       return new Intl.NumberFormat('en-IN', {
//         maximumSignificantDigits: 3,
//       }).format(parsedValue);
//     }
//     return '';
//   };

//   const paymentCard = ({item, index}: any) => {
//     const isSelected =
//       index === selectedIndex || (index === 0 && selectedIndex === null);
//     return (
//       <View
//         style={[
//           style.containerCard,
//           {
//             borderColor: color.lightBlack,
//           },
//         ]}>
//         <Text
//           style={[
//             style.title,
//             {
//               color: color.lightBlack,
//             },
//           ]}>
//           {item?.name}
//         </Text>
//         <TouchableOpacity
//           activeOpacity={0.7}
//           onPress={() => {
//             onSelectedRadio(item, index);
//           }}>
//           <Image
//             source={isSelected ? imageIndex.radio : imageIndex.radioOff}
//             style={style.radioImage}
//           />
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <View
//       style={[
//         style.mainContainer,
//         {
//           backgroundColor: colors.background,
//         },
//       ]}>
//       <CustomStatusbar barStyle={'dark-content'} />
//       <KeyboardAvoidingView
//         style={style.keyboardAvoidingViewContainer}
//         behavior={Platform.OS == 'ios' ? 'height' : undefined}>
//         {menuModal && (
//           <View style={style.mainViewText}>
//             <TouchableOpacity
//               style={style.amountView}
//               activeOpacity={0.5}
//               onPress={amountModal}>
//               <Text style={style.amountText}>Set Amount</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//         <Header rightIcon title={'QR Code'} leftIcon onModal={opMenuModal} />
//         <ScrollView
//           contentContainerStyle={style.scrollView}
//           showsVerticalScrollIndicator={false}>
//           <View style={style.mainView}>
//             <View style={style.mainCodeView}>
//               <View
//                 style={[
//                   style.qrCodeView,
//                   {
//                     borderColor: colors.text,
//                   },
//                 ]}>
//                 <Text style={[style.titleText, {color: color.lightBlack}]}>
//                   YesPay Merchant
//                 </Text>
//                 <View style={style.qrCode}>
//                   <QRCode
//                     // @ts-ignore
//                     value={qrData}
//                     size={230}
//                     logo={imageIndex.yesPay}
//                     logoSize={20}
//                     backgroundColor={color.white}
//                     logoBackgroundColor={color.transparent}
//                   />
//                   <Text style={[style.businessName, {color: color.lightBlack}]}>
//                     Scan to pay
//                   </Text>
//                 </View>
//                 <TouchableOpacity activeOpacity={0.7} onPress={radioModal}>
//                   {tokenId ? (
//                     <Text style={[style.selected, {color: color.lightBlack}]}>
//                       {tokenId?.name}
//                     </Text>
//                   ) : (
//                     <Text style={[style.selected, {color: color.lightBlack}]}>
//                       {paymentData?.[0]?.name}
//                     </Text>
//                   )}
//                 </TouchableOpacity>
//                 <View style={[style.copyView]}>
//                   <Text style={[style.walletText, {color: color.lightBlack}]}>
//                     {allUsers?.userData?.wallet?.businessWalletId?.slice(20)}
//                   </Text>
//                   <TouchableOpacity onPress={copyClipboard} activeOpacity={0.7}>
//                     <Image
//                       source={imageIndex.copy}
//                       style={style.copyImage}
//                       tintColor={color.lightBlack}
//                     />
//                   </TouchableOpacity>
//                 </View>
//                 {amountShow && (
//                   <Text style={[style.copyText, {color: color.lightBlack}]}>
                 
//                   </Text>
//                 )}
//               </View>
//             </View>
//           </View>
//           <ActiveModal
//             visible={selectedModal}
//             child={
//               <View style={style.childView}>
//                 <TouchableOpacity
//                   style={style.closeView}
//                   activeOpacity={0.7}
//                   onPress={selectedModalClose}>
//                   <Image source={imageIndex.close} style={style.closeImage} />
//                 </TouchableOpacity>
//                 {loading ? (
//                   <ActivityIndicator
//                     size={'small'}
//                     color={colors.text}
//                     style={style.childView}
//                   />
//                 ) : (
//                   <FlatList
//                     showsVerticalScrollIndicator={false}
//                     contentContainerStyle={style.contentContainerStyle}
//                     data={paymentData}
//                     renderItem={paymentCard}
//                     style={style.flatListStyle}
//                     keyExtractor={(item, index) => {
//                       return `${index}`;
//                     }}
//                     ListEmptyComponent={() => <NoDataFound />}
//                   />
//                 )}
//               </View>
//             }
//           />
//           <AmountModal
//             inputRef={inputRef}
//             visible={modal}
//             // value={amount}
//             value={formattedNumber(amount)}
//             onChangeText={setAmount}
//             onCloseClick={closeModal}
//             onPress={okButton}
//             // @ts-ignore
//             onLayout={() => inputRef.current.focus()}
//             child={
//               <>
//                 {errorObject.mobileNumberError && (
//                   <Text style={style.errorText}>
//                     {errorObject.mobileNumberError}
//                   </Text>
//                 )}
//               </>
//             }
//           />
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </View>
//   );
// };

// export default QrCode;



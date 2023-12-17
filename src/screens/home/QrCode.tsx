import React from 'react';
import {View, Image, ScrollView, Text, TouchableOpacity} from 'react-native';
// import QRCode from 'react-native-qrcode-svg';
import {useTheme} from '@react-navigation/native';
// import style from './qrCode.style';
import imageIndex from '../../assets/imageIndex';
import color from '../../theme/color';
// import Clipboard from '@react-native-clipboard/clipboard';

const QrCode = () => {
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
      </ScrollView>
    </View>
  );
};

export default QrCode;

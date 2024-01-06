import React, {FC, memo} from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import imageIndex from '../../../assets/imageIndex';
import {CountryCodeModalProp, FlatListProp} from './countryCodeModal.interface';
import styles from './countryCodeModal.style';
import InputComponent from '../inputComponent/InputComponent';
import categoryController from './countryCodeModal.Controlle';
import color from '../../../theme/color';

const CountryCodeModal: FC<CountryCodeModalProp> = props => {
  const {Search, countryData, setCountryData, setSearch, handleSearch} =
    categoryController();
  const renderItem: FC<FlatListProp> = ({item, index}) => {
    return (
      <View style={styles.mainViewList}>
        <TouchableOpacity
          style={styles.mainViewTouchableOpacity}
          onPress={() => {
            props?.itemSelection && props?.itemSelection(item);
          }}>
          <Text style={styles.countryTextStyle}>{item?.flag}</Text>
          <Text style={styles.countryTextStyle}>{item?.dial_code}</Text>
          <Text style={styles.countryTextStyle}>{item?.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={[styles.mainContainer, props.mainContainer]}>
      <TouchableOpacity
        style={[styles.mainViewRow, props.mainViewRow]}
        onPress={() => {
          props.openModal?.();
          // @ts-ignore
          setCountryData(allCountryData);
        }}
        activeOpacity={0.7}>
        <Text style={[styles.valueTextStyle, props.valueTextStyle]}>
          {props?.value}
        </Text>
      </TouchableOpacity>
      <Modal animationType="slide" visible={props.visible}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.closeViewStyle}
          onPress={props?.closeModal}>
          <Image
            source={imageIndex.Linkedin}
            style={[styles.closeImageStyle, props.closeImageStyle]}
          />
        </TouchableOpacity>
        <View style={styles.inputConatiner}>
          <InputComponent
            onChangeText={text => handleSearch(text)}
            value={Search}
            placeholderTextColor={color.black}
            inputProps={{returnKeyType: 'done'}}
            mainInputView={styles.mainInputView}
            lableStyle={styles.lableStyle}
            placeholder="Search..."
            inputStyle={styles.inupTextStyle}
          />
        </View>
        <FlatList
          renderItem={renderItem}
          data={countryDatas}
          showsVerticalScrollIndicator={false}
          // ListEmptyComponent={() => <NoDataFound />}
        />
      </Modal>
    </View>
  );
};

export default memo(CountryCodeModal);

{
  /* <InputComponent
placeholder="Mobile Number"
rightHideShow
keyboardType="numeric"
input={styles.input}
value={mobileNumber}
inputStyle={styles.inputStyle}
maxLength={mobileNumberLength}
placeholderTextColor={color.placeholderTextColor}
onChangeText={(text: string) => setMobileNumber(text.trimStart())}
imageShow={
  <TouchableOpacity onPress={onOpenCountryModal}>
    <Text style={styles.selectFlag}>{selectFlag}</Text>
  </TouchableOpacity>
}
error={errorObject.mobileNumberError}
countryView={
  <CountryCodeModal
    closeModal={onCloseCountryModal}
    openModal={onOpenCountryModal}
    itemSelection={(item: any) => {
      onSelectCountry(item);
      onCloseCountryModal();
    }}
    value={selectCountryCode}
    visible={countryModal}
    textStyle={styles.countryTextStyle}
    mainViewRow={styles.countryMainViewStyle}
  />
}
/> */
}
// const [countryModal, setCountryModal] = useState<boolean>(false);
// const [selectCountryCode, setSelectCountryCode] = useState<string>('+971');
// const [selectCountryName, setSelectCountryName] = useState<string>(
//   'United Arab Emirates',
// );
// const onOpenCountryModal = () => {
//   setCountryModal(true);
// };

// const onSelectCountry = (item: any) => {
//   // const phoneNumberLength = getExampleNumber(item?.code, examples);
//   setTimeout(() => {
//     // setMobileNumberLength(phoneNumberLength?.nationalNumber?.length);
//     setSelectCountryName(item?.name);
//     setSelectFlag(item?.flag);
//     setSelectCountryCode(item?.dial_code);
//     setCountryModal(false);
//     setMobileNumber('');
//   }, 0);
// };

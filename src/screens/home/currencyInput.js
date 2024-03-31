import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import React from 'react';
 
// import {FakeCurrencyInput} from 'react-native-currency-input';

const WithdrawAdd  = () => {
  const {goBack, activeDeposit, inputValue, setActiveDeposit, setInputValue} =
    withdrawAddController();
  return (
    <View style={style.container}>
    
              {/* <FakeCurrencyInput
                value={inputValue}
                onChangeValue={setInputValue}
                delimiter=","
                separator="."
                caretColor={color.white}
                style={style.inputText}
                precision={1}
                caretStyle={style.cursalStyle}
              /> */}
             
    </View>
  );
};

export default WithdrawAdd;
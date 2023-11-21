import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

const CustomMyTopTab = props => {
  const {index} = props?.state;

  return (
    <View>
      {/* <LinearGradient
        style={[style.topborderStyle]}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 2}}
        colors={colors.buottonLinearColor}> */}
      <View style={style.mainContainer}>
        {/* <Utils.component.statusBar
            backgroundColor={uiConfig.colors.primary}
            barStyle="dark-content"
          /> */}
        <TouchableOpacity activeOpacity={0.7} style={style.itemBox}>
          <View style={style.imageView}>
            <Text
              style={[
                style.textStyle,
                {
                  color: index ? 'red' : 'green',
                },
              ]}>
              My Availability
            </Text>
          </View>
          {index === 0 ? <View style={style.borderRadiusView} /> : null}
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={style.itemBox}>
          <View style={style.imageView}>
            <Text
              style={[
                style.textStyle,
                {
                  color: index ? 'red' : 'green',
                },
              ]}>
              My Skill
            </Text>
          </View>
          {index === 1 ? <View style={style.borderRadiusView} /> : null}
        </TouchableOpacity>
      </View>
      {/* </LinearGradient> */}
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    height: 46,
  },
  topborderStyle: {
    height: 46,
    width: '100%',
    justifyContent: 'center',
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  iconStyle: {
    resizeMode: 'contain',
    width: 27,
    height: 27,
  },
  borderRadiusView: {
    borderBottomWidth: 3,
    borderColor: 'white',
    marginHorizontal: 20,
    marginTop: 9.2,
    shadowColor: 'red',
    shadowOpacity: 0.55,
  },
  itemBox: {
    width: '50%%',
  },
  textStyle: {
    fontSize: 15,
    textAlign: 'center',
    // fontFamily: uiConfig.fonts.poppinsMedium,
    lineHeight: 23,
  },
});

export default CustomMyTopTab;

import React, {memo} from 'react';
import {View, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {propType} from './customStatusbar.interface';
import color from '../../../theme/color';

const CustomStatusBar: React.FC<propType> = props => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {height: insets.top, backgroundColor: props.backgroundColor},
        props.containerStyle,
      ]}>
      <StatusBar
        animated={true}
        backgroundColor={props.backgroundColor}
        barStyle={props.barStyle}
        translucent={props.translucent}
        {...props}
      />
    </View>
  );
};

CustomStatusBar.defaultProps = {
  backgroundColor: color.black,
  barStyle: 'dark-content',
};

export default memo(CustomStatusBar);

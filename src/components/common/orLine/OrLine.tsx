import React, {FC, memo} from 'react';
import {Text, TextStyle, View} from 'react-native';
import {Style} from './orLine.style';

interface OrLineProps {
  label?: string | undefined;
  lineColor?: string | undefined;
  labelStyle?: TextStyle | undefined;
  lineHorizontalSpace?: number | undefined;
}
const OrLine: FC<OrLineProps> = (props: OrLineProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: props.lineHorizontalSpace,
      }}>
      <View style={Style.lineView} />
      {props?.label && (
        <View>
          <Text style={[Style.labelStyle, props.labelStyle]}>
            {props.label}
          </Text>
        </View>
      )}
      <View style={Style.lineView} />
    </View>
  );
};

export default memo(OrLine);
OrLine.defaultProps = {
  lineHorizontalSpace: 10,
};

import color from '@theme/color';
import React, {FC, memo} from 'react';
import {Dimensions, Text, TextStyle, View, ViewStyle} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';
import Dropdown, {DropdownProps} from '../dropdown/Dropdown';
import {styles} from './graph.style';

interface GraphProps extends DropdownProps {
  containerStyle?: ViewStyle;
  title?: string;
  titleStyle?: TextStyle;
  dropdownShown?: boolean;
  chartData?: any;
}

const Graph: FC<GraphProps> = ({
  containerStyle,
  title,
  titleStyle,
  dropdownShown,
  chartData,
  ...restProps
}) => {
  const {width} = Dimensions.get('screen');

  return (
    <View style={[styles.container, containerStyle]}>
      {title && <Text style={[styles.titleText, titleStyle]}>{title}</Text>}
      <View style={styles.chartContainer}>
        <LineChart
          areaChart
          curved
          data={chartData}
          height={135}
          width={width - 75}
          color={color.primary}
          thickness={2}
          startFillColor={color.primary}
          endFillColor={color.secondaryBG}
          yAxisColor={color.lightgray}
          xAxisColor={color.lightgray}
          hideYAxisText
          spacing={12}
          initialSpacing={1}
          endSpacing={1}
          hideDataPoints
          hideRules
          // isAnimated
          // animationDuration={1100}
          maxValue={500}
          pointerConfig={{
            pointerStripUptoDataPoint: true,
            pointerStripColor: color.primary,
            pointerColor: color.primary,
            radius: 4,
            autoAdjustPointerLabelPosition: false,
            pointerLabelComponent: (items: any) => {
              return (
                <View style={styles.labelView}>
                  <Text style={styles.labelText}>{'$' + items[0].value}</Text>
                </View>
              );
            },
          }}
        />
      </View>
      {dropdownShown && (
        <View style={styles.dropdownCotainer}>
          <Dropdown {...restProps} containerStyle={styles.dropdownBG} />
        </View>
      )}
    </View>
  );
};

export default memo(Graph);

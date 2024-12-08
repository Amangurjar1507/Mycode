import React from 'react';
import {View, Text} from 'react-native';
import Svg, {Circle, Line} from 'react-native-svg';

const Tree = ({data, x, y, dx}) => {
  const circleRadius = 10;

  if (!data) {
    return null;
  }

  return (
    <View>
      <Svg height="150" width="150">
        <Circle
          cx={x}
          cy={y}
          r={circleRadius}
          fill="red"
          stroke="red"
          strokeWidth="2"
        />
        <Text
          x={x}
          y={y + circleRadius + 10}
          fontSize="12"
          fill="black"
          textAnchor="middle">
          {data.id}
        </Text>
        {data.left && (
          <>
            <Line
              x1={x}
              y1={y + circleRadius}
              x2={x - dx}
              y2={y + 50}
              stroke="black"
            />
            <Tree data={data.left} x={x - dx} y={y + 50} dx={dx / 2} />
          </>
        )}
        {data.right && (
          <>
            <Line
              x1={x}
              y1={y + circleRadius}
              x2={x + dx}
              y2={y + 50}
              stroke="black"
            />
            <Tree data={data.right} x={x + dx} y={y + 50} dx={dx / 2} />
          </>
        )}
      </Svg>
    </View>
  );
};

export default Tree;

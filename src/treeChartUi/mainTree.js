import React from 'react';
import {View} from 'react-native';
import Svg, {Circle, Line, Text} from 'react-native-svg';

const Tree = () => {
  const treeData = {
    value: '*',
    left: {
      value: '2',
      left: {
        value: '3',
        left: null,
        right: null,
      },
      right: {
        value: '4',
        left: null,
        right: null,
      },
    },
    right: {
      value: '5',
      left: {
        value: '6',
        left: null,
        right: null,
      },
      // right: {
      //   value: '7',
      //   left: {
      //     value: '8',
      //     left: null,
      //     right: null,
      //   },
      //   right: {
      //     value: '18',
      //     left: null,
      //     right: null,
      //   },
      // },
    },
  };

  const TreeNode = ({node, x, y, dx}) => {
    const circleRadius = 10;
    return (
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
          {node.value}
        </Text>

        {node.left && (
          <>
            <Line
              x1={x}
              y1={y + circleRadius}
              x2={x - dx}
              y2={y + 50}
              stroke="black"
            />
            <TreeNode node={node.left} x={x - dx} y={y + 50} dx={dx / 2} />
          </>
        )}

        {node.right && (
          <>
            <Line
              x1={x}
              y1={y + circleRadius}
              x2={x + dx}
              y2={y + 50}
              stroke="black"
            />
            <TreeNode node={node.right} x={x + dx} y={y + 50} dx={dx / 2} />
          </>
        )}
      </Svg>
    );
  };

  const renderTreeNodes = (node, x, y, dx) => {
    if (node) {
      return (
        <View key={node.value}>
          <TreeNode node={node} x={x} y={y} dx={dx} />
          {node.left && renderTreeNodes(node.left, x - dx, y + 50, dx / 2)}
          {node.right && renderTreeNodes(node.right, x + dx, y + 50, dx / 2)}
        </View>
      );
    }
    return null;
  };

  return (
    <View style={{alignItems: 'center', paddingTop: 20}}>
      {renderTreeNodes(treeData, 75, 20, 40)}
    </View>
  );
};

export default Tree;

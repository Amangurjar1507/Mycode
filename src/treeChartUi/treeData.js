import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Circle, Line, Text} from 'react-native-svg';

const TreeNode = ({node, x, y, dx}) => {
  const circleRadius = 20;

  if (!node) {
    return null;
  }

  return (
    <View>
      <Svg height={120} width={dx * 4}>
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
          {node.id}
        </Text>
        {node.children && node.children.length > 0 && (
          <>
            <Line
              x1={x}
              y1={y + circleRadius}
              x2={x - dx}
              y2={y + 80}
              stroke="black"
            />
            {node.children.map((child, index) => (
              <TreeNode
                key={index}
                node={child}
                x={x - dx + index * dx * 2}
                y={y + 80}
                dx={dx / 2}
              />
            ))}
          </>
        )}
      </Svg>
    </View>
  );
};

const TreeUI = () => {
  const treeData = {
    id: 'A',
    children: [
      {
        id: 'B',
        children: [
          {
            id: 'D',
            children: [
              {id: 'K', children: []},
              {id: 'L', children: []},
            ],
          },
          {id: 'E', children: []},
          {
            id: 'F',
            children: [
              {id: 'M', children: []},
              {id: 'N', children: []},
            ],
          },
        ],
      },
      {
        id: 'C',
        children: [
          {
            id: 'G',
            children: [
              {id: 'Z', children: []},
              {id: 'Y', children: []},
            ],
          },
          {id: 'H', children: []},
          {id: 'I', children: []},
          {id: 'J', children: []},
        ],
      },
    ],
  };

  return (
    <View style={styles.container}>
      <TreeNode node={treeData} x={160} y={20} dx={100} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});

export default TreeUI;

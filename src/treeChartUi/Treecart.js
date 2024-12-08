import React from 'react';
import {View} from 'react-native';
import Svg, {Circle, Line} from 'react-native-svg';

const CollectionDetailActivity = () => {
  const treeData = [
    {
      id: 0,
      parentId: null,
      name: 'Main Idea',
      children: [
        {
          id: 0,
          parentId: 0,
          name: 'Evolution',
          children: [
            {
              id: 1,
              parentId: 1,
              name: 'Evolution Branch 1',
              children: [
                {
                  id: 1,
                  parentId: 2,
                  name: 'Evolution Branch 1.1',
                },
                {
                  id: 2,
                  parentId: 2,
                  name: 'Evolution Branch 1.2',
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const TreeNode = ({node, x, y, horizontalSpacing}: any) => {
    const cx = x + 55;
    const cy = y;
    const circleRadius = 13;
    const svgWidth = 300;

    return (
      <>
        <Svg height={'100%'} width={svgWidth}>
          <Circle
            cx={x}
            cy={y}
            r={circleRadius}
            fill="red"
            stroke="grey"
            strokeWidth="1"
          />
          {/* { <Circle cx={cx  + 1} cy={cy + 1} r={circleRadius} fill="grey" /> } */}

          {node?.children?.map((child: any) => (
            <>
              {child?.children?.map(
                (use: any) => (
                  console.log('use.id', use.id),
                  (
                    <>
                      <Line
                        x1={x}
                        key={use.id}
                        y1={y + circleRadius}
                        x2={x - 22}
                        y2={y + 50}
                        stroke="black"
                      />
                      <TreeNode
                        node={child.id}
                        x={x - 22}
                        y={y + 50}
                        dx={22 / 2}
                      />
                    </>
                  )
                ),
              )}
              {/* <Line
                x1={x}
                key={child.children?.[0]}
                y1={y + circleRadius}
                x2={x - 22}
                y2={y + 50}
                stroke="black"
              />
              <TreeNode node={child.id} x={x - 22} y={y + 50} dx={22 / 2} /> */}
            </>
          ))}
          {node?.children?.map(
            (child: any) => (
              console.log('child.id', child.id),
              (
                // <TreeNode
                //   key={child.id}
                //   node={child}
                //   x={x + horizontalSpacing * (child.id - node.id) - 50}
                //   y={y + 100}
                //   horizontalSpacing={horizontalSpacing}
                // />
                <>
                  <Line
                    x1={x}
                    key={child.id}
                    y1={y + circleRadius}
                    x2={x + 11}
                    y2={y + 50}
                    stroke="black"
                  />
                  <TreeNode
                    node={child.id}
                    x={x + 11}
                    y={y + 50}
                    dx={11 / 1.5}
                  />
                </>
              )
            ),
          )}
        </Svg>
      </>
    );
  };

  const Tree = ({data}: any) => {
    const horizontalSpacing = 20;
    const rootX = 120;
    const rootY = 30;

    const rootNode = data?.find((node: any) => node.parentId === null);

    return (
      <Svg width={500} height={500}>
        <TreeNode
          node={rootNode}
          x={rootX}
          y={rootY}
          horizontalSpacing={horizontalSpacing}
        />
      </Svg>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white', marginTop: 45}}>
      <Tree data={treeData} />
    </View>
  );
};

export default CollectionDetailActivity;

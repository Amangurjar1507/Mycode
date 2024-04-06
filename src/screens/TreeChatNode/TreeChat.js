import {View} from 'react-native';
import React from 'react';
import {AreaChart, LineChart, Grid} from 'react-native-svg-charts';
import {Dots} from './Dots';
// https://www.thewidlarzgroup.com/blog/make-your-custom-charts-with-react-native-svg-charts-and-typescript-step-by-step-tutorial
export default function ProfileAnalysis() {
  const data1 = [50, 10, 40, 95];
  const data2 = [20, 40, 15, 80];

  return (
    <View
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#070E2B'}}>
      <View style={{marginBottom: 20, marginHorizontal: 20}}>
        <AreaChart
          style={{height: '60%', width: '90%'}}
          data={data1.concat(data2)}
          gridMin={-100}
          gridMax={120}
          start={-100}
          contentInset={{top: 30, bottom: 30}}>
          <LineChart
            svg={{stroke: '#F07B73'}}
            style={{height: 120}}
            contentInset={{top: 20}}>
            <LineChart
              svg={{stroke: 'red'}}
              style={{height: 120}}
              contentInset={{top: 20}}>
              <Grid
                svg={{stroke: '#201E48'}}
                style={{height: '45%', with: '200%', flex: 1}}
              />
              <Dots />
            </LineChart>
          </LineChart>
        </AreaChart>
      </View>
    </View>
  );
}


// import React, {useState} from 'react';
// import {ScrollView, StyleSheet, View, Image} from 'react-native';
// import AwesomeHierarchyGraph from 'react-native-d3-tree-graph';
// import {collectionDetailTreeData} from './src/screens/CollectionDetailTreeData.const';

// const createTree = data => {
//   const rootNode = {name: 'Root', children: []};

//   data.forEach(item => {
//     const node = {
//       // name: item.name,
//       id: item.id,
//       // no_parent: false,
//       // hidden: false,
//       children: [
//         {
//           name: item.name,
//           id: item.id,
//           no_parent: true,
//           hidden: true,
//           imageUrl: {
//             href: {
//               uri: item.image,
//             },
//           },
//           nodeImageStyle: {imageHeight: 60, imageWidth: 60, opacity: 1},
//           nodeTextStyle: {fontSize: 12},
//         },
//       ],
//     };
//     rootNode.children.push(node);
//   });

//   return rootNode;
// };

// const Example = () => {
//   const [treeRoot, setTreeRoot] = useState(
//     createTree(collectionDetailTreeData),
//   );
//   return (
//     <View style={styles.container}>
//       <ScrollView horizontal style={{flex: 1}}>
//         <AwesomeHierarchyGraph root={treeRoot} />
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     flex: 1,
//   },
//   nodeContainer: {
//     padding: 10,
//     margin: 5,
//     borderRadius: 5,
//     backgroundColor: 'green',
//   },
// });

// export default Example;



// import React from 'react';
// import {View, ScrollView} from 'react-native';
// import Svg, {Circle, Line} from 'react-native-svg';

// const CollectionDetailActivity = () => {
//   const treeDasta = [
//     {
//       _id: '6532287ed91f70f84c2fb69df',
//       userId: '6532272d91f70f84c2fb695a',
//       contractAddress: '0xe36D45115658C6435c9a85757eF7cD6653C91cA7',
//     },
//     {
//       _id: '65d322a4d991f70f84c2fb6aa7',
//       userId: '653d2272d91f70f84c2fb695a',
//       parentId: '6532287e91f70f84c2fb69df',
//     },
//     {
//       _id: '653322a4991df70f84c2fb6aa7',
//       userId: '6532272d91f70f84c2fb695a',
//       parentId: '3265dd32287e91f70f84c2fb69df',
//     },
//   ];
//   // const createTree = (data, parentId) => {
//   //   return data
//   //     .filter(item => item.parentId === parentId)
//   //     .map(node => ({
//   //       ...node,
//   //       children: createTree(data, node._id),
//   //     }));
//   // };
//   function buildTree(data, parentId) {
//     const tree = [];

//     function findChildren(parentId) {
//       const children = [];
//       data.forEach(item => {
//         if (item.parentId == parentId) {
//           const subChildren = findChildren(item._id);
//           if (subChildren.length > 0) {
//             item.children = subChildren;
//           }
//           children.push(item);
//         }
//       });
//       return children;
//     }

//     tree.push(...findChildren(parentId));
//     return tree;
//   }

//   const treeData = buildTree(treeDasta, null);
//   console.log('treeData');
//   const TreeNode = ({node, x, y, horizontalSpacing}) => {
//     const verticalSpacing = 80;
//     const circleRadius = 13;
//     const cx = x + 1;
//     const cy = y;
//     return (
//       <Svg width={300} height={'100%'}>
//         {/* <Circle
//           cx={x}
//           cy={y}
//           r={circleRadius}
//           fill="red"
//           stroke="grey"
//           strokeWidth="1"
//         /> */}
//         <Circle cx={cx} cy={cy} r={circleRadius} fill="grey" strokeWidth="1" />
//         {node?.children?.map(
//           (child, index) => (
//             console.log('child naode', child),
//             (
//               // <View key={child.parentId}>
//               <Svg width={500} height={500}>
//                 <Line
//                   x1={x}
//                   y1={y + circleRadius}
//                   x2={x + (index - 1) * horizontalSpacing}
//                   y2={y + verticalSpacing}
//                   stroke="black"
//                 />
//                 <TreeNode
//                   node={child.parentId}
//                   x={x + (index - 1) * horizontalSpacing}
//                   y={y + verticalSpacing}
//                   horizontalSpacing={horizontalSpacing}
//                 />
//               </Svg>
//             )
//           ),
//         )}
//       </Svg>
//     );
//   };

//   const Tree = ({data}) => {
//     // const horizontalSpacing = 150;
//     // const rootX = 120;
//     // const rootY = 30;
//     const horizontalSpacing = 20;
//     const rootX = 170;
//     const rootY = 50;
//     const rootNode = data[0];
//     return (
//       <Svg width={500} height={500}>
//         <TreeNode
//           node={rootNode}
//           x={rootX}
//           y={rootY}
//           horizontalSpacing={horizontalSpacing}
//         />
//       </Svg>
//     );
//   };

//   return (
//     <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
//       <ScrollView contentContainerStyle={{flex: 1}} horizontal>
//         <Tree data={treeData} />
//       </ScrollView>
//     </View>
//   );
// };

// export default CollectionDetailActivity;


// import React from 'react';
// import {Dimensions, ScrollView, View} from 'react-native';
// import Svg, {Circle, Line} from 'react-native-svg';
// import styles from './collectionDetailActivity.style';
// import {treeData} from './collectionDetailActivity.const';

// const CollectionDetailActivity = () => {
//   const {width, height} = Dimensions.get('window');

//   const TreeNode = ({node, x, y, vertical, horizontalSpacing}) => {
//     const circleRadius = 10;
//     const cx = x + 42.5;
//     const cy = y;
//     const svgImage = width / 1;
//     const heightSvgImage = height / 1;
//     let yOffset = 5;
//     return (
//       <>
//         <Svg width={svgImage} height={heightSvgImage}>
//           <Circle cx={cx} cy={cy} r={circleRadius} fill="grey" />
//           {node?.children?.map(
//             child => (
//               // console.log('parentId --1', child.parentId),
//               console.log('child --1', child.id),
//               (
//                 <>
//                   <Line
//                     key={child?.id}
//                     x1={cx}
//                     y1={cy + circleRadius}
//                     x2={x + horizontalSpacing * (child?.id - node?.id) - 0}
//                     // y2={y + 70}
//                     stroke="black"
//                     y2={y + 70 + yOffset}
//                   />
//                   {/* <Line
//                     key={child?.id}
//                     x1={csx}
//                     y1={cy + circleRadius}
//                     x2={x + horizontalSpacing * (child?.id - node?.id)}
//                     y2={y + 72}
//                     stroke="black"
//                   /> */}
//                   {/ <TreeNode node={child.id} x={x - 22} y={y + 50} dx={22 / 2} /> /}
//                 </>
//               )
//             ),
//           )}
//           {node?.children?.map(
//             child => (
//               console.log('child 2', child?.id),
//               (
//                 <Svg>
//                   <TreeNode
//                     key={child?.id}
//                     node={child}
//                     // x={x + horizontalSpacing * (child?.id - node?.id) - 43}
//                     y={y + 72}
//                     horizontalSpacing={horizontalSpacing}
//                     x={x + horizontalSpacing * (child?.id - node?.id) - 43}
//                   />

//                   {/ <TreeNode node={child.parentId} x={x + 11} y={y + 50} dx={11 / 1.5} /> /}
//                 </Svg>
//               )
//             ),
//           )}
//         </Svg>
//       </>
//     );
//   };

//   const Tree = ({data}) => {
//     const horizontalSpacing = 15;
//     const rootX = width / 2 - horizontalSpacing / 1;
//     // const rootX = 175;
//     const rootNode = data?.find((node: any) => !node?.parentId);
//     // console.log('rootNode', rootNode?.id);
//     const rootY = 50;
//     // for (let i = 0; i < data.length; i++) {
//     //   console.log(' data.length --1',  data.length),
//     //   if (data[i].parentId === null) {
//     //     rootNode = data[i];
//     //     break;
//     //   }
//     // }

//     return (
//       <>
//         <TreeNode
//           node={rootNode}
//           x={rootX}
//           y={rootY}
//           horizontalSpacing={horizontalSpacing}
//         />
//       </>
//     );
//   };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flex: 1}} horizontal>
        <Tree data={treeData} />
      </ScrollView>
    </View>
  );
};

export default CollectionDetailActivity;




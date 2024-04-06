// import React from 'react';
// import {View, ScrollView, ActivityIndicator, Image} from 'react-native';
// import Svg, {Line} from 'react-native-svg';
// import {color} from '../../../theme';
// import {treeDataa} from './collectionDetailActivity.const';
// import collectionDetailTreeController from './collectionDetailActivity.controller';
// import styles from './collectionDetailActivity.style';

// const CollectionDetailActivity = () => {
//   const {loading, treeChart} = collectionDetailTreeController();

//   const TreeNode = ({node, x, y, horizontalSpacing}: any) => {
//     const verticalSpacing = 80;
//     const cx = x - 1;
//     const cy = y + 12;

//     return (
//       <>
//         {node?.children?.map((child: any, index: any) => (
//           <>
//             <Line
//               x1={cx}
//               y1={cy}
//               x2={x + (index - 1) * horizontalSpacing}
//               y2={y + verticalSpacing}
//               stroke="black"
//             />
//             <Image
//               source={{
//                 uri: child?.imageAddress,
//               }}
//               style={{
//                 width: 30,
//                 height: 30,
//                 position: 'absolute',
//                 left: x + (index - 1.3) * horizontalSpacing,
//                 top: y + verticalSpacing,
//                 borderRadius: 30,
//               }}
//             />
//             {child?.children && (
//               <TreeNode
//                 node={child}
//                 horizontalSpacing={horizontalSpacing}
//                 x={x + (index - 1) * horizontalSpacing}
//                 y={y + verticalSpacing + 15}
//               />
//             )}
//           </>
//         ))}
//       </>
//     );
//   };

//   const Tree = ({data}: any) => {
//     const horizontalSpacing = 55;
//     const rootX = 130;
//     const rootY = 50;

//     const rootNode = data?.find((node: any) => !node?.parentId);

//     return (
//       <Svg width={500} height={500}>
//         <>
//           <TreeNode
//             node={rootNode}
//             x={rootX}
//             y={rootY}
//             horizontalSpacing={horizontalSpacing}
//           />
//           {rootNode && (
//             <Image
//               source={{uri: rootNode?.imageAddress}}
//               style={{
//                 width: 30,
//                 height: 30,
//                 position: 'absolute',
//                 left: 112,
//                 top: 36,
//                 borderRadius: 30,
//               }}
//             />
//           )}
//         </>
//       </Svg>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView
//         contentContainerStyle={styles.contentContainerStyle}
//         showsHorizontalScrollIndicator={false}
//         showsVerticalScrollIndicator={false}>
//         {loading ? (
//           <View style={styles.activityIndicatorView}>
//             <ActivityIndicator size={'small'} color={color.secondry} />
//           </View>
//         ) : (
//           <View style={{marginLeft: 80}}>
//             <Tree data={treeChart} />
//           </View>
//         )}
//       </ScrollView>
//     </View>
//   );
// };

// export default CollectionDetailActivity;



// import {useEffect, useState} from 'react';
// import {useSelector} from 'react-redux';
// import {axiosInstance} from '../../../services/api/api';
// import constant from '../../../services/config/constant';
// import params from '../../../services/config/params';
// import {RootState} from '../../../services/config/redux/types';
// import {CollectionDetailTreeControllerInterface} from './collectionDetailActivity.interface';

// const collectionDetailTreeController =
//   (): CollectionDetailTreeControllerInterface => {
//     const user = useSelector((state: RootState) => state.UserReducer);
//     const [loading, setLoading] = useState<boolean>(false);
//     const [treeChart, setTreeChart] = useState<any>([]);
//     const trandIdeaData: any = useSelector(
//       (state: RootState) => state.trandIdeaReducer?.trandIdeaDetail?.idea,
//     );
//     useEffect(() => {
//       getTreeNode();
//     }, []);

//     const buildTree = (data: any, parent_id: any) => {
//       const tree: any = [];

//       data.forEach((item: any) => {
//         if (item.parentId === parent_id) {
//           const children = buildTree(data, item._id);

//           if (children.length > 0) {
//             item.children = children;
//           }

//           tree.push(item);
//         }
//       });

//       return tree;
//     };

//     const getTreeNode = async () => {
//       setLoading(true);
//       /** Tree api call */
//       try {
//         const formData = {
//           [params.id]: trandIdeaData?._id,
//         };
//         const {data} = await axiosInstance.post(constant.nodeTree, formData, {
//           headers: {
//             auth: `${user?.token}`,
//           },
//         });
//         //@ts-ignore
//         const treeData = buildTree(data?.data);
//         setTreeChart(treeData);
//         setLoading(false);
//       } catch (e: any) {
//         setLoading(false);
//       }
//     };
//     return {
//       loading,
//       setLoading,
//       treeChart,
//       setTreeChart,
//     };
//   };

// export default collectionDetailTreeController;



// import {StyleSheet} from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   contentContainerStyle: {
//     flexGrow: 1,
//   },
//   activityIndicatorView: {
//     flex: 1,
//     alignItems: 'center',
//     marginTop: 45,
//   },
//   mainView: {
//     alignItems: 'center',
//     marginLeft: 45,
//   },
// });

// export default styles;
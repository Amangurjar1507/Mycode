// import React from 'react';
// import {Text, View} from 'react-native';
// import '@walletconnect/react-native-compat';
// import {
//   useWalletConnectModal,
//   WalletConnectModal,
// } from '@walletconnect/modal-react-native';
// import connectWalletController from './connectWallet.controller';
// import styles from './connectWallet.style';
// import Button from '../../../components/common/button/Button';

// const ConnectWallet: React.FC = () => {
//   const {isConnected} = useWalletConnectModal();

//   const {handleButtonPress, loading, readContract} = connectWalletController();

//   const projectId = '72a87fcfc78abb04c65180e45e1ed268';
//   const sessionParams = {
//     namespaces: {
//       eip155: {
//         methods: [
//           'eth_sendTransaction',
//           'eth_sign',
//           'personal_sign',
//           'eth_signTypedData',
//         ],
//         chains: ['eip155:5'],
//         events: ['chainChanged', 'accountsChanged'],
//         rpcMap: {},
//       },
//     },
//   };
//   const providerMetadata: any = {
//     name: 'Episapi',
//     description: 'Connect a wallet and explore',
//     url: 'https://www.google.com/',
//     icons: 'https://your-project-logo.com/',
//     redirect: {
//       native: 'walletapp://',
//       universal: 'https://www.walletconnectrn.com',
//     },
//   };
//   return (
//     <View style={[styles.mainContainer]}>
//       <View style={styles.mainViewStyle}>
//         <View style={styles.subContainer}>
//           <Text style={[styles.connectText]}>Connect Your wallet</Text>
//           <Text style={styles.textStyle}>
//             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
//             nonumy eirmod tempor invidunt ut labore et
//           </Text>
//         </View>
//         <Button
//           text={isConnected ? 'Disconnect wallet' : 'Connect wallet'}
//           buttonContainer={styles.buttonStyle}
//           onPress={handleButtonPress}
//           isLoading={loading}
//           disabled={loading}
//         />
//         <WalletConnectModal
//           projectId={projectId}
//           providerMetadata={providerMetadata}
//           themeMode={'light'}
//           sessionParams={sessionParams}
//         />
//       </View>
//     </View>
//   );
// };

// export default ConnectWallet;

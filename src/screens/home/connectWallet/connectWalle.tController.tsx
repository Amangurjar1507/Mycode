// import {useNavigation} from '@react-navigation/native';
// import {useWalletConnectModal} from '@walletconnect/modal-react-native';
// import '@walletconnect/react-native-compat';
// import 'react-native-get-random-values';
// import '@ethersproject/shims';
// import {ethers} from 'ethers';
// import React, {useEffect, useMemo, useState} from 'react';
// import {useSelector} from 'react-redux';
// import {wagmiContract} from '../../../../MyContract';
// import {AuthNavigationProps} from '../../../navigation/stacks/authStack';
// import {RootState} from '../../../services/config/redux/types';
// import {ConnectWalletControllerProps} from './connectWallet.interface';
// import {useAppDispatch} from '../../../utility/functions/useReduxHooks';
// import {ideaContractAddress} from '../../../services/config/redux/walletReducer/action';

// const connectWalletController = (): ConnectWalletControllerProps => {
//   const userAllData: any = useSelector((state: RootState) => state.UserReducer);
//   const walletData: any = useSelector(
//     (state: RootState) => state.walletReducer,
//   );
//   const dispatch = useAppDispatch();
//   const navigation = useNavigation<AuthNavigationProps>();
//   const {isConnected, address, provider, open, close} = useWalletConnectModal();
//   const [loading, setLoading] = useState<boolean>(false);

//   const web3Provider = useMemo(
//     () =>
//       provider
//         ? new ethers.providers.Web3Provider(provider)
//         : walletData?.providerData,
//     [provider],
//   );
//   useEffect(() => {
//     setLoading(true);
//     let timeout = setTimeout(() => {
//       setLoading(false);
//     }, 7000);
//     return () => clearTimeout(timeout);
//   }, []);

//   const handleButtonPress = async () => {
//     if (!address) {
//       open();
//     } else {
//       provider?.disconnect();
//     }
//   };

//   const readContract = async () => {
//     if (!web3Provider) {
//       throw new Error('web3Provider not connected');
//     }
//     const signer = web3Provider.getSigner();

//     const factory = new ethers.ContractFactory(
//       wagmiContract.abi,
//       wagmiContract.bytecode,
//       signer,
//     );

//     const contract = await factory.deploy(
//       'https://gateway.pinata.cloud/ipfs/QmS9LLTn5noqr7koMeVBFYhbwvT8FZgPpFBFUsqsz8syic/BabyNFT2_metadata.json',
//       '0xFF6ADC414CE1C773F540f7d68b58328eb8b06d40',
//       '0x148b1BF164b9E253b9785eCA9a8ebB196f708c92',
//       '0x505762216F155b59Bf308C624A4859cb9B85E7E9',
//       '0x9386F72259560E53C07dDfE43e5bf63C905B3231',
//       '0x33837ed19B82C429EdF28d31d69135887A5f0212',
//       '0x4b3dF306C5C960571D4a28F78FdD488C463333bc',
//       '0x2e737b743e369E0789371C2Fc0ca9adB90b2CD79',
//     );

//     const tx = await contract.deployTransaction.wait();

//     const {contractAddress} = tx;

//     console.log(`Contract deployed at address ${contractAddress}`);
//     dispatch(ideaContractAddress(contractAddress));
//     const contratObject = new ethers.Contract(
//       contractAddress,
//       wagmiContract.abi,
//       signer,
//     );
//     const transaction = await contratObject.createLeafToken(
//       1,
//       'https://bafkreiej2d76hfg7v4ywrcuvcfyqmyyw2yvvhnajofnwziwq3rhugdbcr4.ipfs.nftstorage.link/',
//     );
//     await transaction.wait();
//     console.log('transaction', transaction);
//   };

//   const onNavigation = () => {
//     navigation.navigate('dashboard');
//   };

//   return {
//     handleButtonPress,
//     isConnected,
//     loading,
//     setLoading,
//     onNavigation,
//     userAllData,
//     readContract,
//   };
// };

// export default connectWalletController;

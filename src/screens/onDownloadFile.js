
// import RNFetchBlob from 'rn-fetch-blob';



// const onDownloadFile = (file: string, type: string) => {
//     setFileLoader(true);
//     const fileUrl = constant.imageURL + `${file}`;
//     const fileName = file;
//     const docType = file?.substring(file.indexOf('.'));
//     const date = new Date();
//     const {config, fs} = RNFetchBlob;
//     config({
//       addAndroidDownloads: {
//         useDownloadManager: true,
//         description: 'File Downloaded',
//         notification: true,
//         path:
//           (Platform.OS == 'ios' ? fs.dirs.DocumentDir : fs.dirs.DCIMDir) +
//           '/file_' +
//           Math.floor(date?.getTime() + date?.getSeconds() / 2),
//       },
//       fileCache: true,
//     })
//       .fetch('GET', fileUrl, {})
//       .then(res => {
//         console.log('res ', res?.path());

//         setFileLoader(false),
//           Snackbar.show({text: 'File Downloaded Successfully'});
//       })
//       .catch(e => {
//         setFileLoader(false), Snackbar.show({text: 'Filed Please ry Again'});
//       });
//   };


// in this code I need to Backend ki Base uri image bali


// import RNFetchBlob from 'react-native-fetch-blob';

// const imageUrl = 'https://example.com/1848/bxb.png';
// const downloadPath = RNFetchBlob.fs.dirs.DownloadDir + '/bxb.png';

// RNFetchBlob.config({
//     fileCache: true,
//     appendExt: 'png',
//     path: downloadPath,
// })
//     .fetch('GET', imageUrl)
//     .then((res) => {
//         console.log('Image downloaded to:', res.path());
//     })
//     .catch((error) => {
//         console.error('Error downloading image:', error);
//     });


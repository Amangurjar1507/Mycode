// const sendMessage = async () => {
//     console.log('all 4555665');
//     setLoading(true);
//     const mediaType =
//       route?.params?.videoType?.[0]?.node?.type === 'video/mp4'
//         ? route?.params?.videoType?.[0]?.node?.image?.uri
//         : route?.params?.videoType;
//     const typeDefine =
//       route?.params?.videoType?.[0]?.node?.type === 'video/mp4'
//         ? 'Video'
//         : 'Image';
//     let imageData: any = {
//       name: 'Idea_img.jpeg',
//       uri: mediaType,
//       type: 'image/jpeg',
//     };
//     const formData = new FormData();
//     formData.append(
//       params?.to,
//       route?.params?.userItem?.followers_id?._id ||
//         route?.params?.userItem?._id,
//     );
//     formData.append(params?.image, imageData);
//     formData.append(params?.mediaType, typeDefine);
//     console.log('formData ', formData);
//     try {
//       socket?.emit('uploadImage', formData);
//       setLoading(false);
//       // modalClose();
//     } catch (e: any) {
//       console.log('e', e);
//       setLoading(false);
//     }
//     socket.on('eventFromServer', data => {
//       console.log('Response from server:', data?.data?.data);
//     });
//   };


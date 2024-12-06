import io, {Socket} from 'socket.io-client';
const [socketData, setSocketData] =
  (useState < Socket) | (undefined > undefined);

useEffect(() => {
  setChatId(route?.params?.item?.chatId);
  initSocket();

  return () => {
    socketData?.removeAllListeners();
  };
}, []);
const initSocket = () => {
  /** Initialize and connect socket aftser connection join group  */
  const socket = io(constant.socketURL, {
    autoConnect: true,
    auth: {
      token: token,
    },
  });
  socket.on('connect', () => {
    setSocketData(socket);
  });
};
useEffect(() => {
  if (socketData) {
    joinGroup();
  }
}, [socketData]);
const getMessages = (data: any) => {
  if (route?.params?.from == 'group') {
    if (data[0]?.chatId && !chatId) {
      setChatId(data[0]?.chatId);
    }
  }

  if (data.length !== 0) {
    const chatArray = data?.map((item, index) => {
      if (item?.storyId) {
        return {
          _id: item?._id,
          text: item.message,
          createdAt: item.createdAt,
          avatar: item?.senderId?.profile,
          storyId: item?.storyId,
          user: {
            _id: item?.senderId?._id,
            avatar: item?.senderId?.profile,
          },
        };
      } else {
        return {
          _id: item?._id,
          text: item.message,
          createdAt: item.createdAt,
          avatar: item?.senderId?.profile,
          user: {
            _id: item?.senderId?._id,
            avatar: item?.senderId?.profile,
          },
        };
      }
    });

    setChatData(chatArray);
  }
};
useEffect(() => {
  if (
    route?.params?.item?.isRequestedAccept !== undefined &&
    route?.params?.from !== 'group'
  ) {
    setTimeout(() => {
      setRequestModal(!route?.params?.item?.isRequestedAccept);
    }, 300);
  }
  socketData?.on(constant.getMessage, getMessages);
}, []);

const joinGroup = () => {
  if (route?.params?.from == 'group') {
    socketData?.emit('GroupChat', {
      chat_id: chatId,
      from: userData?._id,
    });
    socketData?.on(constant.getMessage, getMessages);
  } else {
    socketData?.emit(
      constant.joinGroup,
      {
        chat_id: chatId,
      },
      (event: any) => {},
    );
  }
  socketData?.on(constant.history, getMessagesHistory);
};

const getMessagesHistory = (data: any) => {
  if (data.length !== 0) {
    const chatArray = data?.map((item: ChatData, index: number) => {
      if (item?.storyId) {
        return {
          _id: item?._id,
          text: item.message,
          createdAt: item.createdAt,
          avatar: item?.senderId?.profile,
          storyId: item?.storyId,
          user: {
            _id: item?.senderId?._id,
            avatar: item?.senderId?.profile,
          },
        };
      } else {
        return {
          _id: item?._id,
          text: item.message,
          createdAt: item.createdAt,
          avatar: item?.senderId?.profile,
          user: {
            _id: item?.senderId?._id,
            avatar: item?.senderId?.profile,
          },
        };
      }
    });

    setChatData(chatArray);
  }
};

const sendMessage = () => {
  /**Send messgae  */

  if (message) {
    if (route?.params?.from == 'group') {
      socketData?.emit('GroupChat', {
        chat_id: chatId,
        from: userData?._id,
        messages: message,
      });
      socketData?.on(constant.getMessage, getMessages);
    } else {
      let data = {
        messages: message,
        from: userId,
        to: [route?.params?.item?.user?._id],
        chat_id: chatId,
      };
      socketData?.emit(constant.message, data);
      socketData?.on(constant.getMessage, getMessages);
    }
    setMessage(undefined);
  }
};

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

// import {CometChat} from '@cometchat/chat-sdk-react-native';
// import {
//   CometChatConversationsWithMessages,
//   ConversationsConfigurationInterface,
//   MessagesConfigurationInterface,
// } from '@cometchat/chat-uikit-react-native';
// import React, {useEffect} from 'react';
// import svg from '../../../assets/svgIndex';
// import {Container} from '../../../components';
// import chatListController from './chatList.controller';
// import style from './chatList.style';
// import {messageListener} from '../../../utility/functions/messageListener';

// const ChatList: React.FC = () => {
//   const {goBack, cometChatData, onRightIcon, onEditIcon} = chatListController();
//   var listenerID = 'UNIQUE_LISTENER_ID';
//   // useEffect(() => {
//   //   messageListener(listenerID);
//   //   return () => {
//   //     CometChat.removeMessageListener(listenerID);
//   //   };
//   // }, [CometChat]);
//   useEffect(() => {
//     messageListener(listenerID);
//     const inter = setInterval(() => {
//       messageListener(listenerID);
//     }, 5000);
//     return () => clearInterval(inter);
//   }, [CometChat]);

//   // const handleNewMessage = (message: any) => {
//   //   console.log('message', message);
//   //   setConversationList(prevList => {
//   //     const existingIndex = prevList.findIndex(

//   //       item => item.conversationId === message.conversationId,
//   //     );

//   //     if (existingIndex !== -1) {
//   //       const updatedList = [...prevList];
//   //       updatedList[existingIndex].text = message.data.text;
//   //       return updatedList;
//   //     } else {
//   //       return [message, ...prevList];
//   //     }
//   //   });
//   // };

//   // const getMsg = () => {
//   //   let conversationsRequestBuilder =
//   //     new CometChat.ConversationsRequestBuilder()
//   //       .setLimit(20)
//   //       .setConversationType(ConversationTypeConstants.both);
//   // };
//   let user = new CometChat.User(cometChatData?.uid, cometChatData?.name);
//   // Create an object of  ConversationsConfiguration
//   let conversationsConfiguration: ConversationsConfigurationInterface = {
//     avatarStyle: {
//       borderRadius: 20,
//     },
//     disableSoundForMessages: true,
//     disableTyping: false,
//     backButtonIcon: false,
//     showBackButton: false,
//   };
//   let messagesConfiguration: MessagesConfigurationInterface = {
//     hideMessageComposer: false,
//     disableSoundForMessages: true,
//     disableTyping: false,
//   };

//   return (
//     <Container
//       isHeader
//       leftIcon={svg.backArrow}
//       onLeftIcon={goBack}
//       title="Chats"
//       rightIcon={svg.infinityIcon}
//       rightView
//       rightViewContainer={style.editIcon}
//       onRightIcon={onRightIcon}
//       onRightView={onEditIcon}
//       rightViewIcon={svg.editIcon}>
//       <CometChatConversationsWithMessages
//         conversationsConfiguration={conversationsConfiguration}
//         messagesConfigurations={messagesConfiguration}
//       />
//     </Container>
//   );
// };

// export default ChatList;


// const sendYourMessage = async (text: any, imageUri?: string) => {
//     const receiverID = '65bb781742dcb5b8525b2c5c';
  
//     if (imageUri) {
//       try {
//         const image = await ImagePicker.openPicker({
//           path: imageUri,
//           width: 300,
//           height: 400,
//           cropping: true,
//         });
  
//         const file = {
//           path: image.path,
//           name: 'image.jpg', // replace with the actual file name
//           type: 'image/jpeg', // replace with the actual file type
//         };
//         const mediaMessage = new CometChat.MediaMessage(
//           receiverID,
//           file,
//           CometChat.MESSAGE_TYPE.IMAGE,
//           CometChat.RECEIVER_TYPE.USER,
//         );
  
//         CometChat.sendMediaMessage(mediaMessage)
//           .then((message: any) => {
//             console.log('Message sent successfully:', message);
  
//             setChatData((prevMessages: any) =>
//               GiftedChat.append(prevMessages, [
//                 {
//                   _id: message.id,
//                   text: message.text,
//                   createdAt: message.sentAt,
//                   user: {
//                     _id: message.sender.uid,
//                     name: message.sender.name,
//                   },
//                   image: message.data.url,
//                 },
//               ]),
//             );
//           })
//           .catch((error: any) => {
//             console.log('Message sending failed with error:', error);
//           });
//       } catch (error) {
//         console.log('Image picking error:', error);
//       }
//     } else {
//       console.log('Handle sending text messages (your existing code)',);

//       // Handle sending text messages (your existing code)
//     }
//   };
    
//   const openImagePicker = async () => {
//     try {
//       const image = await ImagePicker.openPicker({
//         width: 300,
//         height: 400,
//         cropping: true,
//       });
  
//       if (image.path) {
//         console.log('Image URI:', image.path);
//         sendYourMessage('', image.path);
//       }
//     } catch (error) {
//        if (error.code === 'E_PICKER_CANCELLED') {
//         console.log('User cancelled image selection');
//       } else {
//         console.log('Image picking error:', error);
//       }
//     }
//   };



// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   Platform,
//   StyleSheet,
// } from "react-native";
// import { GiftedChat } from "react-native-gifted-chat";
// import { CometChat } from "@cometchat/chat-sdk-react-native";

// const StackNavigator = () => {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [chatData, setChatData] = useState<IMessage[]>([]);

//   const handleLogin = async () => {
//     try {
//       const user = await CometChat.login(
//         "65bb919642dcb5b8525e181b",
//          "9944f82721f4825370a5ddc4f41d4d144869c11a"
//       );
//       console.log("Login successful:", user);
//       fetchInitialMessages()
//     } catch (error) {
//       console.log(" failed with error:", error);
//     }Login
//   };

//   const fetchInitialMessages = async () => {
//     try {
//       const messagesRequest = new CometChat.MessagesRequestBuilder()
//         .setUID("65bb919642dcb5b8525e181b")
//          .setLimit(30)
//         .build();
//       const fetchedMessages = await messagesRequest.fetchPrevious();
//       const formattedMessages: any = fetchedMessages.map((message: any) => ({
//         _id: message.id,
//         text: message.text,
//         createdAt: message.sentAt,
//         user: {
//           _id: message.sender.uid,
//           name: message.sender.name,
//         },
//       }));
//     //   console.log('message', JSON.stringify(fetchedMessages)),
//         setChatData(formattedMessages);
//     } catch (error) {
//       console.log('Error fetching messages:', error);
//     }
//   };


//   const onSend = (newMessages = []) => {
//     setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
//     const messageText = newMessages[0].text;
//     sendMessage(messageText);
//   };

//   const sendYourMessage = (text: any) => {
//     const receiverID = '65bb781742dcb5b8525b2c5c';
//     // const receiverID = '65bb919642dcb5b8525e181b';

    
//     const messageType = CometChat.MESSAGE_TYPE.TEXT;
//     const textMessageObj = new CometChat.TextMessage(
//       receiverID,
//       text,
//       messageType,
//     );
//     textMessageObj.setReceiverType(CometChat.RECEIVER_TYPE.USER);
//     CometChat.sendMessage(textMessageObj)
//       .then((message: any) => {
//         console.log('Message sent successfully:', message);
//         setChatData((prevMessages: any) =>
//           GiftedChat.append(prevMessages, [
//             {
//               _id: message.id,
//               text: message.text,
//               createdAt: message.sentAt,
//               user: {
//                 _id: message.sender.uid,
//                 name: message.sender.name,
//               },
//             },
//           ]),
//         );
//       })
//       .catch(error => {
//         console.log('Message sending failed with error:', error);
//       });
//   };


//   useEffect(() => {
//     handleLogin();
//   }, []);

//   useEffect(() => {
//     const delay = setTimeout(() => {
//       fetchInitialMessages();
//     }, 3000);
//     return () => clearTimeout(delay);
//   }, []);

//  const ChatCard = ({message, userId}: any) => {
//     console.log('userId ssds:', userId);

//     const isUserSender = message.user._id === userId;
//     return (
//       <View>
//         <View
//           style={[
//            { padding: 10,
//             paddingVertical: 8,
//             paddingHorizontal: 12,
//             borderRadius: 20,
//             marginRight: 5,
//             marginBottom: 22,
//             marginTop: 2,
//        },
//             isUserSender ? { backgroundColor: 'red', // Green color for sender
//             alignSelf: 'flex-end',} :  { backgroundColor: '#4CAF50', // Green color for sender
//             alignSelf: 'flex-start',},
//           ]}>
//           <Text style={{  fontSize: 16,
//     color: 'white',}}>{message.text}</Text>
//         </View>
//       </View>
//     );
//   };

//    return (
//     <View style={styles.container}>
//       <GiftedChat
//         messages={chatData}
//         onSend={(newMessages) => onSend(newMessages)}
//         user={{
//           _id: "65bb781742dcb5b8525b2c5c",
//          }}
//         renderInputToolbar={() => <View />}
//         renderAvatar={(props) => <View />}
//         renderBubble={(props) => (
//           <ChatCard
//             message={props?.currentMessage}
//             userId={"65bb781742dcb5b8525b2c5c"}
//           />
//         )}
//         inverted={true}
//       />
//       <View style={styles.inputContainer}>
//         <TextInput
//           placeholder="Type a message..."
//           value={message}
//           onChangeText={(text) => setMessage(text)}
//           style={styles.input}
//           placeholderTextColor={"white"}
//           returnKeyType="done"
//         />
//         {message && (
//           <TouchableOpacity
//             style={styles.sendButton}
//             onPress={() => {
//               sendYourMessage(message);
//               setMessage("");
//             }}
//           >
//             <Text style={styles.sendButtonText}>Send Messages</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//   },
//   avatarContainer: {
//     marginRight: 8,
//     backgroundColor: "red",
//     padding: 10,
//     borderRadius: 20,
//   },
//   avatarText: {
//     fontWeight: "bold",
//     fontSize: 16,
//   },
//   messageContainer: {
//     padding: 10,
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 20,
//     marginRight: 5,
//     marginBottom: 22,
//     marginTop: 2,
//     alignSelf: "flex-start",
//   },
//   senderMessage: {
//     backgroundColor: "#4CAF50", // Green color for sender
//     alignSelf: "flex-end",
//   },
//   receiverMessage: {
//     backgroundColor: "#E0E0E0", // Light gray color for receiver
//     alignSelf: "flex-start",
//   },
//   messageText: {
//     fontSize: 16,
//     color: "white",
//   },
//   inputContainer: {
//     backgroundColor: "blue",
//     borderRadius: 30,
//     height: 50,
//     borderWidth: 1,
//     marginBottom: 27,
//     flexDirection: "row",
//     alignItems: "center",
//     paddingRight: 7,
//     marginHorizontal: 16,
//   },
//   input: {
//     flex: 1,
//     color: "green",
//     fontSize: 18,
//   },
//   sendButton: {
//     marginLeft: 10,
//     padding: 10,
//   },
//   sendButtonText: {
//     color: "white",
//     fontWeight: "bold",
//   },
// });


// export default StackNavigator;

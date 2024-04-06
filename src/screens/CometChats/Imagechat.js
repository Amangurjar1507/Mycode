import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { CometChat } from "@cometchat/chat-sdk-react-native";
import ImagePicker from "react-native-image-crop-picker";

const StackNavigator = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleLogin = async () => {
    try {
      const user = await CometChat.login(
        "etbrjt56lngyupintnux3x6dnwj3",
        "9944f82721f4825370a5ddc4f41d4d144869c11a"
      );
      fetchInitialMessages();
    } catch (error) {
      console.log("Login failed with error:", error);
    }
  };
  useEffect(() => {
    handleLogin();
  }, []);

  const fetchInitialMessages = async () => {
    try {
      const messagesRequest = new CometChat.MessagesRequestBuilder()
        .setUID("ek2fbstzjrysdzm6xt6wcismn9a3")
        .setLimit(30)
        .build();
      const fetchedMessages = await messagesRequest.fetchPrevious();
      const formattedMessages = fetchedMessages.map((message) => ({
        _id: message.id,
        text: message.text,
        createdAt: message.sentAt,
        user: {
          _id: message.sender.uid,
          name: message.sender.name,
        },
      }));
      setMessages(formattedMessages);
    } catch (error) {
      console.log("Error fetching messages:", error);
    }
  };

  const sendYourMessage = async (text, image) => {
    const receiverID = "ek2fbstzjrysdzm6xt6wcismn9a3";
    if (image) {
      try {
        const file = {
          path: image.path,
          name: "image.jpg",
          type: "image/jpeg",
        };
        const mediaMessage = new CometChat.MediaMessage(
          receiverID,
          file,
          CometChat.MESSAGE_TYPE.IMAGE,
          CometChat.RECEIVER_TYPE.USER
        );
        const sentMessage = await CometChat.sendMediaMessage(mediaMessage);
        setMessages((prevMessages) =>
          GiftedChat.append(prevMessages, [
            {
              _id: sentMessage.id,
              text: sentMessage.text,
              createdAt: sentMessage.sentAt,
              user: {
                _id: sentMessage.sender.uid,
                name: sentMessage.sender.name,
              },
              image: sentMessage.data.url,
            },
          ])
        );
        console.log("Image sent successfully:", sentMessage);
      } catch (error) {
        console.log("Image sending failed with error:", error);
      }
    }
    try {
      const messageType = CometChat.MESSAGE_TYPE.TEXT;
      const textMessageObj = new CometChat.TextMessage(
        receiverID,
        text,
        messageType
      );
      textMessageObj.setReceiverType(CometChat.RECEIVER_TYPE.USER);
      CometChat.sendMessage(textMessageObj).then((message) => {
        setMessages((prevMessages) =>
          GiftedChat.append(prevMessages, [
            {
              _id: message.id,
              text: message.text,
              createdAt: message.sentAt,
              user: {
                _id: message.sender.uid,
                name: message.sender.name,
              },
            },
          ])
        );
      });
      console.log("Message sent successfully:", sentMessage);
    } catch (error) {
      console.log("Message sending failed with error:", error);
    }
  };

  const openImagePicker = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      if (image.path) {
        console.log("Image URI:", image.path);
        sendYourMessage("", image);
      }
    } catch (error) {
      if (error.code === "E_PICKER_CANCELLED") {
        console.log("User cancelled image selection");
      } else {
        console.log("Image picking error:", error);
      }
    }
  };
  const ChatCard = ({ message, userId }) => {
    const isUserSender = message.user._id === userId;
    return (
      <View style={{ flexDirection: "row" }}>
        {!isUserSender ? (
          <View>
            <Image
              source={{
                uri: "https://www.shareicon.net/data/2016/09/15/829452_user_512x512.png",
              }}
              style={{ width: 22, height: 22 }} // Adjust the width and height as needed
            />
          </View>
        ) : null}
        <View
          style={[
            styles.messageContainer,
            isUserSender ? styles.senderMessage : styles.receiverMessage,
          ]}
        >
          <Text style={styles.messageText}>{message.text} jhj</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages.filter((msg) => msg.text !== undefined)}
        onSend={(newMessages) => sendYourMessage(newMessages[0].text)}
        user={{
          _id: "etbrjt56lngyupintnux3x6dnwj3",
        }}
        renderInputToolbar={() => <View />}
        renderAvatar={() => <View />}
        inverted={true}
        renderBubble={(props) => (
          <ChatCard
            message={props?.currentMessage}
            userId={"etbrjt56lngyupintnux3x6dnwj3"}
          />
        )}
      />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type a message..."
          value={message}
          onChangeText={(text) => setMessage(text)}
          style={styles.input}
          placeholderTextColor={"white"}
          returnKeyType="done"
        />
        {message && (
          <TouchableOpacity
            style={styles.sendButton}
            onPress={() => {
              sendYourMessage(message);
              setMessage("");
            }}
          >
            <Text style={styles.sendButtonText}>Send Messages</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => {
            openImagePicker();
          }}
        >
          <Text style={styles.sendButtonText}>Open Gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  inputContainer: {
    backgroundColor: "blue",
    borderRadius: 30,
    height: 50,
    borderWidth: 1,
    marginBottom: 27,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 7,
    marginHorizontal: 16,
  },
  messageContainer: {
    padding: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 5,
    marginBottom: 22,
    marginTop: 2,
    alignSelf: "flex-start",
  },
  input: {
    flex: 1,
    color: "green",
    fontSize: 18,
  },
  sendButton: {
    marginLeft: 10,
    padding: 10,
  },
  sendButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  senderMessage: {
    backgroundColor: "#4CAF50",
    alignSelf: "flex-end",
  },
  receiverMessage: {
    backgroundColor: "#E0E0E0",
    alignSelf: "flex-start",
  },
  messageText: {
    fontSize: 16,
    color: "red",
    flex: 1,
  },
});

export default StackNavigator;

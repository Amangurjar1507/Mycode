// import React, { useState, useEffect } from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import { CometChat } from "@cometchat-pro/react-native-chat";
// import { RTCView, mediaDevices } from "react-native-webrtc";

// const VideoCallReceiverScreen = () => {
//   const [currentCall, setCurrentCall] = useState(null);
//   const [isMuted, setIsMuted] = useState(false);
//   const [isSpeakerEnabled, setIsSpeakerEnabled] = useState(false);
//   const [isFrontCamera, setIsFrontCamera] = useState(true);
//   const [localStream, setLocalStream] = useState(null);
//   const [remoteStream, setRemoteStream] = useState(null);

//   useEffect(() => {
//     CometChat.addCallListener(
//       "UNIQUE_LISTENER_ID",
//       new CometChat.CallListener({
//         onIncomingCallReceived: (call)
//  => {
//           setCurrentCall(call)
// ;
//           console.log("Incoming call:", call);
//         },
//         onIncomingCallCancelled: (call)
//  => {
//           setCurrentCall(null);
//           console.log("Incoming call cancelled:", call);
//         },
//       })
//     );
//   }, []);
//   useEffect(() => {
//     const initCall = async () => {
//       try {
//         const stream = await mediaDevices.getUserMedia({
//           video: {
//             facingMode: isFrontCamera ? "user" : "environment",
//           },
//           audio: true,
//         });
//         setLocalStream(stream)
// ;
//       } catch (error) {
//         console.log("Error accessing camera and/or microphone:", error);
//       }
//     };

//     initCall();

//     return () => {
//       if (localStream) {
//         localStream.getTracks().forEach((track) => track.stop());
//       }
//     };
//   }, [isFrontCamera]);
//   const acceptVideoCall = () => {
//     CometChat.acceptCall(currentCall.sessionId)
//       .then((call)
//  => {
//         // Call accepted
//         console.log("Video call accepted:", call);
//       })
//       .catch((error) => {
//         // Handle call acceptance error
//         console.log("Error accepting video call:", error);
//       });
//   };

//   const rejectVideoCall = () => {
//     CometChat.rejectCall(currentCall.sessionId, CometChat.CALL_STATUS.REJECTED)
//       .then(() => {
//         console.log("Video call rejected");
//       })
//       .catch((error) => {
//         // Handle call rejection error
//         console.log("Error rejecting video call:", error);
//       });
//   };

//   const toggleMute = () => {
//     setIsMuted((prevState) => !prevState);
//     // Toggle mute functionality
//   };
//   const initCall = async () => {
//     try {
//       const facingMode = isFrontCamera ? "user" : "environment";
//       const videoConstraints = {
//         facingMode,
//       };

//       const stream = await mediaDevices.getUserMedia({
//         video: videoConstraints,
//         audio: true,
//       });

//       setLocalStream(stream)
// ;
//     } catch (error) {
//       console.log("Error accessing camera and/or microphone:", error);
//     }
//   };

//   const toggleSpeaker = () => {
//     setIsSpeakerEnabled((prevState) => !prevState);
//   };
//   const toggleCamera = () => {
//     setIsFrontCamera((prevState) => !prevState);
//     // initCall();
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.videoContainer}>
//         {localStream && (
//           <RTCView streamURL={localStream.toURL()} style={styles.localVideo} />
//         )}
//         {remoteStream && (
//           <RTCView
//             streamURL={remoteStream.toURL()}
//             style={styles.remoteVideo}
//           />
//         )}
//       </View>

//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button} onPress={acceptVideoCall}>
//           <Text style={{ color: "green" }}>acceptVideoCall</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.button} onPress={rejectVideoCall}>
//           <Text style={{ color: "red" }}>rejectVideoCall</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.button} onPress={toggleMute}>
//           <Text style={{ color: isMuted ? "black" : "white" }}>
//             {isMuted ? "muit" : "unmiuyt"}
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.button} onPress={toggleSpeaker}>
//           <Text style={{ color: isMuted ? "black" : "#3498db" }}>
//             {isSpeakerEnabled ? "volume-offuit" : "md-volume-high"}
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.button} onPress={toggleCamera}>
//           <Text style={{ color: isMuted ? "black" : "#3498db" }}>
//             {!isSpeakerEnabled ? "backCamera" : "frountCamera"}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ecf0f1",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   videoContainer: {
//     flex: 1,
//     flexDirection: "row",
//     backgroundColor: "#000",
//   },
//   localVideo: {
//     flex: 1,
//     aspectRatio: 1,
//     width: "100%",
//   },
//   remoteVideo: {
//     flex: 1,
//     aspectRatio: 1,
//     width: "100%",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//     padding: 16,
//   },
//   button: {
//     backgroundColor: "#fff",
//     padding: 16,
//     borderRadius: 50,
//   },
// });

// export default VideoCallReceiverScreen;


import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import CometChat from "@cometchat-pro/react-native-chat";
import { RTCView, mediaDevices } from "react-native-webrtc";

const VideoCallScreen = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [isFrontCamera, setIsFrontCamera] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeakerEnabled, setIsSpeakerEnabled] = useState(false);

  useEffect(() => {
    const initCall = async () => {
      try {
        const stream = await mediaDevices.getUserMedia({
          video: {
            facingMode: isFrontCamera ? "user" : "environment",
          },
          audio: true,
        });
        setLocalStream(stream);
      } catch (error) {
        console.log("Error accessing camera and/or microphone:", error);
      }
    };

    initCall();

    return () => {
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [isFrontCamera]);

  const acceptCall = async () => {
    try {
      const call = await CometChat.getActiveCall();
      const callSession = await call.getSession();
      const stream = await mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setRemoteStream(stream);
      CometChat.acceptCall(callSession.sessionId).then(() => {
        console.log("Call accepted");
      });
    } catch (error) {
      console.log("Error accepting call:", error);
    }
  };

  const toggleCamera = async () => {
    try {
      const stream = await mediaDevices.getUserMedia({
        video: {
          facingMode: isFrontCamera ? "user" : "environment",
        },
        audio: true,
      });
      setLocalStream(stream);
      setIsFrontCamera((prevIsFrontCamera) => !prevIsFrontCamera);
    } catch (error) {
      console.log("Error toggling camera:", error);
    }
  };

  const toggleMute = () => {
    localStream.getAudioTracks().forEach((track) => {
      track.enabled = !isMuted;
    });
    setIsMuted(!isMuted);
  };

  const toggleSpeaker = () => {
    setIsSpeakerEnabled(!isSpeakerEnabled);
  };

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        {localStream && (
          <RTCView streamURL={localStream.toURL()} style={styles.localVideo} />
        )}
        {remoteStream && (
          <RTCView
            streamURL={remoteStream.toURL()}
            style={styles.remoteVideo}
          />
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Accept Call" onPress={acceptCall} />
        <Button
          title="Toggle Camera"
          onPress={toggleCamera}
          style={styles.button}
        />
        <Button
          title={isMuted ? "Unmute" : "Mute"}
          onPress={toggleMute}
          style={styles.button}
        />
        <Button
          title={isSpeakerEnabled ? "Disable Speaker" : "Enable Speaker"}
          onPress={toggleSpeaker}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  videoContainer: {
    flexDirection: "row",
  },
  localVideo: {
    flex: 1,
    aspectRatio: 1,
    width: "100%",
  },
  remoteVideo: {
    flex: 1,
    aspectRatio: 1,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    margin: 10,
  },
});

export default VideoCallScreen;

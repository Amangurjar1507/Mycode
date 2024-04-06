import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  Platform,
  Modal,
  TextInput,
  StatusBar,
} from 'react-native';
import style from '../../../Components/Style';
import {GiftedChat, Time, Bubble} from 'react-native-gifted-chat';
import ImagePicker from 'react-native-image-crop-picker';
import Global from '../../../Components/Global';
import {connect} from 'react-redux';
import {
  sendmsgListFetch,
  getUsermsgListFetch,
} from '../../../Redux/Action/ChatAction';
import Video from 'react-native-video';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AudioRecorder, AudioUtils} from 'react-native-audio';
import ChatAudio from './ChatAudio';
import * as RNLocalize from 'react-native-localize';
import moment1 from 'moment-timezone';
class ChatModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      message: '',
      height: 20,
      image: '',
      ImageData: '',
      uploadedFile: '',
      videouri: '',
      userData: this.props.route.params.item,
      currentTime: 0,
      recording: false,
      paused: false,
      stoppedRecording: false,
      finished: false,
      hasPermission: undefined,
      audioPath: `${
        AudioUtils.DocumentDirectoryPath
      }/${this.messageIdGenerator()}test.aac`,
      audioSettings: {
        SampleRate: 22050,
        Channels: 1,
        AudioQuality: 'Low',
        AudioEncoding: 'aac',
        MeteringEnabled: true,
        IncludeBase64: true,
        AudioEncodingBitRate: 32000,
        messagelist: this.props.chat.sendmsgList,
        selectedVideo: '',
        overlay: false,
      },
      isVisible: false,
    };
    this.onSend = this.onSend.bind(this);
    this.sliderEditing = false;
  }

  toggleModal = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  messageIdGenerator() {
    // generates uuid.
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      let r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  messageApi(Message, Id, Type, Auth) {
    let url = Global.URL + 'message_send';
    let data = new FormData();
    data.append('message', Message);
    data.append('user_id', Id);
    data.append('type', Type);
    console.log('Chat Datatata : ', data);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer' + ' ' + Auth,
      },
      body: data,
    })
      .then(res => res.json())
      .then(json => {
        console.log('chat success : ', json);
        if (json.status == 1) {
          this.props.sendmsgListFetch(
            this.props.route.params.item.id,
            this.props.auth.loginUser[0].access_token,
          );
          this.props.getUsermsgListFetch(
            this.props.auth.loginUser[0].access_token,
          );
        } else {
          console.log('chat fail>>>', json);
        }
      })
      .catch(error => {
        console.log('chat error>>>', error);
      });
  }

  openGallery = props => {
    ImagePicker.openPicker({
      height: 500,
      width: 500,
      includeExif: true,
    }).then(res => {
      let data = {
        name: res.mime == 'video/mp4' ? 'input_image.mp4' : 'input_image.jpeg',
        uri: res.path,
        type: res.mime,
      };
      if (res.mime == 'video/mp4') {
        this.setState({videouri: res.path});
      }
      this.setState({image: res.path, uploadedFile: res, ImageData: data});
      props.onSend({image: res.path}, true);
      this.messageApi(
        data,
        this.props.route.params.item.id,
        res.mime,
        this.props.auth.loginUser[0].access_token,
      );
    });
  };

  componentWillMount() {
    this.setState({
      userData: this.props.route.params.item,
    });
    this.props.sendmsgListFetch(
      this.props.route.params.item.id,
      this.props.auth.loginUser[0].access_token,
    );
  }

  componentDidMount() {
    this._interval = setInterval(() => {
      this.props.sendmsgListFetch(
        this.props.route.params.item.id,
        this.props.auth.loginUser[0].access_token,
      );
    }, 3000);
    this.props.sendmsgListFetch(
      this.props.route.params.item.id,
      this.props.auth.loginUser[0].access_token,
    );
    AudioRecorder.requestAuthorization().then(isAuthorised => {
      this.setState({hasPermission: isAuthorised});
      if (!isAuthorised) return;
      this.prepareRecordingPath(this.state.audioPath);
      AudioRecorder.onProgress = data => {
        this.setState({currentTime: Math.floor(data.currentTime)});
      };
      AudioRecorder.onFinished = data => {
        if (Platform.OS === 'ios') {
          this._finishRecording(
            data.status === 'OK',
            data.audioFileURL,
            data.audioFileSize,
          );
        }
      };
    });
  }

  prepareRecordingPath(audioPath) {
    AudioRecorder.prepareRecordingAtPath(audioPath, {
      SampleRate: 22050,
      Channels: 1,
      AudioQuality: 'Low',
      AudioEncoding: 'aac',
      AudioEncodingBitRate: 32000,
    });
  }

  async _stop() {
    if (!this.state.recording) {
      console.warn("Can't stop, not recording!");
      return;
    }
    this.setState({stoppedRecording: true, recording: false});
    try {
      const fileName = `${this.messageIdGenerator()}.aac`;
      const filePath = await AudioRecorder.stopRecording();

      this._finishRecording(true, filePath);

      console.log('stop file', `file://${filePath}`);
      const file = {
        uri: Platform.OS === 'ios' ? filePath : `file://${filePath}`,
        name: fileName,
        type: `audio/aac`,
      };
      this.setState({currentTime: ''});
      // console.log('data=================================================================== record is : ', file, this.props.route.params.item.id, file.type, this.props.auth.loginUser[0].access_token)

      return filePath;
    } catch (error) {
      console.error(error);
    }
  }

  _finishRecording(didSucceed, filePath, fileSize) {
    this.setState({finished: didSucceed});
    const fileName = `${this.messageIdGenerator()}.aac`;
    const file = {
      uri: Platform.OS === 'ios' ? filePath : `file://${filePath}`,
      name: fileName,
      type: `audio/aac`,
    };
    console.log('Recordede file is : ', file);
    if (file.uri != undefined) {
      this.messageApi(
        file,
        this.props.route.params.item.id,
        file.type,
        this.props.auth.loginUser[0].access_token,
      );
    }
    // console.log(`Finished recording of duration ${this.state.currentTime} seconds at path: ${filePath} and size of ${fileSize || 0} bytes`);
  }

  async _record() {
    if (!this.state.hasPermission) {
      console.warn("Can't record, no permission granted!");
      return;
    }
    if (this.state.stoppedRecording) {
      this.prepareRecordingPath(this.state.audioPath);
    }
    this.setState({recording: true});
    try {
      const filePath = await AudioRecorder.startRecording();
      console.log('start file', filePath);
      return filePath;
    } catch (error) {
      console.error(error);
    }
  }

  componentWillUnmount() {
    this.props.getUsermsgListFetch(this.props.auth.loginUser[0].access_token);
    clearInterval(this._interval);
  }

  async componentWillReceiveProps(nextProps) {
    let msgAll = [];
    let fromAPI = nextProps.chat.sendmsgList;
    const deviceTimeZone = RNLocalize.getTimeZone();

    for (let i = 0; i < fromAPI.length; i++) {
      if (fromAPI[i].type == 'text') {
        msgAll.push({
          _id: fromAPI[i].id,
          text: fromAPI[i].message,
          createdAt: moment1
            .utc(fromAPI[i].created_at, null)
            .tz(deviceTimeZone)
            .format('MMM DD YYYY'),

          // moment(mainDate).format('MMM DD YYYY'),
          time: moment1
            .utc(fromAPI[i].created_at, null)
            .tz(deviceTimeZone)
            .format('HH:mm:ss'),
          user: {
            _id: fromAPI[i].sender_id,
          },
        });
      } else if (fromAPI[i].type == 'video/mp4') {
        this.setState({});
        msgAll.push({
          _id: fromAPI[i].id,
          createdAt: moment1
            .utc(fromAPI[i].created_at, null)
            .tz(deviceTimeZone)
            .format('MMM DD YYYY'),

          // moment(mainDate).format('MMM DD YYYY'),
          time: moment1
            .utc(fromAPI[i].created_at, null)
            .tz(deviceTimeZone)
            .format('HH:mm:ss'),
          user: {
            _id: fromAPI[i].sender_id,
          },
          video: fromAPI[i].message,
        });
      } else if (fromAPI[i].type == 'audio/aac') {
        this.setState({});
        msgAll.push({
          _id: fromAPI[i].id,
          // createdAt: moment(mainDate).format('MMM DD YYYY'),
          // time: moment(mainDate1).format('HH:mm:ss'),
          createdAt: moment1
            .utc(fromAPI[i].created_at, null)
            .tz(deviceTimeZone)
            .format('MMM DD YYYY'),

          // moment(mainDate).format('MMM DD YYYY'),
          time: moment1
            .utc(fromAPI[i].created_at, null)
            .tz(deviceTimeZone)
            .format('HH:mm:ss'),
          user: {
            _id: fromAPI[i].sender_id,
          },
          audio: fromAPI[i].message,
        });
      } else {
        msgAll.push({
          _id: fromAPI[i].id,
          createdAt: moment1
            .utc(fromAPI[i].created_at, null)
            .tz(deviceTimeZone)
            .format('MMM DD YYYY'),

          // moment(mainDate).format('MMM DD YYYY'),
          time: moment1
            .utc(fromAPI[i].created_at, null)
            .tz(deviceTimeZone)
            .format('HH:mm:ss'),
          user: {
            _id: fromAPI[i].sender_id,
          },
          image: Global.IMAGE_URL + 'message/' + fromAPI[i].message,
        });
      }
    }
    msgAll.reverse();
    this.setState({
      messages: msgAll,
    });
  }

  convertUTCToTimezone(utcDt, utcDtFormat, timezone) {
    return moment1
      .utc(utcDt, utcDtFormat)
      .tz(timezone)
      .format('YYYY-MM-DD hh:mm:ss A');
  }

  Iuput_height_manage(event) {
    if (
      event.nativeEvent.contentSize.height >= 0 &&
      event.nativeEvent.contentSize.height < 150
    ) {
      this.setState({height: event.nativeEvent.contentSize.height});
    } else {
      this.setState({height: 150});
    }
  }

  onSend(messages = []) {
    this.setState(previousState => {
      return {
        // messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }

  renderMessageVideo(props) {
    return (
      <TouchableOpacity
        onPress={() =>
          this.setState({
            selectedVideo: props.currentMessage.video,
            isVisible: !this.state.isVisible,
          })
        }>
        <View style={{position: 'relative', height: 150, width: 250}}>
          <Video
            ref={ref => {
              this.player = ref;
            }}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: 150,
              width: 250,
              borderRadius: 20,
            }}
            repeat={true}
            disableFocus={true}
            resizeMode="cover"
            height={150}
            width={250}
            muted={true}
            volume={0.7}
            source={{
              uri: Global.IMAGE_URL + 'message/' + props.currentMessage.video,
            }}
            allowsExternalPlayback={true}></Video>
        </View>
      </TouchableOpacity>
    );
  }

  renderMessageAudio(props) {
    return props.currentMessage._id != props.nextMessage._id ? (
      <ChatAudio currentMessage={props.currentMessage} />
    ) : null;
  }

  renderInputToolbar(props) {
    return (
      <View style={style.c_bottomMain}>
        <View style={style.c_bottomParent}>
          <View style={style.c_inputView}>
            {this.state.currentTime > 0 ? (
              <View style={{marginLeft: 9, justifyContent: 'center'}}>
                <Text style={{color: '#8A8A8F', fontSize: 17}}>
                  {this.state.currentTime}
                </Text>
              </View>
            ) : (
              <TextInput
                multiline={true}
                onChangeText={message => {
                  this.setState({message});
                }}
                value={this.state.message}
                onContentSizeChange={event => this.Iuput_height_manage(event)}
                placeholder="Write a comment"
                placeholderTextColor="#8A8A8F"
                style={[
                  style.c_input,
                  {paddingTop: Platform.OS == 'ios' ? 11 : 0},
                ]}
              />
            )}
          </View>

          {this.state.message.length > 0 ? (
            <TouchableOpacity
              style={style.c_sendbtnView}
              onPress={() => [
                props.onSend({text: this.state.message}, true),
                this.setState({message: ''}),
                this.messageApi(
                  this.state.message,
                  this.props.route.params.item.id,
                  'text',
                  this.props.auth.loginUser[0].access_token,
                ),
              ]}>
              <Image
                style={style.c_send}
                source={require('../../../Images/ButtonSendicon.png')}
              />
            </TouchableOpacity>
          ) : (
            <>
              <TouchableOpacity
                style={style.c_cameraView}
                onPress={() => this.openGallery(props)}>
                <Image
                  style={style.c_camera}
                  source={require('../../../Images/ButtonCameraImg.png')}
                />
              </TouchableOpacity>

              <Pressable
                style={style.c_audioView}
                onPressIn={() => this._record()}
                onPressOut={() => this._stop()}>
                <Image
                  style={[
                    style.c_camera,
                    {tintColor: this.state.recording ? 'blue' : '#A20030'},
                  ]}
                  source={require('../../../Images/ButtonVoiceImg.png')}
                />
              </Pressable>
            </>
          )}
        </View>
      </View>
    );
  }
  renderTime(props) {
    return (
      <Time
        {...props}
        timeTextStyle={{
          left: {
            color: '#858E99',
            fontSize: 11,
          },
          right: {
            color: '#858E99',
            fontSize: 11,
          },
        }}
      />
    );
  }

  renderBubble(props) {
    return (
      <View style={style.c_bubbleView}>
        <Bubble
          {...props}
          textStyle={{
            right: {
              color: '#FFFFFF',
              fontSize: 15,
            },
            left: {
              color: '#000',
              fontSize: 15,
            },
          }}
          wrapperStyle={{
            left: {
              backgroundColor: '#707070',
              left: -32,
            },
            right: {
              backgroundColor: '#A20030',
              right: 12,
            },
          }}
        />
      </View>
    );
  }
  render() {
    return (
      <View style={[style.container, {backgroundColor: '#FFFFFF'}]}>
        <StatusBar translucent={false} backgroundColor={'#FFFFFF'} />

        <View
          style={[
            style.c_profileContainer,
            {paddingTop: Platform.OS == 'ios' ? 45 : 10},
          ]}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('bottomChat')}>
            <Image
              style={style.c_backImg}
              source={require('../../../Images/BackArrowicon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('ChatViewProfile', {
                Data: this.props.route.params.item.id,
              })
            }>
            {this.props.route.params.item.profile == '' ||
            this.props.route.params.item.profile == null ||
            this.props.route.params.item.profile == undefined ? (
              <Image
                style={style.c_profileImg}
                source={require('../../../Images/profile-user.png')}
              />
            ) : (
              <Image
                style={style.c_profileImg}
                source={{
                  uri:
                    Global.IMAGE_URL +
                    'profile/' +
                    this.props.route.params.item.profile,
                }}
              />
            )}
          </TouchableOpacity>
          <Text style={style.c_username}>
            {this.props.route.params.item.name}
          </Text>
        </View>

        <GiftedChat
          messages={this.state.messages}
        //   onSend={this.onSend}
        //    <GiftedChat
        //   messages={messages}
        //   minInputToolbarHeight={0}
        //   isKeyboardInternallyHandled={false}
        //   keyboardShouldPersistTaps={'always'}
        //   renderAvatar={() => null}
        //   showUserAvatar={false}
        //   renderTime={() => null}
        //   renderInputToolbar={() => null}
        //   renderBubble={(props: any) => renderBubble(props)}
        //   renderMessageText={(props: any) => renderMessageText(props)}
        //   user={{_id: userData?.id}}
        //   inverted={false}
        //   renderDay={(props: any) => renderDay(props)}
        //   renderChatEmpty={() => (
        //     <NoDataFound
        //       containerStyle={{
        //         transform: [{rotateX: '180deg'}],
        //       }}
        //     />
        //   )}
        // />




          user={{
            _id: this.props.auth.loginUser[0].id,
          }}
          renderTime={props => (
            <View>
              <Text
                style={{
                  marginTop: 5,
                  fontFamily: 'SFProText-Regular',
                  fontSize: 11,
                  paddingHorizontal: 7,
                  marginBottom: 5,
                  color: '#858E99',
                }}>
                {moment(props.currentMessage.time, 'HH:mm:ss').format(
                  'HH:mm A',
                )}
              </Text>
            </View>
          )}
          renderMessageVideo={props => this.renderMessageVideo(props)}
          renderMessageAudio={props => this.renderMessageAudio(props)}
          renderInputToolbar={props =>
            this.state.userData.connect_status == 'N'
              ? null
              : this.renderInputToolbar(props)
          }
          renderBubble={props => this.renderBubble(props)}
          listViewProps={{keyboardDismissMode: 'on-drag'}}
        />

        <View>
          <Modal
            animationType={'fade'}
            transparent={false}
            style={{margin: 0}}
            visible={this.state.isVisible}
            onRequestClose={() => {
              console.log('Modal has been closed.');
            }}>
            <View style={{flex: 1, backgroundColor: '#000000'}}>
              <View style={{marginTop: 20, marginLeft: 20}}>
                <TouchableOpacity onPress={this.toggleModal}>
                  <Image
                    style={{height: 15, width: 15, resizeMode: 'contain'}}
                    source={require('../../../Images/whitecross.png')}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Video
                  ref={ref => {
                    this.player = ref;
                  }}
                  style={{
                    height: '50%',
                    width: '100%',
                  }}
                  resizeMode="cover"
                  source={{
                    uri:
                      Global.IMAGE_URL + 'message/' + this.state.selectedVideo,
                  }}
                />
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

const mapStatetoProps = state => {
  const auth = state.login;
  const chat = state.chat;
  return {auth, chat};
};

export default connect(mapStatetoProps, {
  sendmsgListFetch,
  getUsermsgListFetch,
})(ChatModule);



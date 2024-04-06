import React, {useContext, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Video from 'react-native-video';
import {default as SvgIndex} from '../../../assets/svgIndex';
import {CustomStatusbar, Header} from '../../../components';
import {LocalizationContext} from '../../../i18n/LocalizationContext';
import setTimerController from './setTimer.controller';
import style from './setTimer.style';
import imageIndex from '../../../assets/imageIndex';
import {color} from '../../../theme';
import {FILTERS} from './setTimer.const';
import {
  Brightness,
  Contrast,
  Saturate,
  HueRotate,
  LuminanceToAlpha,
  Invert,
  Grayscale,
  Nightvision,
  Warm,
  Temperature,
  Tint,
  Threshold,
  Technicolor,
  Polaroid,
  ToBGR,
  Kodachrome,
  Browni,
  Vintage,
  Night,
  Predator,
  Lsd,
  ColorTone,
  Protanomaly,
  Deuteranomaly,
  Tritanomaly,
  Protanopia,
  Deuteranopia,
  Tritanopia,
  Achromatopsia,
  Achromatomaly,
} from 'react-native-color-matrix-image-filters';
import ViewShot from 'react-native-view-shot';
import Draggable from 'react-native-draggable';

const SetTimer: React.FC = () => {
  const context = useContext(LocalizationContext);
  const [selectedFilterIndex, setIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<{
    currentPage: number;
  }>({
    currentPage: 0,
  });

  const [text, setText] = useState('');
  const {width, height} = Dimensions.get('screen');
  const [initialX, setInitialX] = useState(-30); // Set to center horizontally
  const [initialY, setInitialY] = useState(height / 2.5); // Set to center vertically
  const [inputEdit, setInputEdit] = useState(false);
  const inputRef = useRef();
  const [showFilterImage, setShowFilterImage] = useState(false);

  const {
    goBack,
    onNext,
    route,
    storyImage,
    onPost,
    changeVideoStatus,
    SetImage,
    filterImage,
    setTrimVideo,
    shotRef,
    currentFilter,
    setCurrentFilter,
  } = setTimerController();
  const filters = [
    {component: Brightness, amount: 3},
    {component: Contrast, amount: 5},
    {component: Saturate, amount: 4},
    {component: HueRotate, degree: 90},
    {component: LuminanceToAlpha},
    {component: Invert},
    {component: Grayscale},
    {component: Nightvision},
    {component: Warm},
    {component: Temperature, amount: 1000},
    {component: Tint, amount: 0.5},
    {component: Threshold, amount: 9},
    {component: Technicolor},
    {component: Polaroid},
    {component: ToBGR},
    {component: Kodachrome},
    {component: Browni},
    {component: Vintage},
    {component: Night},
    {component: Predator},
    {component: Lsd},
    {
      component: ColorTone,
      desaturation: 0,
      toned: 0,
      lightColor: color.darkPink,
      darkColor: '#0000FF',
    },
    {component: Protanomaly},
    {component: Deuteranomaly},
    {component: Tritanomaly},
    {component: Protanopia},
    {component: Deuteranopia},
    {component: Tritanopia},
    {component: Achromatopsia},
    {component: Achromatomaly},
  ];
  const handleImagePress = () => {
    setCurrentFilter((prevFilter: any) => (prevFilter + 1) % filters?.length);
  };
  const handleScreenPress = (event: any) => {
    const {locationX, locationY} = event.nativeEvent;
    setInitialX(locationX);
    setInitialY(locationY);
  };

  const extractedUri = useRef(
    route?.params?.postData[currentImageIndex.currentPage]?.node?.image?.uri,
  );
  const SelectedFilterComponent = FILTERS[selectedFilterIndex].filterComponent;
  const onExtractImage = ({nativeEvent}: any) => {
    SetImage(nativeEvent.uri);
    extractedUri.current = nativeEvent.uri;
  };

  const renderFilteredImageView = () => {
    const filter = filters[currentFilter];
    return (
      <View>
        <ViewShot
          ref={shotRef}
          style={{alignSelf: 'center'}}
          options={{
            fileName: 'UserProfile',
            format: 'jpg',
            quality: 0.9,
          }}>
          <filter.component
            amount={filter.degree || filter.desaturation}
            desaturation={filter.desaturation}
            toned={filter.toned}
            lightColor={filter.lightColor}
            darkColor={filter.darkColor}>
            <ImageBackground
              resizeMode="cover"
              source={{
                uri:
                  storyImage ??
                  route?.params?.postData[0]?.node?.image?.uri ??
                  route?.params?.postData,
              }}
              style={{width: 500, height: 500}}></ImageBackground>
          </filter.component>
        </ViewShot>
      </View>
    );
  };

  return (
    <View style={style.container}>
      <ImageBackground
        source={imageIndex.splashBackground}
        style={style.imageBackgroundImage}>
        <CustomStatusbar
          containerStyle={{height: 0}}
          translucent={true}
          backgroundColor={color.transparent}
          barStyle="light-content"
        />
        <Header
          leftIcon={SvgIndex.backArrow}
          onLeftIcon={goBack}
          rightText={
            context?.postType == context.translations.headerTitle.Story
              ? 'Post'
              : 'Next'
          }
          onRightText={
            context?.postType == context.translations.headerTitle.Story
              ? onPost
              : onNext
          }
        />
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View>
            <View
              style={{
                zIndex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Draggable
                disabled={showFilterImage ? true : false}
                onShortPressRelease={handleScreenPress}
                x={initialX}
                y={initialY}>
                <View
                  style={{
                    height: 120,
                    backgroundColor: 'green',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TextInput
                    editable={text?.length >= 1 || inputEdit ? true : false}
                    ref={inputRef}
                    placeholder="Enter Text "
                    placeholderTextColor={'white'}
                    style={{
                      color: 'white',
                      fontSize: 30,
                      fontWeight: '800',
                      alignSelf: 'center',
                      flex: 1,
                      textAlign: 'center',
                    }}
                    autoFocus={true}
                    value={text}
                    multiline={true}
                    maxLength={20}
                    onChangeText={newText => setText(newText)}
                  />
                </View>
              </Draggable>
            </View>
            {context?.postType == 'Video' ? (
              <TouchableOpacity
                style={{flex: 1}}
                onPressIn={() => changeVideoStatus('')}
                onPressOut={() => changeVideoStatus('')}
                activeOpacity={1}>
                {storyImage?.split('.')?.pop()?.split(/\#|\?/)[0] == 'mp4' ? (
                  <Video
                    repeat
                    poster={
                      route?.params?.postData[0]?.node?.image?.uri ??
                      route?.params?.postData
                    }
                    resizeMode="cover"
                    playInBackground={false}
                    progressUpdateInterval={1000}
                    source={{
                      uri:
                        route?.params?.postData[0]?.node?.image?.uri ??
                        route?.params?.postData,
                    }}
                    style={style.videoContainer}
                  />
                ) : (
                  <>
                    {typeof route?.params?.postData == 'string' && (
                      <SelectedFilterComponent
                        onExtractImage={onExtractImage}
                        extractImageEnabled={true}
                        image={
                          <Image
                            source={{
                              uri:
                                storyImage ??
                                route?.params?.postData[0]?.node?.image?.uri ??
                                route?.params?.postData,
                            }}
                            style={[style.storyImage]}
                          />
                        }
                      />
                    )}
                  </>
                )}
              </TouchableOpacity>
            ) : context?.postType == context.translations.headerTitle.Story ? (
              <>
                {
                  storyImage?.split('.')?.pop()?.split(/\#|\?/)[0] == 'mp4' ||
                  storyImage?.split('.')?.pop()?.split(/\#|\?/)[0] == 'mov' ? (
                    <Video
                      repeat
                      poster={
                        route?.params?.postData[0]?.node?.image?.uri ??
                        route?.params?.postData
                      }
                      resizeMode="cover"
                      playInBackground={false}
                      progressUpdateInterval={1000}
                      source={{
                        uri:
                          route?.params?.postData[0]?.node?.image?.uri ??
                          route?.params?.postData,
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                        zIndex: 1,
                      }}
                      muted={false}
                    />
                  ) : (
                    <>
                      {currentFilter == 0 ? (
                        <TouchableOpacity
                          activeOpacity={1}
                          style={{flex: 1, justifyContent: 'center'}}
                          onPress={handleImagePress}>
                          <SelectedFilterComponent
                            onExtractImage={onExtractImage}
                            extractImageEnabled={true}
                            image={
                              <Image
                                source={{
                                  uri:
                                    storyImage ??
                                    route?.params?.postData[0]?.node?.image
                                      ?.uri ??
                                    route?.params?.postData,
                                }}
                                resizeMode="cover"
                                style={{
                                  width: 500,
                                  height: 500,
                                }}
                              />
                            }
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          activeOpacity={1}
                          style={{flex: 1, justifyContent: 'center'}}
                          onPress={handleImagePress}>
                          {renderFilteredImageView()}
                        </TouchableOpacity>
                      )}
                    </>
                  )
                  // <>
                  //   <TouchableOpacity onPress={() => onEdit()} style={style.editIcon}>
                  //     <SvgIndex.edit />
                  //   </TouchableOpacity>
                  /* <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={style.mentionIcon}>
                <SvgIndex.atSign />
              </TouchableOpacity> */
                  // </>
                }
              </>
            ) : typeof route?.params?.postData == 'string' &&
              context?.postType == context.translations.headerTitle.Post ? (
              <SelectedFilterComponent
                onExtractImage={onExtractImage}
                extractImageEnabled={true}
                image={
                  route?.params?.postData[0]?.node?.image?.uri?.includes(
                    'mp4',
                  ) ? (
                    <Video
                      source={{
                        uri:
                          storyImage ??
                          route?.params?.postData[0]?.node?.image?.uri ??
                          route?.params?.postData,
                      }}
                      style={style.storyImage}
                      playInBackground={false}
                      progressUpdateInterval={1000}
                      repeat
                    />
                  ) : (
                    <Image
                      source={{
                        uri:
                          storyImage ??
                          route?.params?.postData[0]?.node?.image?.uri ??
                          route?.params?.postData,
                      }}
                      resizeMode="cover"
                      style={[style.storyImage]}
                    />
                  )
                }
              />
            ) : (
              <FlatList
                contentContainerStyle={[style.flatlist]}
                data={filterImage}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                renderItem={({item, index}) => {
                  return (
                    <View style={style.imgView} key={index}>
                      {item?.node?.image?.uri?.includes('mp4') ? (
                        <Video
                          source={{
                            uri: String(item?.node?.image?.uri),
                          }}
                          style={style.multiImagePost}
                          playInBackground={false}
                          progressUpdateInterval={1000}
                        />
                      ) : (
                        <SelectedFilterComponent
                          onExtractImage={onExtractImage}
                          extractImageEnabled={true}
                          image={
                            <Image
                              source={{uri: String(item?.node?.image?.uri)}}
                              style={style.multiImagePost}
                              resizeMode="cover"
                            />
                          }
                        />
                      )}
                    </View>
                  );
                }}
              />
            )}
          </View>
        </View>
      </ImageBackground>
      <View>
        <FlatList
          data={filters}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{backgroundColor: '#01061C'}}
          renderItem={({item, index}) => (
            <TouchableOpacity onPress={() => setCurrentFilter(index)}>
              <ViewShot
                ref={shotRef}
                style={{
                  marginHorizontal: 5,
                  alignItems: 'center',
                }}
                options={{
                  fileName: `UserProfile_${index}`,
                  format: 'jpg',
                  quality: 0.9,
                }}>
                <item.component
                  amount={item.amount || item.degree}
                  desaturation={item.desaturation}
                  toned={item.toned}
                  lightColor={item.lightColor}
                  darkColor={item.darkColor}>
                  <ImageBackground
                    resizeMode="cover"
                    source={{
                      uri:
                        storyImage ??
                        route?.params?.postData[0]?.node?.image?.uri ??
                        route?.params?.postData,
                    }}
                    style={{
                      width: 70,
                      height: 70,
                    }}></ImageBackground>
                </item.component>
              </ViewShot>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default SetTimer;


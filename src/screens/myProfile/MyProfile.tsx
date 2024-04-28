import {ReviewCard, TopPicksCard} from '@card';
import {ClipCard, CustomStatusbar} from '@components';
import imageIndex from '@imageIndex';
import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './myProfile.style';
import {myProgramsCardData, myProgramsData} from './myProfileData.const';
import useMyProfile from './useMyProfile';

const MyProfile: FC = () => {
  const {onPressEditProfile} = useMyProfile();
  return (
    <View style={styles.container}>
      <CustomStatusbar
        containerStyle={styles.statusBarStyle}
        translucent={true}
        backgroundColor={color.transparentColor}
        barStyle="light-content"
      />
      <ScrollView
        bounces={true}
        keyboardShouldPersistTaps="handled"
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}>
        <Image
          style={styles.backgroundImageStyle}
          source={imageIndex.profileImage}
          resizeMode="cover"
        />
        <View style={styles.rowView}>
          <View style={styles.userViewImage}>
            <Image style={styles.userImage} source={imageIndex.userProfile} />
          </View>
          <TouchableOpacity
            onPress={onPressEditProfile}
            style={styles.editRowView}>
            <Text style={styles.editText}>Edit</Text>
            <SvgIndex.edit />
          </TouchableOpacity>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.userNameStyle}>Janet Austin</Text>
          <Text style={styles.userSubscribersStyle}>219k subscribers</Text>
          <View style={styles.cardStyleView}>
            <View>
              <View style={styles.cardRowView}>
                <SvgIndex.certificate />
                <Text style={styles.cardTextStyle}>Instructor Certificate</Text>
              </View>
              <View style={styles.cardRowView}>
                <SvgIndex.bag />
                <Text style={styles.cardTextStyle}>5 Years</Text>
              </View>
              <View style={styles.cardRowView}>
                <SvgIndex.map />
                <Text style={styles.cardTextStyle}>Miami, Fl</Text>
              </View>
            </View>
            <View style={styles.tiktokViewStyle}>
              <View style={styles.cardRowView}>
                <SvgIndex.instagram height={32} width={16} />
                <Text style={styles.cardTextStyleInsta}>@alexmargot</Text>
              </View>
              <View style={styles.cardRowView}>
                <SvgIndex.tiktok height={30} width={15} />
                <Text style={styles.cardTextStyleInsta}>@alexmargot</Text>
              </View>
            </View>
          </View>
          <Text style={styles.aboutText}>About me</Text>
          <Text style={styles.aboutDeceptionText}>
            Alex Magot has built his name around helping the busiest people in
            all corners of the world find the time to make small, easy changes
            within their diets and their lifestyles to become healthier.
          </Text>
          <FlatList
            data={myProgramsData}
            contentContainerStyle={styles.contentContainerStyle}
            keyExtractor={(item, index) => `${index}`}
            numColumns={4}
            renderItem={({item, index}) => (
              <ClipCard
                title={item.title}
                onPress={() => {}}
                nameStyle={
                  index === 1 || index === 3
                    ? styles.borderClipColorText
                    : styles.borderClipText
                }
                container={
                  index === 1 || index === 3
                    ? styles.borderClipColorStyle
                    : styles.borderClipStyle
                }
              />
            )}
            showsHorizontalScrollIndicator={false}
          />
          <View style={styles.rowViewSpach}>
            <Text style={styles.rowTextPicks}>My programs</Text>
            <TouchableOpacity style={styles.showAllView}>
              <Text style={styles.showAllTextStyle}>Show all</Text>
              <SvgIndex.rightArrow />
            </TouchableOpacity>
          </View>
          <FlatList
            data={myProgramsCardData}
            contentContainerStyle={styles.contentContainerStyle}
            keyExtractor={(item, index) => {
              return `${index}`;
            }}
            horizontal
            renderItem={({item, index}) => (
              <TopPicksCard item={item} key={index} index={index} />
            )}
            showsHorizontalScrollIndicator={false}
          />
          <Text style={styles.reviewsStyle}>Reviews</Text>
          <View style={styles.reviewRowView}>
            <SvgIndex.textMessage />
            <Text style={styles.reviewTextStyle}>
              7 reviews * 219 Total ratings
            </Text>
            <Text style={styles.ratingTextStyle}>4.9</Text>
            <SvgIndex.yellowStar />
          </View>
          <Text style={styles.ratingViewStyle}>
            (The reviews and ratings are given only by paying subscribers)
          </Text>
        </View>
        <FlatList
          data={myProgramsCardData}
          contentContainerStyle={styles.contentContainerStyleOverview}
          keyExtractor={(item, index) => {
            return `${index}`;
          }}
          renderItem={({item, index}) => (
            <ReviewCard item={item} key={index} index={index} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};
export default MyProfile;

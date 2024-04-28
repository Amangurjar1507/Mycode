import {TopPicksCard} from '@card';
import {CustomStatusbar} from '@components';
import imageIndex from '@imageIndex';
import SvgIndex from '@svgIndex';
import React, {FC} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {similarProgramsData} from './programDetails.const';
import styles from './programDetails.style';

const ProgramDetails: FC = () => {
  return (
    <View style={styles.container}>
      <CustomStatusbar />
      <ScrollView
        bounces={true}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.inputContentContainers}>
          <ImageBackground
            style={styles.bgImageStyle}
            source={imageIndex.workOutDetails}>
            <View style={styles.VideoPositionViewShow}>
              <Text style={styles.VideoPositionTextShow}>
                You are viewing the screen as a user
              </Text>
            </View>
            <View style={styles.manageViewSpaceStyle}>
              <TouchableOpacity style={styles.backStyle} activeOpacity={0.8}>
                <SvgIndex.back />
              </TouchableOpacity>
              <View style={styles.likeRowViewManage}>
                <TouchableOpacity style={styles.likeViewStyle}>
                  <SvgIndex.like />
                </TouchableOpacity>
                <TouchableOpacity style={styles.shareViewStyle}>
                  <SvgIndex.share />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.managePlayViewSpaceStyle}>
              <View style={styles.followerShowView}>
                <View style={styles.priceContainer}>
                  <Text style={styles.priceText}>4.7</Text>
                  <SvgIndex.starPurpal />
                </View>
                <View style={styles.priceContainer}>
                  <Text style={styles.priceText}>16k</Text>
                  <SvgIndex.userPurpal />
                </View>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.VideoUserStyle}>
                <Text style={styles.videoUserText}>Play trailer</Text>
                <SvgIndex.play />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={styles.platStyleView}>
            <Text style={styles.platStyleTitleText}>
              Yash’s amazing workout plan
            </Text>
            <Text style={styles.platStyleDescriptionText}>
              Program type name
            </Text>
          </View>
          <View style={styles.englishViewStyle}>
            <SvgIndex.time />
            <Text style={styles.weekTextsStyle}>12 Weeks</Text>
            <SvgIndex.shell />
            <Text style={styles.weekTextsStyle}>Intermediate</Text>
            <SvgIndex.language />
            <Text style={styles.weekTextsStyle}>English</Text>
          </View>
          <View style={styles.userCardViewStyle}>
            <Image
              style={styles.userImageStyle}
              source={imageIndex.userProfile}
            />
            <View style={styles.userTextRowView}>
              <Text style={styles.userNameText}>Alex Margot</Text>
              <Text style={styles.userSubcribersText}>10k Subscribers</Text>
            </View>
            <SvgIndex.noticicationAdd />
          </View>
          <View style={styles.titleRowViewStyle}>
            <SvgIndex.target />
            <Text style={styles.fullTitle}>
              Full body, Abs & Core, Booty, Arms, Resistance
            </Text>
          </View>
          <View style={styles.titleRowViewStyle}>
            <SvgIndex.dumbbel />
            <Text style={styles.fullTitle}>
              Full body, Abs & Core, Booty, Arms, Resistance
            </Text>
          </View>
          <View style={styles.horizontalStyle}>
            <Text style={styles.detailsTextStyle}>Details</Text>
            <Text style={styles.decriptionTextStyle}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse
            </Text>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.rowTextPicks}>Package Included:</Text>
          </View>
          <FlatList
            contentContainerStyle={styles.topContantFlatist}
            data={similarProgramsData}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            renderItem={({item, index}) => (
              <TopPicksCard item={item} key={index} index={index} />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProgramDetails;

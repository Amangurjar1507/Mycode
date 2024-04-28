import {MyProgramsCard} from '@card';
import {
  BottomSheet,
  Button,
  Container,
  ModalComponent,
  SearchBar,
} from '@components';
import imageIndex from '@imageIndex';
import {default as SvgIndex, default as svgIndex} from '@svgIndex';
import color from '@theme/color';
import React, {FC} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {bottomSheetList, myProgramsList} from './myPrograms.const';
import styles from './myPrograms.style';
import useMyPrograms from './useMyPrograms';
export interface MyProgramsStateProps {
  modalVisible: boolean;
  modalType: string;
}
const MyPrograms: FC = () => {
  const {
    onNavCreateNewPackage,
    onNavCreateNewProgram,
    openMenuSheet,
    refRBSheet,
    myPrograms,
  } = useMyPrograms();
  return (
    <>
      <Container
        wrapperType="scroll"
        headerShown
        lable="My Programs"
        statusBarColor={color.primaryBG}
        scrollContainerStyle={styles.screenBackgroundContainerStyle}
        containerViewStyle={styles.screenBackgroundContainerStyle}
        containerStyle={styles.headerContainerStyle}>
        <SearchBar
          label={`Search programs`}
          placeholderTextColor={color.secondaryBG}
          containerStyle={styles.searchContainerStyle}
          showFilterIcon
          showFolderIcon
          searchIcon={svgIndex.searchWhite}
        />
        <View style={styles.mainContainer}>
          <View style={styles.btnRowView}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btnOutlineStyle}
              onPress={onNavCreateNewPackage}>
              <SvgIndex.plusPurple />
              <Text style={styles.btnOutlineText}>Create new Package</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btnSolidStyle}
              onPress={onNavCreateNewProgram}>
              <SvgIndex.plus />
              <Text style={styles.btnSolidText}>Create new Program</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={myProgramsList}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <>
                <MyProgramsCard
                  item={item}
                  key={index}
                  index={index}
                  onPress={() => openMenuSheet(index)}
                />
                <RBSheet
                  ref={ref => (refRBSheet.current[index] = ref)}
                  customStyles={{
                    wrapper: {
                      backgroundColor: color.transparentColor,
                    },
                    container: {
                      height: 223,
                    },
                  }}
                  customModalProps={{
                    animationType: 'slide',
                  }}>
                  {bottomSheetList?.map((item, index) => (
                    <BottomSheet
                      item={item}
                      index={index}
                      // onPress={() => modalHandler(item.title)}
                    />
                  ))}
                </RBSheet>
              </>
            )}
            ListFooterComponent={<View style={styles.footerCom} />}
          />
        </View>
      </Container>
      {myPrograms?.modalType == 'Delete' && (
        <ModalComponent
          visible={myPrograms?.modalVisible}
          animationType="fade"
          containerStyle={styles.modalContainer}
          statusBar>
          <View style={styles.modalInnerContainer}>
            <Image
              source={imageIndex.deleteAccount}
              resizeMode="contain"
              style={styles.imageStyle}
            />
            <Text style={styles.modalDesText}>
              Are you sure you want to delete{' '}
              <Text style={styles.modalDestTitleText}>“Program Name”?</Text>
            </Text>
            <Text style={styles.modalDescriptionText}>
              Deleting the program will remove the program from the marketplace
              but those who are subscribes can still do it.
            </Text>
            <View style={styles.btnView}>
              <Button
                label="Yes"
                type="Solid"
                containerStyle={styles.btnContainer}
                nameTextStyle={styles.nameTextStyle}
              />
              <Button
                label="Cancel"
                type="Solid"
                containerStyle={styles.btnCancelContainer}
                nameTextStyle={styles.nameTextButtonCancelStyle}
              />
            </View>
          </View>
        </ModalComponent>
      )}
      <ModalComponent
        visible={myPrograms?.modalVisible}
        animationType="fade"
        containerStyle={styles.modalContainer}
        statusBar>
        <View style={styles.modalInnerContainer}>
          <View style={{alignItems: 'center'}}>
            <SvgIndex.editFile />
          </View>
          <Text style={styles.modalEditTitleText}>
            Modifications made to the editing program will affect all
            subscribers, not just new ones going forward
          </Text>
          <Text style={styles.modalDescriptionText}>Continue?</Text>
          <View style={styles.btnView}>
            <Button
              label="Yes"
              type="Solid"
              containerStyle={styles.btnCancelContainer}
              nameTextStyle={styles.nameTextButtonCancelStyle}
            />
            <Button
              label="Cancel"
              type="Solid"
              containerStyle={styles.btnEditModalContainer}
              nameTextStyle={styles.nameTextStyle}
            />
          </View>
        </View>
      </ModalComponent>
    </>
  );
};

export default MyPrograms;

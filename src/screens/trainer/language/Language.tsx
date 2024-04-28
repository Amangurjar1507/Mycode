import {LanguageCard} from '@card';
import {Button, Container, SearchBar} from '@components';
import svgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './language.style';
import useLanguage from './useLanguage';

const Language: FC = () => {
  const {languageList, onSelectLanguage} = useLanguage();
  return (
    <>
      <Container
        wrapperType="simple"
        headerShown
        backIconsShown
        lable="Language">
        <View style={styles.mainContainer}>
          <SearchBar
            label={`Search`}
            placeholderTextColor={color.secondaryBG}
            containerStyle={styles.containerStyle}
            searchIcon={svgIndex.searchWhite}
          />
          <FlatList
            data={languageList}
            contentContainerStyle={styles.contentContainerStyle}
            keyExtractor={(item, index) => {
              return `${index}`;
            }}
            renderItem={({item, index}) => (
              <LanguageCard
                key={index}
                item={item}
                index={index}
                onPress={() => onSelectLanguage(item?.id)}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </Container>
      <View style={styles.btnView}>
        <Button
          type="Solid"
          label="Save changes"
          containerStyle={styles.createPackagesBtnStyle}
          nameTextStyle={styles.createPackagesStyle}
        />
      </View>
    </>
  );
};

export default Language;

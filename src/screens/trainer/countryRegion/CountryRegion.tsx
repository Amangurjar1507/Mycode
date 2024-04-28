import {LanguageCard} from '@card';
import {Button, Container, SearchBar} from '@components';
import svgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './countryRegion.style';
import useCountryRegion from './useCountryRegion';

const CountryRegion: FC = () => {
  const {regionsList, onSelectRegion} = useCountryRegion();
  return (
    <>
      <Container
        wrapperType="simple"
        headerShown
        backIconsShown
        lable="Country/Region">
        <View style={styles.mainContainer}>
          <SearchBar
            label={`Search`}
            placeholderTextColor={color.secondaryBG}
            containerStyle={styles.containerStyle}
            searchIcon={svgIndex.searchWhite}
          />
          <FlatList
            data={regionsList}
            contentContainerStyle={styles.contentContainerStyle}
            keyExtractor={(item, index) => {
              return `${index}`;
            }}
            renderItem={({item, index}) => (
              <LanguageCard
                key={index}
                item={item}
                index={index}
                onPress={() => onSelectRegion(item?.id)}
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

export default CountryRegion;

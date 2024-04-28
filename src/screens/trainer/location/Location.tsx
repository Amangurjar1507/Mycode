import {LanguageCard} from '@card';
import {Button, Container, SearchBar} from '@components';
import color from '@theme/color';
import {FC} from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './location.style';
import useLocation from './useLocation';
import svgIndex from '@svgIndex';

const Location: FC = () => {
  const {locInfo, onSelectLocation, onSaveChanges} = useLocation();

  return (
    <>
      <Container
        wrapperType="simple"
        headerShown
        backIconsShown
        lable="Location">
        <View style={styles.mainContainer}>
          <SearchBar
            label={`Search`}
            searchIcon={svgIndex.searchWhite}
            placeholderTextColor={color.secondaryBG}
            containerStyle={styles.searchBarStyle}
          />
          <FlatList
            data={locInfo?.locationList}
            contentContainerStyle={styles.contentContainerStyle}
            keyExtractor={(item, index) => {
              return `${index}`;
            }}
            renderItem={({item, index}) => (
              <LanguageCard
                key={index}
                item={item}
                index={index}
                onPress={() => onSelectLocation(item?.id)}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </Container>
      <View style={styles.btnView}>
        <Button
          disabled={!locInfo?.isSelected}
          inActive={!locInfo?.isSelected}
          type="Solid"
          label="Save changes"
          containerStyle={styles.createPackagesBtnStyle}
          nameTextStyle={styles.createPackagesStyle}
          onPress={onSaveChanges}
        />
      </View>
    </>
  );
};

export default Location;

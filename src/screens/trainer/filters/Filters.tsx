import { Button, Container } from '@components';
import SvgIndex from '@svgIndex';
import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './filters.style';
import useFilters from './useFilters';

const Filters: FC = () => {
  const { onSelectFilters, filter } = useFilters();
  return (
    <>
      <Container
        wrapperType="form"
        headerShown
        backIconsShown
        lable="Filters"
        rightButtonText="Clear All"
        scrollContainerStyle={styles.screenBackgroundStyle}
        containerViewStyle={styles.screenBackgroundStyle}
        containerStyle={styles.headerContainerStyle}>
        <View style={styles.inputContentContainers}>
          {filter?.map((item: any) => (
            <TouchableOpacity
              onPress={() => onSelectFilters(item?.title)}
              key={item?.id}
              style={styles.cardView}>
              <View style={styles.rowViewStyle}>
                <Text style={styles.labelStyle}>{item?.title}</Text>
                <SvgIndex.arrowRightBlack />
              </View>
              <Text style={styles.valueTextStyle}>{item?.selectItem}</Text>
              <View style={styles.outLine} />
            </TouchableOpacity>
          ))}
        </View>
      </Container>
      <Button
        onPress={() => { }}
        label="Save"
        containerStyle={styles.bottonView}
        marginHorizontal={68}
      />
    </>
  );
};

export default Filters;

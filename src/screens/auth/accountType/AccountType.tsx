import { Button, Container } from '@components';
import imageIndex from '@imageIndex';
import React, { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import style from './accountType.style';
import useAccountType from './useAccountType';

export type bodiFyAccountType = 'instructor' | 'trainer' | undefined;
const AccountType: FC = () => {
  const { type, setType, onPressContinue, loading } = useAccountType();
  return (
    <Container
      wrapperType="simple"
      headerShown
      backIconsShown
      headingText="I want to"
      containerStyle={style.headerContainerStyle}>
      <View style={style.containerView}>
        <View style={style.contentContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setType('trainer')}>
            <Image
              source={imageIndex.trainerType}
              style={[
                style.typeLogo,
                style.border,
                type === 'trainer' ? style.borderActive : style.border,
              ]}
              resizeMode="contain"
            />
            <Text
              style={[
                style.typeLabel,
                type === 'trainer' ? style.activeTypeLabel : style.typeLabel,
              ]}>
              Exercise
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setType('instructor')}>
            <Image
              source={imageIndex.instructorType}
              style={[
                style.typeLogo,
                style.border,
                type === 'instructor' ? style.borderActive : style.border,
              ]}
              resizeMode="contain"
            />
            <Text
              style={[
                style.typeLabel,
                type === 'instructor' ? style.activeTypeLabel : style.typeLabel,
              ]}>
              Instruct
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.buttonContainer}>
        <Button
          label="Continue"
          onPress={onPressContinue}
          inActive={!type}
          containerStyle={style.btnContainerStyle}
          isLoading={loading}
        />
      </View>
    </Container>
  );
};

export default AccountType;

import {SettingsCard} from '@card';
import {ConfirmationModal, Container} from '@components';
import imageIndex from '@imageIndex';
import React, {FC} from 'react';
import {FlatList} from 'react-native';
import {settingsList} from './settings.conts';
import styles from './settings.style';
import useSettings from './useSettings';

export interface SettingsProps {
  settingsInfo: SettingsInfoProps;
  onNavigateToSettingsDetailsScreen: () => void;
}
export interface SettingsInfoProps {
  accountDeleteConfirmationModal: boolean;
  logoutConfirmationModal: boolean;
}

const Settings: FC = () => {
  const {settingsInfo, modalHandler, navigationHandler} = useSettings();

  return (
    <>
      <Container wrapperType="simple" headerShown lable="Settings">
        <FlatList
          style={styles.mainContainer}
          data={settingsList}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={(item, index) => {
            return `${index}`;
          }}
          renderItem={({item, index}) => (
            <SettingsCard
              key={item?.id}
              item={item}
              index={index}
              onPress={() => navigationHandler(item?.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </Container>
      <ConfirmationModal
        visible={settingsInfo?.accountDeleteConfirmationModal}
        animationType="slide"
        image={imageIndex.deleteAccount}
        titleText={`Delete Account`}
        desText={`Are you sure you want to delete your account? You will lose all of\nyour data`}
        cancelLabel="Cancel"
        confirmLabel="Yes"
        onConfirm={() => modalHandler(1)}
        onCancel={() => modalHandler(1)}
        onClose={() => modalHandler(1)}
        confirmBtnStyle={styles.confirmBtnStyle}
        cancelLableStyle={styles.cancelLableStyle}
      />
      <ConfirmationModal
        visible={settingsInfo?.logoutConfirmationModal}
        animationType="slide"
        image={imageIndex.logout}
        titleText={`Are you sure you want to\nlog out?`}
        cancelLabel="Cancel"
        confirmLabel="Yes"
        onConfirm={() => modalHandler(2)}
        onCancel={() => modalHandler(2)}
        onClose={() => modalHandler(2)}
        cancelBtnStyle={styles.cancelBtnStyle}
        btnViewStyle={styles.btnViewStyle}
        confirmLableStyle={styles.deleteConfirmBtnStyle}
      />
    </>
  );
};

export default Settings;

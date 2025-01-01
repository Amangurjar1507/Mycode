import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Button,
  Modal,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Pdf from 'react-native-pdf';
import RNBlobUtil from 'react-native-blob-util';

const PdfViewer = () => {
  const [videoBookState, setVideoBookState] = useState({
    isModalLoading: false,
    pdfOpen: false,
    selectStudyMaterial: null,
    mob: '',
  });

  // this Verstion using the pakage
  // "react-native-pdf": "^6.7.5",
  // "react-native-blob-util": "^0.19.11",

  const updateAudioState = newState => {
    setVideoBookState(prevState => ({...prevState, ...newState}));
  };

  const downloadPdf = useCallback(
    async uri => {
      try {
        const res = await RNBlobUtil.config({
          fileCache: true,
        }).fetch(
          'GET',
          'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        );

        const path = res.path();
        const localPath = `file://${path}`;
        updateAudioState({selectStudyMaterial: localPath});
        updateAudioState({isModalLoading: false});
      } catch (error) {
        console.error('PDF download error:', error);
        updateAudioState({isModalLoading: false});
      }
    },
    [updateAudioState],
  );

  const toggleModal = () => {
    updateAudioState({pdfOpen: !videoBookState.pdfOpen});
  };

  return (
    <View style={styles.container}>
      <Button
        title="Download and View PDF"
        onPress={() => {
          downloadPdf(
            'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
          );
          toggleModal();
        }}
      />

      {/* Loader during download */}
      {videoBookState.isModalLoading && (
        <ActivityIndicator size="large" color="#0000ff" />
      )}

      {/* Modal for PDF Display */}
      <Modal
        visible={videoBookState.pdfOpen}
        animationType="slide"
        onRequestClose={toggleModal}
        transparent={true}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          <View style={styles.pdfContainer}>
            {videoBookState.selectStudyMaterial ? (
              <Pdf
                source={{uri: videoBookState.selectStudyMaterial}}
                onError={error => console.error('PDF Error:', error)}
                style={styles.pdf}
              />
            ) : (
              <Text style={styles.errorText}>No PDF available</Text>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    paddingTop: 50,
    alignItems: 'center',
  },
  pdfContainer: {
    flex: 1,
    width: Dimensions.get('window').width * 0.9,
    marginTop: 20,
  },
  pdf: {
    flex: 1,
    width: '100%',
    height: Dimensions.get('window').height * 0.8,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 20,
    zIndex: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default PdfViewer;

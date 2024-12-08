import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Share from 'react-native-share';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFS from 'react-native-fs'; // Import RNFS for file handling
import Button from '../button/Button';
import {handleHtmlCode} from './valuationTable';
import {useSelector} from 'react-redux';
import {PropertySummary} from './interface';
import color from '../../../theme/color';

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({visible, onClose}) => {
  const [loader, setLoader] = useState(false);
  const [pdfLoader, setPdfLoader] = useState(false);
  const [pdfFile, setPdfFile] = useState<any>(null); // Add correct type
  const {userData}: {userData: PropertySummary} = useSelector(
    (state: any) => state.userReducer,
  );

  const isPermitted = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs access to Storage data',
            buttonPositive: 'OK',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err: any) {
        Alert.alert('Write permission error', err.toString());
        return false;
      }
    } else {
      return true;
    }
  };

  const createPDF = async () => {
    if (await isPermitted()) {
      setLoader(true);
      let options = {
        html: handleHtmlCode(userData),
        fileName: 'custom-styled-sample',
        directory: 'Documents',
        base64: true,
        paddingBottom: 120,
        pageSize: {
          width: 612, // Custom width in points (e.g., 612 points for A4 width)
          height: 792, // Custom height in points (e.g., 792 points for A4 height)
        },
      };

      let file: any = await RNHTMLtoPDF.convert(options);
      setPdfFile(file);
      setLoader(false);
      if (file.filePath) {
        shareData(file.filePath);
      } else {
        Alert.alert('Error', 'PDF generation failed');
      }
    }
  };
  const pdfDownloadPDF = async () => {
    setPdfLoader(true);
    if (await isPermitted()) {
      setPdfFile(true);
      let options = {
        html: handleHtmlCode(userData),
        fileName: 'custom-styled-sample',
        directory: 'Documents',
        base64: true,
        paddingBottom: 120,
        pageSize: {
          width: 612, // Custom width in points (e.g., 612 points for A4 width)
          height: 792, // Custom height in points (e.g., 792 points for A4 height)
        },
      };

      let file: any = await RNHTMLtoPDF.convert(options);
      setPdfFile(file);
      setPdfFile(true);
      setPdfLoader(true);

      if (file.filePath) {
        setPdfLoader(false);
        downloadPDF(file.filePath); // Call download function
      } else {
        Alert.alert('Error', 'PDF generation failed');
      }
    }
  };

  const shareData = (filePath: string) => {
    let options = {
      url: `file://${filePath}`,
      title: 'Share PDF',
    };
    Share.open(options)
      .then(res => console.log(res))
      .catch(err => {
        err && console.log(err);
      });
  };

  const downloadPDF = async (filePath: string) => {
    try {
      const downloadDir = RNFS.DocumentDirectoryPath;
      const fileName = 'custom-styled-sample.pdf';
      const downloadPath = `${downloadDir}/${fileName}`;
      await RNFS.downloadFile({
        fromUrl: `file://${filePath}`,
        toFile: downloadPath,
      });
      Alert.alert('Success', 'PDF downloaded successfully!');
    } catch (error) {
      Alert.alert('Error', 'PDF download failed!');
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <TouchableOpacity onPress={onClose} style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Generate Pdf</Text>
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => createPDF()}>
              {!loader ? (
                <Text style={styles.modalButtonText}>Share PDF</Text>
              ) : (
                <ActivityIndicator size={'small'} color={'black'} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              // onPress={() => (pdfFile ? downloadPDF(pdfFile.filePath) : null)}
              onPress={() => pdfDownloadPDF()}>
              {!pdfLoader ? (
                <Text style={styles.modalButtonText}>Download PDF</Text>
              ) : (
                <ActivityIndicator size={'small'} color={'black'} />
              )}
              <Text style={styles.modalButtonText}></Text>
            </TouchableOpacity>
          </View>
          <Button
            label="Cancel"
            onPress={onClose}
            containerStyle={styles.cancelButton}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.transparent,
  },
  modalContent: {
    padding: 20,
    backgroundColor: color.white,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: color.black,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: color.gray,
    borderRadius: 8,
    flex: 1,
    backgroundColor: color.modalColor,
    marginLeft: 8,
    marginRight: 8,
  },
  modalButtonText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  cancelButton: {
    marginTop: 20,
    width: '50%',
    borderRadius: 8,
  },
});

export default CustomModal;

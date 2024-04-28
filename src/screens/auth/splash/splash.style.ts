import color from '@theme/color';
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  statusBarContainer: {
    height: 0,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: color.secondaryBG,
  },
  logoContainer: {
    top: 63,
    position: 'absolute',
    zIndex: 2,
    left: 0,
    right: 0,
  },
  logo: {
    width: 257,
    height: 83,
    alignSelf: 'center',
  },
  contentContainer: {
    position: 'absolute',
    zIndex: 1,
    bottom: 41,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  loginButton: {
    marginTop: 15,
  },
  containerStyle: {
    marginVertical: 0,
    width: 257,
    ...Platform.select({
      ios: {
        shadowColor: color.lightgray,
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.3,
        shadowRadius: 20,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  solidContainerStyle: {
    marginVertical: 0,
    width: 257,
    // ...Platform.select({
    //   ios: {
    //     // shadowColor: color.dodgerBlue,
    //     shadowOffset: {width: 0, height: 10},
    //     shadowOpacity: 0.3,
    //     shadowRadius: 10,
    //   },
    //   android: {
    //     elevation: 10,
    //   },
    // }),
  },
  videoStyle: {
    height: '100%',
    width: '100%',
  },
});

export default styles;

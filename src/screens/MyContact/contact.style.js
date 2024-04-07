import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    padding: 20,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: '#bccfbc',
  },
  mainView: {
    flex: 1,
    width: '97%',
    marginTop: 60,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 5,
  },
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    margin: 4,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  rowView: {
    flexDirection: 'row',
    height: 65,
    alignItems: 'center',
  },
  contactCon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  placeholder: {
    width: 55,
    height: 55,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactDat: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  txt: {
    fontSize: 18,
  },
  name: {
    fontSize: 16,
  },
  nameAlpha: {
    fontSize: 13,
    color: 'red',
  },
  phoneNumber: {
    color: '#888',
  },
  profileStyle: {
    height: 45,
    width: 45,
    borderRadius: 45,
  },
  image: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  indexLetterStyle: {
    color: 'grey',
    fontSize: 14,
  },
  letterListContainerStyle: {
    height: '100%',
    margin: 2,
  },
  indexLetterContainerStyle: {
    height: 40,
    marginBottom: 1,
  },
});
export default style;

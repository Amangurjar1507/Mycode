import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { AddMode, UpdateMode } from '../redux/Adduserslic';

const Adduser = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const User = useSelector(state => state.UserAdd);
    const { params } = useRoute();
    const [first, setFirst] = useState(params?.first);
    const [last, setLast] = useState(params?.last);
    const [mobile, setMobile] = useState(params?.mobile);
    const [address, setAddress] = useState(params?.address);
  
    function AddData() {
           dispatch(AddMode({id:User?.length +1,first:first,last:last,mobile:mobile,address:address}));
        navigation.goBack();
    }

    function UpdateFun() {
        dispatch(UpdateMode({id:params?.id,first:first,last:last,mobile:mobile,address:address}));
        navigation.goBack();
        
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginHorizontal: 5 }}>
                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => navigation.goBack()}>
                    <Image resizeMode='contain' source={require('../Images/backarrow.png')}
                        style={{ width: 30, height: 30, marginRight: 5 }} />
                </TouchableOpacity>
                <Text style={styles.main}> Add user </Text>
            </View>
            <Inputfiled placeholder="First name" value={first} onChangeText={setFirst} />
            <Inputfiled placeholder="Last name" value={last} onChangeText={setLast} />
            <Inputfiled placeholder="Mobile no." value={mobile} onChangeText={setMobile} />
            <Inputfiled placeholder="Address" value={address} onChangeText={setAddress} />
            <TouchableOpacity onPress={() => AddData()} style={{ ...styles.Bttn }}>
                <Text style={{ paddingHorizontal: 20, paddingVertical: 10, color: '#ccc', fontWeight: '600', fontSize: 14 }}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => UpdateFun()} style={{ ...styles.Bttn ,marginTop:20}}>
                <Text style={{ paddingHorizontal: 20, paddingVertical: 10, color: '#ccc', fontWeight: '600', fontSize: 14 }}>Update</Text>
            </TouchableOpacity>
        </View>
    )
}


const Inputfiled = ({ placeholder, value, onChangeText, keyboardType }) => (
    <TextInput style={{ ...styles.input }} placeholder={placeholder}
        keyboardType={keyboardType} value={value} onChangeText={onChangeText} />
);
export default Adduser

const styles = StyleSheet.create({
    main: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600', color: '#000',
        marginVertical: 20
    },
    input: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: '#fff', alignSelf: 'center',
        borderRadius: 5,
        width: '96%', height: 42, fontSize: 14, color: '#000', paddingLeft: 10, marginBottom: 20
    },
    Bttn: {

        alignSelf: 'center',
        backgroundColor: 'green',
        borderRadius: 5, right: 10, alignItems: 'center', justifyContent: 'center'

    }


})
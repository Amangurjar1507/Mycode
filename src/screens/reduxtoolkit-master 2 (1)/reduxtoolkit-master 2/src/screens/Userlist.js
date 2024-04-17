import { StatusBar, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE } from '../redux/Actiontype';
import { DeleteMode } from '../redux/Adduserslic';
const Userlist = () => {
    const Dimension = useWindowDimensions();
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const User = useSelector(state => state.UserAdd);
    function deletFun(uuid) {
        dispatch(DeleteMode({id:uuid}));
    }
    function editFun(items) {
        navigation.navigate('Adduser',items); 
    }
    // console.log('User', User);
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
            <View style={{ marginHorizontal: 10, marginTop: -10, marginBottom: 10 }}>
                <Text style={styles.main}>User list</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Adduser')} style={{ ...styles.flotbutton }}>
                    <Text style={{ color: '#fff', paddingVertical: 8, paddingHorizontal: 20 }}>Add</Text>
                </TouchableOpacity>
            </View>
            <FlatList data={ User} keyExtractor={(item)=>item.id}
            //  data={data.filter(item => {
            //     return item.title.toLowerCase().includes(search.toLowerCase());
            //   })}

                renderItem={({ item, index }) =>
                    <View   style={{ ...styles.box, width: Dimension.width - 20, padding: 5, marginBottom: 20 }}>
                        <Text>{item.first}</Text>
                        <TouchableOpacity onPress={() =>  editFun(item)}><Text style={{ color: '#000' }}>Edit</Text></TouchableOpacity>

                        <TouchableOpacity onPress={() =>  deletFun(item.id)}><Text style={{ color: '#000' }}>Delete</Text></TouchableOpacity>
                    </View>
                }

            />
        </View>
    )
}

export default Userlist

const styles = StyleSheet.create({
    main: {
        textAlign: 'left',
        fontSize: 20,
        fontWeight: '600', color: '#000',
        marginVertical: 20
    },
    box: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: '#fff', alignSelf: 'center',
        borderRadius: 5
    },
    flotbutton: {
        position: 'absolute',
        bottom: 10,
        alignSelf: 'flex-end',
        backgroundColor: 'green',
        borderRadius: 5, right: 10, alignItems: 'center', justifyContent: 'center'

    }



})
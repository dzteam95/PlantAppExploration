import React, {useState,useEffect, Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity, AsyncStorage, setState, FlatList,footer

} from 'react-native';
import {COLORS} from "../constants";
import {tabs} from "../navigation/tabs";

const ProfileDetail = ({route, navigation,  props }) => {

    const [token, setToken] = useState({value: '', error: ''})
    const [userId, setUserId] = useState({value: '', error: ''})
    const [result, setResult] = useState([])



    const informationUserByid = async () => {

        const token = await AsyncStorage.getItem('id_token')

        const userId = await AsyncStorage.getItem('userId')

        let data = {
            method: 'GET',
            credentials: 'same-origin',
            mode: 'same-origin',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
        }
        fetch(`http://localhost:4000/users/${userId}`, data)
            .then((response) => response.json())
            .then((response) => {
                setResult(response)
                console.log("results:",response)
                return (response);
            })
        //  console.log("test :", userId)
        // console.log("results:",result)

        //
        //saveData('result:',test),


    }
    useEffect(async() => {
        await informationUserByid()
        //  console.log("Testetu:",result)
        return
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Text style={styles.txt}>Retour</Text>
                </TouchableOpacity>

                <View style={styles.bodyContent }>
                    <Text style={styles.name}>{result.username}</Text>
                    <Text style={styles.info}>{result.email}</Text>
                    <Text style={styles.info}>{result.firstName}</Text>
                    <Text style={styles.info}>{result.lastName}</Text>
                    <Text style={styles.info}>{result.createdDate}</Text>
                    <Text style={styles.info}>{result.birthday}</Text>
                    <Text style={styles.info}>{result.city}</Text>
                    <Text style={styles.info}>{result.city_code}</Text>
                    <Text style={styles.info}>{result.country}</Text>
                </View>
            </View>
            <View style={styles.container}>
                {tabs}
            </View>

        </View>
    );

}
const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.greenDark,
        height: 200,
    },
    name: {
        fontSize: 22,
        color:COLORS.greenDark,
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        alignItems: 'center',
        padding: 30,
    },

    info: {
        fontSize: 16,
        color: COLORS.greenDark,
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: COLORS.greenDark,
    },
    Footer: {
    bottom: 0
    }
});

export default ProfileDetail

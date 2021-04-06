import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {COLORS} from "../constants";

const Profile = ({ navigation }) => {

        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <Text style={styles.name}>Mon profil</Text>

                    <View style={styles.bodyContent}>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text  style={styles.txt}>Mon abonnement</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.txt} >Parrainage</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text  style={styles.txt}>Mes favoris</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text  style={styles.txt}>Mes informations</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text  style={styles.txt}>Améliorer mon application</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text  style={styles.txt}>Aide et contact</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text  style={styles.txt}>Déconnexion</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.txt}>Mon compte</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );

}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#00BFFF",
        height:'auto',
    },
    name:{
        fontSize:22,
        color:"#222222",
        fontWeight:'900',
        marginTop:100,
        marginBottom:20,
        marginLeft:20,


    },

    bodyContent: {

        alignItems: 'center',

    },

    buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:350,
        borderRadius:10,
        backgroundColor: COLORS.lightGray,
    },

    txt: {
        fontSize:18,
        fontWeight:'500',
    },
})
export default Profile

import React, { Component,useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Modal,
    Pressable,
    Linking,

} from 'react-native';
import {COLORS} from "../constants";

const Profile = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>x</Text>
                            </Pressable>
                            <Text style={styles.modalText}>Envie de discuter ?</Text>
                            <Text style={styles.modalText}>Chez seedy, on est à l'écoute. Ne soyez pas timide, envoyez nous un petit email. on sera ravi de y'répondre</Text>
                            <TouchableOpacity style={styles.buttonOpen} onPress={() => navigation.replace('HelpUs')}>
                                <Text  style={styles.txt}>Envoyer un mail</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonOpen} onPress={() => navigation.replace(Linking.openURL("https://www.facebook.com/"))}>

                                <Text  style={styles.txt}>Contacte nos sur messenger</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonOpen} onPress={() => navigation.replace( Linking.openURL("https://seedy.difego.fr/foire-au-question-faq/"))}>
                                <Text  style={styles.txt}>Consulter notre FAQ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.textStyle}>Show Modal</Text>
                </Pressable>
            <View style={styles.body}>

                </View>
                <Text style={styles.name}>Mon profil</Text>

                <View style={styles.bodyContent}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.replace('Subscription')}>
                        <Text  style={styles.txt}>Mon abonnement</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.replace('Parrainage')}>
                        <Text style={styles.txt} >Parrainage</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text  style={styles.txt}>Mes favoris</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.replace('ProfileDetail')}>
                        <Text  style={styles.txt}>Mes informations</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.replace('HelpUs')}>
                        <Text  style={styles.txt}>Améliorer mon application</Text>
                    </TouchableOpacity>
                    <Pressable
                        style={[styles.button, styles.buttonContainer]}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text  style={styles.txt}>Aide et contact</Text>
                    </Pressable>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.replace('Logout')}>
                        <Text  style={styles.txt}>Déconnexion</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.replace('Compte')}>
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

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,


    },
    buttonOpen: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:350,
        borderRadius:10,
        backgroundColor: COLORS.greenDark,
    },
    buttonClose: {
        backgroundColor: COLORS.greenDark,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})
export default Profile

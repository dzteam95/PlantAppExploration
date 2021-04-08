import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Switch,
    FlatList,
    Image,
    Alert,
    TextInput,
} from 'react-native';
import {COLORS} from "../constants";

const HelpUs = ({ navigation }) => {

    const [message, setMessage] = useState({ value: '', error: '' })

    eventClickListener = () => {

        //Si messgae envoye alors 
        Alert.alert("Merci :)", "Message envoyé");
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        })

    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.name}>
                        Améliorer l'application
                    </Text>
                </View>
            </View>

            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <Text style={styles.subtitle}>
                        Aide nous à améliorer ton application
                    </Text>
                    <Text style={styles.text}>
                        Utilise ce formualaire pour nous faire un retour sur l'application. Grâce à toi, nous pourrons développer de nouvelles fonctionnalité génialissimes ! Laisse tes coordonnées si tu souhaitese être recontacté ;). Tu peux ausssi nous écrire à l'adresse contact@seedy.fr
                    </Text>
                    <TextInput style={styles.input}
                        placeholder="Votre message"
                        label="message"
                        returnKeyType="next"
                        multiline={true} 
                        value={message.value}
                        onChangeText={(text) => setMessage({ value: text, error: '' })}
                    />
                    <TouchableOpacity style={styles.sendButton} onPress={eventClickListener}>
                        <Text style={styles.sendText}>Envoyer</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContent:{
        marginTop: 50,
        padding:30,
    },
    name:{
        fontSize:22,
        color:"#222222",
        fontWeight:'900',
    },
    body: {
        flex: 2,
    },
    subtitle: {
        fontSize:18,
        color:COLORS.greenDark,
        fontWeight:'900',
        paddingBottom:30,
    },
    text: {
        fontSize:14,
        color:"#151515",
        paddingBottom:30,
    },
    bodyContent:{
        // flexWrap: "wrap",
        paddingLeft:20,
        paddingRight:20,
        fontWeight: "900",
        width: 400 | "100%",
        height: 400 | "100%",

    },
    sendButton:{
        // flex:1,
        backgroundColor:COLORS.greenDark,
        borderRadius:10,
        height:60,
        marginTop:10,
    },
    sendText:{
        fontSize:14,
        fontWeight:'500',
        color: "#ffffff",
        textAlign:'center',
        marginTop:20,
    },
    input:{
        height:200,
        backgroundColor:"#fff",
        marginTop:30,
        width:'100%',
        borderRadius: 10,
    },

})


export default HelpUs

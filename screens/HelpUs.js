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

            {/* <View style={styles.body}> */}
                <View style={styles.bodyContent}>
                    <Text style={styles.subtitle}>
                        Aide nous à améliorer ton application
                    </Text>
                    <Text style={styles.text}>
                        Utilise ce formulaire pour nous faire un retour sur l'application. Grâce à toi, nous pourrons développer de nouvelles fonctionnalités génialissimes ! Laisse tes coordonnées si tu souhaites être recontacté ;) . Tu peux ausssi nous écrire à l'adresse contact@seedy.fr
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
                    <Text style={styles.useless}></Text>
                </View>
            {/* </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    useless:{
        flex:4,
    },
    headerContent:{
        marginTop: 50,
        paddingTop:30,
        paddingBottom:30,
    },
    name:{
        fontSize:22,
        color:"#222222",
        fontWeight:'900',
    },
    subtitle: {
        flex:1,
        fontSize:18,
        color:COLORS.greenDark,
        fontWeight:'900',
        // paddingBottom:30,
    },
    text: {
        // height:115,
        flex:3,
        fontSize:14,
        color:"#151515",
        // paddingBottom:30,
    },
    // body:{
    //     flex:1,
    //     flexDirection:'row',
    //     // paddingRight:20,
    // },
    container:{
        flex:1,
        flexDirection:'column',
        paddingRight:20,
        paddingLeft:20,

    },
    bodyContent:{
        // flexWrap: "wrap",
        flex:1,
        flexDirection:'column',
        // paddingLeft:20,
        // paddingRight:20,
        // fontWeight: "900",
        // width:"100%",
        // height:"100%",

    },
    sendButton:{
        flex:1,
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
        flex:5,
        // height:200,
        padding:20,
        backgroundColor:"#fff",
        // marginTop:30,
        // width:'100%',
        borderRadius: 10,
    },

})


export default HelpUs

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

const Confidential = ({ navigation }) => {

    const [message, setMessage] = useState({ value: '', error: '' })

    eventClickListener = () => {

        //Si messgae envoye alors 
        Alert.alert("Merci :)", "Message envoyé");
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        })

    }

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.name}>
                        Partage de donnée d'utilisation
                    </Text>
                </View>
            </View>

            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <Text style={styles.subtitle}>
                        Pourquoi nous avons besoin de certaines de vos données ?
                    </Text>
                    <Text style={styles.text}>
                        Ces données nous sont préciseuse pous aider à améliorer notre application à te proposer un eexpérience personnalisée. Nous n'avons pas accès de ton téléphone ou aux informations pouvant servir à te tracer.
                    </Text>
                    <Text style={styles.subtitle}>
                        Partager mes informations anonymement
                    </Text>
                    <View style={styles.switchCase}>
                        <Switch
                            trackColor={{ false: "#767577", true:COLORS.greenLight }}
                            thumbColor={isEnabled ? COLORS.greenDark : "#f4f3f4"}
                            style={styles.switch}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <TouchableOpacity style={styles.sendButton} onPress={eventClickListener}>
                        <Text style={styles.sendText}>Appliquer</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContent:{
        marginTop: 50,
        padding:20,
    },
    switchCase:{
        alignItems: 'center',
    },
    switch:{ 
        marginTop: 30,
        marginBottom: 30,
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
})


export default Confidential

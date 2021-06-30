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
    Linking,
    Clipboard,
} from 'react-native';
import {COLORS} from "../constants";
import {Reduc} from "../constants/images";

const Parrainage = ({ navigation }) => {
    const reduction = "PARDES21";

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.name}>
                        Réduction et Parrainage
                    </Text>
                </View>
            </View>

            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <Text style={styles.subtitle}>
                        Invites tes amis !
                    </Text>
                    <TouchableOpacity style={styles.copyButton} onPress={() => Clipboard.setString(reduction)}>
                        <Text style={styles.copyText}>{reduction}</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>Appuyer pour copier</Text>
                    <Image
                        source={Reduc}
                    />
                    <TouchableOpacity style={styles.sendButton} onPress={() => Linking.openURL("https://seedy.difego.fr")}>
                        <Text style={styles.sendText}>Acceder au site Seedy.fr</Text>
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
        flexDirection:"row"
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
        flex: 1,
        paddingLeft:20,
        paddingRight:20,
        fontWeight: "900",
        width: 400 | "100%",
        height: 400 | "100%",
        alignItems:"center",
    },
    sendButton:{
        // flex:1,
        backgroundColor:COLORS.greenDark,
        borderRadius:10,
        height:60,
        marginTop:10,
        marginBottom:10,
        width:"100%",
    },
    copyButton:{
        // flex:1,
        backgroundColor:"#fff",
        borderRadius:10,
        height:60,
        marginTop:10,
        marginBottom:10,
        width:"100%",
    },
    sendText:{
        fontSize:14,
        fontWeight:'500',
        color: "#ffffff",
        textAlign:'center',
        marginTop:20,
    },
    copyText:{
        fontSize:14,
        fontWeight:'500',
        color: "#000",
        textAlign:'center',
        marginTop:20,
    },
})


export default Parrainage

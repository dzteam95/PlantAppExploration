import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
} from 'react-native';

const Conseils = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.name}>
                        Nos conseils & recettes
                    </Text>
                </View>

                <View style={styles.formContent}>
                    <View style={styles.inputContainer}>
                        <Image style={[styles.icon, styles.inputIcon]}/>
                        <TextInput style={styles.inputs}
                                   placeholder="Rechercher"
                        />
                    </View>
                </View>

            </View>

            <View style={styles.body}>
                <View style={styles.bodyContent}>

                    <View style={styles.menuBox}>
                        <Text style={styles.info}>Glossaire</Text>
                    </View>

                    <View style={styles.menuBox}>
                        <Text style={styles.info}>Fiches espèces</Text>
                    </View>

                    <View style={styles.menuBox}>
                        <Text style={styles.info}>Tutos vidéos</Text>
                    </View>

                    <View style={styles.menuBox}>
                        <Text style={styles.info}>Recettes</Text>
                    </View>

                    <View style={styles.menuBox}>
                        <Text style={styles.info}>Fiches maladies</Text>
                    </View>

                    <View style={styles.menuBox}>
                        <Text style={styles.info}>Fiches savoir-faire</Text>
                    </View>

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
    bodyContent:{
        flexWrap: "wrap",
        fontWeight: "900",
        width: 400 | "100%",
        height: 400 | "100%",

    },
    menuBox:{
        backgroundColor: "#DCDCDC",
        width:180,
        height:100,
        margin:10,
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
            height:2,
            width:-2
        },
        elevation:4,
    },
    info:{
        fontSize:18,
        fontWeight:'500',
        color: "#222222",
        textAlign:'center',
        marginTop:30,

    },
    formContent:{
        flexDirection: 'row',
        marginTop:5,
        marginBottom:50,

    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:10,
        borderBottomWidth: 1,
        height:50,
        flexDirection: 'row',
        alignItems:'center',
        flex:1,
        marginLeft:10,
        marginRight:20,
        marginTop:20,
    },
})

export default Conseils

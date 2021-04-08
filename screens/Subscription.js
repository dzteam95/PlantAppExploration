import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Switch,
    FlatList,
    Image,
} from 'react-native';
import {COLORS} from "../constants";

const Subscription = ({ navigation }) => {
        const data = [
                {id:1, name:'Petite Graine', price:'4,99', slug:'PetiteGraine', icon:'https://seedy.difego.fr/wp-content/uploads/2021/04/Abonnement-petite-graine.png'},
                {id:2, name:'Jeune Pousse', price:'7,99', slug:'JeunePousse', icon:'https://seedy.difego.fr/wp-content/uploads/2021/04/Abonnement-Jeune-pousse-.png'},
                {id:3, name:'Sequoia', price:'13,99', slug:'Sequoia', icon:'https://seedy.difego.fr/wp-content/uploads/2021/04/Abonnement-Sequoia.png'},
            ];
            

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.name}>
                        Abonnements
                    </Text>
                </View>
            </View>

            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <FlatList
                        enableEmptySections={true}
                        style={styles.eventList}
                        data={data}
                        keyExtractor= {(item) => {
                            return item.id;
                        }}
                        renderItem={({item}) => {
                            return (
                                <View style={styles.menuBox} >
                                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.replace('SubscriptionDetail', { itemId: item.id})}>
                                        <View style={styles.eventContentFirst}>
                                            <Image style={styles.tinyLogo} source={{ uri: item.icon,}}/>
                                            <Text style={styles.infoName}>{item.name}</Text>
                                        </View>
                                        <View style={styles.eventContentSec}>
                                            <Text style={styles.infoPrice}>{item.price}€ / Mois</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )}}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 20,
        height: 20,
        borderRadius:10,
        margin:20,
    },
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
        // flexWrap: "wrap",
        paddingLeft:20,
        paddingRight:20,
        fontWeight: "900",
        width: 400 | "100%",
        height: 400 | "100%",

    },
    menuBox:{
        backgroundColor: "#DCDCDC",
        borderRadius:10,
        margin:10,

    },
    infoName:{
        fontSize:16,
        fontWeight:'500',
        color: "#151515",
        textAlign:'center',
        marginTop:20,
        paddingLeft:20,
        
    },
    infoPrice:{
        fontSize:18,
        fontWeight:'500',
        color: "#151515",
        textAlign:'center',
        marginTop:20,
        paddingLeft:20,
        
    },
    eventContentFirst: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        height:50,
    },
    eventContentSec: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        height:50,
    },
    eventList:{
        marginTop:20,
    },
})


export default Subscription

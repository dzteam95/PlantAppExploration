import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Switch,
    FlatList,
    Image,
    Linking,
} from 'react-native';
import {COLORS} from "../constants";


const SubscriptionDetail = ({route, navigation }) => {
        const data = [
                {id:1, name:'Free', price:'0,00', priceyear:'0,00', slug:'Free', icon:'https://seedy.difego.fr/wp-content/uploads/2021/04/Abonnement-petite-graine.png' , t1:"✓", t2:"✓", t3:"✓", t4:"✓" , t5:"✓" , t6:"5" , t7:"∞", url:"https://seedy.difego.fr/abonnement-petite-graine/"},
                {id:2, name:'Petite Graine', price:'4,99', priceyear:'49,99', slug:'PetiteGraine', icon:'https://seedy.difego.fr/wp-content/uploads/2021/04/Abonnement-petite-graine.png' , t1:"✓", t2:"✓", t3:"✓", t4:"✓" , t5:"✓" , t6:"5" , t7:"∞", url:"https://seedy.difego.fr/abonnement-petite-graine/"},
                {id:3, name:'Jeune Pousse', price:'7,99', priceyear:'89,99', slug:'JeunePousse', icon:'https://seedy.difego.fr/wp-content/uploads/2021/04/Abonnement-Jeune-pousse-.png' , t1:"✓", t2:"✓", t3:"✓", t4:"✓" , t5:"✓" , t6:"20" , t7:"∞", url:"https://seedy.difego.fr/abonnement-jeune-pousse/"},
                {id:4, name:'Sequoia', price:'13,99', priceyear:'159,99', slug:'Sequoia', icon:'https://seedy.difego.fr/wp-content/uploads/2021/04/Abonnement-Sequoia.png', t1:"✓", t2:"✓", t3:"✓", t4:"✓" , t5:"✓" , t6:"∞" , t7:"∞", url:"https://seedy.difego.fr/abonnement-sequoia/"},
            ];
        const { itemId } = route.params;
        const id = JSON.stringify(itemId)-1;
        
        //fetch
        //
        const result = data[id];
        //console.log(result);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.name}>
                        {result.name}
                    </Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <View style={styles.eventList}>
                        <View style={styles.menuBox} >
                            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.replace('Subscription')}>
                                <View style={styles.eventContentFirst}>
                                    <Image style={styles.tinyLogo} source={{ uri: result.icon,}}/>
                                    <Text style={styles.infoName}>{result.name}</Text>
                                    <Image style={styles.tinyLogo} source={{ uri: "https://cdn4.iconfinder.com/data/icons/navigation-40/24/chevron-down-512.png"}}/>
                                </View>
                                <View style={styles.eventContentSec}>
                                    <View style={styles.eventContentL}>
                                        <Text style={styles.info}>Fiche Vocabulaire: Parler à l'oreille des plantes</Text>
                                        <Text style={styles.info}>Fiches Fruits & Légumes</Text>
                                        <Text style={styles.info}>Fiches Maladies</Text>
                                        <Text style={styles.info}>Tutos vidéos</Text>
                                        <Text style={styles.info}>Recettes</Text>
                                        <Text style={styles.info}>Potager virtuel</Text>
                                        <Text style={styles.info}>Fiches en favoris</Text>
                                    </View>
                                    <View style={styles.eventContentR}>
                                        <Text style={styles.info}>{result.t1}</Text>
                                        <Text style={styles.info}>{result.t2}</Text>
                                        <Text style={styles.info}>{result.t3}</Text>
                                        <Text style={styles.info}>{result.t4}</Text>
                                        <Text style={styles.info}>{result.t5}</Text>
                                        <Text style={styles.info}>{result.t6}m2 max</Text>
                                        <Text style={styles.info}>{result.t7}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.actionRedirection} >
                            <View style={styles.linkL} >
                                <View>
                                    <Text style={styles.infoRedirect}>1 Mois</Text>
                                    <Text style={styles.infoRedirect}>{result.price}€</Text>
                                </View>
                            </View>
                            <View style={styles.linkR} >
                                <View>
                                    <Text style={styles.infoRedirectR}>12 Mois</Text>
                                    <Text style={styles.infoRedirectR}>{result.priceyear}€</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.actionRedirection} >
                            <TouchableOpacity style={styles.linkB} >
                                {/* <Text style={styles.infoRedirect}>Je m'abonne à {result.price}€ /mois</Text> */}
                                <Text style={styles.infoRedirect} onPress={() => Linking.openURL(result.url)}>
                                    Je m'abonne à {result.price}€ /mois
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
    actionRedirection:{
        // flex:1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        height:50,
        paddingBottom:120,
    },
    linkL:{
        flex:1,
        backgroundColor: COLORS.greenDark,
        borderRadius:10,
        margin:10,
        height:100,
    },
    linkR:{
        flex:1,
        backgroundColor: "#DCDCDC",
        borderRadius:10,
        margin:10,
        height:100,
    },
    linkB:{
        flex:1,
        backgroundColor: COLORS.greenDark,
        borderRadius:10,
        margin:10,
        height:60,
    },
    infoName:{
        fontSize:16,
        fontWeight:'500',
        color: "#151515",
        textAlign:'left',
        marginTop:20,
        paddingLeft:20,
        width:"60%",
    },
    infoPrice:{
        fontSize:18,
        fontWeight:'500',
        color: "#151515",
        textAlign:'center',
        marginTop:20,
        paddingLeft:20,  
    },
    info:{
        fontSize:14,
        fontWeight:'500',
        color: "#151515",
        textAlign:'left',
        marginTop:20,
        paddingLeft:20,
    },
    infoRedirect:{
        fontSize:14,
        fontWeight:'500',
        color: "#ffffff",
        textAlign:'center',
        marginTop:20,
    },
    infoRedirectR:{
        fontSize:14,
        fontWeight:'500',
        color: "#151515",
        textAlign:'center',
        marginTop:20,
    },
    eventContentFirst: {
        // flex:1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        height:50,
    },
    eventContentSec: {
        // flex:1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        height:'auto',
    },
    eventContentThird: {
        // flex:1,
        paddingTop:30,
        flexDirection: 'row',
        alignItems: 'flex-start',
        height:'auto',
    },
    eventContentL: {
        flex:5,
        flexDirection: 'column',
        alignItems: 'flex-start',
        height:'auto',
        paddingBottom:30,
    },
    eventContentR: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        height:'auto',
    },

    eventList:{
        marginTop:20,
    },
})


export default SubscriptionDetail

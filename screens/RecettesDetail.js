import React, { useState,useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Switch,
    FlatList,
    Image,
    Linking,
    ImageBackground,
    Button,
    Alert,
    ScrollView,
    setState,
    AsyncStorage,
} from 'react-native';
import {COLORS} from "../constants";
import {Boarding1} from "../constants/images";
import {SunConseil} from "../constants/images";
import {WaterConseil} from "../constants/images";
import {SpaceConseil} from "../constants/images";
import {PHConseil} from "../constants/images";
import {ClimatConseil} from "../constants/images";
import {SizingConseil} from "../constants/images";

//fiche maladie et ravages

const RecettesDetail = ({route, navigation,  props }) => {
 
    const [search, setSearch] = useState({ value: '', error: '' })
    const [token, setToken] = useState({ value: '', error: '' })
    const [result, setResult] = useState({ value: '', error: '' })
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const [img, setImg] = useState();
    const [ingreList, setIngreList] = useState();
    const [url, setUrl] = useState();
    const { item } = route.params.item;
    const axios = require('axios');

  
    useEffect(() => {
        // readToken()
        searchPlantBasicDetailFunction()
        return /*(
            //readData()
        )*/
    }, [])

    searchPlantBasicDetailFunction = async () => {
        // console.log(route.params.item)
        axios
        .get(`https://api.spoonacular.com/recipes/${route.params.item}/information`, {
            params: {
            // query: item,
            apiKey: '59e3c7b6206646d08c458cc212d07e1c',
            },
        })
        .then(function (response) {
            const obj = JSON.parse(response['request']['_response']);

            // console.log(obj);
            // console.log("obj",obj);
            // console.log(obj["title"]);
            // console.log(obj["extendedIngredients"]);

            // console.log(obj["spoonacularSourceUrl"]);
            // console.log(obj["summary"]);
            // console.log(obj["image"]);

            // saveData('data',obj.results);
            setResult(response['request']['_response']);
            setTitle(obj['title']);
            setIngreList(obj['extendedIngredients']);
            setUrl(obj['spoonacularSourceUrl']);
            setDesc(obj['summary']);
            setImg(obj['image']);
            // setResult(obj);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }
    // const result = data[0];
    // console.log(result);

    const [isEnabledDesc, setIsEnabledDesc] = useState(true);
        const toggleSwitchDesc = () => setIsEnabledDesc(previousState => !previousState);
    const [isEnabledDescription, setIsEnabledDescription] = useState(true);
        const toggleSwitchDescription = () => setIsEnabledDescription(previousState => !previousState);
    const [isEnabledMenu, setIsEnabledMenu] = useState(2);

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
                <ImageBackground style={styles.bodyContent} /*source={{ uri: result.icon,}}*/>
                    <ScrollView style={styles.eventList} showsVerticalScrollIndicator={false} >
                        <View>
                            <View style={styles.eventContentFirst}>
                                <Image style={styles.presentationLogo} source={{ uri: img,}}/>
                                <View >
                                    <Text style={styles.infoPlantName}>{title}</Text>
                                    <Text style={styles.infoFamily}>Recette</Text>
                                    {/*<Text style={styles.infoFamily}>Info Maladie</Text>*/}
                                </View>
                            </View>
                            <View style={styles.menuRow}>
                                {/* General */}
                                {/* <View style={styles.menuBoxButton} >
                                    <TouchableOpacity 
                                            style={isEnabledMenu==1? styles.buttonContainer : styles.containerLight}
                                            onPress={() => setIsEnabledMenu(1)}
                                        >
                                        <View style={styles.eventContentFirst}>
                                            <Text style={isEnabledMenu==1? styles.infoMenuW : styles.infoMenuB}>General</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>  */}
                                {/* Guide de Culture */} 
                                <View style={styles.menuBoxButton} >
                                    <View 
                                            style={isEnabledMenu==2? styles.buttonContainer : styles.containerLight}
                                            onPress={() => setIsEnabledMenu(2)}
                                        >
                                        <View style={styles.eventContentFirst}>
                                            <Text style={isEnabledMenu==2? styles.infoMenuW : styles.infoMenuB}>Recette</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                     

                        {/* here the content of the section Guide */}
                        <View style={isEnabledMenu==2? styles.buttonContainerE : styles.containerSuperLight} >
                            <View style={styles.menuBox} >
                                <TouchableOpacity 
                                    style={isEnabledDesc? styles.containerLight : styles.buttonContainerE}
                                    onPress={toggleSwitchDesc}
                                    >
                                    <View style={styles.eventContentFirst}>
                                        <Image style={styles.tinyLogo} source={{ uri: img,}}/>
                                        <Text style={styles.infoName}>Ingrédients</Text>
                                        <Image style={styles.tinyLogo} source={{ uri: "https://cdn4.iconfinder.com/data/icons/navigation-40/24/chevron-down-512.png"}}/>
                                    </View>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContentL}>
                                        <FlatList
                                            enableEmptySections={true}
                                            // style={styles.eventList}
                                            data={ingreList}
                                            keyExtractor={(item) => {
                                            return item.id;
                                            }}
                                            renderItem={({item}) => {
                                            return (
                                                // <View style={styles.menuBoxList}>
                                                    <View>
                                                        <Text style={styles.infoNameIngre}>{item.name}</Text>
                                                    </View>
                                                // </View>
                                            );
                                            }}
                                        />
                                            
                                        </View>
                                        {/* <View style={styles.eventContentR}>
                                            <Text style={styles.info}>{result.conseil}</Text>
                                            
                                        </View> */}
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.menuBox} >
                                <TouchableOpacity 
                                style={isEnabledDescription? styles.containerLight : styles.buttonContainerE}
                                onPress={toggleSwitchDescription}
                                >
                                    <View style={styles.eventContentFirst}>
                                        <Image style={styles.tinyLogo} source={{ uri: img,}}/>
                                        <Text style={styles.infoName}>Etapes</Text>
                                        <Image style={styles.tinyLogo} source={{ uri: "https://cdn4.iconfinder.com/data/icons/navigation-40/24/chevron-down-512.png"}}/>
                                    </View>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContentL}>
                                            <Text style={styles.info}>{desc}</Text>
                                        </View>
                                        {/* <View style={styles.eventContentR}>
                                            <Text style={styles.info}>{result.t1}</Text>
                                        </View> */}
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* here the content of the section Calendar
                        <View style={isEnabledMenu==3? styles.buttonContainerE : styles.containerSuperLight} >
                        </View>  */}
                       
                        {/* <View style={styles.actionRedirection} >
                            <TouchableOpacity style={styles.linkL} onPress={() => Linking.openURL(result.url)}>
                                <Text style={styles.infoRedirect}>Fiches Conseils</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.linkR} onPress={() => Linking.openURL(result.url)}>
                                <Text style={styles.infoRedirectR}>Fiches Maladies</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.actionRedirection} >
                            <TouchableOpacity style={styles.linkB} >
                                {/* <Text style={styles.infoRedirect}>Je m'abonne à {result.price}€ /mois</Text> */}
                                {/* <Text style={styles.infoRedirectB} onPress={() => Linking.openURL(result.url)}> */}
                                    {/* Quelque chose */}
                                {/* </Text>
                            </TouchableOpacity>
                        </View> */}
                    </ScrollView>
                </ImageBackground>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    infoFamily:{
        fontSize:10,
        fontWeight:'400',
        color: "#151515",
        // textAlign:'left',
        marginTop:5,
        paddingLeft:20,
    },
    infoClimat:{
        fontSize:14,
        fontWeight:'500',
        color: "#2112E1",
        // textAlign:'left',
        marginTop:20,
        paddingLeft:20,
    },
    infoPH:{
        fontSize:14,
        fontWeight:'500',
        color: "#E109C3",
        // textAlign:'left',
        marginTop:20,
        paddingLeft:20,
    },
    infoWater:{
        fontSize:14,
        fontWeight:'500',
        color: "#12CBE1",
        // textAlign:'left',
        marginTop:20,
        paddingLeft:20,
    },
    infoSun:{
        fontSize:14,
        fontWeight:'500',
        color: "#E1BF0E",
        // textAlign:'left',
        marginTop:20,
        paddingLeft:20,
    },
    containerLight:{
        height:60,
        overflow:"hidden",
    },
    buttonContainer:{
        height:70,
        overflow:"hidden",
        backgroundColor: COLORS.greenDark,
        borderRadius:10,
    },
    containerSuperLight:{
        height:0,
        overflow:"hidden",
    },
    btnSelected: {
        backgroundColor:"#fff"
    },
    notSelected : {
        backgroundColor:"#000"
    },
    container:{
        // backgroundColor:"#000000",
    },
    menuRow:{
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: "#fff",
        borderRadius:10,
        margin:10,
    },
    presentationLogo:{
        width: 80,
        height: 80,
        borderRadius:10,
        marginLeft:10,
        marginBottom:20,
    },
    tinyLogo: {
        width: 20,
        height: 20,
        borderRadius:10,
        margin:20,
    },
    tinyLogoGeneral: {
        // width: 20,
        // height: 20,
        // borderRadius:10,
        margin:20,
        // maxWidth: '60%',
        // height: '10%',
    },
    headerContent:{
        marginTop: 50,
        padding:20,
    },
    name:{
        fontSize:22,
        color:"#222222",
        fontWeight:'900',
        paddingLeft:10,
    },
    body: {
        // flex: 2,
        height: "85%",
    },
    bodyContent:{
        // flexWrap: "wrap",
        paddingLeft:20,
        paddingRight:20,
        fontWeight: "900",
        // width: 400 | "100%",
        height: "100%",
    },
    menuBox:{
        backgroundColor: "#fff",
        borderRadius:10,
        margin:10,
    },
    menuBoxButton:{
        backgroundColor: "#fff",
        borderRadius:10,
        // margin:10,
        flex:1,
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
        backgroundColor: "#fff",
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
    infoNameIngre:{
        fontSize:16,
        fontWeight:'500',
        color: "#151515",
        textAlign:'left',
        marginTop:20,
        paddingLeft:20,
        width:"100%",
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
        // textAlign:'left',
        marginTop:20,
        paddingLeft:20,
    },
    infoPlantName:{
        fontSize:14,
        fontWeight:'500',
        color: "#151515",
        // textAlign:'left',
        // marginTop:20,
        paddingLeft:20,
    },
    infoGeneral:{
        fontSize:14,
        fontWeight:'500',
        color: "#151515",
        // textAlign:'left',
        marginTop:20,
        paddingLeft:20,
    },
    infoMenuW:{
        fontSize:12,
        fontWeight:'500',
        color: "#ffffff",
        textAlign: 'center',
        marginTop:25,
        width: '100%',
        // paddingLeft:20,
    },
    infoMenuB:{
        fontSize:12,
        fontWeight:'500',
        color: "#151515",
        textAlign: 'center',
        marginTop:25,
        width: '100%',
        // paddingLeft:20,
    },
    infoRedirect:{
        fontSize:14,
        fontWeight:'500',
        color: "#ffffff",
        textAlign:'center',
        marginTop:40,
    },
    infoRedirectR:{
        fontSize:14,
        fontWeight:'500',
        color: "#151515",
        textAlign:'center',
        marginTop:40,
    },
    infoRedirectB:{
        fontSize:14,
        fontWeight:'500',
        color: "#ffffff",
        textAlign:'center',
        marginTop:20,
    },
    eventContentFirst: {
        // flex:1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        //height:100,
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
        marginRight:20,
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


export default RecettesDetail
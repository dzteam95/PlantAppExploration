import React, { Component, useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
    AsyncStorage,
} from 'react-native';

// searchFilterFunction = (search) => {

//     //Met a jour le event text
//     //this.setState({ search });
//     const newHandleSearch = search;
//     // console.log(search);
//     console.log('requette search is : ',newHandleSearch);

// //     fetch(`https://seedy.adnanenabil.com/v1/plants/name/${newHandleSearch}`)
    
//     // Passertoken\
    
// //       .then((responsesearch) => responsesearch.json())
// //       .then((jsonsearch) => {
// //         // console.debug(jsonsearch);
// //         //console.log(jsonsearch);
// //         this.setState({ datasearch: jsonsearch.data.plant });
// //       })
// //       .catch((error) => console.error(error))
// //       .finally(() => {
// //         this.setState({ isLoadingSearch: false });
// //       })
// }

const RecettesList = ({ route, navigation }) => {
    const  search = '';
    const  text = '';
    const { item } = route.params;
    // const { itemlink } = route.params.itemlink;
    let [token, setToken] = useState({ value: 'ss', error: '' })
    const [result, setResult] = useState({ value: '', error: '' })

    const axios = require('axios');

    const [ReRoute, setReRoute] = useState('')

    useEffect(() => {
        readToken()
        // console.log("route.params.intemLink",route.params.itemlink)
        searchPlantListFunction()
        // reRouteFunction()
        // return /*(
        //     //readData()
        // )*/
    }, [])

    const readToken = async () => {
        try {
            const userJeton = await AsyncStorage.getItem('id_token')      
            if (userJeton !== null) {
                setToken({ 
                    value: userJeton,
                });
                // console.log('jeton ok !')
                // console.log(token.value)
            }else{
                //console.log('jeton pas ok')
            }
        } catch (e) {
          //alert('Failed to fetch the data from storage')
        }  
    }

    const searchPlantListFunction = () => {
         // try {
    //     const data = await AsyncStorage.getItem('data')

    //     if (data ){
    //         console.log("existing data")
    //         setResult(data);
    //     }else {

    console.log('getting data');
    axios
      .get('https://api.spoonacular.com/recipes/complexSearch?', {
        params: {
          query: 'a',
          apiKey: '59e3c7b6206646d08c458cc212d07e1c',
        },
      })
      .then(function (response) {
        const obj = JSON.parse(response['request']['_response']);

        console.log(obj.results[1]);
        // console.log(response["request"]["_response"]);
        // saveData('data',obj.results);
        setResult(obj.results);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    //     }
    // } catch (e) {
    //     alert('Failed to fetch the data from storage')
    // }
    }  

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.name}>
                        Nos conseils & recettes
                    </Text>

                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.formContent}>
                    {/* <View style={styles.inputContainer}>
                        <Image style={[styles.icon, styles.inputIcon]}/>
                        <TextInput
                            style={styles.inputs}
                            onChangeText={this.searchFilterFunction}
                            value={search}
                            underlineColorAndroid="transparent"
                            placeholder="Rechercher"
                        />
                    </View> */}
                </View>
                <View style={styles.bodyContent}>
                    {/* back  action*/}
                    <View style={styles.actionContent}>
                        <View style={styles.actionContentF}>
                            <TouchableOpacity style={styles.backAction} onPress={() => navigation.replace('Conseils')}>
                                <Text style={styles.backText}>
                                    Nos conseils & recettes
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.actionContentS}></View>
                            <TouchableOpacity style={styles.subtitle}>
                                <Text style={styles.subtitleText}>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    {/* List elements */}
                    <FlatList
                        enableEmptySections={true}
                        style={styles.eventList}
                        data={result}
                        keyExtractor= {(item) => {
                            return item.id;
                        }}
                        renderItem={({item}) => {
                            return (
                                <View style={styles.menuBox} >
                                    <TouchableOpacity onPress={() => navigation.replace("RecettesDetail", { item: item.id})}>
                                        <View style={styles.eventContent}>
                                            <View style={styles.eventContentF}>
                                                <Text style={styles.infoName}>{item.title}</Text>
                                            </View>
                                            <View style={styles.eventContentS}>
                                                <Text style={styles.infoName}>></Text>
                                            </View>
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
    container:{
        flexDirection:"column",
        padding:20,
    },
    backAction:{
        // width:180,
        height:100,
    },
    // subtitle:{
    //     width:180,
    //     height:100,
    // },
    backText:{
        fontSize:14,
        color:"#a9a9a9",
    },
    subtitleText:{
        fontSize:14,
        color:"#222222",
    },
    headerContent:{
        marginTop: 50,
        paddingBottom:30,
    },
    name:{
        fontSize:22,
        color:"#222222",
        fontWeight:'900',
        paddingLeft:10,
    },
    bodyContent:{
        flexWrap: "wrap",
        fontWeight: "900",
        width: 400 | "100%",
        height: 400 | "100%",

    },
    eventList:{
        
    },
    actionContent: {
        // flex:12,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginLeft:10,
        marginRight:10,
        width:"90%",
        // backgroundColor: '#FFFFFF',
        // padding:10,
        // borderRadius:10,
    },
    actionContentF: {
        // flex:1,
        height:50,
    },
    actionContentS: {
        // flex:1,
        paddingLeft:10,
    },
    eventContent: {
        // flex:12,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginLeft:10,
        marginRight:10,
        width:"90%",
        // backgroundColor: '#FFFFFF',
        // padding:10,
        // borderRadius:10,
    },
    eventContentF: {
        flex:10,
        // flexDirection: 'row',
        alignItems: 'flex-start',
        // height:50,
    },
    eventContentS: {
        flex:1,
        // flexDirection: 'row',
        alignItems: 'flex-start',
        // height:20,
        // marginTop:10,
    },
    menuBox:{
        // backgroundColor: "#ffffff",
        // width:180,
        // height:100,
        marginRight:10,
        marginTop:10,
        marginBottom:10,
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
        paddingLeft:10,
        paddingRight:20,
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
        marginTop:20,
    },
})

export default RecettesList
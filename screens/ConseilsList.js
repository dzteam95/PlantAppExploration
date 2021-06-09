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

const Conseils = ({ route, navigation }) => {
    const  search = '';
    const  text = '';
    const { item } = route.params;
    const { itemlink } = route.params.itemlink;
    let [token, setToken] = useState({ value: 'ss', error: '' })
    const [result, setResult] = useState({ value: '', error: '' })

    const data = [
        {id:1, name:'Fruits'},
        {id:2, name:'Légumes'},
        {id:3, name:'Aromates'},
        {id:4, name:'Fleurs'},
        {id:5, name:'Les recettes du mois'},
        {id:6, name:'Les plus regardés'},
        {id:7, name:'Recettes de saison'},
        {id:8, name:'Type de plat'},
        {id:9, name:'Avec ingrédients de mon jardin'},
    ];

    const [ReRoute, setReRoute] = useState('')

    useEffect(() => {
        readToken()
        // console.log("route.params.intemLink",route.params.itemlink)
        searchPlantListFunction()
        reRouteFunction()
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
        //Met a jour le event text
        // setSearch({ search });
        // const newHandleSearch = search;
        // // console.log(search);
        // console.log('Requette search is : ',newHandleSearch);        
        
        //copier apres lavoir fait dans conseil list
        //let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDZkYjc4YWMwM2Q2MDNlODMyM2U5ZmIiLCJpYXQiOjE2MTk4Nzc1ODAsImV4cCI6MTYyMDQ4MjM4MH0.s7gLXojBss557Afq4N5n8Ibo0OGBOJMIjqoVhVEJDsE';
        // console.log(token.value)
        let data = {
			method: 'GET',
			credentials: 'same-origin',
			mode: 'same-origin',
			headers: {
				'Accept': '*/*',
				'Content-Type': 'application/json',
                'Authorization': 'Bearer '+route.params.tokenPass.value,
            },
		}

        // fetch(`https://seedy.adnanenabil.com/plants/${itemId}`, data)
        fetch(`https://seedy.adnanenabil.com/${route.params.itemlink}/`, data)

        //Passertoken\
        
            .then((responsesearch) => responsesearch.json())
            .then((jsonsearch) => {
                // console.debug(jsonsearch);
                // console.log(jsonsearch);
                setResult(jsonsearch);
                //this.setState({ datasearch: jsonsearch.data.plant });
            })
            .catch((error) => console.error(error))
            .finally(() => {
            //this.setState({ isLoadingSearch: false });
            })
    }  

    const reRouteFunction = () => {
        switch (route.params.itemlink ) {
            case 'plants':
            //   console.log('plants');
                setReRoute('ConseilsDetail')
              break;
            case 'infossicks':
            //   console.log('infossicks');
                setReRoute('ConseilsDetailFiche')
              break;
            default:
              console.log(`Sorry, we are out of it.`);
          }
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
                                    <TouchableOpacity onPress={() => navigation.replace(ReRoute, { item: item.id, tokenPass: token})}>
                                        <View style={styles.eventContent}>
                                            <View style={styles.eventContentF}>
                                                <Text style={styles.infoName}>{item.name}</Text>
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

export default Conseils

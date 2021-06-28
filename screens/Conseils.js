import React, { Component,useState,useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
    AsyncStorage,
    Button,
    SectionList
} from 'react-native';
import {COLORS} from "../constants";


const Conseils = ({ navigation }) => {
    const [isEnabledSearch, setIsEnabledSearch] = useState(1);
    const [search, setSearch] = useState({ value: 's', error: '' })
    const [token, setToken] = useState({ value: '', error: '' })
    const [result, setResult] = useState({ value: '', error: '' })
    const [secondresult, setSecondResult] = useState({ value: '', error: '' })
    const [thirdresult, setThirdResult] = useState({ value: '', error: '' })
    const [finalresult, setFinalResult] = useState({ value: '', error: '' })
    const  text = '';
    const [state, setState] = useState({TextHolder: '[{"name":"bob"}],[{"name":"bob"}]'})
    const kindList = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Plantes',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Maladies',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Ravages',
        },
      ];

    useEffect(() => {
        readToken()
        return /*(
            //readData()
        )*/
    }, [])

   const searchPlantFunction = (search) => {
        //Met a jour le event text
        setSearch({ search });
        const newHandleSearch = search;
        // console.log(search);
        // console.log('Requette search is : ',search);        
        
        if (search == ''){
            setIsEnabledSearch(1)
        }else {
            setIsEnabledSearch(2)
        }
        //copier apres lavoir fait dans conseil list
        // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MGJkY2JhNDI0NWQxZjBiMDE0NDJlMjIiLCJpYXQiOjE2MjMxNTg0MTEsImV4cCI6MTYyMzc2MzIxMX0.GHICyq1jU4Eg-Cma84K6lKB07v6GeCRhDnT_Le8gk30";
        // console.log(token.value)
        let data = {
			method: 'GET',
			credentials: 'same-origin',
			mode: 'same-origin',
			headers: {
				'Accept': '*/*',
				'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token.value,
                // 'Authorization': 'Bearer '+token,
            },
		}


        // fetch(`http://localhost:4000/plants/name/${search}`, data)
        fetch(`https://seedyapp.tk/plants/name/${search}`, data)
            .then((responsesearch) => responsesearch.json())
            .then((jsonsearch) => {
                setResult(jsonsearch);
            })
            .catch((error) => console.error(error))
            .finally(() => {
            
            })

        // fetch(`http://localhost:4000/infossicks/name/${search}`, data)
        fetch(`https://seedyapp.tk/infossicks/name/${search}`, data)
             .then((responsesearch) => responsesearch.json())
             .then((secondjsonsearch) => {
                 setSecondResult(secondjsonsearch);
             })
             .catch((error) => console.error(error))
             .finally(() => {

             })

        // fetch(`http://localhost:4000/infosravages/name/${search}`, data)
        fetch(`https://seedyapp.tk/infosravages/name/${search}`, data)
             .then((responsesearch) => responsesearch.json())
             .then((thirdjsonsearch) => {
                 setThirdResult(thirdjsonsearch);
             })
             .catch((error) => console.error(error))
             .finally(() => {

             })
             
        // allResult = result,secondresult,thirdresult;
        // {
        //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        //     title: 'Plantes',
        //   },
        // setFinalResult("{id: 0, 'list':",result,"}");
        // setFinalResult(finalresult,",{id: 1, 'list':",secondresult);
        // setFinalResult(finalresult,",{id: 2, 'list':",thirdresult);
        // console.log("result ",result);
        // console.log("secondresult ",secondresult);
        // console.log("thirdresult ",thirdresult);
        // console.log(finalresult);
        
    }  

    const readToken = async () => {
        try {
            const userJeton = await AsyncStorage.getItem('id_token')      
            if (userJeton !== null) {
                // console.log('jeton ok')
                setToken({ 
                    value: userJeton,
                });
            }else{
                //console.log('jeton pas ok')
            }
        } catch (e) {
          //alert('Failed to fetch the data from storage')
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
                    <View style={styles.inputContainer}>
                        <Image style={[styles.icon, styles.inputIcon]}/>
                        <TextInput
                            style={styles.inputs}
                            onChangeText={this.searchPlantFunction}
                            value={this.search}
                            underlineColorAndroid="transparent"
                            placeholder="Rechercher"
                        />
                    </View>
                </View>
                <View style={isEnabledSearch==1? styles.bodyContentFiche : styles.displayNone}>

                    <View style={styles.menuBoxUnavailable} onPress={() => navigation.replace('ConseilsList', { item: "glossaire"})}   >
                        <Text style={styles.info}>Recettes</Text>
                        <Text style={styles.infoSub}>Prochainnement</Text>
                    </View>

                    <TouchableOpacity style={styles.menuBox} onPress={() => navigation.replace('ConseilsList', { item: "Fiches espèces", itemlink: "plants", tokenPass: token})}  >
                        <Text style={styles.info}>Fiches espèces</Text>
                        {/* <Text style={styles.infoSub}>Prochainnement</Text> */}
                    </TouchableOpacity>

                    <View style={styles.menuBoxUnavailable} onPress={() => navigation.replace('ConseilsList', { item: "tutosvideos"})} >
                        <Text style={styles.info}>Tutos vidéos</Text>
                        <Text style={styles.infoSub}>Prochainnement</Text>
                    </View>

                    <TouchableOpacity style={styles.menuBox} onPress={() => navigation.replace('ConseilsList', { item: "Fiches ravages", itemlink: "infosravages", tokenPass: token})}  >
                        <Text style={styles.info}>Fiches ravages</Text>
                        {/* <Text style={styles.infoSub}>Prochainnement</Text> */}
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuBox} onPress={() => navigation.replace('ConseilsList', { item: "Fiches maladies", itemlink: "infossicks", tokenPass: token})}  >
                        <Text style={styles.info}>Fiches maladies</Text>
                        {/* <Text style={styles.infoSub}>Prochainnement</Text> */}
                    </TouchableOpacity>

                    <View style={styles.menuBoxUnavailable} onPress={() => navigation.replace('ConseilsList', { item: "savoirfaire"})}    >
                        <Text style={styles.info}>Fiches savoir-faire</Text>
                        <Text style={styles.infoSub}>Prochainnement</Text>
                    </View>

                </View>
                <View style={isEnabledSearch==2? styles.bodyContent : styles.displayNone}>
                    {/* <FlatList
                        //  enableEmptySections={true}
                         style={styles.eventList}
                         data={result}
                         keyExtractor= {(item) => {
                             return item.id;
                         }}
                         renderItem={({item}) => {
                             return (
                         <View style={styles.menuBoxList} >
                             <TouchableOpacity 
                                 style={styles.containerLight}
                                 onPress={() => navigation.replace('ConseilsDetailFiche', { item: item.id, tokenPass: token})}
                                 >
                                 <View style={styles.eventContentFirst}>
                                     <Image style={styles.tinyLogoGeneral} source={{ uri: item.photourl,}}/>
                                     <Text style={styles.infoGeneral}>{item.name}</Text>
                                     <Text style={styles.infoSun}></Text>
                                 </View>
                             </TouchableOpacity>
                         </View>
                     )}}/> */}
                    <SectionList
                        sections={[
                            {title: 'Plantes', data: result},
                            {title: 'Maladies', data: secondresult},
                            {title: 'Ravages', data: thirdresult}
                        ]}
                        renderItem={({item,section}) => 
                            <View style={styles.menuBoxList} >
                                <TouchableOpacity 
                                    style={styles.containerLight}
                                    onPress={() => navigation.replace(
                                        section.title=="Plantes" ? "ConseilsDetail" : "ConseilsDetailFiche"
                                        , { item: item.id, tokenPass: token})}
                                    >
                                    <View style={styles.eventContentFirst}>
                                        <Image style={styles.tinyLogoGeneral} source={{ uri: item.photourl,}}/>
                                        <Text style={styles.infoGeneral}>{item.name}</Text>
                                        <Text style={styles.infoSun}></Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }
                        renderSectionHeader={({section}) => 
                            <Text style={styles.sectionHeader}>{section.title}</Text>
                        }
                        keyExtractor={(item, index) => index}
                    />
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    infoSun:{
        fontSize:14,
        fontWeight:'500',
        color: "#E1BF0E",
        // textAlign:'left',
        marginTop:20,
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
    sectionHeader:{
        paddingTop: 2,
        // paddingLeft: 10,
        // paddingRight: 10,
        paddingBottom: 2,
        fontSize:14,
        fontWeight:'500',
        color: "#151515",
        // textAlign:'left',
        // height:40,
        // marginTop:20,
        paddingLeft:20,
        borderRadius:10,
        // backgroundColor: COLORS.lightGray,
        backgroundColor: "#F2F2F2",
    },
    tinyLogoGeneral: {
        width: 20,
        height: 20,
        borderRadius:10,
        margin:20,
        // maxWidth: '60%',
        // height: '10%',
    },
    eventContentFirst: {
        // flex:1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        height:100,
    },
    containerLight:{
        height:60,
        overflow:"hidden",
    },
    menuBoxList:{
        backgroundColor: "#fff",
        borderRadius:10,
        // margin:10,
        marginTop:10,
        marginBottom:10,
    },
    displayNone:{
        height: 0,
        width: 0,
        opacity: 0,
    },
    container:{
        flexDirection:"column",
        padding:20,
    },
    inputs:{
        width:"100%",
    },
    headerContent:{
        marginTop: 50,
        paddingBottom:30,
    },
    name:{
        fontSize:22,
        color:"#222222",
        fontWeight:'900',
    },
    bodyContent:{
        // flexWrap: "wrap",
        fontWeight: "900",
        // width: 400 | "90%",
        // height: 400 | "100%",
        // flex: 1,
        // paddingTop: 22
        // height: 10000,
    },
    bodyContentFiche:{
        fontWeight: "900",
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    menuBox:{
        backgroundColor: "#ffffff",
        borderRadius:10,
        width:170,
        height:100,
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
        // height: 100, 
        // width: 50, 
        // borderWidth: 1, 
        // backgroundColor: 'orange', 
        // marginBottom: 5
    },
    menuBoxUnavailable:{
        backgroundColor: "#DADADA",
        borderRadius:10,
        width:170,
        height:100,
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
        // height: 100, 
        // width: 50, 
        // borderWidth: 1, 
        // backgroundColor: 'orange', 
        // marginBottom: 5
    },
    info:{
        fontSize:18,
        fontWeight:'300',
        color: "#222222",
        textAlign:'center',
        marginTop:30,

    },
    infoSub:{
        // fontSize:18,
        fontWeight:'400',
        color: COLORS.greenLight,
        textAlign:'center',
        // marginTop:30,

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
        marginTop:20,
    },
})

export default Conseils

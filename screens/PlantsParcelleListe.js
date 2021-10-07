import React, {useState, useEffect} from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';

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
    SectionList,
    AsyncStorage,
    Animated,
} from 'react-native';
import {COLORS} from '../constants';


const PlantsParcelleListe = ({route, navigation, props}) => {
    const [search, setSearch] = useState({value: '', error: ''});
    const [token, setToken] = useState({value: '', error: ''});
    const [result, setResult] = useState({value: '', error: ''});
    const [resultPlant, setResultPlant] = useState({value: '', error: ''});
    const [userId, setUserId] = useState({value: '', error: ''});
    const [plantsInfos, setPlantsInfos] = useState([]);
    const [item, setItemToDelete] = useState([]);

    useEffect(() => {
        readToken();
        // getParsedDate(currentDay)
        searchUserReminderFunction();
        return; /*(
            //readData()
        )*/
    }, []);

    searchUserReminderFunction = async () => {
        //let tokenLocal = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MGQ4MzhhM2RmYmE0MjA3ZDgwNzQ0YzAiLCJpYXQiOjE2MjQ3OTMxMzgsImV4cCI6MTYyNTM5NzkzOH0.aN0m390nMLqI3CIs3Av4BQ_1t5tSH8jyduwkW_dvNgE';
        //console.log(token.value)
        const userJeton = await AsyncStorage.getItem('id_token');
        console.log("userJeton",userJeton)
        let data = {
            method: 'GET',
            credentials: 'same-origin',
            mode: 'same-origin',
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
                //Authorization: 'Bearer ' + tokenLocal,
                'Authorization':'Bearer '+userJeton,
                // 'Authorization': 'Bearer '+route.params.token,
            },
        };
        //console.log("route.params.item",route.params.item);
        // fetch(`https://seedy.adnanenabil.com/plants/${itemId}`, data)
        // fetch(`http://localhost:4000/plantspositions/${gardenId}`, data)
        fetch(`http://localhost:4000/plantspositions/garden/${route.params.item}`, data)
        //fetch(`http://localhost:4000/plantspositions/garden/60dce067dfba4207d80744f0`, data)

            //Passertoken\

            .then((jsonsearch) => jsonsearch.json())
            .then((jsonsearch) => {
                // console.debug(jsonsearch);
                //console.log(jsonsearch);
                setResult(jsonsearch);

                for (var i = 0; i < jsonsearch.length; i++) {
                    var obj = jsonsearch[i];

                    for (var key in obj) {
                        var value = obj[key];
                        // console.log(key + " : " + value)
                        if (key === 'id_plant') {
                            // console.log([plantsInfos, {id_plant : value}, {id_plant : value}] )
                            //console.log(key)
                            //console.log(value)

                            fetch(`http://localhost:4000/plants/${value}`, data)
                                .then((responseSecond) => responseSecond.json())
                                .then((responseSecond) => {
                                    console.log(jsonsearch);

                                    setPlantsInfos((plantsInfos) => [
                                        ...plantsInfos,
                                        responseSecond
                                    ]);
                                })
                                .catch((error) => console.error(error))
                                .finally(() => {
                                    //this.setState({ isLoadingSearch: false });
                                });
                        }
                    }
                }

                // for (var i = 0; i < plantsInfos.length; i++){
                //     var obj = plantsInfos[i];

                //     for (var key in obj){
                //         var value = obj[key];
                //         // console.log(key + " : " + value)
                //         console.log(plantsInfos)
                //     }
                // }
                // fetch(`http://localhost:4000/plantspositions/garden/${route.params.item}`, data)
                // .then((responsesearch) => responsesearch.json())
                // .then((jsonsearch) => {
                //     console.log("yea")
                // })
                // .catch((error) => console.error(error))
                // .finally(() => {
                // //this.setState({ isLoadingSearch: false });
                // })
                // console.log(plantsInfos)
                //this.setState({ datasearch: jsonsearch.data.plant });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                //this.setState({ isLoadingSearch: false });
            });
        console.log("plantsInfos",plantsInfos)
    };

    eventClickListener = (viewId) => {
        Alert.alert('Info', 'Passez par une fiche plante pour ajouter un rappel !');
        console.log('Date:' + currentDay);
    };

    // for (var i = 0; i < result.length; i++){
    //     var obj = result[i];

    //     for (var key in obj){
    //         var value = obj[key];
    //         if (key === "id_plant"){
    //             plantsInfos.push({"plant_id" : value})
    //             // plantsInfos.push({"plant_id" : value})
    //         }
    //     }
    // }
    const readToken = async () => {
        try {
            const userJeton = await AsyncStorage.getItem('id_token');
            if (userJeton !== null) {
                console.log('jeton ok ! : ', userJeton);
                setToken({
                    value: userJeton,
                });
            } else {
                console.log('jeton pas ok');
            }
        } catch (e) {
            //alert('Failed to fetch the data from storage')
        }
        try {
            const userId = await AsyncStorage.getItem('userId');
            if (userId !== null) {
                console.log('userId ok ! : ', userId);
                setUserId({
                    value: userId,
                });
            } else {
                console.log('userId pas ok');
            }
        } catch (e) {
            //alert('Failed to fetch the data from storage')
        }
    };

    const leftSwipe = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [0,100],
            outputRange: [0,1],
            extrapolate: 'clamp',
        })
        return (
            // <TouchableOpacity onPress={this.handleDelete} activeOpacity={0,6}>
            <View style={styles.eventBoxTD} >
                <TouchableOpacity style={styles.eventContentTD} onPress={deleteItem(item)} activeOpacity={0,6}>
                {/* <TouchableOpacity onPress={deleteItem()} activeOpacity={0,6}> */}
                    <View style={styles.deleteBox}>
                        <Animated.Text>X</Animated.Text>
                    </View>
                </TouchableOpacity>
            </View>
        )

    }
    // handleDelete=(id)=> deleteItem(id)

    const deleteItem = async (index) => {
        console.log(result[index].id)
        let id = result[index].id
        // id = id[0]
        console.log(id)
        const token = await AsyncStorage.getItem('id_token')
        console.log(token);

        let dataDelete = {
            method: 'DELETE',
            credentials: 'same-origin',
            mode: 'same-origin',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token,
                // 'Authorization': 'Bearer '+tokenLocal,
            },
        }

        fetch(`http://localhost:4000/plantspositions/${id}`, dataDelete)
            .then( res => {
                console.log(res.status)
                if (res.status === 200) {
                    console.log('plantspositions deleted'); 
                    navigation.navigate('Jardin')                       
                }else{
                    console.log('not authorized');
                }
            })
    }
    // console.log("result[0]",result[0].id_plant[0])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.name}>Jardin Digital</Text>
                    {/* <TouchableOpacity onPress={() => this.eventClickListener('row')}>
                        <Text style={styles.add}>+</Text>
                    </TouchableOpacity> */}
                    {/* <TextInput
                            style={styles.textInputStyle}
                            onChangeText={this.searchFilterFunction}
                            value={this.state.search}
                            underlineColorAndroid="transparent"
                            placeholder="Rechercher ... "
                        /> */}
                </View>
            </View>
            <View style={styles.boby}>
                <SectionList
                    sections={[{title: '', data: plantsInfos}]}
                    renderItem={
                        ({item, index}) => (
                            // <View>
                            <View /*style={styles.menuBoxList}*/ >
                                {/* <Text style={styles.sectionHeader}>{section.title}</Text> */}
                                <TouchableOpacity
                                    style={styles.menuBoxList}
                                    onPress={() => navigation.replace("ConseilsDetail" , { item: item.id, tokenPass: token})}
                                >
                                    <Swipeable style={styles.containerLight} renderLeftActions={leftSwipe} onSwipeableLeftOpen={() =>setItemToDelete(index)}>
                                    <View style={styles.eventContentFirst}>
                                            <Image style={styles.tinyLogoGeneral} source={{ uri: item.photourl,}}/>
                                            <Text style={styles.infoGeneral}>{item.name}</Text>
                                            {/* <Text style={styles.infoGeneral}>{item.id}</Text> */}
                                        </View>
                                    </Swipeable>
                                </TouchableOpacity>
                            </View>
                        )
                        // </View>
                    }
                    renderSectionHeader={({section}) => (
                        <Text style={styles.sectionHeader}>{section.title}</Text>
                    )}
                    keyExtractor={(item, index) => index}
                />
                <View style={styles.add}>
                    <Button
                        color="#ffffff"
                        title="Ajouter une plante"
                        onPress={() => navigation.replace('AddPlantParcelle')}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    boby:{
        paddingLeft:20,
    },
    tinyLogo: {
        width: '15%',
        height: '100%',
        borderRadius: 10,
    },
    menuBoxList:{
        backgroundColor: "#fff",
        borderRadius:10,
        // margin:10,
        marginTop:10,
        marginRight:30,
        marginBottom:10,
    },


    containerLight:{
        height:60,
        overflow:"hidden",
    },


    infoGeneral:{
        fontSize:14,
        fontWeight:'500',
        color: "#151515",
        // textAlign:'left',
        marginTop:20,
        paddingLeft:20,
    },


    tinyLogoGeneral: {
        width: 50,
        height: 50,
        borderRadius:10,
        margin:5,
        // maxWidth: '60%',
        // height: '10%',
    },
    eventList: {
        marginTop: 20,
    },
    eventBox: {
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
    },
    eventDate: {
        flexDirection: 'column',
    },
    eventDay: {
        marginLeft: 20,
        fontSize: 25,
        color: COLORS.gray,
        fontWeight: '600',
    },
    eventContent: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 10,
    },
    eventContentFirst: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        height: 60,
    },
    eventContentSec: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        height: 20,
        marginTop: 10,
    },
    description: {
        fontSize: 15,
        color: '#646464',
    },
    eventTime: {
        fontSize: 18,
        color: '#151515',
    },
    plante: {
        left: 14,
        top: 14,
        fontSize: 16,
        color: '#151515',
        width: '70%',
    },

    headerContent: {
        marginTop: 50,
        padding: 30,
        flexDirection: 'row',
    },
    name: {
        fontSize: 22,
        color: '#222222',
        fontWeight: '900',
    },
    add: {
        paddingLeft: '60%',
        fontSize: 22,
        color: '#222222',
        fontWeight: '900',
    },
    add:{
        width:"85%",
        marginTop:20,
        alignItems: 'center',
        backgroundColor:COLORS.greenDark,
        borderRadius: 10,
        paddingVertical: 10,
        fontWeight: "bold",
        color:COLORS.white,
        marginLeft:20
    }
});

export default PlantsParcelleListe;

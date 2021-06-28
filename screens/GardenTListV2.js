import React, { useState,useEffect,useRef } from 'react';
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
    PanResponder, 
    Animated,
} from 'react-native';
import {COLORS} from "../constants";
import {Boarding1} from "../constants/images";
import {SunConseil} from "../constants/images";
import {WaterConseil} from "../constants/images";
import {SpaceConseil} from "../constants/images";
import {PHConseil} from "../constants/images";
import {ClimatConseil} from "../constants/images";
import {SizingConseil} from "../constants/images";
import {Floraison} from "../constants/images";
import {Germination} from "../constants/images";
import {Plus} from "../constants/images";
import {Fruit} from "../constants/images";
import {SemisExt, SemisInt, Plantation} from "../constants/images";


const GardenTListV2 = ({route, navigation,  props }) => {
    const [search, setSearch] = useState({ value: '', error: '' })
    const [token, setToken] = useState({ value: '', error: '' })
    const [result, setResult] = useState({ value: '', error: '' })
    const [resultPlant, setResultPlant] = useState({ value: '', error: '' })
    const [userId, setUserId] = useState({ value: '', error: '' })
    const [plantsInfos, setPlantsInfos] = useState([])
    const currentDay = new Date();
    // const weekdays= [
    //     {id:0, day:'dimanche'},
    //     {id:1, day:'lundi'},
    //     {id:2, day:'mardi'},
    //     {id:3, day:'mercredi'},
    //     {id:4, day:'jeudi'},
    //     {id:5, day:'vendredi'},
    //     {id:6, day:'samedi'},
    // ];
    // const currentDayName = weekdays[currentDay.getDay()];
    // console.log(currentDayName);
    const image = { uri: "https://cdn.wpmfc.enticdn.fr/wp-content/uploads/2021/03/20210316-maisons-france-confort-maison-traditionnelle-auzin-6213.jpg" };
        
    // const gardenId = "60d8661043c93c169deb6248";
    // console.log(route.params.item);
    useEffect(() => {
        readToken()
        // getParsedDate(currentDay)
        searchUserReminderFunction()
        panacotta()
        return /*(
            //readData()
        )*/
    }, [])

    searchUserReminderFunction = async () => {
        // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MGJkY2JhNDI0NWQxZjBiMDE0NDJlMjIiLCJpYXQiOjE2MjMzMTQyNDUsImV4cCI6MTYyMzkxOTA0NX0.F21DuctCC5oFKcl6_3iRQ05iaKH_t6KlsdE81Jdzbm8"; 
        let tokenLocal = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MGQ4MzhhM2RmYmE0MjA3ZDgwNzQ0YzAiLCJpYXQiOjE2MjQ4ODM1MDUsImV4cCI6MTYyNTQ4ODMwNX0.yBtRJRua9JL_fnAuwX4OGG9nO08mbnvk0Fpm1UaR3fQ";
        let data = {
			method: 'GET',
			credentials: 'same-origin',
			mode: 'same-origin',
			headers: {
				'Accept': '*/*',
				'Content-Type': 'application/json',
                'Authorization': 'Bearer '+tokenLocal,
                // 'Authorization': 'Bearer '+token,
                // 'Authorization': 'Bearer '+route.params.token,
            },
		}

        fetch(`http://localhost:4000/plantspositions/garden/${route.params.item}`, data)

        //Passertoken\
        
            .then((jsonsearch) => jsonsearch.json())
            .then((jsonsearch) => {
            // console.debug(jsonsearch);
            // console.log(jsonsearch);
                setResult(jsonsearch);

                for (var i = 0; i < jsonsearch.length; i++){
                    var obj = jsonsearch[i];
                    
                    //console.log(obj)

                    for (var key in obj){
                        var value = obj[key];
                        if (key === "id_plant"){
                            console.log(key + " : " + value)

                    //         // console.log([plantsInfos, {id_plant : value}, {id_plant : value}] )
                    //         // console.log(key)
                    //         // console.log(value)

                            fetch(`http://localhost:4000/plants/${value}`, data)
                                .then((responseSecond) => responseSecond.json())
                                .then((responseSecond) => {
                                    // console.log(value , responseSecond)

                                    // console.log("plantsInfos",plantsInfos)
                                    setPlantsInfos((plantsInfos) => [
                                            ...plantsInfos,
                                            responseSecond,
                                          ]);
                                })
                                .catch((error) => console.error(error))
                                .finally(() => {
                                //this.setState({ isLoadingSearch: false });
                                })

                        }    
                    }
                }
                
                
            })
            .catch((error) => console.error(error))
            .finally(() => {
            //this.setState({ isLoadingSearch: false });
            })
       
    }

    eventClickListener = (viewId) => {
        Alert.alert("Info", "Passez par une fiche plante pour ajouter un rappel !");
        console.log('Date:'+currentDay ,);
    }

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
            const userJeton = await AsyncStorage.getItem('id_token')      
            if (userJeton !== null) {
                console.log('jeton ok ! : ',userJeton)
                setToken({ 
                    value: userJeton,
                });
            }else{
                console.log('jeton pas ok')
            }
        } catch (e) {
                //alert('Failed to fetch the data from storage')
        } 
        try {
            const userId = await AsyncStorage.getItem('userId')      
            if (userId !== null) {
                console.log('userId ok ! : ',userId)
                setUserId({ 
                    value: userId,
                });
            }else{
                console.log('userId pas ok')
            }
        } catch (e) {
          //alert('Failed to fetch the data from storage')
        }  
    }

    const pan = useRef(new Animated.ValueXY()).current;
    const pan0 = useRef(new Animated.ValueXY()).current;
    const pan1 = useRef(new Animated.ValueXY()).current;
    const pan2 = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                console.log(pan.x._value)
                console.log(pan.y._value)
            pan.setOffset({
                x: pan.x._value,
                y: pan.y._value
            });
            },
            onPanResponderMove: Animated.event(
            [
                null,
                { dx: pan.x, dy: pan.y }
            ]
            ),
            onPanResponderRelease: () => {
                pan.flattenOffset();
            }
        })
        ).current;
    const panResponder0 = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                console.log(pan0.x._value)
                console.log(pan0.y._value)
                pan0.setOffset({
                x: pan0.x._value,
                y: pan0.y._value
            });
            },
            onPanResponderMove: Animated.event(
            [
                null,
                { dx: pan0.x, dy: pan0.y }
            ]
            ),
            onPanResponderRelease: () => {
                pan0.flattenOffset();
            }
        })
        ).current;
    const panResponder1 = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                console.log(pan1.x._value)
                console.log(pan1.y._value)
            pan1.setOffset({
                x: pan1.x._value,
                y: pan1.y._value
            });
            },
            onPanResponderMove: Animated.event(
            [
                null,
                { dx: pan1.x, dy: pan1.y }
            ]
            ),
            onPanResponderRelease: () => {
                pan1.flattenOffset();
            }
        })
        ).current;
    const panResponder2 = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                console.log(pan2.x._value)
                console.log(pan2.y._value)
            pan2.setOffset({
                x: pan2.x._value,
                y: pan2.y._value
            });
            },
            onPanResponderMove: Animated.event(
            [
                null,
                { dx: pan2.x, dy: pan2.y }
            ]
            ),
            onPanResponderRelease: () => {
                pan2.flattenOffset();
            }
        })
        ).current;
     
    const panacotta = async ()  => {
        for (res in plantsInfos ) {
            idValue = plantsInfos[res]['id']
            // console.log(res)//0,1,2
            // console.log(idValue)//id
            // title = "panRespond"+res
            console.log("title")
            
            // pan[res] = useRef(new Animated.ValueXY()).current;
            // panResponder[res] = useRef(
            //     PanResponder.create({
            //         onMoveShouldSetPanResponder: () => true,
            //         onPanResponderGrant: () => {
            //             console.log(pan[res].x._value)
            //             console.log(pan[res].y._value)
            //         pan[res].setOffset({
            //             x: pan[res].x._value,
            //             y: pan[res].y._value
            //         });
            //         },
            //         onPanResponderMove: Animated.event(
            //         [
            //             null,
            //             { dx: pan[res].x, dy: pan[res].y }
            //         ]
            //         ),
            //         onPanResponderRelease: () => {
            //             pan[res].flattenOffset();
            //         }
            //     })
            //     ).current;
        }
    }
 
    // console.log(plantsInfos)
    return (
        <View style={styles.container}>

                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Text style={styles.nameHeader}>
                           Jardin Virtuel
                        </Text>
                        <TouchableOpacity onPress={() => navigation.replace("GardenTList", { item: route.params.item, tokenPass: this.tokenLocal })}>
                            <Text style={styles.add}>
                            V2
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container}>
                    <ImageBackground source={image} style={styles.image}>
                        {/* <Text style={styles.titleText}>Drag this box!</Text> */}
                        {plantsInfos.map(r => 
                            <View>
                                <Animated.View
                                    style={{
                                    transform: [{ translateX: pan.x }, { translateY: pan.y }]
                                    }}
                                    {...panResponder.panHandlers}
                                >
                                    <View style={styles.box} >
                                        {/* <Text>{r.id}</Text> */}
                                        <Text>{r.name}</Text>
                                        <Image style={styles.tinyLogo} source={{ uri: r.photourl}}/>
                                    </View>
                                </Animated.View>
                            </View>
                        )}
                            {/* Data Test */}
                            <View>
                                <Animated.View
                                    style={{
                                    transform: [{ translateX: pan0.x }, { translateY: pan0.y }]
                                    }}
                                    {...panResponder0.panHandlers}
                                >
                                    <View style={styles.box} >
                                        <Image style={styles.tinyLogo} source={{ uri: "https://images-na.ssl-images-amazon.com/images/I/71kYjiQBArL._AC_SX425_.jpg"}}/>
                                    </View>
                                </Animated.View>
                                <Animated.View
                                    style={{
                                    transform: [{ translateX: pan1.x }, { translateY: pan1.y }]
                                    }}
                                    {...panResponder1.panHandlers}
                                >
                                    <View style={styles.box} >
                                        <Image style={styles.tinyLogo} source={{ uri: "https://images-na.ssl-images-amazon.com/images/I/71kYjiQBArL._AC_SX425_.jpg"}}/>
                                    </View>
                                </Animated.View>
                                <Animated.View
                                    style={{
                                    transform: [{ translateX: pan2.x }, { translateY: pan2.y }]
                                    }}
                                    {...panResponder2.panHandlers}
                                >
                                    <View style={styles.box} >
                                        <Image style={styles.tinyLogo} source={{ uri: "https://images-na.ssl-images-amazon.com/images/I/71kYjiQBArL._AC_SX425_.jpg"}}/>
                                    </View>
                                </Animated.View>
                            </View>
                    </ImageBackground>
                </View>   
            </View>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
      },
    container: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center"
        marginLeft:20,
        marginRight:20,

      },
      titleText: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: "bold"
      },
      box: {
        height: 50,
        width: 50,
        // backgroundColor: "blue",
        borderRadius: 5
      },
    tinyLogo: {
        width: "100%",
        height: "100%",
        borderRadius:10
    },
    
    eventList:{
        marginTop:20,
    },
    eventBox: {
        padding:10,
        marginTop:5,
        marginBottom:5,
        flexDirection: 'row',
    },
    eventDate:{
        flexDirection: 'column',
    },
    eventDay:{
        marginLeft:20,
        fontSize:25,
        color:COLORS.gray,
        fontWeight: "600",
    },
    eventContent: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft:10,
        marginRight:10,
        backgroundColor: '#FFFFFF',
        padding:10,
        borderRadius:10,
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
        height:20,
        marginTop:10,
    },
    description: {
        fontSize:15,
        color: "#646464",
    },
    eventTime: {
        fontSize:18,
        color:"#151515",
    },
    plante:{
        left:14,
        top:14,
        fontSize:16,
        color:"#151515",
        width:"70%",
    },

    headerContent:{
        marginTop: 50,
        padding:30,
        flexDirection: 'row',
    },
    nameHeader:{
        flex:6,
        fontSize:22,
        color:"#222222",
        fontWeight:'900',
    },
    addheader:{
        flex: 1,
    },
    name:{
        fontSize:22,
        color:"#222222",
        fontWeight:'900',
    },
    add:{
        paddingLeft:"60%",
        fontSize:22,
        color:"#222222",
        fontWeight:'900',
    },
});

export default GardenTListV2

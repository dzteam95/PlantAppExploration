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
import Draggable from 'react-native-draggable';
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
    const [result, setResult] = useState([])
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
    const image = { uri: "https://conseils-thermiques.org/contenu/images/plan-MOB-paille-1.png" };
        
    // const gardenId = "60d8661043c93c169deb6248";
    // console.log(route.params.item);
    useEffect(() => {
        readToken()
        // getParsedDate(currentDay)
        searchUserReminderFunction()
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
     
    // const panacotta = async ()  => {
    //     for (res in plantsInfos ) {
    //         idValue = plantsInfos[res]['id']
    //         // console.log(res)//0,1,2
    //         // console.log(idValue)//id
    //         // title = "panRespond"+res
    //         console.log("title")
            
    //         // pan[res] = useRef(new Animated.ValueXY()).current;
    //         // panResponder[res] = useRef(
    //         //     PanResponder.create({
    //         //         onMoveShouldSetPanResponder: () => true,
    //         //         onPanResponderGrant: () => {
    //         //             console.log(pan[res].x._value)
    //         //             console.log(pan[res].y._value)
    //         //         pan[res].setOffset({
    //         //             x: pan[res].x._value,
    //         //             y: pan[res].y._value
    //         //         });
    //         //         },
    //         //         onPanResponderMove: Animated.event(
    //         //         [
    //         //             null,
    //         //             { dx: pan[res].x, dy: pan[res].y }
    //         //         ]
    //         //         ),
    //         //         onPanResponderRelease: () => {
    //         //             pan[res].flattenOffset();
    //         //         }
    //         //     })
    //         //     ).current;
    //     }
    // }
 
    // console.log(result)
    console.log(plantsInfos)
    var g = result
    var c = plantsInfos
    // var g = [
    //     { id: 36, name: 'AAA', goal: 'yes' },
    //     { id: 40, name: 'BBB', goal: 'yes' },
    //     { id: 57, name: 'CCC', goal: 'yes' },
    //     { id: 4, name: 'DDD', goal: 'yes' },
    //     { id: 39, name: 'EEE', goal: 'yes' },
    //     { id: 37, name: 'FFF', goal: 'yes' },
    //     { id: 59, name: 'GGG', goal: 'yes' },
    //     { id: 50, name: 'III', goal: 'yes' },
    //     { id: 43, name: 'HHH', goal: 'yes' },
    //     { id: 35, name: 'JJJ', goal: 'yes' }
    // ],
    // c = [
    //     { id: 36, name: 'AAA', circle: 'yes' },
    //     { id: 40, name: 'BBB', circle: 'yes' },
    //     { id: 57, name: 'CCC', circle: 'yes' },
    //     { id: 42, name: 'ZZZ', circle: 'yes' },
    //     { id: 4, name: 'DDD', circle: 'yes' },
    //     { id: 39, name: 'EEE', circle: 'yes' },
    //     { id: 37, name: 'FFF', circle: 'yes' },
    //     { id: 59, name: 'GGG', circle: 'yes' },
    //     { id: 43, name: 'HHH', circle: 'yes' },
    //     { id: 35, name: 'JJJ', circle: 'yes' },
    //     { id: 100, name: 'JJJ', circle: 'yes' }
    // ],
    arrayList = [], obj_c_processed = [];

    for (var i in g) {
        // var obj = {id: g[i].id, name: g[i].name, goal: g[i].goal};
        var obj = {id: g[i].id, id_garden: g[i].id_garden, id_plant: g[i].id_plant, mode: g[i].mode, position_x: g[i].position_x, position_y: g[i].position_y};

        for (var j in c) {
            if (g[i].id_plant == c[j].id) {
                obj.photourl = c[j].photourl;
                obj.name = c[j].name;
                obj_c_processed[c[j].id] = true;
            }
        }

        // obj.circle = obj.circle || 'no';
        arrayList.push(obj);
    }

    for (var j in c){
        if (typeof obj_c_processed[c[j].id] == 'undefined') {
            arrayList.push({id: c[j].id, name: c[j].name, goal: 'no', circle: c[j].circle});
        }
    }
    console.log(arrayList)

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
                        {/* {plantsInfos.map(r => 
                            <View>
                                <Animated.View
                                    style={{
                                    transform: [{ translateX: pan.x }, { translateY: pan.y }]
                                    }}
                                    {...panResponder.panHandlers}
                                >
                                    <View style={styles.box} >
                                        <Text>{r.id}</Text>
                                        <Text>{r.name}</Text>
                                        <Image style={styles.tinyLogo} source={{ uri: r.photourl}}/>
                                    </View>
                                </Animated.View>
                            </View>
                        )} */}
                            {/* Data Test */}
                            {/* <View>
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
                            </View> */}
                            <View >
                                {/* {plantsInfos.map(p => 
                                    <Draggable x={50} y={50} onShortPressRelease={()=>alert(p.name)}>
                                        <View style={styles.box} >
                                            <Text>{p.id}</Text>
                                            <Image style={styles.tinyLogo} source={{ uri: p.photourl}}/>
                                        </View>
                                    </Draggable>
                                )} */}
                                 {arrayList.map(p => 
                                    <Draggable x={p.position_x} y={p.position_y} onShortPressRelease={()=>alert(p.name)}>
                                    {/* <Draggable x={267} y={-300} onShortPressRelease={()=>alert(p.name)}> */}
                                        <View style={styles.box} >
                                            {/* <Text>{p.id}</Text> */}
                                            <Image style={styles.tinyLogo} source={{ uri: p.photourl}}/>
                                        </View>
                                    </Draggable>
                                )}
                                {/* {result.map(r => 
                                    <Draggable x={r.position_x} y={r.position_y} renderColor='black' onShortPressRelease={()=>alert("r.name")}>
                                        
                                        <View style={styles.box} >
                                            <Text>{r.id_plant}</Text>

                                            <Image style={styles.tinyLogo} source={{ uri: "r.photourl"}}/>
                                        </View>
                                    </Draggable>
                                )} */}
                                {/* <Draggable x={75} y={100} renderSize={56} renderColor='black' renderText='A' isCircle shouldReverse onShortPressRelease={()=>alert('touched!!')}/> 
                                <Draggable x={200} y={300} renderColor='red' renderText='B'/>
                                <Draggable/>
                                <Draggable x={50} y={50}>
                                        <View style={styles.box} >
                                            <Image style={styles.tinyLogo} source={{ uri: "https://images-na.ssl-images-amazon.com/images/I/71kYjiQBArL._AC_SX425_.jpg"}}/>
                                        </View>
                                </Draggable> */}
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

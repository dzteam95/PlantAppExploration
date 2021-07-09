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


const PlantsParcelleV2 = ({route, navigation,  props }) => {
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
        // let tokenLocal = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MGRjYjgyNGRmYmE0MjA3ZDgwNzQ0ZTgiLCJpYXQiOjE2MjUxMjY4NzUsImV4cCI6MTYyNTczMTY3NX0.5WvwP6VnYDcZ0QKHwKb0rjTyIAfuzslwCeFaFeOssCk";
        const token = await AsyncStorage.getItem('id_token')
        console.log(token) 
        console.log(route.params.item) 
        let data = {
			method: 'GET',
			credentials: 'same-origin',
			mode: 'same-origin',
			headers: {
				'Accept': '*/*',
				'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token,
                // 'Authorization': 'Bearer '+token,
                // 'Authorization': 'Bearer '+route.params.token,
            },
		}

        fetch(`https://seedyapp.tk/plantspositions/garden/${route.params.item}`, data)

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

                            fetch(`https://seedyapp.tk/plants/${value}`, data)
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


    udpatePosition = async (x,y,ppId) =>{
        console.log(x,y);
        const token = await AsyncStorage.getItem('id_token')		
        let data = {
			method: 'PUT',
			credentials: 'same-origin',
			mode: 'same-origin',
            body: JSON.stringify({
				position_x: x,
				position_y: y,

			}),
			headers: {
				'Accept': '*/*',
				'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token,
            },
		}
		fetch(`https://seedyapp.tk/plantspositions/${ppId}`,data)
		.then((response) => {
			//Statut getted
			console.log(response.status);
			if (response.status === 200) {
				console.log('updated');
			  
			}else{
				console.log('not updated or contain error');
				//do nothing
			}
		  })
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
     
    
 
    // console.log(result)
    // console.log(plantsInfos)
    var g = result
    var c = plantsInfos

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
    // console.log(arrayList)

    return (
        <View style={styles.container}>

                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Text style={styles.nameHeader}>
                           Jardin Virtuel
                        </Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <ImageBackground source={image} style={styles.image}>
                            {/* <View > */}
                                 {arrayList.map(p => 
                                    <Draggable reverse={false} x={p.position_x-40} y={p.position_y-132} minX={0} minY={0} maxX={299} maxY={675} onShortPressRelease={()=>alert(p.name)} 
                                        onDragRelease={
                                            (e) => {
                                                // console.log("p.id = " + p.nativeEvent.pageX + " , "+p.position_x),

                                                udpatePosition((e.nativeEvent.pageX-e.nativeEvent.locationX),(e.nativeEvent.pageY-e.nativeEvent.locationY),p.id);
                                                // console.log("pageX, pageY = " + (e.nativeEvent.pageX-e.nativeEvent.locationX)+ ", " + (e.nativeEvent.pageY-e.nativeEvent.locationX));
                                                // console.log("pageX, pageY = " + (e.pageX-e.locationX)+ ", " + (e.nativeEvent.pageY-e.nativeEvent.locationX));
                                                // console.log("locX, locY = " + e.nativeEvent.locationX + ", " + e.nativeEvent.locationY);
                                                // console.log("p.id = " + e.nativeEvent.x + " , "+e.y);
                                                // console.log("locX, locY = " + (e.nativeEvent.pageX-e.nativeEvent.locationX) + ", " + (e.nativeEvent.pageY-e.nativeEvent.locationY))
                                            }
                                        }>
                                    {/* <Draggable x={267} y={-300} onShortPressRelease={()=>alert(p.name)}> */}
                                        <View style={styles.box} >
                                            {/* <Text>{p.id}</Text> */}
                                            <Image style={styles.tinyLogo} source={{ uri: p.photourl}}/>
                                        </View>
                                    </Draggable>
                                )}
                               
                            {/* </View> */}
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
        borderRadius: 5,
        shadowOpacity: .2,
        shadowOffset: {
            height:2,
            width:-2
        },
        elevation:4,
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

export default PlantsParcelleV2
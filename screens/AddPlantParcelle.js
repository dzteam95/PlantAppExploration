import React, {useState,Component,useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Alert,
    FlatList,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';
import {COLORS, SIZES} from '../constants';

import {Picker} from '@react-native-picker/picker';


const AddPlantParcelle = ({ navigation }) => {

    const [id_plant, setId_plant] = useState()
    const [id_garden, setId_garden] = useState()
    const [position_x, setPosition_x] = useState({ value: 123, error: '' })
    const [position_y, setPosition_y] = useState({ value: 123, error: '' })
    const [mode, setMode] = useState({ value: 'ON', error: '' })
    const [user, setUser] = useState('')
    const [plante, setPlante] = useState('')
    const [search, setSearch] = useState({ value: '', error: '' })

    // const [token, setToken] = useState({value: '', error: ''});
    const [result, setResult] = useState([{"id":"1","name":"2"},{"id":"3","name":"4"}]);
    const [resultGarden, setResultGarden] = useState([{"id":"1","description":["2"]},{"id":"3","description":["4"]}]);
    const [userId, setUserId] = useState({value: '', error: ''});
    const [selectedLanguage, setSelectedLanguage] = useState();
    // const [resultPlante, setResultPlante] = useState();

    const add = async() => {
        try{
            const token = await AsyncStorage.getItem('id_token');
            console.log("token",token)
            console.log("id_plant", id_plant,
                "id_garden", id_garden,
                "position_x", position_x.value,
                "position_y", position_y.value,
                "mode", mode.value)
            let data = {
                method: 'POST',
                credentials: 'same-origin',
                mode: 'same-origin',
                body: JSON.stringify({
                    id_plant: id_plant,
                    id_garden: id_garden,
                    position_x: position_x.value,
                    position_y: position_y.value,
                    mode: mode.value,
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token,
                },
            }

            fetch('https://seedyapp.tk/plantspositions/register',data)
                .then((response) => {
                    console.log(response.status);
                    if (response.status === 200) {
                        console.log('registred');

                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Parcelles' }],
                        })

                    }else{
                        console.log('not registrer or contain error');
                        //do nothing
                    }
                })

        } catch (e) {
        }
    }

    useEffect(() => {
        readToken();
        searchUserReminderFunction();
        return;
    }, []);

    searchUserReminderFunction = async () => {
        try{
            const token = await AsyncStorage.getItem('id_token');
            const userId = await AsyncStorage.getItem('userId');
            // console.log(token)
            // console.log(userId)

            let data = {
                method: 'GET',
                credentials: 'same-origin',
                mode: 'same-origin',
                headers: {
                    Accept: '*/*',
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Bearer '+token,
                    Authorization: 'Bearer ' + token,
                },
            };

            fetch(`https://seedyapp.tk/plants/`, data)


                .then((responsesearch) => responsesearch.json())
                .then((jsonsearch) => {
                    // console.log(jsonsearch)
                    // console.debug(jsonsearch);
                    // console.log(jsonsearch);

                    setResult(jsonsearch);

                })
                .catch((error) => console.error(error))
                .finally(() => {
                });

            fetch(`https://seedyapp.tk/gardens/user/${userId}`, data)


                .then((responsesearch) => responsesearch.json())
                .then((jsonsearch) => {
                    // console.log(jsonsearch)
                    // console.debug(jsonsearch);
                    // console.log(jsonsearch);

                    setResultGarden(jsonsearch);

                })
                .catch((error) => console.error(error))
                .finally(() => {
                });

        } catch (e) {
        }
    };

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
        }
    };

    searchPlantFunction = async (search) => {
        //Met a jour le event text
        setSearch({ search });
        const newHandleSearch = search;
        const token = await AsyncStorage.getItem('id_token');
        let data = {
            method: 'GET',
            credentials: 'same-origin',
            mode: 'same-origin',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token,
                // 'Authorization': 'Bearer '+token,
            },
        }


        // fetch(`http://localhost:4000/plants/name/${search}`, data)
        // console.log(search)

        if (search ){
            fetch(`https://seedyapp.tk/plants/name/${search}`, data)
                .then((responsesearch) => responsesearch.json())
                .then((jsonsearch) => {
                    setResult(jsonsearch);
                })
                .catch((error) => console.error(error))
                .finally(() => {

                })
        }else{
            // console.log("search")
            fetch(`https://seedyapp.tk/plants/`, data)
                .then((responsesearch) => responsesearch.json())
                .then((jsonsearch) => {
                    setResult(jsonsearch);
                })
                .catch((error) => console.error(error))
                .finally(() => {

                })
        }
    }
    // console.log(result)
    // console.log(resultGarden)
    // let serviceItems = [{"id":"1","name":"2"},{"id":"3","name":"4"}].map( i => {
    let serviceItemsPlant = result.map( i => {
        return <Picker.Item key={i.id} value={i.id} label={i.name} />
    });

    let serviceItemsGarden = resultGarden.map( i => {
        return <Picker.Item key={i.id} value={i.id} label={i.description[0]} />
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.name}>
                        Ajouter une plante à une parcelle
                    </Text>
                </View>
            </View>
            <View style={styles.body}>
                <Text style={styles.txt}>Choisissez votre parcelle : </Text>
                <Picker
                    selectedValue = {id_garden}
                    // onValueChange = {updateUser}
                    onValueChange={(itemValue, itemIndex) =>
                        setId_garden(itemValue)
                    }>
                    <Picker.Item label="Choissiez" value="" />
                    {serviceItemsGarden}
                    {/* <Picker.Item label="Ma terasse" value="60dc7431dfba4207d80744e0" /> */}
                </Picker>
                <Text style={styles.txt}>Choisissez votre plante : </Text>
                <TextInput
                    style={styles.inputs}
                    onChangeText={this.searchPlantFunction}
                    value={this.search}
                    underlineColorAndroid="transparent"
                    placeholder="Rechercher"
                />
                <Picker
                    selectedValue = {id_plant}
                    // onValueChange = {updateUser}
                    onValueChange={(itemValue, itemIndex) =>
                        setId_plant(itemValue)
                    }>
                    <Picker.Item label="Choissiez" value="" />
                    {serviceItemsPlant}

                </Picker>

            </View>
            <Text>{id_garden}</Text>
            <Text>{id_plant}</Text>
            <View style={styles.ajouter}>
                <Button color="#ffffff" title={"ajouter"} mode="contained" onPress={add}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    title:{fontSize:SIZES.h1,margin:30},
    containerGlobal:{flex: 1,flexDirection:"column",marginTop:30},
    input:{height:50,backgroundColor:COLORS.greenLight,width:'80%',borderRadius: 10,margin:30},
    ajouter:{width:'80%',alignItems: 'center', backgroundColor:COLORS.greenDark,borderRadius: 10, paddingVertical: 10,fontWeight: "bold",color:COLORS.white,marginTop:30,marginLeft:35},
    Containercheckbox:{width:'100%',height:'auto',textAlign:'center', alignItems: 'center',margin:10},
    checkbox: {paddingVertical:10,paddingHorizontal: 10, alignItems: 'center',width:'auto',height:'auto',marginLeft:25,marginTop:5},
    label: {textAlign:'center'},
    row:{marginTop:30},
    txt:{textAlign: 'left',marginLeft:0,},

    container:{
        flexDirection:"column",
        padding:20,
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
})
export default AddPlantParcelle

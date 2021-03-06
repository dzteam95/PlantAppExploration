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


const Parcelles = ({route, navigation, props}) => {
    const [token, setToken] = useState({value: '', error: ''});
    const [userId, setUserId] = useState({value: '', error: ''});
    const [result, setResult] = useState([]);
    const [item, setItemToDelete] = useState([]);

    const displayParcelles = async () => {

        const token = await AsyncStorage.getItem('id_token')

        const userId = await AsyncStorage.getItem('userId')

        let data = {
            method: 'GET',
            credentials: 'same-origin',
            mode: 'same-origin',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
        }
        fetch(`https://seedyapp.tk/gardens/user/${userId}`, data)
            .then((response) => response.json())
            .then((response) => {
                setResult(response)
                //console.log("results:",response)
                return (response);
            })
        //console.log("testToken :", token)
        //console.log("test :", userId)
         //console.log("results:",result)



    }
    
    useEffect(async() => {
        await displayParcelles()
          //console.log("Testetu:",result)
        return
    }, [])

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

    const deleteItem = async (id) => {
        // console.log(id)
        const token = await AsyncStorage.getItem('id_token')
        // console.log(token);

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

        fetch(`https://seedyapp.tk/gardens/${id}`, dataDelete)
            .then( res => {
                console.log(res.status)
                if (res.status === 200) {
                    console.log('garden deleted'); 
                    navigation.navigate('Jardin')                       
                }else{
                    console.log('not authorized');
                }
            })
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.name}>Parcelles</Text>
                </View>
            </View>
            <View style={styles.boby}>
                <FlatList
                    columnWrapperStyle={styles.tagView}
                    numColumns={2}
                    data={result}
                    // sections={[{title: '', data: result}]}
                    renderItem={
                        ({item}) => (
                            // <View>
                            <View style={styles.eventBox} >
                                <TouchableOpacity
                                    style={styles.eventContent}
                                    onPress={() =>
                                        navigation.replace('PlantsParcelleListe', {
                                            item: item.id,
                                            tokenPass: token,
                                        })
                                    }>
                                    <Swipeable style={styles.eventContentSec} renderLeftActions={leftSwipe} onSwipeableLeftOpen={() =>setItemToDelete(item.id)}>
                                        <Text style={styles.eventTime}>{item.description}</Text>
                                        {/* <Text style={styles.eventTime}>{item.id}</Text> */}
                                    </Swipeable>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                    renderSectionHeader={({section}) => (
                        <Text style={styles.sectionHeader}>{section.title}</Text>
                    )}
                    keyExtractor={(item, index) => index}
                />
                <View style={styles.add}>
                    <Button
                        color="#ffffff"
                        title="Ajouter une parcelle"
                        onPress={() => navigation.replace('AddParcelle')}
                    />
                </View>
            </View>
        </ScrollView>


    );
};

const styles = StyleSheet.create({
    boby:{
        paddingLeft:20,
    },
    tagView: {
        flexWrap: "wrap",
        // backgroundColor: "#ffffff",
        // borderRadius:10,
        // width:"47%",
        // height:100,
        // marginRight:10,
        // marginTop:10,
        // marginBottom:10,
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
            height:2,
            width:-2
        },
        elevation:4,
      },
    tinyLogo: {
        width: '15%',
        height: '100%',
        borderRadius: 10,
    },

    eventList: {
        marginTop: 20,
    },
    eventBox: {
        height:100,
        justifyContent:'center',
        width:"49%",
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
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
        // backgroundColor: '#AAA000',
        padding: 10,
        borderRadius: 10,
        width:"100%",
    },
    eventContentFirst: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        height: 50,
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

export default Parcelles;

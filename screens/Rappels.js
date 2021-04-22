import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Alert,
    Image,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    AsyncStorage
} from 'react-native';
import {COLORS} from "../constants";

export default class Rappels extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id:1, day:'lundi'},
                {id:2, day:'mardi'},
                {id:3, day:'mercredi'},
                {id:4, day:'jeudi'},
                {id:5, day:'vendredi'},
                {id:6, day:'samedi'},
                {id:7, day:'dimanche'},
            ],
            dataRappel: [
                {id:1, plant: "Pivoine", work:"Arosage", imghref:"https://www.notretemps.com/cache/com_zoo_images/02/pivoine-arbustive_1e16ee07534cbe74c9f43fb1dcef81d3.jpg", imgwork:"https://leplanificateurdesciences.org/images/sae/drop-148199_640.png"},
                {id:1, plant: "Menthe", work:"Semis", imghref:"https://img-3.journaldesfemmes.fr/DNaVMu1U2BeYLniB0GQaD88Luog=/1240x/smart/c05ed9e0c3384cbdb6537c22ecf63337/ccmcms-jdf/10660976.jpg", imgwork:"https://www.monpetitcoinvert.com/blog/wp-content/uploads/2018/12/Le-semis-a-la-volee.jpg"}
            ],
            search: '',
            text: '',
            currentDay: new Date(),
        }
    }

    eventClickListener = (viewId) => {
        Alert.alert("alert", "Must show input ");
        console.log('Date:'+this.state.currentDay ,);
    }

    searchFilterFunction = (search) => {

        //Met a jour le event text
        this.setState({ search });
        const newHandleSearch = search;
        // console.log(search);
        console.log('requette search is : ',newHandleSearch);

    //     // console.log(`http://localhost:3030/v1/plants/name/${newHandleSearch}`);
    //     fetch(`https://seedy.adnanenabil.com/v1/plants/name/${newHandleSearch}`)
        
        // Passertoken\
        
    //       .then((responsesearch) => responsesearch.json())
    //       .then((jsonsearch) => {
    //         // console.debug(jsonsearch);
    //         //console.log(jsonsearch);
    //         this.setState({ datasearch: jsonsearch.data.plant });
    //       })
    //       .catch((error) => console.error(error))
    //       .finally(() => {
    //         this.setState({ isLoadingSearch: false });
    //       });  
    }

    render() {
        const { search } = this.state;

        const clearStorage = async () => {
            try {
              await AsyncStorage.clear()
              alert('Storage successfully cleared!')
            } catch (e) {
              alert('Failed to clear the async storage.')
            }
          }

          clearStorage()
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Text style={styles.name}>
                           Rappels
                        </Text>
                        <TouchableOpacity onPress={() => this.eventClickListener("row")}>
                            <Text style={styles.add}>
                            +
                            </Text>
                        </TouchableOpacity>
                        {/* <TextInput
                            style={styles.textInputStyle}
                            onChangeText={this.searchFilterFunction}
                            value={this.state.search}
                            underlineColorAndroid="transparent"
                            placeholder="Rechercher ... "
                        /> */}
                    </View>
                </View>
                <FlatList
                    enableEmptySections={true}
                    style={styles.eventList}
                    data={this.state.data}
                    keyExtractor= {(item) => {
                        return item.id;
                    }}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity >
                                <View style={styles.eventDate}>
                                    <Text  style={styles.eventDay}>{item.day}</Text>
                                </View>    
                                <FlatList
                                    enableEmptySections={true}
                                    style={styles.eventList}
                                    data={this.state.dataRappel}
                                    keyExtractor= {(item) => {
                                        return item.id;
                                    }}
                                    renderItem={({item}) => {
                                        return (
                                            <TouchableOpacity /*onPress={() => this.eventClickListener("row")}*/>
                                                <View style={styles.eventBox}>
                                                    <View style={styles.eventContent}>
                                                        <View style={styles.eventContentFirst}>
                                                            <Image style={styles.tinyLogo} source={{ uri: item.imghref,}}/>
                                                            <Text  style={styles.plante}>{item.plant} | {item.work}</Text>
                                                            <Image style={styles.tinyLogo} source={{ uri: item.imgwork,}}/>
                                                        </View>
                                                        <View style={styles.eventContentSec}>
                                                            <Text  style={styles.eventTime}>10:00 am - 10:45 am</Text>
                                                            
                                                            {/* <Text  style={styles.description}>Lorem ipsum dolor sit amet, elit consectetur</Text> */}
                                                        </View>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                }}/>
                            </TouchableOpacity>
                        )
                    }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: "15%",
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

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
    TouchableOpacity
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
        };
    }

    eventClickListener = (viewId) => {
        Alert.alert("alert", "event clicked");
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Text style={styles.name}>
                           Rappels
                        </Text>
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
                            <TouchableOpacity onPress={() => this.eventClickListener("row")}>
                                <View style={styles.eventDate}>
                                    <Text  style={styles.eventDay}>{item.day}</Text>
                                </View>
                                <View style={styles.eventBox}>

                                    <View style={styles.eventContent}>
                                        <Text  style={styles.eventTime}>10:00 am - 10:45 am</Text>
                                        <Text  style={styles.plante}>Menthe</Text>
                                        <Text  style={styles.description}>Lorem ipsum dolor sit amet, elit consectetur</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({

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
        fontSize:25,
        color:COLORS.gray,
        fontWeight: "600",
    },
    eventContent: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft:10,
        backgroundColor: '#FFFFFF',
        padding:10,
        borderRadius:10
    },
    description:{
        fontSize:15,
        color: "#646464",
    },
    eventTime:{
        fontSize:18,
        color:"#151515",
    },
    plante:{
        fontSize:16,
        color:"#151515",
    },

    headerContent:{
        marginTop: 50,
        padding:30,
    },
    name:{
        fontSize:22,
        color:"#222222",
        fontWeight:'900',
    },
});

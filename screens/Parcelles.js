import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
	 Button,
	FlatList,
	SafeAreaView,
} from 'react-native';
import {COLORS} from "../constants";


const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: 'First Item',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Second Item',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		title: 'Third Item',
	},
];
const Parcelles = ({ navigation }) => {
	const Item = ({ title }) => (
		<View style={styles.item}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
	
	const renderItem = ({ item }) => (
		<Item title={item.title} />
	);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.name}>
                        Mes parcelles
                    </Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.formContent}>

                </View>
                <View style={styles.bodyContent}>
	
	                <SafeAreaView style={styles.container}>
		                <FlatList
			                data={DATA}
			                renderItem={renderItem}
			                keyExtractor={item => item.id}
		                />
	                </SafeAreaView>
	                
                    <View style={styles.add}>
                        <Button
                            color="#ffffff"
                            title="Ajouter une parcelle"
                            onPress={() => navigation.replace('AddParcelle')}
                        />
                    </View>
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
        flexWrap: "wrap",
        fontWeight: "900",
        width: 400 | "100%",
        height: 400 | "100%",

    },
    menuBox:{
        backgroundColor: "#ffffff",
        borderRadius:10,
        width:180,
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
    },
    info:{
        fontSize:18,
        fontWeight:'300',
        color: "#222222",
        textAlign:'center',
        marginTop:30,

    },
    formContent:{
        flexDirection: 'row',
        marginTop:5,
        marginBottom:50,

    },
  add:{
      marginTop:20,alignItems: 'center', backgroundColor:COLORS.greenDark,borderRadius: 10, paddingVertical: 10,paddingHorizontal: 120,fontWeight: "bold",color:COLORS.white
  }
})

export default Parcelles

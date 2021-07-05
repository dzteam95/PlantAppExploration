import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import '../js/global';

const Jardin = ({navigation}) => {
	global.isLogd = true;
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View style={styles.headerContent}>
					<Text style={styles.name}>Mon jardin</Text>
				</View>
			</View>
			
			<View style={styles.body}>
				<View style={styles.bodyContent}>
					<TouchableOpacity style={styles.menuBoxWait} onPress={() => navigation.navigate('Parcelles')}>
						<Text style={styles.info}>Mes parcelles</Text>
					</TouchableOpacity>
					
					<TouchableOpacity style={styles.menuBoxWait} onPress={() => navigation.navigate('Parcelles')}>
						<Text style={styles.info}>Liste des plantes</Text>
					</TouchableOpacity>
					
					{/* <TouchableOpacity style={styles.menuBox} onPress={() => navigation.navigate('Rappels')}>
						<Text style={styles.info}>Actions à venir</Text>
					</TouchableOpacity> */}
					
					<TouchableOpacity style={styles.menuBox} onPress={() => navigation.navigate('Rappels')}>
						<Text style={styles.info}>Rappels</Text>
					</TouchableOpacity>
					
					<TouchableOpacity style={styles.menuBox} onPress={() => navigation.navigate('Conseils')}>
						<Text style={styles.info}>Mes fiches</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	headerContent: {
		marginTop: 50,
		padding: 30,
	},
	name: {
		fontSize: 22,
		color: '#222222',
		fontWeight: '900',
	},
	body: {
		flex: 2,
		flexDirection:"column",
        padding:20,
	},
	bodyContent: {
		fontWeight: "900",
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
	},
	menuBox:{
		backgroundColor: "#ffffff",
        borderRadius:10,
        width:"47%",
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
	menuBoxWait:{
		backgroundColor: "#CDCDCD",
        borderRadius:10,
        width:"47%",
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
});

export default Jardin;

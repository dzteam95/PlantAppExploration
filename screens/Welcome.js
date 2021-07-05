import React, {useState } from 'react';
import { TouchableOpacity, StyleSheet, View,Text,Button,ImageBackground, useColorScheme } from 'react-native'
import {COLORS, SIZES} from "../constants";
import {Bg} from "../constants/images";


const Welcome = ({ navigation }) => {


	return(
		<ImageBackground source={Bg} style={styles.image}>
			<View style={styles.containerGlobal} >
				<Text style={styles.title}>Voici <Text style={styles.seedy}>Seedy</Text>, le conseiller en jardinage pour ne plus se creuser la tête </Text>
				<View style={styles.decouverte}>
					<Button
						// style={styles.btndiscovert}
						color= {COLORS.greenDark}
						title="Découvrir Seedy"
						onPress={() => navigation.navigate('Onboarding')}
					/>
				</View>
				<View style={styles.connexion}>
					<Button
						// style={styles.btnlogin}
						color="#ffffff"
						title="Me connecter"
						onPress={() => navigation.navigate('Login')}
					/>
				</View>
				<TouchableOpacity onPress={() => navigation.navigate('Register')}>
				<Text style={styles.txt}>{/*Déja convaincu?*/}<Text style={styles.link}>S'inscrire</Text></Text>
				</TouchableOpacity>
			</View>
		</ImageBackground>

	)

}

const styles = StyleSheet.create({
	title:{fontSize:SIZES.h1,fontWeight:SIZES.fontWeight,marginTop:200,marginBottom:300,marginLeft:20,marginRight:20},
	containerGlobal:{flex: 1, alignItems: 'center',width:'100%',height: '100%'},
	image: {flex: 1, resizeMode: "cover", justifyContent: "center"},
	connexion:{marginTop:20,alignItems: 'center', backgroundColor:COLORS.greenDark,borderRadius: 10, paddingVertical: 10,paddingHorizontal: 120,fontWeight: "bold",color:COLORS.white,},
	decouverte:{alignItems: 'center', backgroundColor:COLORS.yellowLight,borderRadius: 10, paddingVertical: 10,paddingHorizontal: 110,fontWeight: "bold",color:COLORS.white,},
	txt:{marginTop:20,},
	seedy:{color:COLORS.greenDark,},
	link:{width:'45%',textAlign: 'right',color:COLORS.greenDark},
	btnlogin:{shadowColor: 'black',shadowOpacity: .2,shadowOffset: {height:2,width:-2},elevation:4,color:"#ffffff"},
	btndiscovert:{shadowColor: 'black',shadowOpacity: .2,shadowOffset: {height:2,width:-2},elevation:4,color:COLORS.greenDark}

})

export default Welcome

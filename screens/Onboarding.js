import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import {COLORS, SIZES} from "../constants";
import {Boarding1} from "../constants/images";



const Onboarding = ({ navigation }) => {

	
	return (
		<View style={styles.containerGlobal}>
			<Button
				title="Passer"
				onPress={() => navigation.replace('Login')}
			/>
			<Text style={styles.title}>Cultivez vous et votre jardin</Text>
			<Text style={styles.txt}>Cultivez fruits, légumes et plantes dans le jardin de vos rêves à l'aide de nos fiches conseils, vocabulaire et espèces.</Text>
			<View style={styles.images}>
			<Image
				source={Boarding1}
			/>
			</View>
			<View  style={styles.suivant}>
			<Button
				title="Suivant"
				onPress={() => navigation.replace('OnboardingTwo')}
			/>
			</View>
		</View>

)

}

const styles = StyleSheet.create({
	title:{fontSize:SIZES.h1,marginTop:10,marginBottom:50,},
	containerGlobal:{marginTop:50,flex: 1, alignItems: 'center',width:'100%',height: '100%'},
	suivant:{marginTop:150,alignItems: 'center', backgroundColor:COLORS.greenDark,borderRadius: 10, paddingVertical: 10,paddingHorizontal: 120,fontWeight: "bold",color:COLORS.white,},
	image: {flex: 1,justifyContent: "center",width:'auto',height: 'auto'},



})

export default Onboarding

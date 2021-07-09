import React, {useState, useEffect } from 'react';
import { StyleSheet, View,Text,TextInput,Button,CheckBox,TouchableOpacity } from 'react-native'
import {COLORS, SIZES} from "../constants";


const Register = ({ navigation }) => {

	const [email, setEmail] = useState({ value: '', error: '' })
	const [username, setUsername] = useState({ value: '', error: '' })
	const [password, setPassword] = useState({ value: '', error: '' })
	// const [isSelected, setIsSelected] = useState({ value: '', error: '' })


	const onLoginPressed = () => {
		
		let data = {
			method: 'POST',
			credentials: 'same-origin',
			mode: 'same-origin',
			body: JSON.stringify({
				email:email.value,
				username:username.value,
				hash:password.value,

			}),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				//'X-CSRFToken': cookie.load('csrftoken')
			},
		}
		
		fetch('https://seedyapp.tk/users/register',data)
		.then((response) => {
			//Statut getted
			console.log(response.status);
			if (response.status === 200) {
				console.log('registred');
				
				navigation.reset({
					index: 0,
					routes: [{ name: 'Login' }],
				})
			  
			}else{
				console.log('not registrer or contain error');
				//do nothing
			}
		  })
	}

	return(
		<View style={styles.containerGlobal} >
			<View style={styles.row}>
				<TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
					<Text style={styles.txt}>Retour</Text>
				</TouchableOpacity>
			</View>
			<Text style={styles.title}>Créer un compte</Text>
			<TextInput style={styles.input}
					   placeholder="Email"
					   label="Email"
					   returnKeyType="next"
					   value={email.value}
					   onChangeText={(text) => setEmail({ value: text, error: '' })}
			/>
			<TextInput style={styles.input}
					   placeholder="Nom de super jardinier (pseudo)"
					   label="Username"
					   returnKeyType="next"
					   value={username.value}
					   onChangeText={(text) => setUsername({ value: text, error: '' })}
			/>
			<TextInput  style={styles.input}
						placeholder="Mot de passe"
						label="Password"
						returnKeyType="done"
						value={password.value}
						onChangeText={(text) => setPassword({ value: text, error: '' })}
						secureTextEntry
			/>
		{/*	<View style={styles.Containercheckbox}>
				<CheckBox
					value={isSelected.value}
					onValueChange={setIsSelected}
					style={styles.checkbox}
				/>
				<Text style={styles.label}>En finalisant votre inscription, vous confirmez avoir lu et acceptez les conditions d'utilisation de cette application ainsi que la politique de confidentialité</Text>
			</View>*/}
			<View style={styles.enregistrer}>
				<Button color="#ffffff" title={"S'enregistrer"} mode="contained" onPress={onLoginPressed}/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({

	title:{fontSize:SIZES.h1,margin:30},
	containerGlobal:{flex: 1, alignItems: 'center',width:'auto',height: 'auto',marginTop:30},
	input:{height:70,backgroundColor:COLORS.greenLight,width:'80%',borderRadius: 10,margin:30,paddingLeft:20},
	enregistrer:{alignItems: 'center', backgroundColor:COLORS.greenDark,borderRadius: 10, paddingVertical: 10,paddingHorizontal: 120,fontWeight: "bold",color:COLORS.white,marginTop:30},
	Containercheckbox:{width:'100%',height:'auto',textAlign:'center', alignItems: 'center',margin:10},
	checkbox: {paddingVertical:10,paddingHorizontal: 10, alignItems: 'center',width:'auto',height:'auto',marginLeft:25,marginTop:5},
	label: {textAlign:'center'},
	row:{marginTop:30},
	txt:{textAlign: 'left',marginLeft:0,},
})

export default Register

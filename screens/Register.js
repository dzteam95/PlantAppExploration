import React, {useState } from 'react';
import { StyleSheet, View,Text,TextInput,Button,CheckBox, } from 'react-native'
import {COLORS, SIZES} from "../constants";


const Register = ({ navigation }) => {
	const [email, setEmail] = useState({ value: '', error: '' })
	const [username, setUsername] = useState({ value: '', error: '' })
	const [password, setPassword] = useState({ value: '', error: '' })
	const [isSelected, setIsSelected] = useState({ value: '', error: '' })
	
	
	const onLoginPressed = () => {
		fetch('http://localhost:4000/users/register',data)
		
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
		navigation.reset({
			index: 0,
			routes: [{ name: 'Home' }],
		})
	}
	
	return(
		<View style={styles.containerGlobal} >
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
			<View style={styles.Containercheckbox}>
				<CheckBox
					value={isSelected.value}
					onValueChange={setIsSelected}
					style={styles.checkbox}
				/>
				<Text style={styles.label}>En finalisant votre inscription, vous confirmez avoir lu et acceptez les conditions d'utilisation de cette application ainsi que la politique de confidentialité</Text>
			</View>
			<View style={styles.enregistrer}>
				<Button title={"enregistrer"} mode="contained" onPress={onLoginPressed}/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	title:{fontSize:SIZES.h1,marginTop:100,marginBottom:30,},
	containerGlobal:{flex: 1, alignItems: 'center',width:'100%',height: '100%'},
	input:{height:70,backgroundColor:COLORS.greenLight,marginTop:30,width:'80%',borderRadius: 10,},
	enregistrer:{marginTop:100,alignItems: 'center', backgroundColor:COLORS.greenDark,borderRadius: 10, paddingVertical: 10,paddingHorizontal: 120,fontWeight: "bold",color:COLORS.white,},
	Containercheckbox:{width:'100%',height:'auto',textAlign:'justify', alignItems: 'center',},
	checkbox: {paddingVertical:8,paddingHorizontal: 12, alignItems: 'center'},
	label: {textAlign:'justify',width:'80%'},
	
	
})

export default Register

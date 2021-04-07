import React, {useState } from 'react';
import { TouchableOpacity, StyleSheet, View,Text,TextInput,Button ,BackHandler, Alert} from 'react-native'
import {COLORS, SIZES} from "../constants";


const Login = ({ navigation }) => {

	const [username, setUsername] = useState({ value: '', error: '' })
	const [password, setPassword] = useState({ value: '', error: '' })

	const onLoginPressed = () => {
		let data = {
			method: 'POST',
			credentials: 'same-origin',
			mode: 'same-origin',
			body: JSON.stringify({
				username:username.value,
				password:password.value,
			}),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				//'X-CSRFToken': cookie.load('csrftoken')
			},
		}

		fetch('https://seedy.adnanenabil.com/users/authenticate',data)
		.then((response) => {
			//Statut getted
			//console.log(response.status);
			if (response.status === 200) {
				//console.log('aut');
				
				navigation.reset({
					index: 0,
					routes: [{ name: 'Home' }],
				})
			  
			}else{
				//console.log('not authorized');
				//do nothing
			}
		  })
	}

return(
	<View style={styles.containerGlobal} >
		<View style={styles.row}>
			<TouchableOpacity onPress={() => navigation.replace('Welcome')}>
				<Text style={styles.txt}>Back</Text>
			</TouchableOpacity>
		</View>
		<Text style={styles.title}>Connexion</Text>
		<TextInput style={styles.input}
			placeholder="Pseudo"
			label="Username"
			returnKeyType="next"
			value={username.value}
			onChangeText={(text) => setUsername({ value: text, error: '' })}

		/>
		<View style={styles.rowInput}>
		<Text style={styles.forgot} onPress={() => navigation.navigate('ForgotPasswordScreen')}>Mot de passe oublié ?</Text>
		</View>
		<TextInput  style={styles.input}
			placeholder="Mot de passe"
			label="Password"
			returnKeyType="done"
			value={password.value}
			onChangeText={(text) => setPassword({ value: text, error: '' })}
			secureTextEntry
		/>

		<View style={styles.connexion}>
			<Button title={"Connexion"} mode="contained" onPress={onLoginPressed}/>

		</View>
		<View style={styles.row}>
			<TouchableOpacity onPress={() => navigation.replace('Register')}>
				<Text style={styles.txt}>Pas encore de compte?<Text style={styles.link}> m'inscrire</Text></Text>
			</TouchableOpacity>
		</View>
	</View>

)

}

const styles = StyleSheet.create({
	title:{fontSize:SIZES.h1,marginTop:50,marginBottom:50,},
	containerGlobal:{flex: 1, alignItems: 'center',width:'100%',height: '100%'},
	input:{height:70,backgroundColor:COLORS.greenLight,marginTop:30,width:'80%',borderRadius: 10,},
	connexion:{marginTop:150,alignItems: 'center', backgroundColor:COLORS.greenDark,borderRadius: 10, paddingVertical: 10,paddingHorizontal: 120,fontWeight: "bold",color:COLORS.white,},
	row:{width:'100%',alignItems: 'center',marginTop:50},
	rowInput:{width:'100%',alignItems: 'center',marginTop:20},
	txt:{width:'45%',textAlign: 'right'},
	link:{width:'45%',textAlign: 'right',color:COLORS.greenDark},
	forgot:{color:COLORS.greenLight}

})

export default Login

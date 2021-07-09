import React, {useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, View,Text,TextInput,Button ,BackHandler, Alert, AsyncStorage} from 'react-native';
import CheckBox from 'react-native-check-box';


import {COLORS, SIZES} from "../constants";


const Login = ({ navigation }) => {

	const [username, setUsername] = useState({ value: '', error: '' })
	const [password, setPassword] = useState({ value: '', error: '' })

	const onResetPressed = () => {

	}


return(
	<View style={styles.containerGlobal} >
		<View style={styles.row}>
			<TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
				<Text style={styles.txt}>Back</Text>
			</TouchableOpacity>
		</View>
		<Text style={styles.title}>Mot de passe oublié</Text>
		<TextInput style={styles.input}
			placeholder="Username"
			label="Username"
			returnKeyType="next"
			value={username.value}
			onChangeText={(text) => setUsername({ value: text, error: '' })}

		/>
		{/* <View style={styles.rowInput}>
			<TouchableOpacity style={styles.forgot} onPress={() => navigation.navigate('ForgotPasswordScreen')}>
				<Text>Mot de passe oublié ?</Text>
			</TouchableOpacity>
		</View> */}
		<TextInput  style={styles.input}
			placeholder="Email"
			label="Email"
			returnKeyType="done"
			value={password.value}
			onChangeText={(text) => setPassword({ value: text, error: '' })}
			secureTextEntry
		/>
		{/* <View style={styles.container}>
			<View style={styles.checkboxContainer}>				
				<CheckBox
					style={{flex: 1, padding:70}}
					onClick={()=>{
						// setSelection({
						// 	isChecked: 1
						// })
						setSelect()
					}}
					isChecked={isSelected.isSelect}
					leftText={"Se souvenir de moi ?"}
				/>
			</View>
		</View>        */}
		<View style={styles.connexion}>
			<Button title={"Recuperer"} mode="contained" onPress={onResetPressed}/>

		</View>
		<View style={styles.row}>
			<TouchableOpacity onPress={() => navigation.navigate('Login')}>
				<Text style={styles.txt}>Je me souviens du mot de passe !<Text style={styles.link}> me connecter</Text></Text>
			</TouchableOpacity>
		</View>
		<View style={styles.row}>
			<TouchableOpacity onPress={() => navigation.navigate('Register')}>
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
	forgot:{color:COLORS.greenLight},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		// backgroundColor: "#fff000"
	  },
	  checkboxContainer: {
		flexDirection: "row",
		marginBottom: 20,
	  },
	  checkbox: {
		// marginTop: 30,
		// width:40,
		// height:40,
		alignSelf: "center",
	  },
	  label: {
		margin: 8,
	  },
})

export default Login

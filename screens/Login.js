import React, {useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, View,Text,TextInput,Button ,BackHandler, Alert, AsyncStorage} from 'react-native';
import CheckBox from 'react-native-check-box';


import {COLORS, SIZES} from "../constants";


const Login = ({ navigation }) => {

	const [username, setUsername] = useState({ value: '', error: '' })
	const [password, setPassword] = useState({ value: '', error: '' })
	const [isSelected, setSelection] = useState({ isSelect: false });
	useEffect(() => {
        readData()
        // return (
        //     readData()
        // )
    }, [])

    const readData = async () => {
        try {
            const usernameValue = await AsyncStorage.getItem('usernameStorage')
			const passwordValue = await AsyncStorage.getItem('passwordStorage')
			const rememberMe = await AsyncStorage.getItem('rememberMeStorage')
            
            if (usernameValue !== null) {
                //console.log(userValue)
				if (passwordValue !== null) {
					//console.log(passwordValue)
					
					setUsername({
						value: usernameValue,
					});
					setPassword({
						value: passwordValue,
					});
					// console.log('rememberMe : ',rememberMe)
					if (rememberMe === 'true'){
						setSelection({
							isSelect: true
						})
						// console.log('rememberMe true : ',rememberMe)
					} else {
						setSelection({
							isSelect: false
						})
						// console.log('rememberMe2 false : ',rememberMe)
					}
				}else{
					//alert('No Token found from storage')
				}

            }else{
                //alert('No Token found from storage')
            }
        } catch (e) {
          //alert('Failed to fetch the data from storage')
        }  
    }

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

		//fetch Statu == 200
		fetch('https://seedyapp.tk/users/authenticate', data)
		.then( res => {

			//Statut getted
			// console.log(res);
			if (res.status === 200) {
				//console.log('aut');

				// Clearing old user registered 
				const clearStorage = async () => {
					try {
					  await AsyncStorage.clear()
						// console.log('Storage successfully cleared!')
					} catch (e) {
						// console.log('Failed to clear the async storage.')
					}
				}
				clearStorage()
				
				  // Save user remember data if checkbox is checked
				if (isSelected.isSelect == true){	
					saveData('usernameStorage',username.value);
					saveData('passwordStorage',password.value);
					saveData('rememberMeStorage','true');
					// console.log('user saved');
				}
				// fetch get token 
				fetch('https://seedyapp.tk/users/authenticate', data)
				.then((response) => response.json())
				
				.then((responseData) => {
					// console.log(responseData.sexe);
					console.log(responseData.token);
					// saveItem('id_token', responseData.token),
					// if (responseData.sexe == true){
					if (responseData.isP == true){
						isP = "p";
					}else{
						isP = "f";
					}
					saveData('isP', isP),
					saveData('userId', responseData.id),
					// console.log(responseData.id);
					// console.log(isP);
					saveData('id_token', responseData.token),
					saveData('levelSubscription', responseData.levelSubscription),
					// saveData('levelSubscription', "4"),
					console.log(responseData.levelSubscription);
					// premium
					console.log('premiumLevelStorage : ',isP);
					saveData('premiumLevelStorage', isP),
					navigation.reset({
						index: 0,
						routes: [{ name: 'Home' }],
					})
				})
							  
			}else{
				//console.log('not authorized');
				//do nothing
			}
		  })
	}
	
	const saveData = async (item, token) => {
		try {
		  await AsyncStorage.setItem(item, token)
		  	//alert('Data successfully saved')
		} catch (e) {
		  	//alert('Failed to save the data to the storage')
		}
	}
	
	const setSelect = async () => {
		// console.log(isSelected);
		if (isSelected.isSelect == false){
			// isSelected = !isSelected;
			setSelection({
				isSelect: true
			})
		} else if (isSelected.isSelect == true){
			setSelection({
				isSelect: false
			})
		}
		// console.log(isSelected.isSelect);
	}
	// const saveItem = async (item, selectedValue) => {
	// 	// console.log(item, selectedValue)
	// 	try {
	// 	  await AsyncStorage.setItem(item, selectedValue)
	// 	  console.log('Data successfully saved')
	// 	//   console.log(item)
	// 	//   console.log(selectedValue)
	// 	} catch (e) {
	// 		console.log('Failed to save the data to the storage')
	// 	}
	// }

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
			<TouchableOpacity style={styles.forgot} onPress={() => navigation.replace('ForgotPasswordScreen')}>
				<Text>Mot de passe oublié ?</Text>
			</TouchableOpacity>
		</View>
		<TextInput  style={styles.input}
			placeholder="Mot de passe"
			label="Password"
			returnKeyType="done"
			value={password.value}
			onChangeText={(text) => setPassword({ value: text, error: '' })}
			secureTextEntry
		/>
		<View style={styles.container}>
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
		</View>       
		<View style={styles.connexion}>
			<Button  color={COLORS.white} title={"Connexion"} mode="contained" onPress={onLoginPressed}/>

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

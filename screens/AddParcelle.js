import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	TouchableHighlight,
	Alert
} from 'react-native';
import {COLORS} from "../constants";

export default class AddParcelle extends Component {
	
	constructor(props) {
		super(props);
		state = {
			shape_area: '',
			size_l: '',
			size_y: '',
			size_c: '',
			size_d: '',
			description: '',
		}
	}
	
	onClickListener = (viewId) => {
		Alert.alert("Alert", "Button pressed "+viewId);
	}
	
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput style={styles.inputs}
					           placeholder="shape_area"
					           underlineColorAndroid='transparent'
					           onChangeText={(shape_area) => this.setState({shape_area})}/>
				</View>
				
				<View style={styles.inputContainer}>
					<TextInput style={styles.inputs}
					           placeholder="size_l"
					           keyboardType="numeric"
					           underlineColorAndroid='transparent'
					           onChangeText={(size_l) => this.setState({size_l})}/>
				</View>
				
				<View style={styles.inputContainer}>
					<TextInput style={styles.inputs}
					           placeholder="size_y"
					           secureTextEntry={true}
					           underlineColorAndroid='transparent'
					           onChangeText={(size_y) => this.setState({size_y})}/>
				</View>
				<View style={styles.inputContainer}>
					<TextInput style={styles.inputs}
					           placeholder="size_c"
					           secureTextEntry={true}
					           underlineColorAndroid='transparent'
					           onChangeText={(size_c) => this.setState({size_c})}/>
				</View>
				<View style={styles.inputContainer}>
					<TextInput style={styles.inputs}
					           placeholder="size_d"
					           secureTextEntry={true}
					           underlineColorAndroid='transparent'
					           onChangeText={(size_d) => this.setState({size_d})}/>
				</View>
				<View style={styles.inputContainer}>
					<TextInput style={styles.inputs}
					           placeholder="description"
					           underlineColorAndroid='transparent'
					           onChangeText={(description) => this.setState({description})}/>
				</View>
				
				<TouchableHighlight style={[styles.buttonContainer, styles.addButton]} onPress={() => this.onClickListener('add')}>
					<Text style={styles.addText}>Ajouter une parcelle</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	inputContainer: {
		borderBottomColor: '#F5FCFF',
		backgroundColor: '#FFFFFF',
		borderRadius:30,
		borderBottomWidth: 1,
		width:250,
		height:45,
		marginBottom:20,
		flexDirection: 'row',
		alignItems:'center'
	},
	inputs:{
		height:45,
		marginLeft:16,
		borderBottomColor: '#FFFFFF',
		flex:1,
	},
	
	buttonContainer: {
		height:45,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom:20,
		width:250,
		borderRadius:30,
	},
	addButton: {
		backgroundColor:COLORS.greenLight,
	},
	addText: {
		color: 'white',
	}
});

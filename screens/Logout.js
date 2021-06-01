import React, {useState } from 'react';
import { TouchableOpacity, StyleSheet, View,Text,TextInput,Button ,BackHandler, Alert, AsyncStorage} from 'react-native';

import {COLORS, SIZES} from "../constants";


const Logout = ({ navigation }) => {

	const clearStorage = async () => {
      try {
        await AsyncStorage.clear()
          console.log('Storage successfully cleared!')
      } catch (e) {
          console.log('Failed to clear the async storage.')
      }
  }

  clearStorage()

  navigation.reset({
      index: 0,
      routes: [{ name: 'Welcome' }],
  })
  return (
      <View>
      </View>
  );
}

export default Logout

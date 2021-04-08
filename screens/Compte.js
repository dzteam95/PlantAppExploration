import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Switch} from 'react-native';
import {COLORS} from '../constants';

const Compte = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabledTwo, setIsEnabledTwo] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitchTwo = () =>
    setIsEnabledTwo((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.name}>Mon compte</Text>

        <View style={styles.bodyContent}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.txt}>Changer l'adresse du compte</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.replace('Parrainage')}>
            <Text style={styles.txt}>Confidentialité</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.replace('Delete')}>
            <Text style={styles.txt}>Mon compte</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.txt}>J'ai un code promo</Text>
          </TouchableOpacity>

          <View style={styles.buttonContainer}>
            <Text style={styles.txt}>Recevoir des notifications</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Text style={styles.txt}>Recevoir la newsletter</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabledTwo ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchTwo}
              value={isEnabledTwo}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00BFFF',
    height: 'auto',
  },
  name: {
    fontSize: 22,
    color: '#222222',
    fontWeight: '900',
    marginTop: 100,
    marginBottom: 20,
    marginLeft: 20,
  },

  bodyContent: {
    alignItems: 'center',
  },

  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 350,
    borderRadius: 10,
    backgroundColor: COLORS.lightGray,
  },

  txt: {
    fontSize: 18,
    fontWeight: '500',
  },
});
export default Compte;

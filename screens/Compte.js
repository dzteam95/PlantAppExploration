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
      <View style={styles.centeredView}>
        
        <Text style={styles.name}>Mon compte</Text>


        <View style={styles.bodyContent}>
            <TouchableOpacity style={styles.buttonContainerWait} onPress={() => navigation.navigate('')}>
                <Text  style={styles.txt}>Changer l'adresse du compte</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('DataShare')}>
                <Text  style={styles.txt}>Confidentialité</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Delete')}>
                <Text  style={styles.txt}>Supprimer mon compte</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Parrainage')}>
                <Text  style={styles.txt}>J'ai un code promo</Text>
            </TouchableOpacity>
            <View style={styles.containerSwitch}>
              <TouchableOpacity style={styles.buttonContainerWait}>
                  <Text  style={styles.txtSwitch}>Notifications</Text>
                  <Switch
                    style={styles.Switch}
                    trackColor={{false: '#767577', true: COLORS.greenDark}}
                    thumbColor={isEnabled ? COLORS.greenLight : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainerWait} >
                  <Text  style={styles.txtSwitch}>Newsletter</Text>
                  <Switch
                    style={styles.Switch}
                    trackColor={{false: '#767577', true: COLORS.greenDark}}
                    thumbColor={isEnabledTwo ? COLORS.greenLight : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchTwo}
                    value={isEnabledTwo}
                  />
              </TouchableOpacity>
              </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerSwitch:{
    // flex:12,
    // flexDirection:"column"
  },
  Switch:{
    // flex:1,
    paddingRight:40,
  },
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
    flex:1,
    flexDirection: 'column',
    // alignItems: 'center',
    // shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
        height:2,
        width:-2
    },
    elevation:4,
  },
  buttonContainerWait:{
    marginTop: 10,
    height: 45,
    // flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 350,
    borderRadius: 10,
    backgroundColor: "#CDCDCD",
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    // flex:1,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 350,
    borderRadius: 10,
    backgroundColor: "#ffffff",
  },

  txt: {
    fontSize: 18,
    fontWeight: '500',
  },
  txtSwitch: {
    flex:8,
    fontSize: 18,
    textAlign:'center',
    // paddingRight:40,
    fontWeight: '500',
  },
});
export default Compte;

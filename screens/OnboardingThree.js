import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Button,
  ImageBackground,
  Image,
} from 'react-native';
import {COLORS, SIZES} from '../constants';
import {Boarding3} from '../constants/images';

const OnboardingThree = ({navigation}) => {
  return (
    <View style={styles.containerGlobal}>
      <View style={styles.container}>
        <Button color="#222222" title="Passer" onPress={() => navigation.navigate('Register')} />
        <Text style={styles.title}>Programmez</Text>
        <Text style={styles.txt}>
          Programmez des rappels pour toutes les tâches que nécessite votre
           jardin ou votre potager qu'il soit intérrieur ou exterieur
        </Text>
        <View style={styles.images}>
          <Image source={Boarding3} />
        </View>
        <View style={styles.suivant}>
          <Button color="#ffffff"
            title="Suivant"
            onPress={() => navigation.navigate('OnboardingFour')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {fontSize: SIZES.h1, marginBottom: 50},
  txt: {fontSize:14, marginTop: 10,     alignItems: 'center',width:'90%'},

  container: {
    marginTop: 50,
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  containerGlobal: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.white,
  },
  suivant: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: COLORS.greenDark,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 60,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  image: {flex: 1, justifyContent: 'center', width: 'auto', height: 'auto'},
});

export default OnboardingThree;

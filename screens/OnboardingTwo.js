import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import {COLORS, SIZES} from '../constants';
import {Boarding2} from '../constants/images';

const OnboardingTwo = ({navigation}) => {
  return (
    <View style={styles.containerGlobal}>
      <View style={styles.container}>
        <Button color="#222222" title="Passer" onPress={() => navigation.navigate('Register')} />
        <Text style={styles.title}>Organisez</Text>
        <Text style={styles.txt}>
          Imaginez et créez votre jardin grâce à notre outil de virtualisation
          proposant plusieurs centaines d'éspèces
        </Text>
        <View style={styles.images}>
          <Image source={Boarding2} />
        </View>
        <View style={styles.suivant}>
          <Button color={COLORS.greenLight}
            title="Suivant"
            onPress={() => navigation.navigate('OnboardingThree')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {fontSize: SIZES.h1, marginBottom: 50},
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
    backgroundColor: COLORS.yellowLight,
  },
  suivant: {
    marginTop: 200,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 60,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  image: {flex: 1, justifyContent: 'center', width: 'auto',  marginTop:100,},
});

export default OnboardingTwo;

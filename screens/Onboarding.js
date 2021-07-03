import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import {COLORS, SIZES} from '../constants';
import {Boarding1} from '../constants/images';

const Onboarding = ({navigation}) => {
  return (
    <View style={styles.containerGlobal}>
      <Button  color="#222222" title="Passer" onPress={() => navigation.navigate('Register')} />
      <Text style={styles.title}>Cultivez vous et votre jardin</Text>
      <Text style={styles.txt}>
        Cultivez fruits, légumes et plantes dans le jardin de vos rêves à l'aide
        de nos fiches conseils, vocabulaire et espèces.
      </Text>
      <View style={styles.images}>
        <Image source={Boarding1} />
      </View>
      <View style={styles.suivant}>
        <Button color="#ffffff"
          title="Suivant"
          onPress={() => navigation.navigate('OnboardingTwo')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {fontSize: SIZES.h1, marginTop: 10, marginBottom: 50,width:'90%'},
  txt: {fontSize:14, marginTop: 10,     alignItems: 'center',width:'90%'},
    containerGlobal: {
    marginTop: 50,
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  suivant: {
    alignItems: 'center',
    backgroundColor: COLORS.greenDark,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 120,
    fontWeight: 'bold',
      marginTop:100
  },
  images: { justifyContent: 'center', width: 'auto', height:'auto',marginTop:100},

});

export default Onboarding;

import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import {COLORS, SIZES} from '../constants';
import {Boarding4} from '../constants/images';

const OnboardingFour = ({navigation}) => {
  return (
    <View style={styles.containerGlobal}>
      <View style={styles.container}>
        <Button  color="#222222" title="Se connecter" onPress={() => navigation.replace('Register')} />
        <Text style={styles.title}>Ensuite profitez</Text>
        <Text style={styles.txt}>
          Et voila cuisinez et partagez votre production avec vos proches
          quelques soit la saison Vous Allez faire des jaloux !.
        </Text>
        <View style={styles.images}>
          <Image source={Boarding4} />
        </View>
        <View style={styles.suivant}>
          <Button color={COLORS.greenDark}
            title="C'est parti"
            onPress={() => navigation.replace('Register')}
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
    backgroundColor: COLORS.greenLight,
  },
  suivant: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 60,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  image: {flex: 1, justifyContent: 'center', width: 'auto', height: 'auto'},
});

export default OnboardingFour;

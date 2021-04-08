import React from 'react';
import {StyleSheet, View, Text, Button, Image, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, images, SIZES} from '../constants';

const Parrainage = ({navigation}) => {
  return (
    <View style={styles.containerGlobal}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.replace('Profile')}>
          <Text>Retour</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Parrainer mes amis</Text>
        <Text style={styles.txt}>Invite tes amis!</Text>
        <Text style={styles.txt}>PARDES21</Text>
        <Text style={styles.txt}>Appuyer pour copie</Text>

        <View style={styles.suivant}>
          <Button color="#ffffff"
            title="Partager mon code"
            onPress={() => navigation.replace('Home')}
          />
        </View>
        <Text style={styles.credit}>Ton crédit :</Text>
      </View>
    </View>
  );

};

const styles = StyleSheet.create({
  title: {fontSize: SIZES.h1, marginBottom: 80},
  txt: {fontSize: SIZES.h4, marginBottom: 80},
  container: {
    marginTop: 100,
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
    backgroundColor: COLORS.lightGray,
  },
  suivant: {
    marginTop: 100,
    alignItems: 'center',
    backgroundColor: COLORS.greenDark,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 60,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  credit: {fontSize: SIZES.h3, marginTop: 20},




});

export default Parrainage;

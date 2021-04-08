import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Jardin = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.name}>Mon jardin</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <View style={styles.menuBox}>
            <Text style={styles.info}>Mes parcelles</Text>
          </View>

          <View style={styles.menuBox}>
            <Text style={styles.info}>Liste des plantes</Text>
          </View>

          <View style={styles.menuBox}>
            <Text style={styles.info}>Actions à venir</Text>
          </View>

          <View style={styles.menuBox}>
            <Text style={styles.info}>Rappels d'aujourd'hui</Text>
          </View>

          <View style={styles.menuBox}>
            <Text style={styles.info}>Mes fiches</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContent: {
    marginTop: 50,
    padding: 30,
  },
  name: {
    fontSize: 22,
    color: '#222222',
    fontWeight: '900',
  },
  body: {
    flex: 2,
  },
  bodyContent: {
    flexWrap: 'wrap',
    fontWeight: '900',
    width: 400 | '100%',
    height: 400 | '100%',
  },
  menuBox: {
    backgroundColor: '#DCDCDC',
    width: 180,
    height: 100,
    margin: 10,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 2,
      width: -2,
    },
    elevation: 4,
  },
  info: {
    fontSize: 18,
    fontWeight: '500',
    color: '#222222',
    textAlign: 'center',
    marginTop: 30,
  },
});

export default Jardin;

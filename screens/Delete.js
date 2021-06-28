import React, {useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  BackHandler,
  Alert,
} from 'react-native';
import {COLORS, SIZES} from '../constants';

const Delete = ({navigation}) => {
  const [id, setId] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const onLoginPressed = () => {
    fetch('https://seedy.adnanenabil.com/users/:id', data);

    let data = {
      method: 'DELETE',
      credentials: 'same-origin',
      mode: 'same-origin',
      body: JSON.stringify({
        id: id.value,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        //'X-CSRFToken': cookie.load('csrftoken')
      },
    };
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  };

  return (
    <View style={styles.containerGlobal}>
      <Text style={styles.title}>Supprimer mon compte</Text>
      <Text style={styles.titleDeux}>Est-tu sûr(e)?</Text>
      <Text style={styles.txt}>
        La suppression de compte est irréversible, toutes les données seront
        supprimés, y compris l'abonnement auquel tu auras souscrit. Si il y'en a
        un !
      </Text>

      <Text style={styles.txtDeux}>
        Pour confirmer la suppression, renseigne ton mot de passe{' '}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({value: text, error: ''})}
        secureTextEntry
      />

      <View style={styles.connexion}>
        <Button color="#ffffff" title={'Supprimer'} mode="contained" onPress={onLoginPressed} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {fontSize: SIZES.h1, marginTop: 90},
  titleDeux:{fontSize: SIZES.h1, marginTop: 50, marginBottom: 50, color:COLORS.greenDark},
  containerGlobal: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  input: {
    height: 70,
    backgroundColor: COLORS.white,
    marginTop: 30,
    width: '80%',
    borderRadius: 10,
  },
  connexion: {
    marginTop: 80,
    alignItems: 'center',
    backgroundColor: COLORS.greenDark,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 120,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  row: {width: '100%', alignItems: 'center', marginTop: 50},
  rowInput: {width: '100%', alignItems: 'center', marginTop: 20},
  txt: {width: '90%'},
  txtDeux: {width: '90%',marginTop: 50},

  link: {width: '45%', textAlign: 'right', color: COLORS.greenDark},
  forgot: {color: COLORS.greenLight},
});

export default Delete;

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
  AsyncStorage,
  NativeModules,
} from 'react-native';
import {COLORS, SIZES} from '../constants';

const Delete = ({navigation}) => {
  
  // const id = "5f0b3d0cb74add05fd59f566";
  const [token, setToken] = useState({ value: '', error: '' });
  const [id, setId] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({value: '', error: ''});
  const [username, setUsername] = useState({value: '', error: ''});
  // console.log(password.value);
  // console.log(username.value);

  const onLoginPressed = async() => {
    try {
      const token = await AsyncStorage.getItem('id_token')
      if (token !== null) {
          console.log('jeton ok ! : ',token)
          setToken({
              value: token,
          });
          try {
            const userId = await AsyncStorage.getItem('userId')
            console.log('userId ok ! : ',userId)
            setId({
              value: userId,
            });
            if (userId !== null) {
                let dataConnect = {
                  method: 'POST',
                  credentials: 'same-origin',
                  mode: 'same-origin',
                  body: JSON.stringify({
                    username:username.value,
                    password:password.value,
                  }),
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    //'X-CSRFToken': cookie.load('csrftoken')
                  },
                }
                //fetch Statu == 200
                fetch('https://seedyapp.tk/users/authenticate', dataConnect)
                .then( res => {
                  if (res.status === 200) {
                    console.log('autenticate successfuly');
                    
                    // console.log(token)
                    // console.log(id.value)
                    // console.log(userId)
                    let dataDelete = {
                      method: 'DELETE',
                      credentials: 'same-origin',
                      mode: 'same-origin',
                      headers: {
                          'Accept': '*/*',
                          'Content-Type': 'application/json',
                          'Authorization': 'Bearer '+token,
                          // 'Authorization': 'Bearer '+tokenLocal,
                      },
                  }
                    
                  fetch(`https://seedyapp.tk/users/${userId}`, dataDelete)
                    .then( res => {
                      console.log(res.status)
                      if (res.status === 200) {
                          console.log('account deleted');

                        const clearStorage = async () => {
                          try {
                            await AsyncStorage.clear()
                            // console.log('Storage successfully cleared!')
                          } catch (e) {
                            // console.log('Failed to clear the async storage.')
                          }
                        }

                        console.log('purge connection');
                        clearStorage()
                        console.log('restart app');
                        NativeModules.DevSettings.reload();
                                
                      }else{
                        console.log('not authorized');
                      }
                    })
                            
                  }else{
                    console.log('not authorized');
                  }
                })
            }
            else{
              console.log('jeton pas ok')
            }
          }catch (e) {
          }
      }
    }catch (e) {
    }
  };

  return (
    <View style={styles.containerGlobal}>
      <Text style={styles.title}>Supprimer mon compte</Text>
      <Text style={styles.titleDeux}>Est-tu sûr(e)?</Text>
      <Text style={styles.txt}>
        La suppression de compte est irréversible, toutes les données seront
        supprimés, y compris l'abonnement auquel tu auras souscrit. S'il y'en a
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
      <TextInput
        style={styles.input}
        placeholder="Username"
        label="Username"
        returnKeyType="done"
        value={username.value}
        onChangeText={(text) => setUsername({value: text, error: ''})}
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
    paddingRight:40,
    paddingLeft:20,
  },
  input: {
    height: 70,
    backgroundColor: COLORS.white,
    marginTop: 30,
    width: '100%',
    borderRadius: 10,
    paddingLeft:30,
  },
  connexion: {
    marginTop: 80,
    alignItems: 'center',
    backgroundColor: COLORS.greenDark,
    borderRadius: 10,
    paddingVertical: 10,
    // paddingHorizontal: 120,
    width:"100%",
    fontWeight: 'bold',
    color: COLORS.white,
  },
  row: {width: '100%', alignItems: 'center', marginTop: 50},
  rowInput: {width: '100%', alignItems: 'center', marginTop: 20},
  txt: {width: '100%'},
  txtDeux: {width: '100%',marginTop: 50},

  link: {width: '45%', textAlign: 'right', color: COLORS.greenDark},
  forgot: {color: COLORS.greenLight},
});

export default Delete;

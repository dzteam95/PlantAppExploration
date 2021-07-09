import React, {useState, Component, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Alert, TouchableOpacity, AsyncStorage,
} from 'react-native';
import {COLORS, SIZES} from '../constants';


/*{const GardenType = async () => {

    const token = await AsyncStorage.getItem('id_token')

    const userId = await AsyncStorage.getItem('userId')

    const id_garden_type = await AsyncStorage.getItem('id_garden_type')



    let data = {
        method: 'GET',
        credentials: 'same-origin',
        mode: 'same-origin',
        headers: {
            'Accept': '*!/!*',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    }
    fetch(`https://seedyapp.tk/gardenstypes/`, data)
        .then((response) => response.json())
        .then((response) => {
            setResult(response)
            console.log("results:",response)
            return (response);
        })




}
useEffect(async() => {
    await GardenType()
    return
    [])
},*/


const AddParcelle = ({ navigation }) => {

  const [token, setToken] = useState({value: '', error: ''})
  const [userId, setUserId] = useState({value: '', error: ''})
  const [shape_area, setShape_area] = useState({ value: '', error: '' })
  const [size_l, setSize_l] = useState({ value: '', error: '' })
  const [size_y, setSize_y] = useState({ value: '', error: '' })
  const [size_c, setSize_c] = useState({ value: '', error: '' })
  const [size_d, setSize_d] = useState({ value: 0, error: '' })
  const [description, setDescription] = useState({ value: '', error: '' })

    const add =  async () => {
        const token =  await AsyncStorage.getItem('id_token')

        console.log("test:",token)

        const userId = await AsyncStorage.getItem('userId')
        console.log("idusertest:",userId)
        // console.log("size_l:",size_l)
        console.log("size_l:",size_l.value)

        let data = {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'same-origin',
            body: JSON.stringify({
                id_user:userId,
                shape_area:0,
                size_c:0,
                // size_c:size_c.value,
                size_d:size_d.value,
                // size_d:0,
                size_total:size_d.value*size_c.value,
                // size_total:0,
                size_total:size_d.value,
                // size_l:0,
                size_l:size_l.value,
                // size_y:0,
                size_y:size_y.value,
                // description:"description.value",
                description:description.value,
                id_garden_type:"60dcd4a8dfba4207d80744ee"
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token,

                //'X-CSRFToken': cookie.load('csrftoken')
            },
        }

        fetch('https://seedyapp.tk/gardens/register',data)
        .then((response) => {
          //Statut getted
          console.log(response.status);
          if (response.status === 200) {
            console.log('registred');

            navigation.reset({
              index: 0,
              routes: [{ name: 'Jardin' }],
            })

          }else{
            console.log('not registrer or contain error');
            //do nothing
          }
        })
  }



    return (
        <View style={styles.containerGlobal} >
          <View style={styles.row}>
            <TouchableOpacity onPress={() => navigation.navigate('Parcelles')}>
              <Text style={styles.txt}>Retour</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Créer une parcelle</Text>

          <TextInput style={styles.input}
                     placeholder="Type de jardin (nom)"
                     label="description"
                     returnKeyType="next"
                     value={description.value}
                     onChangeText={(text) => setDescription({ value: text, error: '' })}
          />
          <TextInput style={styles.input}
                     placeholder="Largeur (cm)"
                     label="size_l"
                     returnKeyType="next"
                     value={size_l.value}
                     onChangeText={(text) => setSize_l({ value: text, error: '' })}
          />
          <TextInput  style={styles.input}
                      placeholder="Hauteur (cm)"
                      label="size_y"
                      returnKeyType="next"
                      value={size_y.value}
                      onChangeText={(text) => setSize_y({ value: text, error: '' })}
          />
          {/* <TextInput  style={styles.input}
                      placeholder="Distance (cm)"
                      label="size_d"
                      returnKeyType="next"
                      value={size_d.value}
                      onChangeText={(text) => setSize_d({ value: text, error: '' })}
          /> */}

          <View style={styles.ajouter}>
            <Button color="#ffffff" title={"Ajouter"} mode="contained" onPress={add}/>
          </View>
        </View>
)
}

const styles = StyleSheet.create({

  title:{fontSize:SIZES.h1,margin:30},
  containerGlobal:{flex: 1, alignItems: 'center',width:'auto',height: 'auto',marginTop:30},
  input:{height:50,backgroundColor:COLORS.greenLight,width:'80%',borderRadius: 10,margin:30,paddingLeft:20,},
  ajouter:{alignItems: 'center', backgroundColor:COLORS.greenDark,borderRadius: 10, paddingVertical: 10,paddingHorizontal: 120,fontWeight: "bold",color:COLORS.white,marginTop:30},
  label: {textAlign:'center'},
  row:{marginTop:30},
  txt:{textAlign: 'left',marginLeft:0,},
})
export default AddParcelle

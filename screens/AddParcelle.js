import React, {useState,Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert, TouchableOpacity,
} from 'react-native';
import {COLORS, SIZES} from '../constants';




const AddParcelle = ({ navigation }) => {

  const [shape_area, setShape_area] = useState({ value: '', error: '' })
  const [size_l, setSize_l] = useState({ value: '', error: '' })
  const [size_y, setSize_y] = useState({ value: '', error: '' })
  const [size_c, setSize_c] = useState({ value: '', error: '' })
  const [size_d, setSize_d] = useState({ value: '', error: '' })
  const [description, setDescription] = useState({ value: '', error: '' })
  const add = () => {

    let data = {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'same-origin',
      body: JSON.stringify({
        shape_area:shape_area.value,
        size_l:size_l.value,
        size_y:size_y.value,
        size_c:size_c.value,
        size_d:size_d.value,
        description:description.value,

      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
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
              routes: [{ name: 'Parcelles' }],
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
            <TouchableOpacity onPress={() => navigation.replace('Parcelles')}>
              <Text style={styles.txt}>Retour</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Créer une parcelle</Text>
          <TextInput style={styles.input}
                     placeholder="shape_area"
                     label="shape_area"
                     returnKeyType="next"
                     value={shape_area.value}
                     onChangeText={(text) => setShape_area({ value: text, error: '' })}
          />
          <TextInput style={styles.input}
                     placeholder="size_l"
                     label="size_l"
                     returnKeyType="next"
                     value={size_l.value}
                     onChangeText={(text) => setSize_l({ value: text, error: '' })}
          />
          <TextInput  style={styles.input}
                      placeholder="size_y"
                      label="size_y"
                      returnKeyType="next"
                      value={size_y.value}
                      onChangeText={(text) => setSize_y({ value: text, error: '' })}
          />
          <TextInput  style={styles.input}
                      placeholder="size_c"
                      label="size_c"
                      returnKeyType="next"
                      value={size_c.value}
                      onChangeText={(text) => setSize_c({ value: text, error: '' })}
          />
          <TextInput  style={styles.input}
                      placeholder="size_d"
                      label="size_d"
                      returnKeyType="next"
                      value={size_d.value}
                      onChangeText={(text) => setSize_d({ value: text, error: '' })}
          />

          <View style={styles.ajouter}>
            <Button color="#ffffff" title={"ajouter"} mode="contained" onPress={add}/>
          </View>
        </View>
)
}

const styles = StyleSheet.create({

  title:{fontSize:SIZES.h1,margin:30},
  containerGlobal:{flex: 1, alignItems: 'center',width:'auto',height: 'auto',marginTop:30},
  input:{height:50,backgroundColor:COLORS.greenLight,width:'80%',borderRadius: 10,margin:30},
  enregistrer:{alignItems: 'center', backgroundColor:COLORS.greenDark,borderRadius: 10, paddingVertical: 10,paddingHorizontal: 120,fontWeight: "bold",color:COLORS.white,marginTop:30},
  Containercheckbox:{width:'100%',height:'auto',textAlign:'center', alignItems: 'center',margin:10},
  checkbox: {paddingVertical:10,paddingHorizontal: 10, alignItems: 'center',width:'auto',height:'auto',marginLeft:25,marginTop:5},
  label: {textAlign:'center'},
  row:{marginTop:30},
  txt:{textAlign: 'left',marginLeft:0,},
})
export default AddParcelle

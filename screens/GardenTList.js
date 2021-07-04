import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  FlatList,
  Image,
  Linking,
  ImageBackground,
  Button,
  Alert,
  ScrollView,
  setState,
  SectionList,
  AsyncStorage,
} from 'react-native';
import {COLORS} from '../constants';
import {Boarding1} from '../constants/images';
import {SunConseil} from '../constants/images';
import {WaterConseil} from '../constants/images';
import {SpaceConseil} from '../constants/images';
import {PHConseil} from '../constants/images';
import {ClimatConseil} from '../constants/images';
import {SizingConseil} from '../constants/images';
import {Floraison} from '../constants/images';
import {Germination} from '../constants/images';
import {Plus} from '../constants/images';
import {Fruit} from '../constants/images';
import {SemisExt, SemisInt, Plantation} from '../constants/images';

const GardenTList = ({route, navigation, props}) => {
  const [search, setSearch] = useState({value: '', error: ''});
  const [token, setToken] = useState({value: '', error: ''});
  const [result, setResult] = useState({value: '', error: ''});
  const [resultPlant, setResultPlant] = useState({value: '', error: ''});
  const [userId, setUserId] = useState({value: '', error: ''});
  const [plantsInfos, setPlantsInfos] = useState([]);
  const currentDay = new Date();
  const weekdays = [
    {id: 0, day: 'dimanche'},
    {id: 1, day: 'lundi'},
    {id: 2, day: 'mardi'},
    {id: 3, day: 'mercredi'},
    {id: 4, day: 'jeudi'},
    {id: 5, day: 'vendredi'},
    {id: 6, day: 'samedi'},
  ];
  const currentDayName = weekdays[currentDay.getDay()];
  // console.log(currentDayName);

  // const gardenId = "60d8661043c93c169deb6248";
  // console.log(route.params.item);
  useEffect(() => {
    readToken();
    // getParsedDate(currentDay)
    searchUserReminderFunction();
    return; /*(
            //readData()
        )*/
  }, []);

  searchUserReminderFunction = async () => {
    // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MGJkY2JhNDI0NWQxZjBiMDE0NDJlMjIiLCJpYXQiOjE2MjMzMTQyNDUsImV4cCI6MTYyMzkxOTA0NX0.F21DuctCC5oFKcl6_3iRQ05iaKH_t6KlsdE81Jdzbm8";
    let tokenLocal =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MGQ4MzhhM2RmYmE0MjA3ZDgwNzQ0YzAiLCJpYXQiOjE2MjQ3OTMxMzgsImV4cCI6MTYyNTM5NzkzOH0.aN0m390nMLqI3CIs3Av4BQ_1t5tSH8jyduwkW_dvNgE';
    let data = {
      method: 'GET',
      credentials: 'same-origin',
      mode: 'same-origin',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + tokenLocal,
        // 'Authorization': 'Bearer '+token,
        // 'Authorization': 'Bearer '+route.params.token,
      },
    };

    // fetch(`https://seedy.adnanenabil.com/plants/${itemId}`, data)
    // fetch(`http://localhost:4000/plantspositions/${gardenId}`, data)
    fetch(
        `http://localhost:4000/plantspositions/garden/${route.params.item}`,
        data,
    )
        // fetch(`https://seedyapp.tk/reminder/user/5f0b3c733aead305c2eec26d`, data)

        //Passertoken\

        .then((responsesearch) => responsesearch.json())
        .then((jsonsearch) => {
          // console.debug(jsonsearch);
          // console.log(jsonsearch);
          setResult(jsonsearch);

          for (var i = 0; i < jsonsearch.length; i++) {
            var obj = jsonsearch[i];

            for (var key in obj) {
              var value = obj[key];
              // console.log(key + " : " + value)
              if (key === 'id_plant') {
                // console.log([plantsInfos, {id_plant : value}, {id_plant : value}] )
                // console.log(key)
                // console.log(value)

                fetch(`http://localhost:4000/plants/${value}`, data)
                    // .then((responsesearch) => responsesearch.json())
                    .then((jsonsearch) => {
                      console.log(jsonsearch);
                      setPlantsInfos((plantsInfos) => [...plantsInfos, value]);
                    })
                    .catch((error) => console.error(error))
                    .finally(() => {
                      //this.setState({ isLoadingSearch: false });
                    });
              }
            }
          }

          // for (var i = 0; i < plantsInfos.length; i++){
          //     var obj = plantsInfos[i];

          //     for (var key in obj){
          //         var value = obj[key];
          //         // console.log(key + " : " + value)
          //         console.log(plantsInfos)
          //     }
          // }
          // fetch(`http://localhost:4000/plantspositions/garden/${route.params.item}`, data)
          // .then((responsesearch) => responsesearch.json())
          // .then((jsonsearch) => {
          //     console.log("yea")
          // })
          // .catch((error) => console.error(error))
          // .finally(() => {
          // //this.setState({ isLoadingSearch: false });
          // })
          // console.log(plantsInfos)
          //this.setState({ datasearch: jsonsearch.data.plant });
        })
        .catch((error) => console.error(error))
        .finally(() => {
          //this.setState({ isLoadingSearch: false });
        });
  };

  eventClickListener = (viewId) => {
    Alert.alert('Info', 'Passez par une fiche plante pour ajouter un rappel !');
    console.log('Date:' + currentDay);
  };

  // for (var i = 0; i < result.length; i++){
  //     var obj = result[i];

  //     for (var key in obj){
  //         var value = obj[key];
  //         if (key === "id_plant"){
  //             plantsInfos.push({"plant_id" : value})
  //             // plantsInfos.push({"plant_id" : value})
  //         }
  //     }
  // }
  const readToken = async () => {
    try {
      const userJeton = await AsyncStorage.getItem('id_token');
      if (userJeton !== null) {
        console.log('jeton ok ! : ', userJeton);
        setToken({
          value: userJeton,
        });
      } else {
        console.log('jeton pas ok');
      }
    } catch (e) {
      //alert('Failed to fetch the data from storage')
    }
    try {
      const userId = await AsyncStorage.getItem('userId');
      if (userId !== null) {
        console.log('userId ok ! : ', userId);
        setUserId({
          value: userId,
        });
      } else {
        console.log('userId pas ok');
      }
    } catch (e) {
      //alert('Failed to fetch the data from storage')
    }
  };

  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.name}>Rappels</Text>
            <TouchableOpacity onPress={() => this.eventClickListener('row')}>
              <Text style={styles.add}>+</Text>
            </TouchableOpacity>
            {/* <TextInput
                            style={styles.textInputStyle}
                            onChangeText={this.searchFilterFunction}
                            value={this.state.search}
                            underlineColorAndroid="transparent"
                            placeholder="Rechercher ... "
                        /> */}
          </View>
        </View>
        <SectionList
            sections={[{title: '', data: plantsInfos}]}
            renderItem={
              ({item}) => (
                  // <View>
                  <View style={styles.eventBox}>
                    <View style={styles.eventContent}>
                      <View style={styles.eventContentSec}>
                        <Text style={styles.eventTime}>id_plant {item.id_plant}</Text>
                      </View>
                      <View style={styles.eventContentSec}>
                        <Text style={styles.description}>
                          position_x {item.position_x} & position_y {item.position_y}
                        </Text>
                      </View>
                    </View>
                  </View>
              )
              // </View>
            }
            renderSectionHeader={({section}) => (
                <Text style={styles.sectionHeader}>{section.title}</Text>
            )}
            keyExtractor={(item, index) => index}
        />
        {/* <FlatList
                    enableEmptySections={true}
                    style={styles.eventList}
                    data={weekdays}
                    keyExtractor= {(item) => {
                        return item.id;
                    }}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity >
                                <View style={styles.eventDate}>
                                    <Text  style={styles.eventDay}>{item.day}</Text>
                                </View>
                                <FlatList
                                    enableEmptySections={true}
                                    style={styles.eventList}
                                    data={result}
                                    keyExtractor= {(item) => {
                                        return item.id;
                                    }}
                                    renderItem={({item}) => {
                                        return (
                                            <TouchableOpacity onPress={() => this.eventClickListener("row")}>
                                                <View style={styles.eventBox}>
                                                    <View style={styles.eventContent}>
                                                        <View style={styles.eventContentFirst}>
                                                            <Image style={styles.tinyLogo} source={{ uri: item.imghref,}}/>
                                                            <Text  style={styles.plante}>{item.plant} | {item.work}</Text>
                                                            <Image style={styles.tinyLogo} source={{ uri: item.imgwork,}}/>
                                                        </View>
                                                        <View style={styles.eventContentSec}>
                                                            <Text  style={styles.eventTime}>10:00 am - 10:45 am</Text>

                                                            <Text  style={styles.description}>Lorem ipsum dolor sit amet, elit consectetur</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                }}/>
                            </TouchableOpacity>
                        )
                    }}/> */}
      </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: '15%',
    height: '100%',
    borderRadius: 10,
  },

  eventList: {
    marginTop: 20,
  },
  eventBox: {
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
  },
  eventDate: {
    flexDirection: 'column',
  },
  eventDay: {
    marginLeft: 20,
    fontSize: 25,
    color: COLORS.gray,
    fontWeight: '600',
  },
  eventContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
  },
  eventContentFirst: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: 50,
  },
  eventContentSec: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: 20,
    marginTop: 10,
  },
  description: {
    fontSize: 15,
    color: '#646464',
  },
  eventTime: {
    fontSize: 18,
    color: '#151515',
  },
  plante: {
    left: 14,
    top: 14,
    fontSize: 16,
    color: '#151515',
    width: '70%',
  },

  headerContent: {
    marginTop: 50,
    padding: 30,
    flexDirection: 'row',
  },
  name: {
    fontSize: 22,
    color: '#222222',
    fontWeight: '900',
  },
  add: {
    paddingLeft: '60%',
    fontSize: 22,
    color: '#222222',
    fontWeight: '900',
  },
});

export default GardenTList;

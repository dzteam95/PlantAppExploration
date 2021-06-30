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

const Parcelles = ({route, navigation, props}) => {
    const [search, setSearch] = useState({value: '', error: ''});
    const [token, setToken] = useState({value: '', error: ''});
    const [result, setResult] = useState({value: '', error: ''});
    const [resultPlant, setResultPlant] = useState({value: '', error: ''});
    const [userId, setUserId] = useState({value: '', error: ''});



    useEffect(() => {
        readToken();
        // getParsedDate(currentDay)
        searchUserReminderFunction();
        return; /*(
            //readData()
        )*/
    }, []);

    searchUserReminderFunction = async () => {
        // Aller cehrcher tokenLocal dans le data storage
        let tokenLocal = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MGQ4MzhhM2RmYmE0MjA3ZDgwNzQ0YzAiLCJpYXQiOjE2MjUwMDIyMDksImV4cCI6MTYyNTYwNzAwOX0.7AIv9wJpCgtNkrQNE_Ot6Wqy0YTJTjvO1Nfc1PSJNOA';        // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MGQ4MzhhM2RmYmE0MjA3ZDgwNzQ0YzAiLCJpYXQiOjE2MjQ3OTMxMzgsImV4cCI6MTYyNTM5NzkzOH0.aN0m390nMLqI3CIs3Av4BQ_1t5tSH8jyduwkW_dvNgE";
        let data = {
            method: 'GET',
            credentials: 'same-origin',
            mode: 'same-origin',
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer '+token,
                Authorization: 'Bearer ' + tokenLocal,
            },
        };
        // Aller cehrcher useritemId dans le data storage
        useritemId = '60d838a3dfba4207d80744c0';
        // fetch(`https://seedy.adnanenabil.com/plants/${itemId}`, data)
        fetch(`https://seedyapp.tk/reminder/user/60d838a3dfba4207d80744c0`, data)
            // fetch(`https://seedyapp.tk/reminder/user/5f0b3c733aead305c2eec26d`, data)

            //Passertoken\

            .then((responsesearch) => responsesearch.json())
            .then((jsonsearch) => {
                // console.debug(jsonsearch);
                // console.log(jsonsearch);

                setResult(jsonsearch);
                //this.setState({ datasearch: jsonsearch.data.plant });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                //this.setState({ isLoadingSearch: false });
            });
    };

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
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.name}>Parcelles</Text>
                </View>
            </View>
            <SectionList
                sections={[{title: '', data: result}]}
                renderItem={
                    ({item}) => (
                        // <View>
                        <View style={styles.eventBox}>
                            <TouchableOpacity
                                style={styles.eventContent}
                                onPress={() =>
                                    navigation.replace('GardenTList', {
                                        item: item.id,
                                        tokenPass: token,
                                    })
                                }>
                                <View style={styles.eventContentSec}>
                                    <Text style={styles.eventTime}>{item.description}</Text>
                                </View>
                                <View style={styles.eventContentSec}>
                                    <Text style={styles.description}>{item.id}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }
                renderSectionHeader={({section}) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
                keyExtractor={(item, index) => index}
            />
            <View style={styles.add}>
                <Button
                    color="#ffffff"
                    title="Ajouter une parcelle"
                    onPress={() => navigation.replace('AddParcelle')}
                />
            </View>
        </ScrollView>


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
    add:{marginTop:20,alignItems: 'center', backgroundColor:COLORS.greenDark,borderRadius: 10, paddingVertical: 10,fontWeight: "bold",color:COLORS.white
    }
});

export default Parcelles;

import React, { Component,useState,useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';


const Conseils = ({ navigation }) => {
    const [search, setUsername] = useState({ value: 's', error: '' })
    const [token, setToken] = useState({ value: '', error: '' })
    const  text = '';

    useEffect(() => {
        readToken()
        return /*(
            //readData()
        )*/
    }, [])

    searchPlantFunction = (search) => {

        //Met a jour le event text
        setUsername({ search });
        const newHandleSearch = search;
        // console.log(search);
        console.log('Requette search is : ',newHandleSearch);        
        
        //copier apres lavoir fait dans conseil list
        //let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDZkYjc4YWMwM2Q2MDNlODMyM2U5ZmIiLCJpYXQiOjE2MTk4Nzc1ODAsImV4cCI6MTYyMDQ4MjM4MH0.s7gLXojBss557Afq4N5n8Ibo0OGBOJMIjqoVhVEJDsE';
        console.log(token.value)
        let data = {
			method: 'GET',
			credentials: 'same-origin',
			mode: 'same-origin',
			headers: {
				'Accept': '*/*',
				'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token.value,
            },
		}
        // fetch(`https://seedy.adnanenabil.com/v1/plants/name/${newHandleSearch}`, data)

        fetch(`https://seedy.adnanenabil.com/users/`, data)

        //Passertoken\
        
            .then((responsesearch) => responsesearch.json())
            .then((jsonsearch) => {
            // console.debug(jsonsearch);
            console.log(jsonsearch);
            //this.setState({ datasearch: jsonsearch.data.plant });
            })
            .catch((error) => console.error(error))
            .finally(() => {
            //this.setState({ isLoadingSearch: false });
            })
    }

    const readToken = async () => {
        try {
            const userJeton = await AsyncStorage.getItem('id_token')      
            if (userJeton !== null) {
                console.log('jeton ok')
                setToken({ 
                    value: userJeton,
                });
            }else{
                //console.log('jeton pas ok')
            }
        } catch (e) {
          //alert('Failed to fetch the data from storage')
        }  
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.name}>
                        Nos conseils & recettes
                    </Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.formContent}>
                    <View style={styles.inputContainer}>
                        <Image style={[styles.icon, styles.inputIcon]}/>
                        <TextInput
                            style={styles.inputs}
                            onChangeText={this.searchPlantFunction}
                            value={this.search}
                            underlineColorAndroid="transparent"
                            placeholder="Rechercher"
                        />
                    </View>
                    
                </View>
                <View style={styles.bodyContent}>

                    <TouchableOpacity style={styles.menuBox} onPress={() => navigation.replace('ConseilsList', { item: "glossaire"})}>
                        <Text style={styles.info}>Glossaire</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuBox} onPress={() => navigation.replace('ConseilsList', { item: "especes"})}>
                        <Text style={styles.info}>Fiches espèces</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuBox} onPress={() => navigation.replace('ConseilsList', { item: "tutosvideos"})}>
                        <Text style={styles.info}>Tutos vidéos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuBox} onPress={() => navigation.replace('ConseilsList', { item: "recettes"})}>
                        <Text style={styles.info}>Recettes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuBox} onPress={() => navigation.replace('ConseilsList', { item: "maladies"})}>
                        <Text style={styles.info}>Fiches maladies</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuBox} onPress={() => navigation.replace('ConseilsList', { item: "savoirfaire"})}>
                        <Text style={styles.info}>Fiches savoir-faire</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        padding:20,
    },
    inputs:{
        width:"100%",
    },
    headerContent:{
        marginTop: 50,
        paddingBottom:30,
    },
    name:{
        fontSize:22,
        color:"#222222",
        fontWeight:'900',
    },
    bodyContent:{
        flexWrap: "wrap",
        fontWeight: "900",
        width: 400 | "100%",
        height: 400 | "100%",

    },
    menuBox:{
        backgroundColor: "#ffffff",
        borderRadius:10,
        width:180,
        height:100,
        marginRight:10,
        marginTop:10,
        marginBottom:10,
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
            height:2,
            width:-2
        },
        elevation:4,
    },
    info:{
        fontSize:18,
        fontWeight:'300',
        color: "#222222",
        textAlign:'center',
        marginTop:30,

    },
    formContent:{
        flexDirection: 'row',
        marginTop:5,
        marginBottom:50,

    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:10,
        borderBottomWidth: 1,
        height:50,
        flexDirection: 'row',
        alignItems:'center',
        flex:1,
        marginTop:20,
    },
})

export default Conseils

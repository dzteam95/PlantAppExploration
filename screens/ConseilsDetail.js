import React, { useState,useEffect } from 'react';
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
    AsyncStorage,
} from 'react-native';
import {COLORS} from "../constants";
import {Boarding1} from "../constants/images";
import {SunConseil} from "../constants/images";
import {WaterConseil} from "../constants/images";
import {SpaceConseil} from "../constants/images";
import {PHConseil} from "../constants/images";
import {ClimatConseil} from "../constants/images";
import {SizingConseil} from "../constants/images";
import {Floraison} from "../constants/images";
import {Germination} from "../constants/images";
import {Plus} from "../constants/images";
import {Fruit} from "../constants/images";
import {SemisExt, SemisInt, Plantation} from "../constants/images";


const ConseilsDetail = ({route, navigation,  props }) => {
    // const data = [
    //         {id:1, name:'Rosier', slug:'Rosier', icon:'https://static.aujardin.info/cache/th/img9/rosa-fleur-600x450.webp' , url:"https://seedy.difego.fr" , desc:"Les roses sont cultivées depuis le moyen-âge, elles furent importées par les croisés en provenance de l'orient. C'est ensuite au XVIIIème siècle que les français commençèrent à les croiser pour créer de nouvelles variétés. Depuis, de nouvelles variétés de rosiers apparaissent tous les ans pendant que d'autres disparaissent.", description:"Cupidon s'étant approché un peu trop près des rosiers du jardin de l'Olympe que butinaient des abeilles, fut cruellement piqué. De chaque piqûre jaillit une goutte de sang qui transforma les fleurs blanches en fleurs vermeilles. Vénus, affolée, se précipita à son secours et, dans sa hâte, renversa le flacon d'odeurs qu'elle portait à la ceinture. Depuis ce jour, les roses sont parfumées… Histoire du rosier C'est au moyen-âge que les premières roses ont été cultivées, elles furent importées par les croisés en provenance de l'orient. C'est ensuite au XVIIIème siècle que les français commençèrent à les croiser pour créer de nouvelles variétés. Aujourd'hui encore, les français occupent la première place parmi les créateurs de roses. Il n'y qu'à citer leur nom que tout le monde connait; Delbard, Meilland, Guyot,... Sachez toutefois que vous ne pouvez pas multiplier leurs roses, sans autorisation. Les variétés de rosiers De nouvelles variétés de rosiers apparaissent tous les ans pendant que d'autres disparaissent. Il est impossible de toutes les décrire. Repérez au moment de la floraison les variétés qui vous plaisent, et achetez-les ensuite à la bonne saison. Visitez également les roseraies pour faire votre choix.Il existe différents type de rosiers : les rosiers arbustifs ou de paysage à utiliser dans les haies, en fond de massif ou isoléCupidon s'étant approché un peu trop près des rosiers du jardin de l'Olympe que butinaient des abeilles, fut cruellement piqué. De chaque piqûre jaillit une goutte de sang qui transforma les fleurs blanches en fleurs vermeilles. Vénus, affolée, se précipita à son secours et, dans sa hâte, renversa le flacon d'odeurs qu'elle portait à la ceinture. Depuis ce jour, les roses sont parfumées… Histoire du rosier C'est au moyen-âge que les premières roses ont été cultivées, elles furent importées par les croisés en provenance de l'orient. C'est ensuite au XVIIIème siècle que les français commençèrent à les croiser pour créer de nouvelles variétés. Aujourd'hui encore, les français occupent la première place parmi les créateurs de roses. Il n'y qu'à citer leur nom que tout le monde connait; Delbard, Meilland, Guyot,... Sachez toutefois que vous ne pouvez pas multiplier leurs roses, sans autorisation. Les variétés de rosiers De nouvelles variétés de rosiers apparaissent tous les ans pendant que d'autres disparaissent. Il est impossible de toutes les décrire. Repérez au moment de la floraison les variétés qui vous plaisent, et achetez-les ensuite à la bonne saison. Visitez également les roseraies pour faire votre choix.Il existe différents type de rosiers : les rosiers arbustifs ou de paysage à utiliser dans les haies, en fond de massif ou isolé"},
    //         ];
    const [search, setSearch] = useState({ value: '', error: '' })
    const [token, setToken] = useState({ value: '', error: '' })
    const [result, setResult] = useState({ value: '', error: '' })
    const [isP, setIsP] = useState({ value: '', error: '' })
    const [userId, setUserId] = useState({ value: '', error: '' })
    // const { itemId } = 1;
    // const { itemId } = '6098fe7cc03d603e8323ea04';
    const { itemId } = route.params.item;
    // console.log("route.params",route.params.item);
    // Cette liaison est nécéssaire afin de permettre
    // // l'utilisation de `this` dans la fonction de rappel.
    // const handleClick = handleClick.bind(this);

    // const id = JSON.stringify(itemId)-1;
    //fetch
    useEffect(() => {
        readToken()
        searchPlantBasicDetailFunction()
        return /*(
            //readData()
        )*/
    }, [])

    // const readToken = async () => {
    //     try {
    //         const userJeton = await AsyncStorage.getItem('id_token')      
    //         if (userJeton !== null) {
    //             console.log('jeton ok !')
    //             setToken({ 
    //                 value: userJeton,
    //             });
    //         }else{
    //             //console.log('jeton pas ok')
    //         }
    //     } catch (e) {
    //       //alert('Failed to fetch the data from storage')
    //     }  
    // }

    searchPlantBasicDetailFunction = async () => {

        //Met a jour le event text
        // setSearch({ search });
        // const newHandleSearch = search;
        // console.log(search);
        // console.log('Requette search is : ',route.params.item);  
        // console.log('Requette search is : ',route.params.tokenPass.value);        
        
        //copier apres lavoir fait dans conseil list
        //let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDZkYjc4YWMwM2Q2MDNlODMyM2U5ZmIiLCJpYXQiOjE2MTk4Nzc1ODAsImV4cCI6MTYyMDQ4MjM4MH0.s7gLXojBss557Afq4N5n8Ibo0OGBOJMIjqoVhVEJDsE';
        // console.log(token.value)
        // console.log(route.params.tokenPass.value)
        let data = {
			method: 'GET',
			credentials: 'same-origin',
			mode: 'same-origin',
			headers: {
				'Accept': '*/*',
				'Content-Type': 'application/json',
                'Authorization': 'Bearer '+route.params.tokenPass.value,
            },
		}

        // fetch(`https://seedy.adnanenabil.com/plants/${itemId}`, data)
        fetch(`https://seedy.adnanenabil.com/plants/${route.params.item}`, data)

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
            })
    }
    // const result = data[0];
    // console.log(result);
    eventClickListener = (viewId,title,desc,date) => {
        //local
        let tokenPass = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MGJkY2JhNDI0NWQxZjBiMDE0NDJlMjIiLCJpYXQiOjE2MjMzMTQyNDUsImV4cCI6MTYyMzkxOTA0NX0.F21DuctCC5oFKcl6_3iRQ05iaKH_t6KlsdE81Jdzbm8";
        // console.log(date);
        // get current date
        var currentdate = new Date().getDate();
        var currentmonth = new Date().getMonth() + 1;
        var currentyear = new Date().getFullYear();
        
        var currentCompleteDate = currentyear+"-"+currentmonth+"-"+currentdate+"T09:11:00.045Z";
        
        let requiredmonth = date.split('-')[1].trim();
        let requireddate = date.split('-')[0].trim();
        
        // console.log(requiredmonth);
        // console.log(currentmonth);

        if (requiredmonth < currentmonth){
            // console.log("requiredmonth < currentmonth");
            let requiredyear = currentyear+1;
            var requiredCompleteDate = requiredyear+"-"+requiredmonth+"-"+requireddate+"T09:11:00.045Z";
            // console.log(requiredCompleteDate);
        }
        else if (requiredmonth > currentmonth){
            // console.log("requiredmonth > currentmonth");
            var requiredCompleteDate = currentyear+"-"+requiredmonth+"-"+requireddate+"T09:11:00.045Z";
            // console.log(requiredCompleteDate);
        }
        else {
            // console.log("requiredmonth = currentmonth");
            if (requireddate < currentdate){
                // console.log("requireddate < currentdate");
                let requiredyear = currentyear+1;
                var requiredCompleteDate = requiredyear+"-"+requiredmonth+"-"+requireddate+"T09:11:00.045Z";
                // console.log(requiredCompleteDate);
            }
            else if (requireddate > currentdate){
                // console.log("requireddate < currentdate");
                var requiredCompleteDate = currentyear+"-"+requiredmonth+"-"+requireddate+"T09:11:00.045Z";
                // console.log(requiredCompleteDate);
            }
            else {
                // console.log("requireddate = currentdate");
                Alert.alert("C'est le moment de le faire !");
                let requireddate = currentdate+1;
                var requiredCompleteDate = currentyear+"-"+requiredmonth+"-"+requireddate+"T09:11:00.045Z";
            }
        }
        // console.log(currentDate);
        
        let data = {
			method: 'POST',
			credentials: 'same-origin',
			mode: 'same-origin',
			body: JSON.stringify({
                //local
				id_plant: "5f0b3c733aead305c2eec26d",
				// id_plant: result.id,
                //local
                id_user: "5f0b3c733aead305c2eec26d",
                // id_user: userId.value,
                title: title,
                description: desc,
                actionDate: requiredCompleteDate,
                mode: "ON"

			}),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
                //local
                'Authorization': 'Bearer '+tokenPass,
                // 'Authorization': 'Bearer '+route.params.tokenPass.value,
			},
		}
		// console.log(userId.value);
        //local
		fetch('http://localhost:4000/reminder/register',data)
		// fetch('https://seedy.adnanenabil.com/reminder/register',data)
		.then((response) => {
			//Statut getted
			console.log(response.status);
			if (response.status === 200) {
				Alert.alert("Rappel ajouté !");
				// Alert.alert("Rappel ajouté !",result.name);
                // console.log('registred');
				
				// navigation.reset({
				// 	index: 0,
				// 	routes: [{ name: 'Welcome' }],
				// })
			  
			}else{
                Alert.alert("Erreur lors de l'ajout du rappel...");
				// console.log('not registrer or contain error');
				//do nothing
			}
		  })
    }

    const readToken = async () => {
        try {
            const userIsP = await AsyncStorage.getItem('isP')      
            if (userIsP !== null) {
                console.log('isP ok ? : ',userIsP)
                setIsP({ 
                    value: userIsP,
                });
            }else{
                console.log('jeton pas ok')
            }
        } catch (e) {
          //alert('Failed to fetch the data from storage')
        }  
        try {
            const userId = await AsyncStorage.getItem('userId')      
            if (userId !== null) {
                console.log('userId ok ? : ',userId)
                setUserId({ 
                    value: userId,
                });
            }else{
                console.log('userId pas ok')
            }
        } catch (e) {
          //alert('Failed to fetch the data from storage')
        }  
    }

    const [isEnabledGuideOne, setIsEnabledGuideOne] = useState(true);
    const [isEnabledGuideTwo, setIsEnabledGuideTwo] = useState(true);
    const [isEnabledGuideThr, setIsEnabledGuideThr] = useState(true);
    const [isEnabledGuideFou, setIsEnabledGuideFou] = useState(true);
        const toggleSwitchGuideOne = () => setIsEnabledGuideOne(previousState => !previousState);
        const toggleSwitchGuideTwo = () => setIsEnabledGuideTwo(previousState => !previousState);
        const toggleSwitchGuideThr = () => setIsEnabledGuideThr(previousState => !previousState);
        const toggleSwitchGuideFou = () => setIsEnabledGuideFou(previousState => !previousState);
    

    const [isEnabledMenu, setIsEnabledMenu] = useState(1);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.name}>
                        {result.name}
                    </Text>
                </View>
            </View>
            <View style={styles.body}>
                <ImageBackground style={styles.bodyContent} /*source={{ uri: result.icon,}}*/>
                    <ScrollView style={styles.eventList} >
                        <View>
                            <View style={styles.eventContentHead}>
                                <Image style={styles.presentationLogo} source={{ uri: result.photourl,}}/>
                                <View >
                                    <Text style={styles.infoPlantName}>{result.name}</Text>
                                    <Text style={styles.infoFamily}>{result.name}</Text>
                                    <Text style={styles.infoFamily}>Famille : {result.name}</Text>
                                </View>
                            </View>
                            <View style={styles.menuRow}>
                                {/* General */}
                                <View style={styles.menuBoxButton} >
                                    <TouchableOpacity 
                                        style={isEnabledMenu==1? styles.buttonContainer : styles.containerLight}
                                        onPress={() => setIsEnabledMenu(1)}
                                    >
                                        <View style={styles.eventContentFirst}>
                                            <Text style={isEnabledMenu==1? styles.infoMenuW : styles.infoMenuB}>General</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View> 
                                {/* Guide de Culture */} 
                                <View style={styles.menuBoxButton} >
                                    <TouchableOpacity 
                                        style={isEnabledMenu==2? styles.buttonContainer : styles.containerLight}
                                        onPress={() => setIsEnabledMenu(2)}
                                    >
                                        <View style={styles.eventContentFirst}>
                                            <Text style={isEnabledMenu==2? styles.infoMenuW : styles.infoMenuB}>Guide de Culture</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                {/* Calendrier */}
                                <View style={styles.menuBoxButton} >    
                                    <TouchableOpacity 
                                        style={isEnabledMenu==3? styles.buttonContainer : styles.containerLight}
                                        onPress={() => setIsEnabledMenu(3)}
                                    >
                                        <View style={styles.eventContentFirst}>
                                            <Text style={isEnabledMenu==3? styles.infoMenuW : styles.infoMenuB}>Calendrier</Text>
                                        </View>
                                        {/* here the content of the section */}
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        {/* here the content of the section General */}
                        <View style={isEnabledMenu==1? styles.buttonContainerE : styles.containerSuperLight} >
                            <View style={styles.menuBox} >
                                <View 
                                    style={styles.containerLight}
                                    >
                                    <View style={styles.eventContentFirst}>
                                        <Image style={styles.tinyLogoGeneral} source={SunConseil}/>
                                        <Text style={styles.infoGeneral}>Besoin en soleil</Text>
                                        <Text style={styles.infoSun}>{this.isP === "p" ? result.sun : "Info Premium"}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.menuBox} >
                                <View 
                                    style={styles.containerLight}
                                    >
                                    <View style={styles.eventContentFirst}>
                                        <Image style={styles.tinyLogoGeneral} source={WaterConseil}/>
                                        <Text style={styles.infoGeneral}>Besoin en eau</Text>
                                        <Text style={styles.infoWater}>{this.isP === "p" ? result.water : "Info Premium"}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.menuBox} >
                                <View 
                                    style={styles.containerLight}
                                    >
                                    <View style={styles.eventContentFirst}>
                                        <Image style={styles.tinyLogoGeneral} source={SpaceConseil}/>
                                        <Text style={styles.infoGeneral}>Distanciation au sol</Text>
                                        <Text style={styles.info}>{this.isP === "p" ? (result.zone_range+" x "+result.zone_range+" cm")  : "Info Premium"}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.menuBox} >
                                <View 
                                    style={styles.containerLight}
                                    >
                                    <View style={styles.eventContentFirst}>
                                        <Image style={styles.tinyLogoGeneral} source={SizingConseil}/>
                                        <Text style={styles.infoGeneral}>Dimensions</Text>
                                        <Text style={styles.info}>{result.weight} cm</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.menuBox} >
                                <View 
                                    style={styles.containerLight}
                                    >
                                    <View style={styles.eventContentFirst}>
                                        <Image style={styles.tinyLogoGeneral} source={PHConseil}/>
                                        <Text style={styles.infoGeneral}>Ph</Text>
                                        <Text style={styles.infoPH}>{this.isP === "p" ? result.soil_ph : "Info Premium"}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.menuBox} >
                                <View 
                                    style={styles.containerLight}
                                    >
                                    <View style={styles.eventContentFirst}>
                                        <Image style={styles.tinyLogoGeneral} source={ClimatConseil}/>
                                        <Text style={styles.infoGeneral}>Climat</Text>
                                        <Text style={styles.infoClimat}>{result.zone}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* here the content of the section Guide */}
                        <View style={isEnabledMenu==2? styles.buttonContainerE : styles.containerSuperLight} >
                            <View style={styles.menuBox} >
                                <TouchableOpacity 
                                    style={isEnabledGuideOne? styles.containerLight : styles.buttonContainerE}
                                    onPress={toggleSwitchGuideOne}
                                    >
                                    <View style={styles.eventContentFirst}>
                                        <Image style={styles.tinyLogo} source={Germination}/>
                                        <Text style={styles.infoName}>Germinaison</Text>
                                        <Image style={styles.tinyLogo} source={{ uri: "https://cdn4.iconfinder.com/data/icons/navigation-40/24/chevron-down-512.png"}}/>
                                    </View>
                                </TouchableOpacity>
                                <View style={isEnabledGuideOne? styles.containerLightCard : styles.buttonContainerE}>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContent}>
                                            <Text style={styles.infoGuideSpe}>{result.description_Germination}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.GuideTrait}>                                          
                                        </View>
                                    </View>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContentGuideL}>
                                            <Text style={styles.infoGuideSpe}>Arrosage</Text>
                                        </View>
                                        <View style={styles.eventContentGuideR}>
                                            <Image style={styles.tinyLogoGuide} source={Plus}/>
                                            <Text style={styles.infoGuideR} onPress={() => this.eventClickListener("row","Arrosez les "+result.name+"s","Il est temps d'agir !",result.description_Germination_Arrosage_date)}>Rappel</Text>                                           
                                        </View>
                                    </View>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContent}>
                                            <Text style={styles.infoGuideSpe}>{result.description_Germination_Arrosage}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.menuBox} >
                                <TouchableOpacity 
                                    style={isEnabledGuideTwo? styles.containerLight : styles.buttonContainerE}
                                    onPress={toggleSwitchGuideTwo}
                                    >
                                    <View style={styles.eventContentFirst}>
                                        <Image style={styles.tinyLogo} source={SizingConseil}/>
                                        <Text style={styles.infoName}>Croissance</Text>
                                        <Image style={styles.tinyLogo} source={{ uri: "https://cdn4.iconfinder.com/data/icons/navigation-40/24/chevron-down-512.png"}}/>
                                    </View>
                                </TouchableOpacity>
                                <View style={isEnabledGuideTwo? styles.containerLightCard : styles.buttonContainerE}>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContent}>
                                            <Text style={styles.infoGuideSpe}>{result.description_Croissance}</Text>
                                        </View>
                                    </View>
                                    {/* Liste */}
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.GuideTrait}>                                          
                                        </View>
                                    </View>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContentGuideL}>
                                            <Text style={styles.infoGuideSpe}>Sélection des plantes</Text>
                                        </View>
                                        <View style={styles.eventContentGuideR}>
                                            <Image style={styles.tinyLogoGuide} source={Plus}/>
                                            <Text style={styles.infoGuideR} onPress={() => this.eventClickListener("row","C'est le moment de selectionner ses futurs "+result.name+"s","Il est temps d'agir !",result.description_Croissance_Selection_date)}>Rappel</Text>                                           
                                        </View>
                                    </View>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContent}>
                                            <Text style={styles.infoGuideSpe}>{result.description_Croissance_Selection}</Text>
                                        </View>
                                    </View>
                                    {/* Liste  */}
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.GuideTrait}>                                          
                                        </View>
                                    </View>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContentGuideL}>
                                            <Text style={styles.infoGuideSpe}>Arrosage</Text>
                                        </View>
                                        <View style={styles.eventContentGuideR}>
                                            <Image style={styles.tinyLogoGuide} source={Plus}/>
                                            <Text style={styles.infoGuideR} onPress={() => this.eventClickListener("row","Arrosez les "+result.name+"s","Il est temps d'agir !",result.description_Croissance_Arrosage_date)}>Rappel</Text>                                           
                                        </View>
                                    </View>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContent}>
                                            <Text style={styles.infoGuideSpe}>{result.description_Croissance_Arrosage}</Text>
                                        </View>
                                    </View>
                                    {/* Liste  */}
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.GuideTrait}>                                          
                                        </View>
                                    </View>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContentGuideL}>
                                            <Text style={styles.infoGuideSpe}>Plantation</Text>
                                        </View>
                                        <View style={styles.eventContentGuideR}>
                                            <Image style={styles.tinyLogoGuide} source={Plus}/>
                                            <Text style={styles.infoGuideR} onPress={() => this.eventClickListener("row","Plantez les "+result.name+"s","Il est temps d'agir !",result.description_Croissance_Plantation_date)}>Rappel</Text>                                           
                                        </View>
                                    </View>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContent}>
                                            <Text style={styles.infoGuideSpe}>{result.description_Croissance_Plantation}</Text>
                                        </View>
                                    </View>
                                    {/* Liste  */}
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.GuideTrait}>                                          
                                        </View>
                                    </View>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContentGuideL}>
                                            <Text style={styles.infoGuideSpe}>Paillage</Text>
                                        </View>
                                        <View style={styles.eventContentGuideR}>
                                            <Image style={styles.tinyLogoGuide} source={Plus}/>
                                            <Text style={styles.infoGuideR} onPress={() => this.eventClickListener("row","Paillez les "+result.name+"s","Il est temps d'agir !",result.description_Croissance_Paillage_date)}>Rappel</Text>                                           
                                        </View>
                                    </View>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContent}>
                                            <Text style={styles.infoGuideSpe}>{result.description_Croissance_Paillage}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.menuBox} >
                                <TouchableOpacity 
                                    style={isEnabledGuideThr? styles.containerLight : styles.buttonContainerE}
                                    onPress={toggleSwitchGuideThr}
                                    >
                                    <View style={styles.eventContentFirst}>
                                        <Image style={styles.tinyLogo} source={Floraison}/>
                                        <Text style={styles.infoName}>Floraison</Text>
                                        <Image style={styles.tinyLogo} source={{ uri: "https://cdn4.iconfinder.com/data/icons/navigation-40/24/chevron-down-512.png"}}/>
                                    </View>
                                </TouchableOpacity>
                                <View style={isEnabledGuideThr? styles.containerLightCard : styles.buttonContainerE}>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContent}>
                                            <Text style={styles.infoGuideSpe}>{result.description_Floraison}</Text>
                                        </View>
                                    </View>
                                    {/* Liste */}
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.GuideTrait}>                                          
                                        </View>
                                    </View>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContentGuideL}>
                                            <Text style={styles.infoGuideSpe}>1ière taille</Text>
                                        </View>
                                        <View style={styles.eventContentGuideR}>
                                            <Image style={styles.tinyLogoGuide} source={Plus}/>
                                            <Text style={styles.infoGuideR} onPress={() => this.eventClickListener("row","C'est la première taille des "+result.name+"s","Il est temps d'agir !",result.description_Floraison_Un_date)}>Rappel</Text>                                           
                                        </View>
                                    </View>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContent}>
                                            <Text style={styles.infoGuideSpe}>{result.description_Floraison_Un}</Text>
                                        </View>
                                    </View>
                                    {/* Liste */}
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.GuideTrait}>                                          
                                        </View>
                                    </View>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContentGuideL}>
                                            <Text style={styles.infoGuideSpe}>Arrosage</Text>
                                        </View>
                                        <View style={styles.eventContentGuideR}>
                                            <Image style={styles.tinyLogoGuide} source={Plus}/>
                                            <Text style={styles.infoGuideR} onPress={() => this.eventClickListener("row","Arrosez les "+result.name+"s","Il est temps d'agir !",result.description_Floraison_Arrosage_date)}>Rappel</Text>                                           
                                        </View>
                                    </View>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContent}>
                                            <Text style={styles.infoGuideSpe}>{result.description_Floraison_Arrosage}</Text>
                                        </View>
                                    </View>
                                    {/* Liste */}
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.GuideTrait}>                                          
                                        </View>
                                    </View>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContentGuideL}>
                                            <Text style={styles.infoGuideSpe}>2ième taille</Text>
                                        </View>
                                        <View style={styles.eventContentGuideR}>
                                            <Image style={styles.tinyLogoGuide} source={Plus}/>
                                            <Text style={styles.infoGuideR} onPress={() => this.eventClickListener("row","C'est la seconde taille des "+result.name+"s","Il est temps d'agir !",result.description_Floraison_Deux_date)}>Rappel</Text>                                           
                                        </View>
                                    </View>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContent}>
                                            <Text style={styles.infoGuideSpe}>{result.description_Floraison_Deux}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.menuBox} >
                                <TouchableOpacity 
                                    style={isEnabledGuideFou? styles.containerLight : styles.buttonContainerE}
                                    onPress={toggleSwitchGuideFou}
                                    >
                                    <View style={styles.eventContentFirst}>
                                        <Image style={styles.tinyLogo} source={Fruit}/>
                                        <Text style={styles.infoName}>Production</Text>
                                        <Image style={styles.tinyLogo} source={{ uri: "https://cdn4.iconfinder.com/data/icons/navigation-40/24/chevron-down-512.png"}}/>
                                    </View>
                                </TouchableOpacity>
                                <View style={isEnabledGuideFou? styles.containerLightCard : styles.buttonContainerE}>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContent}>
                                            <Text style={styles.infoGuideSpe}>{result.description_Production}</Text>
                                        </View>
                                    </View>
                                    {/* Liste */}
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.GuideTrait}>                                          
                                        </View>
                                    </View>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContentGuideL}>
                                            <Text style={styles.infoGuideSpe}>Arrosage</Text>
                                        </View>
                                        <View style={styles.eventContentGuideR}>
                                            <Image style={styles.tinyLogoGuide} source={Plus}/>
                                            <Text style={styles.infoGuideR} onPress={() => this.eventClickListener("row","Arrosez les "+result.name+"s","Il est temps d'agir !",result.description_Production_Arrosage_date)}>Rappel</Text>                                           
                                        </View>
                                    </View>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContent}>
                                            <Text style={styles.infoGuideSpe}>{result.description_Production_Arrosage}</Text>
                                        </View>
                                    </View>
                                    {/* Liste */}
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.GuideTrait}>                                          
                                        </View>
                                    </View>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContentGuideL}>
                                            <Text style={styles.infoGuideSpe}>Récolte</Text>
                                        </View>
                                        <View style={styles.eventContentGuideR}>
                                            <Image style={styles.tinyLogoGuide} source={Plus}/>
                                            <Text style={styles.infoGuideR} onPress={() => this.eventClickListener("row","Récoltez les "+result.name+"s","Il est temps d'agir !",result.description_Production_Recolte_date)}>Rappel</Text>                                           
                                        </View>
                                    </View>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContent}>
                                            <Text style={styles.infoGuideSpe}>{result.description_Production_Recolte}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.actionRedirection} >
                                        <TouchableOpacity style={styles.linkB} >
                                            <Text style={styles.infoRedirect} onPress={() => Linking.openURL(result.url_link)}>
                                                Voir les recettes
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* here the content of the section Calendar */}
                        <View style={isEnabledMenu==3? styles.buttonContainerE : styles.containerSuperLight} >
                            <View style={styles.menuBox} >
                                <View style={styles.containerLight} >
                                    <View style={styles.eventContentFirst}>
                                        <Image style={styles.tinyLogo} source={SemisInt}/>
                                        <Text style={styles.infoName}>Semis d'interieur</Text>
                                        <Image style={styles.tinyLogoReminder} source={Plus}/>
                                        <Text style={styles.infoGuideReminder} onPress={() => this.eventClickListener("row","Plantez en intérieur les "+result.name+"s","Il est temps d'agir !",result.reminder_txt_semis_inte_from)}>Rappel</Text>
                                        {/* <Image style={styles.tinyLogo} source={{ uri: "https://cdn4.iconfinder.com/data/icons/navigation-40/24/chevron-down-512.png"}}/> */}
                                    </View>
                                </View>
                                <View style={styles.buttonContainerE}>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContent}>
                                            <Text style={styles.infoGuideSpe}>De {result.reminder_txt_semis_inte_from} à {result.reminder_txt_semis_inte_to}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.menuBox} >
                                <View style={styles.containerLight} >
                                    <View style={styles.eventContentFirst}>
                                        <Image style={styles.tinyLogo} source={SemisExt}/>
                                        <Text style={styles.infoName}>Semis d'extérieur</Text>
                                        <Image style={styles.tinyLogoReminder} source={Plus}/>
                                        <Text style={styles.infoGuideReminder} onPress={() => this.eventClickListener("row","Plantez en intérieur les "+result.name+"s","Il est temps d'agir !",result.reminder_txt_semis_exte_from)}>Rappel</Text>
                                        {/* <Image style={styles.tinyLogo} source={{ uri: "https://cdn4.iconfinder.com/data/icons/navigation-40/24/chevron-down-512.png"}}/> */}
                                    </View>
                                </View>
                                <View style={styles.buttonContainerE}>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContent}>
                                            <Text style={styles.infoGuideSpe}>De {result.reminder_txt_semis_exte_from} à {result.reminder_txt_semis_exte_to}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.menuBox} >
                                <View style={styles.containerLight} >
                                    <View style={styles.eventContentFirst}>
                                        <Image style={styles.tinyLogo} source={Plantation}/>
                                        <Text style={styles.infoName}>Plantation</Text>
                                        <Image style={styles.tinyLogoReminder} source={Plus}/>
                                        <Text style={styles.infoGuideReminder} onPress={() => this.eventClickListener("row","Plantez les "+result.name+"s","Il est temps d'agir !",result.reminder_txt_plantation_from)}>Rappel</Text>
                                        {/* <Image style={styles.tinyLogo} source={{ uri: "https://cdn4.iconfinder.com/data/icons/navigation-40/24/chevron-down-512.png"}}/> */}
                                    </View>
                                </View>
                                <View style={styles.buttonContainerE}>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContent}>
                                            <Text style={styles.infoGuideSpe}>De {result.reminder_txt_plantation_from} à {result.reminder_txt_plantation_to}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.menuBox} >
                                <View style={styles.containerLight} >
                                    <View style={styles.eventContentFirst}>
                                        <Image style={styles.tinyLogo} source={Floraison}/>
                                        <Text style={styles.infoName}>Floraison</Text>
                                        <Image style={styles.tinyLogoReminder} source={Plus}/>
                                        <Text style={styles.infoGuideReminder} onPress={() => this.eventClickListener("row","C'est la floraison de vos "+result.name+"s","Ne les manquez pas !",result.reminder_txt_floraison_from)}>Rappel</Text>
                                        {/* <Image style={styles.tinyLogo} source={{ uri: "https://cdn4.iconfinder.com/data/icons/navigation-40/24/chevron-down-512.png"}}/> */}
                                    </View>
                                </View>
                                <View style={styles.buttonContainerE}>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContent}>
                                            <Text style={styles.infoGuideSpe}>De {result.reminder_txt_floraison_from} à {result.reminder_txt_floraison_to}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.menuBox} >
                                <View style={styles.containerLight} >
                                    <View style={styles.eventContentFirst}>
                                        <Image style={styles.tinyLogo} source={Fruit}/>
                                        <Text style={styles.infoName}>Récolte</Text>
                                        <Image style={styles.tinyLogoReminder} source={Plus}/>
                                        <Text style={styles.infoGuideReminder} onPress={() => this.eventClickListener("row","Récoltez les "+result.name+"s","Il est temps d'agir !",result.reminder_txt_recolte_from)}>Rappel</Text>
                                        {/* <Image style={styles.tinyLogo} source={{ uri: "https://cdn4.iconfinder.com/data/icons/navigation-40/24/chevron-down-512.png"}}/> */}
                                    </View>
                                </View>
                                <View style={styles.buttonContainerE}>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContent}>
                                            <Text style={styles.infoGuideSpe}>De {result.reminder_txt_recolte_from} à {result.reminder_txt_recolte_to}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View> 
                    </ScrollView>
                </ImageBackground>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    actionRedirection:{
        // flex:1,
        // width:"100%",
        flexDirection: 'row',
        alignItems: 'flex-start',
        height:50,
        padding:20,
        paddingBottom:100,
    },
    linkB:{
        flex:1,
        backgroundColor: COLORS.greenDark,
        borderRadius:10,
        margin:10,
        height:60,
    },
    infoRedirect:{
        fontSize:14,
        fontWeight:'500',
        color: "#ffffff",
        textAlign:'center',
        marginTop:25,
    },


    infoRedirectR:{
        fontSize:14,
        fontWeight:'500',
        color: "#151515",
        textAlign:'center',
        marginTop:40,
    },
    infoRedirectB:{
        fontSize:14,
        fontWeight:'500',
        color: "#ffffff",
        textAlign:'center',
        marginTop:20,
    },
    GuideTrait:{
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        width:"85%",
        marginLeft: 20,
    },
    infoFamily:{
        fontSize:10,
        fontWeight:'400',
        color: "#151515",
        // textAlign:'left',
        marginTop:5,
        paddingLeft:20,
    },
    infoClimat:{
        fontSize:14,
        fontWeight:'500',
        color: "#2112E1",
        // textAlign:'left',
        marginTop:20,
        paddingLeft:20,
    },
    infoPH:{
        fontSize:14,
        fontWeight:'500',
        color: "#E109C3",
        // textAlign:'left',
        marginTop:20,
        paddingLeft:20,
    },
    infoWater:{
        fontSize:14,
        fontWeight:'500',
        color: "#12CBE1",
        // textAlign:'left',
        marginTop:20,
        paddingLeft:20,
    },
    infoSun:{
        fontSize:14,
        fontWeight:'500',
        color: "#E1BF0E",
        // textAlign:'left',
        marginTop:20,
        paddingLeft:20,
    },
    containerLight:{
        height:60,
        overflow:"hidden",
    },
    containerLightCard:{
        height:0,
        overflow:"hidden",
    },
    buttonContainer:{
        height:70,
        overflow:"hidden",
        backgroundColor: COLORS.greenDark,
        borderRadius:10,
    },
    containerSuperLight:{
        height:0,
        overflow:"hidden",
    },
    btnSelected: {
        backgroundColor:"#fff"
    },
    notSelected : {
        backgroundColor:"#000"
    },
    container:{
        // backgroundColor:"#000000",
    },
    menuRow:{
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: "#fff",
        borderRadius:10,
        margin:10,
    },
    presentationLogo:{
        width: 80,
        height: 80,
        borderRadius:10,
        marginLeft:10,
        marginBottom:20,
    },
    tinyLogo: {
        width: 20,
        height: 20,
        // borderRadius:10,
        margin:20,
    },
    tinyLogoReminder: {
        width: 20,
        height: 20,
        // borderRadius:10,
        marginTop:20,
    },
    tinyLogoGuide:{
        maxHeight:19,
        maxWidth:19,
        width: 20,
        height: 20,
        flex:1,
        // borderRadius:10,
        // margin:20,
    },
    
    tinyLogoGeneral: {
        // width: 20,
        // height: 20,
        // borderRadius:10,
        margin:20,
        // maxWidth: '60%',
        // height: '10%',
    },
    headerContent:{
        marginTop: 50,
        padding:20,
    },
    name:{
        fontSize:22,
        color:"#222222",
        fontWeight:'900',
        paddingLeft:10,
    },
    body: {
        // flex: 2,
        height: "85%",
    },
    bodyContent:{
        // flexWrap: "wrap",
        paddingLeft:20,
        paddingRight:20,
        fontWeight: "900",
        // width: 400 | "100%",
        height: "100%",
    },
    menuBox:{
        backgroundColor: "#fff",
        borderRadius:10,
        margin:10,
    },
    menuBoxButton:{
        backgroundColor: "#fff",
        borderRadius:10,
        // margin:10,
        flex:1,
    },
    linkL:{
        flex:1,
        backgroundColor: COLORS.greenDark,
        borderRadius:10,
        margin:10,
        height:100,
    },
    linkR:{
        flex:1,
        backgroundColor: "#fff",
        borderRadius:10,
        margin:10,
        height:100,
    },
    infoName:{
        fontSize:16,
        fontWeight:'500',
        color: "#151515",
        textAlign:'left',
        marginTop:20,
        paddingLeft:20,
        width:"60%",
    },
    infoPrice:{
        fontSize:18,
        fontWeight:'500',
        color: "#151515",
        textAlign:'center',
        marginTop:20,
        paddingLeft:20,  
    },
    info:{
        fontSize:14,
        fontWeight:'500',
        color: "#151515",
        // textAlign:'left',
        marginTop:20,
        paddingLeft:20,
    },
    infoGuideSpe:{
        fontSize:14,
        fontWeight:'500',
        color: "#151515",
        // textAlign:'left',
        marginTop:10,
        paddingLeft:20,
    },
    infoPlantName:{
        fontSize:14,
        fontWeight:'500',
        color: "#151515",
        // textAlign:'left',
        // marginTop:20,
        paddingLeft:20,
    },
    infoGeneral:{
        fontSize:14,
        fontWeight:'500',
        color: "#151515",
        // textAlign:'left',
        marginTop:20,
        paddingLeft:20,
    },
    infoMenuW:{
        fontSize:12,
        fontWeight:'500',
        color: "#ffffff",
        textAlign: 'center',
        marginTop:25,
        width: '100%',
        // paddingLeft:20,
    },
    infoMenuB:{
        fontSize:12,
        fontWeight:'500',
        color: "#151515",
        textAlign: 'center',
        marginTop:25,
        width: '100%',
        // paddingLeft:20,
    },
    eventContentHead: {
        // flex:1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        height:100,
    },
    eventContentFirst: {
        // flex:1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        height:50,
    },
    eventContentSec: {
        // flex:1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        // height:'auto',
        paddingBottom:20,
    },
    eventContentThird: {
        // flex:1,
        paddingTop:30,
        flexDirection: 'row',
        alignItems: 'flex-start',
        height:'auto',
    },
    eventContentL: {
        flex:5,
        flexDirection: 'column',
        alignItems: 'flex-start',
        height:'auto',
        paddingBottom:30,
    },
    eventContentR: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        height:'auto',
    },
    eventContentGuideL: {
        flex:5,
        flexDirection: 'column',
        alignItems: 'flex-start',
        height:'auto',
        // paddingBottom:30,
    },
    eventContentGuideR: {
        flex:3,
        // flexDirection: 'column',
        // alignItems: 'flex-start',
        color: COLORS.greenDark,
        // height:'auto',
        flexDirection: 'row',
        alignItems: 'flex-start',
        height:'auto',
    },
    infoGuideR: {
        color: COLORS.greenDark,
        fontSize:12,
        fontWeight:'500',
        // color: "#151515",
        // textAlign:'left',
        // marginTop:10,
        // paddingTop:10,
        paddingLeft:20,
        flex:1,
    },
    infoGuideReminder: {
        color: COLORS.greenDark,
        fontSize:12,
        fontWeight:'500',
        // color: "#151515",
        // textAlign:'left',
        // marginTop:10,
        // paddingTop:10,
        paddingLeft:10,
        marginTop:20,
        flex:1,
    },
    eventList:{
        marginTop:20,
    },
})


export default ConseilsDetail

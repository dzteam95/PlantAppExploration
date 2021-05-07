import React, { useState } from 'react';
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
} from 'react-native';
import {COLORS} from "../constants";
import {Boarding1} from "../constants/images";

const ConseilsDetail = ({route, navigation,  props }) => {
    const data = [
            {id:1, name:'Rosier', slug:'Rosier', icon:'https://static.aujardin.info/cache/th/img9/rosa-fleur-600x450.webp' , url:"https://seedy.difego.fr" , desc:"Les roses sont cultivées depuis le moyen-âge, elles furent importées par les croisés en provenance de l'orient. C'est ensuite au XVIIIème siècle que les français commençèrent à les croiser pour créer de nouvelles variétés. Depuis, de nouvelles variétés de rosiers apparaissent tous les ans pendant que d'autres disparaissent.", description:"Cupidon s'étant approché un peu trop près des rosiers du jardin de l'Olympe que butinaient des abeilles, fut cruellement piqué. De chaque piqûre jaillit une goutte de sang qui transforma les fleurs blanches en fleurs vermeilles. Vénus, affolée, se précipita à son secours et, dans sa hâte, renversa le flacon d'odeurs qu'elle portait à la ceinture. Depuis ce jour, les roses sont parfumées… Histoire du rosier C'est au moyen-âge que les premières roses ont été cultivées, elles furent importées par les croisés en provenance de l'orient. C'est ensuite au XVIIIème siècle que les français commençèrent à les croiser pour créer de nouvelles variétés. Aujourd'hui encore, les français occupent la première place parmi les créateurs de roses. Il n'y qu'à citer leur nom que tout le monde connait; Delbard, Meilland, Guyot,... Sachez toutefois que vous ne pouvez pas multiplier leurs roses, sans autorisation. Les variétés de rosiers De nouvelles variétés de rosiers apparaissent tous les ans pendant que d'autres disparaissent. Il est impossible de toutes les décrire. Repérez au moment de la floraison les variétés qui vous plaisent, et achetez-les ensuite à la bonne saison. Visitez également les roseraies pour faire votre choix.Il existe différents type de rosiers : les rosiers arbustifs ou de paysage à utiliser dans les haies, en fond de massif ou isoléCupidon s'étant approché un peu trop près des rosiers du jardin de l'Olympe que butinaient des abeilles, fut cruellement piqué. De chaque piqûre jaillit une goutte de sang qui transforma les fleurs blanches en fleurs vermeilles. Vénus, affolée, se précipita à son secours et, dans sa hâte, renversa le flacon d'odeurs qu'elle portait à la ceinture. Depuis ce jour, les roses sont parfumées… Histoire du rosier C'est au moyen-âge que les premières roses ont été cultivées, elles furent importées par les croisés en provenance de l'orient. C'est ensuite au XVIIIème siècle que les français commençèrent à les croiser pour créer de nouvelles variétés. Aujourd'hui encore, les français occupent la première place parmi les créateurs de roses. Il n'y qu'à citer leur nom que tout le monde connait; Delbard, Meilland, Guyot,... Sachez toutefois que vous ne pouvez pas multiplier leurs roses, sans autorisation. Les variétés de rosiers De nouvelles variétés de rosiers apparaissent tous les ans pendant que d'autres disparaissent. Il est impossible de toutes les décrire. Repérez au moment de la floraison les variétés qui vous plaisent, et achetez-les ensuite à la bonne saison. Visitez également les roseraies pour faire votre choix.Il existe différents type de rosiers : les rosiers arbustifs ou de paysage à utiliser dans les haies, en fond de massif ou isolé"},
            ];
            const { itemId } = 1;
            // const { itemId } = route.params;
    // Cette liaison est nécéssaire afin de permettre
    // // l'utilisation de `this` dans la fonction de rappel.
    // const handleClick = handleClick.bind(this);

    // const id = JSON.stringify(itemId)-1;
    //fetch

    //

    const result = data[0];
    // console.log(result);

    const [isEnabledGeneralDatas, setIsEnabledGeneralDatas] = useState(true);
        const toggleSwitchGeneralDatas = () => setIsEnabledGeneralDatas(previousState => !previousState);
    const [isEnabledGuide, setIsEnabledGuide] = useState(false);
        const toggleSwitchGuide = () => setIsEnabledGuide(previousState => !previousState);
    const [isEnabledCalendar, setIsEnabledCalendar] = useState(false);
        const toggleSwitchCalendar = () => setIsEnabledCalendar(previousState => !previousState);

    const [isEnabledDesc, setIsEnabledDesc] = useState(false);
        const toggleSwitchDesc = () => setIsEnabledDesc(previousState => !previousState);
    const [isEnabledDescription, setIsEnabledDescription] = useState(false);
        const toggleSwitchDescription = () => setIsEnabledDescription(previousState => !previousState);

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
                            <View style={styles.eventContentFirst}>
                                <Image style={styles.presentationLogo} source={{ uri: result.icon,}}/>
                                <Text style={styles.info}>{result.name}</Text>
                                <Text style={styles.info}>Famille : {result.name}</Text>
                            </View>
                            <View style={styles.menuRow}>
                                {/* General */}
                                <View style={styles.menuBoxButton} >
                                    <TouchableOpacity 
                                            style={isEnabledGeneralDatas? styles.containerLight : styles.buttonContainer}
                                            onPress={toggleSwitchGeneralDatas}
                                        >
                                        <View style={styles.eventContentFirst}>
                                            <Text style={styles.info}>General</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View> 
                                {/* Guide de Culture */} 
                                <View style={styles.menuBoxButton} >
                                    <TouchableOpacity 
                                            style={isEnabledGuide? styles.containerLight : styles.buttonContainer}
                                            onPress={toggleSwitchGuide}
                                        >
                                        <View style={styles.eventContentFirst}>
                                            <Text style={styles.info}>Guide de Culture</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                {/* Calendrier */}
                                <View style={styles.menuBoxButton} >    
                                    <TouchableOpacity 
                                        style={isEnabledCalendar? styles.containerLight : styles.buttonContainer}
                                        onPress={toggleSwitchCalendar}
                                    >
                                    <View style={styles.eventContentFirst}>
                                        <Text style={styles.info}>Calendrier</Text>
                                    </View>
                                    {/* here the content of the section */}
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        {/* here the content of the section General */}
                        <View style={isEnabledGeneralDatas? styles.containerSuperLight : styles.buttonContainerE} >
                            <View style={styles.menuBox} >
                                <Text style={styles.info}>Besoin en soleil</Text>
                            </View>
                            <View style={styles.menuBox} >
                                <Text style={styles.info}>Besoin en eau</Text>
                            </View>
                            <View style={styles.menuBox} >
                                <Text style={styles.info}>Distanciation</Text>
                            </View>
                            <View style={styles.menuBox} >
                                <Text style={styles.info}>Dimensions</Text>
                            </View>
                            <View style={styles.menuBox} >
                                <Text style={styles.info}>Ph</Text>
                            </View>
                            <View style={styles.menuBox} >
                                <Text style={styles.info}>Climat</Text>
                            </View>
                        </View>

                        {/* here the content of the section Guide */}
                        <View style={isEnabledGuide? styles.containerSuperLight : styles.buttonContainerE} >
                            <View style={styles.menuBox} >
                                <TouchableOpacity 
                                    style={isEnabledDesc? styles.containerLight : styles.buttonContainer}
                                    onPress={toggleSwitchDesc}
                                    >
                                    <View style={styles.eventContentFirst}>
                                        <Image style={styles.tinyLogo} source={{ uri: result.icon,}}/>
                                        <Text style={styles.infoName}>{result.name}</Text>
                                        <Image style={styles.tinyLogo} source={{ uri: "https://cdn4.iconfinder.com/data/icons/navigation-40/24/chevron-down-512.png"}}/>
                                    </View>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContentL}>
                                            <Text style={styles.info}>{result.desc}</Text>
                                            
                                        </View>
                                        <View style={styles.eventContentR}>
                                            <Text style={styles.info}>{result.t1}</Text>
                                            
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.menuBox} >
                                <TouchableOpacity 
                                style={isEnabledDescription? styles.containerLight : styles.buttonContainerE}
                                onPress={toggleSwitchDescription}
                                >
                                    <View style={styles.eventContentFirst}>
                                        <Image style={styles.tinyLogo} source={Boarding1}/>
                                        <Text style={styles.infoName}>Description</Text>
                                        <Image style={styles.tinyLogo} source={{ uri: "https://cdn4.iconfinder.com/data/icons/navigation-40/24/chevron-down-512.png"}}/>
                                    </View>
                                    <View style={styles.eventContentSec}>
                                        <View style={styles.eventContentL}>
                                            <Text style={styles.info}>{result.description}</Text>
                                        </View>
                                        <View style={styles.eventContentR}>
                                            <Text style={styles.info}>{result.t1}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* here the content of the section Calendar */}
                        <View style={isEnabledCalendar? styles.containerSuperLight : styles.buttonContainerE} >
                            <View style={styles.menuBox} >
                                <Text style={styles.info}>Besoin en soleil</Text>
                                <Text style={styles.info}>Besoin en eau</Text>
                                <Text style={styles.info}>Distanciation</Text>
                                <Text style={styles.info}>Dimensions</Text>
                                <Text style={styles.info}>Ph</Text>
                                <Text style={styles.info}>Climat</Text>
                            </View>
                        </View> 
                       
                        {/* <View style={styles.actionRedirection} >
                            <TouchableOpacity style={styles.linkL} onPress={() => Linking.openURL(result.url)}>
                                <Text style={styles.infoRedirect}>Fiches Conseils</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.linkR} onPress={() => Linking.openURL(result.url)}>
                                <Text style={styles.infoRedirectR}>Fiches Maladies</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.actionRedirection} >
                            <TouchableOpacity style={styles.linkB} >
                                {/* <Text style={styles.infoRedirect}>Je m'abonne à {result.price}€ /mois</Text> */}
                                {/* <Text style={styles.infoRedirectB} onPress={() => Linking.openURL(result.url)}> */}
                                    {/* Quelque chose */}
                                {/* </Text>
                            </TouchableOpacity>
                        </View> */}
                    </ScrollView>
                </ImageBackground>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerLight:{
        height:60,
        overflow:"hidden",
    },
    buttonContainer:{
        // height:60,
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
        borderRadius:10,
        margin:20,
    },
    headerContent:{
        marginTop: 50,
        padding:20,
    },
    name:{
        fontSize:22,
        color:"#222222",
        fontWeight:'900',
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
    actionRedirection:{
        // flex:1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        height:50,
        paddingBottom:120,
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
    linkB:{
        flex:1,
        backgroundColor: COLORS.greenDark,
        borderRadius:10,
        margin:10,
        height:60,
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
        textAlign:'left',
        marginTop:20,
        paddingLeft:20,
    },
    infoRedirect:{
        fontSize:14,
        fontWeight:'500',
        color: "#ffffff",
        textAlign:'center',
        marginTop:40,
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
    eventContentFirst: {
        // flex:1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        height:100,
    },
    eventContentSec: {
        // flex:1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        height:'auto',
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

    eventList:{
        marginTop:20,
    },
})


export default ConseilsDetail

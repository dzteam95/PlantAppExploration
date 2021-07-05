import React, {useState , useEffect, useContext, useLayoutEffect} from 'react';
import { createStackNavigator, TransitionPresets, } from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import {View, Text, Image,ActivityIndicator, AsyncStorage,LogBox} from 'react-native';

import {COLORS} from './constants';
import {ProfilVertFonce} from "./constants/icons";

// screens
import { PlantDetail } from "./screens/";
import { Login } from "./screens/";
import { Logout } from "./screens/";
import { Register } from "./screens/";
import { Welcome } from "./screens/";
import { Onboarding } from "./screens/";
import { OnboardingTwo } from "./screens/";
import { OnboardingThree} from "./screens/";
import { OnboardingFour} from "./screens/";
import { Home } from "./screens/";
import { Profile } from "./screens/";
import { Jardin } from "./screens/";
import { Rappels } from "./screens/";
import { Conseils } from "./screens/";
import { ConseilsList } from "./screens/";
import { ConseilsDetail } from "./screens/";
import { ConseilsDetailFiche } from "./screens/";
import { Subscription } from "./screens/";
import { SubscriptionDetail } from "./screens/";
import { HelpUs } from "./screens/";
import { DataShare } from "./screens/";
import { Parrainage } from "./screens/";
import { Delete } from "./screens/";
import { Compte } from "./screens/";
import { ForgotPasswordScreen } from "./screens/";
import { Parcelles } from "./screens/";
import { AddParcelle } from "./screens/";
import { GardenT } from "./screens/";
import { GardenTList } from "./screens/";
import { ProfileDetail } from "./screens/";
import { RecettesList } from "./screens/";
import { RecettesDetail } from "./screens/";
import { AddPlantParcelle } from "./screens/";
 import { PlantsParcelleListe } from "./screens/";
 import { ParcellesV2 } from "./screens/";
 import { PlantsParcelleV2 } from "./screens/";

// extra screens
import Tabs from "./navigation/tabs";


// const mode = "dev";
const mode = "prod";



if (mode === "prod"){
    const url = "https://seedyapp.tk/";

    //diseable all waring alerte
    LogBox.ignoreAllLogs();
}else{
    const url = "http://localhost:4000/";

};

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};
// const tabOptionsCO = {
//     // tabBarVisible:false,
//     showLabel: false,
//     style: {
//         // height: '0%',
//         // margin:-100
//         // paddingTop: -12
//     },
// };
const tabOptions = {
    // tabBarVisible:true,
    showLabel: false,
    style: {
        height: '10%',
        // margin:-100
        // paddingTop: -12
    },
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function WelcomeApp() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                footerShown: false
            }}
        >
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false, footerShown: false }}/>
            <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
            <Stack.Screen name="OnboardingTwo" component={OnboardingTwo} options={{ headerShown: false }} />
            <Stack.Screen name="OnboardingThree" component={OnboardingThree} options={{ headerShown: false }} />
            <Stack.Screen name="OnboardingFour" component={OnboardingFour} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false,footerShown:false }} />
            <Stack.Screen name="Logout" component={Logout} options={{ headerShown: false,footerShown:false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false,footerShown:false }} />
        </Stack.Navigator>
    );
}
function ConseilsApp() {
return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            footerShown: false
        }}
    >
        {/* <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false, footerShown: false }}/>
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="OnboardingTwo" component={OnboardingTwo} options={{ headerShown: false }} />
        <Stack.Screen name="OnboardingThree" component={OnboardingThree} options={{ headerShown: false }} />
        <Stack.Screen name="OnboardingFour" component={OnboardingFour} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false,footerShown:false }} />
        <Stack.Screen name="Logout" component={Logout} options={{ headerShown: false,footerShown:false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false,footerShown:false }} /> */}
        {/* <Stack.Screen name="Profile" component={Profile}/> */}
        {/* <Stack.Screen name="Jardin" component={Jardin}/> */}
        <Stack.Screen name="Conseils" component={Conseils}/>
        <Stack.Screen name="ConseilsList" component={ConseilsList}/>
        <Stack.Screen name="ConseilsDetail" component={ConseilsDetail}/>
        <Stack.Screen name="ConseilsDetailFiche" component={ConseilsDetailFiche}/>
        <Stack.Screen name="PlantDetail" component={PlantDetail} options={{ headerShown: true }} />

        {/* <Stack.Screen name="Parrainage" component={Parrainage}/> */}
        {/* <Stack.Screen name="Delete" component={Delete}/> */}
        {/* <Stack.Screen name="Compte" component={Compte}/> */}
        {/* <Stack.Screen name="Subscription" component={Subscription}/> */}
        {/* <Stack.Screen name="SubscriptionDetail" component={SubscriptionDetail}/> */}
        {/* <Stack.Screen name="HelpUs" component={HelpUs}/> */}
        {/* <Stack.Screen name="DataShare" component={DataShare}/> */}
        {/* <Stack.Screen name="Rappels" component={Rappels}/> */}
        {/* <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/> */}
        {/* <Stack.Screen name="Parcelles" component={Parcelles}/> */}
        {/* <Stack.Screen name="AddParcelle" component={AddParcelle}/> */}
        {/* <Stack.Screen name="GardenT" component={GardenT}/> */}
        {/* <Stack.Screen name="GardenTList" component={GardenTList}/> */}
        {/* <Stack.Screen name="ProfileDetail" component={ProfileDetail}/> */}
        <Stack.Screen name="RecettesList" component={RecettesList}/>
        <Stack.Screen name="RecettesDetail" component={RecettesDetail}/>
    </Stack.Navigator>
);
}
function JardinApp() {
return (
    <Stack.Navigator
        initialRouteName="Jardin"
        screenOptions={{
            headerShown: false,
            footerShown: false
        }}>
            <Stack.Screen name="Jardin" component={Jardin}/>
            <Stack.Screen name="Parcelles" component={Parcelles}/>
            <Stack.Screen name="AddParcelle" component={AddParcelle}/>
            <Stack.Screen name="AddPlantParcelle" component={AddPlantParcelle}/>
            <Stack.Screen name="PlantsParcelleListe" component={PlantsParcelleListe}/>
            <Stack.Screen name="ParcellesV2" component={ParcellesV2}/>
            <Stack.Screen name="PlantsParcelleV2" component={PlantsParcelleV2}/>
    </Stack.Navigator>
);
}
function RappelsApp() {
return (
    <Stack.Navigator
        initialRouteName="Rappels"
        screenOptions={{
            headerShown: false,
            footerShown: false
        }}>
            <Stack.Screen name="Rappels" component={Rappels}/>
    </Stack.Navigator>
);
}
function ProfileApp() {
return (
    <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{
            headerShown: false,
            footerShown: false
        }}>
            <Stack.Screen name="Logout" component={Logout} options={{ headerShown: false,footerShown:false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false,footerShown:false }} />
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false, footerShown:false }}/>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="Parrainage" component={Parrainage}/>
            <Stack.Screen name="Delete" component={Delete}/>
            <Stack.Screen name="Compte" component={Compte}/>
            <Stack.Screen name="Subscription" component={Subscription}/>
            <Stack.Screen name="SubscriptionDetail" component={SubscriptionDetail}/>
            <Stack.Screen name="HelpUs" component={HelpUs}/>
            <Stack.Screen name="DataShare" component={DataShare}/>
            <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/>
            <Stack.Screen name="ProfileDetail" component={ProfileDetail}/>
    </Stack.Navigator>
);
}

const App = () => {
    const [initialRoute, setRoute] = useState('Welcome')
    // const [isSession, setIsSession] = useState()
    const readData = async () => {
        try {
            const userJeton = await AsyncStorage.getItem('id_token')      
            if (userJeton !== null) {
                setRoute('Home')
                setIsSession(1)
                // //initialRoute = 'Home'

                //Return the token
                //console.log(userJeton)
                //alert('Token found from storage')
            }else{
                //alert('No Token found from storage')
            }
        } catch (e) {
          //alert('Failed to fetch the data from storage')
        }  
    }

    // console.log(isSession)
    // const userId = await AsyncStorage.getItem('userId');
    // console.log(userJeton)
    useEffect(() => {
        readData()
        return /*(
            //readData()
        )*/
    }, [])

    // const [isLogged, setIsLogged] = useState(false)
    // console.log(isLogged)
    // setIsLogged(true)
    // console.log(global.isLogd )
    // // global.isLogd = true;
    // console.log(global.isLogd )


    return (
        <NavigationContainer theme={theme}>
            {/* { ready ? */}
                <Tab.Navigator
                    tabBarOptions={tabOptions}
                    
                    // screenOptions={{
                    //     headerShown: false,
                    //     footerShown: true
                    // }}
                    initialRouteName={initialRoute}
                    screenOptions={({route}) => ({
                        tabBarIcon: ({focused}) => {
                            const tintColor = focused ? COLORS.greenLight : COLORS.gray;
                        // if (route.name === "Conseils"){
                        //     setIsLogged(true)
                        // }
                        // if (route.name != "Conseils") { setIsLogged(false)}else{setIsLogged(true)}
                        // console.log(route.name)
                        // console.log("focused",focused)

                        switch (route.name) {
                            case 'Welcome':
                                return (
                                    <Image
                                    // source={require('./assets/icons/Fiches_vert_clair.png')}
                                    // resizeMode="contain"
                                    style={{
                                        // display:"none",
                                        // display: "none",visibility:"hidden",opacity:0,
                                        // display: "none",
                                        // margin:-100,
                                        tintColor: tintColor,
                                        // width: 25,
                                        // height: 25,
                                    }}
                                    />
                                );      
                            case 'Conseils':
                            return (
                                <Image
                                source={require('./assets/icons/Fiches_vert_clair.png')}
                                resizeMode="contain"
                                style={{
                                    tintColor: tintColor,
                                    width: 25,
                                    height: 25,
                                }}
                                />
                            );       
                            case 'Jardin':
                            return (
                                <Image
                                source={require('./assets/icons/Jardin_vert_clair.png')}
                                resizeMode="contain"
                                style={{
                                    tintColor: tintColor,
                                    width: 25,
                                    height: 25,
                                }}
                                />
                            );
                            case 'Rappels':
                            return (
                                <Image
                                source={require('./assets/icons/Rappels_vert_clair.png')}
                                resizeMode="contain"
                                style={{
                                    tintColor: tintColor,
                                    width: 25,
                                    height: 25,
                                }}
                                />
                            );
                            case 'Profile':
                                return (
                                    <Image
                                        source={require('./assets/icons/Profil_vert_clair.png')}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: tintColor,
                                            width: 25,
                                            height: 25,
                                        }}
                                    />
                                );
                        }
                        },
                    })}
                >
                    {/* {Tabs} */}
                        <Tab.Screen name="Welcome" component={WelcomeApp} options={{ tabBarVisible: false,tabBarButton: () => (<View style={{width:0, height:0}}></View>), }}/>
                        
                        <Tab.Screen name="Conseils" component={ConseilsApp}options={{tabBarVisible: true, }}/>
                        <Tab.Screen name="Jardin" component={JardinApp}options={{tabBarVisible: true,}}/>
                        <Tab.Screen name="Rappels" component={RappelsApp}options={{tabBarVisible: true,}}/>
                        <Tab.Screen name="Profile" component={ProfileApp}options={{tabBarVisible: true,}}/>
                        
                </Tab.Navigator>
                
                {/* </NavigationContainer> */}
                {/* //     tabBarOptions={tabOptions}
                //     >
                //     <Tab.Screen name="Login" component={LoginApp} />
                // </Tab.Navigator> */}
            {/* // } */}
        </NavigationContainer>
        
        // <NavigationContainer theme={theme}>
        //   <Tab.Navigator
        //     initialRouteName={initialRoute}
        //     tabBarOptions={tabOptions}
        //     screenOptions={({route}) => ({
        //         // headerShown: false,
        //         // footerShown: true,
        //         tabBarIcon: ({focused}) => {
        //             const tintColor = focused ? COLORS.greenLight : COLORS.gray;
        //             switch (route.name) {
        //                 case 'Conseils':
        //                 return (
        //                     <Image
        //                     source={require('./assets/icons/Fiches_vert_clair.png')}
        //                     resizeMode="contain"
        //                     style={{
        //                         tintColor: tintColor,
        //                         width: 25,
        //                         height: 25,
        //                     }}
        //                     />
        //                 );
        //                 case 'Jardin':
        //                 return (
        //                     <Image
        //                     source={require('./assets/icons/Jardin_vert_clair.png')}
        //                     resizeMode="contain"
        //                     style={{
        //                         tintColor: tintColor,
        //                         width: 25,
        //                         height: 25,
        //                     }}
        //                     />
        //                 );
        //                 case 'Rappels':
        //                 return (
        //                     <Image
        //                     source={require('./assets/icons/Rappels_vert_clair.png')}
        //                     resizeMode="contain"
        //                     style={{
        //                         tintColor: tintColor,
        //                         width: 25,
        //                         height: 25,
        //                     }}
        //                     />
        //                 );
        //                 case 'Profile':
        //                     return (
        //                         <Image
        //                             source={require('./assets/icons/Profil_vert_clair.png')}
        //                             resizeMode="contain"
        //                             style={{
        //                                 tintColor: tintColor,
        //                                 width: 25,
        //                                 height: 25,
        //                             }}
        //                         />
        //                     );
        //             }
        //             },
        //         })}
        //     >
        //     {/* <Tab.Screen name="Login" component={LoginApp} /> */}
        //     <Tab.Screen name="Conseils" component={ConseilsApp} />
        //     <Tab.Screen name="Jardin" component={JardinApp} />
        //     <Tab.Screen name="Rappels" component={RappelsApp} />
        //     <Tab.Screen name="Profile" component={ProfileApp} />
        //     {/* <Tab.Screen name="HomeStack" component={HomeStack} options={{tabBarLabel: 'HomeStack',}}  /> */}
        //     {/* <Tab.Screen name="SettingsStack" component={SettingsStack} options={{ tabBarLabel: 'SettingsStack',}} /> */}
        //   </Tab.Navigator>
        // </NavigationContainer>
      );
    
};

export default () => {
    return <App />;
};
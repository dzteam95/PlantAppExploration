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
const tabOptions = {
    tabBarVisible:true,
    showLabel: false,
    style: {
        height: '10%',
    },
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function ConseilsApp() {
return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        footerShown: false
    }}>
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false, footerShown:false }}/>
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="OnboardingTwo" component={OnboardingTwo} options={{ headerShown: false }} />
        <Stack.Screen name="OnboardingThree" component={OnboardingThree} options={{ headerShown: false }} />
        <Stack.Screen name="OnboardingFour" component={OnboardingFour} options={{ headerShown: false }} />
        <Stack.Screen name="PlantDetail" component={PlantDetail} options={{ headerShown: true }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false,footerShown:false }} />
        {/* <Stack.Screen name="Logout" component={Logout} options={{ headerShown: false,footerShown:false }} /> */}
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false,footerShown:false }} />
        {/* <Stack.Screen name="Profile" component={Profile}/> */}
        {/* <Stack.Screen name="Jardin" component={Jardin}/> */}
        <Stack.Screen name="Conseils" component={Conseils}/>
        <Stack.Screen name="ConseilsList" component={ConseilsList}/>
        <Stack.Screen name="ConseilsDetail" component={ConseilsDetail}/>
        <Stack.Screen name="ConseilsDetailFiche" component={ConseilsDetailFiche}/>
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
            {/* <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} /> */}
            {/* <Stack.Screen name="OnboardingTwo" component={OnboardingTwo} options={{ headerShown: false }} /> */}
            {/* <Stack.Screen name="OnboardingThree" component={OnboardingThree} options={{ headerShown: false }} /> */}
            {/* <Stack.Screen name="OnboardingFour" component={OnboardingFour} options={{ headerShown: false }} /> */}
            {/* <Stack.Screen name="PlantDetail" component={PlantDetail} options={{ headerShown: true }} /> */}
            {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false,footerShown:false }} /> */}
            {/* <Stack.Screen name="Logout" component={Logout} options={{ headerShown: false,footerShown:false }} /> */}
            {/* <Stack.Screen name="Register" component={Register} options={{ headerShown: false,footerShown:false }} /> */}
            {/* <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false, footerShown:false }}/> */}
            {/* <Stack.Screen name="Profile" component={Profile}/> */}
            <Stack.Screen name="Jardin" component={Jardin}/>
            {/* <Stack.Screen name="Conseils" component={Conseils}/> */}
            {/* <Stack.Screen name="ConseilsList" component={ConseilsList}/> */}
            {/* <Stack.Screen name="ConseilsDetail" component={ConseilsDetail}/> */}
            {/* <Stack.Screen name="ConseilsDetailFiche" component={ConseilsDetailFiche}/> */}
            {/* <Stack.Screen name="Parrainage" component={Parrainage}/> */}
            {/* <Stack.Screen name="Delete" component={Delete}/> */}
            {/* <Stack.Screen name="Compte" component={Compte}/> */}
            {/* <Stack.Screen name="Subscription" component={Subscription}/> */}
            {/* <Stack.Screen name="SubscriptionDetail" component={SubscriptionDetail}/> */}
            {/* <Stack.Screen name="HelpUs" component={HelpUs}/> */}
            {/* <Stack.Screen name="DataShare" component={DataShare}/> */}
            {/* <Stack.Screen name="Rappels" component={Rappels}/> */}
            {/* <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/> */}
            <Stack.Screen name="Parcelles" component={Parcelles}/>
            <Stack.Screen name="AddParcelle" component={AddParcelle}/>
            {/* <Stack.Screen name="GardenT" component={GardenT}/> */}
            {/* <Stack.Screen name="GardenTList" component={GardenTList}/> */}
            {/* <Stack.Screen name="ProfileDetail" component={ProfileDetail}/> */}
            {/* <Stack.Screen name="RecettesList" component={RecettesList}/> */}
            {/* <Stack.Screen name="RecettesDetail" component={RecettesDetail}/> */}
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
            {/* <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
            <Stack.Screen name="OnboardingTwo" component={OnboardingTwo} options={{ headerShown: false }} />
            <Stack.Screen name="OnboardingThree" component={OnboardingThree} options={{ headerShown: false }} />
            <Stack.Screen name="OnboardingFour" component={OnboardingFour} options={{ headerShown: false }} />
            <Stack.Screen name="PlantDetail" component={PlantDetail} options={{ headerShown: true }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false,footerShown:false }} />
            <Stack.Screen name="Logout" component={Logout} options={{ headerShown: false,footerShown:false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false,footerShown:false }} />
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false, footerShown:false }}/>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="Jardin" component={Jardin}/>
            <Stack.Screen name="Conseils" component={Conseils}/>
            <Stack.Screen name="ConseilsList" component={ConseilsList}/>
            <Stack.Screen name="ConseilsDetail" component={ConseilsDetail}/>
            <Stack.Screen name="ConseilsDetailFiche" component={ConseilsDetailFiche}/>
            <Stack.Screen name="Parrainage" component={Parrainage}/>
            <Stack.Screen name="Delete" component={Delete}/>
            <Stack.Screen name="Compte" component={Compte}/>
            <Stack.Screen name="Subscription" component={Subscription}/>
            <Stack.Screen name="SubscriptionDetail" component={SubscriptionDetail}/>
            <Stack.Screen name="HelpUs" component={HelpUs}/>
            <Stack.Screen name="DataShare" component={DataShare}/> */}
            <Stack.Screen name="Rappels" component={Rappels}/>
            {/* <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/>
            <Stack.Screen name="Parcelles" component={Parcelles}/>
            <Stack.Screen name="AddParcelle" component={AddParcelle}/>
            <Stack.Screen name="GardenT" component={GardenT}/>
            <Stack.Screen name="GardenTList" component={GardenTList}/>
            <Stack.Screen name="ProfileDetail" component={ProfileDetail}/>
            <Stack.Screen name="RecettesList" component={RecettesList}/>
            <Stack.Screen name="RecettesDetail" component={RecettesDetail}/> */}
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
            {/* <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
            <Stack.Screen name="OnboardingTwo" component={OnboardingTwo} options={{ headerShown: false }} />
            <Stack.Screen name="OnboardingThree" component={OnboardingThree} options={{ headerShown: false }} />
            <Stack.Screen name="OnboardingFour" component={OnboardingFour} options={{ headerShown: false }} />
            <Stack.Screen name="PlantDetail" component={PlantDetail} options={{ headerShown: true }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false,footerShown:false }} /> */}
            <Stack.Screen name="Logout" component={Logout} options={{ headerShown: false,footerShown:false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false,footerShown:false }} />
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false, footerShown:false }}/>
            <Stack.Screen name="Profile" component={Profile}/>
            {/* <Stack.Screen name="Jardin" component={Jardin}/>
            <Stack.Screen name="Conseils" component={Conseils}/>
            <Stack.Screen name="ConseilsList" component={ConseilsList}/>
            <Stack.Screen name="ConseilsDetail" component={ConseilsDetail}/>
            <Stack.Screen name="ConseilsDetailFiche" component={ConseilsDetailFiche}/> */}
            <Stack.Screen name="Parrainage" component={Parrainage}/>
            <Stack.Screen name="Delete" component={Delete}/>
            <Stack.Screen name="Compte" component={Compte}/>
            <Stack.Screen name="Subscription" component={Subscription}/>
            <Stack.Screen name="SubscriptionDetail" component={SubscriptionDetail}/>
            <Stack.Screen name="HelpUs" component={HelpUs}/>
            <Stack.Screen name="DataShare" component={DataShare}/>
            {/* <Stack.Screen name="Rappels" component={Rappels}/> */}
            <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/>
            {/* <Stack.Screen name="Parcelles" component={Parcelles}/>
            <Stack.Screen name="AddParcelle" component={AddParcelle}/>
            <Stack.Screen name="GardenT" component={GardenT}/>
            <Stack.Screen name="GardenTList" component={GardenTList}/> */}
            <Stack.Screen name="ProfileDetail" component={ProfileDetail}/>
            {/* <Stack.Screen name="RecettesList" component={RecettesList}/>
            <Stack.Screen name="RecettesDetail" component={RecettesDetail}/> */}
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
    
    useEffect(() => {
        readData()
        return /*(
            //readData()
        )*/
    }, [])

    // console.log(initialRoute)
      
    return (
        // <NavigationContainer theme={theme}>
        //     <Stack.Navigator
        //         screenOptions={{
        //             headerShown: false,
        //             footerShown: true
        //         }}
        //         initialRouteName={initialRoute}
        //     >
        //         {/* {Tabs} */}
        //         <Stack.Screen name="Home" component={Tabs}/>

        //         {/* Screens */}
        //         <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        //         <Stack.Screen name="OnboardingTwo" component={OnboardingTwo} options={{ headerShown: false }} />
        //         <Stack.Screen name="OnboardingThree" component={OnboardingThree} options={{ headerShown: false }} />
        //         <Stack.Screen name="OnboardingFour" component={OnboardingFour} options={{ headerShown: false }} />
        //         <Stack.Screen name="PlantDetail" component={PlantDetail} options={{ headerShown: true }} />
        //         <Stack.Screen name="Login" component={Login} options={{ headerShown: false,footerShown:false }} />
        //         <Stack.Screen name="Logout" component={Logout} options={{ headerShown: false,footerShown:false }} />
        //         <Stack.Screen name="Register" component={Register} options={{ headerShown: false,footerShown:false }} />
        //         <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false, footerShown:false }}/>
        //         <Stack.Screen name="Profile" component={Profile}/>
        //         <Stack.Screen name="Jardin" component={Jardin}/>
        //         <Stack.Screen name="Conseils" component={Conseils}/>
        //         <Stack.Screen name="ConseilsList" component={ConseilsList}/>
        //         <Stack.Screen name="ConseilsDetail" component={ConseilsDetail}/>
        //         <Stack.Screen name="ConseilsDetailFiche" component={ConseilsDetailFiche}/>
        //         <Stack.Screen name="Parrainage" component={Parrainage}/>
        //         <Stack.Screen name="Delete" component={Delete}/>
        //         <Stack.Screen name="Compte" component={Compte}/>
        //         <Stack.Screen name="Subscription" component={Subscription}/>
        //         <Stack.Screen name="SubscriptionDetail" component={SubscriptionDetail}/>
        //         <Stack.Screen name="HelpUs" component={HelpUs}/>
        //         <Stack.Screen name="DataShare" component={DataShare}/>
        //         <Stack.Screen name="Rappels" component={Rappels}/>
        //         <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/>
	    //         <Stack.Screen name="Parcelles" component={Parcelles}/>
	    //         <Stack.Screen name="AddParcelle" component={AddParcelle}/>
        //         <Stack.Screen name="GardenT" component={GardenT}/>
        //         <Stack.Screen name="GardenTList" component={GardenTList}/>
        //         <Stack.Screen name="ProfileDetail" component={ProfileDetail}/>

        //     </Stack.Navigator>
        // </NavigationContainer>
        <NavigationContainer theme={theme}>
          <Tab.Navigator
            initialRouteName={initialRoute}
            tabBarOptions={tabOptions}
            screenOptions={({route}) => ({
                // headerShown: false,
                // footerShown: true,
                tabBarIcon: ({focused}) => {
                    const tintColor = focused ? COLORS.greenLight : COLORS.gray;
                    switch (route.name) {
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
            {/* <Tab.Screen name="Login" component={LoginApp} /> */}
            <Tab.Screen name="Conseils" component={ConseilsApp} />
            <Tab.Screen name="Jardin" component={JardinApp} />
            <Tab.Screen name="Rappels" component={RappelsApp} />
            <Tab.Screen name="Profile" component={ProfileApp} />
            {/* <Tab.Screen name="HomeStack" component={HomeStack} options={{tabBarLabel: 'HomeStack',}}  /> */}
            {/* <Tab.Screen name="SettingsStack" component={SettingsStack} options={{ tabBarLabel: 'SettingsStack',}} /> */}
          </Tab.Navigator>
        </NavigationContainer>
      );
    
};

export default () => {
    return <App />;
};
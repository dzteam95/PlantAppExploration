import React, {useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import {ActivityIndicator, AsyncStorage} from 'react-native';

// screens
import { PlantDetail } from "./screens/";
import { Login } from "./screens/";
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
import { Subscription } from "./screens/";
import { SubscriptionDetail } from "./screens/";
import { HelpUs } from "./screens/";
import { DataShare } from "./screens/";

import { Parrainage } from "./screens/";
import { Delete } from "./screens/";
import { Compte } from "./screens/";



// extra screens
import Tabs from "./navigation/tabs";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

const App = () => {
    const [hasToken, setState] = useState({ hasToken: false })

    AsyncStorage.getItem('id_token').then((token) => {
        setState({ hasToken: token !== null })
    })

    //set initail route var
    initialRoute = 'Welcome'

    if (hasToken){
        tokened = AsyncStorage.getItem('id_token');
        // console.log('User token connected in AsyncStorage : ',tokened)
        initialRoute = 'Home'
    }
    
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    footerShown: true
                }}
                initialRouteName={initialRoute}
            >
                {/* {Tabs} */}
                <Stack.Screen name="Home" component={Tabs}/>

                {/* Screens */}
                <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
                <Stack.Screen name="OnboardingTwo" component={OnboardingTwo} options={{ headerShown: false }} />
                <Stack.Screen name="OnboardingThree" component={OnboardingThree} options={{ headerShown: false }} />
                <Stack.Screen name="OnboardingFour" component={OnboardingFour} options={{ headerShown: false }} />
                <Stack.Screen name="PlantDetail" component={PlantDetail} options={{ headerShown: true }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false,footerShown:false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false,footerShown:false }} />
                <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false, footerShown:false }}/>
                <Stack.Screen name="Profile" component={Profile}/>
                <Stack.Screen name="Jardin" component={Jardin}/>
                <Stack.Screen name="Rappels" component={Rappels}/>
                <Stack.Screen name="Conseils" component={Conseils}/>
                <Stack.Screen name="ConseilsList" component={ConseilsList}/>
                <Stack.Screen name="ConseilsDetail" component={ConseilsDetail}/>
                <Stack.Screen name="Parrainage" component={Parrainage}/>
                <Stack.Screen name="Delete" component={Delete}/>
                <Stack.Screen name="Compte" component={Compte}/>
                <Stack.Screen name="Subscription" component={Subscription}/>
                <Stack.Screen name="SubscriptionDetail" component={SubscriptionDetail}/>
                <Stack.Screen name="HelpUs" component={HelpUs}/>
                <Stack.Screen name="DataShare" component={DataShare}/>
                
                

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default () => {
    return <App />;
};

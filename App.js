import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

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
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    footerShown: true

                }}
                initialRouteName={'Login'}
            >
                {Tabs}
                {<Stack.Screen name="Home" component={Tabs}

                />}

                {/* Screens */}
                <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
                <Stack.Screen name="OnboardingTwo" component={OnboardingTwo} options={{ headerShown: false }} />
                <Stack.Screen name="OnboardingThree" component={OnboardingThree} options={{ headerShown: false }} />
                <Stack.Screen name="OnboardingFour" component={OnboardingFour} options={{ headerShown: false }} />
                <Stack.Screen name="PlantDetail" component={PlantDetail} options={{ headerShown: true }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false,footerShown:false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false,footerShown:false }} />
                <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false,footerShown:false }}/>
                <Stack.Screen name="Profile" component={Profile}/>
                <Stack.Screen name="Jardin" component={Jardin}/>
                <Stack.Screen name="Rappels" component={Rappels}/>
                <Stack.Screen name="Conseils" component={Conseils}/>
                <Stack.Screen name="Parrainage" component={Parrainage} options={{ footerShown:true }}/>
                <Stack.Screen name="Delete" component={Delete} options={{ footerShown:true }}/>
                <Stack.Screen name="Compte" component={Compte} options={{ footerShown:true }}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default () => {
    return <App />;
};

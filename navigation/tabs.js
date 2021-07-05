import React from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator, TransitionPresets, } from "@react-navigation/stack";

// screens

import { Profile } from "../screens/";
import { Jardin } from "../screens/";
import { Rappels } from "../screens/";
import { Conseils } from "../screens/";


import {COLORS} from '../constants';
import {ProfilVertFonce} from "../constants/icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Stack.Navigator
      // tabBarOptions={tabOptions}
      screenOptions={{
        headerShown: false,
        footerShown: true
      }}
      >
      {/* <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false, footerShown:false }}/>
      <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
      <Stack.Screen name="OnboardingTwo" component={OnboardingTwo} options={{ headerShown: false }} />
      <Stack.Screen name="OnboardingThree" component={OnboardingThree} options={{ headerShown: false }} />
      <Stack.Screen name="OnboardingFour" component={OnboardingFour} options={{ headerShown: false }} /> */}
      <Stack.Screen name="Conseils" component={Conseils}/>
      <Stack.Screen name="PlantDetail" component={PlantDetail} options={{ headerShown: true }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false,footerShown:false }} />
      <Stack.Screen name="Logout" component={Logout} options={{ headerShown: false,footerShown:false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false,footerShown:false }} />
      <Stack.Screen name="Profile" component={Profile}/>
      <Stack.Screen name="Jardin" component={Jardin}/>
      <Stack.Screen name="ConseilsList" component={ConseilsList}/>
      <Stack.Screen name="ConseilsDetail" component={ConseilsDetail}/>
      <Stack.Screen name="ConseilsDetailFiche" component={ConseilsDetailFiche}/>
      <Stack.Screen name="Parrainage" component={Parrainage}/>
      <Stack.Screen name="Delete" component={Delete}/>
      <Stack.Screen name="Compte" component={Compte}/>
      <Stack.Screen name="Subscription" component={Subscription}/>
      <Stack.Screen name="SubscriptionDetail" component={SubscriptionDetail}/>
      <Stack.Screen name="HelpUs" component={HelpUs}/>
      <Stack.Screen name="DataShare" component={DataShare}/>
      <Stack.Screen name="Rappels" component={Rappels}/>
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/>
      <Stack.Screen name="Parcelles" component={Parcelles}/>
      <Stack.Screen name="AddParcelle" component={AddParcelle}/>
      <Stack.Screen name="GardenT" component={GardenT}/>
      <Stack.Screen name="GardenTList" component={GardenTList}/>
      <Stack.Screen name="ProfileDetail" component={ProfileDetail}/>
    </Stack.Navigator>
  );
};

export default Tabs;

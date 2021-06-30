import React from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// screens
import { PlantDetail } from "../screens/";
import { Login } from "../screens/";
import { Logout } from "../screens/";
import { Register } from "../screens/";
import { Welcome } from "../screens/";
import { Onboarding } from "../screens/";
import { OnboardingTwo } from "../screens/";
import { OnboardingThree} from "../screens/";
import { OnboardingFour} from "../screens/";
import { Home } from "../screens/";
import { Profile } from "../screens/";
import { Jardin } from "../screens/";
import { Rappels } from "../screens/";
import { Conseils } from "../screens/";
import { ConseilsList } from "../screens/";
import { ConseilsDetail } from "../screens/";
import { ConseilsDetailFiche } from "../screens/";
import { Subscription } from "../screens/";
import { SubscriptionDetail } from "../screens/";
import { HelpUs } from "../screens/";
import { DataShare } from "../screens/";
import { Parrainage } from "../screens/";
import { Delete } from "../screens/";
import { Compte } from "../screens/";
import { ForgotPasswordScreen } from "../screens/";
import { Parcelles } from "../screens/";
import { AddParcelle } from "../screens/";
import { GardenT } from "../screens/";
import { GardenTList } from "../screens/";
import { ProfileDetail } from "../screens/";

import {COLORS} from '../constants';
import {ProfilVertFonce} from "../constants/icons";

const Tab = createBottomTabNavigator();

const tabOptions = {
  	tabBarVisible:true,
		showLabel: false,
  style: {
    height: '10%',
  },
};

const CameraButton = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
       width:'100%',
          height: '100%'
      }}>
      <Image
        source={ProfilVertFonce}


      />
    </View>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.greenLight : COLORS.gray;

          switch (route.name) {
            case 'Conseils':
              return (
                <Image
                  source={require('../assets/icons/Fiches_vert_clair.png')}
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
                  source={require('../assets/icons/Jardin_vert_clair.png')}
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
                  source={require('../assets/icons/Rappels_vert_clair.png')}
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
                          source={require('../assets/icons/Profil_vert_clair.png')}
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
      })}>
      <Tab.Screen name="Conseils" component={Conseils} />
      <Tab.Screen name="Jardin" component={Jardin} />
      <Tab.Screen name="Rappels" component={Rappels} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Tabs;

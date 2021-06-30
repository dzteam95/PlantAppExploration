import React from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Profile} from '../screens/';
import {Jardin} from '../screens/';
import {Rappels} from '../screens/';
import {Conseils} from '../screens/';

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

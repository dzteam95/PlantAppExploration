import React from "react";
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/";
import { Profile } from "../screens/";
import { Jardin } from "../screens/";
import { Rappels } from "../screens/";
import { Conseils } from "../screens/";
import { Parrainage } from "../screens/";





import { COLORS } from "../constants";

const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: {
        height: "10%",
    },
};

const CameraButton = () => {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: COLORS.primary,
            }}
        >
            <Image
                source={require('../assets/icons/camera.png')}
                resizeMode="contain"
                style={{
                    width: 23,
                    height: 23
                }}
            />
        </View>
    );
};

const Tabs = () => {

    return (
        <Tab.Navigator
            tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.primary : COLORS.gray;

                    switch (route.name) {
                        case "Conseils":
                            return (
                                <Image
                                    source={require('../assets/icons/flash_icon.png')}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                        case "Profile":
                            return (
                                <CameraButton />
                            );
                        case "Jardin":
                            return (
                                <Image
                                    source={require('../assets/icons/seed.png')}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                        case "Rappels":
                            return (
                                <Image
                                    source={require('../assets/icons/heart_icon.png')}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                    }
                }
            })}
        >
            <Tab.Screen
                name="Conseils"
                component={Conseils}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
            />
            <Tab.Screen
                name="Jardin"
                component={Jardin}
            />
            <Tab.Screen
                name="Rappels"
                component={Rappels}
            />
        </Tab.Navigator>
    );
};

export default Tabs;

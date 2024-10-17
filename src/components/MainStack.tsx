import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { HomeScreen } from "./HomeScreen";
import { NFCReadScreen } from "./NFCReadScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#65adf1",
                },
                headerTintColor: "#ffffff",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "NFC App" }}
            />
            <StackNavigator.Screen
                name="NFCRead"
                component={NFCReadScreen}
                options={{ title: "Leer NFC" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
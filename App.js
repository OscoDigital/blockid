/**
 * BlockID White Label App
 * https://github.com/blockid/white-label-app
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ScanScreen from "./src/screens/ScanScreen";
import VerificationScreen from "./src/screens/VerificationScreen";
import 'react-native-url-polyfill/auto';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Scan Code"
                    component={ScanScreen}
                />
                <Stack.Screen
                    name="Verification"
                    component={VerificationScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

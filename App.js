import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NavigationDrawer from './src/Navigation/Drawer';
import RecommendationScreen from './src/screens/RecommendationScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Selection" component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="NavigationDrawer" component={NavigationDrawer} options={{ headerShown: false }} />
                    <Stack.Screen name="Recommendations" component={RecommendationScreen} options={{ headerTitleAlign: 'center' }} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export default App;

import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ListScreen } from './src/Components/ListScreen'
import { DetailScreen } from './src/Components/DetailScreen'
import { RootStackParamList } from './src/navigation/types';

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='List'>
                <Stack.Screen 
                    name='List' 
                    component={ListScreen} 
                    options={{ title: 'Seven Day Forecast: London' }}  
                />
                <Stack.Screen name='Detail' component={DetailScreen}  />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

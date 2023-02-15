import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { ListScreen } from './Components/ListScreen'
import { DetailScreen } from './Components/DetailScreen'
import { RootStackParamList } from './navigation/types';
import { Button } from './Components/Button';

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='List'>
                <Stack.Screen 
                    name='List' 
                    component={ListScreen} 
                    options={{ title: 'Seven Day Forecast' }}  
                />
                <Stack.Screen name='Detail' component={DetailScreen} options={({ route }) => ({ title: route.params.title,  headerBackVisible: true })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

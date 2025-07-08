import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { routes } from '@/constant/routes';
import HomeScreen from '@/screens/HomeScreen';
import BottomTabNavigator from './BottomTabNavigator';
const Stack = createStackNavigator();
const AppStack = () => {
    return (
        <>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,

                }}
            >
                <Stack.Screen name={routes.home} component={HomeScreen} />
                <Stack.Screen name="Profile" component={BottomTabNavigator} />
            </Stack.Navigator>
        </>
    )
}

export default AppStack

const styles = StyleSheet.create({})
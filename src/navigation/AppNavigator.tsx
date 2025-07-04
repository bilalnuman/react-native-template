import React from 'react'
import BottomTabNavigator from './BottomTabNavigator';
import PublicNavigator from './PublicNavigator';

const AppNavigator = () => {
    const isAuthenticated = false;
    return isAuthenticated ? <BottomTabNavigator /> : <PublicNavigator />
}

export default AppNavigator
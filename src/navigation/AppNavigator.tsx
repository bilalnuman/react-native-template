import React from 'react'
import BottomTabNavigator from './BottomTabNavigator';
import PublicNavigator from './PublicNavigator';
import { useAuthStore } from '@/store/useAuthStore';

const AppNavigator = () => {
    const { isAuthenticated } = useAuthStore()
    return isAuthenticated ? <BottomTabNavigator /> : <PublicNavigator />
}

export default AppNavigator
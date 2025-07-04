import React, { useState } from 'react'
import BottomTabNavigator from './BottomTabNavigator';
import PublicNavigator from './PublicNavigator';
import { useAuth } from '@/providers/AuthProvider';
import SplashScreen from '@/screens/SplashScreen';

const AppNavigator = () => {
    const { isAuthenticated, isLoading, isInitialized } = useAuth()
    const [isSplashComplete, setIsSplashComplete] = useState(false)

    const handleSplashComplete = () => {
        setIsSplashComplete(true)
    }
    if (!isSplashComplete || !isInitialized || isLoading) {
        return <SplashScreen onReady={handleSplashComplete} />
    }

    return isAuthenticated ? <BottomTabNavigator /> : <PublicNavigator />
}

export default AppNavigator
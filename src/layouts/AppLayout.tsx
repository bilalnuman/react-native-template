import { StatusBar, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import BackgroundImage from '@/shared/BackgroundImage'
import { SafeAreaView } from 'react-native-safe-area-context';
interface AppLayoutProps {
    children: ReactNode
}
const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 16 }}>
            <StatusBar backgroundColor="#000" translucent={true} barStyle="light-content" />
            <BackgroundImage source={require('@/assets/linear-bg.png')} />
            {children}
        </SafeAreaView>
    )
}

export default AppLayout

const styles = StyleSheet.create({})
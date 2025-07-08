import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import BackgroundImage from '@/shared/BackgroundImage'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
interface AppLayoutProps {
    children: ReactNode
}
const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 16 }}>
            <StatusBar backgroundColor="#000" translucent={true} barStyle="light-content" />
            <BackgroundImage source={require('@/assets/linear-bg.png')} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", paddingVertical: 30 }}>
                <MaterialIcon
                    name="keyboard-backspace"
                    size={24}
                    color={"#fff"}
                />
                <Text style={{ color: '#fff', fontSize: 16, }}>Skip fo now</Text>
            </View>
            {children}
        </SafeAreaView>
    )
}

export default AppLayout

const styles = StyleSheet.create({})
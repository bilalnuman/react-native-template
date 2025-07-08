import { StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import BackgroundImage from '@/shared/BackgroundImage'
import { ScrollView } from 'react-native-gesture-handler'
import useKeyboard from '@/shared/hooks/useKeyboard'

const AuthLayout = ({ children }: { children: ReactNode }) => {
    const { keyboardHeight, isKeyboardVisible, scrollViewRef } = useKeyboard();
    return (
        <>
            <BackgroundImage />
            <ScrollView
                ref={scrollViewRef}
                contentContainerStyle={[
                    styles.scrollContent,
                    isKeyboardVisible && keyboardHeight > 0 && { paddingBottom: keyboardHeight + 8 }
                ]}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                {children}
            </ScrollView>
        </>
    )
}

export default AuthLayout

const styles = StyleSheet.create({
    scrollContent: {
        flexGrow: 1,
        paddingVertical: 24,
        paddingHorizontal: 16,
        justifyContent: "center",
    },
})
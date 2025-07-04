import { Button, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useResetPassword } from '../hooks';
import BackButton from '@shared/BackButton';
import { useNavigation } from '@react-navigation/native';
import { PasswordAndConfirmField } from '../components';


const ResetPasswordScreen = () => {
    const { control, errors, resetPassword, watch } = useResetPassword();
    const navigation = useNavigation();
    return (
        <>
            <BackButton />
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
            >
                <StatusBar backgroundColor="#fff" />
                <View style={styles.formWrapper}>
                    <Text style={styles.formTitle}>Reset password</Text>
                    <PasswordAndConfirmField
                        control={control}
                        errors={errors}
                        watch={watch}
                    />
                    <Button title="Reset" onPress={() => resetPassword()} />
                </View>
            </ScrollView>
        </>
    )
}

export default ResetPasswordScreen

const styles = StyleSheet.create({
    scrollContent: {
        flexGrow: 1,
        backgroundColor: '#fff',
        paddingVertical: 24,
        paddingHorizontal: 16,
    },
    formWrapper: {
        width: '100%',
        maxWidth: 400,
    },
    formTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: "flex-start",
        marginBottom: 30,
        textAlign: 'center',
    },
});

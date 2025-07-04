import { Button, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useForgotPassword } from '../hooks';
import BackButton from '@shared/BackButton';
import FormInput, { PLACEHOLDER_COLOR } from '@/shared/FormInput';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { routes } from '@/constant/routes';

const ForgotPasswordScreen = () => {
    const { control, errors, submit } = useForgotPassword();
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
                    <Text style={styles.formTitle}>Forgot Password</Text>
                    <FormInput
                        name="email"
                        control={control}
                        label='Email Address'
                        error={errors['email']?.message as string}
                        icon={<Icon name="email" size={18} color={PLACEHOLDER_COLOR} />}
                    />
                    <Button title="Submit" onPress={() => submit()} />
                    <Text style={styles.linkText}>
                        <Text
                            style={[styles.link, { width: "100%", textAlign: "right" }]}
                            onPress={() => navigation.navigate(routes.resetPassword as never)}
                        >
                            Reset password?
                        </Text>
                    </Text>
                </View>
            </ScrollView>
        </>
    )
}

export default ForgotPasswordScreen

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
    linkText: {
        textAlign: 'center',
        marginTop: 16,
        fontSize: 16,
    },
    link: {
        color: '#007AFF',
        fontWeight: 'bold',
    },
});

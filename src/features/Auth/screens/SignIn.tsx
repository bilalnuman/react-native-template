import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSignIn } from '../hooks';
import BackButton from '@shared/BackButton';
import LoadingButton from '@shared/LoadingButton';
import { useNavigation } from '@react-navigation/native';
import { routes } from '@constant/routes';
import { EmailAndPasswordField } from '../components';


const SignInScreen = () => {
    const { control, errors, signIn, apiRes } = useSignIn();
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
                    <Text style={styles.formTitle}>Sign In</Text>
                    <EmailAndPasswordField
                        control={control}
                        errors={errors}
                    />
                    <LoadingButton 
                        title="Sign In" 
                        onPress={() => signIn()} 
                        loading={apiRes.isPending}
                        loadingText="Signing in..."
                        style={styles.signInButton}
                    />
                    <Text style={styles.linkText}>
                        <Text
                            style={[styles.link, { width: "100%", textAlign: "right" }]}
                            onPress={() => navigation.navigate(routes.forgotPassword as never)}
                        >
                            Forgot password?
                        </Text>
                    </Text>
                    <Text style={styles.linkText}>
                        Already have an account?{' '}
                        <Text
                            style={styles.link}
                            onPress={() => navigation.navigate(routes.signUp as never)}
                        >
                            Sign Up
                        </Text>
                    </Text>
                </View>
            </ScrollView>
        </>
    )
}

export default SignInScreen

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
    signInButton: {
        marginTop: 24,
        marginBottom: 16,
    },
});

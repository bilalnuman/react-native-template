import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSignIn } from '../hooks';
import BackButton from '@shared/BackButton';
import { useNavigation } from '@react-navigation/native';
import { routes } from '@constant/routes';
import { EmailAndPasswordField } from '../components';
import BackgroundImage from '@/shared/BackgroundImage';
import Logo from '@/shared/Logo';
import GradientButton from '@/shared/GradientButton';
import { SafeAreaView } from 'react-native-safe-area-context';


const SignInScreen = () => {
    const { control, errors, signIn, apiRes } = useSignIn();
    const navigation = useNavigation();
    return (
        <>

            <BackgroundImage />
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.formWrapper}>
                    <Logo heading='Sign In to Your Account'
                        containerStyle={{ marginBottom: 25 }}
                    />
                    <EmailAndPasswordField
                        control={control}
                        errors={errors}
                        passwordContainerStyle={{ marginBottom: 10 }}
                        inputWrapper={{ backgroundColor: "transparent", borderRadius: 30, paddingVertical: 6 }}
                    />

                    <Text style={[styles.linkText, { marginBottom: 24 }]}>
                        <Text
                            style={[styles.link, { width: "100%", textAlign: "right" }]}
                            onPress={() => navigation.navigate(routes.forgotPassword as never)}
                        >
                            Forgot password?
                        </Text>
                    </Text>
                    <GradientButton onPress={() => signIn()} loading={apiRes.isPending} title='Submit' />
                    <Text style={[styles.linkText, { marginTop: 24 }]}>
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
        paddingVertical: 24,
        paddingHorizontal: 16,
        backgroundColor: "transparent",
        justifyContent: "center"
    },
    formWrapper: {
        width: '100%',
        maxWidth: 400,
    },
    linkText: {
        textAlign: 'center',
        fontSize: 16,
        color: "#fff"
    },
    link: {
        color: '#fff',
        fontWeight: 'bold',

    },
});

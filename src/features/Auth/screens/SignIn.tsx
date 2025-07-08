import { Text, View } from 'react-native'
import React from 'react'
import { useSignIn } from '../hooks';
import { routes } from '@constant/routes';
import { EmailAndPasswordField } from '../components';
import Logo from '@/shared/Logo';
import GradientButton from '@/shared/GradientButton';
import AuthLayout from '@/layouts/AuthLayout';
import { styles } from '../styles';


const SignInScreen = ({ navigation }: { navigation: any }) => {
    const { control, errors, signIn, apiRes } = useSignIn();
    return (
        <AuthLayout>
            <View style={styles.formWrapper}>
                <Logo heading='Sign In to Your Account'
                    containerStyle={{ marginBottom: 25 }}
                />
                <EmailAndPasswordField
                    control={control}
                    errors={errors}
                    passwordContainerStyle={{ marginBottom: 10 }}
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
                    Don't have an account?{' '}
                    <Text
                        style={styles.link}
                        onPress={() => navigation.navigate(routes.signUp as never)}
                    >
                        Sign Up
                    </Text>
                </Text>
            </View>
        </AuthLayout>
    )
}

export default SignInScreen

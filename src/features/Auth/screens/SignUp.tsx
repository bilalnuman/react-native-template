import { Button, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FormInput, { PLACEHOLDER_COLOR } from '@shared/FormInput'
import { useSignUp } from '../hooks';
import BackButton from '@shared/BackButton';
import { useNavigation } from '@react-navigation/native';
import { routes } from '@constant/routes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { PasswordAndConfirmField } from '../components';


const SignUpScreen = () => {
    const { control, errors, signUp, watch } = useSignUp();
    const navigation = useNavigation();
    return (
        <>
            {/* <BackButton /> */}
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
            >
                <StatusBar backgroundColor="#fff" />
                <View style={styles.formWrapper}>
                    <Text style={styles.formTitle}>Sign Up</Text>
                    <FormInput
                        name="name"
                        label='Enter Name'
                        floatLabel
                        control={control}
                        error={errors['name']?.message as string}
                        icon={<Feather name="user" size={18} color={PLACEHOLDER_COLOR} />}
                    />
                    <FormInput
                        name="email"
                        placeholder="Email"
                        control={control}
                        error={errors['email']?.message as string}
                        icon={<Icon name="email" size={18} color={PLACEHOLDER_COLOR} />}
                    />
                    <PasswordAndConfirmField
                        control={control}
                        errors={errors}
                        watch={watch}
                    />
                    <Button title="Sign Up" onPress={() => signUp()} />
                    <Text style={styles.linkText}>
                        Already have an account?{' '}
                        <Text
                            style={styles.link}
                            onPress={() => navigation.navigate(routes.signIn as never)}
                        >
                            Sign In
                        </Text>
                    </Text>
                </View>
            </ScrollView>
        </>
    )
}

export default SignUpScreen

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

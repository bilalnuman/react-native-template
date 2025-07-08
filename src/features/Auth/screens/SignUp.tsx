import { Text, View } from 'react-native'
import React from 'react'
import FormInput, { PLACEHOLDER_COLOR } from '@shared/FormInput'
import { useSignUp } from '../hooks';
import { routes } from '@constant/routes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { PasswordAndConfirmField } from '../components';
import GradientButton from '@/shared/GradientButton';
import Logo from '@/shared/Logo';
import AuthLayout from '@/layouts/AuthLayout';
import { styles } from '../styles';


const SignUpScreen = ({ navigation }: { navigation: any }) => {
    const { control, errors, signUp, watch, apiRes } = useSignUp();
    return (
        <AuthLayout>
            <View style={styles.formWrapper}>

                <Logo heading='Sign In to Your Account'
                    containerStyle={{ marginBottom: 25 }}
                />
                <FormInput
                    name="name"
                    placeholder='Enter Name'
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
                    icon={<Icon name="lock" size={18} color={"#fff"} />}
                />
                <GradientButton onPress={() => signUp()} loading={apiRes.isPending} title='Sign Up' />
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
        </AuthLayout>
    )
}

export default SignUpScreen

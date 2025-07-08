import { Text, View } from 'react-native'
import React from 'react'
import { useForgotPassword } from '../hooks';
import FormInput, { PLACEHOLDER_COLOR } from '@/shared/FormInput';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '@/shared/Logo';
import GradientButton from '@/shared/GradientButton';
import { routes } from '@/constant/routes';
import AuthLayout from '@/layouts/AuthLayout';
import { styles } from '../styles';

const ForgotPasswordScreen = ({ navigation }: { navigation: any }) => {
    const { control, errors, submit, apiRes } = useForgotPassword();
    return (
        <AuthLayout>
            <View style={styles.formWrapper}>
                <Logo heading='Reset Password'
                    containerStyle={{ marginBottom: 25 }}
                    subHeading="Don't worry! It occurs. Please enter the email address linked with your account."
                />
                <FormInput
                    name="email"
                    control={control}
                    placeholder='Email Address'
                    error={errors['email']?.message as string}
                    iconPosition='left'
                    icon={<Icon name="email" size={18} color={PLACEHOLDER_COLOR} />}
                />
                <GradientButton onPress={() => submit()} loading={apiRes.isPending} title='Send Code' />
                <Text
                    style={[styles.link, { width: "100%", textAlign: "right", marginTop: 30 }]}
                    onPress={() => navigation.navigate(routes.otp as never)}
                >
                    Otp?
                </Text>
            </View>
        </AuthLayout>
    )
}

export default ForgotPasswordScreen


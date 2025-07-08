import {Text, View } from 'react-native'
import React from 'react'
import { useResetPassword } from '../hooks';
import { PasswordAndConfirmField } from '../components';
import GradientButton from '@/shared/GradientButton';
import Logo from '@/shared/Logo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { routes } from '@/constant/routes';
import AuthLayout from '@/layouts/AuthLayout';
import { styles } from '../styles';


const ResetPasswordScreen = ({ navigation }: { navigation: any }) => {
    const { control, errors, resetPassword, watch, apiRes } = useResetPassword();
    return (
        <AuthLayout>
            <View style={styles.formWrapper}>
                <Logo heading='Create New Password'
                    subHeading="Your new password must be unique from those previously used."
                    containerStyle={{ marginBottom: 25, paddingHorizontal: 20 }}
                />
                <PasswordAndConfirmField
                    control={control}
                    errors={errors}
                    watch={watch}
                    icon={<Icon name="lock" size={18} color={"#fff"} />}
                />
                <GradientButton onPress={() => resetPassword()} loading={apiRes.isPending} title='Reset Password' />
                <Text
                    style={{ textAlign: "center", marginTop: 30, color: "#fff" }}
                    onPress={() => navigation.navigate(routes.congratulations as never)}
                >
                    Congratulations
                </Text>
            </View>
        </AuthLayout>
    )
}

export default ResetPasswordScreen

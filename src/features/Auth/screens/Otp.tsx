import { Text, View } from 'react-native'
import React from 'react'
import { useOtp } from '../hooks';
import FormInput, { PLACEHOLDER_COLOR } from '@/shared/FormInput';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '@/shared/Logo';
import GradientButton from '@/shared/GradientButton';
import { routes } from '@/constant/routes';
import AuthLayout from '@/layouts/AuthLayout';
import { styles } from '../styles';

const OtpScreen = ({ navigation }: { navigation: any }) => {
    const { control, errors, submit, apiRes } = useOtp();
    return (
        <AuthLayout>
            <View style={styles.formWrapper}>
                <Logo heading='OTP Verification'
                    subHeading='Enter the verification code we just sent on your email address.'
                    containerStyle={{ marginBottom: 25, paddingHorizontal: 20 }}
                />
                <FormInput
                    name="otp"
                    control={control}
                    placeholder='Enter OTP'
                    error={errors['otp']?.message as string}
                    iconPosition='left'
                    icon={<Icon name="email" size={18} color={PLACEHOLDER_COLOR} />}
                />
                <GradientButton onPress={() => submit()} loading={apiRes.isPending} title='Verify Code' />
                <Text style={[styles.linkText, { marginTop: 24 }]}>
                    Didn’t Receive Code?{' '}
                    <Text
                        onPress={() => console.log('resend')}
                        style={styles.link}>
                        Resend
                    </Text>
                </Text>
                <Text
                    style={styles.link}
                    onPress={() => navigation.navigate(routes.resetPassword as never)}
                >
                    Reset
                </Text>
            </View>
        </AuthLayout>
    )
}

export default OtpScreen
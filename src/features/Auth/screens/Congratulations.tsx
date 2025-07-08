import { View } from 'react-native'
import React from 'react'
import Logo from '@/shared/Logo';
import GradientButton from '@/shared/GradientButton';
import { routes } from '@/constant/routes';
import AuthLayout from '@/layouts/AuthLayout';
import { styles } from '../styles';

const CongratulationScreen = ({ navigation }: { navigation: any }) => {
    return (
        <AuthLayout>
            <View style={styles.formWrapper}>
                <Logo heading='Congratulations!'
                    containerStyle={{ marginBottom: 25, paddingHorizontal: 30 }}
                    subHeading="Your password has been changed successfully."
                />
                <GradientButton onPress={() => navigation.navigate(routes.signIn)} title='Back to Login' />
            </View>
        </AuthLayout>
    )
}

export default CongratulationScreen

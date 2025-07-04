import { StyleSheet } from 'react-native'
import React from 'react'
import FormInput, { PLACEHOLDER_COLOR } from '@/shared/FormInput'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Control } from 'react-hook-form';
interface EmailAndPasswordProps {
    control: Control<any>;
    errors?: any;
}
const EmailAndPassword = ({ control, errors }: EmailAndPasswordProps) => {
    return (
        <>
            <FormInput
                name="email"
                placeholder="Email"
                control={control}
                label='Email Address'
                floatLabel
                error={errors['email']?.message as string}
                icon={<Icon name="email" size={18} color={PLACEHOLDER_COLOR} />}
            />
            <FormInput
                name="password"
                placeholder="Password"
                control={control}
                error={errors['password']?.message as string}
                secureTextEntry
                enablePasswordToggle
            />
        </>
    )
}

export default EmailAndPassword

const styles = StyleSheet.create({})
import { ViewStyle } from 'react-native'
import React from 'react'
import FormInput from '@/shared/FormInput'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Control } from 'react-hook-form';
interface EmailAndPasswordProps {
    control: Control<any>;
    errors?: any;
    emailContainerStyle?: ViewStyle;
    passwordContainerStyle?: ViewStyle;
    inputWrapper?: ViewStyle;
}
const EmailAndPassword = ({ control, errors, emailContainerStyle, passwordContainerStyle, inputWrapper }: EmailAndPasswordProps) => {
    return (
        <>
            <FormInput
                name="email"
                placeholder="Enter your email"
                control={control}
                error={errors['email']?.message as string}
                containerStyle={emailContainerStyle}
                inputWrapper={inputWrapper}
                placeholderTextColor="#fff"
                icon={<Icon name="email" size={18} color={"#fff"} />}
                iconPosition="left"
            />
            <FormInput
                name="password"
                placeholder="Enter your password"
                control={control}
                error={errors['password']?.message as string}
                secureTextEntry
                containerStyle={passwordContainerStyle}
                inputWrapper={inputWrapper}
                enablePasswordToggle
                icon={<Icon name="lock" size={18} color={"#fff"} />}
                iconPosition="left"
            />
        </>
    )
}

export default EmailAndPassword
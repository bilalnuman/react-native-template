import React from 'react'
import FormInput from '@/shared/FormInput'
import { Control } from 'react-hook-form';
import { usePasswordValidater } from '../hooks';
interface PasswordAndConfirmProps {
    control: Control<any>;
    errors?: any;
    watch: any;
    icon?: React.ReactNode
}
const PasswordAndConfirm = ({ control, errors, watch, icon }: PasswordAndConfirmProps) => {
    const passwordMatch = usePasswordValidater(watch);
    return (
        <>
            <FormInput
                name="password"
                placeholder="Password"
                control={control}
                error={errors['password']?.message as string}
                secureTextEntry
                enablePasswordToggle
                icon={icon}
            />
            <FormInput
                name="confirmPassword"
                placeholder="Confirm Password"
                control={control}
                error={passwordMatch as string}
                secureTextEntry
                enablePasswordToggle
                icon={icon}
            />
        </>
    )
}

export default PasswordAndConfirm
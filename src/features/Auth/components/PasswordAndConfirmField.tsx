import React from 'react'
import FormInput from '@/shared/FormInput'
import { Control } from 'react-hook-form';
import { usePasswordValidater } from '../hooks';
interface PasswordAndConfirmProps {
    control: Control<any>;
    errors?: any;
    watch: any;
}
const PasswordAndConfirm = ({ control, errors, watch }: PasswordAndConfirmProps) => {
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
            />
            <FormInput
                name="confirmPassword"
                placeholder="Confirm Password"
                control={control}
                error={passwordMatch as string}
                secureTextEntry
                enablePasswordToggle
            />
        </>
    )
}

export default PasswordAndConfirm
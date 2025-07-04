import { useMutation } from '@tanstack/react-query';
import { login, signup } from './services';

export const useSignin = () => {
    return useMutation({
        mutationFn: login,
    });
};

export const useSignup = () => {
    return useMutation({
        mutationFn: signup,
    });
};
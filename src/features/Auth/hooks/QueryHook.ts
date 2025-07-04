import { useMutation } from '@tanstack/react-query';
import { login, signup } from '../services';
import { SignInFormValues } from '../schemas';

export const useSignup = () => {
    return useMutation({
        mutationFn: signup,
    });
};

export const useSignin = () => {
    return useMutation({
        mutationFn: login,
    });
};

// export const useForgotPassword = () => {
//     return useMutation({
//         mutationFn: forgotpassword,
//     });
// };

// export const usePasswordReset = () => {
//     return useMutation({
//         mutationFn: ({ payload, id }: { payload: any; id: string }) =>
//             passwordReset(payload, id),
//     });
// };

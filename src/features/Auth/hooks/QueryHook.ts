import { useMutation, useQuery } from '@tanstack/react-query';
import { login, me, signup } from '../services';


export const useMe = (enabled: boolean = true) => {
    return useQuery({
        queryKey: ['me'],
        queryFn: () => me(),
        enabled,
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: 1,
    });
};

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

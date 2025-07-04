import { zodResolver } from "@hookform/resolvers/zod";
import { showMessage } from 'react-native-flash-message';
import { useForm } from "react-hook-form";
import { ForgotPasswordSchema, ResetPasswordSchema, SignInFormValues, SignInSchema, SignupSchema } from "../schemas";
import { useEffect, useState } from "react";
import { useSignin } from "./QueryHook";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthStore } from "@/store/useAuthStore";

export const useSignUp = () => {

    const {
        handleSubmit,
        control,
        watch,
        reset,
        trigger,
        formState: { errors },
    } = useForm<any>({
        resolver: zodResolver(SignupSchema),
        mode: "onChange"
    });

    const signUp = handleSubmit((data) => console.log(data))

    useEffect(() => {
        return () => {
            reset();
            trigger();
        }
    }, [reset, trigger])
    return {
        control,
        errors,
        signUp,
        watch,
        reset
    };

}

export const useSignIn = () => {
    const { mutateAsync: signin, data, isPending, isError, error } = useSignin()
    const { setToken } = useAuthStore()
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<any>({
        resolver: zodResolver(SignInSchema),
        mode: "onChange"
    });

    const signIn = handleSubmit((data: SignInFormValues) => {
        signin(data, {
            onSuccess: async (data) => {
                if (data?.data?.access_token) {
                    await AsyncStorage.setItem('token', data?.data?.access_token);
                    setToken(data?.data?.access_token)
                }
                showMessage({ message: "Your logged in successfully", type: "success" })
                reset()
            },
            onError: (error: any) => {
                const message = error?.errors?.non_field_errors?.toString()
                showMessage({ message, type: 'danger'});
            }
        })
    })

    useEffect(() => {
        return () => {
            reset();
        }
    }, [reset])

    const apiRes = { data, isPending, isError, error }

    return {
        control,
        errors,
        signIn,
        apiRes
    };
}

export const useForgotPassword = () => {

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<any>({
        resolver: zodResolver(ForgotPasswordSchema),
        mode: "onChange"
    });

    const submit = handleSubmit((data) => console.log(data))
    useEffect(() => {
        return () => {
            reset();
        }
    }, [reset])
    return {
        control,
        errors,
        submit,
    };
}

export const useResetPassword = () => {

    const {
        handleSubmit,
        control,
        watch,
        reset,
        formState: { errors },
    } = useForm<any>({
        resolver: zodResolver(ResetPasswordSchema),
        mode: "onChange"
    });

    const resetPassword = handleSubmit((data) => console.log(data))
    useEffect(() => {
        return () => {
            reset();
        }
    }, [reset])
    return {
        control,
        errors,
        resetPassword,
        watch
    };
}

export const usePasswordValidater = (watch: any) => {
    const [passwordMatch, setPasswordMatch] = useState(true)

    useEffect(() => {
        const subscription = watch((value: any) => {
            const password = value.password
            const confirmPassword = value.confirmPassword
            confirmPassword && setPasswordMatch(password === confirmPassword && password !== undefined && password !== '')
        })

        return () => subscription.unsubscribe()
    }, [watch])

    return passwordMatch ? "" : "Passwords do not match.";
}
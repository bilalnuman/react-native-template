import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ForgotPasswordSchema, ResetPasswordSchema, SignInSchema, SignupSchema } from "../schemas";
import { useEffect, useState } from "react";

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

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<any>({
        resolver: zodResolver(SignInSchema),
        mode: "onChange"
    });

    const signIn = handleSubmit((data) => console.log(data))

    useEffect(() => {
        return () => {
            reset();
        }
    }, [reset])

    return {
        control,
        errors,
        signIn,
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
import { z } from 'zod';

const passwordSchema = {
    password: z.string().min(8, { message: 'Password must be at least 8 characters' }).default(""),
    confirmPassword: z.string().min(8, { message: 'Confirm password must be at least 8 characters' }).default("")
}
const email = {
    email: z.string().email({ message: 'Invalid email address' }).default(""),
}

export const SignupSchema = z.object({
    name: z.string().min(3, { message: 'Name must be at least 3 characters' }).default(""),
    ...email,
    ...passwordSchema
});

export type SignUpFormValues = z.infer<typeof SignupSchema>;

export const SignInSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }).default(""),
    password: z.string().min(8, { message: 'Password must be at least 8 characters' }).default(""),
});

export type SignInFormValues = z.infer<typeof SignInSchema>;

export const ResetPasswordSchema = z.object({
    ...passwordSchema
});

export type ResetPasswordFormValues = z.infer<typeof ResetPasswordSchema>;

export const ForgotPasswordSchema = z.object(email);

export type ForgotPasswordSchemaFormValues = z.infer<typeof ForgotPasswordSchema>;

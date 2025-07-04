import React from 'react';
import SignInScreen from '@features/Auth/screens/SignIn';
import SignUpScreen from '@features/Auth/screens/SignUp';
import { createStackNavigator } from '@react-navigation/stack';
import { routes } from '@constant/routes';
import ForgotPasswordScreen from '@/features/Auth/screens/ForgotPassword';
import ResetPasswordScreen from '@/features/Auth/screens/ResetPassword';

const Stack = createStackNavigator();

const PublicNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={routes.signIn} component={SignInScreen} />
      <Stack.Screen name={routes.signUp} component={SignUpScreen} />
      <Stack.Screen name={routes.forgotPassword} component={ForgotPasswordScreen} />
      <Stack.Screen name={routes.resetPassword} component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
};

export default PublicNavigator;
import React, { useEffect } from 'react';
import SignInScreen from '@features/Auth/screens/SignIn';
import SignUpScreen from '@features/Auth/screens/SignUp';
import { createStackNavigator } from '@react-navigation/stack';
import { routes } from '@constant/routes';
import ForgotPasswordScreen from '@/features/Auth/screens/ForgotPassword';
import ResetPasswordScreen from '@/features/Auth/screens/ResetPassword';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const PublicNavigator = () => {
  useEffect(() => {
    changeNavigationBarColor('#358AC9', false, false);
  }, [])
  return (
    <SafeAreaView style={{ flexGrow:1}} >
      <StatusBar translucent={true} backgroundColor="#358AC9" barStyle="dark-content" />
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
    </SafeAreaView>
  );
};

export default PublicNavigator;
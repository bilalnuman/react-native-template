import React, { useEffect, useState } from 'react';
import SignInScreen from '@features/Auth/screens/SignIn';
import SignUpScreen from '@features/Auth/screens/SignUp';
import { createStackNavigator } from '@react-navigation/stack';
import { routes } from '@constant/routes';
import ForgotPasswordScreen from '@/features/Auth/screens/ForgotPassword';
import ResetPasswordScreen from '@/features/Auth/screens/ResetPassword';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundImage from '@/shared/BackgroundImage';
import OtpScreen from '@/features/Auth/screens/Otp';
import CongratulationScreen from '@/features/Auth/screens/Congratulations';

const Stack = createStackNavigator();
const PublicNavigator = () => {
  const [isReady, setIsReady] = useState(false)
  useEffect(() => {
    changeNavigationBarColor('transparent', true, true);
    setTimeout(() => { setIsReady(true) }, 0)
  }, [])
  if (!isReady) {
    return <View style={{ backgroundColor: "#0D4984", height: "100%" }}></View>
  }


  return (
    <>
      <BackgroundImage />
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content" />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,

          }}
        >
          <Stack.Screen name={routes.signIn} component={SignInScreen} />
          <Stack.Screen name={routes.signUp} component={SignUpScreen} />
          <Stack.Screen name={routes.forgotPassword} component={ForgotPasswordScreen} />
          <Stack.Screen name={routes.resetPassword} component={ResetPasswordScreen} />
          <Stack.Screen name={routes.otp} component={OtpScreen} />
          <Stack.Screen name={routes.congratulations} component={CongratulationScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </>
  );
};

export default PublicNavigator;
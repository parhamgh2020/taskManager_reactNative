import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SignIn from './screens/auth/SignIn';
import SignUp from './screens/auth/SignUp';
import Onboarding from './screens/auth/Onboarding';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default Routes;

const styles = StyleSheet.create({});

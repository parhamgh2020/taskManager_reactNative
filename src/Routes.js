import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//
import SignIn from './screens/auth/SignIn';
import SignUp from './screens/auth/SignUp';
import Onboarding from './screens/auth/Onboarding';
import Home from './screens/app/Home';
import AddTask from './screens/app/AddTask';
import Tasks from './screens/app/Tasks';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    setUser(true);
    if (initializing) {
      setInitializing(false);
    }
  }, []);

  if (initializing) {
    return null;
  }

  if (user) {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddTask" component={AddTask} />
      <Stack.Screen name="Tasks" component={Tasks} />
    </Stack.Navigator>
  );
};

export default Routes;

const styles = StyleSheet.create({});

import {StyleSheet} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
//
import SignIn from './screens/auth/SignIn';
import SignUp from './screens/auth/SignUp';
import Onboarding from './screens/auth/Onboarding';
import Home from './screens/app/Home';
import AddTask from './screens/app/AddTask';
import Tasks from './screens/app/Tasks';
//
import {Context as AuthContext} from './context/AuthContext';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Routes = () => {
  console.log('🚀 ~ Routes ~ Routes');
  const [isSingedIn, setSignedIn] = useState(false);
  const [initializing, setInitializing] = useState(true);

  const _retrieveData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setSignedIn(true);
      }
    } catch (error) {
      console.log('🚀 ~ _retrieveData= ~ error:', error);
    }
  };

  useEffect(() => {
    console.log('🚀 ~ useEffect ~ useEffect');
    _retrieveData();
    if (initializing) {
      setInitializing(false);
    }
  });

  if (initializing) {
    return null;
  }

  const Tabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Tasks" component={Tasks} />
      </Tab.Navigator>
    );
  };

  if (!isSingedIn) {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    );
  }

  return (
    <Drawer.Navigator screenOptions={{headerShown: true}}>
      <Drawer.Screen name="AddTask" component={AddTask} />
      <Drawer.Screen name="Tabs" component={Tabs} />
    </Drawer.Navigator>
  );
};

export default Routes;

const styles = StyleSheet.create({});

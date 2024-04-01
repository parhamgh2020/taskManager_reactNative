import {StyleSheet} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DrawerContent, createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
//
import SignIn from './screens/auth/SignIn';
import SignUp from './screens/auth/SignUp';
import Onboarding from './screens/auth/Onboarding';
import Home from './screens/app/Home';
import AddTask from './screens/app/AddTask';
import Tasks from './screens/app/Tasks';
//
import {Context as AuthContext} from './context/AuthContext';
import CustomDrawerContent from './components/DrawerComponents';

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
    const getTabBarIcon = (route, focused) => {
      if (route.name === 'Home') {
        return focused ? 'home' : 'home-outline';
      } else if (route.name === 'Tasks') {
        return focused ? 'list' : 'list-outline';
      }
    };

    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            const iconName = getTabBarIcon(route, focused);
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Tasks" component={Tasks} />
      </Tab.Navigator>
    );
  };

  return (
    <>
      {isSingedIn ? (
        <Drawer.Navigator
          drawerContent={props => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="AddTask" component={AddTask} />
          <Drawer.Screen name="Tabs" component={Tabs} />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      )}
    </>
  );
};

export default Routes;

const styles = StyleSheet.create({});

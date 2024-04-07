import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Routes from './src/Routes';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#ffffff',
    },
  };
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './src/theme';
import Login from './src/components/Login';
import SignUp from './src/components/SignUp';

// Web-specific imports
import { NavigationContainer as WebNavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function App() {
  const NavigationWrapper = Platform.OS === 'web' ? WebNavigationContainer : NavigationContainer;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavigationWrapper>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationWrapper>
    </ThemeProvider>
  );
}

export default App;
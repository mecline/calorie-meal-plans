import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as NativeThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './src/theme';
import Login from './src/components/Login';
import SignUp from './src/components/SignUp';

const Stack = createNativeStackNavigator();

function MobileNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function WebNavigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  if (Platform.OS === 'web') {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <WebNavigation />
      </MuiThemeProvider>
    );
  }
  
  return (
    <NativeThemeProvider theme={theme}>
      <MobileNavigation />
    </NativeThemeProvider>
  );
}

export default App;

import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './src/theme';

// Platform-specific imports
import WebLogin from './src/components/web/WebLogin';
import WebSignUp from './src/components/web/WebSignUp';
import WebDashboard from './src/components/web/WebDashboard';
import WebAddRecipe from './src/components/web/WebAddRecipe';
import MobileLogin from './src/components/mobile/MobileLogin';
import MobileSignUp from './src/components/mobile/MobileSignUp';
import MobileDashboard from './src/components/mobile/MobileDashboard';
import MobileAddRecipe from './src/components/mobile/MobileAddRecipe';

const Stack = createNativeStackNavigator();

function MobileApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login" 
        screenOptions={{ 
          headerShown: false,
          contentStyle: { backgroundColor: 'white' }
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={MobileLogin}
          options={{ title: 'Login' }}
        />
        <Stack.Screen 
          name="SignUp" 
          component={MobileSignUp}
          options={{ title: 'Sign Up' }}
        />
        <Stack.Screen 
          name="Dashboard" 
          component={MobileDashboard}
          options={{ title: 'Dashboard' }}
        />
        <Stack.Screen 
          name="AddRecipe" 
          component={MobileAddRecipe}
          options={{ title: 'Add Recipe' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function WebApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WebLogin />} />
        <Route path="/signup" element={<WebSignUp />} />
        <Route path="/dashboard" element={<WebDashboard />} />
        <Route path="/add-recipe" element={<WebAddRecipe />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      {Platform.OS === 'web' ? <WebApp /> : <MobileApp />}
    </ThemeProvider>
  );
}

export default App;

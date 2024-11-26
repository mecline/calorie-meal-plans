import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from '@mui/material/styles';
import theme from './src/theme';

// Modify your Login and SignUp components to use navigation prop instead of useNavigate
// For example, in your Login component:
// Instead of using useNavigate(), use navigation.navigate('SignUp')
import Login from './src/components/Login';
import SignUp from './src/components/SignUp';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ThemeProvider theme={theme}>
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
            component={Login}
            options={{ title: 'Login' }}
          />
          <Stack.Screen 
            name="SignUp" 
            component={SignUp}
            options={{ title: 'Sign Up' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
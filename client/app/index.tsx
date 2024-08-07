import React from 'react';
import Login from '@/screens/auth/Login';
import Register from '../screens/auth/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen 
        name='Register' 
        component={Register} 
        options={{ headerShown: false }} />
        <Stack.Screen 
          name='Login' 
          component={Login} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

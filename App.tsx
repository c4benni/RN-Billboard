import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Platform } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ChartsScreen from './screens/ChartsScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  const isAndriod = Platform.OS == 'android';
  const isIOS = Platform.OS == 'ios'
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Charts"
          component={ChartsScreen}
          options={{
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTitleStyle: {
              color: '#fff'
            },
            headerShadowVisible: isAndriod,
            headerTransparent: isIOS,
            headerTintColor: '#000',
            // headerBlurEffect: 'systemChromeMaterialDark',
            title: ''
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

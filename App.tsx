import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Platform } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ChartsScreen from './screens/ChartsScreen';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from './redux/store';
// import UserList from './UserList';

const Stack = createNativeStackNavigator()

export default function App() {
  const isAndriod = Platform.OS == 'android';
  const isIOS = Platform.OS == 'ios'

  return (
    <Provider store={store}>
      <StatusBar translucent />
      {/* <UserList /> */}

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
    </Provider>
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

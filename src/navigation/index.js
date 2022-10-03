import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from './TabNavigator';
import {SplashScreen, LoginScreen, DashboardScreen} from '../screens';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,,
      }}
      tabBar={props => <TabBar {...props} />}
      initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;

// Tabnaviagaion.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import RegisterStack from './RegisterStack'; // your stack navigator
import ProfileDrawer from './ProfileDrawer'; // your drawer in Profile tab
import BLEScanner from '../screens/Homescreen/uistylingscreens/BLEscanner';
import Hooksimp from '../screens/Homescreen/Hooksimp';
import HooksDrawer from './HooksDrawer';
import Getmethod from '../screens/Homescreen/axiosscreens/Getmethod';
import Apidrawer from './Apidrawer';
import WeatherScreen from '../screens/Homescreen/NewsScreen';
import NewsScreen from '../screens/Homescreen/NewsScreen';

const Tab = createBottomTabNavigator();

const Tabnaviagaion = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Register"
        component={RegisterStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileDrawer}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Hooks"
        component={HooksDrawer}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" color={color} size={size} />
          ),
        }}
      />
        <Tab.Screen
        name="API"
        component={Apidrawer}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="outline" color={color} size={size} />
          ),
        }}
      />
        <Tab.Screen
        name="news"
        component={NewsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabnaviagaion;

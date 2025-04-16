import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import UserProfileList from '../screens/Homescreen/uistylingscreens/Userprofilecard';
import ImagesScreen from '../screens/Imagesscreens/ImagesScreen';
import { useSharedValue } from 'react-native-reanimated';
import TodoApp from '../screens/Homescreen/uistylingscreens/Todoapp';

const Drawer = createDrawerNavigator();

const ProfileDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'front',
        headerStyle: { backgroundColor: '#1e90ff' },
        headerTintColor: '#fff',
        drawerActiveTintColor: '#1e90ff',
      }}
    >
      <Drawer.Screen name="User List" component={UserProfileList} />
      <Drawer.Screen name="Todo" component={TodoApp} />
    </Drawer.Navigator>
  );
};

export default ProfileDrawer;

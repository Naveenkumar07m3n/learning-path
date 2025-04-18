import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Getmethod from "../screens/Homescreen/axiosscreens/Getmethod";
import Postmethod from '../screens/Homescreen/axiosscreens/Postmethod';
import Putmethod from '../screens/Homescreen/axiosscreens/Putmethod';
import Deletmethod from '../screens/Homescreen/axiosscreens/Deletmethod';
import Socketscreen from '../screens/Homescreen/Socketscreens';




const Drawer = createDrawerNavigator();

const Apidrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="getmethod"
    screenOptions={{
        drawerType: 'front',
        headerStyle: { backgroundColor: '#1e90ff' },
        headerTintColor: '#fff',
        drawerActiveTintColor: '#1e90ff',
        // headerTitleAlign: 'center',
      }}>
      <Drawer.Screen name="getmethod" component={Getmethod} />
      <Drawer.Screen name="postmethod" component={Postmethod} />
      <Drawer.Screen name="putmethod" component={Putmethod} />
      <Drawer.Screen name="deletemethod" component={Deletmethod} />
      <Drawer.Screen name="Socketscreen" component={Socketscreen} />
      
      {/* <Drawer.Screen name="Redux" component={Reduxcounter} /> */}
      {/* You can add more screens here if needed */}
    </Drawer.Navigator>
  );
};

export default Apidrawer;
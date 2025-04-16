// navigation/HooksDrawer.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Hooksimp from '../screens/Homescreen/Hooksimp';
import Hooksuseeffect from '../screens/Homescreen/Hooksuseeffect';
import Todoreducer from '../screens/Homescreen/Todoreducer';
import Hooksmemo from '../screens/Homescreen/Hooksmemo';
import Mainscreencontext from '../screens/Homescreen/Mainscreencontext';
import Reduxcounter from '../screens/Homescreen/Reduxcounter';

const Drawer = createDrawerNavigator();

const HooksDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Usestate"
    screenOptions={{
        drawerType: 'front',
        headerStyle: { backgroundColor: '#1e90ff' },
        headerTintColor: '#fff',
        drawerActiveTintColor: '#1e90ff',
      }}>
      <Drawer.Screen name="Usestate" component={Hooksimp} />
      <Drawer.Screen name="UseEffect" component={Hooksuseeffect} />
      <Drawer.Screen name="Usereducer" component={Todoreducer} />
      <Drawer.Screen name="Usememo" component={Hooksmemo} />
      <Drawer.Screen name="Usecontext" component={Mainscreencontext} />
      {/* <Drawer.Screen name="Redux" component={Reduxcounter} /> */}
      {/* You can add more screens here if needed */}
    </Drawer.Navigator>
  );
};

export default HooksDrawer;

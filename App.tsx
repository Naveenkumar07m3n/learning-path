import 'react-native-reanimated';
import 'react-native-gesture-handler';
import React from "react";
import { ScrollView, Text, View } from "react-native";
import Greetings from "./src/components/Greetings";
import Inbu from "./src/components/Inbu";
import Ccllaass from "./src/components/Ccllaass";
import TaskListByPriority from "./src/components/Tasklist";
import ContactList from "./src/components/Allflatprop";
import LifecycleA from "./src/components/classcompnent/LifecycleA";
import LifecycleB from "./src/components/classcompnent/LifecycleB";
import LifecycleC from "./src/components/classcompnent/LIfecycleC";
import LifecycleDemo from "./src/screens/Homescreen/useeffectscreen/Lifecycledemo";
import LoginScreen from "./src/screens/Homescreen/LoginScreen";
import RegisterScreen from "./src/screens/Homescreen/RegisterScreen";
import BLEScanner from "../awesomeproj/src/screens/Homescreen/uistylingscreens/BLEscanner";
import UserProfile from "./src/screens/Homescreen/uistylingscreens/Userprofilecard";
import TodoApp from "./src/screens/Homescreen/uistylingscreens/Todoapp";
import Config from "react-native-config";
import ImagesScreen from "./src/screens/Imagesscreens/ImagesScreen";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterStack from "./src/navigation/RegisterStack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Vecto icons for Tab navigation
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Ionicons } from '@expo/vector-icons';
// import 'react-native-gesture-handler';
import ProfileDrawer from "./src/navigation/ProfileDrawer";


console.log("Environment:===>", Config.APP_ENV);
console.log("API URL:", Config.API_URL);

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const App = () =>{
return(

//   <NavigationContainer>
//   <Stack.Navigator initialRouteName="RegisterScreen">
//     <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
//     <Stack.Screen name="LoginScreen" component={LoginScreen} />
//   </Stack.Navigator>
// </NavigationContainer>

<NavigationContainer>
<Tab.Navigator
        screenOptions={{
          // tabBarActiveTintColor: '#1e90ff',
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Register"
          component={RegisterStack}
          options={{
            tabBarIcon: ({color,size}) => 
              <Ionicons name="person" color={color} size={size}
              
            />
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileDrawer}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-circle-outline" color={color} size={size} 
              />
            ),
          }}
        />
        <Tab.Screen
          name="BLE"
          component={BLEScanner}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
</NavigationContainer>

  // <ScrollView>
  //         <View>
  //             {/* <Greetings name="naveen"/>
  //             <Text>Hiiii another component </Text>
  //             <Greetings name="kumar"/> */}
  //        </View>
  //        //input button componet 
  //       {/* <Inbu /> */}
  //       //classcomponent
  //       {/* <Ccllaass /> */}
  //       //SectionList compoent
  //       {/* <TaskListByPriority /> */}
  //       //Flatlist compoent
  //       {/* <ContactList /> */}
  //       //lifecycle methods in classcompnent
  //       {/* <LifecycleA msg={"kumar"}/>
  //       <LifecycleB />
  //       <LifecycleC /> */}
  //       //life cycle methods in function component using useEffect
  //       {/* <LifecycleDemo /> */}
  //       //reuse widget Loginscreen and registerscreen 
  //       {/* <LoginScreen />
  //       <RegisterScreen /> */}
  //       //ui and styles ble scanner
        //  <BLEScanner />
        // <UserProfile /> 
        //  <TodoApp /> 
  //       //images implementation
  //       <ImagesScreen />
  // </ScrollView>

)
}
export default App;
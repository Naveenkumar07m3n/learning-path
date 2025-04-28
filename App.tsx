import 'react-native-reanimated';
import 'react-native-gesture-handler';
import React,{useEffect} from "react";
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
import TodoTodoApp from "./src/screens/Homescreen/uistylingscreens/Todoapp";
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
import Tabnaviagaion from './src/navigation/Tabnavigation';
import { Provider } from 'react-redux';
import { store } from './src/store/store'; // adjust path to your Redux store

console.log("Environment:===>", Config.APP_ENV);
console.log("API URL:", Config.API_URL);
import { Platform } from 'react-native';
import {
  check,
  request,
  checkMultiple,
  requestMultiple,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const App = () =>{
  const requestNotificationPermission = async () => {
    if (Platform.OS === 'android' && Platform.Version >= 33) {
      const permission = PERMISSIONS.ANDROID.POST_NOTIFICATIONS;
      const result = await check(permission);
      if (result !== RESULTS.GRANTED) {
        const reqResult = await request(permission);
        console.log('Notification Permission:', reqResult);
      } else {
        console.log('Notification Permission Already Granted');
      }
    }
  };

  // 📳 Request Bluetooth Permission
  const requestBluetoothPermissions = async () => {
    if (Platform.OS === 'android') {
      const permissions = Platform.Version >= 31
        ? [
            PERMISSIONS.ANDROID.BLUETOOTH_SCAN,
            PERMISSIONS.ANDROID.BLUETOOTH_CONNECT,
          ]
        : [
            PERMISSIONS.ANDROID.BLUETOOTH,
            PERMISSIONS.ANDROID.BLUETOOTH_ADMIN,
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
          ];

      const statuses = await checkMultiple(permissions);
      const allGranted = Object.values(statuses).every(status => status === RESULTS.GRANTED);

      if (!allGranted) {
        const requestResults = await requestMultiple(permissions);
        console.log('Bluetooth Permissions:', requestResults);
      } else {
        console.log('Bluetooth Permissions Already Granted');
      }
    }
  };

  // 📂 Request Storage Permission
  // const requestStoragePermissions = async () => {
  //   if (Platform.OS === 'android') {
  //     const permissions = [
  //       PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
  //       PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
  //     ];

  //     const statuses = await checkMultiple(permissions);
  //     const allGranted = Object.values(statuses).every(status => status === RESULTS.GRANTED);

  //     if (!allGranted) {
  //       const requestResults = await requestMultiple(permissions);
  //       console.log('Storage Permissions:', requestResults);
  //     } else {
  //       console.log('Storage Permissions Already Granted');
  //     }
  //   }
  // };
  const requestStoragePermissions = async () => {
    if (Platform.OS === 'android') {
      const apiLevel = Platform.Version;
      let permissions = [];
  
      if (apiLevel >= 33) {
        permissions = [
          PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
          PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
          PERMISSIONS.ANDROID.READ_MEDIA_AUDIO,
        ];
      } else {
        permissions = [
          PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
          PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
        ];
      }
  
      const statuses = await checkMultiple(permissions);
      const allGranted = Object.values(statuses).every(status => status === RESULTS.GRANTED);
  
      if (!allGranted) {
        const requestResults = await requestMultiple(permissions);
        console.log('Storage Permissions:', requestResults);
      } else {
        console.log('Storage Permissions Already Granted');
      }
    }
  };
  
  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const fineLocation = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
  
      const result = await check(fineLocation);
      if (result !== RESULTS.GRANTED) {
        const reqResult = await request(fineLocation);
        console.log('Location Permission:', reqResult);
      } else {
        console.log('Location Permission Already Granted');
      }
    }
  };
  useEffect(() => {
    requestNotificationPermission();
    requestBluetoothPermissions();
    requestStoragePermissions();
    requestLocationPermission();
  }, []);
return(

//   <NavigationContainer>
//   <Stack.Navigator initialRouteName="RegisterScreen">
//     <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
//     <Stack.Screen name="LoginScreen" component={LoginScreen} />
//   </Stack.Navigator>
// </NavigationContainer>
    <Provider store={store}>
      <NavigationContainer>
          <Tabnaviagaion /> 
      </NavigationContainer>
    </Provider>

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

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
import BLEScanner from "./src/screens/Homescreen/uistylingscreens/Blescanner";
import UserProfile from "./src/screens/Homescreen/uistylingscreens/Userprofilecard";
import TodoApp from "./src/screens/Homescreen/uistylingscreens/Todoapp";
import Config from "react-native-config";
import ImagesScreen from "./src/screens/Imagesscreens/ImagesScreen";
console.log("Environment:===>", Config.APP_ENV);
console.log("API URL:", Config.API_URL)

const App = () =>{
return(

  <ScrollView>
          <View>
              {/* <Greetings name="naveen"/>
              <Text>Hiiii another component </Text>
              <Greetings name="kumar"/> */}
         </View>
         //input button componet 
        {/* <Inbu /> */}
        //classcomponent
        {/* <Ccllaass /> */}
        //SectionList compoent
        {/* <TaskListByPriority /> */}
        //Flatlist compoent
        {/* <ContactList /> */}
        //lifecycle methods in classcompnent
        {/* <LifecycleA msg={"kumar"}/>
        <LifecycleB />
        <LifecycleC /> */}
        //life cycle methods in function component using useEffect
        {/* <LifecycleDemo /> */}
        //reuse widget Loginscreen and registerscreen 
        {/* <LoginScreen />
        <RegisterScreen /> */}
        //ui and styles ble scanner
        {/* <BLEScanner /> */}
        {/* <UserProfile />  */}
         {/* <TodoApp /> */}
        //images implementation
        <ImagesScreen />
  </ScrollView>
)
}
export default App;
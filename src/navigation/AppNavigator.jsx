import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../screens/Homescreen/RegisterScreen';
import LoginScreen from '../screens/Homescreen/LoginScreen';
import ImagesScreen from '../screens/Imagesscreens/ImagesScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="RegisterScreen">
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ title: 'Register' }} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
    <Stack.Screen name="ImagesScreen" component={ImagesScreen} options={{ title: 'Login' }} />
  </Stack.Navigator>
);

export default AppNavigator;

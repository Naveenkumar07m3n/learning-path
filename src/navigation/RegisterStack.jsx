
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../screens/Homescreen/RegisterScreen';
import LoginScreen from '../screens/Homescreen/LoginScreen';
import ImagesScreen from '../screens/Imagesscreens/ImagesScreen';
import { TouchableOpacity, Text } from 'react-native';

const Stack = createNativeStackNavigator();

const RegisterStack = () => (
  <Stack.Navigator initialRouteName="RegisterScreen">
    <Stack.Screen
      name="RegisterScreen"
      component={RegisterScreen}
      options={{
        title: 'Register Screen',
        headerStyle: { backgroundColor: '#1e90ff' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 22 },
        headerTitleAlign: 'center',
        headerRight: () => (
          <TouchableOpacity onPress={() => alert('Header button clicked!')}>
            <Text style={{ color: '#fff', marginRight: 15, fontSize: 16 }}>Info</Text>
          </TouchableOpacity>
        ),
      }}
    />
    <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{
        title: 'Login Screen',
        headerStyle: { backgroundColor: '#1e90ff' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 22 },
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen name="ImagesScreen" component={ImagesScreen} 
    options={{ 
      title: 'Images',
      headerStyle: { backgroundColor: '#1e90ff' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 22 },
        headerTitleAlign: 'center', }} />
  </Stack.Navigator>
);

export default RegisterStack;

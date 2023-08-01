import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./pages/Home";
import About from "./pages/About";
import Final from "./pages/Final";

const Stack = createNativeStackNavigator();

const Router=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={Home} options={{headerTintColor: '#ddd'}} />
        <Stack.Screen name="AboutScreen" component={About} options={{headerTintColor: '#ddd'}} />
        <Stack.Screen name="FinalScreen" component={Final} options={{headerTintColor: '#ddd'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/register/Register";
import Login from "../screens/login/Login";
import Home from "../screens/home/HomePage";
import Results from "../screens/results/Results";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
// const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Results" component={Results} />
        {/* <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
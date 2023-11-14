import "react-native-gesture-handler";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./source/screens/Auth/Login";
import Register from "./source/screens/Auth/Register";
import Router from "./source/router";
import { useEffect } from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform your login logic here
    // Set isLoggedIn to true if login is successful
    setIsLoggedIn(true);
  };

  useEffect(async()=>{
    try {
      // Retrieve the data from AsyncStorage using the key
      const userData = await AsyncStorage.getItem('userData');
  
      if (userData !== null) {
        // Data retrieval successful, userData contains the retrieved data
        // console.log('Retrieved user data:', userData);
        // return JSON.parse(userData); // Parse JSON data if needed
        setIsLoggedIn(true);
      } 
    } catch (error) {
      // Error retrieving data
      console.error('Error retrieving user data:', error);
    }
  }, [], [isLoggedIn])

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      {isLoggedIn ? (
          <Router />
        ) : (
      <Stack.Navigator>
        
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
              initialParams={{ handleLogin }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
          </>
        
      </Stack.Navigator>
      )}
    </NavigationContainer>
    // <Comment></Comment>
    // <Comments></Comments>
  );
};

export default App;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import VideoList from "./VideoList"; // Import your VideoList component
import VideoPlayer from "./VideoPlayer"; // Import your VideoPlayer component

const Stack = createStackNavigator();

const NavigatorVideo = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="VideoList">
      <Stack.Screen name="VideoList" component={VideoList} />
      <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default NavigatorVideo;

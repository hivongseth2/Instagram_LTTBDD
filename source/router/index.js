import { createStackNavigator } from "@react-navigation/stack";
// import { createStackNavigator } from "@react-navigation/stack";

import bottomHomeNavigator from "./bottomHomeNavigator.routes";
import Post from "../components/Post";

import StoryScreen from "../screens/StoryScreen";

const RootStack = createStackNavigator();

const Router = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name={"Home"}
      component={bottomHomeNavigator}
      options={{
        headerShown: false,
      }}
    />
    <RootStack.Screen
      name="Story"
      component={StoryScreen}
      options={{
        headerShown: false,
      }}
    />

    <RootStack.Screen
      name="PostUser"
      component={Post}
      options={{ title: "", unmountOnBlur: true }}
    />
  </RootStack.Navigator>
);

export default Router;

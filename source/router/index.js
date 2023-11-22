import { createStackNavigator } from "@react-navigation/stack";
// import { createStackNavigator } from "@react-navigation/stack";

import bottomHomeNavigator from "./bottomHomeNavigator.routes";
import Post from "../components/Post";

import StoryScreen from "../screens/StoryScreen";
import NotificationsScreen from "../screens/NotificationsScreen";

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
      name="Noti"
      component={NotificationsScreen}
      options={{
        headerShown: true,
        headerTitle: "Thông báo",
      }}
    />

    <RootStack.Screen
      name="PostUser"
      component={Post}
      options={{ headerShown: false }}
    />
  </RootStack.Navigator>
);

export default Router;

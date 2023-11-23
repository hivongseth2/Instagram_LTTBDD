import { createStackNavigator } from "@react-navigation/stack";
// import { createStackNavigator } from "@react-navigation/stack";

import bottomHomeNavigator from "./bottomHomeNavigator.routes";
import Post from "../components/Post";

import StoryScreen from "../screens/StoryScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import ChatScreen from "../screens/ChatScreen";
import UserListChat from '../screens/UserListChat'

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
      name="UserListChat"
      component={UserListChat}
      options={{
        headerShown: true,
        headerTitle: "Danh sách tin nhắn",
      }}
    />

  <RootStack.Screen
      name="Chat"
      component={ChatScreen}
      options={{
        headerShown: true,
        headerTitle: "Tin nhắn",
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

import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import StoryCreate from "./StoryCreate";
import CreatePost from "./CreatePost";

const Tab = createBottomTabNavigator();

export default function index() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#eee",

        // tabBarActiveBackgroundColor: "#ccc",
        // tabBarBadge: "hi",
        tabBarStyle: styles.tabBar,
      })}
      tabBarOptions={{
        showLabel: false, // Ẩn tên tab
        style: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="PostCreate"
        component={CreatePost}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="grid-on"
              size={size}
              color={color}
              style={styles.tabBarIcon}
            />
          ),
          headerShown: false, // Ẩn header
        }}
      />
      <Tab.Screen
        name="StoryCreate"
        component={StoryCreate}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5
              name="user-tag"
              size={size}
              color={color}
              style={styles.tabBarIcon}
            />
          ),
          headerShown: false, // Ẩn header
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 45, // Điều chỉnh chiều cao của tab bar

    width: "80%",
    // backgroundColor: "#333",
    backgroundColor: "black",
    position: "absolute",
    bottom: 10,
    left: 40,
    alignContent: "center",
    alignSelf: "center",
    borderRadius: 33,
    opacity: 0.9,
  },
  tabBarIcon: {
    // Điều chỉnh kích thước của icon trong tab
    width: 24,
    height: 24,
  },
});

import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import PostsProfile from "./Posts";
import TaggedProfile from "./Tagged";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MaterialIcons name="settings" size={24} color="black" />
      {/* Sử dụng biểu tượng thay vì Text */}
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function TabProfile() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={PostsProfile}
        options={{
          tabBarLabel: () => null, // Ẩn tên tab
          tabBarIcon: () => (
            <MaterialIcons name="grid-on" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={TaggedProfile}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => (
            <FontAwesome5 name="user-tag" size={20} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

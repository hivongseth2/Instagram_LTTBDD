import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Foundation from "react-native-vector-icons/Foundation";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeStackScreen from "./home.routes";
import DiscoveryScreen from "../screens/DiscoveryScreen";
import CameraScreen from "../screens/CreatePostScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import ProfileScreen from "../screens/ProfileScreen";
// import

const Tab = createBottomTabNavigator();

const BottomHomeNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarActiveTintColor: "#000",
      tabBarInactiveTintColor: "gray",
      tabBarShowLabel: false,
      tabBarStyle: [
        {
          display: "flex",
        },
        null,
      ],
      tabBarIcon: ({ focused, color, size }) => {
        // color = "black";
        // size = 27;
        if (route.name === "Home") {
          return <Foundation name="home" size={size} color={color} />;
        }
        if (route.name === "Discovery") {
          return <Feather name="search" size={size} color={color} />;
        }
        if (route.name === "Post") {
          return <Feather name="plus-square" size={size} color={color} />;
        }
        if (route.name === "Notifications") {
          return <AntDesign name="hearto" size={size} color={color} />;
        }
        if (route.name === "Profile") {
          return <Ionicons name="person-outline" size={size} color={color} />;
        }
      },
    })}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{ headerShown: false, title: "" }}
    />
    {/* ẩn header ở đây nè */}
    <Tab.Screen
      name="Discovery"
      component={DiscoveryScreen}
      options={{ title: "" }}
    />
    <Tab.Screen name="Post" component={CameraScreen} options={{ title: "" }} />

    <Tab.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={{ title: "" }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ title: "" }}
    />
  </Tab.Navigator>
);

export default BottomHomeNavigator;

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
import ReelsScreen from "../screens/Reels";
// import
import { MaterialIcons } from "@expo/vector-icons";

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
        if (route.name === "Reels") {
          return (
            <MaterialIcons name="ondemand-video" size={size} color={color} />
          );
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
      options={{ headerShown: false, title: "" }}
    />
    <Tab.Screen
      name="Post"
      component={CameraScreen}
      options={{ headerShown: false, title: "" }}
    />

    <Tab.Screen
      name="Reels"
      component={ReelsScreen}
      options={{ title: "Reels", headerShown: false }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ headerShown: false, title: "" }}
    />
  </Tab.Navigator>
);

export default BottomHomeNavigator;

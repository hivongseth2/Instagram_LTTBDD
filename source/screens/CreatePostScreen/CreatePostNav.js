import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePost from "./CreatePost";
import CreatePost2 from "./CreatePost2";
import CreatePost3 from "./CreatePost3";

export default function CreatePostNav() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="CreatePost1">
      <Stack.Screen
        name="CreatePost1"
        component={CreatePost}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="CreatePost2"
        component={CreatePost2}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="CreatePost3"
        component={CreatePost3}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfilePicture from "../../src/components/ProfilePicture";
import Stories from "../components/ListStories";
import Post from "../components/Post";
import Feed from "../components/Feed";
import HomeRoutes from "../router";
import HomeScreen from "../screens/HomeScreen";
import StoryScreen from "../screens/StoryScreen";
// import Router from "../router";
import BottomHomeNavigator from "../router";
export default function Screen1() {
  return (
    <View>
      {/* <Stories /> */}
      {/* <HomeScreen /> */}
      {/* <Feed /> */}
      {/* <HomeRoutes /> */}
      {/* <StoryScreen /> */}
      {/* <Router /> */}

      <BottomHomeNavigator />
    </View>
  );
}

const styles = StyleSheet.create({});
// import React from "react";
// import { SafeAreaView } from "react-native";
// import Feed from "../../components/Feed";

// const Screen1 = () => (
//   <SafeAreaView>
//     <Feed />
//   </SafeAreaView>
// );

// export default Screen1;

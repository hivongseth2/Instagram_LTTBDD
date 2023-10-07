import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfilePicture from "../../src/components/ProfilePicture";
import Stories from "../components/ListStories";
import Post from "../components/Post";
import Feed from "../components/Feed";

export default function Screen1() {
  return (
    <View>
      {/* <Stories /> */}

      <Feed />
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

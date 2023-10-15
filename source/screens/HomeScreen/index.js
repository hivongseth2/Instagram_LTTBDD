import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Feed from "../../components/Feed";

const HomeScreen = () => (
  <ScrollView style={{ backgroundColor: "#fff" }}>
    <Feed />
  </ScrollView>
);

export default HomeScreen;

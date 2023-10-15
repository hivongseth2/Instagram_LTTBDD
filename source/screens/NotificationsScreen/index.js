import React from "react";
import { View, Text, ScrollView } from "react-native";
import ItemNoti from "../../components/Notification";

const NotificationsScreen = () => (
  <View
    style={{
      backgroundColor: "white",
      // height: 1500,
      alignContent: "flex-start",
      justifyContent: "flex-start",
    }}
  >
    <ItemNoti />
  </View>
);

export default NotificationsScreen;

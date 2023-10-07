import React from "react";
import { View, Text, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View>
      <Button
        title="Go to Screen First"
        onPress={() => navigation.navigate("Screen1")}
      />
    </View>
  );
}

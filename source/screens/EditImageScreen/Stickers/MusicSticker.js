import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
  Canvas,
  Circle,
  Group,
  Path,
  vec,
  LinearGradient,
} from "@shopify/react-native-skia";
export default function MusicSticker() {
  const width = 190;
  const height = 40;
  return (
    <View>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/256/6426/6426761.png",
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "90%",
    backgroundColor: "black",
    borderRadius: 20,
    opacity: 0.9,

    justifyContent: "center",
    alignItems: "center",
    position: "absolute",

    bottom: 0,
  },
  tinyLogo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  hContainer: {
    flexDirection: "row",
    width: "100%",
    // justifyContent: "center",
    alignItems: "flex-end",
  },
});

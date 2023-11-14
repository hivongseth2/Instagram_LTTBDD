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
export default function HiSticker() {
  const width = 190;
  const height = 40;
  return (
    <Image
      style={styles.tinyLogo}
      source={{
        uri: "https://cdn-icons-png.flaticon.com/256/6381/6381582.png",
      }}
    />
  );
}
const styles = StyleSheet.create({
  container: {},
  tinyLogo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginLeft: 50,
  },
});

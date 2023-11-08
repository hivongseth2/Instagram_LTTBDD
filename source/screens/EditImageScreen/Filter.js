import React, { useEffect, useRef, useState } from "react";
import { GLView } from "expo-gl";
import { Surface } from "gl-react-expo";
import { Shaders, Node, GLSL } from "gl-react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import ViewShot from "react-native-view-shot";
import {
  View,
  Pressable,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ImageBackground,
  Text,
} from "react-native";

export default function Filter({ filter, applyFilter }) {
  const filters = [
    { name: "Grayscale" },
    { name: "Sepia" },
    { name: "Brightness" },
    { name: "Saturation" },
    { name: "Contrast" },
    { name: "Hue Rotation" },
  ];

  return (
    <View style={[styles.hContainer, { justifyContent: "center" }]}>
      <Pressable
        style={[
          styles.filterItem,
          filter === 0 ? { borderColor: "white" } : null,
        ]}
        onPress={() => applyFilter(0)}
      >
        <Feather name="x" size={35} color={filter === 0 ? "white" : "black"} />
      </Pressable>

      <FlatList
        data={filters}
        keyExtractor={(item) => item.name}
        horizontal
        contentContainerStyle={styles.filters}
        renderItem={({ item, index }) => (
          <Pressable
            style={[
              styles.filterItem,
              filter === index + 1 ? { borderColor: "white" } : null,
            ]}
            onPress={() => {
              applyFilter(index + 1);
            }}
          >
            <MaterialIcons
              name={`filter-${index + 1}`}
              size={24}
              color={filter === index + 1 ? "white" : "black"}
            />
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  hContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "transparent",
  },
  preview: {
    flex: 1,
  },
  container: {
    flex: 1,
  },

  filterItem: {
    width: 50,
    height: 50,
    marginRight: 10,

    borderRadius: 100,
    borderColor: "black",
    borderWidth: 5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});

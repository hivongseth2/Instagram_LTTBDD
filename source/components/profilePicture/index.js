import React from "react";
import { Image, View } from "react-native";
import styles from "./style";

const ProfilePicture = ({ uri, storyState, size = 70 }) => {
  const borderColor = storyState === 0 ? "#ccc" : "#ae22e0";

  return (
    <View
      style={[
        styles.container,
        { width: size + 6, height: size + 6, borderColor },
      ]}
    >
      <Image
        source={{ uri }}
        style={[styles.image, { width: size, height: size }]}
      />
    </View>
  );
};

export default ProfilePicture;

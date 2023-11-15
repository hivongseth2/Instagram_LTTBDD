import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function CreatePost3({ route, navigation }) {
  const [image, setImage] = useState(route.params.image);
  const [caption, setCaption] = useState(""); // Thêm state cho caption

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.hContainer,
          { justifyContent: "space-between", width: "100%", padding: 10 },
        ]}
      >
        <View style={styles.hContainer}>
          <Pressable
            onPress={() => {
              navigation.navigate("CreatePost1");
            }}
          >
            <Ionicons name="chevron-back-outline" size={35} color="black" />
          </Pressable>
          <Text style={styles.header}>Bài viết mới</Text>
        </View>
        <Pressable onPress={() => {}}>
          <Text style={styles.share}>Chia sẻ</Text>
        </Pressable>
      </View>
      <View style={[styles.hContainer, { padding: 20 }]}>
        <Image source={{ uri: image.uri }} style={{ height: 70, width: 70 }} />
        <TextInput
          style={styles.captionInput}
          placeholder="Viết chú thích"
          multiline={true}
          numberOfLines={4}
          onChangeText={(text) => setCaption(text)}
          value={caption}
        />
      </View>

      <View style={styles.buttonsContainer}>
        {/* Các nút điều hướng ở đây */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF",
    justifyContent: "flex-start",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    marginLeft: 10,
    marginBottom: 10,
  },
  nextButton: {
    marginRight: 10,
    marginBottom: 10,
  },
  hContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
  },
  captionInput: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
    paddingHorizontal: 10,
    fontSize: 16,
    textAlignVertical: "center", // Để văn bản hiển thị từ trên xuống dưới
  },
  share: {
    color: "#318bfb",
    fontWeight: "bold",
    marginRight: 10,
    fontSize: 18,
  },
});

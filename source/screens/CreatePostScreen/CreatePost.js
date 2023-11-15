import React, { useState, useEffect } from "react";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import {
  Canvas,
  Fill,
  Circle,
  BlurMask,
  vec,
} from "@shopify/react-native-skia";
import PhotoPreview from "../EditImageScreen";

export default function CreatePost({ navigation }) {
  const isFocused = useIsFocused();
  const [image, setImage] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      const { width, height } = await getImageSize(result.assets[0].uri);
      setImageDimensions({ width, height });
      setImage(result.assets[0].uri);
    }
  };

  const getImageSize = (uri) => {
    return new Promise((resolve, reject) => {
      Image.getSize(
        uri,
        (width, height) => {
          resolve({ width, height });
        },
        reject
      );
    });
  };

  const cancelImage = () => {
    // Hủy bỏ ảnh và gọi lại pickImage để chọn ảnh mới
    setImage(null);
    pickImage();
  };

  const goNext = () => {
    navigation.navigate("CreatePost2", {
      image: image,
      imageDimensions: imageDimensions,
    });
  };

  useEffect(() => {
    if (isFocused) {
      pickImage();
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      {image && (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: image }}
            style={{
              aspectRatio: imageDimensions.width / imageDimensions.height,
              width: "100%",
            }}
          />
          {imageDimensions.width > 0 && (
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                onPress={cancelImage}
                style={styles.cancelButton}
              >
                <Ionicons name="chevron-back-outline" size={35} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={goNext} style={styles.nextButton}>
                <Ionicons
                  name="chevron-forward-outline"
                  size={35}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    position: "absolute",
    top: 10,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  cancelButton: {
    padding: 8,
  },
  nextButton: {
    padding: 8,
  },
});

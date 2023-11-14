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
import Filter from "./Filter";
import ImageFilter from "./ImageFilter";

const PhotoPreview = ({
  photo,
  hasMediaLibPermission,
  setPhoto,
  sharePic,
  photoFilter,
  savePhoto,
}) => {
  let viewShotRef = useRef();
  const [image, setImage] = useState(null);
  const [save, setSave] = useState(false);
  const [filter, setFilter] = useState(null);
  useEffect(() => {
    // Gọi capture ngay sau khi nội dung đã render xong
    if (viewShotRef.current) {
      setTimeout(() => {
        viewShotRef.current.capture().then((uri) => {
          // Ảnh đã được chụp được lưu ở uri
          setImage({
            base64: null,
            height: 1920,
            uri: uri,
            width: 1080,
          });
        });
      }, 700);
    }
  }, []); // Khi filter thay đổi, chụp lại ảnh

  if (!photo) {
    return null;
  }

  const applyFilter = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const savePhotoWithFiter = async () => {
    try {
      const uri = await viewShotRef.current.capture();
      const newImage = {
        base64: null,
        height: 1920,
        uri: uri,
        width: 1080,
      };
      setImage(newImage);
      savePhoto(newImage);
    } catch (error) {
      console.error("Lỗi khi chụp và lưu ảnh:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageFilter
        viewShotRef={viewShotRef}
        image={image}
        filter={filter}
        photo={photo}
        photoFilter={photoFilter}
      />
      <View style={styles.containerPlus}>
        <View style={[styles.hContainer, { marginBottom: "130%" }]}>
          <Pressable
            onPress={() => {
              setPhoto(undefined);
            }}
          >
            <Ionicons name="chevron-back-sharp" size={24} color="black" />
          </Pressable>

          <View>
            {hasMediaLibPermission && (
              <View style={[styles.hContainer, { paddingHorizontal: 10 }]}>
                <Pressable
                  style={{ paddingRight: 30 }}
                  onPress={() => {
                    savePhotoWithFiter();
                  }}
                >
                  <MaterialIcons name="save-alt" size={24} color="black" />
                </Pressable>
                <Pressable onPress={sharePic}>
                  <FontAwesome name="share" size={24} color="black" />
                </Pressable>
              </View>
            )}
          </View>
        </View>
        <Filter filter={filter} applyFilter={applyFilter} />
      </View>
    </SafeAreaView>
  );
};

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

  containerPlus: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    flex: 1,
  },
});

export default PhotoPreview;

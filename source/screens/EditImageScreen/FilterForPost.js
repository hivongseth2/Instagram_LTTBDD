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

const PhotoForPost = ({
  photoProps,
  imageDimensions,
  navigation,
  // //   hasMediaLibPermission,
  //   setPhoto,
  //   sharePic,
  //   photoFilter,
  //   savePhoto,
}) => {
  let viewShotRef = useRef();
  const photo = {
    uri: photoProps,
  };

  const [image, setImage] = useState(null);
  const [filter, setFilter] = useState(null);

  const applyFilter = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const continuePost = async () => {
    try {
      const uri = await viewShotRef.current.capture();
      const newImage = {
        base64: null,
        height: imageDimensions.height,
        uri: uri,
        width: imageDimensions.width,
      };
      //   setImage(newImage);
      //   console.log(navigation);
      //   console.log(image);
      navigation.navigate("CreatePost3", { image: newImage });
      // savePhoto(newImage);
    } catch (error) {
      console.error("Lỗi khi chụp và lưu ảnh:", error);
    }
  };
  {
    aspectRatio: imageDimensions.width / imageDimensions.height;
  }
  return (
    <SafeAreaView style={[styles.container]}>
      <View
        style={{
          aspectRatio: imageDimensions.width / imageDimensions.height,
        }}
      >
        <ImageFilter
          viewShotRef={viewShotRef}
          image={photo}
          filter={filter}
          photo={photo}
          photoFilter={null}
        />
      </View>

      <View style={styles.containerPlus}>
        <View style={[styles.hContainer, { marginBottom: "130%" }]}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="chevron-back-sharp" size={24} color="black" />
          </Pressable>

          <Pressable
            onPress={() => {
              continuePost();
            }}
          >
            <Ionicons name="chevron-forward" size={24} color="black" />
          </Pressable>
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
    textAlign: "center",
    justifyContent: "center",
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

export default PhotoForPost;

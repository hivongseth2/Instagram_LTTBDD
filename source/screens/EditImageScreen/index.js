import React, { useEffect, useRef, useState } from "react";
import { GLView } from "expo-gl";
import { Surface } from "gl-react-expo";
import { Shaders, Node, GLSL } from "gl-react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { captureScreen } from "react-native-view-shot";

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

import AsyncStorage from "@react-native-async-storage/async-storage";

import { BASE_API_URL } from "@env";

// const userData = JSON.parse(await AsyncStorage.getItem('userData'));

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
      }, 800);
    }
  }, []); // Khi filter thay đổi, chụp lại ảnh

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUserData = await AsyncStorage.getItem("userData");
        if (storedUserData) {
          const parsedUserData = JSON.parse(storedUserData);
          setUserData(parsedUserData);
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchData();
  }, []);

  if (!photo) {
    return null;
  }

  const applyFilter = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  //   const createStory = async () => {
  //     try {
  //       //   const uri = await viewShotRef.current.capture();

  //       captureScreen({
  //         format: "jpg",
  //         quality: 0.8,
  //       }).then(
  //         (uri) => console.log("Image saved to", uri),
  //         (error) => console.error("Oops, snapshot failed", error)
  //       );
  //       const newImage = {
  //         base64: null,
  //         height: 1920,
  //         uri: uri,
  //         width: 1080,
  //       };

  //       const formData = new FormData();
  //       formData.append("image", newImage.uri);

  //       const response = fetch(`${BASE_API_URL}/story/${userData.id}`, {
  //         method: "POST",
  //         body: formData,
  //       });

  //       if (response.status === 200) {
  //         setImage(newImage);
  //         savePhoto(newImage);
  //       } else {
  //         console.log("Create story failed: " + response.status);
  //       }
  //     } catch (error) {
  //       console.error("Lỗi khi chụp và lưu ảnh:", error);
  //     }
  //   };

  const createStory = async () => {
    try {
      const uri = await captureScreen({
        format: "jpg",
        quality: 0.8,
      });

      console.log(uri);

      const formData = new FormData();
      formData.append("image", uri);

      const response = await fetch(`${BASE_API_URL}/story/${userData.id}`, {
        method: "POST",
        body: formData,
        headers: {
          //   Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.ok) {
        setImage(uri);
        savePhoto(uri);
      } else {
        console.log("Create story failedd: " + response.status);
      }
    } catch (error) {
      console.error("Lỗi khi chụp và lưu ảnh:", error);
    }
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
    } catch (error) {
      console.error("Lỗi khi tạo story", error);
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
            style={{ marginTop: 15 }}
            onPress={() => {
              setPhoto(undefined);
            }}
          >
            <Ionicons name="chevron-back-sharp" size={30} color="white" />
          </Pressable>

          <View>
            {hasMediaLibPermission && (
              <View
                style={[
                  styles.hContainer,
                  {
                    paddingHorizontal: 10,
                    alignContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <Pressable
                  style={{ paddingRight: 30 }}
                  onPress={() => {
                    savePhotoWithFiter();
                  }}
                >
                  <MaterialIcons name="save-alt" size={30} color="white" />
                </Pressable>
                <Pressable onPress={sharePic}>
                  <FontAwesome name="share" size={30} color="white" />
                </Pressable>

                <Pressable style={styles.containerNext} onPress={createStory}>
                  <Text style={styles.next}>Tiếp</Text>
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
  next: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },

  containerNext: {
    padding: 10,
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00A9FF",
    marginLeft: 30,
    borderRadius: 5,
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

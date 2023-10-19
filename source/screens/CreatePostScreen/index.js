import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Button,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import { GLView } from "expo-gl";

import { Camera, CameraType } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import { useRef, useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
const CameraScreen = () => {
  const isFocused = useIsFocused();

  let cameraRef = useRef();

  //Phan filter
  const glViewRef = useRef(null);
  const [filter, setFilter] = useState("none"); // Bộ lọc mặc định

  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibPermission, setHasMediaLibPermission] = useState();
  const [photo, setPhoto] = useState();
  const [type, setType] = useState(CameraType.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const LibPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibPermission(LibPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text> Đang khởi tạo máy ảnh, vui lòng đợi... </Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Không thể truy cập vào máy ảnh, vui lòng cấp quyền truy cập...
      </Text>
    );
  }

  // ========chuyen camera
  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }
  // =
  const handleMountError = (error) => {
    console.log("Camera Mount Error:", error);
    // Xử lý lỗi tại đây (ví dụ: thông báo cho người dùng về lỗi)
  };

  // ======flash
  const toggleFlash = () => {
    setFlash((current) =>
      current === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.on
        : Camera.Constants.FlashMode.off
    );
  };

  //===========FILTER

  // =========

  const takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };
    let newPhoto = await cameraRef.current.takePictureAsync(options);

    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };
    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };
    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.preview}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />
        <Button title="Share" onPress={sharePic}></Button>
        {hasMediaLibPermission ? (
          <Button title="Save" onPress={savePhoto} />
        ) : undefined}

        <Button
          title="Discard"
          onPress={() => {
            setPhoto(undefined);
          }}
        ></Button>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      {isFocused && (
        <Camera
          style={styles.container}
          ref={cameraRef}
          type={type}
          flashMode={flash}
          onMountError={handleMountError}
        >
          <View style={styles.hContainer}>
            <Feather name="x" size={30} color="white" />
            <Ionicons
              name={flash ? "ios-flash-off" : "ios-flash"}
              size={30}
              color="white"
              onPress={toggleFlash}
            />
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <Ionicons name="camera-reverse-outline" size={30} color="white" />
            </TouchableOpacity>
            <SimpleLineIcons name="settings" size={30} color="white" />
          </View>
          <View style={styles.leftContainer}>
            <Ionicons
              name="text"
              size={30}
              color="white"
              style={{ marginVertical: 10 }}
            />
            <Entypo
              name="infinity"
              size={30}
              color="white"
              style={{ marginVertical: 10 }}
            />
            <Ionicons
              name="md-grid-outline"
              size={30}
              color="white"
              style={{ marginVertical: 10 }}
            />
          </View>

          <View style={[styles.hContainer, { justifyContent: "center" }]}>
            <TouchableOpacity onPress={takePic} style={styles.buttonContainer}>
              <Entypo name="circle" size={70} color="white" />
            </TouchableOpacity>
          </View>
        </Camera>
      )}
    </View>
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
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "space-between",
    alignContent: "flex-end",
    // ali,
  },
  leftContainer: {
    marginLeft: 10,
  },
  Cameracontainer: {
    // height: "100%",
    // flex: 1,
  },
  item: {
    fontSize: 18,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignSelf: "center",
    padding: 0,
    backgroundColor: "#eee",
    borderRadius: 50,
    marginHorizontal: 5,
    marginBottom: 20,
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
  filterButtons: {
    flexDirection: "row",
    justifyContent: "center",
    color: "white",
  },
  filterButton: {
    margin: 10,
    color: "white",
  },
  activeFilter: {
    margin: 10,

    color: "white",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default CameraScreen;

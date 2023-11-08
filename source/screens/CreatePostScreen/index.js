import { useRef, useState, useEffect } from "react";

import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Button,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import { manipulateAsync, FlipType, SaveFormat } from "expo-image-manipulator";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Camera, CameraType, FaceDetectionResult } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import { TouchableOpacity } from "react-native";
// import { ViewShot } from "react-native-view-shot";
import ViewShot from "react-native-view-shot";

import * as FaceDetector from "expo-face-detector";
import PhotoPreview from "../EditImageScreen";
const CameraScreen = () => {
  const isFocused = useIsFocused(); // 1 phien chi 1 apply 1 cam, dung useFocus xu ly
  const [hasCameraPermission, setHasCameraPermission] = useState(); // quyen cam
  const [type, setType] = useState(Camera.Constants.Type.front); // camera truoc saau
  const [hasMediaLibPermission, setHasMediaLibPermission] = useState(); // quyen thu vien
  const [photo, setPhoto] = useState();
  const [photoFilter, setPhotoFilter] = useState();

  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [filter, setFilter] = useState(false);

  let cameraRef = useRef();
  let viewShotRef = useRef();

  const [faceDetedted, setFaceDetected] = useState(false); // nhan dien khuon mat
  const facevalues = useSharedValue({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });

  // SUA FILTER O DAY

  const animatedStyle = useAnimatedStyle(() => ({
    position: "absolute",
    zIndex: 1,
    width: facevalues.value.width,
    height: facevalues.value.height,
    transform: [
      { translateX: facevalues.value.x },
      { translateY: facevalues.value.y },
    ],
  }));

  /// XIN CAP QUYEN
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

  // ==== CAC THAO TAC
  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }
  // ======flash
  const toggleFlash = () => {
    setFlash((current) =>
      current === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.on
        : Camera.Constants.FlashMode.off
    );
  };

  // TAKE PIC
  const _rotate90andFlip = async (newPhoto, photoFilter) => {
    if (type === "back") {
      setPhoto(newPhoto);
    } else {
      const manipResult = await manipulateAsync(
        newPhoto.localUri || newPhoto.uri,
        [{ flip: FlipType.Horizontal }]
      );
      setPhoto(manipResult);

      setPhotoFilter(photoFilter);
    }
  };

  const takePic = async () => {
    let options = {
      quality: 1,
      base64: false,
      exif: false,
    };

    let photoCamera = await cameraRef.current.takePictureAsync(options);

    try {
      const photoFilter = await viewShotRef.current.capture();
      _rotate90andFlip(photoCamera, photoFilter);
    } catch (err) {
      const photoFilter = null;
      _rotate90andFlip(photoCamera, photoFilter);
    }
  };

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };
    let savePhoto = (image) => {
      MediaLibrary.saveToLibraryAsync(image.uri).then(() => {
        setPhoto(undefined);
      });
    };
    return (
      <PhotoPreview
        photo={photo}
        hasMediaLibPermission={hasMediaLibPermission}
        setPhoto={setPhoto}
        sharePic={sharePic}
        photoFilter={photoFilter}
        savePhoto={savePhoto}
      />
    );
  }

  const faceDetectionOptions = {
    detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
    minDetectionInterval: 100,
    mode: FaceDetector.FaceDetectorMode.fast,
    runClassifications: FaceDetector.FaceDetectorClassifications.all,
    tracking: true,
  };

  // xu ly nhan dien khuon mat
  function handleFacesDetected({ faces }) {
    const face = faces[0];
    if (face) {
      const { size, origin } = face.bounds;
      facevalues.value = {
        width: size.width,
        height: size.height,
        x: origin.x,
        y: origin.y,
      };
      setFaceDetected(true);
    } else {
      setFaceDetected(false);
    }
  }

  // =========

  return (
    <View style={styles.container}>
      {faceDetedted && filter && (
        <ViewShot
          ref={viewShotRef}
          style={{
            width: "100%",
            height: "90%",
            position: "absolute",
            zIndex: 2,
          }}
        >
          <Animated.View style={animatedStyle}>
            <Image
              source={require("../../../assets/gai.png")}
              style={{
                position: "relative",
                width: 350,
                height: 350,
                top: -30,
                left: 40,
              }}
            ></Image>
          </Animated.View>
        </ViewShot>
      )}

      {isFocused && (
        <ViewShot ref={viewShotRef} style={styles.container}>
          {/* Wrap the entire screen */}
          <Camera
            style={styles.container}
            ref={cameraRef}
            type={type}
            flashMode={flash}
            collapsable={false}
            autoFocus={true}
            isImageMirror={true}
            ratio={"16:9"}
            onFacesDetected={handleFacesDetected}
            faceDetectorSettings={{ faceDetectionOptions }}
          >
            <View style={styles.hContainer}>
              <Feather name="x" size={30} color="white" />
              <Ionicons
                name={!flash ? "ios-flash-off" : "ios-flash"}
                size={30}
                color="white"
                onPress={toggleFlash}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={toggleCameraType}
              >
                <Ionicons
                  name="camera-reverse-outline"
                  size={30}
                  color="white"
                />
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
              <TouchableOpacity
                onPress={takePic}
                style={[styles.buttonContainer]}
              >
                <Entypo name="circle" size={70} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setFilter(!filter);
                }}
                style={[
                  styles.buttonContainer,
                  {
                    // borderColor: filter ? "white" : "none",
                    backgroundColor: filter ? "white" : "#ccc",
                    borderWidth: filter ? 5 : 0,
                  },
                ]}
              >
                <MaterialIcons
                  name="filter-center-focus"
                  size={50}
                  color={filter ? "black" : "gray"}
                />
              </TouchableOpacity>
            </View>
          </Camera>
        </ViewShot>
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

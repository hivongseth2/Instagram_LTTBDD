import React, { useEffect, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import { AntDesign, FontAwesome, Feather } from "@expo/vector-icons";
import axios from "axios";
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
  GestureHandlerGestureEvent,
  GestureHandlerStateChangeEvent,
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";

const ReelsScreen = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(100);
  const [commentCount, setCommentCount] = useState(50);
  const [isShared, setIsShared] = useState(false);
  const [shareCount, setShareCount] = useState(30);
  const video = React.useRef(null);
  const [status, setStatus] = useState({});
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [dataCurrent, setDataCurrent] = useState({});
  const isDebouncing = useRef(false);

  const handlePanGesture = (event, context) => {
    if (isDebouncing.current) {
      return;
    }
    // dùng useRef để kiểm tra trang trái của hàm , là true thì return, sau nửa giây thì nhả lại cho vuốt tiếp , cái pangesture nó nhả liên tục k control đc
    const { velocityY, state } = event.nativeEvent;

    isDebouncing.current = true;

    if (velocityY < 0) {
      setIndex((prevIndex) =>
        prevIndex >= data.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    }

    setTimeout(() => {
      isDebouncing.current = false;
    }, 500);
  };

  useEffect(() => {
    axios
      .get("https://6544ad645a0b4b04436cb772.mockapi.io/cook")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (data[index + 1]) {
      setDataCurrent(data[index + 1]);
    }
  }, [index]);

  const next = () => {
    console.log(index);
    setIndex(index + 1);
  };
  useEffect(() => {
    setDataCurrent(data[index + 1]);
  }, [index]);

  const handleLikePress = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  const handleCommentPress = () => {};
  const handleSharePress = () => {
    setIsShared(true);
    setShareCount(shareCount + 1);
  };

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={handlePanGesture}>
        <View style={{ height: "100%", width: "100%" }}>
          {data.length > 0 && (
            <Video
              ref={video}
              style={styles.video}
              source={{
                uri: `${data[index].video}`,
              }}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              shouldPlay
              isLooping
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
          )}

          <View style={styles.overlay}>
            <View style={styles.iconContainer}>
              <TouchableOpacity
                style={styles.iconTouchable}
                onPress={handleLikePress}
              >
                {isLiked ? (
                  <AntDesign name="heart" size={30} color="#fff" />
                ) : (
                  <AntDesign name="hearto" size={30} color="#fff" />
                )}
                <Text style={styles.iconText}>{likeCount}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.iconTouchable}
                onPress={handleCommentPress}
              >
                <FontAwesome name="comment-o" size={30} color="#fff" />
                <Text style={styles.iconText}>{commentCount}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.iconTouchable}
                onPress={handleSharePress}
              >
                <Feather name="send" size={30} color="#fff" />
                <Text style={styles.iconText}>{shareCount}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <TouchableOpacity
              onPress={() => {
                setIndex(index + 1);
              }}
            >
              <Text style={{ color: "#ccc" }}>Tăng</Text>
            </TouchableOpacity>
            <Image
              source={{
                uri: `${
                  dataCurrent
                    ? dataCurrent.avatar
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png"
                }`,
              }}
              style={styles.profileImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.username}>
                {dataCurrent ? dataCurrent.name : "...Loading"}
              </Text>
              <Text style={styles.description}>
                {dataCurrent ? dataCurrent.description : "...Loading"}
              </Text>
            </View>
          </View>
        </View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  video: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    bottom: 130,
    // left: 0,
    right: 10,

    justifyContent: "flex-end",
    // alignContent: "flex-start",
    // alignItems: "flex-end",
    height: "100%",
    flexDirection: "column",
    // alignItems: "flex-end",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingBottom: 30,
    paddingLeft: 30,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: "column",
  },
  username: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "white",
  },
  iconContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    // height: 300,
    height: "30%",
    width: "100%",
  },
  iconTouchable: {
    alignItems: "center",
  },
  iconText: {
    color: "white",
  },
});

export default ReelsScreen;

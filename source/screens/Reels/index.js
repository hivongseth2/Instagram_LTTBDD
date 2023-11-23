import React, { useEffect, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Button,
  Modal,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import { AntDesign, FontAwesome, Feather } from "@expo/vector-icons";
import axios from "axios";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import { Linking } from "react-native";

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
import CommentsReels from "./Comment/Index";

const ReelsScreen = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(100);
  const [commentCount, setCommentCount] = useState(0);
  const [isShared, setIsShared] = useState(false);
  const [shareCount, setShareCount] = useState(30);
  const video = React.useRef(null);
  const [status, setStatus] = useState({});
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [dataCurrent, setDataCurrent] = useState({});
  const isDebouncing = useRef(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const handlePanGesture = (event, context) => {
    if (isDebouncing.current) {
      return;
    }
    const { velocityY, state } = event.nativeEvent;

    isDebouncing.current = true;

    if (velocityY < 0) {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    } else {
      setIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    }

    setTimeout(() => {
      isDebouncing.current = false;
    }, 500);
  };
  const handlePressVideo = () => {
    // Nếu video đang phát thì tạm dừng, ngược lại, phát lại
    if (isPlaying) {
      video.current.pauseAsync();
    } else {
      video.current.playAsync();
    }
    setIsPlaying(!isPlaying); // Đảo ngược trạng thái isPlaying
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
    if (data.length > 0) {
      setDataCurrent(data[index]);
      if (data[index].comment) {
        setCommentCount(data[index].comment.length);
      } else {
        setCommentCount(0);
      }
    }

    setTimeout(() => {
      if (isPlaying === false && video.current) {
        setIsPlaying(true);
      }
    }, 500);
  }, [index, data]);

  const handleLikePress = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  const handleCommentPress = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const handleSharePress = async () => {
    try {
      // Replace dataCurrent.video with the actual video URL
      const remoteVideoUrl = dataCurrent.video;

      const { uri: localVideoUrl } = await FileSystem.downloadAsync(
        remoteVideoUrl,
        FileSystem.documentDirectory + "shared_video.mp4"
      );

      const isAvailable = await Sharing.isAvailableAsync();

      if (isAvailable) {
        await Sharing.shareAsync(localVideoUrl, {
          mimeType: "video/mp4",
          UTI: "public.mpeg-4",
        });

        setShareCount(shareCount + 1);
      } else {
        console.log("Sharing is not available on this device");
      }
    } catch (error) {
      console.error("Error sharing content:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={handlePanGesture}>
        <View style={{ height: "100%", width: "100%" }}>
          {dataCurrent && (
            <TouchableOpacity
              style={{ width: "100%", height: "100%" }}
              onPress={handlePressVideo}
            >
              <Video
                isMuted={false}
                volume={1}
                ref={video}
                style={styles.video}
                source={{
                  uri: `${dataCurrent.video}`,
                }}
                useNativeControls={false}
                resizeMode={ResizeMode.CONTAIN}
                shouldPlay
                isLooping
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
              />
            </TouchableOpacity>
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
                {data.length && dataCurrent ? dataCurrent.name : "...Loading"}
              </Text>
              <Text style={styles.description}>
                {data.length > 0 && dataCurrent
                  ? dataCurrent.description
                  : "...Loading"}
              </Text>
            </View>
          </View>
        </View>
      </PanGestureHandler>

      <Modal
        visible={isDrawerOpen}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setIsDrawerOpen(!isDrawerOpen);
        }}
      >
        <CommentsReels
          closeComment={() => toggleDrawer()}
          // comments={comments}
          postId={dataCurrent.id}
          // reloadCmts={reloadCmts}
          dataCmt={dataCurrent.comment} // Corrected this line
          // flag={flag}
        ></CommentsReels>
      </Modal>
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
    position: "absolute",
    paddingLeft: 30,
    bottom: 20,
    left: 0,
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

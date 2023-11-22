import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Video } from "expo-av";
import { AntDesign, FontAwesome, Feather } from "@expo/vector-icons";
import { createAppContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ScrollView,
  FlatList as RNFlatList,
} from "react-native-gesture-handler";

import axios from "axios";

export default function VideoPlayer({ route }) {
  console.log(route);
  const { video, avatar, name, description } = route.params.item;
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(100); // Replace with actual like count
  const [commentCount, setCommentCount] = useState(50); // Replace with actual comment count
  const [isShared, setIsShared] = useState(false);
  const [shareCount, setShareCount] = useState(30); // Replace with actual share count
  const videoRef = useRef(null);

  const handleLikePress = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  const handleCommentPress = () => {
    // Implement comment functionality
  };

  const handleSharePress = () => {
    setIsShared(true);
    setShareCount(shareCount + 1);
    // Implement share functionality, e.g., open a modal to share the video
  };

  const handleEndReached = () => {
    // Handle the end of the video and move to the next one
    // You can implement your logic here to navigate to the next video
  };

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{ uri: video }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => {
          if (status.didJustFinish) {
            handleEndReached();
          }
        }}
      />

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
        <Image source={{ uri: avatar }} style={styles.profileImage} />
        <View style={styles.textContainer}>
          <Text style={styles.username}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </View>
  );
}

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
    right: 10,
    justifyContent: "flex-end",
    flexDirection: "column",
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
    height: "30%",
    width: "100%",
  },
  iconTouchable: {
    alignItems: "center",
  },
  iconText: {
    color: "white",
  },
  listItem: {
    width: "100%",
    height: 200,
  },
});

import React, { useState, useEffect } from "react";
import { View, Text, TouchableWithoutFeedback, Modal } from "react-native";
import ADIcon from "react-native-vector-icons/AntDesign";
import FontistoIcon from "react-native-vector-icons/Fontisto";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FAIcon from "react-native-vector-icons/FontAwesome";
import { BASE_API_URL } from "@env";
import { format } from "date-fns";

import styles from "./styles";
import Comments from "../../../Comment/Index";

const Footer = ({
  likesCount: likesCountProp,
  caption,
  postedAt,
  // comments,
  postId,
}) => {
  // const [comments, setComments] = useState({});
  const [isLiked, setIsLike] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const onLikePressed = () => {
    const amount = isLiked ? -1 : 1;
    setLikesCount(likesCount + amount);

    setIsLike(!isLiked);
  };

  useEffect(() => {
    setLikesCount(likesCountProp);
  }, []);

  // const fetchPosts = async () => {
  //   try {
  //     const url = `${BASE_API_URL}/post/${postId}`;
  //     const response = await fetch(url);

  //     if (!response.ok) {
  //       throw new Error(`Network response was not ok: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     setComments(data.comments);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchPosts();
  // }, [flag]);

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.leftIcons}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            {isLiked ? (
              <ADIcon name="heart" size={25} color={"#e73838"} />
            ) : (
              <ADIcon name="hearto" size={25} color={"#545454"} />
            )}
          </TouchableWithoutFeedback>
          <FontistoIcon
            name="comment"
            size={23}
            color={"#545454"}
            onPress={() => {
              toggleDrawer();
            }}
          />
          <IoniconsIcon
            name="paper-plane-outline"
            size={25}
            color={"#545454"}
          />
        </View>
        <FAIcon name="bookmark-o" size={25} color={"#545454"} />
      </View>

      <Text style={styles.likes}>{likesCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>
        {format(new Date(postedAt), "HH:mm:ss dd/MM/yyyy")}
      </Text>
      <Modal
        visible={isDrawerOpen}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setIsDrawerOpen(!isDrawerOpen);
        }}
      >
        <Comments
          closeComment={() => toggleDrawer()}
          // comments={comments}
          postId={postId}
          // reloadCmts={reloadCmts}
          // flag={flag}
        ></Comments>
      </Modal>
    </View>
  );
};

export default Footer;

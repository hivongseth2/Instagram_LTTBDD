import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_API_URL } from "@env";

const CreateComment = ({ postId, reloadCmts }) => {
  const [userData, setUserData] = useState({});
  const [comment, setComment] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = JSON.parse(await AsyncStorage.getItem("userData"));
        setUserData(user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(BASE_API_URL);
  const onSubmit = async (comment) => {
    const response = await fetch(`${BASE_API_URL}/post/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId,
        userId: userData.id,
        content: comment,
      }),
    });

    if (response.status === 200) {
      try {
        await reloadCmts();
        // await reload();
      } catch (error) {
        // Handle errors if needed
        console.error("Error during reloading:", error);
      }
    } else {
    }
  };

  const handleSubmit = () => {
    if (comment.trim() === "") {
      // Không cho phép gửi comment trống
      return;
    }

    console.log("Comment: " + comment);
    onSubmit(comment);
    setComment("");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri: userData?.image,
        }}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a comment..."
          value={comment}
          onChangeText={(e) => setComment(e)}
        />
      </View>
      <Button title="Post" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    // paddingHorizontal: 2,
    paddingVertical: 2,
    borderTopColor: "#eee",
    borderTopWidth: 1,
    height: 70,
    width: "180%",
    marginBottom: 50,
  },
  inputContainer: {
    outlineStyle: "none",

    borderRadius: 5,
    marginRight: 10,
    width: "35%",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 10,
  },
  input: {
    height: 35,
    paddingHorizontal: 10,
    outlineStyle: "none",
  },
});

export default CreateComment;

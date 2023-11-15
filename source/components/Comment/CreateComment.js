import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Image } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';

const userData = JSON.parse(await AsyncStorage.getItem('userData'));

const CreateComment = ({ onSubmit }) => {
  const [comment, setComment] = useState("");

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
          onChangeText={setComment}
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

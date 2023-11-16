import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";

import CommentData from "../../data/CommentData";
import { useEffect, useState } from "react";
// export default function Comments({ closeComment }) {
import { AntDesign } from "@expo/vector-icons";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { BASE_API_URL } from "@env";

export default function Comments({ closeComment, comments, postId }) {
  const width = 200;

  console.log("Comments: " + comments);

  const [data, setData] = useState(CommentData);

  useEffect(
    () => {
      setData(comments);
    },
    [],
    [data]
  );

  const onSubmit = async (comment) => {
    const userData = JSON.parse(await AsyncStorage.getItem("userData"));

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
      const dataNew = await response.json();

      setData(dataNew);
    } else {
      console.log("Add comment failed: " + response.status);
    }
    // console.log("On submit oke");
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.hContainer,
          { justifyContent: "flex-end", marginRight: 30 },
        ]}
      >
        <TouchableOpacity
          style={{ width: 30, height: 30, marginTop: 40 }}
          onPress={() => {
            closeComment();
          }}
        >
          <AntDesign
            name="closecircleo"
            size={30}
            color="gray"
            style={{ position: "absolute", top: 20 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.CommentContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Comment item={item}></Comment>}
        ></FlatList>
        <CreateComment onSubmit={onSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "96%",
    backgroundColor: "#FFFF",
    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",
    position: "absolute",

    bottom: 0,
  },

  CommentContainer: {
    justifyContent: "flex-start",
    marginLeft: 30,
    marginTop: 30,
    height: "100%",
    alignSelf: "flex-start",
  },
  hContainer: {
    flexDirection: "row",
    width: "100%",
    // justifyContent: "center",
    alignItems: "flex-end",
  },
});

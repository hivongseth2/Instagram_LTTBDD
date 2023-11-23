import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";

import { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { BASE_API_URL } from "@env";

export default function CommentsReels({ closeComment, dataCmt, postId }) {
  const width = 200;
  const [comments, setComments] = useState({});
  const [flag, setFlag] = useState(false);

  const [data, setData] = useState({});
  const reloadCmts = () => {
    setFlag(!flag);
  };

  useEffect(() => {
    setData(dataCmt);
  }, []);
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
        <CreateComment
          postId={postId}
          reloadCmts={reloadCmts}
          // comments={comments}
        />
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

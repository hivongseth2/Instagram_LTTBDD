import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { format } from "date-fns";

const Comment = ({ item }) => {
  const [like, setLike] = useState(false);
  console.log("Item in comment: " + item);
  return (
    <View style={styles.commentContainer}>
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={styles.avatar}
          source={{
            uri: item.avatar,
          }}
        />
        <View style={styles.vContainer}>
          <View
            style={{ flexDirection: "column", justifyContent: "space-around" }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.username}>{item.name}</Text>
              <Text style={styles.time}>
                {format(new Date(item.time), "HH:mm dd/MM")}

                {/* {item.time} */}
              </Text>
            </View>
            <Text style={{ marginLeft: 5, width: 250 }}>{item.content}</Text>
          </View>
        </View>
      </View>

      {like ? (
        <FontAwesome
          style={{ marginRight: 20, marginTop: 10 }}
          name="heart"
          size={15}
          color="#D80032"
          onPress={() => {
            setLike(!like);
          }}
        />
      ) : (
        <FontAwesome
          style={{ marginRight: 20, marginTop: 10 }}
          name="heart-o"
          size={15}
          color="gray"
          onPress={() => {
            setLike(!like);
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    alignContent: "center",
    // alignItems: "center",
    flex: 1,
    width: "100%",
    marginBottom: 20,
  },
  time: {
    // fontWeight: "400",
    color: "#B4B4B3",
    alignSelf: "flex-end",
    alignContent: "flex-end",
    textAlign: "right",

    fontSize: 12,
    marginLeft: "auto",
    fontWeight: "bold",
  },
  username: {
    fontWeight: "bold",
    marginRight: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,

    marginRight: 10,
  },
  vContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 5,
  },
});

export default Comment;
